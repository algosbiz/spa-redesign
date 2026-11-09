import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { defaultLocale, isLocale, isServedLocale, LOCALE_HEADER, localeOfFolder, localePath, servesPage } from "@/i18n/config";
import { fetchPublishedMap, type RedirectMap } from "@/lib/redirects/map";

/**
 * Two jobs, for every page address:
 *
 * 1. Redirects added in /admin/redirects/, live as soon as they are saved, no
 *    deploy needed. The list is the small JSON file the admin publishes
 *    (lib/redirects/map.ts), kept in memory and refreshed in the background
 *    every 30 seconds, so a visit costs one in-memory lookup: no database
 *    call. The built-in redirects (src/data/redirects.ts) are answered
 *    earlier, by next.config.ts and Cloudflare. Both are for spabalimoon.com's
 *    old addresses, so they apply to the English site only.
 *
 * 2. The language (src/i18n/config.ts): the first folder of the address, the
 *    country code of the language's visitors. An address without one is
 *    English, served from src/app/[lang]/ as /en/…, and /jp/about/ is served
 *    from /ja/about/, once Japanese is served (live, or in preview:
 *    I18N_PREVIEW_LOCALES) and has that page; otherwise it is a 404. The
 *    app's own paths (/en/…, /ja/…) never show: they go to the visible
 *    address.
 */

const REFRESH_MS = 30_000;

let current: { map: RedirectMap; at: number } | null = null;
let loading: Promise<RedirectMap> | null = null;

function refresh(): Promise<RedirectMap> {
  loading ??= fetchPublishedMap()
    .then((map) => {
      // Unreadable: keep answering with the last good list.
      const next = map ?? current?.map ?? {};
      current = { map: next, at: Date.now() };
      return next;
    })
    .catch(() => current?.map ?? {})
    .finally(() => {
      loading = null;
    });
  return loading;
}

async function redirectMap(event: NextFetchEvent): Promise<RedirectMap> {
  if (!current) return refresh(); // first request of this instance
  if (Date.now() - current.at > REFRESH_MS) event.waitUntil(refresh());
  return current.map;
}

export async function proxy(request: NextRequest, event: NextFetchEvent) {
  const { pathname, search } = request.nextUrl;
  const prefix = pathname.split("/")[1];
  const page = request.nextUrl.clone();

  const rest = pathname.slice(prefix.length + 1) || "/";
  // The app's path of a page (/en/about/, /ja/about/): to its visible address.
  if (isLocale(prefix)) return NextResponse.redirect(new URL(localePath(rest, prefix) + search, request.nextUrl.origin), 301);

  const locale = localeOfFolder(prefix);
  if (locale) {
    // A page not translated into the language is not there (plan §3.4), nor
    // any page of a language not served: its address matches nothing, so it
    // gets the 404 page.
    const served = isServedLocale(locale) && servesPage(locale, rest);
    page.pathname = served ? `/${locale}${rest}` : `/${defaultLocale}/_untranslated${rest}`;
    if (served || !isServedLocale(locale)) return NextResponse.rewrite(page);
    // The 404 for it is then in the language (src/app/global-not-found.tsx).
    const headers = new Headers(request.headers);
    headers.set(LOCALE_HEADER, locale);
    return NextResponse.rewrite(page, { request: { headers } });
  }

  const hit = (await redirectMap(event))[pathname];
  if (hit) {
    const [destination, status] = hit;
    const target = new URL(destination, request.nextUrl.origin);
    // Like next.config redirects: the visitor's ?query goes along (utm tags…).
    if (!target.search && search) target.search = search;
    return NextResponse.redirect(target, status === 302 ? 302 : 301);
  }

  page.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(page);
}

export const config = {
  // Pages only: not Next's own files, the API, the admin, or site assets (by
  // their file type). A folder address such as /images/ does come here, so it
  // gets the 404 page like any other address that is not a page.
  matcher: [
    "/((?!_next/|api/|admin/|.*\.(?:css|js|map|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|txt|xml|json|webmanifest)$).*)",
  ],
};
