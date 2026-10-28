"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * How far from a section's top or bottom a decoration keeps: the torn paper
 * edge is 76px at the top and 74px at the bottom, plus the 10px bobbing and
 * a clear band of 18px (its soft shading reaches past the line). On laptops
 * there is less room beside the text, so 50px (the torn line is 26px in), as
 * the treatment pages have there.
 */
const wide = () => window.innerWidth >= 1700;
const topClear = () => (wide() ? 104 : 50);
const bottomClear = () => (wide() ? 104 : 50);

/**
 * The pictures behind the files: several files hold the same photo (the spa
 * tray is three files, the pink flowers two, the bowl two ...). Anything not
 * listed is its own picture (the leaves).
 */
const PICTURE: Record<string, string> = {
  "pricing-three-shape-right.png": "tray",
  "package-shape-right.png": "tray",
  "testimonial-two-shape-right.png": "tray",
  "package-four-shape-left.png": "towel",
  "service-shape-left.png": "towel",
  "feature-six-shape.png": "flowers",
  "service-four-shape-right.png": "flowers",
  "testimonial-two-shape-left.png": "frangipani",
  "banner-six-shape2.png": "petals",
  "step-shape-left.png": "bowl",
  "banner-five-shape1.png": "bowl",
  "about-left-shape.png": "jar",
  "mirror-left-shape.png": "jar",
  "about-right-shape.png": "palm",
  "banner-six-shape.png": "palm",
  "about-two-left.png": "fern",
  "banner-three-shape.png": "fern",
  "service-shape-right.png": "leaf-single",
  // the faint line drawings: lie behind the text on purpose, never repeated or used as a swap
  "about-two-right.png": "ghost-stones",
  "about-three-shape.png": "ghost-stones",
  "banner-three-shape2.png": "ghost-flower",
};

type Side = "L" | "R" | "any";
/**
 * What a twin is swapped for, best first; `side` is the edge the file is cut flat on. Not the jar
 * and brush: its soft white halo shows on the paper background.
 */
const SWAPS: { id: string; src: string; side: Side }[] = [
  { id: "frangipani", src: "/images/shape/testimonial-two-shape-left.png", side: "L" },
  { id: "flowers", src: "/images/shape/feature-six-shape.png", side: "any" },
  { id: "petals", src: "/images/shape/banner-six-shape2.png", side: "any" },
  { id: "tray", src: "/images/shape/pricing-three-shape-right.png", side: "R" },
  { id: "towel", src: "/images/shape/service-shape-left.png", side: "L" },
  { id: "palm", src: "/images/shape/about-right-shape.png", side: "R" },
  { id: "bowl", src: "/images/shape/step-shape-left.png", side: "L" },
  { id: "leaf-single", src: "/images/shape/service-shape-right.png", side: "R" },
  { id: "fern", src: "/images/shape/about-two-left.png", side: "L" },
  ...["3a", "6a", "8a", "9a", "11a", "12a", "13a", "2a", "1a-v2", "10a", "4a", "7a", "5a"].map((n) => ({
    id: `${n}.png`,
    src: `/images/shape/leaf/${n}.png`,
    side: "L" as Side,
  })),
];

const fileOf = (src: string) => src.split("/").pop() ?? src;
const pictureOf = (src: string) => PICTURE[fileOf(src)] ?? fileOf(src);

/**
 * True when the decoration's own wrappers turn it over (the leaves on the right do). Not the
 * image itself: its flip is ours, and reading it back made the next run undo it.
 */
