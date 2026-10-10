"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { useState, type ReactNode } from "react";
import { LotusIcon } from "@/components/ui/Lotus";

export type FaqItem = { question: string; answer: string };

const S = "jsx-faq";

/**
 * FAQ — the live "faq-section": photo with a title on the left, Bootstrap
 * accordion on the right, one answer open at a time. Opening is instant
 * (`.collapse` / `.show`), as live.
 *
 * Variants used on the live site: no photo, two accordion columns, a paper
 * background with torn edges, and three top paddings.
 */
export default function FaqSection({
  imageTitle = "Revive Your Senses",
  subTitle = "Get to know us",
  title = "All About Your Spa Day",
  items,
  showImage = true,
  image = "/images/faq/faq-image.jpg",
  columns = 1,
  largeTopPadding = false,
  removeTopPadding = false,
  paperDecoration = false,
  imageTitleAsHeading = false,
}: {
  imageTitle?: string;
  subTitle?: string;
  title?: ReactNode;
  items: FaqItem[];
  showImage?: boolean;
  image?: string;
  columns?: 1 | 2;
  largeTopPadding?: boolean;
  removeTopPadding?: boolean;
  paperDecoration?: boolean;
  /** The words on the photo are a <div class="look-h2"> (same look), so the
   *  section has one H2 (owner, 5 Oct); `true` keeps them an h2, as /seminyak/. */
  imageTitleAsHeading?: boolean;
}) {
  const twoColumns = columns === 2;
  const half = Math.ceil(items.length / 2);
  const className =
    "faq-section" +
    (showImage ? "" : " faq-section--no-image") +
    (paperDecoration ? " faq-section--paper section__decoration-top section__decoration-bottom bg-sub pt-130 pb-100" : "") +
    (removeTopPadding || paperDecoration ? "" : largeTopPadding ? " pt-130" : " pt-100");

  return (
    <section className={`${S} ${className}`}>
      <div className={`${S} outer-box`}>
        <div className={`${S} row g-4`}>
          {showImage && (
            <div className={`${S} col-xxl-6 image-column`}>
              <div className={`${S} inner-column gsap__parallax`}>
                <img loading="lazy" decoding="async" src={image} alt="Spa facial treatment" className={S} />
                {imageTitleAsHeading ? (
                  <h2 className={`${S} title`}>{imageTitle}</h2>
                ) : (
                  <div className={`${S} title look-h2`}>{imageTitle}</div>
                )}
              </div>
            </div>
          )}
          <div className={`${S} ${showImage ? "col-xxl-6 content-column" : "col-12 content-column"}`}>
            <div className={`${S} inner-column`}>
              <div className={`${S} section-header`}>
                <p data-wow-delay="00ms" data-wow-duration="1500ms" className={`${S} sub-title wow fadeInUp`}>
                  <LotusIcon className="icon" scope={S} />
                  {subTitle}
                </p>
                <h2 data-wow-delay="200ms" data-wow-duration="1500ms" className={`${S} title wow fadeInUp`}>
                  {title}
                </h2>
              </div>
              <div
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                className={`${S} faq-accordion wow fadeInDown ${twoColumns ? "faq-grid" : ""}`}
              >
                {twoColumns ? (
                  <div className={`${S} row g-4`}>
                    {[items.slice(0, half), items.slice(half)].map((column, i) => (
                      <div key={i} className={`${S} col-lg-6`}>
                        <div className={`${S} faq-grid-column`}>
                          <Accordion items={column} defaultOpen={null} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Accordion items={items} defaultOpen={0} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * A question numbered "1. How do I…" keeps its number on screen but not in the
 * heading text: the number is drawn by CSS from `data-num` (src/styles/custom.css).
 */
function QuestionText({ text }: { text: string }) {
  const m = /^(\d+\.)\s+(.*)$/.exec(text);
  if (!m) return <>{text}</>;
  return (
    <>
      <span className="faq-q-num" data-num={m[1]} aria-hidden="true" />
      {m[2]}
    </>
  );
}

function Accordion({ items, defaultOpen }: { items: FaqItem[]; defaultOpen: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="accordion-item">
            <h3 className="accordion-header">
              <button
                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen((o) => (o === i ? null : i))}
              >
                <QuestionText text={item.question} />
              </button>
            </h3>
            <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
