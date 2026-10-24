import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Body from "@/content/pages/contact";
import { contactPage } from "@/data/pages/contact";
import { pageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: contactPage.seo.title,
  description: contactPage.seo.description,
  path: contactPage.path,
});

/** /contact/ — the live page (src/content/pages/contact.tsx). */
export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageSchema("Contact", "/contact/")} />
      <Body />
    </>
  );
}
