import { cache } from "react";
import { treatmentSeeds } from "@/content/treatments";
import { sitemapPages } from "@/data/sitemap";
import { getTreatment } from "@/data/treatments";
import { getSql, isDatabaseConfigured, toTimestamp } from "@/lib/blog/db";
import { applySavedTree } from "./merge";
import type { TreatmentSeo, TreeNode } from "./tree";

/**
 * Treatment page content: the built-in version (src/content/treatments/ for
 * the body, src/data/treatments/ for the SEO texts) unless the page was
 * edited in /admin/, in which case the `page_content` row for its address
 * (Neon) is used. "Restore original" deletes that row.
 */

export const treatmentPath = (slug: string) => `/seminyak/${slug}/`;

let tableReady: Promise<unknown> | null = null;

/** Create the table on first use, so no setup step is needed after deploying. See db/schema.sql. */
export function ensurePageContentTable() {
  tableReady ??= getSql()`
    CREATE TABLE IF NOT EXISTS page_content (
      path text PRIMARY KEY,
      body jsonb NOT NULL,
      seo jsonb,
      updated_at timestamptz NOT NULL DEFAULT now()
    )`.catch((e) => {
    tableReady = null;
    throw e;
  });
  return tableReady;
}

const missingTable = (e: unknown) => (e as { code?: string })?.code === "42P01";

/**
 * Saves made in /admin/ before the AEO roadmap changes (17 Oct 2026; before
 * that, the copy rewrite of 15 Oct) are not used. No page had been saved
 * between the two (the staging pages all still showed the 15 Oct date).
 * Saves made in /admin/ before the copy rewrite (15 Oct 2026) are not used:
 * the rewrite changed the text and the sections of every treatment page, and
 * a saved copy wins over both (or, once the sections differ, is shown as it
 * was saved). The owner's edits in those saves (Sport, Sunburn, Thai,
 * Traditional, Waxing: paragraphs, lists and FAQs, as live at this moment)
 * were copied into src/content/treatments/ first, so nothing is lost. Any
 * later save is used as usual. The old rows stay in the table and are
 * replaced by the page's next save.
 */
const SAVED_BEFORE_IGNORED = "2026-10-17T02:00:00Z";

/** When the built-in pages were last changed: the copy rewrite. Shown as "Last updated". */
export const BUILT_IN_UPDATED_AT = SAVED_BEFORE_IGNORED;

/**
 * A built-in page's own last change: its sitemap date when that is later than
 * the copy rewrite (new pages and price changes, 24 Oct), so "Last updated"
 * and the sitemap agree.
 */
function builtInUpdatedAt(slug: string): string {
  const page = sitemapPages.find((p) => p.loc.endsWith(treatmentPath(slug)));
  return page && Date.parse(page.lastmod) > Date.parse(BUILT_IN_UPDATED_AT) ? page.lastmod : BUILT_IN_UPDATED_AT;
}

type SavedRow = { body: TreeNode; seo: Partial<TreatmentSeo> | null; updated_at: string | null };

async function readSaved(slug: string): Promise<SavedRow | null> {
  if (!isDatabaseConfigured()) return null;
  try {
    const rows = await getSql()`
      SELECT body, seo, updated_at FROM page_content
      WHERE path = ${treatmentPath(slug)} AND updated_at >= ${SAVED_BEFORE_IGNORED}`;
    if (!rows.length) return null;
    const row = rows[0];
    return { body: row.body as TreeNode, seo: row.seo as SavedRow["seo"], updated_at: toTimestamp(row.updated_at) };
  } catch (e) {
    // Before the first save the table does not exist yet: every page is built-in.
    if (missingTable(e)) return null;
    // Anything else is thrown on purpose, as on the guide pages: Next keeps
    // serving the last good page instead of the built-in version.
    throw e;
  }
}

export type TreatmentContent = {
  slug: string;
  name: string;
  tree: TreeNode;
  seo: TreatmentSeo;
  /** The built-in versions, for "Restore" in the editor. */
  original: { tree: TreeNode; seo: TreatmentSeo };
  /** When it was last saved in /admin/; null while it is the built-in version. */
  editedAt: string | null;
  /** The later of that save and the last change to the built-in version. */
  updatedAt: string;
};

/** One treatment page as the site shows it. Null for an unknown slug. Cached per request. */
export const getTreatmentContent = cache(async (slug: string): Promise<TreatmentContent | null> => {
  const seed = treatmentSeeds[slug];
  const treatment = getTreatment(slug);
  if (!seed || !treatment) return null;
  const saved = await readSaved(slug);
  return {
    slug,
    name: treatment.name,
    tree: saved ? applySavedTree(seed, saved.body) : seed,
    seo: { ...treatment.seo, ...(saved?.seo ?? {}) },
    original: { tree: seed, seo: treatment.seo },
    editedAt: saved ? saved.updated_at : null,
    updatedAt:
      saved?.updated_at && Date.parse(saved.updated_at) > Date.parse(builtInUpdatedAt(slug))
        ? saved.updated_at
        : builtInUpdatedAt(slug),
  };
});

/** When each edited page was last saved, by slug. */
export async function listEditedTreatments(): Promise<Record<string, string>> {
  if (!isDatabaseConfigured()) return {};
  try {
    const rows = await getSql()`
      SELECT path, updated_at FROM page_content
      WHERE path LIKE '/seminyak/%' AND updated_at >= ${SAVED_BEFORE_IGNORED}`;
    return Object.fromEntries(
      rows.map((r) => [String(r.path).replace(/^\/seminyak\/|\/$/g, ""), toTimestamp(r.updated_at) ?? ""])
    );
  } catch (e) {
    if (missingTable(e)) return {};
    throw e;
  }
}

export async function saveTreatmentContent(slug: string, tree: TreeNode, seo: TreatmentSeo): Promise<string | null> {
  await ensurePageContentTable();
  const original = getTreatment(slug)?.seo;
  // Only SEO texts that differ from the built-in ones are stored, so a later
  // change to the built-in ones still shows where the owner kept them.
  const seoOverride: Partial<TreatmentSeo> = {};
  if (seo.title !== original?.title) seoOverride.title = seo.title;
  if (seo.description !== original?.description) seoOverride.description = seo.description;
  const rows = await getSql()`
    INSERT INTO page_content (path, body, seo, updated_at)
    VALUES (${treatmentPath(slug)}, ${JSON.stringify(tree)}::jsonb, ${JSON.stringify(seoOverride)}::jsonb, now())
    ON CONFLICT (path) DO UPDATE SET body = EXCLUDED.body, seo = EXCLUDED.seo, updated_at = now()
    RETURNING updated_at`;
  return toTimestamp(rows[0]?.updated_at);
}

/** Back to the built-in version. */
export async function restoreTreatmentContent(slug: string): Promise<void> {
  await ensurePageContentTable();
  await getSql()`DELETE FROM page_content WHERE path = ${treatmentPath(slug)}`;
}
