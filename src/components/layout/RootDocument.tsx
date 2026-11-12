import { fraunces, jakarta } from "@/app/fonts";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import MobileActionBar from "@/components/layout/MobileActionBar";
import Preloader from "@/components/layout/Preloader";
import SiteChrome from "@/components/layout/SiteChrome";
import SmoothScroll from "@/components/layout/SmoothScroll";
import HydrateLater from "@/components/ui/HydrateLater";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { I18nProvider } from "@/i18n/client";
import { defaultLocale, localeSettings, servedLocales, type Locale } from "@/i18n/config";
import { getI18n, getUiMessages } from "@/i18n/server";
import "@/app/globals.css";
import "@/styles/live.css";
import "@/styles/custom.css";
import "@/styles/gold.css";
import "@/styles/rollover.css";
import "@/styles/mobile-nav.css";
import "@/styles/footer.css";
import "@/styles/row-button.css";
import "@/styles/spacing.css";
import "@/styles/decorations.css";
import "@/styles/outcall.css";
import "@/styles/treat-cards.css";
import "@/styles/i18n.css";
import "@/styles/term.css";

/**
 * The <html> document every page shares: styles, fonts, the WhatsApp button,
 * the preloader and smooth scrolling (SiteChrome leaves those out of the blog
 * admin). The root layouts use it: src/app/[lang]/layout.tsx for the site,
 * src/app/admin/layout.tsx, and src/app/global-not-found.tsx for addresses
 * that match no page. The header, <main> and footer live in
 * [lang]/(site)/layout.tsx — the live 404 page has neither header nor footer.
 * I18nProvider gives Client Components the page's language, its translations
 * and the languages the site serves (the language switcher's list).
 */
export default async function RootDocument({
  locale = defaultLocale,
  children,
}: {
  locale?: Locale;
  children: React.ReactNode;
}) {
  const { render } = await getI18n();
  return (
    // `gold-b`: the owner's gold #B88C35 on every page (1 Oct). Remove the
    // class to go back to the live gold #A78627, which live.css still
    // defines, on every page (src/styles/gold.css).
    <html lang={localeSettings[locale].htmlLang} className={`gold-b ${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <I18nProvider locale={locale} messages={await getUiMessages(locale)} languages={servedLocales}>
          {children}
          {await render(
            <SiteChrome>
              <FloatingWhatsApp />
              <MobileActionBar />
              <Preloader />
              <SmoothScroll />
              {/* Marks [data-reveal] elements all over the page, so it starts only
                  once the sections that wake up late (HydrateLater) are awake:
                  React would otherwise find its marks on them as a mismatch. */}
              <HydrateLater>
                <ScrollReveal />
              </HydrateLater>
            </SiteChrome>,
          )}
        </I18nProvider>
        {/* Repaints single-colour gold images (logos, the lotus mark,
            treatment icons) in #B88C35, keeping their shape: see gold.css. */}
        <svg aria-hidden="true" focusable="false" width="0" height="0" style={{ position: "absolute" }}>
          <filter id="gold-b" colorInterpolationFilters="sRGB">
            <feFlood floodColor="#b88c35" />
            <feComposite in2="SourceAlpha" operator="in" />
          </filter>
        </svg>
      </body>
    </html>
  );
}
