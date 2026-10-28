/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { leftLeafShape, rightLeafShape, isLeafShape } from "@/lib/leafShapes";
import { SplitBadge, SplitButton } from "@/components/sections/splitModern";
import { LotusIcon } from "@/components/ui/Lotus";
import type { ReactNode } from "react";

export type AboutSplitProps = {
  subTitle?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  featuresLeft?: ReactNode[];
  featuresRight?: ReactNode[];
  buttonText?: ReactNode;
  buttonLink?: string;
  image?: string;
  /** What the photo shows (default "Spa treatment"). */
  imageAlt?: string;
  treatmentLayout?: boolean;
  leftShapeSrc?: string | null;
  rightShapeSrc?: string | null;
  rightDecoration?: ReactNode;
  badgeTopText?: string | null;
  badgeBottomText?: ReactNode;
  /** false: no badge on the photo (a decorative one removed in the copy rewrite, 15 Oct). */
  showBadge?: boolean;
};

/** The gold tick in front of every list item. */
const Tick = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.5378 22.1558C11.4715 22.1558 11.4059 22.1421 11.3451 22.1155C11.2844 22.0889 11.2298 22.0501 11.1848 22.0014L1.66618 11.705C1.60273 11.6363 1.56066 11.5507 1.54513 11.4585C1.5296 11.3663 1.54128 11.2716 1.57874 11.186C1.61621 11.1003 1.67782 11.0275 1.75605 10.9763C1.83428 10.9251 1.92573 10.8979 2.01921 10.8979H6.60094C6.66973 10.8979 6.73772 10.9126 6.80032 10.9412C6.86292 10.9697 6.91868 11.0113 6.96383 11.0632L10.145 14.723C10.4888 13.9881 11.1543 12.7645 12.3222 11.2734C14.0487 9.06907 17.2602 5.8272 22.7546 2.90066C22.8608 2.8441 22.9843 2.82943 23.1008 2.85952C23.2173 2.88962 23.3183 2.9623 23.3838 3.06321C23.4493 3.16413 23.4746 3.28594 23.4547 3.40459C23.4348 3.52325 23.3711 3.63013 23.2762 3.70412C23.2553 3.72051 21.1368 5.38878 18.6987 8.4445C16.4549 11.2565 13.4721 15.8546 12.0044 21.7907C11.9786 21.8949 11.9186 21.9876 11.834 22.0538C11.7494 22.12 11.6451 22.156 11.5377 22.156L11.5378 22.1558Z"
      fill="#A78627"
    />
  </svg>
);
export default function AboutSplit({
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
  image = "/images/about/about-image.png",
  imageAlt = "Spa treatment",
  treatmentLayout = false,
  leftShapeSrc,
  rightShapeSrc,
  rightDecoration,
  badgeTopText,
  badgeBottomText = "Experience",
  showBadge = true,
}: AboutSplitProps) {
  const leftShape = leftShapeSrc || leftLeafShape(image, "/images/shape/about-left-shape.png"),
    rightShape = rightShapeSrc || rightLeafShape(image, "/images/shape/about-right-shape.png"),
    leftIsLeaf = isLeafShape(leftShape),
    rightIsLeaf = isLeafShape(rightShape),
    isTreatment = treatmentLayout || ("string" == typeof image && image.startsWith("/images/services/"));
  return (
    <>
      <section id="about" className={`about-section pt-130 pb-100${isTreatment ? " about-section--treatment" : ""}`}>
        {null !== leftShapeSrc && (
          <div
            className={`shape1 wow slideInLeft${leftIsLeaf ? " treatment-leaf-position--left" : ""}`}
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <img loading="lazy" decoding="async" src={leftShape} alt="" aria-hidden="true" />
          </div>
        )}
        {null !== rightShapeSrc && (
          <div
            className={`shape2 wow slideInRight${rightIsLeaf ? " treatment-leaf-position--right" : ""}`}
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className={rightIsLeaf ? "treatment-leaf-shape--right" : undefined}>
              {rightDecoration || (
                <img loading="lazy" decoding="async" className="sway_Y__animation" src={rightShape} alt="" aria-hidden="true" />
              )}
            </div>
          </div>
        )}
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7 content-column">
              <div className="inner-column">
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
                    {featuresLeft.map((e, a) => (
                      <li key={a}>
                        <Tick />
                        {e}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {featuresRight.map((e, a) => (
                      <li key={a}>
                        <Tick />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <SplitButton text={buttonText} link={buttonLink} />
              </div>
            </div>
            <div className="col-lg-5 image-column">
              <div
                className="inner-column wow fadeInLeft"
                data-tilt="true"
                data-tilt-max="3"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                {/* No notch for the badge: it floats on the photo as a card (splitModern.tsx). */}
                <div className="image-box image-box--plain">
                  <img loading="lazy" decoding="async" src={image} alt={imageAlt} />
                </div>
                {showBadge && <SplitBadge top={badgeTopText} bottom={badgeBottomText} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
