/**
 * Decorative leaves in the corners of the treatment sections — the live
 * site's helper, ported as-is. The pair of leaves is chosen from the
 * section's photo: the treatment folder name picks a starting pair (a small
 * string hash), the section kind and photo number shift it, so each page gets
 * its own mix and neighbouring sections differ.
 */
const LEAF_PAIRS: [string, string][] = [
  ["/images/shape/leaf/2a.webp", "/images/shape/leaf/3a.webp"],
  ["/images/shape/leaf/4a.webp", "/images/shape/leaf/5a.webp"],
  ["/images/shape/leaf/6a.webp", "/images/shape/leaf/7a.webp"],
  ["/images/shape/leaf/8a.webp", "/images/shape/leaf/9a.webp"],
  ["/images/shape/leaf/10a.webp", "/images/shape/leaf/11a.webp"],
  ["/images/shape/leaf/12a.webp", "/images/shape/leaf/13a.webp"],
  ["/images/shape/leaf/13a.webp", "/images/shape/leaf/1a-v2.webp"],
  ["/images/shape/leaf/1a-v2.webp", "/images/shape/leaf/12a.webp"],
];

/** Default decorations that may be swapped for a leaf, by section kind. */
const KIND: Record<string, "intro" | "about" | "reverse"> = {
  "/images/shape/about-two-left.webp": "intro",
  "/images/shape/about-two-right.png": "intro",
  "/images/shape/about-left-shape.webp": "about",
  "/images/shape/about-right-shape.webp": "about",
  "/images/shape/banner-six-shape.png": "reverse",
  "/images/shape/mirror-left-shape.webp": "reverse",
};

const SERVICE_PHOTO = /^\/images\/services\/([^/]+)\/[^/]+-(\d+)\.webp$/i;
const HOMEPAGE_PHOTO = /^\/images\/homepage\/homepage-(\d+)\.webp$/i;

function leafPair(image: unknown, fallback: string): [string, string] | null {
  if (typeof image !== "string") return null;
  const service = image.match(SERVICE_PHOTO);
  const home = image.match(HOMEPAGE_PHOTO);
  const photo = service
    ? { treatment: service[1], n: Number(service[2]) }
    : home
      ? { treatment: "homepage", n: Number(home[1]) }
      : null;
  const kind = KIND[fallback];
  if (!photo || !kind) return null;
  const early = photo.n % 4 < 2;
  const shift = kind === "intro" ? 0 : kind === "about" ? (early ? 1 : 2) : early ? 3 : 4;
  const hash = [...photo.treatment].reduce((h, c) => (31 * h + c.charCodeAt(0)) >>> 0, 0) % LEAF_PAIRS.length;
  return LEAF_PAIRS[(shift + hash) % LEAF_PAIRS.length];
}

/** Left decoration for a section showing `image`; `fallback` when no leaf applies. */
export function leftLeafShape(image: unknown, fallback: string): string {
  return leafPair(image, fallback)?.[0] || fallback;
}

/** Right decoration for a section showing `image`; `fallback` when no leaf applies. */
export function rightLeafShape(image: unknown, fallback: string): string {
  return leafPair(image, fallback)?.[1] || fallback;
}

export function isLeafShape(src: unknown): boolean {
  return typeof src === "string" && src.startsWith("/images/shape/leaf/");
}
