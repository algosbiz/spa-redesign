/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { leftLeafShape, rightLeafShape, isLeafShape } from "@/lib/leafShapes";
import { LotusIcon } from "@/components/ui/Lotus";
import Link from "next/link";
import type { ReactNode } from "react";
import { business } from "@/data/business";

/**
 * The seal's ring of words, set round a circle and stretched to close it
 * exactly (textLength). One section like this per page, so one id.
 */
function SealRing({ text }: { text: string }) {
  return (
    <svg className="intro-seal__ring" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <path id="intro-seal-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
      </defs>
      <text>
        <textPath href="#intro-seal-circle" textLength="236" lengthAdjust="spacing">
          {text.toUpperCase()}
        </textPath>
      </text>
    </svg>
  );
}

export type AboutIntroProps = {
  subTitle?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  feature1Title?: ReactNode;
  feature1Text?: ReactNode;
  feature2Title?: ReactNode;
  feature2Text?: ReactNode;
  primaryImage?: string;
  secondaryImage?: string;
  /** What the photos show, for screen readers and search (no default: a photo without one is skipped by screen readers). */
  primaryAlt?: string;
  secondaryAlt?: string;
  showBrandCard?: boolean;
  removeBottomPadding?: boolean;
  leftShapeSrc?: string | null;
  rightShapeSrc?: string | null;
};

