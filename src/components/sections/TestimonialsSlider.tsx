"use client";

import { useCallback, useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "@/components/sections/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { useI18n } from "@/i18n/client";

/**
 * The live review slider: Swiper with loop, autoHeight, 5s autoplay and
 * dynamic bullets. Long reviews are clamped by CSS; a "Read more" toggle
 * appears only when the text actually overflows. Loaded by Testimonials only
 * when the section comes near the screen.
 */
export default function TestimonialsSlider() {
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
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoHeight
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      pagination={{ clickable: true, dynamicBullets: true }}
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
      {testimonials.map((t, i) => (
        <SwiperSlide key={i} className="swiper-slide testimonial-block-two">
          <TestimonialCard testimonial={t} onExpandChange={onExpandChange} onMeasure={onMeasure} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
