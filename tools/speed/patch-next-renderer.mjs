/**
 * Puts editPage (page-edit.mjs) into Next's renderer, so that every page the
 * site serves is edited as it is drawn: at build time, and again on the server
 * after an admin save (revalidatePath). Method and reasons: README.md here.
 *
 *   node tools/speed/patch-next-renderer.mjs
 *
 * Runs after every install and before every build (postinstall and prebuild in
 * package.json). It can run any number of times and replaces an older version
 * of itself. The dev server uses another runtime and is not patched.
 *
 * How: Next renders through precompiled, minified files
 * (next/dist/compiled/next-server/app-page*.runtime.prod.js). The last step of
 * every page is the function that inserts server HTML before </head>: one for
 * Node streams (the one Next 16 uses on a Node server) and one for web
 * streams. Both are found by their shape, not by their minified names, and
 * wrapped: the document is held to its end and edited whole. If a Next upgrade
 * changes a shape, this stops with an error rather than letting the build go
 * on without it; check-build.mjs then looks at what was really built.
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { editPage } from "./page-edit.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.join(root, "node_modules/next/dist/compiled/next-server");
// The builds of this version use the turbo file; the other is for a webpack build.
const REQUIRED = ["app-page-turbo.runtime.prod.js", "app-page.runtime.prod.js"];
const BACKUP = ".before-speed-patch";

// The site's pictures: "/images/x.webp" -> "1050 / 700" (read from each file's header).
function sizeOf(file) {
  const b = fs.readFileSync(file);
  if (/\.png$/i.test(file) && b.toString("latin1", 1, 4) === "PNG") return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b.toString("latin1", 8, 12) === "WEBP") {
    const kind = b.toString("latin1", 12, 16);
    if (kind === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    if (kind === "VP8L") return [1 + (b.readUInt32LE(21) & 0x3fff), 1 + ((b.readUInt32LE(21) >> 14) & 0x3fff)];
    if (kind === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    for (let i = 2; i + 9 < b.length; ) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}
const publicDir = path.join(root, "public");
const sizes = {};
for (const file of fs.existsSync(path.join(publicDir, "images")) ? fs.readdirSync(path.join(publicDir, "images"), { recursive: true }).map(String).sort() : []) {
  if (!/\.(?:webp|png|jpe?g)$/i.test(file)) continue;
  const size = sizeOf(path.join(publicDir, "images", file));
  if (size) sizes["/images/" + file.split(path.sep).join("/")] = size.join(" / ");
}

const edit = editPage.toString();
const MARK = `/*sbm-speed:${createHash("sha256").update(edit).update(JSON.stringify(sizes)).update("wrapper 2").digest("hex").slice(0, 12)}*/`;

// function E(e){let t=!1,r=!1;return new i.Transform({async transform(n,a,i){r=!0;try{let r=await e();if(t)
const NODE = /function (\w+)\((\w+)\)(\{let (\w+)=!1,(\w+)=!1;return new \w+\.Transform\(\{async transform\(\w+,\w+,\w+\)\{\5=!0;try\{let \w+=await \2\(\);if\(\4\))/g;
// function _(e){let t=!1,r=!1;return new TransformStream({async transform(n,a){r=!0;let i=await e();if(t){
const WEB = /function (\w+)\((\w+)\)(\{let (\w+)=!1,(\w+)=!1;return new TransformStream\(\{async transform\(\w+,\w+\)\{\5=!0;let \w+=await \2\(\);if\(\4\)\{)/g;

// An error in the edit sends the page as Next drew it.
const HELPERS = `globalThis.__sbmSpeed=(function(){
var page=${edit};
var sizes=${JSON.stringify(sizes)};
function edit(html){try{return page(html,sizes)}catch(e){console.warn("[speed] page sent unedited:",e&&e.stack);return html}}
return{
node:function(t){var chunks=[],push=t.push.bind(t);t.push=function(chunk,encoding){if(chunk===null){if(chunks.length){var html=Buffer.concat(chunks).toString("utf8");chunks=[];push(Buffer.from(edit(html)))}return push(null)}chunks.push(Buffer.from(chunk,encoding));return true};return t},
web:function(inner){var dec=new TextDecoder(),enc=new TextEncoder(),html="";var outer=new TransformStream({transform:function(chunk){html+=dec.decode(chunk,{stream:true})},flush:function(ctl){html+=dec.decode();if(html)ctl.enqueue(enc.encode(edit(html)))}});inner.readable.pipeTo(outer.writable).catch(function(){});return{writable:inner.writable,readable:outer.readable}}
}})();`;

function wrap(source, shape, kind) {
  const found = [...source.matchAll(shape)].filter((m) => source.slice(m.index, m.index + 900).includes("CLOSED.HEAD"));
  if (found.length !== 1) throw new Error(`${found.length} ${kind}-stream head insertions of the expected shape, 1 expected`);
  const [[whole, name, arg, rest]] = found;
  const at = found[0].index;
  const original = `__sbm_${kind}_head`;
  return `${source.slice(0, at)}function ${name}(${arg}){return globalThis.__sbmSpeed.${kind}(${original}(${arg}))}function ${original}(${arg})${rest}${source.slice(at + whole.length)}`;
}

function patch(file) {
  const target = path.join(dir, file);
  const current = fs.readFileSync(target, "utf8");
  if (current.startsWith(MARK)) return "already patched";
  const patched = current.startsWith("/*sbm-speed:");
  if (patched && !fs.existsSync(target + BACKUP)) throw new Error("patched by another version and its original is gone: run npm ci");
  const original = patched ? fs.readFileSync(target + BACKUP, "utf8") : current;
  if (!patched) fs.writeFileSync(target + BACKUP, original);
  fs.writeFileSync(target, `${MARK}\n${HELPERS}\n${wrap(wrap(original, NODE, "node"), WEB, "web")}`);
  return "patched";
}

if (!fs.existsSync(dir)) {
  console.log("speed: next is not installed, nothing to patch");
  process.exit(0);
}
console.log(`speed: ${Object.keys(sizes).length} pictures measured`);
let failed = false;
for (const file of fs.readdirSync(dir).filter((f) => /^app-page.*\.runtime\.prod\.js$/.test(f))) {
  try {
    console.log(`speed: ${file} ${patch(file)}`);
  } catch (e) {
    if (REQUIRED.includes(file)) {
      failed = true;
      console.error(`speed: ${file}: ${e.message}. Next has changed: update the shapes in tools/speed/patch-next-renderer.mjs.`);
    } else console.warn(`speed: ${file} not patched (${e.message}); this build does not use it`);
  }
}
process.exit(failed ? 1 : 0);
