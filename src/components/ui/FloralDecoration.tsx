"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { useEffect, useRef, useState } from "react";

/**
 * Petals and blossoms drifting in a section corner. The animation only runs
 * while the ornament is on screen, as on the live site.
 *
 * `compact` drops the loose petals, `clustered` tightens the group, and
 * `interactive` lets it drift up to 10px with the page scroll.
 */
export default function FloralDecoration({
  compact = false,
  clustered = false,
  interactive = false,
}: {
  compact?: boolean;
  clustered?: boolean;
  interactive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!interactive || !visible || !el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | undefined;
    const update = () => {
      frame = undefined;
      const top = el.closest("section")?.getBoundingClientRect().top ?? 0;
      const offset = reduce.matches ? 0 : Math.max(-10, Math.min(10, -(0.025 * top)));
      el.style.setProperty("--scroll-offset", `${offset}px`);
    };
    const onScroll = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    reduce.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      reduce.removeEventListener("change", update);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [interactive, visible]);

  return (
    <div
      ref={ref}
      className={`floral-decoration__flowers ${compact ? "floral-decoration__compact" : ""} ${
        clustered ? "floral-decoration__clustered" : ""
      } ${interactive ? "floral-decoration__interactive" : ""}`}
      aria-hidden="true"
      style={{ animationPlayState: visible ? "running" : "paused" }}
    >
      {!compact && (
        <img className="floral-decoration__petals" src="/images/shape/banner-six-shape2.webp" alt="" width="170" height="100" loading="lazy" />
      )}
      <img className="floral-decoration__blossoms" src="/images/shape/service-four-shape-right.webp" alt="" width="230" height="150" loading="lazy" />
    </div>
  );
}
