// Translates the texts still empty in src/i18n/messages/<lang>/ui.json and
// content.json (added by `npm run i18n:missing`) with Claude, for every
// language at once. Translations that are already there are never changed.
//
//   ANTHROPIC_API_KEY=… npm run i18n:translate      translate what is empty
//   npm run i18n:translate -- --check              list what is still empty; exit 1 if anything is
//   npm run i18n:translate -- --dry-run            show the first request instead of sending it
//
// The GitHub check (.github/workflows/i18n.yml) runs it on every pull request
// and commits the result to the pull request, for a person to read before
// merging. The rules it follows are the site's (owner, 3 Nov 2026): the brand,
// treatment, service and place names, addresses and prices stay in Latin
// letters as written; the rest is translated. A text whose translation loses
// a price or a {placeholder} is left empty, so the check lists it.

import { readFileSync, writeFileSync, appendFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const messagesDir = join(root, "src", "i18n", "messages");
const FILES = ["ui", "content"];

const LANGUAGES = {
  ja: {
    name: "Japanese",
    script: /[぀-ヿ一-鿿]/,
    notes: "Polite です/ます style. Join names with の or other natural Japanese, as in 「Bali SeminyakのBalinese Massage」.",
  },
  ko: {
    name: "Korean",
    script: /[가-힯]/,
    notes: "Polite 합니다/해요 style as in the examples. Join names with 의 or other natural Korean, as in 「Bali Seminyak의 Balinese Massage」.",
  },
  zh: {
    name: "Simplified Chinese",
    script: /[一-鿿]/,
    notes: "Simplified characters only. Join names with 的 or other natural Chinese, as in 「Bali Seminyak的Balinese Massage」.",
  },
  hi: {
    name: "Hindi",
    script: /[ऀ-ॿ]/,
    notes: "Devanagari script, everyday Hindi a traveller from India would use. Join names with में, का/की or other natural Hindi, as in 「Seminyak, Bali में Balinese Massage」.",
  },
};

const MODEL = process.env.I18N_MODEL || "claude-opus-5-5";
const BATCH_TEXTS = 40;
const BATCH_CHARS = 6000;
const EXAMPLES = 40;

const args = process.argv.slice(2);
const check = args.includes("--check");
const dryRun = args.includes("--dry-run");

const read = (locale, file) => JSON.parse(readFileSync(join(messagesDir, locale, `${file}.json`), "utf8"));
const write = (locale, file, messages) =>
  writeFileSync(join(messagesDir, locale, `${file}.json`), JSON.stringify(messages, null, 2) + "\n");

const load = () =>
  Object.fromEntries(Object.keys(LANGUAGES).map((locale) => [locale, Object.fromEntries(FILES.map((f) => [f, read(locale, f)]))]));

/** Each language's texts with an empty value, once each (a text can be empty in both files). */
function emptyTexts(messages) {
  return Object.fromEntries(
    Object.entries(messages).map(([locale, files]) => [
      locale,
      [...new Set(FILES.flatMap((f) => Object.entries(files[f]).filter(([, v]) => !v).map(([k]) => k)))],
    ])
  );
}

function report(messages) {
  const empty = emptyTexts(messages);
  const total = Object.values(empty).reduce((n, list) => n + list.length, 0);
  const lines = [];
  if (!total) lines.push("Every text has a translation in all four languages.");
  else {
    lines.push(`${total} texts still have no translation:`);
    for (const [locale, list] of Object.entries(empty)) {
      if (!list.length) continue;
      lines.push(`\n${LANGUAGES[locale].name} (${locale}), ${list.length}:`);
      for (const text of list.slice(0, 40)) lines.push(`  - ${text.length > 120 ? text.slice(0, 120) + "…" : text}`);
      if (list.length > 40) lines.push(`  … and ${list.length - 40} more`);
    }
    lines.push(
      "\nAdd them to src/i18n/messages/<lang>/ui.json or content.json, or let the check translate them",
      "(it needs the ANTHROPIC_API_KEY secret in the repository's Actions settings)."
    );
  }
  console.log(lines.join("\n"));
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### Translations\n\n${lines.join("\n")}\n`);
  return total;
}

if (check) process.exit(report(load()) ? 1 : 0);

// ---------------------------------------------------------------------------

const messages = load();
const empty = emptyTexts(messages);
if (!Object.values(empty).some((list) => list.length)) {
  report(messages);
  process.exit(0);
}

/**
 * The names the site keeps in Latin letters: texts every language left
 * exactly as they are in English (treatments, places, the brand, addresses).
 */
const keptNames = (() => {
  const sets = Object.values(messages).map(
    (files) => new Set(FILES.flatMap((f) => Object.entries(files[f]).filter(([k, v]) => v === k && /[A-Za-z]{3}/.test(k)).map(([k]) => k)))
  );
  // Not prices ("Biokos · IDR 179.000"), code (a CSS gradient) or long phrases.
  const isName = (text) => !/IDR|[(){}]|\d{2}/.test(text) && text.split(/\s+/).length <= 6;
  return [...sets[0]].filter((name) => isName(name) && sets.every((s) => s.has(name))).sort();
})();

const words = (text) => new Set(text.toLowerCase().match(/[a-z]{4,}/g) ?? []);

/** Existing translations most like the batch (shared words), so terms and tone stay the same. */
function examplesFor(locale, texts) {
  const all = { ...messages[locale].content, ...messages[locale].ui };
  const wanted = new Set(texts.flatMap((t) => [...words(t)]));
  const scored = [];
  for (const [en, tr] of Object.entries(all)) {
    if (!tr || tr === en || en.length > 300) continue;
    let score = 0;
    for (const w of words(en)) if (wanted.has(w)) score++;
    if (score) scored.push([score, en, tr]);
  }
  scored.sort((a, b) => b[0] - a[0] || a[1].length - b[1].length);
  const picked = scored.slice(0, EXAMPLES).map(([, en, tr]) => ({ en, tr }));
  // A few page titles, for the way names are joined.
  for (const en of Object.keys(all).filter((k) => / - Spa Bali Moon$/.test(k)).slice(0, 4)) {
    if (!picked.some((p) => p.en === en)) picked.push({ en, tr: all[en] });
  }
  return picked;
}

function batches(texts) {
  const out = [];
  let current = [];
  let chars = 0;
  for (const text of texts) {
    if (current.length && (current.length >= BATCH_TEXTS || chars + text.length > BATCH_CHARS)) {
      out.push(current);
      current = [];
      chars = 0;
    }
    current.push(text);
    chars += text.length;
  }
  if (current.length) out.push(current);
  return out;
}

const system = (locale) => {
  const { name, notes } = LANGUAGES[locale];
  return `You translate the website of Spa Bali Moon, a day spa in Seminyak, Bali, from English into ${name}. Its visitors are travellers choosing a massage or spa treatment, and each text you get is one piece of the site: a heading, a button, a sentence, an image description (alt text), a page title or a search result description.

How the site is translated:
- The brand (Spa Bali Moon, Bali Moon), every treatment, service, package and product name, place names (Bali, Seminyak, Kuta, Petitenget, Canggu…), street addresses, prices (IDR 159.000, with its dot), phone numbers, times, URLs and WhatsApp stay exactly as written, in Latin letters. The owner decided this so that visitors recognise the names they search for and use at the desk. The names already in use are listed below; a new name written the same way (a capitalised treatment or product, such as "Volcanic Stone Massage") is a name too.
- Everything else is translated, so every text that has ordinary words in it reads in ${name}. Join names with ${name} words rather than leaving a run of English, as the example titles do. ${notes}
- Keep {placeholders} in curly braces exactly as they are, and keep separators (·, |, –, —, /), line breaks and leading or trailing spaces and punctuation where the English has them.
- Match the terms and tone of the existing translations below, so the new text sits naturally beside them. Buttons and headings stay short.

Names kept in Latin letters:
${keptNames.join(" | ")}`;
};

const userMessage = (locale, texts) =>
  `Existing translations, for terms and tone:
${JSON.stringify(examplesFor(locale, texts), null, 0)}

Translate each of these texts into ${LANGUAGES[locale].name}, returning the same id with each:
${JSON.stringify(texts.map((text, id) => ({ id, text })), null, 0)}`;

const SCHEMA = {
  type: "object",
  properties: {
    translations: {
      type: "array",
      items: {
        type: "object",
        properties: { id: { type: "integer" }, text: { type: "string" } },
        required: ["id", "text"],
        additionalProperties: false,
      },
    },
  },
  required: ["translations"],
  additionalProperties: false,
};

const placeholders = (text) => (text.match(/\{[^{}]+\}/g) ?? []).sort().join(",");
const prices = (text) => (text.match(/IDR\s?[\d.,]+/g) ?? []).map((p) => p.replace(/\s/, " ")).sort().join(",");

/** Why a translation can't be used, or "" when it can. */
function problem(locale, en, tr) {
  if (!tr || !tr.trim()) return "empty";
  if (placeholders(en) !== placeholders(tr)) return "placeholders changed";
  if (prices(en) !== prices(tr.replace(/IDR(?=\d)/g, "IDR "))) return "prices changed";
  return "";
}

function warning(locale, en, tr) {
  const lost = keptNames.filter((n) => n.length > 3 && en.includes(n) && !tr.includes(n));
  if (lost.length) return `name not kept as written: ${lost.join(", ")}`;
  if (tr === en && !keptNames.includes(en)) return "left in English";
  if (tr !== en && !LANGUAGES[locale].script.test(tr)) return `no ${LANGUAGES[locale].name} letters`;
  return "";
}

if (dryRun) {
  const [locale, list] = Object.entries(empty).find(([, l]) => l.length);
  const [first] = batches(list);
  console.log(`--- system (${locale}) ---\n${system(locale)}\n\n--- user ---\n${userMessage(locale, first)}`);
  process.exit(0);
}

const { default: Anthropic } = await import("@anthropic-ai/sdk");
const client = new Anthropic({ maxRetries: 4 });

async function translateBatch(locale, texts) {
  const response = await client.beta.messages.create({
    model: MODEL,
    max_tokens: 16000,
    // If a safety check declines a text, the request is answered by the next model instead of failing.
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "medium", format: { type: "json_schema", schema: SCHEMA } },
    system: system(locale),
    messages: [{ role: "user", content: userMessage(locale, texts) }],
  });
  if (response.stop_reason === "refusal") throw new Error(`declined (${response.stop_details?.category ?? "no category"})`);
  if (response.stop_reason === "max_tokens") {
    if (texts.length === 1) throw new Error("the answer was cut off");
    // Too long for one answer: in two halves.
    const half = Math.ceil(texts.length / 2);
    return [...(await translateBatch(locale, texts.slice(0, half))), ...(await translateBatch(locale, texts.slice(half)))];
  }
  const block = response.content.find((b) => b.type === "text");
  const { translations } = JSON.parse(block?.text ?? "{}");
  const byId = new Map((translations ?? []).map((t) => [t.id, t.text]));
  return texts.map((_, id) => byId.get(id) ?? "");
}

