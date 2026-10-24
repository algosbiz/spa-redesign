import { MenuIcon } from "@/components/layout/MenuIcons";
import LazyBackground from "@/components/ui/LazyBackground";
import { LotusIcon } from "@/components/ui/Lotus";
import SectionShapes from "@/components/ui/SectionShapes";
import { business } from "@/data/business";
import { whatsappChatUrl } from "@/lib/whatsapp";

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
 * Closing booking banner (owner, 24 Oct: keep each page's creative photo,
 * "but should modify or adjust design"): a white card with the gold hairline,
 * the photo on one side in full colour (it used to sit under a dark wash with
 * hand-drawn white frame lines, which made busy photos hard to read), and on
 * the other the title, the text, the closing line and the WhatsApp button.
 * On phones the photo sits on top. Styles: outcall.css, section 30.
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
  return (
    <section
      style={{ padding: standardSpacing ? undefined : `${topSpacing}px 0 ${bottomSpacing}px`, overflow: "hidden" }}
      className={`jsx-cta reserve-cta-section${standardSpacing ? " pt-100 pb-100" : ""}`}
    >
      <SectionShapes left={leftShapeSrc} right={rightShapeSrc} />
      <div className="jsx-cta container">
        <div className="reserve-card">
          {/* The banner sits at the bottom of the page, so its photo waits
              until the reader scrolls near it (LazyBackground). */}
          <LazyBackground
            image={backgroundImage}
            overlay="linear-gradient(180deg, rgba(28, 26, 29, 0) 55%, rgba(28, 26, 29, 0.28))"
            className="reserve-card__photo"
          >
            <span className="reserve-card__badge">
              <MenuIcon name="clock" />
              {business.openingHours.label} {business.openingHours.display}
            </span>
          </LazyBackground>
          <div className="reserve-card__body">
            <p className="reserve-card__kicker wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <LotusIcon className="reserve-card__lotus" width={22} height={23} />
              Ready when you are
            </p>
            <h2 className="title wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
              {title}
            </h2>
            <p className="reserve-card__text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              {text}
            </p>
            {closingText ? (
              <p className="reserve-card__note wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                {closingText}
              </p>
            ) : null}
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reserve-card__btn wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
