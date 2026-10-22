"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { useCallback, useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewText from "@/components/ui/ReviewText";
import { treatmentPageReviews } from "@/data/testimonials";
import type { Testimonial } from "@/data/types";

/** Gold quote mark above each review. */
const Quote = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M55.125 14.1875C55.125 17.8317 54.4211 21.3452 53.0342 24.6281C48.69 35.08 42.5634 39.356 31.8977 39.375C31.8957 39.375 31.8957 39.375 31.8938 39.375C30.9704 39.375 30.1758 38.7242 29.9941 37.8198C29.8123 36.9134 30.295 36.0053 31.1482 35.6496C36.2607 33.5191 37.797 31.0234 39.5965 25.8127H35.75C32.5448 25.8127 29.9375 23.2054 29.9375 20.0002V6.4375C29.9375 3.23229 32.5448 0.625 35.75 0.625H49.216C49.8744 0.625 50.4893 0.959994 50.8451 1.51431C53.4297 5.53114 55.125 8.58309 55.125 14.1875ZM20.1535 0.625H6.6875C3.48229 0.625 0.875 3.23229 0.875 6.4375V20C0.875 23.2052 3.48229 25.8125 6.6875 25.8125H10.5342C8.73486 31.0234 7.19842 33.5189 2.08594 35.6494C1.23266 36.0051 0.750031 36.9132 0.931769 37.8196C1.11331 38.7242 1.90807 39.375 2.83149 39.375H2.83536C13.5011 39.356 19.6277 35.08 23.9719 24.6281C25.3586 21.3452 26.0625 17.8317 26.0625 14.1875C26.0625 8.58309 24.3672 5.53114 21.7826 1.51431C21.4268 0.959994 20.8119 0.625 20.1535 0.625Z"
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
  rightShapeSrc = "/images/shape/testimonial-two-shape-right.png",
  title = "Reviews of Spa Bali Moon",
  reviews = treatmentPageReviews,
}: {
  title?: string;
  reviews?: Testimonial[];
  paperDecoration?: boolean;
  /** `null` hides the right-hand leaf. */
  rightShapeSrc?: string | null;
}) {
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

  return (
    <section
      className={`testimonial-section-two${paperDecoration ? " section__decoration-top section__decoration-bottom bg-sub" : ""} pt-170 pb-170`}
    >
      <div className="shape1">
        <img
          loading="lazy"
          decoding="async"
          className="animation__arryUpDown"
          src="/images/shape/testimonial-two-shape-left.png"
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
                    <div className="star" aria-label="5 out of 5 stars">
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
