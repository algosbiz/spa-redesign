import Link from "next/link";
import type { ReactNode } from "react";
import { learnMoreLabel } from "@/components/sections/learnMoreLabel";
import { business } from "@/data/business";

/*
 * The button and photo badge of the text & photo sections (AboutSplit,
 * AboutSplitAlt; owner, 22 Oct: "could we modernize these", tried on the
 * foot massage page, then given to every page). The button is a slim pill
 * ending in a gold circle with its icon (the hero's row buttons stay the
 * hero's own: "the other rectangle buttons are nice being different"); the
 * badge a white card with a gold edge floating in the photo's corner, the
 * photo without its notch. Styles: custom.css ("Text & photo sections").
 */

/** The section's button: its label, then a gold circle with WhatsApp's icon (a WhatsApp link) or an arrow. */
export function SplitButton({ text, link }: { text?: ReactNode; link: string }) {
  const whatsapp = /wa\.me\//.test(link);
  const inner = (
    <>
      <span className="pill-btn__label">{text ?? learnMoreLabel(link)}</span>
      <span className="pill-btn__icon" aria-hidden="true">
        <i className={whatsapp ? "fa-brands fa-whatsapp" : "fa-regular fa-arrow-right-long"} />
      </span>
    </>
  );
  return (
    <div className="split-action mt-30 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
      {/^https?:/.test(link) ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn"
          aria-label={whatsapp ? `${typeof text === "string" ? text : "Book"} on WhatsApp` : undefined}
        >
          {inner}
        </a>
      ) : (
        <Link prefetch={false} href={link} className="pill-btn">
          {inner}
        </Link>
      )}
    </div>
  );
}

/**
 * The badge as a card: a small label over a short fact about the section
 * ("Made with" / "Warm basalt stones"; owner, 22 Oct: "something more on
 * topic" than "17+ Years Experience"). Without a label, the years since the
 * spa opened, large, beside "Years of …".
 */
export function SplitBadge({ top, bottom }: { top?: string | null; bottom: ReactNode }) {
  if (top) {
    return (
      <div className="split-badge split-badge--text">
        <span className="split-badge__label">{top}</span>
        <span className="split-badge__top">{bottom}</span>
      </div>
    );
  }
  return (
    <div className="split-badge">
      <span className="split-badge__num">{new Date().getFullYear() - business.foundedYear}+</span>
      {/* Two lines as blocks: the theme hides <br> in this column on phones. */}
      <span className="split-badge__label">
        <span className="split-badge__line">Years of</span>
        <span className="split-badge__line">{bottom}</span>
      </span>
    </div>
  );
}
