import { makeSlug } from "./slug";
import type { PostInput } from "./types";

const text = (value: unknown) => (typeof value === "string" ? value : "");
const optional = (value: unknown) => text(value).trim() || null;

/**
 * The editor's JSON body as a row to save, or an error message. The slug is
 * cleaned here; making it unique is the caller's job (it needs the database).
 */
export function readPostInput(body: unknown): { input: PostInput } | { error: string } {
  const b = (body && typeof body === "object" ? body : {}) as Record<string, unknown>;
  const title = text(b.title).trim();
  if (!title) return { error: "Title is required." };

  return {
    input: {
      title,
      heading: optional(b.heading),
      slug: makeSlug(text(b.slug) || title) || `post-${Date.now()}`,
      excerpt: optional(b.excerpt),
      cover_image: optional(b.cover_image),
      content_html: text(b.content_html),
      category: optional(b.category),
      tags: Array.isArray(b.tags) ? b.tags.map(text).map((t) => t.trim()).filter(Boolean) : [],
      author: text(b.author).trim() || "Admin",
      status: b.status === "published" ? "published" : "draft",
      seo_title: optional(b.seo_title),
      seo_description: optional(b.seo_description),
      // Only an explicit false hides the date, so older clients keep showing it.
      show_date: b.show_date !== false,
    },
  };
}
