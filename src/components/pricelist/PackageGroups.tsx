/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import PackageCard, { packageNotes } from "@/components/pricelist/PackageCard";
import type { PackageGroup } from "@/data/pages/pricelist";
import { packageSaving } from "@/lib/packageSaving";
import { priceValue, withDots } from "@/lib/price";

const COUNT = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

/**
 * A group's prices in words, from its packages: "From IDR 399.000 per person"
 * over the heading, and "Four packages from IDR 399.000 to IDR 549.000 per
 * person, each …" opening its text, the answer first (owner, 22 Oct).
 */
function priceWords(group: PackageGroup) {
  const prices = group.packages.map((pack) => priceValue(pack.price));
  const low = `IDR ${withDots(Math.min(...prices))}`;
  const high = `IDR ${withDots(Math.max(...prices))}`;
  const unit = group.twoPax ? "for two" : "per person";
  const count = COUNT[prices.length] ?? String(prices.length);
  return {
    kicker: `From ${low} ${unit}`,
    answer: `${count} packages from ${low} to ${high} ${unit}, each ${group.includes}.`,
  };
}

/** The treatment page each group's cards link to (AEO roadmap R25, 17 Oct). */
const PAGE_OF_CARD: Record<string, string> = {
  "Balinese Massage": "/seminyak/balinese-massage/",
  "Thai Massage": "/seminyak/thai-massage/",
  "Cream Bath": "/seminyak/creambath/",
  "Body Scrub": "/seminyak/body-scrub/",
  "Hot Stone": "/seminyak/hot-stone-massage/",
  "Bali Moon Facial": "/seminyak/facial/",
  "Mani Pedi": "/seminyak/manicure-pedicure/",
  "Couple Massage": "/seminyak/couple-spa/",
};

/**
 * The eight package groups on the price list, sorted by title as live. Each
 * is a "pricing-section-five" band; the first gets the torn top edge and the
 * last the torn bottom edge, so together they read as one paper band.
 */
export default function PackageGroups({ groups, icons }: { groups: PackageGroup[]; icons: Record<string, string> }) {
  const sorted = [...groups].sort((a, b) => a.title.localeCompare(b.title));
  const notes = packageNotes(groups);
  return (
    <>
      {sorted.map((group, s) => {
        const first = s === 0;
        const last = s === sorted.length - 1;
        const edges = `${first ? "section__decoration-top" : ""} ${last ? "section__decoration-bottom" : ""}`.trim();
        const icon = icons[group.cardTitle];
        const page = PAGE_OF_CARD[group.cardTitle];
        const words = priceWords(group);
        return (
          <section
            key={s}
            className={`pricing-section-five package-pricing-section bg-sub ${edges}${first ? " pt-100" : " pt-40"}${last ? " pb-100" : " pb-40"}`}
          >
            <div className="container">
              <div className="section-header mb-60 center">
                <div className="sub-title look-h4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  {words.kicker}
                </div>
                <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  {group.title}
                </h2>
                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  {words.answer} {group.description}
                </p>
              </div>
              {/* Four cards a row on laptops; on phones the group's cards slide sideways (outcall.css section 27). */}
              <div className="row g-4 pkg-row">
                {group.packages.map((pack, i) => (
                  <div key={i} className="col-sm-6 col-xl-3 col-lg-4 pkg-col">
                    <PackageCard
                      code={`Package ${String.fromCharCode(65 + i)}`}
                      name={group.cardTitle}
                      href={page}
                      icon={<img loading="lazy" decoding="async" src={icon} alt="" />}
                      price={pack.price}
                      // Couple prices are for two; the others per person (copy rewrite, 15 Oct).
                      unit={group.twoPax ? "for two" : "per person"}
                      items={pack.items}
                      cta={{ href: "/contact/" }}
                      note={notes.get(`${group.cardTitle}|${String.fromCharCode(65 + i)}`)}
                      saving={packageSaving(pack.items, pack.price, group.twoPax)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
