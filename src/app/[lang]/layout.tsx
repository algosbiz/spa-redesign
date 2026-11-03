import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import RootDocument from "@/components/layout/RootDocument";
import { defaultLocale, isServedLocale, servedLocales } from "@/i18n/config";
import { getI18n } from "@/i18n/server";
import { siteMetadata } from "@/lib/seo";

/**
 * The site's root layout, one per language (src/i18n/config.ts). Every page
 * is served from here, /about/ from /en/about/ (src/proxy.ts) and /ja/about/
 * as it is, so the language is known while the page is built statically. A
 * language that is neither live nor in preview answers 404.
 */
export function generateStaticParams() {
  return servedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = isServedLocale(lang) ? lang : defaultLocale;
  return (await getI18n()).localize(siteMetadata(locale));
}

export const viewport: Viewport = {
  width: "device-width",
};

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isServedLocale(lang)) notFound();
  return <RootDocument locale={lang}>{children}</RootDocument>;
}
