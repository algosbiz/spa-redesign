import Link from "next/link";
import type { ReactNode } from "react";
import { MenuIcon, type MenuIconName } from "@/components/layout/MenuIcons";

/**
 * A button drawn like a row of the mobile menu (owner, 2 Oct, about the
 * menu: "would be possible to text buttons on a page to be more like these
 * … maybe just on home"): a gold icon in a paper circle, the label, a line
 * under it, and an arrow. Links that leave the site (WhatsApp) open in a new
 * tab. Styles: src/styles/row-button.css; `row-btn--glass` (custom.css) is
 * the see-through gold version for photo banners.
 */
export default function RowButton({
  href,
  icon,
  label,
  note,
  className = "",
}: {
  href: string;
  icon: MenuIconName | "whatsapp";
  label: ReactNode;
  note?: ReactNode;
  className?: string;
}) {
  const classes = `row-btn${className ? ` ${className}` : ""}`;
  const inner = (
    <>
      <span className="row-btn__icon">
        {icon === "whatsapp" ? <i className="fa-brands fa-whatsapp" aria-hidden="true" /> : <MenuIcon name={icon} />}
      </span>
      <span className="row-btn__text">
        <span className="row-btn__label">{label}</span>
        {note && <span className="row-btn__note">{note}</span>}
      </span>
      <span className="row-btn__arrow" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3.5l4.5 4.5L6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </>
  );
  if (/^https?:/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }
  // In-page anchors stay plain links, so Lenis (desktop) or the CSS
  // scroll-behavior (touch) scrolls to them.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link prefetch={false} href={href} className={classes}>
      {inner}
    </Link>
  );
}
