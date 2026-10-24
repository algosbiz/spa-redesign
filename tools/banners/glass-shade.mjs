/**
 * How dark each phone banner's glass should be (src/data/bannerGlass.ts).
 *
 *   node tools/banners/glass-shade.mjs
 *
 * On phones PageBanner shows its `mobilePhoto` above the text, which sits on
 * a blurred copy of the same photo under a dark gradient (outcall.css, 19).
 * The photos differ a lot in brightness, so one gradient left some banners
 * dark and made others too pale for white text (24 Oct). For every
 * `-wide-sm` photo this simulates the glass as the CSS draws it (the photo
 * squeezed into a 375x800 banner, blurred 22px, brightness 1.08, the box
 * scaled 1.12) and finds the gradient's final alpha that brings the text
 * area to the homepage glass's mean luminance (0.095, home-v2.css), raised
 * where white text would fall under 4.5:1 on the brightest tenth of it.
 * Paste the output into src/data/bannerGlass.ts.
 */
import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import sharp from "sharp";

const PUBLIC = join(import.meta.dirname, "..", "..", "public");
const W = 375;
const H = 800;
const TEXT = [175, 670]; // under the 163px photo, above the torn edge
const TARGET = 0.095;
const FLOOR = 0.2; // the photo still melts into a slightly darker glass

const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const lum = (r, g, b) => 0.2126 * lin(r / 255) + 0.7152 * lin(g / 255) + 0.0722 * lin(b / 255);

/** The gradient of outcall.css, 19: A·.125 at the top, A·.55 at 100px, A·.9 at 220px, A at the bottom. */
function alphaAt(y, A) {
  const pts = [
    [0, A * 0.125],
    [100, A * 0.55],
    [220, A * 0.9],
    [H, A],
  ];
  for (let i = 1; i < pts.length; i++) {
    const [y0, a0] = pts[i - 1];
    const [y1, a1] = pts[i];
    if (y <= y1) return a0 + ((a1 - a0) * (y - y0)) / (y1 - y0);
  }
  return A;
}

async function glass(file) {
  const { data } = await sharp(file)
    .resize(W, H, { fit: "fill" })
    .blur(22)
    .modulate({ brightness: 1.08 })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return (A) => {
    const L = [];
    for (let py = TEXT[0]; py < TEXT[1]; py += 2) {
      const ey = Math.round(H / 2 + (py - H / 2) / 1.12);
      const a = alphaAt(ey, A);
      for (let px = 15; px < W - 15; px += 3) {
        const i = (ey * W + Math.round(W / 2 + (px - W / 2) / 1.12)) * 3;
        L.push(lum(data[i] * (1 - a) + 28 * a, data[i + 1] * (1 - a) + 26 * a, data[i + 2] * (1 - a) + 29 * a));
      }
    }
    L.sort((p, q) => p - q);
    return { mean: L.reduce((p, q) => p + q, 0) / L.length, p90: L[Math.floor(0.9 * (L.length - 1))] };
  };
}

/** The smallest alpha in [0, 0.85] for which `ok` holds. */
function solve(measure, ok) {
  let lo = 0;
  let hi = 0.85;
  for (let i = 0; i < 14; i++) {
    const A = (lo + hi) / 2;
    if (ok(measure(A))) hi = A;
    else lo = A;
  }
  return hi;
}

const photos = readdirSync(PUBLIC, { recursive: true })
  .filter((f) => f.endsWith("-wide-sm.webp"))
  .sort();
for (const f of photos) {
  const measure = await glass(join(PUBLIC, f));
  const forMean = solve(measure, (m) => m.mean <= TARGET);
  const forText = solve(measure, (m) => 1.05 / (m.p90 + 0.05) >= 4.5);
  const shade = Math.max(FLOOR, forMean, forText);
  console.log(`  "/${relative(PUBLIC, join(PUBLIC, f)).split(sep).join("/")}": ${shade.toFixed(2)},`);
}
