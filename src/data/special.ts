/**
 * The new special (owner, 25 Oct): the lymphatic massage, the most booked,
 * with the Gold Facial. IDR 525.000 against 569.000 one by one (the package
 * rule: 5% off at 397.000 up to 12% at 931.000, rounded down to 5.000).
 * Shown as a wide package card at the top of the homepage packages and of
 * the price list's packages (FeaturedPackage), and in the price list's
 * structured data.
 */
export const newSpecial = {
  kicker: "New special",
  name: "Lymphatic & Gold Facial",
  href: "/seminyak/lymphatic-drainage-massage/",
  text: "A gentle lymphatic drainage massage, then the Bali Moon Gold Facial with gold and argan oil: two hours to feel lighter and leave glowing.",
  price: "525.000",
  items: [
    ["1 Hr", "Lymphatic Massage"],
    ["1 Hr", "Bali Moon Gold Facial"],
  ] as [string, string][],
  images: [
    { src: "/images/treatments/cards/lymphaticmassage-warm.webp", alt: "Lymphatic drainage massage at Spa Bali Moon" },
    { src: "/images/listmenu/balimoongoldfacial.webp", alt: "Bali Moon Gold Facial" },
  ],
};
