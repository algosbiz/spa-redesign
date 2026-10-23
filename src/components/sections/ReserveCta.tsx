import type { CSSProperties } from "react";
import LazyBackground from "@/components/ui/LazyBackground";
import { LotusIcon } from "@/components/ui/Lotus";
import SectionShapes from "@/components/ui/SectionShapes";
import { whatsappChatUrl } from "@/lib/whatsapp";

/** Hand-drawn white frame line, as styled inline on the live site. */
const line = (opacity: number, width: number): CSSProperties => ({
  fill: "none",
  stroke: `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: String(width),
  strokeLinecap: "round",
  vectorEffect: "non-scaling-stroke",
});

const RULE = { width: "60px", height: "1px", background: "rgba(255, 255, 255, 0.5)" };

export type ReserveCtaProps = {
  title?: string;
  text?: string;
  closingText?: string;
  backgroundImage?: string;
  /** Use the pt-100 / pb-100 classes instead of inline padding. */
  standardSpacing?: boolean;
  topSpacing?: number;
  bottomSpacing?: number;
  /** Corner decorations (components/ui/SectionShapes.tsx). */
  leftShapeSrc?: string | null;
  rightShapeSrc?: string | null;
};

/**
 * Closing reserve banner — the live "reserve-cta-section": a photo under a
 * dark wash, hand-drawn white frame lines, a lotus divider and a WhatsApp
 * button.
 */
export default function ReserveCta({
  title = "Experience True Relaxation with Our Day Spa",
  text = "Get professional spa treatments at your home, hotel, or villa, bringing relaxation and care right to your space. Home service is available for an additional IDR 75.000 per therapist in the Seminyak area, and in-spa treatments can be booked at a time that suits you.",
  closingText = "Reserve a time that suits you and let our experts at the Day Spa take care of you.",
  backgroundImage = "/images/bg/contact-five-bg.jpg",
  standardSpacing = false,
  topSpacing = 70,
  bottomSpacing = 70,
  leftShapeSrc,
  rightShapeSrc,
}: ReserveCtaProps) {
  const reserve = { title, text, closingText, backgroundImage };
  return (
      <section
        style={{ padding: standardSpacing ? undefined : `${topSpacing}px 0 ${bottomSpacing}px`, overflow: "hidden" }}
        className={`jsx-cta reserve-cta-section${standardSpacing ? " pt-100 pb-100" : ""}`}
      >
        <SectionShapes left={leftShapeSrc} right={rightShapeSrc} />
        <div className="jsx-cta container">
          {/* The banner sits at the bottom of the page, so its photo waits
              until the reader scrolls near it (LazyBackground). */}
          <LazyBackground
            image={reserve.backgroundImage}
            overlay="linear-gradient(rgba(28, 26, 29, 0.45), rgba(28, 26, 29, 0.45))"
            style={{
              position: "relative",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              textAlign: "center",
              borderRadius: "18px",
              overflow: "hidden",
            }}
            className="jsx-cta reserve-cta-banner"
          >
            <svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" className="jsx-cta reserve-cta-frame reserve-cta-frame--top">
              <path d="M0,22 C160,8 320,30 480,18 C640,8 820,30 1000,16" style={line(0.6, 2)} className="jsx-cta" />
              <path d="M130,30 C300,22 450,32 620,26" style={line(0.3, 1.5)} className="jsx-cta" />
            </svg>
            <svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" className="jsx-cta reserve-cta-frame reserve-cta-frame--bottom">
              <path d="M0,18 C160,32 320,10 480,22 C640,32 820,10 1000,24" style={line(0.6, 2)} className="jsx-cta" />
              <path d="M380,10 C560,18 720,8 880,14" style={line(0.3, 1.5)} className="jsx-cta" />
            </svg>
            <svg viewBox="0 0 40 1000" preserveAspectRatio="none" aria-hidden="true" className="jsx-cta reserve-cta-frame reserve-cta-frame--left">
              <path d="M22,0 C12,160 30,320 20,500 C12,680 30,840 22,1000" style={line(0.55, 2)} className="jsx-cta" />
            </svg>
            <svg viewBox="0 0 40 1000" preserveAspectRatio="none" aria-hidden="true" className="jsx-cta reserve-cta-frame reserve-cta-frame--right">
              <path d="M18,0 C28,160 10,320 20,500 C28,680 10,840 18,1000" style={line(0.55, 2)} className="jsx-cta" />
            </svg>
            <div style={{ position: "relative", zIndex: 2, maxWidth: "860px", margin: "0 auto" }} className="jsx-cta">
              <h2
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
                style={{ marginBottom: 0 }}
                className="jsx-cta title text-white wow fadeInUp"
              >
                {reserve.title}
              </h2>
              <p
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                style={{ maxWidth: "720px", margin: "16px auto 0" }}
                className="jsx-cta text text-white wow fadeInUp"
              >
                {reserve.text}
              </p>
              <div
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", margin: "18px 0" }}
                className="jsx-cta wow fadeInUp"
              >
                <span style={RULE} className="jsx-cta" />
                <LotusIcon className="brand-lotus-icon-svg" width={26} height={27} />
                <span style={RULE} className="jsx-cta" />
              </div>
              <p
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                style={{ maxWidth: "640px", margin: "0 auto" }}
                className="jsx-cta text text-white wow fadeInUp"
              >
                {reserve.closingText}
              </p>
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
                className="jsx-cta reserve-cta-button mt-30 wow fadeInUp"
              >
                Reserve
                <i aria-hidden="true" className="jsx-cta fa-light fa-arrow-down-right" />
              </a>
            </div>
          </LazyBackground>
        </div>
      </section>
  );
}
