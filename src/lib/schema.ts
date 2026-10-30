/**
 * Structured data (schema.org JSON-LD) shared by the pages (AEO roadmap,
 * 17 Oct 2026). Search engines and AI answers read the business facts here
 * the same way the visitor reads them on the page.
 *
 *   spaSchema()          the spa itself, on every page (src/app/(site)/layout.tsx)
 *   websiteSchema()      the site's name for search results, homepage
 *   priceListSchema()    every treatment and package with its prices, /seminyak/
 *   treatmentSchema()    Service + Offers in IDR + breadcrumb, treatment pages
 *   homeServiceSchema()  Service with the areas served, outcall, villa and Kuta pages
 *   blogIndexSchema()    Blog with its posts + breadcrumb, /guide/
 *   articleSchema()      BlogPosting + breadcrumb, guide articles (FAQPage too, from the article's own FAQ section)
 *   pageSchema()         where a plain page sits in the site (About, Contact, Reservation)
 *
 * Other blocks point at the spa by its @id instead of repeating it.
 */
import { business } from "@/data/business";
import { priceList } from "@/data/pricelist";
import { home } from "@/data/pages/home";
import { pricelistPage } from "@/data/pages/pricelist";
import { newSpecial } from "@/data/special";
import { absoluteUrl } from "@/lib/seo";
import { whatsappChatUrl } from "@/lib/whatsapp";

export const SPA_ID = `${business.url}/#spa`;

const provider = { "@id": SPA_ID };

/** Home service areas, as the outcall page lists them. */
export const homeServiceAreas = {
  near: ["Seminyak", "Petitenget", "Kerobokan", "Canggu", "North Kuta", "Kuta"],
  further: ["Jimbaran", "Uluwatu", "Nusa Dua", "Sanur", "Denpasar", "Ubud"],
};

/** The spa: DaySpa with address, phone, map position, hours, prices and profiles. */
export function spaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": SPA_ID,
    name: business.name,
    url: business.url,
    image: absoluteUrl("/images/home/homepage-1.webp"),
    logo: absoluteUrl("/images/logo/sbm.webp"),
    description: home.seo.description,
    foundingDate: String(business.foundedYear),
    telephone: business.phoneDisplay,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.street}, Petitenget`,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    // Where Google Maps places the spa (the /contact/ map).
    geo: { "@type": "GeoCoordinates", latitude: -8.6780657, longitude: 115.1607164 },
    hasMap: business.listings.google,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    },
    // Lowest and highest prices on the spa menu (the highest is for two guests).
    priceRange: "IDR 69.000 – IDR 999.000",
    currenciesAccepted: "IDR",
    paymentAccepted: business.acceptedPayments.join(", "),
    areaServed: [...homeServiceAreas.near, ...homeServiceAreas.further].map((name) => ({
      "@type": "Place",
      name: `${name}, Bali`,
    })),
    // The spa's profiles elsewhere. Facebook left out: the page is unused and
    // the owner wants no Facebook links (23 Oct).
    sameAs: [business.listings.google, business.listings.tripadvisor, business.social.instagram],
    // No aggregateRating (removed 30 Oct 2026, after the Google rating dropped):
    // Google shows no stars for a business's own rating, and a copied figure
    // goes stale. The Google profile in sameAs carries the reviews.
    // Languages at reception (owner, 24 Oct: Japanese too).
    knowsLanguage: ["English", "Indonesian", "Japanese"],
    // What guests ask about (owner, 24 Oct: the spa has Wi-Fi and showers).
    amenityFeature: ["Wi-Fi", "Showers"].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    // Booking is on WhatsApp (every page's button), so assistants know how to book.
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book on WhatsApp",
      target: {
        "@type": "EntryPoint",
        urlTemplate: whatsappChatUrl,
        actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
      },
    },
  };
}

/** The site itself, so search results can show "Spa Bali Moon" as its name (homepage only). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${business.url}/#website`,
    name: business.name,
    alternateName: `${business.name} Seminyak`,
    url: `${business.url}/`,
    inLanguage: "en",
    publisher: provider,
  };
}

type Crumb = { name: string; path: string };

