/**
 * Cloudflare cache purging (the live site's lib/cloudflare.js).
 *
 * Cloudflare sits in front of the origin and keeps serving a page it already
 * cached even after Next has rebuilt it, so saving an article also drops the
 * edge copies of the URLs it changed. Both env vars are optional: without
 * them every call is a no-op that reports `skipped`.
 *
 * The API token needs one permission only: Zone -> Cache Purge -> Purge.
 */

const API_BASE = "https://api.cloudflare.com/client/v4";
// Purge-by-URL takes at most 30 URLs per request below the Enterprise plan.
const MAX_URLS_PER_REQUEST = 30;
// The article is already saved; a slow purge must not hold the admin's request open.
const TIMEOUT_MS = 5000;

export type PurgeResult = { ok: boolean; skipped?: string; purged?: string[]; error?: string };

const configured = () => Boolean(process.env.CLOUDFLARE_ZONE_ID && process.env.CLOUDFLARE_API_TOKEN);

async function callPurgeApi(body: { files: string[] } | { purge_everything: true }) {
  const res = await fetch(`${API_BASE}/zones/${process.env.CLOUDFLARE_ZONE_ID}/purge_cache`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  // Cloudflare can answer 200 with { success: false }, so check both.
  const json = (await res.json().catch(() => null)) as { success?: boolean; errors?: { code: number; message: string }[] } | null;
  if (!res.ok || !json?.success) {
    throw new Error(json?.errors?.map((e) => `${e.code} ${e.message}`).join("; ") || `HTTP ${res.status}`);
  }
}

/** Purge these absolute URLs. Never throws: a failed purge is reported, not raised. */
export async function purgeUrls(urls: string[]): Promise<PurgeResult> {
  const files = [...new Set(urls.filter(Boolean))];
  if (!files.length) return { ok: true, skipped: "no urls" };
  if (!configured()) return { ok: true, skipped: "not configured" };
  try {
    for (let i = 0; i < files.length; i += MAX_URLS_PER_REQUEST) {
      await callPurgeApi({ files: files.slice(i, i + MAX_URLS_PER_REQUEST) });
    }
    return { ok: true, purged: files };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("cloudflare: purge failed:", message, files);
    return { ok: false, error: message, purged: [] };
  }
}

/**
 * Drop everything Cloudflare holds for the site, as the deploy Action does:
 * for a change that shows on every page (the blog menu in the header). Never
 * throws.
 */
export async function purgeEverything(): Promise<PurgeResult> {
  if (!configured()) return { ok: true, skipped: "not configured" };
  try {
    await callPurgeApi({ purge_everything: true });
    return { ok: true, purged: ["everything"] };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("cloudflare: purge everything failed:", message);
    return { ok: false, error: message, purged: [] };
  }
}
