// The text a language still needs, added to its translation files
// (src/i18n/messages/<lang>/ui.json and content.json) with an empty value
// for the translator to fill in. See src/i18n/translate.ts.
//
// 1. In .env.local:
//      I18N_PREVIEW_LOCALES=ja
//      I18N_MISSING_FILE=.i18n-missing.jsonl
// 2. npm run dev
// 3. npm run i18n:missing -- ja          (or: -- ja http://localhost:3009)
//    Opens every page of the sitemap as /ja/… (which redirects to /jp/…);
//    the server writes each English text without a translation to
//    .i18n-missing.jsonl, and this script adds them to the files. Run it
//    again after translating: nothing is added once every page is translated.
//    Only some pages: list their paths after the address,
//      npm run i18n:missing -- ja http://localhost:3009 / /seminyak/ /contact/
//
// npm run i18n:missing -- merge   no crawl: adds what is already in
//    .i18n-missing.jsonl, for every language. The GitHub check
//    (.github/workflows/i18n.yml) uses it after a build that had
//    I18N_PREVIEW_LOCALES=ja,ko,zh,hi and I18N_MISSING_FILE set: the build
//    renders every page in every language, so it writes the file itself.
//
// npm run i18n:status   how many texts each language has, and how many are still empty.

import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const messagesDir = join(root, "src", "i18n", "messages");
const missingFile = join(root, process.env.I18N_MISSING_FILE || ".i18n-missing.jsonl");
const LOCALES = ["ja", "ko", "zh", "hi"];

const read = (locale, file) => JSON.parse(readFileSync(join(messagesDir, locale, `${file}.json`), "utf8"));
const write = (locale, file, messages) =>
  writeFileSync(join(messagesDir, locale, `${file}.json`), JSON.stringify(messages, null, 2) + "\n");

const [command, base = "http://localhost:3009", ...only] = process.argv.slice(2);

if (command === "status" || !command) {
  for (const locale of LOCALES) {
    const counts = ["ui", "content"].map((file) => {
      const values = Object.values(read(locale, file));
      return `${file} ${values.filter(Boolean).length}/${values.length}`;
    });
    console.log(`${locale}: ${counts.join(", ")} translated`);
  }
  process.exit(0);
}

/**
 * Adds each missing text in the file to the messages file it belongs to,
 * with an empty value. A text Client Components need (ui) that content.json
 * already translates is copied over.
 */
function merge(locales) {
  if (!existsSync(missingFile)) {
    console.log("Nothing missing (or the server was not started with I18N_MISSING_FILE).");
    return;
  }
  const entries = readFileSync(missingFile, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  for (const locale of locales) {
    const files = { ui: read(locale, "ui"), content: read(locale, "content") };
    let added = 0;
    // Text a component put together from translated pieces is not added: those
    // with English words left in are listed, as a sign that the component builds
    // a sentence the translation memory cannot reach (it needs a template, t()).
    // Names are not English words: the texts the language keeps as written and
    // the Latin-letter runs inside its translations (Balinese Massage, IDR…)
    // are taken out before looking.
    const names = new Set(["IDR", "WhatsApp", "VISA", "Visa", "Mastercard"]);
    for (const [en, tr] of Object.entries({ ...files.content, ...files.ui })) {
      if (tr === en) names.add(en);
      else for (const m of tr.matchAll(/[A-Za-z][A-Za-z0-9&.'’\- ]*[A-Za-z0-9]/g)) names.add(m[0].trim());
    }
    const byLength = [...names].filter(Boolean).sort((a, b) => b.length - a.length);
    const englishLeft = (text) => /[A-Za-z]{2,}/.test(byLength.reduce((t, n) => (t.includes(n) ? t.split(n).join(" ") : t), text));
    const review = new Set();
    for (const entry of entries) {
      if (entry.locale !== locale) continue;
      if (entry.mixed) {
        if (englishLeft(entry.text)) review.add(entry.text);
        continue;
      }
      const target = files[entry.file] ? entry.file : "content";
      if (entry.text in files[target]) continue;
      const known = files.content[entry.text] || files.ui[entry.text] || "";
      files[target][entry.text] = known;
      if (!known) added++;
    }
    write(locale, "ui", files.ui);
    write(locale, "content", files.content);
    console.log(`${locale}: ${added} new texts to translate in src/i18n/messages/${locale}/ (empty values).`);
    if (review.size) {
      console.log(`\n${review.size} put-together texts still have English words (check for brand or place names, else a template is needed):`);
      for (const text of review) console.log(`  ${text.length > 110 ? text.slice(0, 110) + "…" : text}`);
    }
  }
  rmSync(missingFile, { force: true });
}

if (command === "merge") {
  merge(LOCALES);
  process.exit(0);
}

const locale = command;
if (!LOCALES.includes(locale)) {
  console.error(`usage: npm run i18n:missing -- <${LOCALES.join("|")}|merge> [base URL]`);
  process.exit(1);
}

// Crawl: the pages asked for, or every page of the English sitemap, in the language.
rmSync(missingFile, { force: true });
const sitemap = only.length ? "" : await fetch(`${base}/sitemap.xml`).then((res) => res.text());
const paths = only.length ? only : [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
let failed = 0;
for (const path of paths) {
  const res = await fetch(`${base}/${locale}${path}`);
  if (!res.ok) {
    failed++;
    console.warn(`${res.status} /${locale}${path}`);
  }
}
console.log(`${paths.length} pages opened in ${locale}${failed ? `, ${failed} failed` : ""}.`);
merge([locale]);
