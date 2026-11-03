import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getI18n } from "./server";

/**
 * buildMetadata (src/lib/seo.ts) in the page's language: its domain in the
 * canonical and og:url, og:locale, and the title and description translated.
 * The pages use it as their generateMetadata:
 *
 *   export const generateMetadata = () => pageMetadata({ title: "…", description: "…", path: "/contact/" });
 */
export async function pageMetadata(input: Omit<Parameters<typeof buildMetadata>[0], "locale">): Promise<Metadata> {
  const { locale, localize } = await getI18n();
  return localize(buildMetadata({ ...input, locale }));
}
