"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CatalogCategory, CatalogItem } from "@/data/pages/home-catalog";
import MenuIntro, { halves, menuItems } from "@/components/home/MenuIntro";
import { shortPrice, startingOption } from "@/components/home/price";

/**
 * Homepage v2 "Browse Our Spa Treatments" — the live catalog (tabs, fee, two
 * columns A–Z, one price panel open at a time) with each treatment's price on
 * view in its row: "from 159.000" (or its one price), set like the package-card
 * prices. Price and arrow are one button that opens the full list. The live
 * spa-tray picture in the bottom corner is left out: it would sit behind the
 * last prices, and the reviews right below show the same picture.
 */
export default function TreatmentMenu() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [category, setCategory] = useState<CatalogCategory>("massage");
  const columns = useMemo(() => halves(menuItems(category)), [category]);

  return (
    <section className="jsx-catalog package-section treatment-catalog section__decoration-top section__decoration-bottom bg-sub pt-170 pb-170 v2-menu v2-menu--toggle">
      <div className="jsx-catalog shape1">
        <img loading="lazy" decoding="async" src="/images/shape/banner-five-shape1.webp" alt="" className="jsx-catalog sway_Y__animationY" />
      </div>
      <div className="jsx-catalog container">
        <MenuIntro
          category={category}
          onCategory={(id) => {
            setCategory(id);
            setOpenKey(null);
          }}
        />
        <div className="jsx-catalog row g-5 align-items-start">
          {columns.map((column, i) => (
            <div key={`column-${i}`} className="jsx-catalog col-lg-6 treatment-catalog__column">
              {column.map((item) => (
                <div key={item.id} className="jsx-catalog package-block">
                  <MenuItem
                    item={item}
                    isOpen={openKey === item.id}
                    onToggle={() => setOpenKey((k) => (k === item.id ? null : item.id))}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItem({ item, isOpen, onToggle }: { item: CatalogItem; isOpen: boolean; onToggle: () => void }) {
  const panelId = `v2-pricing-${item.id}`;
  const lowest = startingOption(item.options);
  const several = item.options.length > 1;
  // Couple prices cover two guests: "2 pax" under the price, as the package cards say it.
  const perCouple = item.options.every((o) => /2 pax/i.test(o.label));
  // Cards that only lead to the contact page say "Book …" instead of "View … details".
  const label = item.href === "/contact/" ? `Book ${item.name}` : `View ${item.name} details`;
  // The last word is kept together with the arrow so it never wraps alone.
  const cut = label.lastIndexOf(" ");
  const head = cut === -1 ? "" : label.slice(0, cut + 1);
  const tail = cut === -1 ? label : label.slice(cut + 1);
  const photo = <img loading="lazy" decoding="async" src={item.image} alt={item.name} />;

  return (
    <article className={`treatment-catalog__item${isOpen ? " is-open" : ""}`}>
      {item.href ? (
        <Link prefetch={false} href={item.href} className="treatment-catalog__image" aria-label={`View ${item.name}`}>
          {photo}
        </Link>
      ) : (
        <div className="treatment-catalog__image">{photo}</div>
      )}
      <div className="treatment-catalog__content">
        <div className="treatment-catalog__heading">
          <h3 className="title">
            {item.href ? (
              <Link prefetch={false} href={item.href}>
                {item.name}
              </Link>
            ) : (
              item.name
            )}
          </h3>
          <button
            type="button"
            className="v2-price"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-label={`${isOpen ? "Hide" : "Show"} all prices for ${item.name}`}
          >
            <span className="v2-price__tag">
              <span className="v2-price__line">
                {several && <span className="v2-price__note">from</span>}
                <span className="v2-price__amount">{shortPrice(lowest.price)}</span>
              </span>
              {perCouple && <span className="v2-price__pax">2 pax</span>}
            </span>
            <span className="treatment-catalog__toggle">
              <i className="fa-solid fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <p className="treatment-catalog__description">{item.desc}</p>
        <div id={panelId} className="treatment-catalog__dropdown" aria-hidden={!isOpen}>
          <div className="treatment-catalog__dropdown-inner">
            {item.benefits?.length ? (
              <div className="treatment-catalog__benefits">
                <p className="treatment-catalog__benefits-title">Benefits:</p>
                <ul>
                  {item.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="treatment-catalog__prices">
              {item.options.map((o) => (
                <div key={`${o.label}-${o.price}`} className="treatment-catalog__option">
                  <div className="treatment-catalog__option-main">
                    <strong>{o.label}</strong>
                    <span>{shortPrice(o.price)}</span>
                  </div>
                  {o.details?.length ? (
                    <ul>
                      {o.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
            {item.href ? (
              <Link prefetch={false} href={item.href} className="treatment-catalog__details-link" tabIndex={isOpen ? undefined : -1}>
                {head}
                <span className="treatment-catalog__details-tail">
                  {tail}
                  <i className="fa-regular fa-arrow-right" aria-hidden="true" />
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
