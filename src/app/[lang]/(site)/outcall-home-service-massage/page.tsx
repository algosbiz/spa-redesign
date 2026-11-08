import type { Metadata } from "next";
import Body from "@/content/pages/outcall-home-service-massage";
import { homeServicePage as page } from "@/data/pages/home-service";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: page.path,
});

/** /outcall-home-service-massage/ — the live page, built from the shared live sections. */
export default async function OutcallPage() {
  const { render } = await getI18n();
  return render(<Body />);
}
