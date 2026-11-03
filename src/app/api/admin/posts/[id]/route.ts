import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { isDatabaseConfigured } from "@/lib/blog/db";
import { readPostInput } from "@/lib/blog/input";
import { deletePost, ensureUniqueSlug, getPostById, getPostLanguages, isPostId, updatePost } from "@/lib/blog/posts";
import { readBlogMenu, refreshGuidePages } from "@/lib/blog/refresh";
import { denyUnlessAdmin } from "@/lib/blog/session";
import { DATABASE_MISSING } from "@/lib/blog/setup";

type Context = { params: Promise<{ id: string }> };

const notFound = () => Response.json({ error: "Article not found." }, { status: 404 });
/** An article's language; the articles written before the column are English. */
const localeOf = (post: { locale?: string }): Locale => (post.locale && isLocale(post.locale) ? post.locale : defaultLocale);
const failed = (e: unknown, fallback: string) =>
  Response.json({ error: e instanceof Error ? e.message : fallback }, { status: 500 });

/** Login, database and id checks shared by every method: an error response, or the id. */
async function guard({ params }: Context): Promise<Response | string> {
  const denied = await denyUnlessAdmin();
  if (denied) return denied;
  if (!isDatabaseConfigured()) return Response.json({ error: DATABASE_MISSING }, { status: 503 });
  const { id } = await params;
  return isPostId(id) ? id : notFound();
}

/** GET — one article, drafts included. */
export async function GET(_request: Request, context: Context) {
  const id = await guard(context);
  if (id instanceof Response) return id;
  try {
    const post = await getPostById(id);
    return post ? Response.json({ post }) : notFound();
  } catch (e) {
    return failed(e, "Failed to load the article.");
  }
}

/** PUT — update an article. */
export async function PUT(request: Request, context: Context) {
  const id = await guard(context);
  if (id instanceof Response) return id;

  const parsed = readPostInput(await request.json().catch(() => null));
  if ("error" in parsed) return Response.json({ error: parsed.error }, { status: 400 });
  const { input } = parsed;

  try {
    // The previous slug and status are needed afterwards: a rename has to purge
    // the old URL, and un-publishing has to purge the URL that disappears.
    const existing = await getPostById(id);
    if (!existing) return notFound();

    const locale = input.locale as Locale;
    const slug = await ensureUniqueSlug(input.slug, locale, id);
    // Keep the first publish date; a draft has none.
    const publishedAt = input.status === "published" ? existing.published_at || new Date().toISOString() : null;
    // Only a draft staying a draft changes nothing public.
    const isPublic = input.status === "published" || existing.status === "published";
    const menuBefore = isPublic ? await readBlogMenu(locale) : null;
    const post = await updatePost(id, { ...input, slug }, publishedAt);
    if (!post) return notFound();

    // Moved to another language: its old address is dropped with the other languages'.
    const before = localeOf(existing);
    const languages = { ...(await getPostLanguages(post)), ...(before !== locale ? { [before]: existing.slug } : {}) };
    const cache = isPublic
      ? await refreshGuidePages({ slug: post.slug, previousSlug: existing.slug, menuBefore, locale, languages })
      : null;
    return Response.json({ post, cache });
  } catch (e) {
    return failed(e, "Failed to save.");
  }
}

/** DELETE — remove an article for good. */
export async function DELETE(_request: Request, context: Context) {
  const id = await guard(context);
  if (id instanceof Response) return id;

  try {
    // Read the slug before the row is gone: afterwards nothing says which URL to purge.
    const doomed = await getPostById(id);
    if (!doomed) return notFound();
    const locale = localeOf(doomed);
    const menuBefore = doomed.status === "published" ? await readBlogMenu(locale) : null;
    const languages = doomed.status === "published" ? await getPostLanguages(doomed) : {};
    await deletePost(id);

    const cache =
      doomed.status === "published" ? await refreshGuidePages({ slug: doomed.slug, menuBefore, locale, languages }) : null;
    return Response.json({ ok: true, cache });
  } catch (e) {
    return failed(e, "Failed to delete.");
  }
}
