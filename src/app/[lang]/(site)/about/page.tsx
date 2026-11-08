import type { Metadata } from "next";
import Body from "@/content/pages/about";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: "About Spa Bali Moon - Seminyak Day Spa Since 2009",
  description:
    "Spa Bali Moon has offered Balinese massage and spa treatments in Seminyak since 2009: our therapists, the products we use, hygiene, and how to find us.",
  path: "/about/",
});

/** /about/ — who the spa is (AEO roadmap R14, 17 Oct; src/content/pages/about.tsx). */
export default async function AboutPage() {
  const { render } = await getI18n();
  return render(<Body />);
}
