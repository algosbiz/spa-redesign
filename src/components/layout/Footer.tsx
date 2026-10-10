"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { MenuIcon, type MenuIconName } from "@/components/layout/MenuIcons";
import { business } from "@/data/business";
import { footerDaySpaLink, footerHomeServices, legalLinks } from "@/data/navigation";
import { whatsappChatUrl } from "@/lib/whatsapp";

type Status = "idle" | "loading" | "success" | "error";

/** Instagram and Facebook, drawn like the other line icons. */
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
  {
    label: "Facebook",
    href: business.social.facebook,
    icon: <path d="M14.5 8.5h2.5V5h-2.5A3.5 3.5 0 0 0 11 8.5V11H8.5v3.5H11V21h3.5v-6.5H17l.5-3.5h-3V9a.5.5 0 0 1 .5-.5z" />,
  },
];

/** A white card in the footer panel: its icon in a circle, its title, then its lines. */
function Card({
  icon,
  title,
  className = "",
  children,
}: {
  icon: MenuIconName;
  title: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`site-footer__card ${className}`.trim()}>
      <div className="site-footer__card-head">
        <span className="site-footer__icon">
          <MenuIcon name={icon} />
        </span>
        <div className="site-footer__card-title">{title}</div>
      </div>
      {children}
    </div>
  );
}

/**
 * Site footer (owner, 2 Oct: "can we also modernize the footer"; of three
 * designs the owner picked this one, "opsi 1"), in the look of the mobile
 * menu: a paper panel with rounded corners; on its left the logo, the about
 * text, a WhatsApp pill, Instagram and Facebook, and the accepted payments;
 * on its right white cards with a gold icon each: the day spa (hours, address
 * to Google Maps), contact (phone to WhatsApp), home services (the three
 * pages and the fee) and the newsletter (left out on phones, as live). Under
 * the panel the copyright line. The old footer's rose line art ("the flower
 * art from before"), in gold, fills the empty sides on wide screens and the
 * panel's bottom corners below 1500px.
 * Same content as live's five columns. The newsletter posts to
 * /api/subscribe/ and shows the reply under the field for 5 seconds, as on
 * the live site. Styles: src/styles/footer.css.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

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
            <p className="site-footer__about">{business.aboutText}</p>
            <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer" className="btn-two site-footer__cta">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Book on WhatsApp
            </a>
            <ul className="site-footer__social">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Spa Bali Moon on ${s.label}`}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
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
          </div>

          <div className="site-footer__cards">
            <Card
              icon="lotus"
              title={
                <Link prefetch={false} href={footerDaySpaLink.href}>
                  {footerDaySpaLink.label}
                </Link>
              }
            >
              <dl className="site-footer__fields">
                <div>
                  <dt>{business.openingHours.label}</dt>
                  <dd>{business.openingHours.display}</dd>
                </div>
                <div>
                  <dt>Address</dt>
                  <dd>
                    <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {business.address.short}
                    </a>
                  </dd>
                </div>
              </dl>
            </Card>
            <Card icon="chat" title="Contact Us">
              <dl className="site-footer__fields">
                <div>
                  <dt>Phone &amp; WhatsApp</dt>
                  <dd>
                    <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer">
                      {business.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
            </Card>
            <Card
              icon="home"
              title={
                <Link prefetch={false} href={footerHomeServices.href}>
                  {footerHomeServices.label}
                </Link>
              }
            >
              <ul className="site-footer__links">
                {footerHomeServices.items.map((item) => (
                  <li key={item.label}>
                    <Link prefetch={false} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <dl className="site-footer__fields">
                <div>
                  <dt>Home service fee</dt>
                  <dd>{business.homeService.feeDisplay}</dd>
                </div>
              </dl>
            </Card>
            <Card icon="mail" title="Join Our Newsletter" className="site-footer__newsletter-block">
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
            </Card>
          </div>
        </div>

        <div className="footer__bottom site-footer__bottom">
          <p className="copyright-text">
            All Rights Reserved © {new Date().getFullYear()}{" "}
            <Link prefetch={false} href="/">
              {business.name}
            </Link>
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
