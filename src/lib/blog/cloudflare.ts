/**
 * Cloudflare cache purging (the live site's lib/cloudflare.js).
 *
 * Cloudflare sits in front of the origin and keeps serving a page it already
 * cached even after Next has rebuilt it, so saving an article also drops the
 * edge copies of the URLs it changed. Both env vars are optional: without
 * them every call is a no-op that reports `skipped`.
 *
 * Each language's domain is a zone of its own (src/i18n/config.ts):
 * CLOUDFLARE_ZONE_ID for spabalimoon.com, CLOUDFLARE_ZONE_ID_JA, _KO, _ZH and
 * _HI for the others. A URL is purged in its domain's zone; a domain whose
 * zone is not set is skipped.
 *
 * The API token needs one permission only: Zone -> Cache Purge -> Purge, on
 * every zone.
 */
import { activeLocales, defaultLocale, localeOfHost, type Locale } from "@/i18n/config";

const API_BASE = "https://api.cloudflare.com/client/v4";
// Purge-by-URL takes at most 30 URLs per request below the Enterprise plan.
const MAX_URLS_PER_REQUEST = 30;
// The article is already saved; a slow purge must not hold the admin's request open.
const TIMEOUT_MS = 5000;

export type PurgeResult = { ok: boolean; skipped?: string; purged?: string[]; error?: string };

const configured = () => Boolean(process.env.CLOUDFLARE_ZONE_ID && process.env.CLOUDFLARE_API_TOKEN);

/** The zone of a language's domain, if set. */
const zoneOf = (locale: Locale) =>
  locale === defaultLocale ? process.env.CLOUDFLARE_ZONE_ID : process.env[`CLOUDFLARE_ZONE_ID_${locale.toUpperCase()}`];

async function callPurgeApi(zone: string, body: { files: string[] } | { purge_everything: true }) {
  const res = await fetch(`${API_BASE}/zones/${zone}/purge_cache`, {
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
  // By domain: each one's URLs go to its own zone.
  const byZone = new Map<string, string[]>();
  for (const url of files) {
    const zone = zoneOf(localeOfHost(new URL(url).host) ?? defaultLocale);
    if (zone) byZone.set(zone, [...(byZone.get(zone) ?? []), url]);
  }
  try {
    for (const [zone, urls] of byZone) {
      for (let i = 0; i < urls.length; i += MAX_URLS_PER_REQUEST) {
        await callPurgeApi(zone, { files: urls.slice(i, i + MAX_URLS_PER_REQUEST) });
      }
    }
    return { ok: true, purged: [...byZone.values()].flat() };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("cloudflare: purge failed:", message, files);
    return { ok: false, error: message, purged: [] };
  }
}

/**
 * Drop everything Cloudflare holds for the site, as the deploy Action does:
 * for a change that shows on every page (the blog menu in the header). Never
 * throws. `locales`: the domains to drop, every live language's by default.
 */
export async function purgeEverything(locales: readonly Locale[] = activeLocales): Promise<PurgeResult> {
  if (!configured()) return { ok: true, skipped: "not configured" };
  const zones = [...new Set(locales.map(zoneOf).filter((zone): zone is string => Boolean(zone)))];
  try {
    for (const zone of zones) await callPurgeApi(zone, { purge_everything: true });
    return { ok: true, purged: ["everything"] };
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.error("cloudflare: purge everything failed:", message);
    return { ok: false, error: message, purged: [] };
  }
}
