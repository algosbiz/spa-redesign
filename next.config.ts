import type { NextConfig } from "next";
import { business } from "./src/data/business";
import { liveRedirects } from "./src/data/redirects";

// Requests on www.spabalimoon.com. Vercel's domain setting used to send www to
// spabalimoon.com itself (308), before this app saw the request, so an old URL
// on www took two hops (www → spabalimoon.com → new URL) and Ahrefs reported a
// redirect chain. With www attached to the project without a redirect, the rules
// below send every www URL straight to its final address on spabalimoon.com.
const onWww = [{ type: "host" as const, value: "www.spabalimoon.com" }];

const nextConfig: NextConfig = {
  // Every URL ends with "/" — exactly like the old website (SEO: keep URLs identical).
  // Visiting /contact redirects to /contact/.
  trailingSlash: true,

  // The dev server refuses its own scripts/HMR to any host other than localhost,
  // so a page opened through an ngrok tunnel loaded without JavaScript.
  // Dev-only — has no effect on the production build.
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok-free.dev", "*.ngrok.app"],

  images: {
    // Modern formats: smaller files, same quality.
    formats: ["image/avif", "image/webp"],
    // Next.js 16 requires the list of allowed image qualities.
    qualities: [75],

    /**
     * The image optimiser refuses SVGs by default and answers 400
     * ("image type is not allowed"), which showed every logo, treatment icon,
     * step icon and CTA frame on the site as a broken image.
     *
     * All the SVGs here are the client's own, copied from spabalimoon.com and
     * served from /public, so allowing them is safe — and the policy below
     * sandboxes them and blocks any script inside one.
     */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Old URLs → new URLs. The list lives in src/data/redirects.ts (see migration/url-map.md).
  // 301, not `permanent: true` (308): the live site answers 301, and older crawlers and
  // link checkers do not all treat a 308 the same way.
  async redirects() {
    return [
      // Old URL on www → new URL on spabalimoon.com, in one hop.
      ...liveRedirects.map((redirect) => ({
        source: redirect.from,
        has: onWww,
        destination: `${business.url}${redirect.to}`,
        statusCode: 301 as const,
      })),
      // Any other URL on www → the same URL on spabalimoon.com. `(.*)` rather than
      // `*` keeps the trailing slash; `:path*` drops it and adds a second hop.
      {
        source: "/:path(.*)",
        has: onWww,
        destination: `${business.url}/:path`,
        statusCode: 301 as const,
      },
      // Old URL on spabalimoon.com → new URL.
      ...liveRedirects.map((redirect) => ({
        source: redirect.from,
        destination: redirect.to,
        statusCode: 301 as const,
      })),
    ];
  },

  // Everything in /public is served `max-age=0, must-revalidate` by default, so
  // a returning visitor re-checks ~80 images and both fonts on every page.
  // These are the live site's headers (the old project's next.config.js):
  // photos are kept 30 days and refreshed in the background, fonts a year. A
  // photo replaced under the same name can take up to 30 days to reach someone
  // who already has it; give a changed photo a new file name to show it at once.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      {
        source: "/webfonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
