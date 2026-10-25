import type { Metadata, Viewport } from "next";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import MobileActionBar from "@/components/layout/MobileActionBar";
import Preloader from "@/components/layout/Preloader";
import SiteChrome from "@/components/layout/SiteChrome";
import SmoothScroll from "@/components/layout/SmoothScroll";
import HydrateLater from "@/components/ui/HydrateLater";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { business } from "@/data/business";
import { fraunces, jakarta } from "./fonts";
import "./globals.css";
import "../styles/live.css";
import "../styles/custom.css";
import "../styles/gold.css";
import "../styles/rollover.css";
import "../styles/mobile-nav.css";
import "../styles/footer.css";
import "../styles/row-button.css";
import "../styles/spacing.css";
import "../styles/decorations.css";
import "../styles/outcall.css";
import "../styles/treat-cards.css";

/**
 * Defaults for search engines and social sharing. The title and description
 * below are the live homepage's, byte for byte; each page overrides them.
 */
export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "Spa Bali Moon - Outcall & Home Service Massage",
  description:
    "Our traditional Bali massage is available for outcall massage to your stay. Visit our spa or call for home service. Feel the signature warmth of Bali Moon.",
  icons: { shortcut: "/images/SMBlogo.ico" },
  openGraph: {
    siteName: business.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
};

/**
 * What every page shares, the 404 included: styles, fonts, the WhatsApp
 * button, the preloader and smooth scrolling (SiteChrome leaves those out of
 * the blog admin). The header, <main> and footer live in (site)/layout.tsx —
 * the live 404 page has neither header nor footer.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    // `gold-b`: the owner's gold #B88C35 on every page (1 Oct). Remove the
    // class to go back to the live gold #A78627, which live.css still
    // defines, on every page (src/styles/gold.css).
    <html lang="en" className={`gold-b ${fraunces.variable} ${jakarta.variable}`}>
      <body>
        {children}
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
        </SiteChrome>
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
