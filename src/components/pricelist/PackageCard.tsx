import Link from "next/link";
import type { ReactNode } from "react";
import { MenuIcon } from "@/components/layout/MenuIcons";
import { lengthOf } from "@/lib/packageSaving";
import { displayPrice, priceValue, withDots } from "@/lib/price";

const hours = (h: number) => `${h} ${h === 1 ? "hour" : "hours"}`;

/** Minutes in words: "2 hours", "2.5 hours", "1 hour 45 minutes". */
function spell(total: number): string {
  if (total % 30 === 0) return hours(total / 60);
  const h = Math.floor(total / 60);
  return `${h ? `${hours(h)} ` : ""}${total % 60} minutes`;
}

/**
 * The treatments' lengths added up: "2.5 hours", or a range when one is
 * ("45–55 Mins" cream bath, owner, 24 Oct): "2 hours 45–55 minutes".
 */
export function totalTime(durations: string[]): string | null {
  const parts = durations.map(lengthOf);
  if (parts.some((p) => p === null)) return null;
  const low = (parts as [number, number][]).reduce((a, p) => a + p[0], 0);
  const high = (parts as [number, number][]).reduce((a, p) => a + p[1], 0);
  if (low === high) return spell(low);
  const h = Math.floor(low / 60);
  if (Math.floor(high / 60) === h && low % 60) return `${h ? `${hours(h)} ` : ""}${low % 60}–${high % 60} minutes`;
  return `${spell(low)} to ${spell(high)}`;
}

type Group = { cardTitle: string; packages: { price: string; items: { duration: string; service: string }[] }[] };

/**
 * "Same as Mani Pedi Package A" for a package listed under more than one
 * treatment (owner, 24 Oct: the repeats stay, so guests looking for a facial
 * or for Thai massage both find it, and the staff keep their codes; the line
 * says they are one package). Keyed "Balinese Massage|A". Packages are the
 * same when their price and treatments are.
 */
export function packageNotes(groups: Group[]): Map<string, string> {
  const sign = (p: Group["packages"][number]) =>
    `${p.price}|${p.items.map((i) => `${i.duration.replace(",", ".")} ${i.service}`.toLowerCase()).sort().join("+")}`;
  const codes = new Map<string, string[]>();
  for (const g of groups)
    g.packages.forEach((p, i) => {
      const code = `${g.cardTitle} Package ${String.fromCharCode(65 + i)}`;
      codes.set(sign(p), [...(codes.get(sign(p)) ?? []), code]);
    });
  const notes = new Map<string, string>();
  for (const g of groups)
    g.packages.forEach((p, i) => {
      const own = `${g.cardTitle} Package ${String.fromCharCode(65 + i)}`;
      const others = (codes.get(sign(p)) ?? []).filter((c) => c !== own);
      if (others.length) notes.set(`${g.cardTitle}|${String.fromCharCode(65 + i)}`, `Same as ${others.join(" and ")}`);
    });
  return notes;
}

/**
 * A spa package (owner, 24 Oct: the cards looked like the old theme; keep the
 * staff's codes, add the total time): a white card with a gold hairline edge,
 * the treatment's icon in a paper circle beside "PACKAGE B" in small gold
 * capitals over the treatment's name, the price, the treatments with their
 * lengths on hairline rows, the total time with a clock, and Reserve.
 * Used by the price list's package groups and the homepage. Styles:
 * src/styles/outcall.css, section 27.
 */
export default function PackageCard({
  code,
  name,
  href,
  icon,
  price,
  unit,
  items,
  cta,
  note,
  saving,
}: {
  /** IDR less than booking the treatments one by one (packageSaving); none when null. */
  saving?: number | null;
  /** The staff's code: "Package B". */
  code: string;
  /** "Same as …" when the package is listed under other treatments too (packageNotes). */
  note?: string;
  name: string;
  /** The treatment page the name links to. */
  href?: string;
  icon: ReactNode;
  price: string;
  /** "per person", or "for two" for couple packages. */
  unit: string;
  items: { duration: string; service: string }[];
  cta: { href: string; external?: boolean };
}) {
  const total = totalTime(items.map((i) => i.duration));
  const button = (
    <>
      Reserve
      <span className="icon_box">
        <i className="fa-regular icon_first fa-arrow-right-long" />
        <i className="fa-regular icon_second fa-arrow-right-long" />
      </span>
    </>
  );
  return (
    <article className="pkg-card">
      <div className="pkg-card__head">
        <span className="pkg-card__icon" aria-hidden="true">
          {icon}
        </span>
        <h3 className="pkg-card__title">
          {/* The code guests book by, as a tag with the letter large ("Package A";
              owner, 25 Oct: more prominent, so there is no confusion when booking). */}
          <span className="pkg-card__code">
            {code.slice(0, -1).trim()} <b>{code.slice(-1)}</b>
          </span>
          <span className="pkg-card__name">
            {href ? (
              <Link prefetch={false} href={href}>
                {name}
              </Link>
            ) : (
              name
            )}
          </span>
        </h3>
      </div>
      {note && <p className="pkg-card__note">{note}</p>}
      {/* The treatments' total when booked one by one, struck through over the
          package price, as a sale shows it (preview, owner, 24 Oct). */}
      {saving ? (
        <p className="pkg-card__was">
          <span className="sr-only">Booked separately: </span>
          <s>IDR {withDots(priceValue(price) + saving)}</s>
        </p>
      ) : null}
      <p className="pkg-card__price">
        {displayPrice(price)} <span>{unit}</span>
      </p>
      <ul className="pkg-card__items">
        {items.map((item, i) => (
          <li key={i}>
            <span className="pkg-card__duration">{item.duration.replace(",", ".")}</span>
            <span className="pkg-card__service">{item.service}</span>
          </li>
        ))}
      </ul>
      {total && (
        <p className="pkg-card__total">
          <MenuIcon name="clock" />
          {total} in total
        </p>
      )}
      {cta.external ? (
        <a href={cta.href} target="_blank" rel="noopener noreferrer" className="btn-two pkg-card__cta">
          {button}
        </a>
      ) : (
        <Link prefetch={false} href={cta.href} className="btn-two pkg-card__cta">
          {button}
        </Link>
      )}
    </article>
  );
}
