import Link from "next/link";
import { ArrowBox, PACKAGE_ICONS } from "@/components/home/icons";
import ScrollRow from "@/components/home/ScrollRow";
import { LotusIcon } from "@/components/ui/Lotus";
import FeaturedPackage from "@/components/pricelist/FeaturedPackage";
import PackageCard, { packageNotes } from "@/components/pricelist/PackageCard";
import { home } from "@/data/pages/home";
import { pricelistPage } from "@/data/pages/pricelist";
import { packageSaving } from "@/lib/packageSaving";
import { whatsappChatUrl } from "@/lib/whatsapp";

/**
 * Homepage v2 packages — the live pricing-section-five cards with the
 * separate "Looking for More Than One Treatment?" intro folded into a
 * two-column heading: title left, copy and button right. The intro's note
 * sits under the cards. Two cards a row until 1200px (live: 3 + 1), and below
 * 768px they scroll sideways.
 */
export default function Packages() {
  const { packages, packageIntro } = home;
  const notes = packageNotes(pricelistPage.packageGroups);
  return (
    <div className="jsx-home homepage-pricing-services-join homepage-pricing-section">
      <section className="pricing-section-five section__decoration-top section__decoration-bottom bg-sub pt-130 pb-130 v2-packages">
        <div className="container">
          <div className="v2-split-head">
            <div className="section-header">
              <div className="sub-title look-h4">
                <LotusIcon className="icon" />
                {packages.subTitle}
              </div>
              <h2 className="title">{packages.title}</h2>
            </div>
            <div className="v2-split-head__aside">
              <p>{packages.text}</p>
              <Link prefetch={false} className="btn-two" href={packages.cta.href}>
                {packages.cta.label}
                <ArrowBox />
              </Link>
            </div>
          </div>
          {/* The new special (owner, 25 Oct). */}
          <FeaturedPackage />
          <ScrollRow className="row g-4 v2-packages__row" below="md" label="Spa packages">
            {packages.cards.map((card, i) => (
              <div key={card.name} className="col-sm-6 col-xl-3 pkg-col">
                <PackageCard
                  code={card.name}
                  name={card.treatment}
                  icon={PACKAGE_ICONS[i]}
                  price={card.price}
                  unit="per person"
                  items={card.items.map(([duration, service]) => ({ duration, service }))}
                  cta={{ href: whatsappChatUrl, external: true }}
                  // The price list's "Same as …" line, by the card's code ("Balinese Massage|A").
                  note={notes.get(`${card.treatment}|${card.name.replace("Package ", "")}`)}
                  saving={packageSaving(
                    card.items.map(([duration, service]) => ({ duration, service })),
                    card.price
                  )}
                />
              </div>
            ))}
          </ScrollRow>
          <p className="v2-packages__note">
            <span className="v2-packages__mark">
              <LotusIcon className="brand-lotus-icon-svg" width={22} height={23} clip="clip0_v2_note" />
            </span>
            {packageIntro.note}
          </p>
        </div>
      </section>
    </div>
  );
}
