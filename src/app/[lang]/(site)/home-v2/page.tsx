import type { Metadata } from "next";
import HomeLayout from "@/components/home/HomeLayout";
import PopularTreatments from "@/components/home/drafts/PopularTreatments";
import TreatmentMenu from "@/components/home/drafts/TreatmentMenu";
import { home } from "@/data/pages/home";
import { pageMetadata } from "@/i18n/metadata";
import "@/styles/home-v2.css";

// A design draft: kept out of search results.
export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: home.seo.title,
  description: home.seo.description,
  path: "/home-v2/",
  index: false,
});

/**
 * Homepage v2 — a light layout pass over the live homepage, same content,
 * colours, type and decorations. Sections that changed are the
 * redesigned ones in src/components/home. Every override is in
 * src/styles/home-v2.css under `.home-v2`, so / stays identical to live.
 *
 * Changes: a photo hero (text left, treatment photo right) with buttons and
 * three facts; the 23-treatment slider replaced by five popular treatment
 * cards and a button to the price list; each spa-menu treatment shows its
 * "from" price in its row; reviews moved between the menu and the packages;
 * the package intro folded into the packages heading; "What makes us
 * different" as a 2×2 grid beside its heading; on phones compact steps and
 * reasons, and the popular cards and packages in rows that scroll sideways
 * (arrows, dots, swipe or drag).
 */
export default function HomeV2Page() {
  return <HomeLayout treatments={<PopularTreatments />} menu={<TreatmentMenu />} />;
}
