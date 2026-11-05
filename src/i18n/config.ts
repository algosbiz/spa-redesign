/**
 * LANGUAGES — which languages the site has and where each one lives
 * (migration/multi-language-plan-2026-11.md).
 *
 * One domain, spabalimoon.com, with a folder per language: English has no
 * prefix (/about/), every other language the code of the country it is for,
 * which its visitors know (/jp/about/, /kr/about/, /cn/about/, /in/about/;
 * owner, 5 Nov 2026). The language's own code (ja, ko, zh, hi) stays the
 * app's: the route (src/app/[lang]/ as /ja/…), the translation files, the
 * blog's locale column, I18N_PREVIEW_LOCALES, and <html lang> and hreflang,
 * which is what search engines read. The proxy (src/proxy.ts) serves an
 * address without a prefix from /en/… and /jp/… from /ja/…, and sends /en/…
 * and /ja/… to the visible address.
 *
 * A language is live once it is in `activeLocales`: its pages are built, its
 * folder answers, and the pages of the other languages point at it
 * (hreflang). Until then its folder answers 404.
 */
export const locales = ["en", "ja", "ko", "zh", "hi"] as const;
export type Locale = (typeof locales)[number];

/** The language without a prefix, of every page that has no translation, and of x-default. */
export const defaultLocale: Locale = "en";

/** The live languages. Add one once its pages are translated (plan, phase 3). */
export const activeLocales: readonly Locale[] = ["en"];

/**
 * Languages being translated, opened where I18N_PREVIEW_LOCALES lists them
 * (ja,ko in .env.local or a Vercel preview's environment, never production):
 * their folder answers there (/jp/about/), but they are in no sitemap and no
 * hreflang link. Server-side only (the browser never needs it).
 */
const previewLocales: readonly Locale[] = (process.env.I18N_PREVIEW_LOCALES ?? "")
  .split(",")
  .map((value) => value.trim())
  .filter((value): value is Locale => (locales as readonly string[]).includes(value));

/** The languages whose pages are built: the live ones, plus any in preview. */
export const servedLocales: readonly Locale[] = [...new Set([...activeLocales, ...previewLocales])];

type LocaleSettings = {
  /** The language's folder in the address (jp for /jp/about/); none for English. */
  folder: string;
  /** The <html lang> value. */
  htmlLang: string;
  /** The hreflang value other pages use to point at this language. */
  hreflang: string;
  /** og:locale */
  ogLocale: string;
  /** The language's own name, for the language switcher. */
  nativeName: string;
  /**
   * The flag the language switcher shows beside it (public/images/flags/):
   * a language is not a country, so English shows the UK's.
   */
  flag: "gb" | "jp" | "kr" | "cn" | "in";
  /** Whether the language puts spaces between words (Japanese and Chinese do not). */
  wordSpaces: boolean;
};

// India is Hindi (owner, 3 Nov 2026).
export const localeSettings: Record<Locale, LocaleSettings> = {
  en: { folder: "", htmlLang: "en", hreflang: "en", ogLocale: "en_US", nativeName: "English", flag: "gb", wordSpaces: true },
  ja: { folder: "jp", htmlLang: "ja", hreflang: "ja", ogLocale: "ja_JP", nativeName: "日本語", flag: "jp", wordSpaces: false },
  ko: { folder: "kr", htmlLang: "ko", hreflang: "ko", ogLocale: "ko_KR", nativeName: "한국어", flag: "kr", wordSpaces: true },
  zh: { folder: "cn", htmlLang: "zh-Hans", hreflang: "zh-Hans", ogLocale: "zh_CN", nativeName: "简体中文", flag: "cn", wordSpaces: false },
  hi: { folder: "in", htmlLang: "hi", hreflang: "hi", ogLocale: "hi_IN", nativeName: "हिन्दी", flag: "in", wordSpaces: true },
};

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
export const isActiveLocale = (value: string): value is Locale => (activeLocales as readonly string[]).includes(value);
export const isServedLocale = (value: string): value is Locale => (servedLocales as readonly string[]).includes(value);

/** The visible path of a page in `locale`: "/about/" in English, "/jp/about/" in Japanese. */
export const localePath = (path: string, locale: Locale = defaultLocale) =>
  locale === defaultLocale ? path : `/${localeSettings[locale].folder}${path}`;

/** The language whose folder is `folder` in the address ("jp" → ja). */
export const localeOfFolder = (folder: string): Locale | undefined =>
  locales.find((locale) => locale !== defaultLocale && localeSettings[locale].folder === folder);

