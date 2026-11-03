"use client";

import { useI18n } from "@/i18n/client";
import { localeSettings, localesWithPage } from "@/i18n/config";
import { useSitePath } from "@/i18n/useSitePath";

/**
 * The languages this page is in, each a link to the same page on its own
 * domain (src/i18n/config.ts); the current one is marked. Nothing while the
 * page exists in one language only, as every page does until a second
 * language goes live. Styles: src/styles/i18n.css.
 */
export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { t, locale } = useI18n();
  const path = useSitePath() || "/";
  const pageLocales = localesWithPage(path);
  if (pageLocales.length < 2) return null;
  // The names stay in their own language: not translated.
  return (
    <ul className={`lang-switch ${className}`} aria-label={t("Language")}>
      {pageLocales.map((other) => {
        const { origin, htmlLang, hreflang, nativeName } = localeSettings[other];
        return (
          <li key={other}>
            {other === locale ? (
              <span className="lang-switch__current" aria-current="true" lang={htmlLang}>
                {nativeName}
              </span>
            ) : (
              <a href={origin + path} hrefLang={hreflang} lang={htmlLang}>
                {nativeName}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
