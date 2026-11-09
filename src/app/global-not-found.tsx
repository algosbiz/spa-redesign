import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import NotFound from "@/app/[lang]/not-found";
import RootDocument from "@/components/layout/RootDocument";
import { defaultLocale, isServedLocale, LOCALE_HEADER } from "@/i18n/config";
import { siteMetadata } from "@/lib/seo";

// The live 404's robots value, as in [lang]/not-found.tsx.
export const metadata: Metadata = {
  ...siteMetadata(),
  robots: "noindex, nofollow",
};

export const viewport: Viewport = {
  width: "device-width",
};

/**
 * 404 for an address that matches no page at all. With the site's root layout
 * inside [lang] there is no layout above every route, so Next renders this
 * document on its own: the same 404 page as [lang]/not-found.tsx shows for a
 * missing article or treatment. An address under a language's folder (/jp/…:
 * a mistyped page, or a guide not translated yet) gets it in that language:
 * the proxy passes the language in a request header (src/proxy.ts), so the
 * text and <html lang> match the address (language review #6, 9 Nov).
 */
export default async function GlobalNotFound() {
  const value = (await headers()).get(LOCALE_HEADER);
  const locale = value && isServedLocale(value) ? value : defaultLocale;
  return (
    <RootDocument locale={locale}>
      <NotFound locale={locale} />
    </RootDocument>
  );
}