function breadcrumb(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

const amount = (price: number) => String(price);

/**
 * "1 Hour · Balinese Massage · 2 Pax" -> "1 hour, for two"; "2 Hours · with
 * Balinese Massage" -> "2 hours with Balinese Massage" (the cupping combo);
 * "Back · Start From" -> "Back".
 */
const offerLabel = (label: string) => {
  const forTwo = /2 pax/i.test(label);
  const [first, ...rest] = label.split(/\s+[·–-]\s+/);
  const time = first.replace(/\bHours?\b|\bMinutes?\b/g, (w) => w.toLowerCase());
  const withPart = rest.find((r) => /^with\b/i.test(r));
  if (withPart) return `${time} ${withPart}`;
  return forTwo ? `${time}, for two` : time;
};

/** A treatment's name as people say it: the homepage's ("Balinese Massage"), not the price list's "Balinese Massage - Relaxing". */
const cleanName = (item: (typeof priceList)[number]) => item.homeName ?? item.pricelistName ?? item.id;

/** A price in IDR as an Offer; a "start from" price as the lowest of a range. */
function offer(name: string, price: number, url: string, from = false) {
  return {
    "@type": "Offer",
    name,
    ...(from
      ? { priceSpecification: { "@type": "PriceSpecification", minPrice: amount(price), priceCurrency: "IDR" } }
      : { price: amount(price), priceCurrency: "IDR" }),
    url,
    seller: provider,
  };
}

type Pack = (typeof pricelistPage.packageGroups)[number];

/** A spa package in words: "Couple Massage package A: 1 Hr Balinese Massage, 30 Mins Ear Candle". */
const packageName = (group: Pack, i: number) =>
  `${group.cardTitle} package ${String.fromCharCode(65 + i)}: ${group.packages[i].items.map((x) => `${x.duration} ${x.service}`).join(", ")}`;

const priceOfPack = (price: string) => Number(price.replace(/\D/g, ""));

/**
 * Prices of the pages whose treatments have no row of their own in
 * src/data/pricelist.ts, as their quick facts state them.
 */
const PAGE_OFFERS: Record<string, { name: string; price: number }[]> = {
  "hair-braiding": [
    { name: "Hair braiding, short hair", price: 279_000 },
    { name: "Hair braiding, medium hair", price: 379_000 },
    { name: "Hair braiding, long hair", price: 469_000 },
  ],
  "nail-spa": [
    { name: "Manicure with colour", price: 159_000 },
    { name: "Pedicure with colour", price: 169_000 },
    { name: "Nail gel, hands or feet", price: 219_000 },
  ],
};

function offersFor(slug: string, url: string) {
  const fromPriceList = priceList
    .filter((item) => item.pageSlug === slug)
    .flatMap((item) =>
      item.options.map((o) =>
        offer(
          `${cleanName(item)}, ${o.label === "Price" ? "per person" : offerLabel(o.label)}`,
          o.price,
          url,
          /start from/i.test(o.label)
        )
      )
    );
  const offers = fromPriceList.length ? fromPriceList : (PAGE_OFFERS[slug] ?? []).map((o) => offer(o.name, o.price, url));
  // The couple page also sells the couple packages (priced for two).
  const couple = slug === "couple-spa" ? pricelistPage.packageGroups.find((g) => g.twoPax) : undefined;
  const packages = couple ? couple.packages.map((p, i) => offer(`${packageName(couple, i)}, for two`, priceOfPack(p.price), url)) : [];
  return [...offers, ...packages];
}

const CATEGORY_NAMES: Record<string, string> = { massage: "Massage", beauty: "Beauty", couple: "For couples" };

/**
 * The price list (/seminyak/): the spa's whole menu as an OfferCatalog on the
 * spa itself (same @id, so it joins the spa node every page has): each
 * treatment with its lowest and highest price, grouped as on the page, then
 * the spa packages. Prices come from src/data/pricelist.ts and the package
 * groups, as the page's do.
 */
export function priceListSchema() {
  const url = absoluteUrl("/seminyak/");
  const groups = Object.entries(CATEGORY_NAMES).map(([category, name]) => ({
    "@type": "OfferCatalog",
    name,
    itemListElement: priceList
      .filter((item) => item.category === category && !item.pricelistParentId)
      .map((item) => {
        const prices = item.options.map((o) => o.price);
        return {
          "@type": "AggregateOffer",
          itemOffered: {
            "@type": "Service",
            name: cleanName(item),
            ...(item.pageSlug ? { url: absoluteUrl(`/seminyak/${item.pageSlug}/`) } : {}),
          },
          lowPrice: amount(Math.min(...prices)),
          highPrice: amount(Math.max(...prices)),
          priceCurrency: "IDR",
          offerCount: prices.length,
        };
      }),
  }));
  // Identical packages listed under several treatments are one package.
  const seen = new Set<string>();
  const packages = pricelistPage.packageGroups.flatMap((g) =>
    g.packages.flatMap((p, i) => {
      const key = `${p.price}|${p.items.map((x) => `${x.duration} ${x.service}`.toLowerCase()).sort().join("+")}`;
      if (seen.has(key)) return [];
      seen.add(key);
      return [offer(`${packageName(g, i)}${g.twoPax ? ", for two" : ", per person"}`, priceOfPack(p.price), url)];
    })
  );
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DaySpa",
        "@id": SPA_ID,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": `${url}#catalog`,
          name: "Spa Bali Moon price list",
          url,
          itemListElement: [
            ...groups,
            {
              "@type": "OfferCatalog",
              name: "Spa packages",
              itemListElement: [
                offer(`${newSpecial.name}: ${newSpecial.items.map(([d, t]) => `${d} ${t}`).join(", ")}, per person`, priceOfPack(newSpecial.price), url),
                ...packages,
              ],
            },
          ],
        },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Price List", path: "/seminyak/" },
      ]),
    ],
  };
}

