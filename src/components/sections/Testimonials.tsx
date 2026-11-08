"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import dynamic from "next/dynamic";
import { useRef } from "react";
import TestimonialCard from "@/components/sections/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { useI18n } from "@/i18n/client";
import { useNearViewport } from "@/lib/useNearViewport";

const noop = () => {};

/**
 * The slider as swiper/react renders it on the server, before Swiper starts:
 * every review in the HTML, the first one in view.
 */
function StaticSlider() {
  const { el } = useI18n();
  return el(
    <div className="swiper testimonial-slider-two wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
      <div className="swiper-wrapper">
        {testimonials.map((t, i) => (
          <div key={i} className="swiper-slide testimonial-block-two">
            <TestimonialCard testimonial={t} onExpandChange={noop} onMeasure={noop} />
          </div>
        ))}
      </div>
      <div className="swiper-pagination" />
    </div>
  );
}

// Swiper's JavaScript is fetched only when the section comes near the screen.
const TestimonialsSlider = dynamic(() => import("@/components/sections/TestimonialsSlider"), {
  ssr: false,
  loading: () => <StaticSlider />,
});

/**
 * Review slider — the live "testimonial-section-two". It sits far down the
 * page, so it starts as the static markup above and becomes the Swiper
 * slider (TestimonialsSlider) before the reader scrolls to it.
 */
export default function Testimonials() {
  const { el } = useI18n();
  const box = useRef<HTMLDivElement>(null);
  const near = useNearViewport(box);

  return el(
    <section className="testimonial-section-two pt-130 pb-130">
      <div className="shape1">
        <img loading="lazy" decoding="async" className="animation__arryUpDown" src="/images/shape/testimonial-two-shape-left.png" alt="image" />
      </div>
      <div className="shape2">
        <img loading="lazy" decoding="async" className="animation__arryLeftRight" src="/images/shape/testimonial-two-shape-right.png" alt="image" />
      </div>
      <div className="shape3">
        {/* The file's own size, so PageSpeed sees a sized image; live.css
            still draws it at min(420px, 70vw) wide. */}
        <img
          loading="lazy"
          decoding="async"
          className="bobble__animation"
          src="/images/logo/sbm.webp"
          alt="Spa Bali Moon watermark"
          width="659"
          height="515"
        />
      </div>
      <div className="container">
        <div ref={box} className="outer-box">
          {near ? <TestimonialsSlider /> : <StaticSlider />}
        </div>
      </div>
    </section>
  );
}
