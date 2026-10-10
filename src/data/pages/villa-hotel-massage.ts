// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/villa-hotel-massage/

import type { LandingPage } from "../types";

/** PAGE TEXT (/villa-hotel-massage/) — uses the same section blocks as the treatment pages. */
export const villaHotelPage: LandingPage = {
  path: "/villa-hotel-massage/",
  seo: {
    title: "Villa & Hotel Massage Seminyak - In-Room Massage Bali",
    description: "In-villa and hotel massage in Seminyak, Bali. Authentic Balinese techniques brought to your room. Book via WhatsApp.",
  },
  hero: {
    eyebrow: "In-Room Spa Service",
    title: "Hotel Villa Massage in Seminyak",
    image: { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-1.webp", alt: "", width: 1920, height: 850 },
  },
  sections: [
    {
      type: "intro",
      eyebrow: "Your Way to Relax",
      heading: "What Is an In-Room Massage?",
      paragraphs: [
        "An in-room massage brings the spa experience directly to your hotel, villa, or private accommodation. Instead of travelling across Seminyak for an appointment, our experienced therapists come to you with professional massage and spa treatments, helping you relax and enjoy your treatment in a space where you already feel comfortable.",
      ],
      images: [
        {
          src: "/images/gallery/villa-hotel-massage/massagehotelvilla-2.webp",
          alt: "Spa treatment",
          width: 578,
          height: 601,
        },
        {
          src: "/images/gallery/villa-hotel-massage/massagehotelvilla-3.webp",
          alt: "Spa treatment detail",
          width: 630,
          height: 580,
        },
      ],
      highlights: [
        {
          title: "No Travel Required",
          text: "Enjoy a professional massage without leaving your hotel, villa, or private accommodation.",
        },
        {
          title: "Experienced Therapists",
          text: "Skilled therapists bring professional massage and spa directly to your accommodation.",
        },
      ],
    },
    {
      type: "stats",
      items: [
        { title: "Delivered", text: "To Your Door" },
        { title: "Professional", text: "Therapists" },
        { title: "Flexible", text: "Treatments" },
        { title: "Easy WhatsApp", text: "Booking" },
      ],
    },
    { type: "testimonials" },
    {
      type: "list",
      eyebrow: "Stay In",
      heading: "Why Book a Massage at Your Hotel or Villa?",
      paragraphs: [
        "A massage at your accommodation gives you more time to relax and less time spent travelling between appointments. It is a convenient choice after a long flight, a full day exploring Bali, or simply when you would rather enjoy professional spa care in the privacy of your own space.",
      ],
      items: [
        "No travel to and from the spa",
        "Professional treatments delivered to your accommodation",
        "Convenient after flights and long days of exploring",
        "Suitable for solo travellers, couples, families, and groups",
        "Massage and selected spa treatments available",
        "Available in Seminyak and nearby areas",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-4.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageBadge: ["17 + Years", "Experience"],
    },
    {
      type: "list",
      eyebrow: "Treatments for Your Stay",
      heading: "Treatments That Work Well in Your Hotel or Villa",
      paragraphs: [
        "The right treatment depends on how you want to feel after your session. A Balinese Massage offers a traditional full-body experience, Sport Massage can help ease tired muscles after physical activity, while body scrubs, facials, cream baths, and beauty treatments allow you to create a more complete in-room spa experience.",
      ],
      items: [
        "Balinese Massage for traditional full-body relaxation",
        "Sport Massage after exercise, surfing, or physical activity",
        "Thai Massage for stretching and mobility",
        "Lymphatic Massage for gentle, light-pressure body care",
        "Body Scrub for smoother, refreshed skin",
        "Facials for cleansing and skin care",
        "Cream Bath for hair and scalp care",
        "Manicure and Pedicure for hands and feet",
      ],
      button: { label: "Book Now" },
      image: { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-5.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Spa Comes", "to You"],
    },
    {
      type: "list",
      eyebrow: "About",
      heading: "Booking Your Hotel & Villa Massage",
      paragraphs: [
        "Reserving is simple — send us your hotel or villa address and preferred time, and our therapist will arrive ready to help you relax. A small travel fee of 75k per therapist applies for home and hotel visits.",
      ],
      items: [
        "Quick WhatsApp booking",
        "Flexible appointment times",
        "Same-day reservations",
        "Transparent pricing",
        "Cash & card accepted",
        "English-speaking team",
      ],
      button: { label: "Learn More", href: "/seminyak/" },
      image: { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-6.webp", alt: "Spa treatment", width: 570, height: 496 },
      imageCaption: ["Ready When", "You Are"],
    },
  ],
  faq: {
    heading: "Relax In Your Room",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: {
      src: "/images/gallery/villa-hotel-massage/massagehotelvilla-7.webp",
      alt: "Spa facial treatment",
      width: 570,
      height: 496,
    },
    items: [
      {
        question: "How do I book a hotel or villa massage in Seminyak?",
        answer: "Browse our treatment menu, choose your preferred service and duration, then contact us via WhatsApp with your accommodation details and preferred appointment time.",
      },
      {
        question: "How long does it take for the therapist to arrive?",
        answer: "Our therapists typically arrive within 30 to 60 minutes, depending on your location, traffic, and availability at the time of booking.",
      },
      {
        question: "Can I book a massage for more than one person?",
        answer: "Yes. Couples, families, and groups can arrange multiple treatments, subject to therapist availability. Contact us in advance so we can coordinate your booking.",
      },
      {
        question: "Can I book more than just a massage?",
        answer: "Yes. Selected spa treatments, including facials, body scrubs, Sport Massage, reflexology, cream baths, manicures, and pedicures, may also be arranged as home service.",
      },
      {
        question: "Is there an additional fee for home service?",
        answer: "Yes. An additional outcall fee of IDR 75,000 per therapist applies for home service appointments in Seminyak and nearby areas.",
      },
      {
        question: "How can I pay for my in-room treatment?",
        answer: "Payment options include cash, bank transfer, Visa, and Mastercard, subject to availability.",
      },
    ],
  },
  related: { eyebrow: "Our Treatments", heading: "Massage Services for / Your Stay" },
  cta: {
    heading: "Bring the Spa Experience to Your Hotel or Villa",
    paragraphs: [
      "Your Bali itinerary does not have to end at your room. Our therapists bring professional massage and selected treatments to your hotel or villa around Seminyak, carrying everything needed.",
      "Send us a message on WhatsApp and we will arrange the rest of the details.",
    ],
    image: { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-8.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};
