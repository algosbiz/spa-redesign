"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { useCallback, useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewText from "@/components/ui/ReviewText";
import { treatmentPageReviews } from "@/data/testimonials";
import type { Testimonial } from "@/data/types";
import { useI18n } from "@/i18n/client";

/** Gold quote mark above each review. */
const Quote = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M55.12 14.19c0 3.64-.7 7.16-2.09 10.44C48.69 35.08 42.56 39.36 31.9 39.38c0 0 0 0-.01 0-.92 0-1.71-.66-1.9-1.56-.18-.91.31-1.81 1.16-2.17 5.11-2.13 6.65-4.63 8.45-9.84H35.75c-3.21 0-5.81-2.6-5.81-5.81V6.44c0-3.21 2.6-5.82 5.81-5.82H49.22c.65 0 1.27.34 1.63.89 2.58 4.02 4.27 7.07 4.27 12.68zM20.15.62H6.69C3.48.62.88 3.23.88 6.44V20c0 3.21 2.6 5.81 5.81 5.81h3.84c-1.8 5.21-3.33 7.71-8.44 9.84-.86.36-1.34 1.26-1.16 2.17.18.9.98 1.56 1.9 1.56h.01c10.66-.02 16.79-4.3 21.13-14.75 1.39-3.28 2.09-6.8 2.09-10.44 0-5.61-1.69-8.66-4.28-12.68-.35-.55-.97-.89-1.63-.89z"
      fill="none"
      stroke="#A78627"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Review slider on a paper band — the live treatment-page variant of
 * "testimonial-section-two": torn edges, a leaf on the right, no bullets,
 * loop, autoHeight and 5s autoplay. Since the copy rewrite (15 Oct) it shows
 * six chosen reviews under "Reviews of Spa Bali Moon" (they are about the
 * spa, not the treatment on the page). No link out to Google (owner, 22 Oct:
 * keep visitors on the site).
 */
export default function TreatmentTestimonials({
  paperDecoration = true,
  rightShapeSrc = "/images/shape/testimonial-two-shape-right.webp",
  title = "Reviews of Spa Bali Moon",
  reviews = treatmentPageReviews,
}: {
  title?: string;
  reviews?: Testimonial[];
  paperDecoration?: boolean;
  /** `null` hides the right-hand leaf. */
  rightShapeSrc?: string | null;
}) {
  const { el } = useI18n();
  const swiperRef = useRef<SwiperInstance | null>(null);
  const live = () => {
    const s = swiperRef.current;
    return s && !s.destroyed && s.params ? s : null;
  };
  const onMeasure = useCallback(() => live()?.updateAutoHeight(0), []);
  const onExpandChange = useCallback((expanded: boolean) => {
    const s = live();
    if (!s) return;
    if (expanded) s.autoplay?.stop();
    s.updateAutoHeight(320);
  }, []);

  return el(
    <section
      className={`testimonial-section-two${paperDecoration ? " section__decoration-top section__decoration-bottom bg-sub" : ""} pt-170 pb-170`}
    >
      <div className="shape1">
        <img
          loading="lazy"
          decoding="async"
          className="animation__arryUpDown"
          src="/images/shape/testimonial-two-shape-left.webp"
          alt=""
          aria-hidden="true"
        />
      </div>
      {rightShapeSrc && (
        <div className="shape2">
          <img
            loading="lazy"
            decoding="async"
            className="animation__arryLeftRight"
            src={rightShapeSrc}
            alt=""
            aria-hidden="true"
          />
        </div>
      )}
      <div className="shape3">
        <img
          loading="lazy"
          decoding="async"
          className="bobble__animation"
          src="/images/logo/sbm.webp"
          alt="Spa Bali Moon watermark"
        />
      </div>
      <div className="container">
        <div className="section-header center treatment-reviews__header">
          <h2 className="title">{title}</h2>
        </div>
        <div className="outer-box">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={reviews.length > 1}
            autoHeight
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
            onDestroy={() => {
              swiperRef.current = null;
            }}
            className="swiper testimonial-slider-two wow fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            {reviews.map((t, i) => (
              <SwiperSlide key={`${t.name}-${i}`} className="swiper-slide testimonial-block-two">
                <div className="inner-box">
                  <div className="icon">
                    <Quote />
                  </div>
                  <ReviewText text={t.text} onExpandChange={onExpandChange} onMeasure={onMeasure} />
                  <div className="info">
                    <div className="look-h4">{t.name}</div>
                    <span>Customer review</span>
                    <div className="star" role="img" aria-label="5 out of 5 stars">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <i key={s} className="fa-solid fa-star" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
