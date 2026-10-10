"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { MenuIcon, type MenuIconName } from "@/components/layout/MenuIcons";
import type { MobileMenuData, MobileMenuEntry } from "@/components/layout/mobileMenuData";
import { mainNav } from "@/data/navigation";

type Panel = "treatments" | "blog" | "outcall";

/** Paths are written with a trailing slash; the browser may report either. */
const same = (a: string, b: string) => a.replace(/\/?$/, "/") === b.replace(/\/?$/, "/");

/** Each menu item's icon and one line about it. */
const ABOUT: Record<string, { icon: MenuIconName; note: (data: MobileMenuData) => string }> = {
  Home: { icon: "lotus", note: () => "Our day spa in Seminyak" },
  Pricelist: { icon: "tag", note: () => "Every treatment and price" },
  Treatments: {
    icon: "stones",
    note: (d) => `${d.treatments.reduce((n, g) => n + g.items.length, 0)} massages and beauty treatments`,
  },
  Outcall: { icon: "home", note: () => "Massage at your villa or hotel" },
  Reservation: { icon: "calendar", note: () => "Book your visit" },
  Blog: { icon: "book", note: () => "Guides to our treatments" },
  Contact: { icon: "chat", note: () => "Find us and get in touch" },
};

/** Thin arrows: › into a panel, ‹ back out of it. */
const Arrow = ({ back }: { back?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d={back ? "M10 3.5L5.5 8l4.5 4.5" : "M6 3.5l4.5 4.5L6 12.5"}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * The menu inside the off-canvas sidebar (owner, 2 Oct: "modernize the menu";
 * of three designs the owner picked this one, "opsi 2").
 * The first panel: the desktop menu's items in its order (mainNav), each a
 * white row on paper with its icon, its name and one line about it, and
 * under them `children` (the contact card). "Treatments" and "Blog" slide in
 * a panel of their own over it, with a back button: the treatments in two
 * groups, each row a photo, the name and the starting price; the articles
 * with their cover photos. The current page is gold. Every link closes the
 * sidebar (`onNavigate`); closing it also returns to the first panel. Photos
 * load once the sidebar has been opened. Styles: src/styles/mobile-nav.css.
 */
export default function MobileMenu({
  data,
  open,
  onNavigate,
  children,
}: {
  data: MobileMenuData;
  open: boolean;
  onNavigate?: () => void;
  children?: ReactNode;
}) {
  const pathname = usePathname() || "/";
  const [panel, setPanel] = useState<Panel | null>(null);
  const [opened, setOpened] = useState(open);
  const [wasOpen, setWasOpen] = useState(open);
  const backRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const returning = useRef(false);

  // Closing the sidebar returns to the first panel; photos wait for the first opening.
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) setOpened(true);
    else setPanel(null);
  }

  // Focus follows the panels: the back button in, the row that opened it out
  // (once the first panel is no longer inert).
  useEffect(() => {
    if (panel) backRef.current?.focus({ preventScroll: true });
    else if (returning.current) {
      returning.current = false;
      triggerRef.current?.focus({ preventScroll: true });
    }
  }, [panel]);

  const show = (p: Panel, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setPanel(p);
  };
  const back = () => {
    returning.current = true;
    setPanel(null);
  };

  const inTreatments = data.treatments.some((g) => g.items.some((i) => same(pathname, i.href)));
  const inBlog = pathname.startsWith("/guide/");
  const inOutcall = data.outcall.some((i) => same(pathname, i.href));

  const rows = (items: MobileMenuEntry[], kind: Panel) =>
    items.map((entry) => {
      const current = same(pathname, entry.href);
      return (
        <li key={entry.href}>
          <Link
            prefetch={false}
            href={entry.href}
            onClick={onNavigate}
            aria-current={current ? "page" : undefined}
            className={`mnav__entry mnav__entry--${kind}`}
          >
            <span className="mnav__thumb">
              {/* A cover uploaded in /admin/ lives on another host (R2), which the optimiser does not allow. */}
              {opened && entry.image && (
                <Image src={entry.image} alt="" fill sizes="72px" unoptimized={!entry.image.startsWith("/")} />
              )}
            </span>
            <span className="mnav__entry-text">
              <span className="mnav__entry-name">{entry.label}</span>
              {entry.note && <span className="mnav__entry-note">{entry.note}</span>}
            </span>
            <span className="mnav__entry-arrow">
              <Arrow />
            </span>
          </Link>
        </li>
      );
    });

  const subPanel = (p: Panel, title: string, body: ReactNode, all: { label: string; href: string }) => (
    <div
      id={`mnav-${p}`}
      role="region"
      aria-label={title}
      inert={panel !== p}
      className={`mnav__panel mnav__panel--sub${panel === p ? " is-open" : ""}`}
    >
      <div className="mnav__subhead">
        <button
          ref={panel === p ? backRef : undefined}
          type="button"
          onClick={back}
          aria-label="Back to the menu"
          className="mnav__back"
        >
          <Arrow back />
        </button>
        <p className="mnav__subtitle">{title}</p>
      </div>
      {body}
      <Link prefetch={false} href={all.href} onClick={onNavigate} className="btn-two mnav__panel-cta">
        {all.label}
        <span className="icon_box">
          <i className="fa-regular icon_first fa-arrow-right-long" />
          <i className="fa-regular icon_second fa-arrow-right-long" />
        </span>
      </Link>
    </div>
  );

  return (
    <>
      <div inert={panel !== null} className={`mnav__panel mnav__panel--main${panel ? " is-behind" : ""}`}>
        <nav aria-label="Main">
          <ul className="mnav__list">
            {mainNav.map((it, i) => {
              const inner = (
                <>
                  <span className="mnav__icon">
                    <MenuIcon name={ABOUT[it.label].icon} />
                  </span>
                  <span className="mnav__row-text">
                    <span className="mnav__row-label">{it.label}</span>
                    <span className="mnav__note">{ABOUT[it.label].note(data)}</span>
                  </span>
                  <span className="mnav__arrow">
                    <Arrow />
                  </span>
                </>
              );
              const style = { "--i": i } as CSSProperties;
              if (it.dropdown) {
                const current = { treatments: inTreatments, blog: inBlog, outcall: inOutcall }[it.dropdown];
                return (
                  <li key={it.label} className="mnav__anim" style={style}>
                    <button
                      type="button"
                      onClick={(e) => show(it.dropdown!, e.currentTarget)}
                      aria-controls={`mnav-${it.dropdown}`}
                      aria-expanded={panel === it.dropdown}
                      className={`mnav__row${current ? " is-current" : ""}`}
                    >
                      {inner}
                    </button>
                  </li>
                );
              }
              const current = same(pathname, it.href);
              return (
                <li key={it.label} className="mnav__anim" style={style}>
                  <Link
                    prefetch={false}
                    href={it.href}
                    onClick={onNavigate}
                    aria-current={current ? "page" : undefined}
                    className={`mnav__row${current ? " is-current" : ""}`}
                  >
                    {inner}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {children}
      </div>
      {subPanel(
        "treatments",
        "Treatments",
        data.treatments.map((g) => (
          <section key={g.title} className="mnav__group" aria-label={g.title}>
            <p className="mnav__group-title">
              {g.title}
              <span>{g.items.length}</span>
            </p>
            <ul className="mnav__entries">{rows(g.items, "treatments")}</ul>
          </section>
        )),
        { label: "See the full price list", href: "/seminyak/" },
      )}
      {subPanel(
        "outcall",
        "Outcall",
        <ul className="mnav__entries">{rows(data.outcall, "outcall")}</ul>,
        { label: "Home service massage", href: "/outcall-home-service-massage/" },
      )}
      {subPanel(
        "blog",
        "Blog",
        <ul className="mnav__entries">{rows(data.posts, "blog")}</ul>,
        { label: "All articles", href: "/guide/" },
      )}
    </>
  );
}