export default function AboutIntro({
  subTitle = "About",
  title = (
    <>
      {"Welcome to "}
      <br />
      {" beauty & Spa Center"}
    </>
  ),
  text = "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget,",
  feature1Title = "Stone spa",
  feature1Text = "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas.",
  feature2Title = "Face Treatments",
  feature2Text = "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas.",
  primaryImage = "/images/about/about-two-image.webp",
  secondaryImage = "/images/about/about-two-image2.webp",
  primaryAlt = "",
  secondaryAlt = "",
  showBrandCard = false,
  removeBottomPadding = false,
  leftShapeSrc,
  rightShapeSrc,
}: AboutIntroProps) {
  const leftShape = leftShapeSrc || leftLeafShape(primaryImage, "/images/shape/about-two-left.webp"),
    rightShape = rightShapeSrc || rightLeafShape(primaryImage, "/images/shape/about-two-right.png"),
    leftIsLeaf = isLeafShape(leftShape),
    rightIsLeaf = isLeafShape(rightShape),
    leftIsFloral = "/images/about/shape1.png" === leftShape;
  return (
    <>
      <section
        id="about"
        className={`about-section-two pt-130 paralax__animation${removeBottomPadding ? "" : " pb-100"}`}
      >
        {null !== leftShapeSrc && (
          <div
            className={`shape1 wow slideInLeft${leftIsLeaf ? " treatment-leaf-position--left" : ""}`}
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            {leftIsFloral ? (
              <span className="about-leaf-gold animation__arryUpDown" aria-hidden="true" />
            ) : (
              <img loading="lazy" decoding="async" className="animation__arryUpDown" src={leftShape} alt="" aria-hidden="true" />
            )}
          </div>
        )}
        {null !== rightShapeSrc && (
          <div className={`shape2${rightIsLeaf ? " treatment-leaf-position--right" : ""}`}>
            <div className={rightIsLeaf ? "treatment-leaf-shape--right" : undefined}>
              <img loading="lazy" decoding="async" className="animation__floatBob" src={rightShape} alt="" aria-hidden="true" />
            </div>
          </div>
        )}
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-7 wow fadeInRight image-column" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="inner-column">
                <div className="image-box">
                  <div className="image" data-depth="0.03">
                    <img loading="lazy" decoding="async" src={primaryImage} alt={primaryAlt} />
                  </div>
                  {/* The second photo as an arch in a white frame on the large photo's
                      corner, a gold hairline arch behind it, in place of the big round
                      photo (owner, 24 Oct: "keep the creativity but modernize"; custom.css). */}
                  <span className="intro-inset" data-depth="0.05">
                    <img loading="lazy" decoding="async" src={secondaryImage} alt={secondaryAlt} />
                  </span>
                </div>
                {/* A round seal on the photo's corner edge, a ring of words turning around the
                    lotus (a link to the price list on the treatment pages), in place of the notch (owner,
                    23 Oct: "this one is also outdated"; custom.css). */}
                {showBrandCard ? (
                  <div className="intro-seal" aria-hidden="true">
                    <SealRing text={`Spa Bali Moon · Seminyak · Since ${business.foundedYear} · `} />
                    <img loading="lazy" decoding="async" className="intro-seal__lotus" src="/images/logo/sbm.webp" alt="" />
                  </div>
                ) : (
                <Link prefetch={false} href="/seminyak/" className="intro-seal intro-seal--link" aria-label="See all our prices">
                  <SealRing text="See all prices · Spa Bali Moon · " />
                  <img loading="lazy" decoding="async" className="intro-seal__lotus" src="/images/logo/sbm.webp" alt="" />
                </Link>
                )}
              </div>
            </div>
            <div className="col-xl-5 content-column">
              <div className="inner-column">
                <div className="section-header mb-50">
                  {/* An empty small heading is left out (treatment pages, 15 Oct). */}
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
                {/* The two features in one white card (owner, 23 Oct: "looking to much like the old site"; custom.css). */}
                <div className="intro-features">
                  <div className="inner-box mb-30 wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="icon-box">
                      <svg
                        className="icon-bg"
                        width="137"
                        height="118"
                        viewBox="0 0 137 118"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.64 2.6C22.78 9.67-.12 42.85.94 64.59c1.21 25.11 37.11 53.53 66.31 52.44 44.11-1.67 80.2-41.07 65.56-71.62-7.71-16.07-46.07-42.3-61.88-42.3-1.06 0-4-.55-6.46-1.17C57.81.23 49.95.47 43.64 2.6z"
                          fill="#A78627"
                        />
                      </svg>
                      <svg
                        className="icon"
                        width="54"
                        height="65"
                        viewBox="0 0 54 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_1310)">
                          <path
                            d="M32.68 57.99c8.53 0 19.88-11.28 19.9-25.2"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.32 57.99c-8.53 0-19.88-11.28-19.9-25.2"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.54 55.36v3.78c0 1.11.64 2.12 1.67 2.56 1.91.82 5.62 1.9 11.79 1.9"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M40.46 55.36v3.78c0 1.11-.64 2.12-1.67 2.56-1.91.82-5.62 1.9-11.79 1.9"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M26 27.19c-9.73.16-17.47 2.6-17.47 5.6 0 3.09 8.27 5.59 18.47 5.59 4.3 0 8.24-.45 11.38-1.19"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M38.39 37.19c4.31-1.03 7.08-2.61 7.08-4.4 0-1.48-1.91-2.82-4.98-3.82"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M26 27.19c.9-1.86 1.83-3.77 2.69-5.58"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M40.49 28.96c-1.11 4.33-2.07 8.13-2.1 8.23"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M26 27.19c-2.66 5.54-5.08 10.6-5.08 10.6"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M40.49 28.96c.44-1.75.91-3.59 1.34-5.29"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M41.83 23.67c.82-3.21 1.53-5.97 1.76-6.9.67-2.65-.82-5.67-3.8-6.63-2.99-.95-5.52.38-7.01 3.18-.53 1-2.18 4.37-4.07 8.29"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M38.3843 37.1963L38.3931 37.1875"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.48 22.58c-1.05.21-2.06.45-3.03.71"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.48 22.58c3.21-.63 6.76-1 10.52-1 .57 0 1.14.02 1.7.04"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.45 23.29c-7.21 1.99-12.02 5.49-12.02 9.5 0 6.18 11.44 11.2 25.57 11.2 14.12 0 25.56-5.02 25.56-11.2 0-3.77-4.24-7.09-10.73-9.12"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.45 23.29c-2.41-.34-5.77-1.26-7.86-3.72C2.07 15.42 3.58 8.45 3.58 8.45c0 0 4.62-.14 8.27 1.94"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.11 15.87c-.34-1.23-.92-2.44-1.8-3.48-.69-.83-1.55-1.48-2.45-2"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22.31 15.87c.73-1.73 1.2-3.74.85-5.78-.95-5.33-7.31-8.69-7.31-8.69 0 0-3.88 4.26-3.99 8.99"
                            stroke="white"
                            strokeWidth="3.5823"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_1310">
                            <rect width="54" height="65" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="content">
                      <h3
                        style={{
                          fontSize: "22px",
                          lineHeight: "32px",
                        }}
                      >
                        {feature1Title}
                      </h3>
                      <p>{feature1Text}</p>
                    </div>
                  </div>
                  <div className="inner-box wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="icon-box">
                      <svg
                        className="icon-bg"
                        width="137"
                        height="118"
                        viewBox="0 0 137 118"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.64 2.6C22.78 9.67-.12 42.85.94 64.59c1.21 25.11 37.11 53.53 66.31 52.44 44.11-1.67 80.2-41.07 65.56-71.62-7.71-16.07-46.07-42.3-61.88-42.3-1.06 0-4-.55-6.46-1.17C57.81.23 49.95.47 43.64 2.6z"
                          fill=""
                        />
                      </svg>
                      <svg
                        className="icon"
                        width="54"
                        height="56"
                        viewBox="0 0 54 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_1340)">
                          <path
                            d="M7.9 13.17c-1.45 0-2.63-1.18-2.63-2.63C5.27 9.08 6.45 7.9 7.9 7.9H21.07c1.46 0 2.64 1.18 2.64 2.64 0 1.45-1.18 2.63-2.64 2.63h-7.9"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.76 7.9l.68-3.44c.33-1.62-.92-3.14-2.58-3.14H11.12c-1.66 0-2.91 1.52-2.59 3.14L9.22 7.9"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.58 34.24c0 0 2.64-1.31 6.59-1.31 3.95 0 5.27 2.63 9.22 2.63.97 0 1.8-.12 2.52-.27"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.9 13.17v3.95c-2.63 0-6.58 3.54-6.58 7.9v24.5C1.32 51.99 3.33 54 5.79 54H23.18c2.48 0 4.48-2.01 4.48-4.48V44.77"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.6582 36.3381V38.1096"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.07 13.17v3.95c2.53 0 6.27 3.27 6.56 7.4"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M31.71 25.62c-.21-.9-.33-1.8-.33-2.63 0-3.89 2.58-5.87 5.76-5.87 3.18 0 5.76 1.98 5.76 5.87 0 .6-.06 1.24-.18 1.9"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M31.71 25.62c-.57-.31-1.15-.58-1.71-.76-.85-.28-1.64-.38-2.37-.35"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.63 24.52c-2.4.1-4.13 1.75-4.89 4.11-.82 2.59-.2 5.18 2.17 6.66"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29 36.52c-.46-.04-.91-.1-1.34-.18"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M24.91 35.29c.45.28.94.55 1.53.74.38.12.79.23 1.22.31"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M38.33 42.5c-.35.86-.77 1.67-1.24 2.33-2.25 3.15-5.47 3.21-8.05 1.3-.54-.4-.99-.87-1.38-1.37"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.66 38.11c-1.64 2.42-1.4 4.83 0 6.66"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M29 36.52c-.47.46-.89.93-1.24 1.42-.04.06-.07.12-.11.17"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M46.81 35.32c.7.6 1.32 1.26 1.79 1.93 2.25 3.14 1.3 6.29-1.28 8.2-2.57 1.9-5.8 1.85-8.05-1.3-.34-.49-.66-1.05-.94-1.65"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M46.81 35.32c.64-.09 1.26-.23 1.82-.41 3.64-1.21 4.68-4.31 3.7-7.4-.98-3.08-3.62-4.97-7.26-3.76-.77.25-1.57.65-2.36 1.14"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M38.19 36.88c2.19 0 3.96-1.77 3.96-3.95 0-2.19-1.77-3.95-3.96-3.95-2.18 0-3.95 1.76-3.95 3.95 0 2.18 1.77 3.95 3.95 3.95z"
                            stroke="#A78627"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="content">
                      <h3
                        style={{
                          fontSize: "22px",
                          lineHeight: "32px",
                        }}
                      >
                        {feature2Title}
                      </h3>
                      <p>{feature2Text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
