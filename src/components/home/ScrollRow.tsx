"use client";

import { Children, useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";

type Props = {
  /** Classes of the scrolling row itself (its layout lives in home-v2.css). */
  className: string;
  /**
   * Where the row scrolls: below 992px ("lg"), below 768px ("md") or at
   * every width ("all"). The arrows and indicator show there only.
   */
  below: "lg" | "md" | "all";
  /** Dots (one per card) or, for long rows, a progress bar, or "3 / 23" (the card at the start of the view). */
  indicator?: "dots" | "bar" | "count";
  /** Slide the cards a little and back the first time the row comes into view, to show it swipes. */
  nudge?: boolean;
  /** Name of the row for screen readers. */
  label: string;
  children: ReactNode;
};

type Position = {
  /** Highlighted dot: the card nearest the start of the view, the last one at the end. */
  active: number;
  /** The card nearest the start of the view, the arrows' starting point. */
  first: number;
  atStart: boolean;
  atEnd: boolean;
  scrollable: boolean;
  /** Cards fully in view, the arrows' step. */
  visible: number;
  /** Progress bar: thumb size and offset, as fractions of the bar. */
  size: number;
  offset: number;
};

const START: Position = { active: 0, first: 0, atStart: true, atEnd: false, scrollable: false, visible: 1, size: 1, offset: 0 };

/**
 * A row of cards that scrolls sideways: swipe on touch screens, drag with a
 * mouse, or use the arrows and the dots (or progress bar) under it. The
 * arrows move by as many cards as are in view. The row opts out of Lenis for
 * sideways gestures (`data-lenis-prevent-horizontal`), so a trackpad swipe
 * moves the cards instead of the page.
 */
export default function ScrollRow({ className, below, indicator = "dots", nudge = false, label, children }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const count = Children.count(children);
  const [pos, setPos] = useState<Position>(START);
  const drag = useRef<{ x: number; left: number; moved: boolean; id: number } | null>(null);
  const suppressClick = useRef(false);

  /** Scroll offsets that bring each card to where the first card rests. */
  const stops = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return [0];
    const base = track.children[0].getBoundingClientRect().left;
    return Array.from(track.children, (el) => el.getBoundingClientRect().left - base);
  }, []);

  /** Where the row is: the card resting nearest the scroll offset (the last one at the end), and more. */
  const current = useCallback((): Position => {
    const track = trackRef.current;
    if (!track || !track.children.length) return START;
    const left = track.scrollLeft;
    const max = track.scrollWidth - track.clientWidth;
    const atEnd = left >= max - 2;
    const offsets = stops();
    let active = 0;
    offsets.forEach((o, i) => {
      if (Math.abs(o - left) < Math.abs(offsets[active] - left)) active = i;
    });
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap) || 0;
    const card = track.children[0].getBoundingClientRect().width;
    const room = track.clientWidth - (parseFloat(style.paddingLeft) || 0);
    const visible = Math.max(1, Math.floor((room + gap + 1) / (card + gap)));
    return {
      active: atEnd ? offsets.length - 1 : active,
      first: active,
      atStart: left <= 2,
      atEnd,
      scrollable: max > 1,
      visible,
      size: track.scrollWidth ? track.clientWidth / track.scrollWidth : 1,
      offset: track.scrollWidth ? left / track.scrollWidth : 0,
    };
  }, [stops]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPos(current()));
    };
    // The observer also reports once at the start, right after the browser
    // has laid the row out, so its geometry is read for free. Reading it in
    // a frame of its own, after other parts of the page had changed, made the
    // browser lay out the whole page again just for this row (PageSpeed's
    // "forced reflow", about 100ms on a slow phone).
    const resize = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      // Not drawn yet (on the homepage its section waits off screen,
      // content-visibility in home-v3.css): reading its geometry now would
      // make the browser lay that section out before the first paint
      // (PageSpeed, 21 Oct). The observer reports again once it is drawn.
      if (track.checkVisibility?.({ contentVisibilityAuto: true }) === false) return;
      setPos(current());
    });
    resize.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, [current]);

  // The hint: once, when most of the row is in view, if it can scroll and motion is welcome.
  useEffect(() => {
    const track = trackRef.current;
    if (!nudge || !track || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    let timer = 0;
    const seen = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || track.scrollWidth <= track.clientWidth + 1) return;
        seen.disconnect();
        track.classList.add("is-nudging");
        timer = window.setTimeout(() => track.classList.remove("is-nudging"), 1400);
      },
      { threshold: 0.6 },
    );
    seen.observe(track);
    return () => {
      seen.disconnect();
      window.clearTimeout(timer);
    };
  }, [nudge]);

  const go = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const offsets = stops();
    const target = offsets[Math.max(0, Math.min(i, offsets.length - 1))];
    track.scrollTo({ left: target, behavior: "smooth" });
  };

  // Dragging with a mouse; touch and pens scroll natively.
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || e.pointerType !== "mouse" || e.button !== 0) return;
    if (track.scrollWidth <= track.clientWidth + 1) return;
    drag.current = { x: e.clientX, left: track.scrollLeft, moved: false, id: e.pointerId };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const d = drag.current;
    if (!track || !d) return;
    const dx = e.clientX - d.x;
    if (!d.moved) {
      if (Math.abs(dx) < 6) return;
      d.moved = true;
      track.setPointerCapture(d.id);
      track.classList.add("is-dragging");
    }
    track.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    const track = trackRef.current;
    const d = drag.current;
    drag.current = null;
    if (!track || !d?.moved) return;
    track.classList.remove("is-dragging");
    // The click that ends a drag must not open the card under the pointer.
    suppressClick.current = true;
    window.setTimeout(() => (suppressClick.current = false), 0);
    go(current().active);
  };

  return (
    <>
      <div
        ref={trackRef}
        className={`${className} v2-scroll-track v2-scroll--${below}`}
        role="region"
        aria-label={label}
        tabIndex={pos.scrollable ? 0 : undefined}
        data-lenis-prevent-horizontal=""
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDragStart={(e) => e.preventDefault()}
        onClickCapture={(e) => {
          if (!suppressClick.current) return;
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {children}
      </div>
      <div className={`v2-scroll-nav v2-scroll--${below}`}>
        <button
          type="button"
          className="v2-scroll-nav__arrow"
          aria-label="Previous"
          disabled={pos.atStart}
          onClick={() => go(pos.first - pos.visible)}
        >
          <i className="fa-regular fa-angle-left" aria-hidden="true" />
        </button>
        {indicator === "count" ? (
          <div className="v2-scroll-nav__count" aria-hidden="true">
            <span>{pos.active + 1}</span> / {count}
          </div>
        ) : indicator === "bar" ? (
          <div className="v2-scroll-nav__bar" aria-hidden="true">
            {/* Moved with a transform (a share of its own width), which the
                browser animates off the main thread; `left` was not. */}
            <span
              style={{
                width: `${pos.size * 100}%`,
                transform: `translateX(${pos.size ? (pos.offset / pos.size) * 100 : 0}%)`,
              }}
            />
          </div>
        ) : (
          <div className="v2-scroll-nav__dots">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                type="button"
                className="v2-scroll-nav__dot"
                aria-label={`Show card ${i + 1} of ${count}`}
                aria-current={i === pos.active ? "true" : undefined}
                onClick={() => go(i)}
              />
            ))}
          </div>
        )}
        <button
          type="button"
          className="v2-scroll-nav__arrow"
          aria-label="Next"
          disabled={pos.atEnd}
          onClick={() => go(pos.first + pos.visible)}
        >
          <i className="fa-regular fa-angle-right" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
