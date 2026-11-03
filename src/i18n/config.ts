/**
 * LANGUAGES AND DOMAINS — which languages the site has and which domain
 * serves each one (migration/multi-language-plan-2026-11.md).
 *
 * The domain a visitor opens decides the language (src/proxy.ts): every page
 * lives in src/app/[lang]/, and the proxy serves /about/ on spabalimoon.com
 * from /en/about/, on spabalimoon.jp from /ja/about/. The language is never
 * part of the visible URL, and the paths are the same on every domain.
 *
 * A language is live once it is in `activeLocales`: its pages are built, its
 * domain answers, and the pages of the other languages point at it
 * (hreflang). Until then its domain answers 404.
 */
// A relative import: next.config.ts reads this file too, outside the @/ alias.
import { business } from "../data/business";

export const locales = ["en", "ja", "ko", "zh", "hi"] as const;
export type Locale = (typeof locales)[number];

/** The language of spabalimoon.com, of every page that has no translation, and of x-default. */
export const defaultLocale: Locale = "en";

/** The live languages. Add one once its pages are translated (plan, phase 3). */
export const activeLocales: readonly Locale[] = ["en"];

/**
 * Languages being translated, opened on localhost and Vercel previews only
 * (/ja/about/), never on their domain, in a sitemap or in hreflang links:
 * I18N_PREVIEW_LOCALES=ja,ko in .env.local or the preview's environment.
 * Server-side only (the browser never needs it).
 */
const previewLocales: readonly Locale[] = (process.env.I18N_PREVIEW_LOCALES ?? "")
  .split(",")
  .map((value) => value.trim())
  .filter((value): value is Locale => (locales as readonly string[]).includes(value));

/** The languages whose pages are built: the live ones, plus any in preview. */
export const servedLocales: readonly Locale[] = [...new Set([...activeLocales, ...previewLocales])];

type LocaleSettings = {
  /** The domain that serves the language, without a trailing slash. */
  origin: string;
  /** The <html lang> value. */
  htmlLang: string;
  /** The hreflang value other pages use to point at this language. */
  hreflang: string;
  /** og:locale */
  ogLocale: string;
  /** The language's own name, for the language switcher. */
  nativeName: string;
  /** Whether the language puts spaces between words (Japanese and Chinese do not). */
  wordSpaces: boolean;
};

// Still open (plan, section 2): ko on spabalimoon.kr or spabalimoon.co.kr.
// India is Hindi on spabalimoon.in (owner, 3 Nov 2026).
export const localeSettings: Record<Locale, LocaleSettings> = {
  en: { origin: business.url, htmlLang: "en", hreflang: "en", ogLocale: "en_US", nativeName: "English", wordSpaces: true },
  ja: { origin: "https://spabalimoon.jp", htmlLang: "ja", hreflang: "ja", ogLocale: "ja_JP", nativeName: "日本語", wordSpaces: false },
  ko: { origin: "https://spabalimoon.kr", htmlLang: "ko", hreflang: "ko", ogLocale: "ko_KR", nativeName: "한국어", wordSpaces: true },
  zh: { origin: "https://spabalimoon.cn", htmlLang: "zh-Hans", hreflang: "zh-Hans", ogLocale: "zh_CN", nativeName: "简体中文", wordSpaces: false },
  hi: { origin: "https://spabalimoon.in", htmlLang: "hi", hreflang: "hi", ogLocale: "hi_IN", nativeName: "हिन्दी", wordSpaces: true },
};

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
export const isActiveLocale = (value: string): value is Locale => (activeLocales as readonly string[]).includes(value);
export const isServedLocale = (value: string): value is Locale => (servedLocales as readonly string[]).includes(value);

/**
 * The language a production domain serves, with or without www. Null for any
 * other host (localhost, Vercel previews, tunnels): those serve English, and
 * a /ja/… path there opens the Japanese page directly.
 */
export function localeOfHost(host: string | null | undefined): Locale | null {
  const name = host?.toLowerCase().replace(/:\d+$/, "").replace(/^www\./, "");
  return locales.find((locale) => new URL(localeSettings[locale].origin).hostname === name) ?? null;
}

/**
 * Where a page sits inside the app (src/app/[lang]/…), e.g. "/en/guide/" for
 * /guide/ on spabalimoon.com. revalidatePath needs this one, not the visible
 * path: Next keeps its cache under the rewritten address.
 */
export const routePath = (path: string, locale: Locale = defaultLocale) => `/${locale}${path}`;

/**
 * The visible path of a page from the app's path: drops the language
 * prefix, which the server sees on statically built pages and the browser
 * does not (and which a /ja/… address keeps on localhost and previews).
 */
export function sitePath(path: string): string {
  const [, first, ...rest] = path.split("/");
  return isLocale(first) ? `/${rest.join("/")}` : path;
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

/** The live languages that have the page at `path` ("/about/"), English first. */
export function localesWithPage(path: string): Locale[] {
  return activeLocales.filter((locale) => locale === defaultLocale || translatedPaths[locale]?.includes(path));
}

/**
 * Whether a language's domain serves the page at `path`: English has every
 * page, another language its translated ones. A guide article decides for
 * itself: it is shown where the database has it in that language.
 */
export function servesPage(locale: Locale, path: string): boolean {
  if (locale === defaultLocale || translatedPaths[locale]?.includes(path)) return true;
  return /^\/guide\/[^/]+\/$/.test(path);
}

/**
 * Where a link to `href` goes on a page in `locale`: as written when the
 * language has that page, else to the English page on spabalimoon.com (a
 * guide article, /guide/, a page not translated yet), so no link lands on a
 * 404. A guide article counts as translated once its path is listed above.
 */
export function linkFor(href: string, locale: Locale): string {
  if (locale === defaultLocale || !href.startsWith("/") || href.startsWith("//")) return href;
  const path = href.split(/[?#]/)[0];
  if (translatedPaths[locale]?.includes(path)) return href;
  return localeSettings[defaultLocale].origin + href;
}
