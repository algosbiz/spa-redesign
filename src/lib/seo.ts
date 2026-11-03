/**
 * SEO helper — builds the <head> tags (title, description, canonical, social sharing)
 * for a page, from the values copied from the old website.
 *
 *   export const metadata = buildMetadata({
 *     title: "…", description: "…", path: "/seminyak/balinese-massage/",
 *   });
 *
 * As on the live site, only the guide articles have a share picture
 * (og:image / twitter:image, URL only), and no page has article dates.
 *
 * `locale` (default English) picks the language folder of the canonical
 * (/ja/about/) and the Open Graph language. A page that exists in more than
 * one live language also gets an hreflang link to each of them, plus
 * x-default (English).
 */
import type { Metadata } from "next";
import { business } from "@/data/business";
import { defaultLocale, localePath, localeSettings, localesWithPage, type Locale } from "@/i18n/config";

type SeoInput = {
  title: string;
  description: string;
  /** URL path of the page, with trailing slash, e.g. "/contact/" */
  path: string;
  /** "article" for blog posts */
  type?: "website" | "article";
  /** Picture shown when the page is shared, as a site path (guide articles only on live). */
  shareImage?: string;
  /** false = hide from Google (only for internal pages) */
  index?: boolean;
  /** The page's language; its folder is in the canonical (/ja/about/). */
  locale?: Locale;
  /** The page's path in each language, when it differs by language (guide articles). */
  languagePaths?: Partial<Record<Locale, string>>;
};

/**
 * The full address of a page of `locale`: https://spabalimoon.com/about/,
 * …/ja/about/. A file (an image) belongs to no language: leave `locale` out.
 */
export function absoluteUrl(path: string, locale: Locale = defaultLocale): string {
  return new URL(localePath(path, locale), business.url).toString();
}

/**
 * hreflang links for the page at `path`: one per live language that has it,
 * plus x-default for English. None while the page exists in one language
 * only. `paths` gives the page's path in each language when it is not the
 * same everywhere (a guide article and its translations).
 */
export function languageAlternates(
  path: string,
  paths?: Partial<Record<Locale, string>>,
): Record<string, string> | undefined {
  const entries = paths
    ? (Object.entries(paths) as [Locale, string][])
    : localesWithPage(path).map((locale) => [locale, path] as [Locale, string]);
  if (entries.length < 2) return undefined;
  const english = entries.find(([locale]) => locale === defaultLocale);
  return {
    ...Object.fromEntries(entries.map(([locale, p]) => [localeSettings[locale].hreflang, absoluteUrl(p, locale)])),
    ...(english ? { "x-default": absoluteUrl(english[1], defaultLocale) } : {}),
  };
}

/**
 * The defaults every page of a language starts from (its root layout). The
 * title and description are the live homepage's, byte for byte; each page
 * overrides them.
 */
export function siteMetadata(locale: Locale = defaultLocale): Metadata {
  return {
    metadataBase: new URL(business.url),
    title: "Spa Bali Moon - Outcall & Home Service Massage",
    description:
      "Our traditional Bali massage is available for outcall massage to your stay. Visit our spa or call for home service. Feel the signature warmth of Bali Moon.",
    icons: { shortcut: "/images/SMBlogo.ico" },
    openGraph: {
      siteName: business.name,
      locale: localeSettings[locale].ogLocale,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  shareImage,
  index = true,
  locale = defaultLocale,
  languagePaths,
}: SeoInput): Metadata {
  const url = absoluteUrl(path, locale);
  const image = shareImage ? absoluteUrl(shareImage) : undefined;
  const languages = languageAlternates(path, languagePaths);

  return {
    // `absolute` = use exactly this title (the old site's titles are already complete).
    title: { absolute: title },
    description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    // The old website's robots value, written as a string to keep its order.
    robots: index ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" : "noindex, nofollow",
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: business.name,
      locale: localeSettings[locale].ogLocale,
      ...(image ? { images: image } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: image } : {}),
    },
  };
}
