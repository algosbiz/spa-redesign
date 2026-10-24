import type { Metadata } from "next";
import Faq from "@/components/home/Faq";
import HomeLayout from "@/components/home/HomeLayout";
import AllTreatmentsSlider from "@/components/home/AllTreatmentsSlider";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import MenuDurations from "@/components/home/MenuDurations";
import { home } from "@/data/pages/home";
import { buildMetadata } from "@/lib/seo";
import "@/styles/home-v2.css";
import "@/styles/home-v2-options.css";
import "@/styles/home-v3.css";

// Canonical, robots and Open Graph tags, as on live.
export const metadata: Metadata = buildMetadata({ title: home.seo.title, description: home.seo.description, path: "/" });

/**
 * Homepage — the owner's redesign, the "v3" draft made the homepage on
 * 1 October (the live-port homepage it replaced is in git). It is the v2
 * layout (src/components/home/HomeLayout.tsx) with treatments option 1
 * (all 23 treatments in a row that scrolls sideways) and price-list option A
 * (one duration switch sets every price, and stays under the header down the
 * list), plus the owner's changes: the slider, menu and About headings in the
 * owner's words, a plain grey FAQ arrow, tighter spacing in places, and the
 * owner's gold #B88C35, logos included (src/styles/gold.css; site-wide since
 * 1 October).
 * /home-v3/ now redirects here; the other drafts stay as they are.
 */
export default function HomePage() {
  return (
    <>
      {/* The spa's DaySpa data is in the site layout, on every page (17 Oct). */}
      <FaqJsonLd items={home.faq.items} />
      <HomeLayout
        className="home-v3"
        aboutSubTitle="About Us"
        treatments={
          <AllTreatmentsSlider
            subTitle="Massage & Beauty"
            title="Massage & Spa Treatments in Seminyak"
            text={
              <>
                {/* Copy rewrite, 15 Oct. The last words kept together so a
                    narrow phone does not leave one alone on a line. */}
                25 massage and spa treatments at our Seminyak spa, most of them also at your villa or hotel.
                Prices are per person;{" "}
                <span style={{ whiteSpace: "nowrap" }}>couple massage prices are for two.</span>
              </>
            }
          />
        }
        menu={<MenuDurations subTitle="Price List" title="Full Spa Menu: Massage, Facials & Body Treatments" sticky />}
        faq={<Faq arrow="line" />}
      />
    </>
  );
}
