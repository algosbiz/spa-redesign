import type { Metadata } from "next";
import Body from "@/content/pages/villa-hotel-massage";
import { villaHotelPage as page } from "@/data/pages/villa-hotel-massage";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: page.path,
});

/** /villa-hotel-massage/ — the live page, built from the shared live sections (src/content/pages/villa-hotel-massage.tsx). */
export default async function VillaHotelMassagePage() {
  const { render } = await getI18n();
  return render(<Body />);
}
