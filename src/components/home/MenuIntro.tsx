import type { ReactNode } from "react";
import { home } from "@/data/pages/home";
import { catalog, catalogCategories, type CatalogCategory, type CatalogItem } from "@/data/pages/home-catalog";
import "@/styles/spa-menu.css";

/** The spa-menu entries of one tab, A–Z, as the live catalog lists them. */
export const menuItems = (category: CatalogCategory): CatalogItem[] =>
  catalog
    .filter((item) => (item.categories || [item.category]).includes(category))
    .sort((a, b) => a.name.localeCompare(b.name));

/** Two columns, the first one longer when the count is odd. */
export function halves<T>(items: T[]): [T[], T[]] {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)];
}

/** Shorter tab names, so the four fit one bar on a phone (owner, 23 Oct). */
const TAB_NAMES: Record<string, string> = {
  "For Couple": "Couples",
  "For Couples": "Couples",
  "Couple Package": "Couple Packages",
};

/**
 * The live catalog's heading (or a page's own), home-service fee and category
 * tabs. `tabs` defaults to the homepage catalog's four; a price page passes
 * its own. On phones the tabs are one sliding bar (spa-menu.css), and a tab
 * that is partly out of view slides in when chosen.
 */
export default function MenuIntro<T extends string = CatalogCategory>({
  category,
  onCategory,
  subTitle,
  title,
  intro,
  tabs = catalogCategories as { id: T; label: string }[],
}: {
  category: T;
  onCategory: (id: T) => void;
  subTitle?: string;
  title?: string;
  /** A line under the heading (the outcall page's price list). */
  intro?: ReactNode;
  tabs?: { id: T; label: string }[];
}) {
  const { catalog: text } = home;
  return (
    <>
      <div className="jsx-catalog section-header mb-60 center">
        <div className="jsx-catalog sub-title look-h4">{subTitle ?? text.subTitle}</div>
        <h2 className="jsx-catalog title">{title ?? text.title}</h2>
        {intro ? <p className="jsx-catalog menu-intro-text">{intro}</p> : null}
      </div>
      <div aria-label="Home service fee" className="jsx-catalog treatment-catalog__fee">
        <strong className="jsx-catalog">{text.fee.label}</strong>
        <span className="jsx-catalog">{text.fee.value}</span>
      </div>
      <div aria-label="Treatment categories" className="jsx-catalog treatment-catalog__categories">
        {tabs.map((c) => {
          const active = category === c.id;
          return (
            <button
              key={c.id}
              type="button"
              aria-pressed={active}
              onClick={(e) => {
                onCategory(c.id);
                e.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
              }}
              className={`jsx-catalog treatment-catalog__category${active ? " is-active" : ""}`}
            >
              <span className="jsx-catalog">{TAB_NAMES[c.label] ?? c.label}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
