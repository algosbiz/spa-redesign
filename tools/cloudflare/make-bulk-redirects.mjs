/**
 * Write tools/cloudflare/bulk-redirects.csv, a Cloudflare Bulk Redirect list
 * made from the website's own redirect map (liveRedirects in
 * src/data/redirects.ts), so old URLs reach their final address in one hop
 * for http as well as https, on www as well as spabalimoon.com.
 *
 *   npm run cloudflare:redirects
 *
 * Then upload the CSV to the Bulk Redirect list in Cloudflare (replacing the
 * old entries). Run it again whenever liveRedirects changes.
 *
 * Why Cloudflare: http:// requests are sent to https:// (Vercel, 308) before
 * next.config.ts runs, so http://www.spabalimoon.com/old-page/ took two hops.
 * Cloudflare answers before that.
 *
 * Every line uses Subpath matching, without the trailing slash, so
 * /old-page, /old-page/ and /old-page/anything all match, and so that the
 * documented "most specific path wins" rule always picks an old URL's line
 * over the last line (any other www URL → the same path on spabalimoon.com).
 * Line format (no header row): source, target, status, preserve query string,
 * include subdomains, subpath matching, preserve path suffix.
 */
import { writeFileSync } from "node:fs";
import { liveRedirects } from "../../src/data/redirects.ts";
import { sitemapPages } from "../../src/data/sitemap.ts";

const HOST = "spabalimoon.com";
const ORIGIN = `https://${HOST}`;
const trim = (path) => (path.length > 1 ? path.replace(/\/$/, "") : path);

/** "/news/:slug/" → "/news" (only this one shape is used). */
function patternPrefix(path) {
  const match = /^(\/[^:()]+)\/:[a-z]+\/$/i.exec(path);
  if (!match) throw new Error(`Unsupported redirect pattern: ${path}`);
  return match[1];
}

const lines = new Map(); // source path → CSV line
function add(source, target, preserveSuffix) {
  const line = [`${HOST}${source}`, `${ORIGIN}${target}`, 301, "TRUE", "TRUE", "TRUE", preserveSuffix ? "TRUE" : "FALSE"].join(",");
  const existing = lines.get(source);
  if (existing && existing !== line) throw new Error(`Two redirects for ${source}:\n  ${existing}\n  ${line}`);
  lines.set(source, line);
}

// Patterns first: /news/:slug/ → /guide/:slug/ becomes /news → /guide with
// the rest of the path kept.
for (const { from, to } of liveRedirects.filter((r) => r.from.includes(":"))) {
  add(patternPrefix(from), patternPrefix(to), true);
}
// Then fixed URLs. "/blog/" → "/guide/" is the same line as its pattern.
for (const { from, to } of liveRedirects.filter((r) => !r.from.includes(":"))) {
  if (from.includes("?")) throw new Error(`Cloudflare source URLs cannot have a query string: ${from}`);
  const source = trim(from);
  if (lines.has(source) && lines.get(source).split(",")[1] === `${ORIGIN}${trim(to)}`) continue;
  add(source, to, false);
}

// A line must never catch a page that exists today.
const pages = [...sitemapPages.map((p) => new URL(p.loc).pathname), "/guide/"];
for (const source of lines.keys()) {
  const hit = pages.find((page) => page === source || page.startsWith(`${source}/`));
  if (hit) throw new Error(`Old URL ${source} would also catch the live page ${hit}`);
}

// Last line: any other www URL → the same path on spabalimoon.com.
const csv = [...lines.values(), [`www.${HOST}`, ORIGIN, 301, "TRUE", "FALSE", "TRUE", "TRUE"].join(",")];
writeFileSync(new URL("bulk-redirects.csv", import.meta.url), `${csv.join("\n")}\n`);
console.log(`tools/cloudflare/bulk-redirects.csv: ${csv.length} redirects.`);
