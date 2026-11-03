import type { Metadata } from "next";
import Body from "@/content/pages/privacy-policy";
import { privacyPolicyPage as page } from "@/data/pages/privacy-policy";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: page.seo.title,
  description: page.seo.description,
  path: page.path,
});

/** /privacy-policy/ — the live page (src/content/pages/privacy-policy.tsx). */
export default async function PrivacyPolicyPage() {
  const { render } = await getI18n();
  return render(<Body />);
}
