import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Body from "@/content/pages/contact";
import { contactPage } from "@/data/pages/contact";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import { pageSchema } from "@/lib/schema";

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: contactPage.seo.title,
  description: contactPage.seo.description,
  path: contactPage.path,
});

/** /contact/ — the live page (src/content/pages/contact.tsx). */
export default async function ContactPage() {
  const { render } = await getI18n();
  return render(
    <>
      <JsonLd data={pageSchema("Contact", "/contact/")} />
      <Body />
    </>
  );
}
