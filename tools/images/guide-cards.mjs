/**
 * Card copies of the guide covers: for every cover in public/images/guide/
 * that is wider than a card ever needs (the 1920px files the article banners
 * use), a 240px, a 768px and a 1200px copy beside it ("-240.webp" ...), and
 * the srcset of each of those covers (src/lib/blog/card-copies.json), which
 * the cards read (src/lib/blog/cardImage.ts). A copy is never enlarged: a
 * cover narrower than one stands in for it.
 *
 * A card shows about 390px wide on a phone and 430px on a desktop, and the
 * article's sidebar and its previous/next links show the same covers at 60 to
 * 72px: all of them loaded the 1920px file (47 to 141 KB each, audit 26 Nov).
 *
 *   node tools/images/guide-cards.mjs          make the missing copies
 *   node tools/images/guide-cards.mjs --check  only list missing copies (exit 1 if any)
 *
 * It also writes the size of every picture in that folder
 * (src/lib/blog/image-sizes.json): the photos inside an article have no
 * width and height in their HTML, so the sanitizer gives them one
 * (src/lib/blog/sanitize.ts) and the text no longer moves as they arrive.
 *
 * Run it after adding or replacing a picture in public/images/guide/. A
 * picture uploaded in /admin/ is not in that folder and is shown as it is.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "../..");
const dir = path.join(root, "public/images/guide");
const list = path.join(root, "src/lib/blog/card-copies.json");
const sizesFile = path.join(root, "src/lib/blog/image-sizes.json");
const check = process.argv.includes("--check");
const WIDTHS = [240, 768, 1200];

// The covers themselves, not the copies or the banners' phone crops ("-sm").
const covers = fs
  .readdirSync(dir)
  .filter((name) => name.endsWith(".webp") && !/-(sm|240|768|1200)\.webp$/.test(name))
  .sort();

const srcSets = {};
let missing = 0;
for (const name of covers) {
  const full = path.join(dir, name);
  const { width } = await sharp(full).metadata();
  if (width <= WIDTHS[1] * 1.25) continue;
  const set = [];
  for (const w of WIDTHS) {
    if (width <= w * 1.1) {
      set.push(`/images/guide/${name} ${width}w`);
      break;
    }
    const url = `/images/guide/${name.slice(0, -".webp".length)}-${w}.webp`;
    set.push(`${url} ${w}w`);
    const copy = path.join(root, "public", url);
    if (fs.existsSync(copy)) continue;
    missing++;
    if (check) {
      console.log("missing", path.relative(root, copy));
      continue;
    }
    await sharp(full).resize({ width: w }).webp({ quality: 78 }).toFile(copy);
    console.log("made", path.relative(root, copy), fs.statSync(full).size, "->", fs.statSync(copy).size);
  }
  srcSets[`/images/guide/${name}`] = set.join(", ");
}

// Width and height of every picture in the folder but the copies.
const sizes = {};
for (const name of fs.readdirSync(dir).filter((n) => /\.(webp|png|jpe?g)$/i.test(n) && !/-(240|768|1200)\.webp$/.test(n)).sort()) {
  const { width, height } = await sharp(path.join(dir, name)).metadata();
  sizes[`/images/guide/${name}`] = [width, height];
}

for (const [file, data] of [[list, srcSets], [sizesFile, sizes]]) {
  const json = JSON.stringify(data, null, 2) + "\n";
  // Git may have written the file with Windows line ends.
  if (fs.existsSync(file) && fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n") === json) continue;
  missing++;
  if (check) console.log("out of date", path.relative(root, file));
  else fs.writeFileSync(file, json);
}
if (check && missing) process.exit(1);
console.log(check ? "all copies present" : `done (${Object.keys(srcSets).length} covers)`);
