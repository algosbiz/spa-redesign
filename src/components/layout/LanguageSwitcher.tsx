"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useI18n } from "@/i18n/client";
import { localePath, localeSettings, localesWithPage, type Locale } from "@/i18n/config";
import { useSitePath } from "@/i18n/useSitePath";

/** A language's flag (public/images/flags/), beside its name, so the image itself says nothing. */
const Flag = ({ locale }: { locale: Locale }) => (
  // eslint-disable-next-line @next/next/no-img-element -- a 21px SVG: nothing for the optimiser to do
  <img src={`/images/flags/${localeSettings[locale].flag}.svg`} alt="" width="21" height="14" className="lang-menu__flag" />
);

/**
 * The language switcher: a button with the page's flag that opens the
 * languages this page is in, each with its flag and its own name, a link to
 * the same page in that language's folder (/about/, /ja/about/:
 * src/i18n/config.ts); the current one is ticked. Nothing while the page
 * exists in one language only, as every page does in production until a
 * second language goes live; a language in preview (I18N_PREVIEW_LOCALES)
 * shows here, on localhost and previews.
 *
 * Two places (Header.tsx), the button the flag alone: the header from
 * 1200px (`look="circle"`, a cream circle like the search button; the
 * header has no room for a code and an arrow beside "Book an Appointment"),
 * and below that the phone menu's top row, left of the logo
 * (`look="square"`, a white square like the close button).
 * Escape, a click outside or focus leaving it closes the list. Its links are
 * not passed through el(), which would point the English one at the page's
 * own language. Styles: src/styles/i18n.css.
 */
export default function LanguageSwitcher({ look, id }: { look: "circle" | "square"; id: string }) {
  const { t, locale, languages } = useI18n();
  const path = useSitePath() || "/";
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const pageLocales = localesWithPage(path, languages);
  if (pageLocales.length < 2) return null;

  // Escape closes the list only, not the phone menu around it.
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Escape" || !open) return;
    e.stopPropagation();
    setOpen(false);
    buttonRef.current?.focus();
  };

  const current = localeSettings[locale];
  return (
    <div
      ref={rootRef}
      className={`lang-menu lang-menu--${look}${open ? " is-open" : ""}`}
      onKeyDown={onKeyDown}
      onBlur={(e) => {
        if (open && !rootRef.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="lang-menu__button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`${t("Language")}: ${current.nativeName}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Flag locale={locale} />
      </button>
      <ul id={id} className="lang-menu__list">
        {pageLocales.map((other) => {
          const { htmlLang, hreflang, nativeName } = localeSettings[other];
          const here = other === locale;
          return (
            <li key={other}>
              <a
                href={localePath(path, other)}
                hrefLang={hreflang}
                lang={htmlLang}
                aria-current={here ? "true" : undefined}
                className="lang-menu__item"
                onClick={() => setOpen(false)}
              >
                <Flag locale={other} />
                <span className="lang-menu__name">{nativeName}</span>
                {here && (
                  <svg className="lang-menu__tick" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7.2l2.6 2.6L11 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
