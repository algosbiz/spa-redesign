import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { mobileMenuData } from "@/components/layout/mobileMenuData";
import JsonLd from "@/components/seo/JsonLd";
import DecorationEdgeClamp from "@/components/ui/DecorationEdgeClamp";
import HydrateLater from "@/components/ui/HydrateLater";
import { spaSchema } from "@/lib/schema";

/** Every page except the 404: header, the page inside <main>, footer. */
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Lets keyboard users skip the 23-item treatments menu */}
      <a
        href="#main-content"
        className="sr-only rounded bg-ink px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>
      {/* The spa's own structured data, on every page (AEO roadmap, 17 Oct). */}
      <JsonLd data={spaSchema()} />
      <Header menu={await mobileMenuData()} />
      <main id="main-content">{children}</main>
      {/* Keeps the main pages' corner decorations off the torn edges. */}
      <DecorationEdgeClamp />
      {/* Wakes up after the page above it (see HydrateLater). */}
      <HydrateLater>
        <Footer />
      </HydrateLater>
    </>
  );
}
