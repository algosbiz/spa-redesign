// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/massage-kuta/

import type { LandingPage } from "../types";

/** PAGE TEXT (/massage-kuta/) — uses the same section blocks as the treatment pages. */
export const kutaPage: LandingPage = {
  path: "/massage-kuta/",
  seo: {
    title: "Massage Kuta - Affordable Spa & Outcall Massage in Bali",
    description: "Massage in Kuta, Bali: in-spa and outcall massage with traditional Balinese therapists, including foot and couple massage. Book via WhatsApp.",
  },
  hero: {
    eyebrow: "After a Day in the Sun",
    title: "Massage Kuta",
    image: { src: "/images/gallery/massage-kuta/massagekuta-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "A Moment to Reset",
      heading: "What Can a Massage in Kuta Help With?",
      paragraphs: [
        "Kuta is known for long beach days, surfing, sightseeing, and a lively holiday atmosphere, but all that activity can leave the body feeling stiff, heavy, or overtired. A professional massage offers a chance to slow down, release built-up tension, and feel more comfortable again.",
      ],
      images: [
        { src: "/images/gallery/massage-kuta/massagekuta-2.webp", alt: "Spa treatment", width: 578, height: 601 },
        { src: "/images/gallery/massage-kuta/massagekuta-3.webp", alt: "Spa treatment detail", width: 630, height: 580 },
      ],
      highlights: [
        {
          title: "Restore a Lighter Feeling",
          text: "Targeted massage techniques help release tightness after long days of exploring Bali.",
        },
        { title: "Gentle Finish", text: "Slow, flowing movements and carefully adjusted pressure help the body relax." },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Traditional", text: "Techniques" },
        { title: "Experienced", text: "Therapists" },
        { title: "Flexible", text: "Treatments" },
        { title: "Hotel & Villa", text: "Service" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Treatment Options",
      heading: "Which Massage Suits Your Day in Kuta?",
      paragraphs: [
        "The right massage depends on what your body needs. Choose Balinese Massage for traditional relaxation, Traditional Massage for firmer pressure, Thai Massage for stretching, Sport Massage after physical activity, or Lymphatic Massage for gentle, rhythmic movements.",
      ],
      items: [
        "Balinese Massage for full-body relaxation",
        "Traditional Massage for firmer pressure",
        "Thai Massage for stretching and mobility",
        "Sport Massage after exercise or surfing",
        "Lymphatic Massage for gentle, light-pressure care",
        "Bali Moon Facial for cleansing and skin refreshment",
        "Head Massage for scalp, neck, and shoulder tension",
        "Foot Reflexology for pressure-point foot care",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/gallery/massage-kuta/massagekuta-4.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Complete Experience",
      heading: "More Than a Full-Body Treatment",
      paragraphs: [
        "A relaxing spa experience can include more than massage. Add a Bali Moon Facial, Body Scrub, Cream Bath, Manicure, Pedicure, or other beauty treatments to create a more complete session.",
      ],
      items: [
        "Bali Moon Facial with Tea Tree or Gold Mask options",
        "Body Scrub for smoother, refreshed skin",
        "Cream Bath for hair, scalp, and relaxation care",
        "Manicure and Pedicure for hands and feet",
        "Couple Massage for shared relaxation",
        "Selected treatments available at hotels and villas",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/gallery/massage-kuta/massagekuta-5.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Make It a", "Full Spa Day"],
    },
    {
      type: "list",
      eyebrow: "About",
      heading: "Booking a Massage in Kuta",
      paragraphs: [
        "Just share your Kuta hotel or address and a preferred time. Our friendly team will confirm quickly and send a therapist ready to help you relax.",
      ],
      items: [
        "Same-day appointments",
        "Flexible timing",
        "Quick WhatsApp booking",
        "Clear, honest pricing",
        "Cash & card accepted",
        "English-speaking team",
      ],
      button: { label: "Learn More", href: "/seminyak/" },
      image: { src: "/images/gallery/massage-kuta/massagekuta-6.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Just Pick", "a Time"],
    },
  ],
  faq: {
    heading: "Unwind In Kuta",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/gallery/massage-kuta/massagekuta-7.webp", alt: "Spa facial treatment", width: 570, height: 496 },
    items: [
      {
        question: "What type of massage is best after a long day in Kuta?",
        answer: "Balinese Massage is a popular choice for general relaxation because it combines flowing massage movements, gentle stretching, and acupressure. Guests who prefer firmer pressure may prefer Traditional Massage, while Sport Massage is suitable after more physically demanding activities.",
      },
      {
        question: "Can I get a massage after surfing or spending time at the beach?",
        answer: "Yes. Sport Massage is often chosen after surfing, exercise, or other physical activities because it focuses on areas affected by repetitive movement and muscle fatigue. A gentler treatment may be more suitable if the body feels particularly sensitive or exhausted.",
      },
      {
        question: "Do you offer massage at hotels and villas near Kuta?",
        answer: "Yes. Selected massage and spa treatments can be arranged as home service at hotels, villas, and private accommodations in nearby areas. Availability and travel fees depend on the location and therapist availability.",
      },
      {
        question: "How long do massage sessions usually last?",
        answer: "Treatment durations vary depending on the service. Most massage sessions are available in options ranging from approximately one hour to longer sessions, allowing guests to choose according to their schedule and preferred level of relaxation.",
      },
      {
        question: "Can I combine a massage with another spa treatment?",
        answer: "Yes. Guests can combine selected treatments such as massage, facials, body scrubs, Cream Bath, Manicure and Pedicure, and other beauty services. Our team can help recommend combinations based on the experience you are looking for.",
      },
      {
        question: "What should I prepare before my massage?",
        answer: "Comfortable clothing and a little time to relax are usually all you need. For certain treatments, your therapist may provide specific guidance before the session to help you enjoy the treatment comfortably.",
      },
    ],
  },
  related: { eyebrow: "Our Treatments", heading: "Massage Services in / Kuta" },
  cta: {
    heading: "Take Time to Feel Better in Kuta",
    paragraphs: [
      "When the pace catches up with you, a professional massage is a welcome pause. Traditional Balinese therapies, targeted recovery work, and relaxing beauty treatments.",
      "Visit us for your treatment or ask about selected home service options at your hotel or villa in nearby areas.",
    ],
    image: { src: "/images/gallery/massage-kuta/massagekuta-8.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};
