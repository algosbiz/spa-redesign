import { revalidatePath } from "next/cache";
import { defaultLocale, routePath, type Locale } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";
import { purgeEverything, purgeUrls } from "./cloudflare";
import { getBlogMenu, type BlogMenuPost } from "./posts";

/** A language's blog menu now, or null if the database could not say (then it counts as changed). */
export const readBlogMenu = (locale: Locale = defaultLocale) => getBlogMenu(locale).catch(() => null);

/**
 * After an article is created, edited or deleted: rebuild the pages that show
 * it, then drop Cloudflare's copies. The pages are cached until this runs
 * (they have no time-based revalidation), so it is what makes a save visible.
 *
 * Every article page lists the latest posts and its neighbours, so all of them
 * are rebuilt, not just the one saved. Pass `previousSlug` when an edit
 * renamed the article, so the old URL is purged too. (sitemap.xml is
 * rendered per request; only its Cloudflare copy needs dropping.)
 *
 * The header's blog menu is on every page. Pass `menuBefore` (readBlogMenu()
 * before the write): when the save changed the menu (a title, a new or removed
 * article…), every page is rebuilt and Cloudflare's whole cache is dropped.
 *
 * `locale` is the article's language: its folder's copies (/jp/guide/…/)
 * are the ones dropped. `languages` (getPostLanguages) gives the article's
 * slug in its other languages, whose pages link to it (hreflang) and are
 * dropped too.
 *
 * In a route handler Next applies revalidatePath just after the response is
 * sent, so a request in those few milliseconds can still get the old page.
 * It takes the page's address inside the app (/en/guide/, src/i18n/config.ts),
 * not the visible one.
 *
 * Never throws: the database write already succeeded.
 */
export async function refreshGuidePages({
  slug,
  previousSlug,
  menuBefore,
  locale = defaultLocale,
  languages = {},
}: {
  slug?: string | null;
  previousSlug?: string | null;
  menuBefore?: BlogMenuPost[] | null;
  locale?: Locale;
  languages?: Partial<Record<Locale, string>>;
}) {
  const menuAfter = menuBefore === undefined ? undefined : await readBlogMenu(locale);
  const menuChanged =
    menuAfter !== undefined && (!menuBefore || !menuAfter || JSON.stringify(menuBefore) !== JSON.stringify(menuAfter));

  try {
    if (menuChanged) {
      revalidatePath("/", "layout");
    } else {
      revalidatePath(routePath("/guide/", locale));
      revalidatePath("/[lang]/(site)/guide/[slug]", "page");
    }
  } catch (e) {
    console.error("revalidate failed:", e instanceof Error ? e.message : e);
  }

  if (menuChanged) return purgeEverything();

  const slugs = [...new Set([slug, previousSlug].filter((s): s is string => Boolean(s)))];
  const others = (Object.entries(languages) as [Locale, string][]).filter(([other]) => other !== locale);
  return purgeUrls([
    absoluteUrl("/guide/", locale),
    ...slugs.map((s) => absoluteUrl(`/guide/${s}/`, locale)),
    absoluteUrl("/sitemap.xml"),
    ...others.map(([other, otherSlug]) => absoluteUrl(`/guide/${otherSlug}/`, other)),
  ]);
}
