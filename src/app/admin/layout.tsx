import type { Metadata, Viewport } from "next";
import RootDocument from "@/components/layout/RootDocument";
import { siteMetadata } from "@/lib/seo";
import "@/styles/admin.css";

export const metadata: Metadata = {
  ...siteMetadata(),
  title: { absolute: "Content Studio" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
};

/**
 * The admin (/admin/: articles, treatment pages, redirects): a root layout of
 * its own, outside the site's languages (src/app/[lang]/), so no header or
 * footer, and outside every `.lh` subtree, so the live theme CSS stays away
 * from it. It is in English only, on spabalimoon.com.
 * data-lenis-prevent keeps smooth scrolling off the editor's text fields.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument>
      <div className="adm-root" data-lenis-prevent="">
        {children}
      </div>
    </RootDocument>
  );
}
