import { business } from "@/data/business";
import { defaultLocale, linkFor, localeSettings, type Locale } from "@/i18n/config";
import { getLocale } from "@/i18n/server";

/** The keys whose value is the address of a page the data describes. */
const PAGE_KEYS = new Set(["url", "item", "mainEntityOfPage"]);

/**
 * The data in another language: a page's address (url, item,
 * mainEntityOfPage) is the language's own page where it has one
 * (https://spabalimoon.com/jp/about/), and inLanguage is the page's
 * language. The text is already translated (src/i18n/server.ts). The
 * business's @id (#spa) stays one for every language, so search engines see
 * one spa, and so does the WebSite node, which is the whole site.
 */
function localize(value: unknown, locale: Locale, key = ""): unknown {
  if (typeof value === "string") {
    if (key === "inLanguage") return localeSettings[locale].htmlLang;
    if (!PAGE_KEYS.has(key) || !value.startsWith(`${business.url}/`)) return value;
    const [path, hash] = value.slice(business.url.length).split("#");
    return business.url + linkFor(path, locale) + (hash === undefined ? "" : `#${hash}`);
  }
  if (Array.isArray(value)) return value.map((item) => localize(item, locale, key));
  if (value && typeof value === "object") {
    if ((value as { "@type"?: unknown })["@type"] === "WebSite") return value;
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v, locale, k)]));
  }
  return value;
}

/**
 * One block of structured data (JSON-LD), in the page's language (see
 * localize). `<` is escaped so a text can never close the script tag early.
 */
export default async function JsonLd({ data }: { data: object }) {
  const locale = await getLocale();
  const shown = locale === defaultLocale ? data : localize(data, locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(shown).replace(/</g, "\\u003c") }}
    />
  );
}
