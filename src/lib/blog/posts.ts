import { cache } from "react";
import seedPosts from "@/data/guide/seed-posts.json";
import { blogMenuHidden } from "@/data/navigation";
import { getSql, isDatabaseConfigured, toTimestamp } from "./db";
import type { Post, PostInput, PostRow, PostSummary } from "./types";

/**
 * Reading and writing guide articles. The rows live in the Neon database
 * (edited in /admin/). Until .env.local has DATABASE_URL, the public pages
 * fall back to the seven articles in src/data/guide/seed-posts.json, the same
 * rows `npm run blog:setup` loads into a fresh database, so the site never
 * shows an empty blog just because the database is not set up yet.
 */

type Row = Record<string, unknown>;

const seed = seedPosts as Post[];

const newestFirst = (a: Pick<Post, "published_at">, b: Pick<Post, "published_at">) =>
  (b.published_at ?? "").localeCompare(a.published_at ?? "");

const seedPublished = () => seed.filter((p) => p.status === "published").sort(newestFirst);

/** Dates come back from Postgres as Date objects; the pages expect the live API's strings. */
const withTimestamps = <T extends Row>(row: T): T => {
  const out: Row = { ...row };
  for (const key of ["published_at", "created_at", "updated_at"]) {
    if (key in out) out[key] = toTimestamp(out[key]);
  }
  return out as T;
};

const toSummary = ({ id, slug, title, excerpt, cover_image, category, author, show_date, published_at }: Post): PostSummary => ({
  id,
  slug,
  title,
  excerpt,
  cover_image,
  category,
  author,
  // The seed articles predate the column; missing means the date is shown.
  show_date: show_date !== false,
  published_at,
});

/* --------------------------------- Public --------------------------------- */

/** Every published article, newest first (the /guide/ list). */
export const getPublishedPosts = cache(async (): Promise<PostSummary[]> => {
  if (!isDatabaseConfigured()) return seedPublished().map(toSummary);
  const rows = await getSql()`
    SELECT id, slug, title, excerpt, cover_image, category, author, show_date, published_at
    FROM posts WHERE status = 'published' ORDER BY published_at DESC`;
  return rows.map((r) => withTimestamps(r) as PostSummary);
});

/** One published article by slug, or null. */
export const getPublishedPost = cache(async (slug: string): Promise<Post | null> => {
  if (!isDatabaseConfigured()) return seedPublished().find((p) => p.slug === slug) ?? null;
  const rows = await getSql()`SELECT * FROM posts WHERE slug = ${slug} AND status = 'published' LIMIT 1`;
  return rows[0] ? (withTimestamps(rows[0]) as Post) : null;
});

/** Slug, last change and cover of every published article, newest first (sitemap.xml). */
export async function getSitemapPosts(): Promise<{ slug: string; lastmod: string | null; image: string | null }[]> {
  const rows: Pick<Post, "slug" | "updated_at" | "published_at" | "cover_image">[] = isDatabaseConfigured()
    ? (
        await getSql()`
          SELECT slug, updated_at, published_at, cover_image
          FROM posts WHERE status = 'published' ORDER BY published_at DESC`
      ).map((r) => withTimestamps(r) as Post)
    : seedPublished();
  return rows.map((p) => ({ slug: p.slug, lastmod: p.updated_at || p.published_at, image: p.cover_image }));
}

/** The blog menu list: the 12 newest articles (live /api/search-posts/?menu=1). */
export async function getMenuPosts(): Promise<Pick<Post, "id" | "slug" | "title">[]> {
  if (!isDatabaseConfigured()) return seedPublished().slice(0, 12).map(({ id, slug, title }) => ({ id, slug, title }));
  const rows = await getSql()`
    SELECT id, slug, title FROM posts WHERE status = 'published' ORDER BY published_at DESC LIMIT 12`;
  return rows as Pick<Post, "id" | "slug" | "title">[];
}

export type BlogMenuPost = Pick<Post, "slug" | "title" | "cover_image">;

/**
 * The header's blog menu (desktop dropdown and mobile panel): the 12 newest
 * articles with their covers, without the ones the owner keeps out of the
 * menu (blogMenuHidden in navigation.ts).
 */
export async function getBlogMenu(): Promise<BlogMenuPost[]> {
  if (!isDatabaseConfigured()) {
    return seedPublished()
      .filter((p) => !blogMenuHidden.includes(p.slug))
      .slice(0, 12)
      .map(({ slug, title, cover_image }) => ({ slug, title, cover_image }));
  }
  const rows = await getSql()`
    SELECT slug, title, cover_image FROM posts
    WHERE status = 'published' AND NOT (slug = ANY(${blogMenuHidden}))
    ORDER BY published_at DESC LIMIT 12`;
  return rows as BlogMenuPost[];
}

type SearchHit =Pick<Post, "id" | "slug" | "title" | "excerpt" | "cover_image" | "author" | "published_at">;

