import type { Metadata } from "next";
import GuideArchive from "@/components/sections/GuideArchive";
import JsonLd from "@/components/seo/JsonLd";
import { blogArchivePage } from "@/data/pages/blog";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import { getPublishedPosts } from "@/lib/blog/posts";
import { blogIndexSchema } from "@/lib/schema";

// Built once and kept until an article is saved in /admin/ (which rebuilds it),
// so visitors never wake the database. A database error while rebuilding is
// thrown on purpose: Next then keeps serving the last good page.
export const revalidate = false;

export const generateMetadata = (): Promise<Metadata> => pageMetadata({
  title: blogArchivePage.seo.title,
  description: blogArchivePage.seo.description,
  path: blogArchivePage.path,
});

/** /guide/ — every published article, newest first, with the Blog structured data. */
export default async function GuideArchivePage() {
  const { render, locale } = await getI18n();
  const posts = await getPublishedPosts(locale);
  return render(
    <>
      <JsonLd
        data={blogIndexSchema({
          path: blogArchivePage.path,
          name: "Massage Guides",
          description: blogArchivePage.seo.description,
          posts,
        })}
      />
      <GuideArchive posts={posts} />
    </>
  );
}
