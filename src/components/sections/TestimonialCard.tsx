import ReviewText from "@/components/ui/ReviewText";
import type { Testimonial } from "@/data/types";
import { useI18n } from "@/i18n/client";

/** One card of the review slider: quote mark, review, name and five stars. */
export default function TestimonialCard({
  testimonial,
  onExpandChange,
  onMeasure,
}: {
  testimonial: Testimonial;
  onExpandChange: (expanded: boolean) => void;
  onMeasure: () => void;
}) {
  const { el } = useI18n();
  return el(
    <div className="inner-box">
      <div className="icon">
        <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M55.13 14.19c0 3.64-.7 7.16-2.1 10.44C48.7 35.08 42.56 39.36 31.9 39.38a1.94 1.94 0 0 1-.75-3.73c5.11-2.13 6.65-4.63 8.45-9.84h-3.85c-3.2 0-5.81-2.6-5.81-5.81V6.44c0-3.2 2.6-5.81 5.81-5.81h13.47c.65 0 1.27.33 1.63.88 2.58 4.02 4.27 7.07 4.27 12.68M20.15.63H6.7a5.8 5.8 0 0 0-5.82 5.8V20c0 3.2 2.6 5.81 5.8 5.81h3.85c-1.8 5.21-3.33 7.7-8.44 9.84a1.94 1.94 0 0 0 .74 3.73c10.67-.02 16.8-4.3 21.14-14.75 1.39-3.28 2.1-6.8 2.1-10.44 0-5.6-1.7-8.66-4.29-12.68a2 2 0 0 0-1.63-.88"
            fill="none"
            stroke="#A78627"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ReviewText text={testimonial.text} onExpandChange={onExpandChange} onMeasure={onMeasure} />
      <div className="info">
        <div className="look-h4">{testimonial.name}</div>
        <span>Customer review</span>
        <div className="star">
          {[0, 1, 2, 3, 4].map((s) => (
            <i key={s} className="fa-solid fa-star" />
          ))}
        </div>
      </div>
    </div>
  );
}