/** Where a plain page (About, Contact) sits in the site. */
export function pageSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    ...breadcrumb([
      { name: "Home", path: "/" },
      { name, path },
    ]),
  };
}

/** A treatment page: the Service with its prices, and where it sits in the site. */
export function treatmentSchema({
  slug,
  name,
  description,
  image,
}: {
  slug: string;
  name: string;
  description: string;
  image?: string;
}) {
  const path = `/seminyak/${slug}/`;
  const url = absoluteUrl(path);
  const offers = offersFor(slug, url);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType: name,
        description,
        url,
        ...(image ? { image: absoluteUrl(image) } : {}),
        provider,
        areaServed: { "@type": "Place", name: "Seminyak, Bali" },
        ...(offers.length ? { offers } : {}),
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Price List", path: "/seminyak/" },
        { name, path },
      ]),
    ],
  };
}

/** The outcall and villa pages: home service, with the areas it reaches. */
export function homeServiceSchema({
  path,
  name,
  description,
  areas,
  serviceType = "Home service massage",
}: {
  path: string;
  name: string;
  description: string;
  areas: string[];
  /** What the Service is called in search (the outcall page: "Outcall massage"). */
  serviceType?: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType,
        description,
        url,
        provider,
        areaServed: areas.map((area) => ({ "@type": "Place", name: `${area}, Bali` })),
        // The fee depends on the area (business.homeService.zones): a range, not one price.
        offers: {
          "@type": "Offer",
          name: "Home service fee, per therapist",
          description:
            "IDR 75.000 per therapist in Seminyak, Petitenget and Kerobokan; IDR 150.000 in Canggu, North Kuta and Kuta; confirmed on WhatsApp further out. Added to the treatment price.",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: amount(business.homeService.feePerTherapist),
            maxPrice: amount(business.homeService.feeOuterPerTherapist),
            priceCurrency: "IDR",
          },
          url,
          seller: provider,
        },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name, path },
      ]),
    ],
  };
}

/**
 * The spa as a guide article's author and publisher: its @id plus the name,
 * website and logo, so the article block reads complete on its own (Google's
 * article guidelines ask for the author's name; a bare @id only points at the
 * spa block elsewhere on the page).
 */
const spaByline = {
  "@type": "DaySpa",
  "@id": SPA_ID,
  name: business.name,
  url: business.url,
  logo: absoluteUrl("/images/logo/sbm.webp"),
};

/** Who wrote a guide article: the spa for its own articles ("Admin" is the blog's default byline), else a person. */
const authorOf = (author?: string | null) => {
  const byline = author?.trim();
  return !byline || byline === business.name || /^admin$/i.test(byline)
    ? spaByline
    : { "@type": "Person", name: byline };
};

/** The guide index (/guide/): a Blog with its articles, and where it sits in the site. */
export function blogIndexSchema({
  path,
  name,
  description,
  posts,
}: {
  path: string;
  name: string;
  description: string;
  posts: { slug: string; title: string; excerpt?: string | null; cover_image?: string | null; author?: string | null; published_at?: string | null }[];
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        name,
        description,
        url,
        inLanguage: "en",
        publisher: spaByline,
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${absoluteUrl(`/guide/${post.slug}/`)}#article`,
          headline: post.title,
          url: absoluteUrl(`/guide/${post.slug}/`),
          ...(post.excerpt ? { description: post.excerpt } : {}),
          ...(post.cover_image ? { image: absoluteUrl(post.cover_image) } : {}),
          ...(post.published_at ? { datePublished: post.published_at } : {}),
          author: authorOf(post.author),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        name: `${name}: all articles`,
        itemListElement: posts.map((post, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/guide/${post.slug}/`),
          name: post.title,
        })),
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Guide", path },
      ]),
    ],
  };
}

/** A guide article: a BlogPosting in the guide's Blog (the same node the /guide/ index lists). */
export function articleSchema({
  slug,
  title,
  description,
  image,
  author,
  publishedAt,
  updatedAt,
}: {
  slug: string;
  title: string;
  description?: string | null;
  image?: string | null;
  author?: string | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
}) {
  const path = `/guide/${slug}/`;
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: title,
        ...(description ? { description } : {}),
        url,
        mainEntityOfPage: url,
        inLanguage: "en",
        isPartOf: { "@id": `${absoluteUrl("/guide/")}#blog` },
        ...(image ? { image: absoluteUrl(image) } : {}),
        ...(publishedAt ? { datePublished: publishedAt } : {}),
        ...(updatedAt || publishedAt ? { dateModified: updatedAt || publishedAt } : {}),
        // The articles are written by the spa; a person's name, when one is set in the admin, is shown as such.
        author: authorOf(author),
        publisher: spaByline,
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Guide", path: "/guide/" },
        { name: title, path },
      ]),
    ],
  };
}