function mirrored(shape: HTMLElement) {
  return [shape, shape.firstElementChild].some((el) => {
    if (!(el instanceof HTMLElement) || el instanceof HTMLImageElement) return false;
    const cs = getComputedStyle(el);
    return /^matrix\(-/.test(cs.transform) || cs.scale.startsWith("-");
  });
}

/**
 * One picture once per page (owner, 28 Oct: "this part shows twice, on every
 * page use different assets, no twins"). The decorations are checked in page
 * order; the flowers of a section's floral ornament count first. A picture
 * already on the page is swapped for one that is not, cut flat on the right
 * side (turned over where it is not); with none left, the decoration is left
 * out.
 */
function removeTwins(page: HTMLElement) {
  const imgs = [...page.querySelectorAll<HTMLImageElement>("section > .shape1 img, section > .shape2 img")];
  const floral = imgs.filter((i) => i.closest(".floral-decoration__flowers"));
  const used = new Set<string>();
  floral.forEach((i) => used.add(pictureOf(i.dataset.decoOrig ?? i.getAttribute("src") ?? "")));
  imgs.forEach((img) => {
    if (floral.includes(img)) return;
    const shape = img.closest<HTMLElement>(".shape1, .shape2");
    if (!shape) return;
    if (img.dataset.decoOrig === undefined) img.dataset.decoOrig = img.getAttribute("src") ?? "";
    const original = img.dataset.decoOrig;
    const id = pictureOf(original);
    if (id.startsWith("ghost-") || !used.has(id)) {
      // restore a swap made for an earlier page order
      if (img.getAttribute("src") !== original) img.setAttribute("src", original);
      img.style.removeProperty("scale");
      shape.removeAttribute("data-deco-hidden");
      used.add(id);
      return;
    }
    const side: Side = shape.classList.contains("shape1") ? "L" : "R";
    // The tray is twice as wide as it is high: only where there is room beside it.
    const wideOk = shape.parentElement?.matches(".pricing-section-three, .testimonial-section-two, .service-section-two");
    const free = SWAPS.filter((s) => !used.has(s.id) && (s.id !== "tray" || wideOk));
    const pick = free.find((s) => s.side === side || s.side === "any") ?? free[0];
    if (!pick) {
      shape.setAttribute("data-deco-hidden", "");
      return;
    }
    used.add(pick.id);
    shape.removeAttribute("data-deco-hidden");
    if (img.getAttribute("src") !== pick.src) img.setAttribute("src", pick.src);
    const shown: Side = pick.side === "any" ? "any" : mirrored(shape) ? (pick.side === "L" ? "R" : "L") : pick.side;
    if (shown !== "any" && shown !== side) img.style.setProperty("scale", "-1 1");
    else img.style.removeProperty("scale");
  });
}

/**
 * Keeps the corner decorations of the main pages off the torn paper edges
 * (owner, 28 Oct: leaves, flowers and trays "touching" the line between two
 * sections). The sections place their decorations with their own top and
 * bottom values (live's, 0 or -10px for most), so a decoration that lies on
 * an edge is moved down (or up) just clear of it: `--deco-clamp`, applied as
 * a `translate` in decorations.css. One that does not lie on an edge is not
 * moved, and neither is one that cannot clear both edges. The treatment
 * pages have their own rules for this in decorations.css.
 */
function clampToEdges(page: HTMLElement) {
  const shapes = page.querySelectorAll<HTMLElement>("section > .shape1, section > .shape2");
  shapes.forEach((shape) => {
    shape.style.removeProperty("--deco-clamp");
  });
  shapes.forEach((shape) => {
    const drawn = shape.querySelector<HTMLElement>(".floral-decoration__flowers") ?? shape.querySelector<HTMLElement>("img");
    if (!drawn || !drawn.offsetHeight) return;
    // Where it is laid out, not where its bobbing has it: the wrapper's
    // box (the image hangs out of it) plus the image's offset in it.
    let offset = 0;
    let node: HTMLElement | null = drawn;
    while (node && node !== shape) {
      offset += node.offsetTop;
      node = node.offsetParent as HTMLElement | null;
    }
    if (node !== shape) return;
    const top = shape.getBoundingClientRect().top + offset;
    const r = { top, bottom: top + drawn.offsetHeight };
    const section = shape.parentElement;
    const topEdge = section?.closest<HTMLElement>(".section__decoration-top");
    const bottomEdge = section?.closest<HTMLElement>(".section__decoration-bottom");
    const topEnd = topEdge ? topEdge.getBoundingClientRect().top + topClear() : -Infinity;
    let bottomStart = bottomEdge ? bottomEdge.getBoundingClientRect().bottom - bottomClear() : Infinity;
    // The next section's torn edge starts where this one ends (its line is 26px in): a
    // decoration ends 40px above, not on it or past it.
    const next = section?.nextElementSibling;
    if (section && next?.classList.contains("section__decoration-top")) {
      bottomStart = Math.min(bottomStart, section.getBoundingClientRect().bottom - 40);
    }
    let dy = 0;
    if (r.top < topEnd) dy = topEnd - r.top;
    else if (r.bottom > bottomStart) dy = bottomStart - r.bottom;
    if (!dy) return;
    // Not where it would then lie on the other edge.
    if (r.top + dy < topEnd || r.bottom + dy > bottomStart) return;
    shape.style.setProperty("--deco-clamp", `${Math.round(dy)}px`);
  });
}

export default function DecorationEdgeClamp() {
  const pathname = usePathname();

  useEffect(() => {
    const page = document.querySelector<HTMLElement>("main .page-wrapper");
    if (!page) return;
    const treatment = page.classList.contains("treatment-page");

    let timer: ReturnType<typeof setTimeout> | undefined;
    const run = () => {
      timer = undefined;
      removeTwins(page);
      if (!treatment) clampToEdges(page);
    };
    const schedule = () => {
      if (timer === undefined) timer = setTimeout(run, 50);
    };

    schedule();
    // Sections far down the page (content-visibility: auto, the home page's) have no height
    // until they are near the screen: measured again when one comes near.
    const seen = new IntersectionObserver(schedule, { rootMargin: "600px 0px" });
    page.querySelectorAll("section > .shape1, section > .shape2").forEach((shape) => seen.observe(shape));
    const resize = new ResizeObserver(schedule);
    resize.observe(page);
    // Sections that mount later (HydrateLater) bring decorations of their own.
    const added = new MutationObserver((records) => {
      if (records.some((r) => r.addedNodes.length)) {
        page.querySelectorAll("section > .shape1, section > .shape2").forEach((shape) => seen.observe(shape));
        schedule();
      }
    });
    added.observe(page, { childList: true, subtree: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    // The lazy images have no height until they load.
    page.addEventListener("load", schedule, true);
    return () => {
      page.removeEventListener("load", schedule, true);
      added.disconnect();
      seen.disconnect();
      resize.disconnect();
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