let filled = 0;
const notes = [];
for (const [locale, list] of Object.entries(empty)) {
  if (!list.length) continue;
  let pending = list;
  // A second try for the texts whose translation could not be used.
  for (let attempt = 1; attempt <= 2 && pending.length; attempt++) {
    const retry = [];
    for (const batch of batches(pending)) {
      let results;
      try {
        results = await translateBatch(locale, batch);
      } catch (error) {
        if (error instanceof Anthropic.AuthenticationError || error instanceof Anthropic.PermissionDeniedError) {
          console.error(`The Claude API key was refused (${error.status}). Nothing was translated.`);
          process.exit(report(messages) ? 1 : 0);
        }
        const why = error instanceof Anthropic.APIError ? `API error ${error.status}: ${error.message}` : error.message;
        console.warn(`${locale}: ${batch.length} texts not translated (${why}).`);
        continue;
      }
      batch.forEach((en, i) => {
        const tr = results[i];
        const bad = problem(locale, en, tr);
        if (bad) {
          if (attempt === 1) retry.push(en);
          else notes.push(`${locale}: left empty (${bad}): ${en}`);
          return;
        }
        const warn = warning(locale, en, tr);
        if (warn) notes.push(`${locale}: check (${warn}): ${en} → ${tr}`);
        for (const f of FILES) if (en in messages[locale][f] && !messages[locale][f][en]) messages[locale][f][en] = tr;
        filled++;
      });
    }
    pending = retry;
  }
  for (const f of FILES) write(locale, f, messages[locale][f]);
}

console.log(`${filled} translations added (${MODEL}).`);
if (notes.length) {
  console.log(`\nWorth a look:\n${notes.map((n) => `  ${n}`).join("\n")}`);
  if (process.env.GITHUB_STEP_SUMMARY) {
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### Translations worth a look\n\n${notes.map((n) => `- ${n}`).join("\n")}\n\n`);
  }
}
report(messages);
