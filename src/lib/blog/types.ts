/**
 * A guide article as stored in the `posts` table (db/schema.sql, on Neon).
 * The column names are the live site's (Supabase), so rows can move between
 * the two sites unchanged.
 */
export type PostStatus = "draft" | "published";

export type Post = {
  id: string;
  slug: string;
  title: string;
  /** The heading above the body when it differs from the title; null shows the title. */
  heading: string | null;
  excerpt: string | null;
  cover_image: string | null;
  content_html: string;
  category: string | null;
  tags: string[] | null;
  author: string | null;
  status: PostStatus;
  seo_title: string | null;
  seo_description: string | null;
  /** False hides the publish date on the article page. */
  show_date: boolean;
  published_at: string | null;
  created_at: string | null;
  updated_at: string | null;
};

/** What the article list, the sidebar and the previous/next links need. */
export type PostSummary = Pick<
  Post,
  "id" | "slug" | "title" | "excerpt" | "cover_image" | "category" | "author" | "show_date" | "published_at"
>;

/** One row of the admin dashboard. */
export type PostRow = Pick<Post, "id" | "slug" | "title" | "status" | "category" | "published_at" | "updated_at">;

/** What the admin editor sends when it saves. */
export type PostInput = {
  title: string;
  heading: string | null;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  content_html: string;
  category: string | null;
  tags: string[];
  author: string;
  status: PostStatus;
  seo_title: string | null;
  seo_description: string | null;
  show_date: boolean;
};
