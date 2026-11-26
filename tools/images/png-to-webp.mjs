/**
 * WebP copies of the site's PNG pictures, and the code pointed at them.
 *
 *   - Decorations (/images/shape/, /images/about/, /images/pricing/): the
 *     leaves, towels, trays and flowers beside the sections. Photographs with
 *     transparency, so a lossy WebP looks the same (compared side by side,
 *     26 Nov) at about half the bytes: on a desktop they were some 290 KB of
 *     every page. Only where the WebP is at least 15% smaller: a few small
 *     flat ones are smaller as PNG and stay so.
 *   - The price list's treatment icons (/images/icon/icon-spa/): 383px files
 *     shown 30px wide; a 96px lossless WebP of each.
 *
 *   node tools/images/png-to-webp.mjs            make the missing WebP files
 *   node tools/images/png-to-webp.mjs --rewrite  also replace "<name>.png" by
 *                                                "<name>.webp" in src/
 *
 * The PNG files stay: a page a browser or Cloudflare still holds from before
 * may ask for them. A name in src/ that could mean a converted file and one
 * that stays PNG (a CSS [src$="shape2.png"]) is listed, not replaced.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "../..");
const pub = path.join(root, "public");
const rewrite = process.argv.includes("--rewrite");

const walk = (dir, keep) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p, keep) : keep(p) ? [p] : [];
  });
const urlOf = (file) => "/" + path.relative(pub, file).split(path.sep).join("/");

const GROUPS = [
  {
    dirs: ["images/shape", "images/about", "images/pricing"],
    encode: (file) => sharp(file).webp({ quality: 85, alphaQuality: 90, effort: 6 }).toBuffer(),
    worth: (png, webp) => webp <= png * 0.85,
  },
  {
    dirs: ["images/icon/icon-spa"],
    encode: (file) => sharp(file).resize({ width: 96 }).webp({ lossless: true, effort: 6 }).toBuffer(),
    worth: () => true,
  },
];

// Every PNG the code names, to convert only what is in use.
const sources = walk(path.join(root, "src"), (p) => /\.(tsx?|css|json)$/.test(p));
const text = new Map(sources.map((p) => [p, fs.readFileSync(p, "utf8")]));
const named = [...text.values()].join("\n");

const converted = new Set();
const allPngs = walk(path.join(pub, "images"), (p) => p.endsWith(".png")).map(urlOf);
for (const group of GROUPS) {
  for (const dir of group.dirs) {
    for (const file of walk(path.join(pub, dir), (p) => p.endsWith(".png"))) {
      const url = urlOf(file);
      if (!named.includes(url) && !named.includes(encodeURI(url))) continue;
      const target = file.slice(0, -".png".length) + ".webp";
      if (fs.existsSync(target)) {
        converted.add(url);
        continue;
      }
      const png = fs.statSync(file).size;
      const webp = await group.encode(file);
      if (!group.worth(png, webp.length)) {
        console.log("stays PNG", url, png, "->", webp.length);
        continue;
      }
      fs.writeFileSync(target, webp);
      converted.add(url);
      console.log("made", urlOf(target), png, "->", webp.length);
    }
  }
}

if (rewrite) {
  // A name in the code: a whole path, or the end of one (CSS [src$=...], a file name).
  const TOKEN = /[A-Za-z0-9_/.%-]*[A-Za-z0-9_%-]\.png\b/g;
  const ambiguous = new Set();
  for (const [file, before] of text) {
    const after = before.replace(TOKEN, (token) => {
      const name = decodeURIComponent(token);
      const matches = allPngs.filter((url) => url === name || url.endsWith(name.startsWith("/") ? name : `/${name}`) || url.endsWith(name));
      if (!matches.length || !matches.some((url) => converted.has(url))) return token;
      if (!matches.every((url) => converted.has(url))) {
        ambiguous.add(`${path.relative(root, file)}: ${token}`);
        return token;
      }
      return token.slice(0, -".png".length) + ".webp";
    });
    if (after !== before) {
      fs.writeFileSync(file, after);
      console.log("rewrote", path.relative(root, file));
    }
  }
  for (const a of ambiguous) console.log("left as it is (names a PNG that stays too):", a);
}
console.log(`${converted.size} pictures have a WebP copy`);
