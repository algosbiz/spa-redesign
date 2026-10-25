import type { ReactNode } from "react";
import About from "@/components/home/About";
import ReserveCta from "@/components/home/ReserveCta";
import Steps from "@/components/home/Steps";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Packages from "@/components/home/Packages";
import WhyDifferent from "@/components/home/WhyDifferent";
import VisitUs from "@/components/sections/VisitUs";
import Testimonials from "@/components/sections/Testimonials";
import HydrateLater from "@/components/ui/HydrateLater";

/**
 * The v2 homepage, section by section. The treatments section, the spa menu
 * and the FAQ are slots, so the homepage (the former /home-v3/) and the
 * drafts /home-v2/ and /home-v4/ are the same page with different options in
 * them (see /home-v2/options/). `className` adds a page's own class (the
 * homepage's is `home-v3`) for styles only that page gets; `aboutSubTitle`
 * replaces the About section's kicker.
 */
export default function HomeLayout({
  treatments,
  menu,
  faq = <Faq />,
  className,
  aboutSubTitle,
}: {
  treatments: ReactNode;
  menu: ReactNode;
  faq?: ReactNode;
  className?: string;
  aboutSubTitle?: string;
}) {
  // Everything under the hero wakes up after it, in small steps
  // (HydrateLater), so the page never blocks a slow phone for long.
  return (
    <div className={`page-wrapper lh p-home home-v2${className ? ` ${className}` : ""}`}>
      <Hero />
      <HydrateLater>
        <Steps />
      </HydrateLater>
      <HydrateLater>
        <About subTitle={aboutSubTitle} />
      </HydrateLater>
      <HydrateLater>{treatments}</HydrateLater>
      <HydrateLater>{menu}</HydrateLater>
      <HydrateLater>
        <Testimonials />
      </HydrateLater>
      <HydrateLater>
        <Packages />
      </HydrateLater>
      <HydrateLater>
        <WhyDifferent />
      </HydrateLater>
      {/* The spa itself, in Seminyak: address, hours, booking (owner, 25 Oct: help the homepage for
          "spa seminyak"; the same section as on the treatment pages and About). */}
      <HydrateLater>
        <VisitUs
          treatment="a treatment"
          title="Visit Our Day Spa in Seminyak"
          look="columns"
          note="The spa has showers and Wi-Fi for guests."
        />
      </HydrateLater>
      <HydrateLater>{faq}</HydrateLater>
      <HydrateLater>
        <ReserveCta />
      </HydrateLater>
    </div>
  );
}
