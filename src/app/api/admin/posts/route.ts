import type { Locale } from "@/i18n/config";
import { isDatabaseConfigured } from "@/lib/blog/db";
import { readPostInput } from "@/lib/blog/input";
import { ensureUniqueSlug, getPostLanguages, insertPost, listPostRows } from "@/lib/blog/posts";
import { readBlogMenu, refreshGuidePages } from "@/lib/blog/refresh";
import { denyUnlessAdmin } from "@/lib/blog/session";
import { DATABASE_MISSING } from "@/lib/blog/setup";

const notConfigured = () => Response.json({ error: DATABASE_MISSING }, { status: 503 });
const failed = (e: unknown, fallback: string) =>
  Response.json({ error: e instanceof Error ? e.message : fallback }, { status: 500 });

/** GET — every article, drafts included (admin dashboard). */
export async function GET() {
  const denied = await denyUnlessAdmin();
  if (denied) return denied;
  if (!isDatabaseConfigured()) return notConfigured();
  try {
    return Response.json({ posts: await listPostRows() });
  } catch (e) {
    return failed(e, "Failed to load articles.");
  }
}

/** POST — create an article. */
export async function POST(request: Request) {
  const denied = await denyUnlessAdmin();
  if (denied) return denied;
  if (!isDatabaseConfigured()) return notConfigured();

  const parsed = readPostInput(await request.json().catch(() => null));
  if ("error" in parsed) return Response.json({ error: parsed.error }, { status: 400 });
  const { input } = parsed;

  try {
    const locale = input.locale as Locale;
    const slug = await ensureUniqueSlug(input.slug, locale);
    const menuBefore = input.status === "published" ? await readBlogMenu(locale) : null;
    const post = await insertPost(
      { ...input, slug },
      input.status === "published" ? new Date().toISOString() : null
    );
    // A draft is not on the public site, so no cached page can be stale.
    // A published translation also changes its other languages' pages (hreflang).
    const cache =
      input.status === "published"
        ? await refreshGuidePages({ slug: post.slug, menuBefore, locale, languages: await getPostLanguages(post) })
        : null;
    return Response.json({ post, cache }, { status: 201 });
  } catch (e) {
    return failed(e, "Failed to save.");
  }
}
