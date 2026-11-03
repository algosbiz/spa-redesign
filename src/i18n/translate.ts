import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { translateWhatsAppUrl } from "@/lib/whatsapp";
import { isLocale, linkFor } from "./config";

/**
 * TRANSLATION MEMORY — how the site's text reaches another language.
 *
 * The English files stay the only source of the site's content: structure,
 * prices, photos and links are never copied. A language has one list of
 * translations, keyed by the English text itself (src/i18n/messages/<lang>.json):
 *
 *   { "Balinese Massage": "バリニーズマッサージ", "Book Now": "予約する" }
 *
 * When a page is built in that language, every piece of text on its way to
 * the page (a data object, a component's props, the elements it returns) is
 * looked up and replaced. A text with no translation stays English and is
 * reported (tools/i18n/missing.mjs), so a changed English sentence shows up
 * as "to translate" by itself. English pages skip all of this.
 *
 * Only text is touched: a value under a key such as className, src, href or
 * slug, and a string that looks like a path, an address or a class list, is
 * passed through as it is. So a value the code matches against something
 * (a tab, a category) belongs under such a key (id, slug, category, type).
 *
 * Text is looked up whole, as a component receives it, and again in what the
 * component renders. Keep a separator a component splits on (" · ") in the
 * translation, and prefer one sentence over pieces: JSX like
 * `Since {year}` reaches the list as "Since", which is hard to translate well;
 * {`Since ${year}`} reaches it as one sentence.
 */

export type Messages = Readonly<Record<string, string>>;

export type OnMissing = (text: string) => void;

// Keys whose values are never text to translate: markup, links, images,
// identifiers, and schema.org vocabulary in the JSON-LD.
const SKIP_KEYS = new Set([
  "className",
  "class",
  "id",
  "key",
  "slug",
  "pageSlug",
  "href",
  "src",
  "url",
  "loc",
  "lastmod",
  "path",
  "image",
  "images",
  "icon",
  "type",
  "category",
  "variant",
  "look",
  "rel",
  "target",
  "style",
  "as",
  "mode",
  "sizes",
  "srcSet",
  "dangerouslySetInnerHTML",
  "__html",
  "dayOfWeek",
  "priceCurrency",
  "currency",
  "availability",
  "inLanguage",
  "telephone",
  "email",
  "sameAs",
  "streetAddress",
  "addressLocality",
  "addressRegion",
  "postalCode",
  "addressCountry",
  "priceRange",
  "openingHours",
  "opens",
  "closes",
  "foundingDate",
  "datePublished",
  "dateModified",
  // Metadata: robots values, og:locale, the site's name, the Twitter card.
  "robots",
  "locale",
  "siteName",
  "card",
]);
const SKIP_KEY_ENDINGS = ["Src", "Image", "Url", "Href", "ClassName", "Id", "Slug", "Photo"];

// The attributes of an HTML element that people read; its other attributes
// (name, type, value, role, fill, loading…) are code and stay as written.
const HOST_TEXT_ATTRIBUTES = new Set([
  "alt",
  "title",
  "placeholder",
  "label",
  "aria-label",
  "aria-description",
  "aria-roledescription",
  "aria-valuetext",
  "aria-placeholder",
]);

/** One word in lower or camel case ("massage", "fadeInLeft"): in data and props, a name the code uses, not text. */
const isIdentifier = (value: unknown) => typeof value === "string" && /^[a-z][a-zA-Z0-9]*$/.test(value);

/**
 * A length ("1 Hour", "1.5 Hours · 2 pax", "30 Mins", "45–55 Mins"): in data
 * and props the code reads the minutes from it (durationOf, lengthOf), so it
 * stays English there and is translated where it is shown.
 */
const isDuration = (value: unknown) =>
  typeof value === "string" && /^\d+(?:[.,]\d+)?(?:\s*[–-]\s*\d+(?:[.,]\d+)?)?\s*(?:hrs?|hours?|mins?|minutes?)\b/i.test(value.trim());

/** Kept as written in data and props: a name the code uses, or a length it reads. */
const isKeptInData = (value: unknown) => isIdentifier(value) || isDuration(value);

export const isSkippedKey = (key: string) =>
  SKIP_KEYS.has(key) || key.startsWith("@") || key.startsWith("data-") || key.startsWith("aria-hidden") ||
  SKIP_KEY_ENDINGS.some((ending) => key.endsWith(ending));

/** A word of a class list or path: "p-about", "image/webp", "image.webp", or as short as "lh" (a lone "/" separates words). */
const isCodeWord = (word: string) => word !== "/" && (/[-_:/]|\.(?=[a-z0-9])/.test(word) || word.length <= 3);