/**
 * Where a page sits inside the app (src/app/[lang]/…), e.g. "/en/guide/" for
 * /guide/. revalidatePath needs this one, not the visible path: Next keeps
 * its cache under the rewritten address: "/ja/guide/" for /jp/guide/.
 */
export const routePath = (path: string, locale: Locale = defaultLocale) => `/${locale}${path}`;

/**
 * The page's path without its language: "/about/" for /jp/about/ (the server
 * sees the app's path, /en/… or /ja/…, the browser the visible one, /about/
 * or /jp/…). What the pages, menus and the list of translated pages are
 * keyed by.
 */
export function sitePath(path: string): string {
  const [, first, ...rest] = path.split("/");
  return isLocale(first) || localeOfFolder(first) ? `/${rest.join("/")}` : path;
}

/** The core pages, translated first (plan, phase 3). */
const corePages = [
  "/",
  "/seminyak/",
  "/about/",
  "/contact/",
  "/reservation/",
  "/outcall-home-service-massage/",
  "/villa-hotel-massage/",
  "/seminyak/balinese-massage/",
  "/seminyak/couple-spa/",
  "/seminyak/body-scrub/",
  "/seminyak/creambath/",
  "/seminyak/hot-stone-massage/",
  "/seminyak/foot-reflexology/",
  "/seminyak/facial/",
  "/seminyak/deep-tissue-massage/",
  "/seminyak/warm-candle-massage/",
  "/seminyak/traditional-massage/",
] as const;

/**
 * Every other page but /guide/, whose list of articles stays empty until a
 * language has articles of its own (written in /admin/).
 */
const otherPages = [
  "/seminyak/anti-cellulite-massage/",
  "/seminyak/coconut-oil-massage/",
  "/seminyak/cupping-therapy/",
  "/seminyak/ear-candle/",
  "/seminyak/foot-massage/",
  "/seminyak/hair-braiding/",
  "/seminyak/head-massage/",
  "/seminyak/lymphatic-drainage-massage/",
  "/seminyak/manicure-pedicure/",
  "/seminyak/nail-spa/",
  "/seminyak/shiatsu-massage/",
  "/seminyak/sport-massage/",
  "/seminyak/sunburn-massage/",
  "/seminyak/thai-massage/",
  "/seminyak/waxing-salon/",
  "/massage-kuta/",
  "/privacy-policy/",
  "/terms-and-conditions/",
] as const;

/**
 * The pages each language other than English has, by path. English has every
 * page; another language lists only its translated ones (plan §3.4), and
 * every page points (hreflang) only at the languages that have it. Draft
 * translations (ja: core pages 2 Nov 2026; ko, zh, hi and the other pages 3
 * Nov 2026), to be checked by a native speaker before each language goes live.
 */
const translatedPaths: Partial<Record<Locale, readonly string[]>> = {
  ja: [...corePages, ...otherPages],
  ko: [...corePages, ...otherPages],
  zh: [...corePages, ...otherPages],
  hi: [...corePages, ...otherPages],
};

/**
 * The live languages that have the page at `path` ("/about/"), English
 * first; or, with `among`, those of these languages (the language switcher
 * passes the served ones, so a language in preview shows there too).
 */
export function localesWithPage(path: string, among: readonly Locale[] = activeLocales): Locale[] {
  return among.filter((locale) => locale === defaultLocale || translatedPaths[locale]?.includes(path));
}

/**
 * Whether a language's folder has the page at `path` ("/about/"): English has
 * every page, another language its translated ones. A guide article decides
 * for itself: it is shown where the database has it in that language.
 */
export function servesPage(locale: Locale, path: string): boolean {
  if (locale === defaultLocale || translatedPaths[locale]?.includes(path)) return true;
  return /^\/guide\/[^/]+\/$/.test(path);
}

/**
 * Where a link to `href` goes on a page in `locale`: to the language's own
 * page when it has one (/about/ → /jp/about/), else to the English page as
 * written (a guide article, /guide/, a page not translated yet), so no link
 * lands on a 404. A link that already names a language (/jp/about/, or
 * /jp/guide/…/ from a list of the language's own articles) is kept, so
 * translating a link twice changes nothing.
 */
export function linkFor(href: string, locale: Locale): string {
  if (locale === defaultLocale || !href.startsWith("/") || href.startsWith("//")) return href;
  // "/seminyak" is "/seminyak/" (next.config's trailingSlash adds the slash).
  const path = href.split(/[?#]/)[0].replace(/\/?$/, "/");
  return translatedPaths[locale]?.includes(path) ? localePath(href, locale) : href;
}
