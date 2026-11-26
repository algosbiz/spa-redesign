/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { leftLeafShape, rightLeafShape, isLeafShape } from "@/lib/leafShapes";
import { SplitBadge, SplitButton } from "@/components/sections/splitModern";
import { LotusIcon } from "@/components/ui/Lotus";
import type { ReactNode } from "react";

export type AboutSplitAltProps = {
  subTitle?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  featuresLeft?: ReactNode[];
  featuresRight?: ReactNode[];
  buttonText?: ReactNode;
  buttonLink?: string;
  image?: string;
  /** What the photo shows (alt text). */
  imageAlt?: string;
  badgeTopText?: string | null;
  badgeBottomText?: ReactNode;
  /** false: no badge on the photo (a decorative one removed in the copy rewrite, 15 Oct). */
  showBadge?: boolean;
  paperDecoration?: boolean;
  treatmentLayout?: boolean;
  leftShapeSrc?: string | null;
  rightShapeSrc?: string | null;
  rightDecoration?: ReactNode;
};

/** The gold tick in front of every list item. */
const Tick = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.54 22.16c-.07 0-.13-.02-.19-.04-.07-.03-.12-.07-.17-.12L1.67 11.7c-.07-.06-.11-.15-.12-.24-.02-.09-.01-.19.03-.27.04-.09.1-.16.18-.21.07-.05.17-.08.26-.08H6.6c.07 0 .14.01.2.04.06.03.12.07.16.12l3.18 3.66c.35-.73 1.01-1.96 2.18-3.45 1.73-2.2 4.94-5.44 10.43-8.37.11-.06.23-.07.35-.04.12.03.22.1.28.2.07.1.09.23.07.34-.02.12-.08.23-.17.3-.02.02-2.14 1.69-4.58 4.74-2.25 2.82-5.23 7.41-6.7 13.35-.02.1-.08.2-.17.26-.08.07-.18.11-.29.11l0 0z"
      fill="#A78627"
    />
  </svg>
);
export default function AboutSplitAlt({
  subTitle = "About",
  title = <>New solutions with organic oil free products</>,
  text = "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget,",
  featuresLeft = ["Entrance to the Blue Lagoon", "Silica mud mask (face and body)", "Use of soft towel and bathrobe"],
  featuresRight = [
    "Entrance to the Blue Lagoon",
    "Total Bliss Massage and Its Features",
    "Use of soft towel and bathrobe",
  ],
  buttonText,
  buttonLink = "/seminyak",
  image = "/images/about/about-image.webp",
  imageAlt = "",
  badgeTopText,
  badgeBottomText = "Experience",
  showBadge = true,
  paperDecoration = true,
  treatmentLayout = false,
  leftShapeSrc,
  rightShapeSrc,
  rightDecoration,
}: AboutSplitAltProps) {
  const leftShape = leftShapeSrc || leftLeafShape(image, "/images/shape/banner-six-shape.png"),
    rightShape = rightShapeSrc || rightLeafShape(image, "/images/shape/mirror-left-shape.webp"),
    leftIsLeaf = isLeafShape(leftShape),
    rightIsLeaf = isLeafShape(rightShape),
    rightIsFloral = "/images/about/shape1.png" === rightShape,
    isTreatment = treatmentLayout || ("string" == typeof image && image.startsWith("/images/services/"));
  return (
    <>
      <section
        id="about"
        className={`about-section${paperDecoration ? " section__decoration-top section__decoration-bottom bg-sub" : ""} pt-130 pb-130`.concat(
          isTreatment ? " about-section--treatment" : "",
        )}
      >
        <div
          className={`shape1 wow slideInLeft${leftIsLeaf ? " treatment-leaf-position--left" : ""}`}
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
          style={{
            bottom: "120px",
          }}
        >
          <img loading="lazy" decoding="async" src={leftShape} alt="" aria-hidden="true" />
        </div>
        <div
          className={`shape2 wow slideInRight${rightIsLeaf ? " treatment-leaf-position--right" : ""}`}
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className={rightIsLeaf ? "treatment-leaf-shape--right" : undefined}>
            {rightDecoration ||
              (rightIsFloral ? (
                <span className="about-leaf-gold sway_Y__animation" aria-hidden="true" />
              ) : (
                <img loading="lazy" decoding="async" className="sway_Y__animation" src={rightShape} alt="" aria-hidden="true" />
              ))}
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5 image-column">
              <div
                className="inner-column wow fadeInLeft"
                data-tilt="true"
                data-tilt-max="3"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                style={{
                  float: "left",
                }}
              >
                {/* No notch for the badge: it floats on the photo as a card (splitModern.tsx). */}
                <div className="image-box image-box--plain">
                  <img loading="lazy" decoding="async" src={image} alt={imageAlt} />
                </div>
                {showBadge && <SplitBadge top={badgeTopText} bottom={badgeBottomText} />}
              </div>
            </div>
            <div className="col-lg-7 content-column">
              <div
                className="inner-column"
                style={{
                  marginLeft: "auto",
                }}
              >
                <div className="section-header">
                  {subTitle !== "" && (
                    <p className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                      <LotusIcon className="icon" />
                      {subTitle}
                    </p>
                  )}
                  <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    {title}
                  </h2>
                  <p className="text wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    {text}
                  </p>
                </div>
                <div className="list mt-25 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <ul>
                    {featuresLeft.map((a, e) => (
                      <li key={e}>
                        <Tick />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {featuresRight.map((a, e) => (
                      <li key={e}>
                        <Tick />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <SplitButton text={buttonText} link={buttonLink} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
