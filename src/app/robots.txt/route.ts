import { defaultLocale, localeOfHost } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

/**
 * /robots.txt — the same rules on every domain (src/i18n/config.ts), each
 * pointing at its own sitemap. Until 2 Nov 2026 a static file; the text is
 * unchanged.
 */
export const dynamic = "force-dynamic";

const RULES = `# Spa Bali Moon — robots.txt
# Carried over from the live WordPress/Yoast rules and adapted to the
# Next.js site: the wp-* paths no longer exist, the query-string rules do
# the same job here, and the private areas are now /admin and /api
# instead of /wp-admin.
#
# The feed/ , trackback/ , ?replytocom and ?attachment_id rules from the
# Yoast block are deliberately NOT carried over. Those URLs 404 on this
# site, and blocking them would stop Google from seeing the 404 and
# dropping the ones it still has on file from the WordPress era.

User-agent: *
Allow: /

# Private / non-content areas. These are the only paths blocked here:
# they are behind a login or are JSON endpoints, so there is no page for
# a noindex tag to live on.
Disallow: /admin
Disallow: /api/

# The unported theme-demo pages (/index-*, /shop-*, /page-gallery,
# /page-services, /news-details, /team, /faq, /testimonials, ...) are NOT
# listed here on purpose. Every one of them already serves
# <meta name="robots" content="noindex, nofollow">, and Google has to be
# able to crawl a page to read that tag — a Disallow here would hide the
# noindex and leave any already-indexed URL stuck in the index. Blocking
# crawling and blocking indexing are different jobs; the tag does this one.

# Tracking and search parameters (kept from the live robots.txt)
Disallow: /*?s=
Disallow: /*?utm_source
Disallow: /*?utm_medium
Disallow: /*?utm_campaign
`;

export function GET(request: Request) {
  const locale = localeOfHost(request.headers.get("host")) ?? defaultLocale;
  return new Response(`${RULES}\nSitemap: ${absoluteUrl("/sitemap.xml", locale)}\n`, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
