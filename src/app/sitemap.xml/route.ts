import { sitemapPages } from "@/data/sitemap";
import { activeLocales, localesWithPage } from "@/i18n/config";
import { getSitemapPosts } from "@/lib/blog/posts";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

/**
 * /sitemap.xml — the live sitemap: the site's pages (src/data/sitemap.ts),
 * then every published guide article from the blog database, newest first.
 *
 * Every live language is in it (src/i18n/config.ts): each page once per
 * language that has it (/about/, /jp/about/…), and each language's articles.
 * A page that exists in more than one language lists them all (xhtml:link),
 * as its hreflang tags do; a guide article, each language's version of it.
 *
 * Rendered per request and cached by the CDN for an hour, as the live
 * sitemap is (its getServerSideProps sends the same Cache-Control). A cached
 * route handler cannot be refreshed by revalidatePath, so a static sitemap
 * would never pick up new articles; an hour's delay is fine for crawlers and
 * wakes the database at most once an hour.
 */
export const dynamic = "force-dynamic";

const escapeXml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

/** "2026-09-13T13:24:40+00:00": whole seconds and a numeric offset, as the live sitemap writes them. */
const formatLastmod = (value: string | null | undefined) => {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().replace(/\.\d+Z$/, "+00:00");
};

type Entry = { loc: string; lastmod?: string | null; image?: string | null; alternates?: Record<string, string> };

const urlEntry = ({ loc, lastmod, image, alternates }: Entry) => {
  const stamp = formatLastmod(lastmod);
  return (
    "    <url>\n" +
    `        <loc>${escapeXml(loc)}</loc>\n` +
    (stamp ? `        <lastmod>${escapeXml(stamp)}</lastmod>\n` : "") +
    Object.entries(alternates ?? {})
      .map(([lang, href]) => `        <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(href)}"/>\n`)
      .join("") +
    (image
      ? "        <image:image>\n" + `            <image:loc>${escapeXml(image)}</image:loc>\n` + "        </image:image>\n"
      : "") +
    "    </url>"
  );
};

export async function GET() {
  const entries: Entry[] = [];
  for (const page of sitemapPages) {
    const path = new URL(page.loc).pathname;
    for (const locale of localesWithPage(path)) {
      entries.push({
        loc: absoluteUrl(path, locale),
        lastmod: page.lastmod,
        image: page.image ? absoluteUrl(new URL(page.image).pathname) : null,
        alternates: languageAlternates(path),
      });
    }
  }

  for (const locale of activeLocales) {
    for (const post of await getSitemapPosts(locale)) {
      const paths = Object.fromEntries(Object.entries(post.languages).map(([other, slug]) => [other, `/guide/${slug}/`]));
      entries.push({
        loc: absoluteUrl(`/guide/${post.slug}/`, locale),
        lastmod: post.lastmod,
        image: post.image ? absoluteUrl(post.image) : null,
        alternates: languageAlternates(`/guide/${post.slug}/`, paths),
      });
    }
  }

  const xhtml = entries.some((entry) => entry.alternates)
    ? '\n        xmlns:xhtml="http://www.w3.org/1999/xhtml"'
    : "";
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
    `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"${xhtml}>\n` +
    entries.map(urlEntry).join("\n") +
    "\n</urlset>\n";

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
