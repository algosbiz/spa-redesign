"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import MenuIntro, { halves, menuItems } from "@/components/home/MenuIntro";
import { displayPrice, durationLabel, durationOf, priceValue, startingOption } from "@/components/home/price";
import { catalogCategories, type CatalogCategory, type CatalogItem, type CatalogOption } from "@/data/pages/home-catalog";

/** A row of the menu: a catalog card, or a price page's treatment with the
 *  treatments listed under it (Four Hand Warm Candle under Organic Warm
 *  Candle; the couple massages under "Couple Massage" on the outcall page). */
export type MenuItem = CatalogItem & { children?: { name: string; options: CatalogOption[] }[] };

/** One tab. `timed`: prices go by the duration switch; left out, a tab is
 *  timed when its rows offer two durations or more. `plainTitles`: the rows'
 *  names are plain text in the same type, not headings (a tab that lists
 *  treatments another tab lists too, as "Most Popular" does). */
export type MenuTab = { id: string; label: string; items: MenuItem[]; timed?: boolean; plainTitles?: boolean };

/** Homepage tabs whose prices are per duration. */
const TIMED: CatalogCategory[] = ["massage", "couple"];

/** The homepage catalog's four tabs (the default). */
const catalogTabs = (): MenuTab[] =>
  catalogCategories.map((c) => ({ id: c.id, label: c.label, items: menuItems(c.id), timed: TIMED.includes(c.id) }));

/** "Body Massage & Scrub · Start From" -> "Body Massage & Scrub"; "… · 2 pax" -> "…". */
const cleanLabel = (label: string) => label.replace(/\s*·\s*(start from|2 pax)$/i, "");

const isTimed = (options: CatalogOption[]) => options.some((o) => durationOf(o.label) !== null);
const priceOf = (options: CatalogOption[], minutes: number) => options.find((o) => durationOf(o.label) === minutes)?.price;

/** "from IDR 165.000" when the options differ in price, else the one price. */
function fromPrice(options: CatalogOption[]) {
  return {
    amount: displayPrice(startingOption(options).price),
    from: new Set(options.map((o) => o.price)).size > 1,
  };
}

/** Options that share a price, in menu order: "Chocolate, Coconut, … · IDR 169.000". */
function byPrice(options: CatalogOption[]) {
  const groups: { labels: string[]; price: string; from: boolean }[] = [];
  for (const o of options) {
    // "Back · Start From": its price is a starting price, shown "from" when
    // it has its line to itself (the scrubs share theirs with seven scents).
    const from = /start from/i.test(o.label);
    const group = groups.find((g) => g.price === o.price);
    if (group) {
      group.labels.push(cleanLabel(o.label));
      group.from = false;
    } else groups.push({ labels: [cleanLabel(o.label)], price: o.price, from });
  }
  return groups;
}

/**
 * Price-list option A, "pick a duration": one switch under the tabs sets the
 * duration for the whole list (1 Hr to start), and every massage shows its
 * price for it — no row to open. Treatments without that duration fade and
 * show "—". Beauty and the couple packages have no durations: their row shows
 * the price (or "from"), and the variants follow in one line, same-priced
 * ones together. The homepage's price list since 1 October, and since then
 * also the price lists of /seminyak/ and the outcall page, which pass their
 * own `tabs` (see src/components/pricelist/menuTabs.ts) and heading.
 *
 * Every tab, and every duration's price, is in the HTML; the ones not shown
 * carry `hidden`, so search engines still read the whole price list, as they
 * did the live price pages' closed tabs and rows.
 *
 * `sticky` keeps the switch under the site header while the list scrolls
 * past, so a duration can be changed from anywhere in the list.
 * The header is 68px tall on phones and up to 156px where the desktop nav
 * wraps, so its height is measured and handed to the CSS as --v2-stick-top;
 * `is-stuck` shows the switch's white backing (and takes the header's shadow
 * off) from the moment it leaves its place until it has gone up under the
 * header with the last rows. Styles: src/styles/spa-menu.css.
 */
