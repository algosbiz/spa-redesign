import Link from "next/link";
import type { ReactNode } from "react";
import { LotusIcon } from "@/components/ui/Lotus";
import SectionShapes from "@/components/ui/SectionShapes";

export type CompareTableProps = {
  subTitle?: ReactNode;
  title?: ReactNode;
  /** The sentence under the heading: what the difference is, in one go. */
  text?: ReactNode;
  /**
   * The treatments compared, left to right. `href`: its page (left out for the
   * page itself). `short`: the name beside each value on phones ("Deep tissue").
   */
  columns: { name: string; short?: string; href?: string }[];
  /** One row per point compared, one value per column, in the same order. */
  rows: { label: string; values: string[] }[];
  /** For screen readers: what the table compares. */
  caption?: string;
  leftShapeSrc?: string | null;
  rightShapeSrc?: string | null;
};

/**
 * Treatments side by side, to help a guest choose (owner, 8 Nov: "feel free to
 * add chart or difference between cellulite"; first on the lymphatic page). The
 * outcall page's comparison card (outcall.css, `oc-table--compare`), with as
 * many columns as treatments; on phones each row stacks, every value under its
 * treatment's name, so nothing scrolls sideways (custom.css, "Comparison table").
 */
export default function CompareTable({
  subTitle = "",
  title,
  text,
  columns,
  rows,
  caption,
  leftShapeSrc,
  rightShapeSrc,
}: CompareTableProps) {
  return (
    <section className="compare-section pt-130 pb-100">
      <SectionShapes left={leftShapeSrc} right={rightShapeSrc} />
      <div className="container">
        <div className="section-header center price-table__header oc-header">
          {subTitle !== "" && (
            <p className="sub-title">
              <LotusIcon className="icon" />
              {subTitle}
            </p>
          )}
          <h2 className="title">{title}</h2>
          {text ? <p className="price-table__text">{text}</p> : null}
        </div>
        <div className="oc-table-wrap oc-table-wrap--scroll compare-table__wrap">
          <table className="oc-table oc-table--compare compare-table">
            {caption ? <caption className="oc-sr-only">{caption}</caption> : null}
            <thead>
              <tr>
                <td />
                {columns.map((column) => (
                  <th scope="col" key={column.name}>
                    {column.href ? (
                      <Link prefetch={false} href={column.href}>
                        {column.name}
                      </Link>
                    ) : (
                      column.name
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {columns.map((column, i) => (
                    <td key={column.name}>
                      {/* The treatment's name beside its value, on phones only (the space keeps the two apart in the page's text). */}
                      <span className="compare-table__name">{column.short ?? column.name}</span>{" "}
                      {row.values[i] ?? ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
