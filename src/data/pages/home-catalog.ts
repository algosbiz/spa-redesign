// ⚠️  Copied from the live site bundle (spabalimoon.com, 28 September 2026):
// names, descriptions, options and prices are the ones the homepage menu shows.

/**
 * HOMEPAGE SPA MENU — every card in "Browse Our Spa Treatments", plus the
 * source the treatment slider above it reads its "From" prices from.
 *
 * `categories` decides which tab a card appears under (Massage, Beauty,
 * For Couple, Couple Package). Cards are sorted A–Z inside each tab.
 * `href` is the page the card links to; cards without one are not linked.
 */
export type CatalogCategory = "massage" | "beauty" | "couple" | "couple-package";

export type CatalogOption = { label: string; price: string; details?: string[] };

export type CatalogItem = {
  id: string;
  name: string;
  category?: CatalogCategory;
  categories?: CatalogCategory[];
  href?: string;
  image: string;
  desc: string;
  benefits?: string[];
  options: CatalogOption[];
};

export const catalogCategories: { id: CatalogCategory; label: string }[] = [
  { id: "massage", label: "Massage" },
  { id: "beauty", label: "Beauty" },
  { id: "couple", label: "For Couple" },
  { id: "couple-package", label: "Couple Package" },
];

export const catalog: CatalogItem[] = [
  {
    id: "aloe-vera-massage",
    name: "Aloe Vera Massage",
    category: "massage",
    href: "/seminyak/sunburn-massage/",
    image: "/images/listmenu/aloeveramassage.webp",
    desc: "A cooling full-body massage with aloe vera that soothes sun-warmed skin.",
    options: [
      { label: "1 Hour", price: "IDR 250.000" },
    ],
  },
  {
    id: "aromatherapy-massage",
    name: "Aromatherapy Massage",
    category: "massage",
    href: "/contact/",
    image: "/images/listmenu/aromatherapymassage.webp",
    desc: "A gentle full-body massage combining essential oils with slow and calming movements.",
    options: [
      { label: "1 Hour", price: "IDR 199.000" },
      { label: "1.5 Hours", price: "IDR 339.000" },
      { label: "2 Hours", price: "IDR 439.000" },
    ],
  },
  {
    id: "back-massage",
    name: "Back Massage",
    category: "massage",
    href: "/contact/",
    image: "/images/listmenu/backmassage.webp",
    desc: "A targeted upper-body massage focused on easing tightness and restoring comfort.",
    options: [
      { label: "30 Minutes", price: "IDR 90.000" },
      { label: "1 Hour", price: "IDR 199.000" },
      { label: "1.5 Hours", price: "IDR 259.000" },
      { label: "2 Hours", price: "IDR 339.000" },
    ],
  },
  {
    id: "bali-moon-gold-facial",
    name: "Bali Moon Gold Facial",
    category: "beauty",
    href: "/seminyak/facial/",
    image: "/images/listmenu/balimoongoldfacial.webp",
    desc: "A premium facial treatment using gold and argan oil to support radiance and skin firmness.",
    benefits: [
      "Boosts natural glow",
      "Improves skin smoothness and elasticity",
      "Deeply moisturises",
      "Revives overall skin vitality",
    ],
    options: [
      { label: "Facial Treatment", price: "IDR 269.000" },
    ],
  },
  {
    id: "bali-moon-tea-tree-facial",
    name: "Bali Moon Tea Tree Facial",
    category: "beauty",
    href: "/seminyak/facial/",
    image: "/images/listmenu/balimoonteatreefacial.webp",
    desc: "A purifying facial treatment for oily or blemish-prone skin using clay and tea tree care.",
    benefits: [
      "Helps control excess oil",
      "Supports clearer-looking skin",
      "Calms and refreshes the face",
      "Maintains healthy hydration",
    ],
    options: [
      { label: "Facial Treatment", price: "IDR 196.000" },
    ],
  },
  {
    id: "balinese-massage",
    name: "Balinese Massage",
    category: "massage",
    href: "/seminyak/balinese-massage/",
    image: "/images/listmenu/balinesemassage.webp",
    desc: "A calming full-body massage with steady pressure, gentle stretches, and aromatic oils.",
    options: [
      { label: "1 Hour", price: "IDR 159.000" },
      { label: "1.5 Hours", price: "IDR 239.000" },
      { label: "2 Hours", price: "IDR 330.000" },
      { label: "1 Hour with Aloe Vera", price: "IDR 195.000" },
    ],
  },
  {
    id: "biokos-facial",
    name: "Biokos Facial",
    category: "beauty",
    href: "/seminyak/facial/",
    image: "/images/listmenu/biokosfacial.webp",
    desc: "A custom facial treatment for dry, normal, or oily skin, including a facial massage and mask.",
    options: [
      { label: "Biokos", price: "IDR 179.000" },
      { label: "Mustika Ratu", price: "IDR 169.000" },
      { label: "Sari Ayu", price: "IDR 169.000" },
      { label: "Viva", price: "IDR 169.000" },
    ],
  },
  {
    id: "body-scrub",
    name: "Body Scrub",
    category: "beauty",
    href: "/seminyak/body-scrub/",
    image: "/images/listmenu/bodyscrub.webp",
    desc: "A gentle exfoliation treatment to refresh the skin and leave it smooth and clean.",
    options: [
      { label: "Body Massage & Scrub · Start From", price: "IDR 169.000" },
      { label: "Chocolate", price: "IDR 169.000" },
      { label: "Coconut", price: "IDR 169.000" },
      { label: "Strawberry", price: "IDR 169.000" },
      { label: "Bengkoang", price: "IDR 169.000" },
      { label: "Jasmine", price: "IDR 169.000" },
      { label: "Green Tea", price: "IDR 169.000" },
      { label: "Spa Sari", price: "IDR 169.000" },
      { label: "Additional Body Mask", price: "IDR 100.000" },
    ],
  },
  {
    id: "cellulite-massage",
    name: "Cellulite Massage",
    category: "massage",
    href: "/seminyak/anti-cellulite-massage/",
    image: "/images/treatments/cards/cellulitemassage-warm.webp",
    desc: "A firm, targeted full-body massage that leaves the skin feeling smooth.",
    options: [
      { label: "1 Hour", price: "IDR 350.000" },
      { label: "1.5 Hours", price: "IDR 520.000" },
      { label: "2 Hours", price: "IDR 695.000" },
    ],
  },
  {
    id: "couple-deep-tissue-massage",
    name: "Couple Deep Tissue Massage",
    category: "couple",
    categories: ["couple"],
    href: "/seminyak/couple-spa/",
    image: "/images/listmenu/coupledeeptissumassage.webp",
    desc: "A deeper-pressure massage for two, focused on easing tight muscles and improving comfort.",
    options: [
      { label: "1 Hour · 2 pax", price: "IDR 539.000" },
      { label: "1.5 Hours · 2 pax", price: "IDR 719.000" },
    ],
  },
  {
    id: "couple-massage-balinese",
    name: "Couple Massage Balinese",
    category: "couple",
    categories: ["couple"],
    href: "/seminyak/couple-spa/",
    image: "/images/listmenu/couplebalinesemassage.webp",
    desc: "A side-by-side massage using steady pressure and flowing movements for shared relaxation.",
    options: [
      { label: "1 Hour · 2 pax", price: "IDR 319.000" },
      { label: "1.5 Hours · 2 pax", price: "IDR 479.000" },
      { label: "2 Hours · 2 pax", price: "IDR 659.000" },
    ],
  },
  {
    id: "couple-massage-package-a",
    name: "Couple Massage Package A",
    category: "couple-package",
    categories: ["couple-package"],
    href: "/seminyak/couple-spa/",
    image: "/images/listmenu/couplemassagepackage.webp",
    desc: "1 Hour – Balinese Massage",
    options: [
      { label: "1 Hour Balinese Massage · 2 pax", price: "IDR 625.000", details: ["30 Minutes Ear Candle"] },
    ],
  },
  {
    id: "couple-massage-package-b",
    name: "Couple Massage Package B",
    category: "couple-package",
    categories: ["couple-package"],
    href: "/seminyak/couple-spa/",
    image: "/images/listmenu/couplemassagepackage.webp",
    desc: "1 Hour – Balinese Massage",
    options: [
      { label: "1 Hour Balinese Massage · 2 pax", price: "IDR 699.000", details: ["1 Hour Bali Moon Facial"] },
    ],
  },
  {
    id: "couple-massage-package-c",
    name: "Couple Massage Package C",
    category: "couple-package",
    categories: ["couple-package"],
    href: "/seminyak/couple-spa/",
    image: "/images/listmenu/couplemassagepackage.webp",
    desc: "1 Hour – Warm Candle",
    options: [
      { label: "1 Hour Warm Candle · 2 pax", price: "IDR 845.000", details: ["30 Minutes Ear Candle"] },
    ],
  },
  {
    id: "couple-massage-package-d",
    name: "Couple Massage Package D",
    category: "couple-package",
    categories: ["couple-package"],
    href: "/seminyak/couple-spa/",
    image: "/images/listmenu/couplemassagepackage.webp",
    desc: "1 Hour – Warm Candle",
    options: [
      { label: "1 Hour Warm Candle · 2 pax", price: "IDR 919.000", details: ["1 Hour Bali Moon Facial"] },
    ],
  },
  {
    id: "couple-traditional-massage",
    name: "Couple Traditional Massage",
    category: "couple",
    categories: ["couple"],
    href: "/seminyak/couple-spa/",
    image: "/images/listmenu/coupletraditionalmassage.webp",
    desc: "A side-by-side massage with firmer pressure to help release tension together.",
    options: [
      { label: "1 Hour · 2 pax", price: "IDR 339.000" },
      { label: "1.5 Hours · 2 pax", price: "IDR 519.000" },
      { label: "2 Hours · 2 pax", price: "IDR 679.000" },
    ],
  },
  {
    id: "couple-warm-candle-massage",
    name: "Couple Warm Candle Massage",
    category: "couple",
    categories: ["couple"],
    href: "/seminyak/couple-spa/",
    image: "/images/listmenu/couplewarmcandle.webp",
    desc: "A comforting couple’s massage using gently heated candle oils to soften muscles and create a sense of calm.",
    options: [
      { label: "1 Hour · 2 pax", price: "IDR 539.000" },
      { label: "1.5 Hours · 2 pax", price: "IDR 799.000" },
      { label: "2 Hours · 2 pax", price: "IDR 999.000" },
    ],
  },
  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "massage",
    href: "/seminyak/deep-tissue-massage/",
    image: "/images/listmenu/deeptissuemassage.webp",
    desc: "A focused full-body massage using deeper pressure to ease knots and tight muscles.",
    options: [
      { label: "1 Hour", price: "IDR 269.000" },
      { label: "1.5 Hours", price: "IDR 359.000" },
    ],
  },
  {
    id: "ear-candle",
    name: "Ear Candle",
    category: "beauty",
    href: "/seminyak/ear-candle/",
    image: "/images/listmenu/earcandle.webp",
    desc: "A traditional ear candle treatment focused on comfort and gentle relaxation.",
    options: [
      { label: "30 Minutes", price: "IDR 159.000" },
    ],
  },
  {
    id: "eyelash",
    name: "Eyelash",
    category: "beauty",
    image: "/images/listmenu/eyelash.webp",
    desc: "A simple beauty treatment designed to enhance lash length and fullness.",
    options: [
      { label: "Normal Eyelash", price: "IDR 299.000" },
      { label: "Volume", price: "IDR 359.000" },
      { label: "Mega Volume", price: "IDR 399.000" },
    ],
  },
  {
    id: "foot-massage",
    name: "Foot Massage",
    category: "massage",
    href: "/seminyak/foot-massage/",
    image: "/images/listmenu/footmassage.webp",
    desc: "A focused massage on the soles, heels, and ankles to ease stiffness and restore comfort.",
    options: [
      { label: "1 Hour", price: "IDR 159.000" },
      { label: "1.5 Hours", price: "IDR 239.000" },
      { label: "2 Hours", price: "IDR 330.000" },
    ],
  },
  {
    id: "foot-reflexology",
    name: "Foot Reflexology",
    category: "massage",
    href: "/seminyak/foot-reflexology/",
    image: "/images/listmenu/footreflexology.webp",
    desc: "A focused lower-body massage applying pressure to reflex points on the feet.",
    options: [
      { label: "30 Minutes", price: "IDR 99.000" },
      { label: "1 Hour", price: "IDR 169.000" },
      { label: "1.5 Hours", price: "IDR 239.000" },
    ],
  },
  {
    id: "foot-scrub",
    name: "Foot Scrub",
    category: "beauty",
    href: "/contact/",
    image: "/images/listmenu/footscrub.webp",
    desc: "A quick foot care treatment that helps remove dry skin and leaves the feet feeling softer and cleaner.",
    options: [
      { label: "30 Minutes", price: "IDR 100.000" },
    ],
  },
  {
    id: "four-hand-massage",
    name: "Four Hand Massage",
    category: "massage",
    href: "/contact/",
    image: "/images/listmenu/fourhandmassage.webp",
    desc: "A synchronised full-body massage delivered by two therapists working in harmony.",
    options: [
      { label: "1 Hour", price: "IDR 339.000" },
      { label: "1.5 Hours", price: "IDR 499.000" },
      { label: "2 Hours", price: "IDR 669.000" },
    ],
  },
  {
    id: "four-hand-warm-candle",
    name: "Four Hand Warm Candle",
    category: "massage",
    href: "/contact/",
    image: "/images/listmenu/organicwarmcandle.webp",
    desc: "A deeply relaxing massage where two therapists work together using warmed oils.",
    options: [
      { label: "1 Hour", price: "IDR 539.000" },
      { label: "1.5 Hours", price: "IDR 799.000" },
      { label: "2 Hours", price: "IDR 999.000" },
    ],
  },
  {
    id: "hair-cream-bath",
    name: "Hair Cream Bath",
    category: "beauty",
    href: "/seminyak/creambath/",
    image: "/images/treatments/cards/creambath-warm.webp",
    desc: "A nourishing hair treatment that cleanses, conditions, and relaxes the scalp.",
    options: [
      { label: "Ginseng", price: "IDR 165.000" },
      { label: "Avocado", price: "IDR 165.000" },
      { label: "Aloe Vera", price: "IDR 165.000" },
      { label: "L'Oreal", price: "IDR 195.000" },
      { label: "NR", price: "IDR 165.000" },
      { label: "Hair Mask", price: "IDR 165.000" },
    ],
  },
  {
    id: "head-massage",
    name: "Head Massage",
    category: "massage",
    href: "/seminyak/head-massage/",
    image: "/images/listmenu/headmassage.webp",
    desc: "A focused head massage that helps release built-up stress and quiet the mind.",
    options: [
      { label: "1 Hour", price: "IDR 159.000" },
      { label: "1.5 Hours", price: "IDR 239.000" },
      { label: "2 Hours", price: "IDR 330.000" },
    ],
  },
  {
    id: "herbal-massage",
    name: "Herbal Massage",
    category: "massage",
    href: "/contact/",
    image: "/images/listmenu/herbalmassage.webp",
    desc: "A comforting full-body massage with herbal ingredients for deep relaxation.",
    options: [
      { label: "1 Hour", price: "IDR 199.000" },
      { label: "2 Hours", price: "IDR 399.000" },
    ],
  },
  {
    id: "warm-stone-massage",
    name: "Hot Stone Massage",
    category: "massage",
    href: "/seminyak/hot-stone-massage/",
    image: "/images/listmenu/hotstonemassage.webp",
    desc: "A soothing full-body massage using heated stones to warm and relax tired muscles.",
    options: [
      { label: "1 Hour", price: "IDR 250.000" },
      { label: "1.5 Hours", price: "IDR 380.000" },
      { label: "2 Hours", price: "IDR 495.000" },
    ],
  },
  {
    id: "lymphatic-massage",
    name: "Lymphatic Massage",
    category: "massage",
    href: "/seminyak/lymphatic-drainage-massage/",
    image: "/images/treatments/cards/lymphaticmassage-warm.webp",
    desc: "A gentle full-body massage with light, rhythmic strokes that leaves the body feeling lighter.",
    options: [
      { label: "1 Hour", price: "IDR 300.000" },
      { label: "1.5 Hours", price: "IDR 440.000" },
      { label: "2 Hours", price: "IDR 580.000" },
    ],
  },
  {
    id: "manicure-pedicure",
    name: "Manicure Pedicure",
    category: "beauty",
    href: "/seminyak/manicure-pedicure/",
    image: "/images/treatments/cards/manicurepedicure-warm.webp",
    desc: "A complete hand and foot treatment finished neatly with polish.",
    options: [
      { label: "Manicure & Pedicure", price: "IDR 238.000" },
      { label: "Manicure", price: "IDR 99.000" },
      { label: "Pedicure", price: "IDR 139.000" },
      { label: "Nail Colour Feet & Hands", price: "IDR 138.000" },
      { label: "Nail Colour Feet or Hands", price: "IDR 69.000" },
      { label: "Nail Remover Feet & Hands", price: "IDR 98.000" },
      { label: "Nail Gel Feet & Hands", price: "IDR 438.000" },
      { label: "Nail Gel Feet or Hands", price: "IDR 219.000" },
    ],
  },
  {
    id: "organic-warm-candle-oil-massage",
    name: "Organic Warm Candle Oil Massage",
    category: "massage",
    href: "/contact/",
    image: "/images/listmenu/organicwarmcandle.webp",
    desc: "A warming full-body massage using natural oils to soften muscles and calm the body.",
    options: [
      { label: "1 Hour", price: "IDR 269.000" },
      { label: "1.5 Hours", price: "IDR 399.000" },
      { label: "2 Hours", price: "IDR 499.000" },
    ],
  },
  {
    id: "shiatsu-massage",
    name: "Shiatsu Massage",
    category: "massage",
    href: "/seminyak/shiatsu-massage/",
    image: "/images/treatments/cards/shiatsumassage-warm.webp",
    desc: "An oil-free full-body massage using Japanese pressure-point techniques to ease tension.",
    options: [
      { label: "30 Minutes", price: "IDR 119.000" },
      { label: "1 Hour", price: "IDR 219.000" },
      { label: "1.5 Hours", price: "IDR 329.000" },
    ],
  },
  {
    id: "sports-massage",
    name: "Sports Massage",
    category: "massage",
    href: "/seminyak/sport-massage/",
    image: "/images/listmenu/sportmassage.webp",
    desc: "A targeted full-body massage to ease sore, stiff muscles after sport or a long day.",
    options: [
      { label: "1 Hour", price: "IDR 269.000" },
      { label: "1.5 Hours", price: "IDR 359.000" },
    ],
  },
  {
    id: "thai-massage",
    name: "Thai Massage",
    category: "massage",
    href: "/seminyak/thai-massage/",
    image: "/images/treatments/cards/thaimassage-warm.webp",
    desc: "An oil-free full-body massage combining assisted stretches and rhythmic pressure.",
    options: [
      { label: "30 Minutes", price: "IDR 133.000" },
      { label: "1 Hour", price: "IDR 259.000" },
      { label: "1.5 Hours", price: "IDR 379.000" },
    ],
  },
  {
    id: "traditional-massage",
    name: "Traditional Massage",
    category: "massage",
    href: "/seminyak/traditional-massage/",
    image: "/images/listmenu/traditionalmassage.webp",
    desc: "A firmer full-body massage using deeper pressure to release muscle tension.",
    options: [
      { label: "30 Minutes", price: "IDR 90.000" },
      { label: "1 Hour", price: "IDR 169.000" },
      { label: "1.5 Hours", price: "IDR 259.000" },
      { label: "2 Hours", price: "IDR 339.000" },
    ],
  },
  {
    id: "virgin-cold-press-coconut-oil-massage",
    name: "Virgin Cold-Press Coconut Oil Massage",
    category: "massage",
    href: "/seminyak/coconut-oil-massage/",
    image: "/images/treatments/cards/coconutoilmassage-warm.webp",
    desc: "A nourishing full-body massage using pure coconut oil to promote deep relaxation.",
    options: [
      { label: "1 Hour", price: "IDR 300.000" },
      { label: "1.5 Hours", price: "IDR 440.000" },
      { label: "2 Hours", price: "IDR 580.000" },
    ],
  },
  {
    id: "waxing",
    name: "Waxing",
    category: "beauty",
    href: "/seminyak/waxing-salon/",
    image: "/images/listmenu/waxing.webp",
    desc: "A professional hair removal treatment using olive oil hot wax for smooth skin.",
    options: [
      { label: "Arms", price: "IDR 159.000" },
      { label: "Under Arms", price: "IDR 99.000" },
      { label: "Back (starting from)", price: "IDR 139.000" },
      { label: "Full Back", price: "IDR 299.000" },
      { label: "Half Legs", price: "IDR 149.000" },
      { label: "Full Legs", price: "IDR 299.000" },
      { label: "Waxing Brazilian", price: "IDR 350.000" },
    ],
  },
];
