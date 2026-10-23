import { Fragment, type ReactNode } from "react";
import SectionShapes from "@/components/ui/SectionShapes";

/**
 * `figure` and `detail`: the fact as the "glance" look sets it, a large
 * figure ("2009") over its words ("in Seminyak, Bali"; `value` if left out).
 */
export type QuickFact = { label: string; value: string; figure?: string; detail?: string };

/** "15 October 2026", British date order, as the footer prints dates (Bali time). */
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Makassar" });

/**
 * "1 hour IDR 300.000 · 1.5 hours IDR 440.000 · …": a line breaks between the
 * parts, not inside "IDR / 580.000". Long parts may still wrap (phones).
 */
function FactValue({ value }: { value: string }) {
  // "IDR" never ends a line without its amount, nor "9am–" without "11pm".
  const parts = value
    .replace(/IDR /g, "IDR ")
    .replace(/(\d(?:am|pm)?)–(\d)/g, "$1\u2060–\u2060$2")
    .split(" · ");
  // The dot stays with the part before it; the line may break after it.
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 ? " " : null}
      <span className={part.length <= 32 ? "quick-facts__part" : undefined}>
        {part}
        {i < parts.length - 1 ? " ·" : null}
      </span>
    </Fragment>
  ));
}

/**
 * The faq look's opening paragraph (owner, 19 Oct: "the text part too"): the
 * first sentence, which says what the treatment is, in the large serif under
 * a short gold line; the rest after it in the body type. With `skipPrices`
 * (the banner shows the session prices) a sentence listing those prices is
 * left out (owner, 19 Oct: "prices in the hero, then again a little lower";
 * the full text was tried again the same day, and the owner kept this);
 * the price section and the FAQ further down still give them in words.
 */
function SplitLead({ text, skipPrices }: { text: string; skipPrices: boolean }) {
  // A sentence ends at ".", "!" or "?" before a capital, not after an
  // abbreviation ("Jl. Pangkung Sari No. 30").
  const sentences = text.split(/(?<=[.!?])(?<!\b(?:Jl|Jln|No|St|Dr|Mr|Mrs|Ms|approx)\.)\s+(?=[A-Z])/);
  // Hair braiding opens with its prices: then the next sentence leads.
  const kept = sentences.filter((sentence) => !skipPrices || (sentence.match(/IDR\s[\d.]+/g) ?? []).length < 2);
  const [first, ...others] = kept.length ? kept : sentences;
  const rest = others.join(" ");
  // A long opening sentence is set a step smaller, so it keeps to about the
  // list's height beside it (24 pages: 46 to 202 characters).
  const size = first.length > 190 ? " quick-facts__lead--longer" : first.length > 140 ? " quick-facts__lead--long" : "";
  return (
    <p className={`quick-facts__lead quick-facts__lead--split${size}`}>
      <span className="quick-facts__lead-first">{first}</span>
      {rest ? (
        <>
          {" "}
          <span className="quick-facts__lead-rest">
            {rest.split(/(IDR [\d.]+)/).map((part, i) =>
              // "IDR" never ends a line without its amount.
              i % 2 ? <strong key={i}>{part.replace("IDR ", "IDR\u00a0")}</strong> : part
            )}
          </span>
        </>
      ) : null}
    </p>
  );
}

/**
 * The "faq" look (owner, 19 Oct: the card of price tiles and icon rows looked
 * flat and machine-made; "like the homepage, where the important part is in
 * the banner", and the rest "FAQ style but simpler"): the lengths and prices
 * go to the page banner (PageBanner `prices`, set by the page template), and
 * the other facts become a short numbered list that opens one fact at a
 * time, the first open. Native <details>, so it works without script and
 * every answer stays in the HTML for search engines and AI answers.
 */
function FaqList({ items, updated, skip }: { items: QuickFact[]; updated?: string; skip?: string }) {
  const rows = items.filter((item) => item.label !== skip);
  return (
    <div className="quick-facts__faq">
      <p className="quick-facts__label">Quick facts</p>
      {rows.map((item, i) => (
        // One `name`: opening a fact closes the one that was open.
        <details key={item.label} className="quick-facts__item" name="quick-facts" open={i === 0}>
          <summary>
            <span className="quick-facts__num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="quick-facts__q">{item.label}</span>
            <span className="quick-facts__chev" aria-hidden="true" />
          </summary>
          <p className="quick-facts__a">
            <FactValue value={item.value} />
          </p>
        </details>
      ))}
      {updated ? (
        <p className="quick-facts__updated">
          Last updated <time dateTime={updated}>{formatDate(updated)}</time>
        </p>
      ) : null}
    </div>
  );
}

