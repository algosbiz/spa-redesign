import type { ReactNode } from "react";
import RowButton from "@/components/ui/RowButton";
import { learnMoreLabel } from "@/components/sections/learnMoreLabel";
import { business } from "@/data/business";

/*
 * The modern look of the text & photo sections (AboutSplit, AboutSplitAlt;
 * owner, 22 Oct: "could we modernize these", tried on the foot massage page
 * first): the button is the homepage hero's row button, and the photo badge
 * a white card floating in the photo's corner, the photo without its notch.
 * Styles: custom.css ("Text & photo sections, the modern look").
 */

/** The section's button as a row button; a WhatsApp link books on WhatsApp, with the number. */
export function SplitButton({ text, link }: { text?: ReactNode; link: string }) {
  const whatsapp = /wa\.me\//.test(link);
  return (
    <div className="split-action mt-30 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
      <RowButton
        href={link}
        icon={whatsapp ? "whatsapp" : "book"}
        label={whatsapp ? "Book on WhatsApp" : (text ?? learnMoreLabel(link))}
        note={whatsapp ? business.phoneDisplay : undefined}
      />
    </div>
  );
}

/**
 * The badge as a card: the years since the spa opened, large, beside "Years
 * of Experience"; or the section's own two lines ("Where Tension Lives").
 */
export function SplitBadge({ top, bottom }: { top?: string | null; bottom: ReactNode }) {
  if (top) {
    return (
      <div className="split-badge split-badge--text">
        <span className="split-badge__top">{top}</span>
        <span className="split-badge__label">{bottom}</span>
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
