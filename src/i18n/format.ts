import { defaultLocale, localeSettings, type Locale } from "./config";

/**
 * A day written out in the page's language: "15 October 2026" in English
 * (as the site always wrote it), "2026年10月15日" in Japanese.
 */
export function formatDay(iso: string, locale: Locale, timeZone: string): string {
  const lang = locale === defaultLocale ? "en-GB" : localeSettings[locale].htmlLang;
  return new Date(iso).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric", timeZone });
}
