import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import TreatmentBody from "@/components/treatments/TreatmentBody";
import { homeServiceLines } from "@/data/homeServiceLines";
import { priceOf } from "@/data/pricelist";
import { treatments } from "@/data/treatments";
import { withDots } from "@/lib/price";
import { priceTiles, type PriceTiles } from "@/lib/priceTiles";
import { treatmentSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getTreatmentContent } from "@/lib/treatments/content";
import { appendChild, faqItems, insertBefore, withProps, type TreeNode } from "@/lib/treatments/tree";

/**
 * Treatment pages: /seminyak/balinese-massage/, /seminyak/facial/, …
 *
 * The body of each page is an element tree built from the live page and made
 * of the shared live sections: the built-in one in src/content/treatments/,
 * or the version edited in /admin/treatments/ (lib/treatments/content.ts).
 * Titles and descriptions: src/data/treatments/<slug>.ts, or the edited ones.
 */
type Props = { params: Promise<{ slug: string }> };

/**
 * How the "Visit us" heading ("Where Can I Book … in Seminyak?") and the
 * Service data name a treatment, where its menu name does not read well there.
 */
const NAMES: Record<string, { heading: string; service: string }> = {
  "body-scrub": { heading: "a Body Scrub", service: "Body Scrub" },
  "couple-spa": { heading: "a Couples Massage", service: "Couples Massage" },
  creambath: { heading: "a Cream Bath", service: "Cream Bath" },
  "day-spa": { heading: "a Day Spa Visit", service: "Day Spa" },
  "ear-candle": { heading: "an Ear Candle Treatment", service: "Ear Candle Treatment" },
  facial: { heading: "a Facial", service: "Facial" },
  "lymphatic-drainage-massage": { heading: "Lymphatic Drainage Massage", service: "Lymphatic Drainage Massage" },
  "manicure-pedicure": { heading: "a Manicure and Pedicure", service: "Manicure and Pedicure" },
  "nail-spa": { heading: "Gel Nails and Nail Art", service: "Gel Nails and Nail Art" },
  "sunburn-massage": { heading: "a Sunburn Treatment", service: "Sunburn Treatment (Aloe Vera Massage)" },
};

/**
 * Corner decorations for the sections the page data leaves bare: every
 * section of a treatment page has its leaves or flowers, on laptops too
 * (owner, 17 Oct). Placed in decorations.css; "Visit us" brings its own.
 */
const SHAPES: Record<string, { leftShapeSrc: string; rightShapeSrc: string }> = {
  QuickFacts: {
    leftShapeSrc: "/images/shape/feature-six-shape.png",
    rightShapeSrc: "/images/shape/service-shape-right.png",
  },
  FaqSection: { leftShapeSrc: "/images/shape/banner-five-shape1.png", rightShapeSrc: "/images/shape/leaf/10a.png" },
  ReserveCta: {
    leftShapeSrc: "/images/shape/banner-six-shape2.png",
    rightShapeSrc: "/images/shape/step-shape-left.png",
  },
  TreatmentLinks: {
    leftShapeSrc: "/images/shape/banner-three-shape.png",
    rightShapeSrc: "/images/shape/service-four-shape-right.png",
  },
};

const tile = (length: string, id: string, option: string) => ({ length, amount: withDots(priceOf(id, option)) });

/**
 * Banner prices for the pages whose quick facts do not write them as
 * "length IDR amount · …" (owner, 22 Oct: every treatment banner shows its
 * prices), from the price list so they change with it. These pages keep the
 * price line in their quick facts: it says more (the scrub's seven scents,
 * all seven waxing prices). The day spa waits: its quick facts say packages
 * from IDR 399.000, the homepage and price list IDR 299.000.
 */
const BANNER_PRICES: Record<string, PriceTiles["tiles"]> = {
  "body-scrub": [
    tile("Body scrub", "body-scrub", "Body Massage & Scrub · Start From"),
    tile("Extra body mask", "body-scrub", "Additional Body Mask"),
  ],
  creambath: [tile("Cream bath", "cream-bath", "Ginseng"), tile("L'Oreal cream bath", "cream-bath", "L'Oreal")],
  "ear-candle": [tile("30 minutes", "ear-candle", "30 Minutes")],
  "sunburn-massage": [tile("1 hour", "aloe-vera-massage", "1 Hour")],
  "waxing-salon": [
    tile("Under arms", "waxing", "Under Arms"),
    tile("Full legs", "waxing", "Full Legs"),
    tile("Brazilian", "waxing", "Waxing Brazilian"),
  ],
};

/*
 * Every treatment page shows the new look of the sections added in October
 * (owner, 19 Oct: they said too much in plain rows, then "looks flat, made
 * by AI"; tried on the Balinese page, then given to all): the session
 * prices in the banner (PageBanner `prices`), the other quick facts as a
 * short list that opens like an FAQ beside the opening sentence (QuickFacts
 * look="faq") and "Visit us" in columns without the photo (look="columns").
 */

