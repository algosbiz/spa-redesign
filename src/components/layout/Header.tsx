"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import MainMenu from "@/components/layout/MainMenu";
import { MenuIcon } from "@/components/layout/MenuIcons";
import MobileMenu from "@/components/layout/MobileMenu";
import type { MobileMenuData } from "@/components/layout/mobileMenuData";
import HydrateLater from "@/components/ui/HydrateLater";
import { LotusPaths } from "@/components/ui/Lotus";
import { business } from "@/data/business";
import { searchIndex } from "@/data/navigation";
import { useI18n } from "@/i18n/client";
import { defaultLocale, linkFor } from "@/i18n/config";
import { useSitePath } from "@/i18n/useSitePath";
import { whatsappChatUrl } from "@/lib/whatsapp";

type Sidebar = "closed" | "open" | "closing";


/**
 * Site header, search and off-canvas menu — the live "HeaderOne" component,
 * markup and behaviour included:
 *   - `menu-fixed` once the page has scrolled past 100px;
 *   - the search opens a dropdown, matches titles and keywords, Enter goes to
 *     the first result, Escape or a click outside closes it;
 *   - the sidebar slides out over 400ms ("closing") before it unmounts.
 * Every root element carries `lh` so src/styles/live.css applies.
 * `menu` (built on the server, src/app/(site)/layout.tsx) fills the mobile
 * menu's Treatments and Blog panels and the desktop Blog dropdown.
 */
