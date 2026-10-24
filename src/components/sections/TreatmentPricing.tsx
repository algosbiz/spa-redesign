/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { displayPrice } from "@/lib/price";
import { LotusIcon } from "@/components/ui/Lotus";
import Link from "next/link";
import type { ReactNode } from "react";

export type TreatmentPricingProps = {
  subTitle?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  /** `image` exists in some live data but the live component shows `images[i]`. */
  /** `was`: the price before a package discount, struck through above the price. */
  packages?: { price: string; was?: string; suffix?: string; name: string; treatments: string[]; image?: string }[];
  leftShapeSrc?: string;
  images?: string[];
  topContent?: ReactNode;
  children?: ReactNode;
};

const DEFAULT_PACKAGES: NonNullable<TreatmentPricingProps["packages"]> = [
  {
    price: "$19",
    suffix: "/ Hr",
    name: "Massage & Treatments",
    treatments: ["1. Relaxing Spa", "2. Oil Massage", "3. Cupping Massage", "4. Hand & Feet"],
  },
  {
    price: "$59",
    suffix: "/ Hr",
    name: "Massage & Treatments",
    treatments: ["1. Relaxing Spa", "2. Oil Massage", "3. Cupping Massage", "4. Hand & Feet"],
  },
  {
    price: "$89",
    suffix: "/ Hr",
    name: "Massage & Treatments",
    treatments: ["1. Relaxing Spa", "2. Oil Massage", "3. Cupping Massage", "4. Hand & Feet"],
  },
  {
    price: "$119",
    suffix: "/ Hr",
    name: "Massage & Treatments",
    treatments: ["1. Relaxing Spa", "2. Oil Massage", "3. Cupping Massage", "4. Hand & Feet"],
  },
];
export default function TreatmentPricing({
  subTitle = "Best Price",
  title = <>Our Flexible Price</>,
  text = "Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget,",
  packages = DEFAULT_PACKAGES,
  leftShapeSrc = "/images/shape/leaf/4a.png",
  images = [],
  topContent,
  children,
}: TreatmentPricingProps) {
  const leftIsFloral = "/images/about/shape1.png" === leftShapeSrc;
  return (
    <>
      <section className="pricing-section-three bg-sub section__decoration-top section__decoration-bottom pt-130 pb-170">
        <div className="shape1">
          {leftIsFloral ? (
            <span className="about-leaf-gold animation__arryUpDown" aria-hidden="true" />
          ) : (
            <img loading="lazy" decoding="async" className="animation__arryUpDown" src={leftShapeSrc} alt="image" />
          )}
        </div>
        <div className="shape2">
          <img
            loading="lazy"
            decoding="async"
            className="animation__arryLeftRight"
            src="/images/shape/pricing-three-shape-right.png"
            alt="image"
          />
        </div>
        <div className="container">
          {topContent}
          <div className="section-header__flex mb-60">
            <div>
              {subTitle !== "" && (
                <p className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <LotusIcon className="icon" />
                  {subTitle}
                </p>
              )}
              <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                {title}
              </h2>
            </div>
            <div className="flex-text wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <p>{text}</p>
            </div>
          </div>
          {packages.map((e, a) => {
            const isOdd = a % 2 == 1,
              image =
                images[a] ||
                (isOdd ? "/images/pricing/pricing-three-image2.jpg" : "/images/pricing/pricing-three-image1.jpg");
            return (
              <div className={`outer-box ${a < packages.length - 1 ? "mb-50" : ""}`} key={`${e.name}-`.concat(e.price)}>
                <div className="row g-4">
                  {!isOdd && (
                    <div className="col-lg-8 col-xl-9 image-column">
                      <div className="image-box">
                        <img loading="lazy" decoding="async" src={image} alt="image" />
                      </div>
                    </div>
                  )}
                  <div className={`col-lg-4 col-xl-3 pricing-block ${isOdd ? "order-2 order-lg-1" : ""}`}>
                    <div className="inner-box">
                      <div className="shape">
                        <img loading="lazy" decoding="async" src="/images/pricing/shape.png" alt="image" />
                      </div>
                      {e.was ? (
                        <p className="package-was">
                          <span className="sr-only">Normally </span>
                          <s>{displayPrice(e.was)}</s>
                        </p>
                      ) : null}
                      <p className="price package-price">
                        {displayPrice(e.price)}{" "}
                        {/* "per person" / "for two guests" (copy rewrite, 15 Oct): a line of its own. */}
                        {e.suffix && <span className="package-price__note">{e.suffix}</span>}
                      </p>
                      <h3 className="package-name">{e.name}</h3>
                      <ul>
                        {e.treatments.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                      <Link
                        prefetch={false}
                        href="https://wa.me/6287863175144"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-two mt-35"
                      >
                        Book Now
                        <span className="icon_box">
                          <i className="fa-regular icon_first fa-arrow-right-long" />
                          <i className="fa-regular icon_second fa-arrow-right-long" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  {isOdd && (
                    <div className="col-lg-8 col-xl-9 image-column order-1 order-lg-2">
                      <div className="image-box">
                        <img loading="lazy" decoding="async" src={image} alt="image" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {children}
        </div>
      </section>
    </>
  );
}
