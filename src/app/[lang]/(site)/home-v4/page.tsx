import type { Metadata } from "next";
import HomeLayout from "@/components/home/HomeLayout";
import AllTreatmentsGrid from "@/components/home/drafts/AllTreatmentsGrid";
import MenuTable from "@/components/home/drafts/MenuTable";
import { home } from "@/data/pages/home";
import { pageMetadata } from "@/i18n/metadata";
import "@/styles/home-v2.css";
import "@/styles/home-v2-options.css";

// A design draft: kept out of search results.
export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: home.seo.title,
  description: home.seo.description,
  path: "/home-v4/",
  index: false,
});

/**
 * Homepage v4 — /home-v2/ with treatments option 2 (every treatment as a
 * tile, filtered Massage / Beauty) and price-list option B (price tables).
 */
export default function HomeV4Page() {
  return <HomeLayout treatments={<AllTreatmentsGrid />} menu={<MenuTable />} />;
}
