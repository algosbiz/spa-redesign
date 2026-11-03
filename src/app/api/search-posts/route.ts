import { defaultLocale, isServedLocale, localeOfHost } from "@/i18n/config";
import { getMenuPosts, searchPublishedPosts } from "@/lib/blog/posts";

/**
 * Guide search — the live /api/search-posts/ contract:
 *   ?menu=1  the 12 newest posts (id, slug, title), for the blog menu
 *   ?q=…     up to 10 posts whose title or excerpt contains the query
 *            (case-insensitive, at least 2 characters)
 *   anything else: an empty list
 * Among the articles of the domain's language (src/i18n/config.ts), or of
 * ?locale=… on localhost and previews.
 */
export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const asked = params.get("locale") ?? "";
  const locale = localeOfHost(request.headers.get("host")) ?? (isServedLocale(asked) ? asked : defaultLocale);
  if (params.get("menu") === "1") {
    try {
      return Response.json({ posts: await getMenuPosts(locale) });
    } catch (e) {
      console.error("Blog menu error:", e instanceof Error ? e.message : e);
      return Response.json({ error: "Could not load blog menu" }, { status: 500 });
    }
  }
  const q = (params.get("q") || "").trim();
  if (q.length < 2) return Response.json({ posts: [] });
  try {
    return Response.json({ posts: await searchPublishedPosts(q, locale) });
  } catch (e) {
    console.error("Search error:", e instanceof Error ? e.message : e);
    return Response.json({ error: "Search failed" }, { status: 500 });
  }
}
