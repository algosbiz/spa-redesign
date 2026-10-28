"use client";

import { useEffect } from "react";

/**
 * How far from a section's top or bottom a decoration keeps: the torn paper
 * edge is 76px at the top and 74px at the bottom, plus the 10px bobbing and
 * a clear band of 18px (its soft shading reaches past the line). On laptops there is less room beside the text, so
 * 50px (the torn line is 26px in), as the treatment pages have there.
 */
const wide = () => window.innerWidth >= 1700;
const topClear = () => (wide() ? 104 : 50);
const bottomClear = () => (wide() ? 104 : 50);

/**
 * Keeps the corner decorations of the main pages off the torn paper edges
 * (owner, 28 Oct: leaves, flowers and trays "touching" the line between two
 * sections). The sections place their decorations with their own top and
 * bottom values (live's, 0 or -10px for most), so a decoration that lies on
 * an edge is moved down (or up) just clear of it: `--deco-clamp`, applied as
 * a `translate` in decorations.css. One that does not lie on an edge is not
 * moved, and neither is one that cannot clear both edges. The treatment
 * pages have their own rules in decorations.css and are left alone.
 */
export default function DecorationEdgeClamp() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>("main .page-wrapper");
    if (!page || page.classList.contains("treatment-page")) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const run = () => {
      timer = undefined;
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
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    // The lazy images have no height until they load.
    page.addEventListener("load", schedule, true);
    return () => {
      page.removeEventListener("load", schedule, true);
      seen.disconnect();
      resize.disconnect();
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, []);

  return null;
}
