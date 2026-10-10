// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/outcall-home-service-massage/
// TODO SEO-01: this page has the same title and description as the homepage on the old site.

/**
 * HOME SERVICE PAGE TEXT (/outcall-home-service-massage/)
 *
 * Prices come from src/data/pricelist.ts. `itemIds` only decide which items appear in each tab.
 * "group:couple-massage" = the "Couple Massage" row (coupleMassageGroup below): every couple option and package in one row.
 * "packages:couples" = the couple packages from src/data/packages.ts, one row each.
 */
export const homeServicePage = {
  path: "/outcall-home-service-massage/",
  seo: {
    title: "Outcall Massage Bali - Home Service Massage - Spa Bali Moon",
    description: "Outcall massage in Bali: Balinese, Thai and deep tissue massage at your villa or hotel. Home service fee IDR 75,000 per therapist. Book via WhatsApp.",
  },
  hero: {
    eyebrow: "Outcall Spa Service",
    title: "Home Service Massage in Bali",
    text: "Experience our traditional massage and spa treatments in the comfort of your home, hotel, or villa.",
    image: { src: "/images/home/shared/homepage-28.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Book Now",
    // TODO HOURS-01: kept exactly as on the old page.
    openingTimes: "OPENING TIMES: Open Daily: 9:00 - 23:00",
  },
  intro: {
    eyebrow: "Spa Bali Moon in Seminyak, Bali",
    heading: "Home Service Balinese Massage",
    paragraphs: [
      "Find an authentic Balinese massage without the hassle. Let the stress of the week ease away as you enjoy a quiet, well-prepared session that fits naturally into your day.",
      "Explore treatment and package options that can be customized to your preferences.",
    ],
    images: [
      { src: "/images/gallery/home-service/outcall-2.webp", alt: "Spa treatment", width: 570, height: 496 },
      { src: "/images/gallery/home-service/outcall-3.webp", alt: "Spa treatment detail", width: 570, height: 496 },
    ],
    highlights: [
      {
        title: "Easy Booking via WhatsApp",
        textBefore: "Check ",
        linkLabel: "available treatments",
        // TODO LINK-01: the old page linked to a staging site (https://spa-ten-ochre.vercel.app/#0).
        // Pointed to the treatment list instead. Text unchanged.
        linkHref: "/seminyak/",
        textAfter: " and arrange your spa session easily through WhatsApp.",
      },
      {
        title: "Spa Treatments at Your Place",
        text: "Select your preferred treatment and book a spa session delivered to your location.",
      },
    ],
  },
  stats: [
    { title: "Easy Booking", text: "via WhatsApp" },
    { title: "Spa Treatments", text: "at Your Place" },
    { title: "Flexible", text: "Spa Packages" },
    { title: "Open Daily", text: "9am - 11pm" },
  ],
  treatmentsList: {
    eyebrow: "Spa & Beauty Service",
    heading: "Outcall Massage & Body Treatments",
    paragraphs: [
      "Enjoy professional massage and body treatments in the comfort of your villa, hotel, or accommodation. Choose from our selection of treatments:",
    ],
    items: [
      "Couple Massage — Relax side by side while sharing a massage experience together.",
      "Shiatsu — Release muscle tension using gentle Japanese pressure-point techniques.",
      "Thai Massage — Improve flexibility and posture with assisted stretching and acupressure.",
      "Cream Bath — Revitalize your hair while supporting softness and freshness.",
      "Body Scrub — Softly exfoliate the skin and promote smoothness.",
      "Mani-Pedi — Maintain clean and well-groomed hands and feet with professional care.",
      "Hot Stone — Soothe muscle tension using warm stones for deeper relaxation.",
      "Facial Care — Cleanse and refresh the skin to restore a healthy appearance.",
    ],
    buttonLabel: "Book Now",
    image: { src: "/images/home/shared/homepage-3.webp", alt: "Spa treatment", width: 360, height: 636 },
    imageBadge: ["17 + Years", "Experience"],
  },
  bookingList: {
    eyebrow: "Reserve Your Home Service Massage",
    heading: "Get Your Massage Service at Home",
    paragraphs: [
      "Enjoy professional Balinese massage and spa treatments at your home, hotel, or villa throughout the day. With flexible appointment times and responsive booking support, the process is simple and convenient. When booking a home service, you can expect:",
    ],
    items: [
      "Individual and group bookings",
      "Flexible appointment times",
      "Treatments at your hotel, villa, or home",
      "Clear treatment prices",
      "Responsive booking support",
      "Quick availability confirmation",
    ],
    buttonLabel: "Book Now",
    image: { src: "/images/gallery/home-service/outcall-4.webp", alt: "Spa treatment", width: 570, height: 496 },
    imageCaption: ["Home Spa", "Booking"],
  },
  prices: {
    eyebrow: "Prices",
    heading: "Professional Care with Thoughtful Details Focused on Comfort and Relaxation",
    tabs: [
      {
        label: "Most Popular",
        itemIds: [
          "balinese-massage",
          "cream-bath",
          "four-hand-massage",
          "lymphatic-massage",
          "manicure-pedicure",
          "sport-massage",
          "traditional-massage",
          "thai-massage",
        ],
      },
      {
        label: "Massage",
        itemIds: [
          "aloe-vera-massage",
          "aromatherapy-massage",
          "balinese-massage",
          "back-massage",
          "cellulite-massage",
          "group:couple-massage",
          "deep-tissue-massage",
          "four-hand-massage",
          "four-hand-warm-candle",
          "foot-reflexology",
          "foot-massage",
          "head-massage",
          "herbal-massage",
          "lymphatic-massage",
          "organic-warm-candle-oil-massage",
          "sport-massage",
          "shiatsu-massage",
          "traditional-massage",
          "thai-massage",
          "coconut-oil-massage",
          "hot-stone-massage",
        ],
      },
      {
        label: "Beauty",
        itemIds: [
          "bali-moon-tea-tree-facial",
          "bali-moon-gold-facial",
          "body-scrub",
          "foot-scrub",
          "biokos-facial",
          "cream-bath",
          "ear-candle",
          "eyelash",
          "manicure-pedicure",
          "waxing",
        ],
      },
      {
        label: "For Couples",
        // Order as on the live page (checked 2026-09-26).
        itemIds: [
          "couple-balinese-massage",
          "couple-deep-tissue-massage",
          "couple-traditional-massage",
          "couple-warm-candle-massage",
        ],
      },
      {
        // Its own tab on the live page (checked 2026-09-26).
        label: "Couple Packages",
        itemIds: ["packages:couples"],
      },
    ],
    coupleMassageGroup: {
      name: "Couple Massage",
      description: "Designed for two to relax together while easing the body and sharing a calm moment.",
      image: { src: "/images/treatments/cards/couplemassage.webp", alt: "Couple Massage", width: 630, height: 580 },
      itemIds: [
        "couple-balinese-massage",
        "couple-traditional-massage",
        "couple-deep-tissue-massage",
        "couple-warm-candle-massage",
      ],
      // Not shown on the live page any more (checked 2026-09-26); kept for reference.
      packagesTitle: "Couple Massage Packages",
      packagesDescription: "A well-balanced couple’s massage package created for relaxing together.",
    },
    couplePackagesTitle: "Couple Packages",
    // Couple package labels exactly as written on this page, with the photo the live page shows beside each.
    // TODO DUR-02: packages B and D say 2.5 Hours here, but include 1 Hr + 1 Hr on other pages.
    packageLabels: {
      "Package A": {
        heading: "Couple Massage Package A",
        label: "1.5 Hours – Balinese Massage + Ear Candle · 2 pax",
        image: { src: "/images/treatments/cards/couplebalinesemassage.webp", alt: "Couple Massage Balinese", width: 630, height: 580 },
      },
      "Package B": {
        heading: "Couple Massage Package B",
        label: "2.5 Hours – Balinese Massage + Bali Moon Facial · 2 pax",
        image: { src: "/images/treatments/cards/couplebalinesemassage.webp", alt: "Couple Massage Balinese", width: 630, height: 580 },
      },
      "Package C": {
        heading: "Couple Massage Package C",
        label: "1.5 Hours – Warm Candle + Ear Candle · 2 pax",
        image: { src: "/images/treatments/cards/couplewarmcandle.webp", alt: "Couple Warm Candle Massage", width: 630, height: 580 },
      },
      "Package D": {
        heading: "Couple Massage Package D",
        label: "2.5 Hours – Warm Candle + Bali Moon Facial · 2 pax",
        image: { src: "/images/treatments/cards/couplewarmcandle.webp", alt: "Couple Warm Candle Massage", width: 630, height: 580 },
      },
    },
  },
  info: {
    eyebrow: "Treat yourself to a Balinese spa experience right where you are",
    heading: "Home Service Massage",
    items: [
      {
        title: "Professional & Experienced Therapists",
        text: "Our trained therapists provide Balinese massage and selected spa treatments with attentive techniques suited to each guest.",
      },
      {
        title: "Clean & Hygienic Practice",
        text: "Every appointment is prepared with clean linens, sanitised equipment, and quality massage oils for a safe and comfortable experience.",
      },
      {
        title: "Full Spa Setup Provided to You",
        text: "Therapists bring the massage setup, towels, oils, and treatment essentials, so you do not need to prepare equipment before the session.",
      },
      {
        title: "On-Time & Reliable Service",
        text: "Your appointment time and location are confirmed in advance so the therapist can arrive prepared and begin as scheduled.",
      },
      {
        title: "Flexible Scheduling",
        text: "Home service is available daily from 9:00 AM to 11:00 PM, making it easier to arrange a treatment around your Bali plans.",
      },
      {
        title: "Simple Booking via WhatsApp",
        text: "Send your preferred treatment, time, number of guests, and location through WhatsApp, and our team will confirm the booking details.",
      },
    ],
    // TODO FEE-01: see migration-audit.md
    feeNote: { before: "Home service fee: ", highlight: "IDR 75,000", after: " per therapist" },
  },
  faq: {
    heading: "Home Service Massage",
    eyebrow: "Frequently Asked Questions",
    items: [
      {
        question: "What is an outcall massage?",
        answer: "An outcall massage is a professional treatment delivered by a therapist who travels to you, rather than you visiting the spa. Our therapists come to your villa, hotel room, or private residence with everything needed for the session. It is also known as home service or mobile massage.",
      },
      {
        question: "Do I need to prepare anything?",
        answer: "No. Our therapists bring the massage bed, clean linens, towels, and oils. All you need is a space of roughly two by two metres and a bedroom, terrace, or living area all work well. If you have a preference for where the session takes place, tell us when you book.",
      },
      {
        question: "What does the therapist bring?",
        answer: "A portable massage bed, freshly laundered linens and towels, professional massage oils, and any equipment specific to your chosen treatment. Nothing is reused between guests. You do not need to supply towels, sheets, or anything else.",
      },
      {
        question: "How long does setup take?",
        answer: "Around five to ten minutes on arrival, and a similar time to pack down afterwards. Your treatment time begins once setup is complete, so a booked 60-minute massage is a full 60 minutes of treatment.",
      },
      {
        question: "Which areas do you cover for home service?",
        answer: "Our spa is in Seminyak, and home service is available across Seminyak, Kerobokan, Petitenget, Canggu, and North Kuta. We also travel to Kuta, Jimbaran, Uluwatu, Nusa Dua, Sanur, Denpasar, and Ubud, subject to therapist availability and travel time. Message us with your location and we will confirm.",
      },
      {
        question: "What if my hotel doesn't allow outside therapists?",
        answer: "Some hotels and resorts restrict external therapists, particularly larger properties with their own spa. Please check with reception before booking. Private villas and guesthouses rarely have this restriction. If your property does not permit home service, you are very welcome at our Seminyak spa instead.",
      },
      {
        question: "Which massage is best after a long flight?",
        answer: "A one-hour Balinese or aromatherapy massage suits most guests arriving in Bali. Both use steady, flowing pressure rather than deep work, which helps with circulation and sleep after a long journey. Foot reflexology is a good shorter option if your legs and feet feel swollen.",
      },
    ],
  },
  cta: {
    heading: "Home Service Massage in Seminyak",
    paragraphs: [
      "Professional treatments at your home, hotel, or villa for an extra IDR 75,000 per therapist around Seminyak. Our therapists bring everything the session needs, including oils and fresh linen.",
      "For in-spa treatments, bookings are made on-site at your preferred time.",
    ],
    image: { src: "/images/gallery/home-service/outcall-5.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};
