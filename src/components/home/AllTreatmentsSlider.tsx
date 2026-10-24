import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowBox } from "@/components/home/icons";
import ScrollRow from "@/components/home/ScrollRow";
import TreatmentCard from "@/components/home/TreatmentCard";
import { allTreatments } from "@/components/home/treatments";
import { LotusIcon } from "@/components/ui/Lotus";

/**
 * Option 1 for "all treatments": every treatment page (25 since 24 Oct) as the v2 cards in
 * one row that scrolls sideways at every width — four and a peek in view on
 * desktop, the arrows moving a view at a time, "3 / 23" between them (no
 * arrows on phones), and a small slide when it first comes into view to show
 * that it swipes (owner, 23 Oct; filter pills were tried and left out).
 * The heading can be set per page (the homepage uses the owner's wording).
 */
export default function AllTreatmentsSlider({
  subTitle = "Our Treatments",
  title = "Find the Treatment for You",
  text = `All ${allTreatments.length} of our treatments, at our Seminyak spa or as home service.`,
}: {
  subTitle?: string;
  title?: string;
  text?: ReactNode;
}) {
  return (
    <section className="v2-popular v2-alltreat">
      <div className="container">
        <div className="section-header center mb-60">
          <div className="sub-title look-h4">
            <LotusIcon className="icon" />
            {subTitle}
          </div>
          <h2 className="title">{title}</h2>
          <p>{text}</p>
        </div>
        <ScrollRow className="v2-alltreat__row" below="all" indicator="count" nudge label="All treatments">
          {allTreatments.map((t) => (
            <TreatmentCard key={t.href} {...t} heading={false} />
          ))}
        </ScrollRow>
        <div className="v2-popular__more">
          <Link prefetch={false} href="/seminyak/" className="btn-two">
            View Price List
            <ArrowBox />
          </Link>
        </div>
      </div>
    </section>
  );
}
