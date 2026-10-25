/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import PackageCard from "@/components/pricelist/PackageCard";
import { newSpecial } from "@/data/special";
import { packageSaving } from "@/lib/packageSaving";
import { whatsappChatUrl } from "@/lib/whatsapp";

/**
 * The new special as a wide package card (homepage, price list, and the
 * lymphatic and facial pages; outcall.css section 32). `section`: a band of
 * its own, for the treatment pages.
 */
export default function FeaturedPackage({ section = false }: { section?: boolean }) {
  const items = newSpecial.items.map(([duration, service]) => ({ duration, service }));
  const card = (
    <div className="pkg-featured">
      <PackageCard
        code={newSpecial.kicker}
        name={newSpecial.name}
        href={newSpecial.href}
        text={newSpecial.text}
        icon={<img loading="lazy" decoding="async" src="/images/spa/Lymphatic.svg" alt="" />}
        media={newSpecial.images.map((image) => (
          <img key={image.src} loading="lazy" decoding="async" src={image.src} alt={image.alt} />
        ))}
        price={newSpecial.price}
        unit="per person"
        items={items}
        cta={{ href: whatsappChatUrl, external: true }}
        saving={packageSaving(items, newSpecial.price)}
      />
    </div>
  );
  return section ? (
    <section className="pkg-featured-section">
      <div className="container">{card}</div>
    </section>
  ) : (
    card
  );
}