export default function MenuDurations({
  subTitle,
  title,
  intro,
  tabs: tabsProp,
  sticky = false,
  spacing = "pt-170 pb-170",
  paper = true,
}: {
  subTitle?: string;
  title?: string;
  /** A line under the heading. */
  intro?: ReactNode;
  tabs?: MenuTab[];
  sticky?: boolean;
  /** The section's live padding classes (the price pages keep their pt-130 pb-130). */
  spacing?: string;
  /** false: on the plain page colour, without the paper's torn edges (the outcall page alternates). */
  paper?: boolean;
}) {
  const tabs = useMemo(
    () =>
      (tabsProp ?? catalogTabs()).map((tab) => {
        const durations = [...new Set(tab.items.flatMap((i) => i.options.map((o) => durationOf(o.label))))]
          .filter((m): m is number => m !== null)
          .sort((a, b) => a - b);
        return { ...tab, durations, timed: (tab.timed ?? durations.length > 1) && durations.length > 0 };
      }),
    [tabsProp]
  );
  const [category, setCategory] = useState(tabs[0].id);
  const [minutes, setMinutes] = useState(60);
  const [stuck, setStuck] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const active = tabs.find((t) => t.id === category) ?? tabs[0];
  const pick = (durations: number[]) =>
    durations.includes(minutes) ? minutes : durations.includes(60) ? 60 : durations[0];
  const timed = active.timed;

  useEffect(() => {
    const bar = barRef.current;
    const section = bar?.closest("section");
    if (!sticky || !bar || !section) return;
    const header = document.querySelector<HTMLElement>("header.header-area");
    // Until the list is first drawn (on the homepage it waits off screen,
    // content-visibility in home-v3.css), reading the bar's box or its `top`
    // would make the browser lay the whole list out there and then, before
    // the first paint (PageSpeed, 21 Oct). The bar cannot be pinned then.
    const drawn = () => bar.checkVisibility?.({ contentVisibilityAuto: true }) !== false;
    let stickAt: number | null = null;
    let frame = 0;
    const check = () => {
      frame = 0;
      if (!drawn()) return setStuck(false);
      stickAt ??= parseFloat(getComputedStyle(bar).top) || 0;
      const box = bar.getBoundingClientRect();
      const under = header ? header.getBoundingClientRect().bottom : 0;
      setStuck(box.top <= stickAt + 0.5 && box.bottom > under + 1);
    };
    const layout = () => {
      section.style.setProperty("--v2-stick-top", `${header ? header.getBoundingClientRect().height : 0}px`);
      stickAt = null;
      check();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const resize = new ResizeObserver(layout);
    if (header) resize.observe(header);
    frame = requestAnimationFrame(layout);
    window.addEventListener("resize", layout);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("resize", layout);
      window.removeEventListener("scroll", onScroll);
      // The switch leaves with the tab (Beauty has none): it comes back unpinned.
      setStuck(false);
    };
  }, [sticky, timed]);

  return (
    <section
      className={`jsx-catalog package-section treatment-catalog${paper ? " section__decoration-top section__decoration-bottom bg-sub" : ""} ${spacing} v2-menu v2-menu--durations${
        sticky ? " v2-menu--sticky" : ""
      }`}
    >
      <div className="jsx-catalog shape1">
        <img loading="lazy" decoding="async" src="/images/shape/banner-five-shape1.png" alt="" className="jsx-catalog sway_Y__animationY" />
      </div>
      <div className="jsx-catalog container">
        <MenuIntro category={category} onCategory={setCategory} subTitle={subTitle} title={title} intro={intro} tabs={tabs} />
        {timed && (
          <div
            ref={barRef}
            className={`v2-duration${sticky ? " v2-duration--sticky" : ""}${sticky && stuck ? " is-stuck" : ""}`}
          >
            <span className="v2-duration__caption" id="v2-duration-caption">
              Prices for
            </span>
            <div className="v2-duration__switch" role="group" aria-labelledby="v2-duration-caption">
              {active.durations.map((m) => (
                <button key={m} type="button" aria-pressed={m === pick(active.durations)} onClick={() => setMinutes(m)}>
                  {durationLabel(m)}
                </button>
              ))}
            </div>
          </div>
        )}
        {tabs.map((tab) => (
          <div key={tab.id} className="jsx-catalog row g-5 align-items-start" hidden={tab.id !== active.id}>
            {halves(tab.items).map((column, i) => (
              <div key={`column-${i}`} className="jsx-catalog col-lg-6 treatment-catalog__column">
                {column.map((item) => (
                  <div key={item.id} className="jsx-catalog package-block">
                    <DurationRow
                      item={item}
                      durations={tab.timed ? tab.durations : null}
                      selected={pick(tab.durations)}
                      plainTitle={tab.plainTitles}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

type Price = { minutes: number | null; amount: string | null; from: boolean };
type Note = { text: string; minutes: number | null };

/** "IDR 250.000" -> a small "IDR" and the amount, so the amount stands out (owner, 21 Oct). */
function amountWithSmallCurrency(amount: string | null) {
  if (amount === null) return "—";
  const m = /^(from\s+)?IDR\s+(.*)$/i.exec(amount);
  if (!m) return amount;
  return (
    <>
      {m[1]}
      <span className="v2-price__cur">IDR</span> {m[2]}
    </>
  );
}

/** A row's price for one duration: its own, or (a row that only lists
 *  treatments under it) the lowest of theirs, as "from". */
function priceAt(item: MenuItem, minutes: number): Price {
  if (isTimed(item.options)) {
    const own = priceOf(item.options, minutes);
    return { minutes, amount: own ? displayPrice(own) : null, from: false };
  }
  const theirs = (item.children ?? []).map((c) => priceOf(c.options, minutes)).filter((p): p is string => !!p);
  if (!theirs.length) return { minutes, amount: null, from: false };
  const lowest = theirs.reduce((a, b) => (priceValue(b) < priceValue(a) ? b : a));
  return { minutes, amount: displayPrice(lowest), from: new Set(theirs).size > 1 };
}

/** The treatments listed under a row: their price for each duration (one
 *  shows at a time), or the price they start from. */
function childNotes(item: MenuItem, durations: number[] | null): Note[] {
  return (item.children ?? []).flatMap((child): Note[] => {
    if (durations && isTimed(child.options)) {
      return durations.flatMap((m) => {
        const price = priceOf(child.options, m);
        return price ? [{ text: `${child.name} · ${displayPrice(price)}`, minutes: m }] : [];
      });
    }
    const { amount, from } = fromPrice(child.options);
    return [{ text: `${child.name} · ${from ? "from " : ""}${amount}`, minutes: null }];
  });
}

/**
 * A treatment's name in two lines on phones (owner, 19 Oct: the names broke
 * differently from phone to phone, one line on an iPhone 14 Pro and on a
 * Galaxy A21s, two on narrower phones). Split where the two halves are
 * closest in length, or at " - " ("Balinese Massage - Relaxing"), whose dash
 * phones leave out. The <br> only shows on phones (spa-menu.css), so the
 * name is one line from 768px; the text search engines read is unchanged.
 * A <br>, not two block spans: a name in blocks inside its link takes its
 * baseline from the last line, and the price lines up with the first.
 */
function TitleLines({ name }: { name: string }) {
  const dash = name.indexOf(" - ");
  let first: string;
  let second: string;
  if (dash > 0) {
    first = name.slice(0, dash);
    second = name.slice(dash + 3);
  } else {
    const words = name.split(" ");
    if (words.length < 2) return <>{name}</>;
    let best = 1;
    const longer = (i: number) => Math.max(words.slice(0, i).join(" ").length, words.slice(i).join(" ").length);
    for (let i = 2; i < words.length; i++) if (longer(i) < longer(best)) best = i;
    first = words.slice(0, best).join(" ");
    second = words.slice(best).join(" ");
  }
  return (
    <>
      {first}
      {dash > 0 && <span className="v2-tdash"> -</span>} <br className="v2-tbr" />
      {second}
    </>
  );
}

/**
 * A variant under a treatment as a menu line (owner, 23 Oct: the wrapped,
 * dotted list was hard to read): its name, a dotted leader and its price in
 * gold on the right (spa-menu.css). Notes without a price are just text.
 */
function NoteText({ text }: { text: string }) {
  const at = text.lastIndexOf(" · ");
  if (at < 0) return <span className="v2-note__label">{text}</span>;
  return (
    <>
      <span className="v2-note__label">{text.slice(0, at)}</span>
      <span className="v2-note__price">{text.slice(at + 3)}</span>
    </>
  );
}

function DurationRow({
  item,
  durations,
  selected,
  plainTitle = false,
}: {
  item: MenuItem;
  durations: number[] | null;
  selected: number;
  plainTitle?: boolean;
}) {
  const all = [...item.options, ...(item.children ?? []).flatMap((c) => c.options)];
  const perCouple = all.length > 0 && all.every((o) => /2 pax/i.test(o.label));
  // In a timed tab, a row without durations (a cream bath among massages)
  // shows its usual price, like a Beauty row.
  const timed = durations !== null && isTimed(all);
  let prices: Price[];
  let notes: Note[];
  if (timed) {
    // The price for each duration (the chosen one shows); other variants as notes.
    prices = durations.map((m) => priceAt(item, m));
    notes = [
      ...item.options
        .filter((o) => durationOf(o.label) === null)
        .map((o) => ({ text: `${cleanLabel(o.label)} · ${displayPrice(o.price)}`, minutes: null })),
      ...childNotes(item, durations),
    ];
  } else {
    const options = item.options.length ? item.options : all;
    prices = [{ minutes: null, ...fromPrice(options) }];
    notes = [
      ...(options.length > 1
        ? byPrice(options).map((g) => `${g.labels.join(", ")} · ${g.from ? "from " : ""}${displayPrice(g.price)}`)
        : // What a one-price treatment's price is for ("30 Minutes", a couple package's contents) is a
          // menu line with that price too (owner, 23 Oct: "update all with the dots"); benefits stay a list.
          options.flatMap((o) => (o.details?.length === 1 ? [`${o.details[0]} · ${displayPrice(o.price)}`] : (o.details ?? [])))
      ).map((text) => ({ text, minutes: null })),
      ...(item.options.length ? childNotes(item, null) : []),
    ];
  }
  const current = prices.find((p) => p.minutes === (timed ? selected : null)) ?? prices[0];
  const shown = (minutes: number | null) => minutes === null || minutes === current.minutes;
  const photo = <img loading="lazy" decoding="async" src={item.image} alt={item.name} />;
  const name = item.href ? (
    <Link prefetch={false} href={item.href}>
      <TitleLines name={item.name} />
    </Link>
  ) : (
    <TitleLines name={item.name} />
  );

  return (
    <article className={`treatment-catalog__item${current.amount === null ? " is-unavailable" : ""}`}>
      {item.href ? (
        <Link prefetch={false} href={item.href} className="treatment-catalog__image" aria-label={`View ${item.name}`}>
          {photo}
        </Link>
      ) : (
        <div className="treatment-catalog__image">{photo}</div>
      )}
      <div className="treatment-catalog__content">
        <div className="treatment-catalog__heading">
          {plainTitle ? (
            <div className="title look-h3">{name}</div>
          ) : (
            <h3 className="title">{name}</h3>
          )}
          <div className="v2-dprice">
            {prices.map((p) => (
              // Showing a line again replays the amount's fade-in, so a new price fades in when the duration changes.
              <span key={p.minutes ?? "price"} className="v2-price__line" hidden={p !== current}>
                {p.minutes !== null && <span className="v2-sr">{durationLabel(p.minutes)}: </span>}
                {p.from && <span className="v2-price__note">from</span>}
                <span className="v2-price__amount">{amountWithSmallCurrency(p.amount)}</span>
              </span>
            ))}
            {current.amount === null ? (
              <span className="v2-price__pax">Not available</span>
            ) : (
              perCouple && <span className="v2-price__pax">2 pax</span>
            )}
          </div>
        </div>
        {item.desc && <p className="treatment-catalog__description">{item.desc}</p>}
        {notes.length > 0 && (
          <div className="treatment-catalog__option v2-notes" hidden={!notes.some((n) => shown(n.minutes))}>
            <ul>
              {notes.map((n) => (
                <li key={`${n.text}-${n.minutes}`} hidden={!shown(n.minutes)}>
                  <NoteText text={n.text} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