export default function Header({ menu }: { menu: MobileMenuData }) {
  const { el, t, locale } = useI18n();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [sidebar, setSidebar] = useState<Sidebar>("closed");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathname = useSitePath();
  const [lastPath, setLastPath] = useState(pathname);

  // Another language searches its own titles, and the English ones as keywords.
  const index = useMemo(
    () =>
      locale === defaultLocale
        ? searchIndex
        : searchIndex.map((e) => ({ ...e, title: t(e.title), keywords: `${e.keywords} ${e.title.toLowerCase()}` })),
    [locale, t],
  );
  const q = query.trim().toLowerCase();
  const results = q ? index.filter((e) => e.title.toLowerCase().includes(q) || e.keywords.includes(q)) : [];

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };
  const closeSidebar = () => setSidebar((s) => (s === "open" ? "closing" : s));

  // Another page (a link, or Back) closes the menu.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (sidebar === "open") setSidebar("closing");
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sidebar !== "closing") return;
    const t = window.setTimeout(() => setSidebar("closed"), 400);
    return () => window.clearTimeout(t);
  }, [sidebar]);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  // While the menu is open: the page behind it stays put, Escape closes it,
  // and focus moves into it and back to the menu button afterwards.
  useEffect(() => {
    if (sidebar !== "open") return;
    const root = document.documentElement;
    const drawer = drawerRef.current;
    const menuButton = menuButtonRef.current;
    root.classList.add("mnav-open");
    closeButtonRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebar("closing");
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.classList.remove("mnav-open");
      document.removeEventListener("keydown", onKey);
      if (drawer?.contains(document.activeElement)) menuButton?.focus({ preventScroll: true });
    };
  }, [sidebar]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    const onDown = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) closeSearch();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [searchOpen]);

  return el(
    <>
      <header className={`jsx-header header-area header-three-area ${scrolled ? "menu-fixed" : ""} lh`}>
        <div className="jsx-header header-one__wrp">
          <div className="jsx-header header__main">
            <Link prefetch={false} href="/" className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element -- the live site's plain <img> */}
              <img src="/images/logo/SMBtitle.svg" alt="logo" width="444" height="80" className="jsx-header" />
            </Link>
            <div className="jsx-header main-menu">
              <nav className="jsx-header">
                <MainMenu posts={menu.posts} />
              </nav>
            </div>
            <div className="jsx-header menu-btns">
              <LanguageSwitcher look="bar" id="lang-menu-header" />
              <div ref={searchRef} className="jsx-header header-search d-none d-lg-block">
                <button
                  onClick={() => setSearchOpen((v) => !v)}
                  aria-label="Search"
                  aria-expanded={searchOpen}
                  className="jsx-header search-trigger"
                >
                  <i className={`jsx-header fa-light ${searchOpen ? "fa-xmark" : "fa-magnifying-glass"}`} />
                </button>
                <div className={`jsx-header header-search__dropdown ${searchOpen ? "is-open" : ""}`}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (results.length > 0) {
                        router.push(linkFor(results[0].href, locale));
                        closeSearch();
                      }
                    }}
                    className="jsx-header header-search__form"
                  >
                    <i className="jsx-header fa-light fa-magnifying-glass header-search__form-icon" />
                    <input
                      ref={inputRef}
                      type="search"
                      placeholder="Search treatments, pages..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="jsx-header header-search__input"
                    />
                  </form>
                  {q && (
                    <ul className="jsx-header header-search__results">
                      {results.length > 0 ? (
                        results.map((r) => (
                          <li key={r.href + r.title} className="jsx-header">
                            <Link prefetch={false} href={r.href} className="header-search__result" onClick={closeSearch}>
                              <i className="jsx-header fa-light fa-arrow-right-long" />
                              <span className="jsx-header">{r.title}</span>
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li className="jsx-header header-search__empty">
                          {t("No results for “{query}”", { query: query.trim() })}
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="jsx-header book-now d-none d-xxl-inline-block"
              >
                Book an Appointment
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="jsx-header"
                >
                  <LotusPaths fill="currentColor" className="jsx-header" />
                </svg>
              </a>
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Spa Bali Moon on WhatsApp"
                className="jsx-header header-call d-flex d-lg-none"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="jsx-header"
                >
                  <path
                    d="M17.6 14.3l-2.4-.3c-.6-.1-1.1.1-1.5.5l-1.7 1.7a13.1 13.1 0 0 1-5.8-5.8l1.7-1.7c.4-.4.6-.9.5-1.5l-.3-2.4A1.5 1.5 0 0 0 6.6 3.5H5C4.1 3.5 3.4 4.2 3.5 5.1 4 12.1 9.9 18 16.9 18.5c.9.1 1.6-.6 1.6-1.5v-1.6c0-.8-.6-1.4-1.4-1.5z"
                    className="jsx-header"
                  />
                </svg>
              </a>
              <button
                ref={menuButtonRef}
                onClick={() => setSidebar("open")}
                type="button"
                aria-controls="menubar"
                aria-expanded={sidebar === "open"}
                aria-label="Open menu"
                className="jsx-header menubars d-lg-none"
              >
                {/* Hot stones in a white square (client, 3 Oct: "a hot stone icon inside a white square") */}
                <MenuIcon name="stones" className="menubars__icon" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {sidebar !== "closed" && (
        <div
          onClick={closeSidebar}
          aria-hidden="true"
          data-lenis-prevent
          className={`jsx-header sidebar-backdrop${sidebar === "open" ? " is-visible" : ""} lh`}
        />
      )}
      {/* The menu (owner, 2 Oct: "modernize the menu"): the whole screen on
          phones, 420px from the right on tablets; its top row repeats the
          header (logo in the middle, the close button where the menu button was).
          Styles: src/styles/mobile-nav.css. */}
      <div
        ref={drawerRef}
        id="menubar"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={sidebar === "closed"}
        inert={sidebar === "closed"}
        data-lenis-prevent
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget && e.propertyName === "transform" && sidebar === "closing") setSidebar("closed");
        }}
        className={`jsx-header sidebar-area sidebar-area--white offcanvas offcanvas-end mnav ${sidebar === "open" ? "show" : ""} ${
          sidebar === "closing" ? "hiding" : ""
        } lh`}
      >
        <div className="jsx-header offcanvas-header mnav__top">
          <LanguageSwitcher look="square" id="lang-menu-mnav" />
          <Link prefetch={false} href="/" onClick={closeSidebar} className="logo offcanvas-logo mnav__logo">
            {/* eslint-disable-next-line @next/next/no-img-element -- the live site's plain <img> */}
            <img src="/images/logo/SMBtitle.svg" alt={business.name} width="444" height="80" className="jsx-header" />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeSidebar}
            aria-label="Close menu"
            className="jsx-header mnav__close"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="jsx-header offcanvas-body mnav__body">
          {/* About 400 elements that stay off screen until the menu opens:
              they wake up after the page (see HydrateLater). */}
          <HydrateLater>
            <MobileMenu data={menu} open={sidebar === "open"} onNavigate={closeSidebar}>
              <div className="mnav__card mnav__anim" style={{ "--i": 7 } as CSSProperties}>
                <ul className="mnav__info">
                  <li>
                    <i className="fa-light fa-clock" aria-hidden="true" />
                    <span>
                      {business.openingHours.label} · {business.openingHours.display}
                    </span>
                  </li>
                  <li>
                    <i className="fa-light fa-location-dot" aria-hidden="true" />
                    <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {business.address.full}
                    </a>
                  </li>
                  <li>
                    <i className="fa-light fa-phone-volume" aria-hidden="true" />
                    <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer">
                      {business.phoneDisplay}
                    </a>
                  </li>
                </ul>
                <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer" className="btn-two mnav__cta">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                  Book on WhatsApp
                </a>
              </div>
            </MobileMenu>
          </HydrateLater>
        </div>
      </div>
    </>
  );
}
