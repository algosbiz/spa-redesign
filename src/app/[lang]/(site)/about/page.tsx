import type { Metadata } from "next";
import Body from "@/content/pages/about";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: "About Spa Bali Moon | Day Spa in Seminyak Since 2009",
  description:
    "A day spa in Seminyak since 2009. Meet our therapists, see the products we use and how we keep every room clean, and find us on Jl. Pangkung Sari.",
  path: "/about/",
});

/** /about/ — who the spa is (AEO roadmap R14, 17 Oct; src/content/pages/about.tsx). */
export default async function AboutPage() {
  const { render } = await getI18n();
  return render(<Body />);
}