/**
 * The "glance" look (About page, 19 Oct): the facts that have a figure in a
 * row of large serif figures between gold hairlines, each under its label
 * and over its words; the other facts as small label and value pairs under
 * the row.
 */
function Glance({ items }: { items: QuickFact[] }) {
  const figures = items.filter((item) => item.figure);
  const others = items.filter((item) => !item.figure);
  return (
    <div className="quick-facts__glance">
      <p className="quick-facts__label">Quick facts</p>
      <dl className="quick-facts__figures">
        {figures.map((item) => {
          // "IDR 75.000": the currency small beside the amount.
          const amount = /^IDR (.+)$/.exec(item.figure!);
          return (
            <div key={item.label} className="quick-facts__figure">
              <dt>{item.label}</dt>
              <dd>
                <span className="quick-facts__big">
                  {amount ? (
                    <>
                      <span className="quick-facts__cur">IDR</span> {amount[1]}
                    </>
                  ) : (
                    item.figure
                  )}
                </span>{" "}
                <span className="quick-facts__small">
                  <FactValue value={item.detail ?? item.value} />
                </span>
              </dd>
            </div>
          );
        })}
      </dl>
      {others.length > 0 ? (
        <dl className="quick-facts__more">
          {others.map((item) => (
            <div key={item.label} className="quick-facts__more-row">
              <dt>{item.label}</dt>
              <dd>
                <FactValue value={item.value} />
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}

/**
 * The answer-first block under a treatment page's banner (copy rewrite,
 * 15 Oct): an opening paragraph that names the spa, Seminyak, the price and
 * the options, then the quick facts (treatment, length and price, where,
 * booking) as a short list that search and AI answers can lift as it is.
 * No heading of its own, so the page's headings stay as they were.
 */
export default function QuickFacts({
  text,
  items = [],
  updated,
  look = "rows",
  bannerPriceLabel,
  leftShapeSrc,
  rightShapeSrc,
  children,
}: {
  text?: ReactNode;
  items?: QuickFact[];
  /** When the page last changed (ISO), shown under the facts. */
  updated?: string;
  /** "faq": a numbered list that opens (FaqList); set by the page template. "glance": large figures (Glance). */
  look?: "rows" | "faq" | "glance";
  /** The fact the page banner shows as prices (page template): left out of the list, and the opening's price sentence with it. */
  bannerPriceLabel?: string;
  /** Corner decorations (components/ui/SectionShapes.tsx). */
  leftShapeSrc?: string | null;
  rightShapeSrc?: string | null;
  /** Added at the end of the block by the page template (the sentence that links to the outcall page). */
  children?: ReactNode;
}) {
  const paper = look === "faq" || look === "glance";
  return (
    // The faq and glance looks sit on the paper colour with the theme's torn
    // edges, as the price and FAQ sections do (option B, owner, 19 Oct).
    <section
      className={
        paper
          ? `quick-facts quick-facts--${look} bg-sub section__decoration-top section__decoration-bottom`
          : "quick-facts"
      }
    >
      <SectionShapes left={leftShapeSrc} right={rightShapeSrc} />
      <div className="container">
        <div className="quick-facts__inner">
          {text && paper && typeof text === "string" ? (
            <SplitLead text={text} skipPrices={Boolean(bannerPriceLabel)} />
          ) : text ? (
            <p className="quick-facts__lead">{typeof text === "string" ? text.replace(/IDR /g, "IDR ") : text}</p>
          ) : null}
          {items.length > 0 && look === "faq" ? (
            <FaqList items={items} updated={updated} skip={bannerPriceLabel} />
          ) : null}
          {items.length > 0 && look === "glance" ? <Glance items={items} /> : null}
          {items.length > 0 && look === "rows" && (
            <div className="quick-facts__card">
              <p className="quick-facts__label">Quick facts</p>
              <dl className="quick-facts__list">
                {items.map((item) => (
                  <div key={item.label} className="quick-facts__row">
                    <dt>{item.label}</dt>
                    <dd>
                      <FactValue value={item.value} />
                    </dd>
                  </div>
                ))}
              </dl>
              {updated ? (
                <p className="quick-facts__updated">
                  Last updated <time dateTime={updated}>{formatDate(updated)}</time>
                </p>
              ) : null}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
