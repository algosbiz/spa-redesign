import { cache } from "react";
import seedPosts from "@/data/guide/seed-posts.json";
import { blogMenuHidden } from "@/data/navigation";
import { activeLocales, defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { getSql, isDatabaseConfigured, toTimestamp } from "./db";
import type { Post, PostInput, PostRow, PostSummary } from "./types";

/**
 * Reading and writing guide articles. The rows live in the Neon database
 * (edited in /admin/). Until .env.local has DATABASE_URL, the public pages
 * fall back to the nine articles in src/data/guide/seed-posts.json, the same
 * rows `npm run blog:setup` loads into a fresh database, so the site never
 * shows an empty blog just because the database is not set up yet.
 *
 * Every article has a language (`locale`, src/i18n/config.ts), and each
 * language's pages list only its own articles. A translation is an article
 * of its own: `translation_of` names the article it translates, and it
 * usually keeps that article's slug, so its address is the same path in its
 * language's folder (/ja/guide/…/). The seed articles are English.
 */

type Row = Record<string, unknown>;

const seed = seedPosts as Post[];

const newestFirst = (a: Pick<Post, "published_at">, b: Pick<Post, "published_at">) =>
  (b.published_at ?? "").localeCompare(a.published_at ?? "");

const seedPublished = (locale: Locale = defaultLocale) =>
  locale === defaultLocale ? seed.filter((p) => p.status === "published").sort(newestFirst) : [];

let localeReady: Promise<unknown> | null = null;

/**
 * The language columns (db/schema.sql), added on first use so no setup step
 * is needed after deploying: one look at the table, and the changes only
 * when the columns are missing. Slugs become unique per language, so a
 * translation can keep its article's slug.
 */
function ensureLocaleColumns() {
  localeReady ??= (async () => {
    const sql = getSql();
    const found = await sql`
      SELECT 1 FROM information_schema.columns WHERE table_name = 'posts' AND column_name = 'translation_of'`;
    if (found.length) return;
    await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS locale text NOT NULL DEFAULT 'en'`;
    await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS translation_of uuid REFERENCES posts (id) ON DELETE SET NULL`;
    await sql`ALTER TABLE posts DROP CONSTRAINT IF EXISTS posts_slug_key`;
    await sql`CREATE UNIQUE INDEX IF NOT EXISTS posts_locale_slug_idx ON posts (locale, slug)`;
  })().catch((e) => {
    localeReady = null;
    throw e;
  });
  return localeReady;
}

/** The database's query function, once the language columns exist. */
async function db() {
  await ensureLocaleColumns();
  return getSql();
}

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

/** Every published article in a language, newest first (the /guide/ list). */
export const getPublishedPosts = cache(async (locale: Locale = defaultLocale): Promise<PostSummary[]> => {
  if (!isDatabaseConfigured()) return seedPublished(locale).map(toSummary);
  const rows = await (await db())`
    SELECT id, slug, title, excerpt, cover_image, category, author, show_date, published_at
    FROM posts WHERE status = 'published' AND locale = ${locale} ORDER BY published_at DESC`;
  return rows.map((r) => withTimestamps(r) as PostSummary);
});

/** One published article in a language by slug, or null. */
export const getPublishedPost = cache(async (slug: string, locale: Locale = defaultLocale): Promise<Post | null> => {
  if (!isDatabaseConfigured()) return seedPublished(locale).find((p) => p.slug === slug) ?? null;
  const rows = await (await db())`
    SELECT * FROM posts WHERE slug = ${slug} AND locale = ${locale} AND status = 'published' LIMIT 1`;
  return rows[0] ? (withTimestamps(rows[0]) as Post) : null;
});

type LanguageSlugs = Partial<Record<Locale, string>>;

/**
 * Slug, last change and cover of every published article in a language,
 * newest first, with its slug in every live language it exists in
 * (sitemap.xml).
 */
export async function getSitemapPosts(
  locale: Locale = defaultLocale,
): Promise<{ slug: string; lastmod: string | null; image: string | null; languages: LanguageSlugs }[]> {
  if (!isDatabaseConfigured()) {
    return seedPublished(locale).map((p) => ({
      slug: p.slug,
      lastmod: p.updated_at || p.published_at,
      image: p.cover_image,
      languages: {},
    }));
  }
  const rows = (
    await (await db())`
      SELECT id, slug, locale, translation_of, updated_at, published_at, cover_image
      FROM posts WHERE status = 'published' ORDER BY published_at DESC`
  ).map((r) => withTimestamps(r) as Post);
  const groups = languageGroups(rows);
  return rows
    .filter((p) => p.locale === locale)
    .map((p) => ({
      slug: p.slug,
      lastmod: p.updated_at || p.published_at,
      image: p.cover_image,
      languages: groups.get(p.translation_of || p.id) ?? {},
    }));
}

/** An article's slug in every live language it exists in: its page's hreflang links. */
export async function getPostLanguages(post: Post): Promise<LanguageSlugs> {
  if (!isDatabaseConfigured()) return {};
  const group = post.translation_of || post.id;
  const rows = (await (await db())`
    SELECT id, slug, locale, translation_of FROM posts
    WHERE status = 'published' AND (id = ${group} OR translation_of = ${group})`) as Post[];
  return languageGroups(rows).get(group) ?? {};
}

/** Per article (an article's id groups it with its translations): its slug in each live language. */
function languageGroups(rows: Pick<Post, "id" | "slug" | "locale" | "translation_of">[]) {
  const groups = new Map<string, LanguageSlugs>();
  for (const row of rows) {
    const locale = row.locale ?? defaultLocale;
    if (!isLocale(locale) || !activeLocales.includes(locale)) continue;
    const key = row.translation_of || row.id;
    groups.set(key, { ...groups.get(key), [locale]: row.slug });
  }
  return groups;
}

/** The blog menu list: the 12 newest articles in a language (live /api/search-posts/?menu=1). */
export async function getMenuPosts(locale: Locale = defaultLocale): Promise<Pick<Post, "id" | "slug" | "title">[]> {
  if (!isDatabaseConfigured()) return seedPublished(locale).slice(0, 12).map(({ id, slug, title }) => ({ id, slug, title }));
  const rows = await (await db())`
    SELECT id, slug, title FROM posts WHERE status = 'published' AND locale = ${locale}
    ORDER BY published_at DESC LIMIT 12`;
  return rows as Pick<Post, "id" | "slug" | "title">[];
}

export type BlogMenuPost = Pick<Post, "slug" | "title" | "cover_image">;

/**
 * The header's blog menu (desktop dropdown and mobile panel): the 12 newest
 * articles in a language with their covers, without the ones the owner keeps
 * out of the menu (blogMenuHidden in navigation.ts).
 */
export async function getBlogMenu(locale: Locale = defaultLocale): Promise<BlogMenuPost[]> {
  if (!isDatabaseConfigured()) {
    return seedPublished(locale)
      .filter((p) => !blogMenuHidden.includes(p.slug))
      .slice(0, 12)
      .map(({ slug, title, cover_image }) => ({ slug, title, cover_image }));
  }
  const rows = await (await db())`
    SELECT slug, title, cover_image FROM posts
    WHERE status = 'published' AND locale = ${locale} AND NOT (slug = ANY(${blogMenuHidden}))
    ORDER BY published_at DESC LIMIT 12`;
  return rows as BlogMenuPost[];
}

type SearchHit =Pick<Post, "id" | "slug" | "title" | "excerpt" | "cover_image" | "author" | "published_at">;

/** Published articles in a language whose title or excerpt contains `query` (case-insensitive), at most 10. */
export async function searchPublishedPosts(query: string, locale: Locale = defaultLocale): Promise<SearchHit[]> {
  if (!isDatabaseConfigured()) {
    const q = query.toLowerCase();
    return seedPublished(locale)
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
  const rows = await (await db())`
    SELECT id, slug, title, excerpt, cover_image, author, published_at
    FROM posts
    WHERE status = 'published' AND locale = ${locale} AND (title ILIKE ${pattern} OR excerpt ILIKE ${pattern})
    ORDER BY published_at DESC LIMIT 10`;
  return rows.map((r) => withTimestamps(r) as SearchHit);
}

/**
 * An article with what its page shows around it: the 3 latest other posts
 * (sidebar), the older ("Previous") and newer ("Next") neighbours, and 3 "More
 * Articles", preferring ones the neighbours do not already link to. The live
 * site's guide/[slug] rules, unchanged, among the articles of its language.
 */
export async function getGuideArticle(slug: string, locale: Locale = defaultLocale) {
  const post = await getPublishedPost(slug, locale);
  if (!post) return null;

  const all = await getPublishedPosts(locale);
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

/** Every article, drafts and every language included, last edited first. */
export async function listPostRows(): Promise<PostRow[]> {
  const rows = await (await db())`
    SELECT id, slug, title, status, category, published_at, updated_at, locale, translation_of
    FROM posts ORDER BY updated_at DESC`;
  return rows.map((r) => withTimestamps(r) as PostRow);
}

/** The English articles, drafts included, last edited first: what a translation can translate (the editor). */
export async function listOriginalArticles(): Promise<{ id: string; title: string; slug: string }[]> {
  const rows = await (await db())`
    SELECT id, title, slug FROM posts WHERE locale = ${defaultLocale} ORDER BY updated_at DESC`;
  return rows as { id: string; title: string; slug: string }[];
}

/** One article by id, drafts included, or null. */
export async function getPostById(id: string): Promise<Post | null> {
  if (!isPostId(id)) return null;
  const rows = await (await db())`SELECT * FROM posts WHERE id = ${id} LIMIT 1`;
  return rows[0] ? (withTimestamps(rows[0]) as Post) : null;
}

/** `base`, or `base-1`, `base-2`… if another article in the same language already has it. */
export async function ensureUniqueSlug(base: string, locale: string, excludeId?: string): Promise<string> {
  const sql = await db();
  for (let i = 0; ; i++) {
    const slug = i === 0 ? base : `${base}-${i}`;
    const rows = excludeId
      ? await sql`SELECT 1 FROM posts WHERE slug = ${slug} AND locale = ${locale} AND id <> ${excludeId} LIMIT 1`
      : await sql`SELECT 1 FROM posts WHERE slug = ${slug} AND locale = ${locale} LIMIT 1`;
    if (!rows.length) return slug;
  }
}

/** Insert a new article and return it. */
export async function insertPost(input: PostInput, publishedAt: string | null): Promise<Post> {
  const rows = await (await db())`
    INSERT INTO posts (title, slug, excerpt, cover_image, content_html, category, tags, author, status,
                       seo_title, seo_description, show_date, published_at, locale, translation_of)
    VALUES (${input.title}, ${input.slug}, ${input.excerpt}, ${input.cover_image}, ${input.content_html},
            ${input.category}, ${input.tags}, ${input.author}, ${input.status},
            ${input.seo_title}, ${input.seo_description}, ${input.show_date}, ${publishedAt},
            ${input.locale}, ${input.translation_of})
    RETURNING *`;
  return withTimestamps(rows[0]) as Post;
}

/** Overwrite an article and return it, or null if it no longer exists. */
export async function updatePost(id: string, input: PostInput, publishedAt: string | null): Promise<Post | null> {
  const rows = await (await db())`
    UPDATE posts SET
      title = ${input.title}, slug = ${input.slug}, excerpt = ${input.excerpt},
      cover_image = ${input.cover_image}, content_html = ${input.content_html},
      category = ${input.category}, tags = ${input.tags}, author = ${input.author},
      status = ${input.status}, seo_title = ${input.seo_title}, seo_description = ${input.seo_description},
      show_date = ${input.show_date}, published_at = ${publishedAt},
      locale = ${input.locale}, translation_of = ${input.translation_of}, updated_at = now()
    WHERE id = ${id}
    RETURNING *`;
  return rows[0] ? (withTimestamps(rows[0]) as Post) : null;
}

/** Delete an article for good. */
export async function deletePost(id: string): Promise<void> {
  await (await db())`DELETE FROM posts WHERE id = ${id}`;
}
