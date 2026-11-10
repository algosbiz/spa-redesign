/**
 * Phone copies of the price cards' photos (TreatmentPricing): for every photo
 * in a page's "images" list under /images/services/ or /images/treatments/,
 * a 700px-wide "-sm.webp" beside it, which phones load instead of the
 * 1050px file (srcset in src/components/sections/TreatmentPricing.tsx).
 *
 *   node tools/images/price-card-sm.mjs          make the missing copies
 *   node tools/images/price-card-sm.mjs --check  only list missing copies (exit 1 if any)
 *
 * Run it after adding or replacing a price-card photo.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "../..");
const check = process.argv.includes("--check");

/** Every "images" array of a TreatmentPricing block in the page JSON files. */
function priceImages() {
  const found = new Set();
  const visit = (node) => {
    if (Array.isArray(node)) return node.forEach(visit);
    if (!node || typeof node !== "object") return;
    if (node.type === "TreatmentPricing" && Array.isArray(node.props?.images)) node.props.images.forEach((src) => found.add(src));
    Object.values(node).forEach(visit);
  };
  const dir = path.join(root, "src/content");
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".json")) visit(JSON.parse(fs.readFileSync(p, "utf8")));
  });
  walk(dir);
  return [...found].filter((src) => /^\/images\/(services|treatments)\/.+\.webp$/.test(src));
}

let missing = 0;
for (const src of priceImages()) {
  const full = path.join(root, "public", src);
  const small = full.replace(/\.webp$/, "-sm.webp");
  if (fs.existsSync(small)) continue;
  missing++;
  if (check) { console.log("missing", path.relative(root, small)); continue; }
  await sharp(full).resize({ width: 700 }).webp({ quality: 78 }).toFile(small);
  console.log("made", path.relative(root, small), fs.statSync(full).size, "->", fs.statSync(small).size);
}
if (check && missing) process.exit(1);
console.log(check ? "all copies present" : `done (${missing} made)`);