/** The props of the first element of a type in the tree. */
function propsOf(tree: TreeNode, type: string): TreeNode["props"] | undefined {
  if (tree.type === type) return tree.props;
  for (const child of tree.children ?? []) {
    const found = typeof child === "string" ? undefined : propsOf(child, type);
    if (found) return found;
  }
  return undefined;
}

/**
 * The quick facts' price line for the banner: the first fact that lists two
 * to four prices ("Per person: 1 hour IDR 159.000 · …"; waxing's seven stay
 * in the list). Its caption is the line's own ("Per person") or else the
 * fact's label ("Balinese, for two", "Price by hair length"); a note in
 * brackets after a name stays in the list ("Tea Tree Facial (oily or
 * blemish-prone skin)" -> "Tea Tree Facial").
 */
function bannerPrices(tree: TreeNode): { label: string; prices: PriceTiles } | undefined {
  const items = propsOf(tree, "QuickFacts")?.items;
  if (!Array.isArray(items)) return undefined;
  for (const item of items) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const { label, value } = item as { label?: unknown; value?: unknown };
    if (typeof label !== "string" || typeof value !== "string") continue;
    const prices = priceTiles(value);
    if (!prices || prices.tiles.length > 4) continue;
    return {
      label,
      prices: {
        caption: prices.caption ?? label,
        tiles: prices.tiles.map((tile) => ({ ...tile, length: tile.length.replace(/\s*\([^)]*\)\s*$/, "") })),
      },
    };
  }
  return undefined;
}

/** The banner photo, for the Service data. */
function bannerImage(tree: TreeNode): string | undefined {
  if (tree.type === "PageBanner" && typeof tree.props?.image === "string") return tree.props.image;
  for (const child of tree.children ?? []) {
    const found = typeof child === "string" ? undefined : bannerImage(child);
    if (found) return found;
  }
  return undefined;
}

// Built once and kept until the page is saved in /admin/ (which rebuilds it),
// as the guide pages. A database error is thrown on purpose: Next then keeps
// serving the last good page instead of the built-in version.
export const revalidate = false;

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

// Any other /seminyak/<something>/ address shows the 404 page through
// notFound() below. Not `dynamicParams = false`: with it, `next start`
// answered 404 for a page right after the admin had refreshed it (Next 16.3:
// the refreshed page counts as "not prerendered" and has no fallback).

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getTreatmentContent(slug);
  if (!content) return {};
  return buildMetadata({
    title: content.seo.title,
    description: content.seo.description,
    path: `/seminyak/${slug}/`,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const content = await getTreatmentContent(slug);
  if (!content) notFound();
  const names = NAMES[slug] ?? { heading: content.name, service: content.name };
  // The quick facts end with the date the page last changed; "Visit us"
  // (AEO roadmap, 17 Oct) sits before the related treatments.
  // The banner shows the session prices when the quick facts list them;
  // the quick facts then leave that fact (and the opening's price sentence) out.
  const banner = bannerPrices(content.tree);
  const prices = banner?.prices ?? (BANNER_PRICES[slug] && { tiles: BANNER_PRICES[slug] });
  // The outcall hero's "Book on WhatsApp" row button (with the number) in
  // place of "Book Now", and the opening hours under it as a badge (owner,
  // 22 Oct: tried on the cellulite page, then given to all).
  const booking = withProps(content.tree, "PageBanner", { whatsappRow: true, chips: ["Open daily 9am – 11pm"] });
  const decorated = Object.entries(SHAPES).reduce(
    (t, [type, props]) => withProps(t, type, props),
    withProps(
      prices
        ? withProps(booking, "PageBanner", {
            prices,
            // "/ pax" after each price, "/ 2 pax" on the couples page (owner, 21 Oct).
            priceUnit: slug === "couple-spa" ? "/ 2 pax" : "/ pax",
          })
        : booking,
      "QuickFacts",
      { updated: content.updatedAt, look: "faq", ...(banner ? { bannerPriceLabel: banner.label } : {}) },
    ),
  );
  const visited = insertBefore(decorated, ["ServiceSlider", "TreatmentLinks"], {
    type: "VisitUs",
    props: { treatment: names.heading, look: "columns" },
  });
  // One sentence that links to the outcall page, at the end of the quick facts block, inside its
  // section, so it adds no gap of its own between two sections (20 Oct dev brief, Task 6; the
  // sentences are in src/data/homeServiceLines.ts).
  const homeServiceLine = homeServiceLines[slug];
  const linked = homeServiceLine
    ? appendChild(visited, "QuickFacts", { type: "HomeServiceLine", props: { text: homeServiceLine, inline: true } })
    : visited;
  // "treatment-page" scopes the laptop decoration rules (decorations.css).
  const className = typeof linked.props?.className === "string" ? linked.props.className : "";
  const tree = { ...linked, props: { ...linked.props, className: `${className} treatment-page`.trim() } };
  return (
    <>
      <JsonLd
        data={treatmentSchema({
          slug,
          name: names.service,
          description: content.seo.description,
          image: bannerImage(content.tree),
        })}
      />
      <FaqJsonLd items={faqItems(content.tree)} />
      <TreatmentBody tree={tree} />
    </>
  );
}
