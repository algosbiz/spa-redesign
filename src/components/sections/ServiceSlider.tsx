/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import type { ReactNode } from "react";
import ScrollRow from "@/components/home/ScrollRow";
import TreatmentCard from "@/components/home/TreatmentCard";
import { allTreatments } from "@/components/home/treatments";
import { LotusIcon } from "@/components/ui/Lotus";

/** The cards where a page names none (the Kuta and villa pages). */
const DEFAULT_CARDS = ["/seminyak/foot-reflexology/", "/seminyak/head-massage/", "/seminyak/hot-stone-massage/"];

/**
 * "Other treatments": a few treatment cards under a heading. Each treatment
 * page names its own four since the copy rewrite (15 Oct), so the pages no
 * longer repeat the same sixteen.
 *
 * The cards are the homepage's (photo, gold icon, name, starting price, one
 * line, "Learn More"; owner, 24 Oct: the old notched cards in a three-up
 * slider looked dated): side by side from 992px, below that one row that
 * swipes (treat-cards.css). The class names stay those of the live
 * "service-section-two", which the spacing and decoration rules hang off.
 */
export default function ServiceSlider({
  subTitle = "Services",
  title = (
    <>
      {"Our Services Will Make "}
      <br />
      {" You Glow"}
    </>
  ),
  paperBackground = false,
  related = DEFAULT_CARDS,
  embedded = false,
  leftShapeSrc,
  rightShapeSrc,
}: {
  subTitle?: string;
  title?: ReactNode;
  paperBackground?: boolean;
  /** Treatment page addresses ("/seminyak/body-scrub/"): the cards, in this order. */
  related?: string[];
  embedded?: boolean;
  leftShapeSrc?: string;
  rightShapeSrc?: string;
}) {
  const cards = related.flatMap((href) => allTreatments.find((t) => t.href === href) ?? []);
  return (
    <section
      id="services"
      className={`service-section-two treat-cards${embedded ? "" : " section__decoration-top section__decoration-bottom"} pt-130 pb-100${
        paperBackground ? " service-section-two--paper bg-sub" : ""
      }`}
    >
      {leftShapeSrc && (
        <div className="shape1">
          <img
            loading="lazy"
            decoding="async"
            className="sway__animation"
            src={leftShapeSrc}
            alt=""
            aria-hidden="true"
          />
        </div>
      )}
      {rightShapeSrc && (
        <div className="shape2">
          <img
            loading="lazy"
            decoding="async"
            className="animation__arryUpDown"
            src={rightShapeSrc}
            alt=""
            aria-hidden="true"
          />
        </div>
      )}
      <div className="container">
        <div className="section-header mb-60 center">
          <p className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            <LotusIcon className="icon" />
            {subTitle}
          </p>
          <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            {title}
          </h2>
        </div>
        <ScrollRow className="treat-cards__row" below="lg" nudge label="Other treatments">
          {cards.map((t) => (
            <TreatmentCard key={t.href} {...t} />
          ))}
        </ScrollRow>
      </div>
    </section>
  );
}