/** Whether a string is words for people to read, not a path, address, class list or code. */
export function isText(value: string): boolean {
  const s = value.trim();
  if (!/\p{L}/u.test(s)) return false;
  // "/seminyak/", "#faq", "https://…" (but "/ pax" is words after a slash)
  if (/^(?:\/(?!\s)|#|\.\/|https?:|mailto:|tel:|data:|wa\.me)/.test(s)) return false;
  // "page-wrapper lh p-about", "pt-130 pb-130", "balinese-massage", "image/webp":
  // every word is code. One plain word makes it text ("1.5 hours", "full-body
  // massage", "also available for hotels and villas in nearby areas.").
  if (/^[a-z0-9_\-:./ ]+$/.test(s) && /[-_:/.]/.test(s) && s.split(/\s+/).every(isCodeWord)) return false;
  // "IDR 159.000", "IDR 159K", "IDR 159.000〜": prices are the same in every language.
  if (!/\p{L}/u.test(s.replace(/\b(?:IDR|Rp)\b|(?<=\d)K\b/g, ""))) return false;
  // info@spabalimoon.com
  if (/^\S+@\S+\.\S+$/.test(s)) return false;
  // "2026-10-17", "2026-10-17T02:00:00Z": a date for code (<time dateTime>), not for reading.
  if (/^\d{4}-\d{2}-\d{2}(?:T[\d:.]+(?:Z|[+-]\d{2}:?\d{2})?)?$/.test(s)) return false;
  return true;
}

/** A language's translations, as the functions below use them. */
export type Translator = {
  locale: string;
  messages: Messages;
  /** Called with each English text that has no translation. */
  onMissing?: OnMissing;
  /** False for a language without spaces between words: see translateText. */
  wordSpaces?: boolean;
};

/** The translation of one text, keeping its surrounding spaces; English when there is none. */
export function translateText(value: string, { locale, messages, onMissing, wordSpaces = true }: Translator): string {
  // A full stop or comma written on its own after a link ("<a>…</a>.") is the
  // language's own in Japanese and Chinese.
  if (!wordSpaces && /^\s*[.,]\s*$/.test(value)) return value.includes(".") ? "。" : locale === "zh" ? "，" : "、";
  if (!isText(value)) return value;
  const core = value.trim();
  const translated = messages[core];
  if (!translated) {
    onMissing?.(core);
    return value;
  }
  if (core === value) return translated;
  const start = value.indexOf(core);
  // The English spaces around a piece of a sentence ("with " before a link)
  // stay, but not in Japanese or Chinese, unless the translation starts or
  // ends with Latin letters or digits there.
  const keep = (space: string, edge: string | undefined) => (wordSpaces || /[A-Za-z0-9]/.test(edge ?? "") ? space : "");
  return keep(value.slice(0, start), translated[0]) + translated + keep(value.slice(start + core.length), translated.at(-1));
}

/** One text with {name} placeholders: the template is translated, then filled. */
export function translateTemplate(template: string, values: Record<string, string | number>, translator: Translator): string {
  return format(translateText(template, translator), values);
}

/**
 * A copy of `value` (data: strings, arrays, plain objects) with every text
 * translated. Anything else (numbers, functions, dates) is kept as it is.
 */
export function translateValue<T>(value: T, translator: Translator): T {
  if (typeof value === "string") return translateText(value, translator) as T;
  if (Array.isArray(value)) return value.map((item) => (isKeptInData(item) ? item : translateValue(item, translator))) as T;
  if (isValidElement(value)) return translateElement(value, translator) as T;
  if (value && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype) {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) out[key] = translateEntry(key, item, translator);
    return out as T;
  }
  return value;
}

/**
 * One key of an object or of a component's props. Links are kept, except a
 * WhatsApp link with a message, whose message is translated.
 */
export function translateEntry(key: string, value: unknown, translator: Translator): unknown {
  if (key === "href" && typeof value === "string") {
    // A page the language does not have yet is linked in English (linkFor).
    const href = isLocale(translator.locale) ? linkFor(value, translator.locale) : value;
    return translateWhatsAppUrl(href, (text, values) => (values ? translateTemplate(text, values, translator) : translateText(text, translator)), translator.locale);
  }
  return isSkippedKey(key) || isKeptInData(value) ? value : translateValue(value, translator);
}

/**
 * One attribute of an HTML element (`type` a string: "a", "img"…): only the
 * ones people read, and a WhatsApp link's message. Children are the caller's.
 */
export function translateAttribute(key: string, value: unknown, translator: Translator): unknown {
  if (key === "href") return translateEntry(key, value, translator);
  return HOST_TEXT_ATTRIBUTES.has(key) && typeof value === "string" ? translateText(value, translator) : value;
}

/** Whether an element is an HTML element rather than a component. */
export const isHostElement = (element: ReactElement) => typeof element.type === "string";

/** The props of an element with their text translated: only the changed ones. */
export function translatedProps(
  props: Record<string, unknown>,
  translator: Translator,
  translateChild: (key: string, value: unknown) => unknown = (key, value) => translateEntry(key, value, translator),
): Record<string, unknown> {
  const changed: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    const next = translateChild(key, value);
    if (next !== value) changed[key] = next;
  }
  return changed;
}

/**
 * The same for what a component returns: React elements, with their text
 * children and the text in their props (a section's title, an FAQ list, a
 * JSON-LD object) translated. A child component's own output is not reached
 * here; that component translates its own (src/i18n/server.ts).
 */
export function translateElement(node: ReactNode, translator: Translator): ReactNode {
  if (typeof node === "string") return translateText(node, translator);
  if (Array.isArray(node)) return node.map((child) => translateElement(child, translator));
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<Record<string, unknown>>;
  const host = isHostElement(element);
  const changed = translatedProps(element.props, translator, (key, value) =>
    key === "children"
      ? translateElement(value as ReactNode, translator)
      : host
        ? translateAttribute(key, value, translator)
        : translateEntry(key, value, translator),
  );
  return cloneWith(element, changed);
}

/**
 * cloneElement with the changed props. Children that were written side by
 * side in JSX are passed back the same way, one argument each, so React does
 * not take them for a list that needs keys.
 */
export function cloneWith(element: ReactElement<Record<string, unknown>>, changed: Record<string, unknown>): ReactElement {
  if (!Object.keys(changed).length) return element;
  const { children, ...rest } = changed;
  if ("children" in changed && Array.isArray(children)) return cloneElement(element, rest, ...children);
  return cloneElement(element, changed);
}

/**
 * Fills {name}-style placeholders: the English template is the key, so the
 * translation can put the values where its grammar needs them.
 *   format("I'd like to book {name}.", { name: "Balinese Massage" })
 */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, name: string) => (name in values ? String(values[name]) : match));
}
