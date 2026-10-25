"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { MenuIcon, type MenuIconName } from "@/components/layout/MenuIcons";
import { business } from "@/data/business";
import { footerDaySpaLink, footerDaySpaPages, footerHomeServices, legalLinks } from "@/data/navigation";
import { sitemapPages } from "@/data/sitemap";
import { whatsappChatUrl } from "@/lib/whatsapp";

type Status = "idle" | "loading" | "success" | "error";

const pathOf = (url: string) => new URL(url, business.url).pathname.replace(/(.)\/$/, "$1");

/**
 * "Page updated October 15, 2026" after the copyright (copy rewrite, 15 Oct:
 * a date on every page), from the sitemap's date for the page. Treatment
 * pages show theirs in the quick facts and guide articles under the title,
 * so they are left out here, as is /guide/, a list of dated articles.
 */
const PAGE_UPDATED = new Map(
  sitemapPages
    .map((p) => [pathOf(p.loc), p.lastmod] as const)
    .filter(([path]) => path !== "/guide" && !/^\/seminyak\/[^/]+$/.test(path))
);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Instagram, drawn like the other line icons (Facebook left out, owner, 21 Oct). */
const SOCIAL = [
  {
    label: "Instagram",
    href: business.social.instagram,
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </>
    ),
  },
];

/**
 * The facts as one white card of rows, like "Visit us" on phones (outcall.css
 * section 20), each row a link with the gold arrow but the hours; then the
 * pages in a second card, as the mobile menu's rows: icon, name, arrow (chips
 * read as blog tags, owner). Made for phones (owner, 23 Oct: "could the mobile
 * footer be enhanced"), on every screen since 24 Oct ("on desktop we can
 * still modernize the footer … more like mobile"): side by side from 768px.
 */
const PHONE_LINKS: { label: string; href: string; icon: MenuIconName }[] = [
  ...footerDaySpaPages.map((l) => ({ ...l, icon: "lotus" as const })),
  { ...footerDaySpaLink, icon: "stones" },
  { label: "Price List", href: "/seminyak/", icon: "tag" },
  ...footerHomeServices.items.map((l, i) => ({ ...l, icon: (["home", "hotel", "pin"] as const)[i] ?? "home" })),
];

function PhoneRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="site-footer__row">
      <span className="site-footer__row-icon">{icon}</span>
      <span className="site-footer__row-label">{label}</span>
      <span className="site-footer__row-value">{children}</span>
    </li>
  );
}

/**
 * Site footer (owner, 2 Oct: "can we also modernize the footer"; of three
 * designs the owner picked this one, "opsi 1"), in the look of the mobile
 * menu: a paper panel with rounded corners; on its left the logo, the about
 * text, the accepted payments and the newsletter (left out on phones, as
 * live); on its right the "Visit us" card of rows (hours, address to Google
 * Maps, WhatsApp, the home service fee, Instagram) and the "Explore" card of
 * pages. Under the panel the copyright line. The old footer's rose line art
 * ("the flower art from before"), in gold, fills the empty sides on wide
 * screens and the panel's bottom corners below 1500px. The newsletter posts to
 * /api/subscribe/ and shows the reply under the field for 5 seconds, as on
 * the live site. Styles: src/styles/footer.css.
 */
