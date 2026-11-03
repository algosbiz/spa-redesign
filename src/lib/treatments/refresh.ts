import { revalidatePath } from "next/cache";
import { activeLocales, routePath, servedLocales, servesPage } from "@/i18n/config";
import { purgeUrls } from "@/lib/blog/cloudflare";
import { absoluteUrl } from "@/lib/seo";
import { treatmentPath } from "./content";

/**
 * After a treatment page is saved or restored: rebuild it (it is cached until
 * then, like the guide pages) and drop Cloudflare's copy. Never throws: the
 * database write already succeeded.
 *
 * The admin edits the English page, and the other languages show the same
 * page translated (src/i18n/translate.ts), so every language's copy is
 * rebuilt and dropped. revalidatePath takes the page's address inside the
 * app (/en/seminyak/…/, src/i18n/config.ts).
 */
export async function refreshTreatmentPage(slug: string) {
  const path = treatmentPath(slug);
  try {
    for (const locale of servedLocales) revalidatePath(routePath(path, locale));
  } catch (e) {
    console.error("revalidate failed:", e instanceof Error ? e.message : e);
  }
  return purgeUrls(activeLocales.filter((locale) => servesPage(locale, path)).map((locale) => absoluteUrl(path, locale)));
}
