"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { useMemo, useState } from "react";
import MenuIntro, { halves, menuItems } from "@/components/home/MenuIntro";
import { durationLabel, durationOf, shortPrice } from "@/components/home/price";
import type { CatalogCategory, CatalogItem } from "@/data/pages/home-catalog";

/** Tabs whose prices are per duration. */
const TIMED: CatalogCategory[] = ["massage", "couple"];

function Name({ item }: { item: CatalogItem }) {
  return item.href ? (
    <Link prefetch={false} href={item.href}>
      {item.name}
    </Link>
  ) : (
    <>{item.name}</>
  );
}

/**
 * Price-list option B, "price table": every price on view at once. Massages
 * and couple massages as a table — one row per treatment, one column per
 * duration — in two halves side by side on desktop. Beauty treatments as
 * small cards listing each variant and its price, the couple packages as a
 * table of what each includes.
 */
export default function MenuTable() {
  const [category, setCategory] = useState<CatalogCategory>("massage");
  const items = useMemo(() => menuItems(category), [category]);
  const durations = useMemo(
    () =>
      [...new Set(items.flatMap((i) => i.options.map((o) => durationOf(o.label))))]
        .filter((m): m is number => m !== null)
        .sort((a, b) => a - b),
    [items]
  );
  const timed = TIMED.includes(category) && durations.length > 0;

  return (
    <section className="jsx-catalog package-section treatment-catalog section__decoration-top section__decoration-bottom bg-sub pt-170 pb-170 v2-menu v2-menu--table">
      <div className="jsx-catalog shape1">
        <img loading="lazy" decoding="async" src="/images/shape/banner-five-shape1.webp" alt="" className="jsx-catalog sway_Y__animationY" />
      </div>
      <div className="jsx-catalog container">
        <MenuIntro category={category} onCategory={setCategory} />
        {timed && (
          <>
            {category === "couple" && <p className="v2-ptable__note">All prices are for 2 pax.</p>}
            <div className="v2-ptable__pair">
              {halves(items).map((half, i) => (
                <div key={i} className="v2-ptable__wrap" data-lenis-prevent-horizontal="">
                  <table className="v2-ptable">
                    <thead>
                      <tr>
                        <th scope="col">Treatment</th>
                        {durations.map((m) => (
                          <th key={m} scope="col">
                            {durationLabel(m)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {half.map((item) => {
                        const extras = item.options.filter((o) => durationOf(o.label) === null);
                        return (
                          <tr key={item.id}>
                            <th scope="row">
                              <span className="v2-ptable__name">
                                <img loading="lazy" decoding="async" src={item.image} alt="" />
                                <span>
                                  <Name item={item} />
                                  {extras.map((o) => (
                                    <small key={o.label}>
                                      {o.label.replace(/\s*·\s*2 pax$/i, "")} · {shortPrice(o.price)}
                                    </small>
                                  ))}
                                </span>
                              </span>
                            </th>
                            {durations.map((m) => {
                              const option = item.options.find((o) => durationOf(o.label) === m);
                              return (
                                <td key={m} className={option ? undefined : "is-empty"}>
                                  {option ? (
                                    shortPrice(option.price)
                                  ) : (
                                    <>
                                      <span aria-hidden="true">–</span>
                                      <span className="v2-sr">Not available</span>
                                    </>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </>
        )}
        {category === "beauty" && (
          <div className="v2-pcards">
            {items.map((item) => (
              <article key={item.id} className="v2-pcard">
                <div className="v2-pcard__head">
                  <img loading="lazy" decoding="async" src={item.image} alt="" />
                  <h3 className="title">
                    <Name item={item} />
                  </h3>
                </div>
                <div className="treatment-catalog__prices">
                  {item.options.map((o) => (
                    <div key={`${o.label}-${o.price}`} className="treatment-catalog__option">
                      <div className="treatment-catalog__option-main">
                        <strong>{o.label}</strong>
                        <span>{shortPrice(o.price)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
        {category === "couple-package" && (
          <div className="v2-ptable__wrap v2-ptable__wrap--single" data-lenis-prevent-horizontal="">
            <table className="v2-ptable v2-ptable--packages">
              <thead>
                <tr>
                  <th scope="col">Package</th>
                  <th scope="col">Includes</th>
                  <th scope="col">2 pax</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">
                      <span className="v2-ptable__name">
                        <img loading="lazy" decoding="async" src={item.image} alt="" />
                        <span>
                          <Name item={item} />
                        </span>
                      </span>
                    </th>
                    <td className="v2-ptable__includes">
                      {item.options.map((o) => [o.label.replace(/\s*·\s*2 pax$/i, ""), ...(o.details ?? [])].join(" + "))}
                    </td>
                    <td>{shortPrice(item.options[0].price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
