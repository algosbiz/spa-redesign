import type { Metadata } from "next";
import MenuDurations from "@/components/home/MenuDurations";
import FeaturedPackage from "@/components/pricelist/FeaturedPackage";
import PackageGroups from "@/components/pricelist/PackageGroups";
import { menuTabs } from "@/components/pricelist/menuTabs";
import FaqSection from "@/components/sections/FaqSection";
import PackageIntro from "@/components/sections/PackageIntro";
import PageBanner from "@/components/sections/PageBanner";
import ReserveCta from "@/components/sections/ReserveCta";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { priceListSchema } from "@/lib/schema";
import HomeServiceLine from "@/components/sections/HomeServiceLine";
import Testimonials from "@/components/sections/Testimonials";
import VideoSection from "@/components/sections/VideoSection";
import { priceListHomeServiceLine } from "@/data/homeServiceLines";
import { pricelistPage as page } from "@/data/pages/pricelist";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: page.path,
});

/** Two words, a line break, the rest — how the live page sets the two facts. */
const stat = ([first, rest]: [string, string]) => (
  <>
    {`${first} `}
    <br className="jsx-pricelist" />
    {` ${rest}`}
  </>
);

/**
 * /seminyak/ — the price list, section for section as live. `p-pricelist`
 * scopes the page's own live styles (src/styles/live.css). The price list
 * itself is the homepage one (prices by duration) since 1 October, on the
 * owner's request, with this page's own heading, tabs and prices.
 */
export default function PricelistPage() {
  const { menu } = page;
  return (
    <div className="page-wrapper lh p-pricelist">
      <FaqJsonLd items={page.faq.items} />
      <JsonLd data={priceListSchema()} />
      <PageBanner {...page.banner} />
      {/* 20 Oct dev brief, Task 6: one sentence to the outcall page, before the first section. */}
      <HomeServiceLine text={priceListHomeServiceLine} />
      <VideoSection {...menu} firstStat={stat(menu.firstStat)} secondStat={stat(menu.secondStat)} />
      <div className="jsx-pricelist pricing-package-section">
        <MenuDurations
          subTitle={page.priceList.subTitle}
          title={page.priceList.title}
          intro={page.priceList.text}
          tabs={menuTabs(page.priceList.tabs)}
          spacing="pt-130 pb-130"
          sticky
        />
      </div>
      <PackageIntro {...page.packagesIntro} />
      {/* The new special first (owner, 25 Oct). */}
      <PackageGroups groups={page.packageGroups} icons={page.packageIcons} featured={<FeaturedPackage />} />
      <Testimonials />
      <div className="jsx-pricelist pricing-faq-section">
        <FaqSection {...page.faq} imageTitleAsHeading />
      </div>
      <div className="jsx-pricelist pricing-closing-section section__decoration-top section__decoration-bottom bg-sub">
        <ReserveCta standardSpacing {...page.reserve} />
      </div>
    </div>
  );
}
