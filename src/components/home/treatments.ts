import { treatmentSlides } from "@/data/pages/home";
import { displayPrice, startingOption } from "./price";

export type Treatment = {
  name: string;
  href: string;
  image: string;
  icon: string;
  /** One line about the treatment. */
  desc: string;
  /** "From IDR 159.000" (just "IDR 250.000" when there is one price). */
  price: string | null;
  group: "massage" | "beauty";
};

/**
 * The two treatments without a spa-menu entry, from their own pages
 * (/seminyak/hair-braiding/, /seminyak/nail-spa/): a photo — the live slider
 * reuses the Cream Bath and Manicure Pedicure ones — and the line from their
 * "Personalised Designs" highlight.
 */
const OWN_PAGE: Record<string, { image: string; desc: string }> = {
  "Hair Braiding": {
    image: "/images/beauty/hair-braiding/hairbraiding-3.webp",
    desc: "Choose from classic, modern, or customised braid styles to match your look.",
  },
  "Nail Art": {
    image: "/images/beauty/nail-spa/nailart-3.webp",
    desc: "Colours, patterns, and finishes selected to suit your own style.",
  },
};

/**
 * All 25 treatment pages (the last two added 24 Oct), in the homepage slider's order, with each
 * one's photo, icon, menu description and starting price (add-ons such as
 * "Additional Body Mask" left out, as in the v2 spa menu).
 */
export const allTreatments: Treatment[] = treatmentSlides.map((slide) => {
  const item = slide.menuItem;
  let price = slide.price?.split("|")[0].trim() ?? null;
  if (item?.options.length) {
    const from = displayPrice(startingOption(item.options).price);
    price = item.options.length > 1 ? `From ${from}` : from;
  }
  return {
    name: slide.name,
    href: slide.href || "/seminyak/",
    image: OWN_PAGE[slide.name]?.image ?? slide.image,
    icon: slide.icon,
    desc: item?.desc ?? OWN_PAGE[slide.name]?.desc ?? "",
    price,
    // Both treatments without a menu entry are beauty treatments.
    group: !item || item.category === "beauty" ? "beauty" : "massage",
  };
});
