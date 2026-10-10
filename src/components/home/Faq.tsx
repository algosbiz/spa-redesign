"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { useState } from "react";
import { LotusIcon } from "@/components/ui/Lotus";
import { home } from "@/data/pages/home";

const S = "jsx-faq";

/** "1. Do I need to…" -> ["01", "Do I need to…"]. */
function splitNumber(question: string): [string | null, string] {
  const m = /^(\d+)\.\s*(.*)$/.exec(question);
  return m ? [m[1].padStart(2, "0"), m[2]] : [null, question];
}

/**
 * Homepage v2 FAQ — the live faq-section (photo left, questions right) made
 * calmer on the owner's request (30 Sep): a smaller heading with a keyword
 * ("Our Spa"), each question's number in a gold column so wrapped lines
 * align, the spa menu's gold circle arrow instead of mixed −/+ boxes, and the
 * menu's description type for the answers. One answer open at a time.
 * `arrow="line"` swaps the circle for a plain thin chevron (the homepage).
 */
export default function Faq({ arrow = "circle" }: { arrow?: "circle" | "line" }) {
  const { faq } = home;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="jsx-home homepage-faq-section v2-faq">
      <section className={`${S} faq-section pt-100`}>
        <div className={`${S} outer-box`}>
          <div className={`${S} row g-4`}>
            <div className={`${S} col-xxl-6 image-column`}>
              <div className={`${S} inner-column gsap__parallax`}>
                <img loading="lazy" decoding="async" src={faq.image} alt="Spa facial treatment" className={S} />
                <h2 className={`${S} title`}>{faq.imageTitle}</h2>
              </div>
            </div>
            <div className={`${S} col-xxl-6 content-column`}>
              <div className={`${S} inner-column`}>
                <div className={`${S} section-header`}>
                  <p className={`${S} sub-title`}>
                    <LotusIcon className="icon" scope={S} />
                    {faq.subTitle}
                  </p>
                  <h2 className={`${S} title`}>Seminyak Spa &amp; Massage: FAQs</h2>
                </div>
                <div className="v2-faq__list">
                  {faq.items.map((item, i) => {
                    const [num, text] = splitNumber(item.question);
                    const isOpen = open === i;
                    return (
                      <div key={item.question} className={`v2-faq__item${isOpen ? " is-open" : ""}`}>
                        <h3 className="v2-faq__question">
                          <button
                            type="button"
                            id={`v2-faq-q${i}`}
                            aria-expanded={isOpen}
                            aria-controls={`v2-faq-a${i}`}
                            onClick={() => setOpen((o) => (o === i ? null : i))}
                          >
                            {num && (
                              <span className="v2-faq__num" data-num={num} aria-hidden="true" />
                            )}
                            <span className="v2-faq__text">{text}</span>
                            {arrow === "line" ? (
                              <span className="v2-faq__arrow" aria-hidden="true">
                                <svg viewBox="0 0 20 20" width="20" height="20" fill="none">
                                  <path
                                    d="M4.5 7.5 10 13l5.5-5.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            ) : (
                              <span className="treatment-catalog__toggle" aria-hidden="true">
                                <i className="fa-solid fa-angle-down" />
                              </span>
                            )}
                          </button>
                        </h3>
                        <div
                          id={`v2-faq-a${i}`}
                          className="v2-faq__answer"
                          role="region"
                          aria-labelledby={`v2-faq-q${i}`}
                          aria-hidden={!isOpen}
                        >
                          <div className="v2-faq__answer-inner">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
