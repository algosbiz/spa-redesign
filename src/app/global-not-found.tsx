import type { Metadata, Viewport } from "next";
import NotFound from "@/app/[lang]/not-found";
import RootDocument from "@/components/layout/RootDocument";
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
 * document on its own: the same 404 page, in English, as [lang]/not-found.tsx
 * shows for a missing article or treatment.
 */
export default function GlobalNotFound() {
  return (
    <RootDocument>
      <NotFound />
    </RootDocument>
  );
}
