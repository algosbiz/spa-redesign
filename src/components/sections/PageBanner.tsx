"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LotusPaths25 } from "@/components/ui/Lotus";
import { whatsappChatUrl } from "@/lib/whatsapp";

export type PageBannerProps = {
  subTitle?: string;
  /** First words of the heading, set apart in a span. */
  titleSpan?: string;
  title?: string;
  text?: string;
  openingText?: string;
  image: string;
  shapeImage?: string;
  buttonText?: string;
  buttonLink?: string;
  /** Buttons in place of the one "Book Now" (the outcall page's row buttons). */
  actions?: ReactNode;
};

const S = "jsx-page-banner";

/**
 * Full-width photo banner at the top of inner pages — the live
 * "banner-two-area". The photo is a CSS variable so phones get the `-sm`
 * file; both are preloaded with media queries, as live.
 */
export default function PageBanner({
  subTitle = "Rejuvenate You Today",
  titleSpan = "Indulge in",
  title = "Pure Tranquility",
  text = "",
  openingText = "",
  image,
  shapeImage = "/images/shape/banner-two-shape.png",
  buttonText = "Book Now",
  buttonLink = whatsappChatUrl,
  actions,
}: PageBannerProps) {
  const small = image.replace(/(\.[a-z0-9]+)$/i, "-sm$1");

  // Swiper adds `swiper-backface-hidden` (translateZ(0) on the slide) straight
  // to the DOM while it initialises, then React re-renders the class list it
  // was told about and drops it. Live ends with the class last in the list;
  // running Swiper's own check once more after that re-render does the same.
  const swiperRef = useRef<SwiperInstance | null>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const swiper = swiperRef.current;
      if (swiper && !swiper.destroyed) swiper.updateSlides();
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <link rel="preload" as="image" href={small} media="(max-width: 767px)" fetchPriority="high" />
      <link rel="preload" as="image" href={image} media="(min-width: 768px)" fetchPriority="high" />
      <section className={`${S} banner-two-area section__decoration-bottom`}>
        <div className={`${S} banner-two__shape`}>
          <img src={shapeImage} alt="" aria-hidden="true" fetchPriority="low" decoding="async" className={S} />
        </div>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          loop={false}
          allowTouchMove={false}
          pagination={{ clickable: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="swiper  banner-two__slider"
        >
          <SwiperSlide className="swiper-slide">
            <div
              style={{ "--hero-lg": `url(${image})`, "--hero-sm": `url(${small})` } as React.CSSProperties}
              className={`${S} slide-bg`}
            />
            <div className={`${S} container`}>
              <div className={`${S}  banner-two__content`}>
                <p data-animation="fadeInUp" data-delay=".3s" className={`${S} sub-title`}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={S}>
                    <g clipPath="url(#clip0_1_451)" className={S}>
                      <LotusPaths25 fill="white" className={S} />
                    </g>
                  </svg>
                  {subTitle}
                </p>
                <h1 data-animation="fadeInUp" data-delay=".5s" className={`${S} title`}>
                  <span className={S}>{titleSpan}</span> {title}
                </h1>
                {text && <p className={`${S} text`}>{text}</p>}
                {actions ? (
                  <div className={`${S} banner-two__actions mt-50`}>{actions}</div>
                ) : (
                  <Link
                    href={buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-two-light mt-50"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
                    {buttonText}
                    <span className={`${S} icon_box`}>
                      <i className={`${S} fa-regular icon_first fa-arrow-right-long`} />
                      <i className={`${S} fa-regular icon_second fa-arrow-right-long`} />
                    </span>
                  </Link>
                )}
                {openingText && <p className={`${S} opening-times`}>{openingText}</p>}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`${S} banner-two__pagination`} />
      </section>
    </>
  );
}
