import type { Metadata } from "next";
import Body from "@/content/pages/terms-and-conditions";
import { termsPage as page } from "@/data/pages/terms-and-conditions";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: page.path,
});

/** /terms-and-conditions/ — the live page (src/content/pages/terms-and-conditions.tsx). */
export default async function TermsAndConditionsPage() {
  const { render } = await getI18n();
  return render(<Body />);
}
