/**
 * Looks at the pages that were really built (after every build, postbuild in
 * package.json): no script or stylesheet may be fetched as a page opens. Fails
 * the build if one is, so that a Next upgrade cannot quietly undo tools/speed/.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const app = path.join(root, ".next/server/app");
const pages = fs
  .readdirSync(app, { recursive: true })
  .map(String)
  .filter((file) => file.endsWith(".html"))
  .map((file) => [file.split(path.sep).join("/"), fs.readFileSync(path.join(app, file), "utf8")])
  .filter(([, html]) => /<html\b[^>]*\bdata-site\b/.test(html));

const problems = [];
let bytes = 0;
let heavy = 0;
for (const [file, html] of pages) {
  bytes += html.length;
  if (/<script\b[^>]*\bsrc="\/_next\//.test(html)) problems.push(`${file}: scripts load as the page opens`);
  if (/<link\b[^>]*\brel="stylesheet"/.test(html)) problems.push(`${file}: a stylesheet is linked`);
  if (!html.includes("__sbmHydrated")) problems.push(`${file}: the inline loader is missing`);
  if (/self\.__next_f\.push\([^<]*@keyframes/.test(html)) heavy++;
}
if (!pages.length) problems.push("no built page found in .next/server/app");
if (problems.length) {
  console.error(`speed: ${problems.length} problems\n  ${problems.slice(0, 12).join("\n  ")}`);
  process.exit(1);
}
// Heavier, not broken: said, but the build goes on.
if (heavy) console.warn(`speed: ${heavy} pages carry a second copy of a stylesheet in their data for React`);
console.log(`speed: ${pages.length} pages checked, ${Math.round(bytes / pages.length / 1024)} KB of HTML on average before compression`);
