import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

/**
 * The blog database: a Neon Postgres project, reached over HTTPS with the Neon
 * serverless driver. DATABASE_URL is the project's connection string (Neon
 * console -> Connect). Server code only: route handlers and server
 * components. The variable has no NEXT_PUBLIC_ prefix, so it never reaches the
 * browser, and it is read when the server runs, not frozen into the build.
 */

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

/** Waits between tries, in ms: three tries in all. */
const RETRY_WAITS = [1000, 3000];

/** The database was not reached (a timeout, a dropped connection); an error Postgres answered with has no sourceError. */
const notReached = (e: unknown) => Boolean((e as { sourceError?: unknown } | null)?.sourceError);

/**
 * While the site is being built, a read that could not reach the database is
 * tried again: one connection timeout failed the production deploy of 25 Nov
 * 2026. Reads only (SELECT), so nothing is ever written twice, and only during
 * the build, so a visit never waits for the retries.
 */
function withBuildRetries(sql: NeonQueryFunction<false, false>): NeonQueryFunction<false, false> {
  if (process.env.NEXT_PHASE !== "phase-production-build") return sql;
  return new Proxy(sql, {
    apply(target, thisArg, args) {
      const run = () => Reflect.apply(target, thisArg, args);
      const strings: unknown = args[0];
      if (!Array.isArray(strings) || !/^\s*SELECT\b/i.test(String(strings[0]))) return run();
      return (async () => {
        for (let attempt = 0; ; attempt++) {
          try {
            return await run();
          } catch (e) {
            if (attempt >= RETRY_WAITS.length || !notReached(e)) throw e;
            console.warn(`Database not reached, trying again (${attempt + 2} of ${RETRY_WAITS.length + 1})`);
            await new Promise((resolve) => setTimeout(resolve, RETRY_WAITS[attempt]));
          }
        }
      })();
    },
  });
}

let client: NeonQueryFunction<false, false> | null = null;

/** The tagged-template query function: sql`SELECT … WHERE id = ${id}` (values are sent as parameters). */
export function getSql(): NeonQueryFunction<false, false> {
  if (!isDatabaseConfigured()) throw new Error("The blog database is not configured: set DATABASE_URL.");
  client ??= withBuildRetries(neon(process.env.DATABASE_URL!));
  return client;
}

/**
 * A timestamptz as the live site's Supabase API wrote it, e.g.
 * "2026-06-24T08:57:11+00:00" or "2026-09-13T13:22:37.272+00:00": UTC, no
 * trailing zeros in the fraction. The article pages print published_at into
 * <time dateTime>, so the spelling has to stay the same.
 */
export function toTimestamp(value: unknown): string | null {
  if (value == null || value === "") return null;
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return null;
  return date
    .toISOString()
    .replace(/(\.\d*?)0*Z$/, "$1Z")
    .replace(/\.Z$/, "Z")
    .replace(/Z$/, "+00:00");
}
