import type { Metadata } from "next";
import Body from "@/content/pages/massage-kuta";
import { kutaPage as page } from "@/data/pages/massage-kuta";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: page.path,
});

/** /massage-kuta/ — the live page, built from the shared live sections (src/content/pages/massage-kuta.tsx). */
export default async function MassageKutaPage() {
  const { render } = await getI18n();
  return render(<Body />);
}