/** Published articles whose title or excerpt contains `query` (case-insensitive), at most 10. */
export async function searchPublishedPosts(query: string): Promise<SearchHit[]> {
  if (!isDatabaseConfigured()) {
    const q = query.toLowerCase();
    return seedPublished()
      .filter((p) => p.title.toLowerCase().includes(q) || (p.excerpt ?? "").toLowerCase().includes(q))
      .slice(0, 10)
      .map(({ id, slug, title, excerpt, cover_image, author, published_at }) => ({
        id,
        slug,
        title,
        excerpt,
        cover_image,
        author,
        published_at,
      }));
  }
  // % and _ typed by the visitor are matched literally, not as wildcards.
  const pattern = `%${query.replace(/[\\%_]/g, "\\$&")}%`;
  const rows = await getSql()`
    SELECT id, slug, title, excerpt, cover_image, author, published_at
    FROM posts
    WHERE status = 'published' AND (title ILIKE ${pattern} OR excerpt ILIKE ${pattern})
    ORDER BY published_at DESC LIMIT 10`;
  return rows.map((r) => withTimestamps(r) as SearchHit);
}

/**
 * An article with what its page shows around it: the 3 latest other posts
 * (sidebar), the older ("Previous") and newer ("Next") neighbours, and 3 "More
 * Articles", preferring ones the neighbours do not already link to. The live
 * site's guide/[slug] rules, unchanged.
 */
export async function getGuideArticle(slug: string) {
  const post = await getPublishedPost(slug);
  if (!post) return null;

  const all = await getPublishedPosts();
  const i = all.findIndex((p) => p.slug === post.slug);
  const prevPost = i >= 0 ? all[i + 1] ?? null : null;
  const nextPost = i > 0 ? all[i - 1] ?? null : null;
  const others = all.filter((p) => p.slug !== post.slug);
  const neighbours = new Set([prevPost?.slug, nextPost?.slug].filter(Boolean));
  const morePosts = [
    ...others.filter((p) => !neighbours.has(p.slug)),
    ...others.filter((p) => neighbours.has(p.slug)),
  ].slice(0, 3);

  return { post, recentPosts: others.slice(0, 3), prevPost, nextPost, morePosts };
}

/* ---------------------------------- Admin --------------------------------- */
// These need the database: the admin pages check isDatabaseConfigured() first.

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Article ids are UUIDs; anything else cannot exist and is not sent to the database. */
export const isPostId = (id: string) => UUID.test(id);

/** Every article, drafts included, last edited first. */
export async function listPostRows(): Promise<PostRow[]> {
  const rows = await getSql()`
    SELECT id, slug, title, status, category, published_at, updated_at
    FROM posts ORDER BY updated_at DESC`;
  return rows.map((r) => withTimestamps(r) as PostRow);
}

/** One article by id, drafts included, or null. */
export async function getPostById(id: string): Promise<Post | null> {
  if (!isPostId(id)) return null;
  const rows = await getSql()`SELECT * FROM posts WHERE id = ${id} LIMIT 1`;
  return rows[0] ? (withTimestamps(rows[0]) as Post) : null;
}

/** `base`, or `base-1`, `base-2`… if another article already has it. */
export async function ensureUniqueSlug(base: string, excludeId?: string): Promise<string> {
  const sql = getSql();
  for (let i = 0; ; i++) {
    const slug = i === 0 ? base : `${base}-${i}`;
    const rows = excludeId
      ? await sql`SELECT 1 FROM posts WHERE slug = ${slug} AND id <> ${excludeId} LIMIT 1`
      : await sql`SELECT 1 FROM posts WHERE slug = ${slug} LIMIT 1`;
    if (!rows.length) return slug;
  }
}

/** Insert a new article and return it. */
export async function insertPost(input: PostInput, publishedAt: string | null): Promise<Post> {
  const rows = await getSql()`
    INSERT INTO posts (title, heading, slug, excerpt, cover_image, content_html, category, tags, author, status,
                       seo_title, seo_description, show_date, published_at)
    VALUES (${input.title}, ${input.heading}, ${input.slug}, ${input.excerpt}, ${input.cover_image}, ${input.content_html},
            ${input.category}, ${input.tags}, ${input.author}, ${input.status},
            ${input.seo_title}, ${input.seo_description}, ${input.show_date}, ${publishedAt})
    RETURNING *`;
  return withTimestamps(rows[0]) as Post;
}

/** Overwrite an article and return it, or null if it no longer exists. */
export async function updatePost(id: string, input: PostInput, publishedAt: string | null): Promise<Post | null> {
  const rows = await getSql()`
    UPDATE posts SET
      title = ${input.title}, heading = ${input.heading}, slug = ${input.slug}, excerpt = ${input.excerpt},
      cover_image = ${input.cover_image}, content_html = ${input.content_html},
      category = ${input.category}, tags = ${input.tags}, author = ${input.author},
      status = ${input.status}, seo_title = ${input.seo_title}, seo_description = ${input.seo_description},
      show_date = ${input.show_date}, published_at = ${publishedAt}, updated_at = now()
    WHERE id = ${id}
    RETURNING *`;
  return rows[0] ? (withTimestamps(rows[0]) as Post) : null;
}

/** Delete an article for good. */
export async function deletePost(id: string): Promise<void> {
  await getSql()`DELETE FROM posts WHERE id = ${id}`;
}
