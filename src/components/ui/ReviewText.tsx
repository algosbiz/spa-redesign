"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/client";

/** Review text, clamped by CSS, with the live "Read more / Read less" toggle. */
export default function ReviewText({
  text,
  onExpandChange,
  onMeasure,
}: {
  text: string;
  onExpandChange: (expanded: boolean) => void;
  onMeasure: () => void;
}) {
  const { el } = useI18n();
  const id = useId();
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || expanded) return;
    const measure = () => {
      const o = el.scrollHeight - el.clientHeight > 1;
      setOverflows((prev) => (prev === o ? prev : o));
      onMeasure();
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [expanded, text, onMeasure]);

  useEffect(() => {
    onMeasure();
  }, [overflows, onMeasure]);

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    onExpandChange(expanded);
  }, [expanded, onExpandChange]);

  return el(
    <>
      <p id={id} ref={ref} className={`text${expanded ? " is-expanded" : ""}`}>
        {text}
      </p>
      {overflows && (
        <button type="button" className="quote-toggle" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded((v) => !v)}>
          <span className="quote-toggle__label">{expanded ? "Read less" : "Read more"}</span>
          <svg className="quote-toggle__caret" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </>
  );
}