const DAY_SPA = "day spa in Seminyak";
const [aboutBefore, aboutAfter = ""] = business.aboutText.split(DAY_SPA);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const updated = PAGE_UPDATED.get(pathOf(usePathname() || "/"));

  async function subscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message || "Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Subscription failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
    }
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  }

  return (
    <footer className="site-footer lh">
      <div className="site-footer__art" aria-hidden="true">
        <img loading="lazy" decoding="async" src="/images/shape/footer-shape-left.png" alt="" className="site-footer__rose" />
        <img
          loading="lazy"
          decoding="async"
          src="/images/shape/footer-shape-left.png"
          alt=""
          className="site-footer__rose site-footer__rose--right"
        />
      </div>
      <div className="container">
        <div className="site-footer__panel">
          {/* Below 1500px, where the sides have no room: the same roses in the
              panel's bottom corners, under the content. */}
          <div className="site-footer__panel-art" aria-hidden="true">
            <img loading="lazy" decoding="async" src="/images/shape/footer-shape-left.png" alt="" className="site-footer__corner-rose" />
            <img
              loading="lazy"
              decoding="async"
              src="/images/shape/footer-shape-left.png"
              alt=""
              className="site-footer__corner-rose site-footer__corner-rose--right"
            />
          </div>
          <div className="site-footer__brand">
            <Link prefetch={false} href="/" className="site-footer__logo">
              {/* The SVG's proportions (viewBox 476 x 95), so its height is kept
                  before it loads; footer.css sets the width. */}
              <img
                loading="lazy"
                decoding="async"
                src="/images/logo/SMBtitle-footer.svg"
                alt={business.name}
                width="499"
                height="100"
              />
            </Link>
            <p className="site-footer__about">
              {/* "day spa in Seminyak" links to the homepage (owner, 25 Oct). */}
              {aboutBefore}
              <Link prefetch={false} href="/">
                {DAY_SPA}
              </Link>
              {aboutAfter}{" "}
              {/* AEO roadmap R14 (17 Oct). */}
              <Link prefetch={false} href="/about/" className="site-footer__about-link">
                About Spa Bali Moon
              </Link>
            </p>
            <div className="site-footer__payments">
              <p className="site-footer__label">Accepted Payments</p>
              <div className="footer__payment-list">
                <span className="footer__payment-card" role="img" aria-label="Mastercard">
                  <svg width="40" height="25" viewBox="0 0 48 30" fill="none" aria-hidden="true">
                    <circle cx="18.5" cy="15" r="11.5" fill="#EB001B" />
                    <circle cx="29.5" cy="15" r="11.5" fill="#F79E1B" />
                    <path d="M24 6.06a11.48 11.48 0 0 0 0 17.88 11.48 11.48 0 0 0 0-17.88Z" fill="#FF5F00" />
                  </svg>
                </span>
                <span className="footer__payment-card" role="img" aria-label="Visa">
                  <span className="footer__payment-visa">VISA</span>
                </span>
                <span className="footer__payment-card" role="img" aria-label="Cash">
                  <svg width="28" height="19" viewBox="0 0 26 18" fill="none" aria-hidden="true">
                    <rect x="1" y="1" width="24" height="16" rx="3" fill="#EDF5EF" stroke="#2F7D5B" strokeWidth="1.5" />
                    <circle cx="13" cy="9" r="3.6" fill="none" stroke="#2F7D5B" strokeWidth="1.5" />
                    <path d="M4.6 4.6h1.8M19.6 13.4h1.8" stroke="#2F7D5B" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="footer__payment-label">Cash</span>
                </span>
              </div>
            </div>
            <div className="site-footer__newsletter-block">
              <p className="site-footer__label">Join Our Newsletter</p>
              <form className="site-footer__newsletter" onSubmit={subscribe}>
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  required
                />
                <button type="submit" className="btn-two" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Subscribe"}
                </button>
              </form>
              {message ? (
                <p className="site-footer__note" style={{ color: status === "success" ? "#28a745" : "#dc3545" }}>
                  {message}
                </p>
              ) : (
                <p className="site-footer__note">Just the occasional note about new treatments and offers.</p>
              )}
            </div>
          </div>

          <div className="site-footer__phone">
            <p className="site-footer__kicker">Visit us</p>
            <ul className="site-footer__rows">
              <PhoneRow icon={<MenuIcon name="clock" />} label="Open daily">
                {business.openingHours.display}
              </PhoneRow>
              <PhoneRow icon={<MenuIcon name="pin" />} label="Address">
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {business.address.short}
                </a>
              </PhoneRow>
              <PhoneRow icon={<i className="fa-brands fa-whatsapp" aria-hidden="true" />} label="WhatsApp">
                <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer">
                  {business.phoneDisplay}
                </a>
              </PhoneRow>
              <PhoneRow icon={<MenuIcon name="home" />} label="Home service">
                <Link prefetch={false} href="/outcall-home-service-massage/">
                  {business.homeService.feeDisplay}
                </Link>
              </PhoneRow>
              {SOCIAL.map((s) => (
                <PhoneRow
                  key={s.label}
                  label={s.label}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      {s.icon}
                    </svg>
                  }
                >
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    @{s.href.replace(/\/$/, "").split("/").pop()}
                  </a>
                </PhoneRow>
              ))}
            </ul>
            <p className="site-footer__kicker">Explore</p>
            <ul className="site-footer__rows site-footer__nav">
              {PHONE_LINKS.map((item) => (
                <li key={item.href} className="site-footer__row">
                  <span className="site-footer__row-icon">
                    <MenuIcon name={item.icon} />
                  </span>
                  <Link prefetch={false} href={item.href} className="site-footer__nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom site-footer__bottom">
          <p className="copyright-text">
            All Rights Reserved © {new Date().getFullYear()}{" "}
            <Link prefetch={false} href="/">
              {business.name}
            </Link>
            {updated ? (
              <>
                {" "}
                <span className="site-footer__updated">
                  <span className="site-footer__sep">·</span> Page updated <time dateTime={updated}>{formatDate(updated)}</time>
                </span>
              </>
            ) : null}
          </p>
          <ul className="site-footer__legal">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link prefetch={false} href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
