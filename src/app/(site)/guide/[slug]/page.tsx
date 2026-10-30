import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePost from "@/components/sections/GuidePost";
import SoftHeader from "@/components/sections/SoftHeader";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import GuideAnswer from "@/components/sections/GuideAnswer";
import { guideAnswers } from "@/data/guide/answers";
import { guideHomeServiceLines } from "@/data/guide/homeServiceLines";
import { faqFromHtml } from "@/lib/blog/faq";
import { getGuideArticle, getPublishedPost, getPublishedPosts } from "@/lib/blog/posts";
import { sanitizeHtml } from "@/lib/blog/sanitize";
import { linkedText } from "@/lib/linkedText";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Built once and kept until an article is saved in /admin/ (which rebuilds
// every article page); articles published later are rendered on their first
// visit. A database error is thrown on purpose: Next then keeps serving the
// last good page instead of caching an error or a false 404.
export const revalidate = false;

export async function generateStaticParams() {
  return (await getPublishedPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt || "",
    path: `/guide/${post.slug}/`,
    type: "article",
    shareImage: post.cover_image ?? undefined,
  });
}

/** A guide article (the live "blog-details" page), from the database. */
export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getGuideArticle(slug);
  if (!article) notFound();
  const { post, recentPosts, prevPost, nextPost, morePosts } = article;
  // Two sentences naming the spa, with the price and the treatment page (AEO roadmap, 17 Oct).
  const answer = guideAnswers[post.slug];
  // One sentence that links to the outcall page, after the text (20 Oct dev brief, Task 7).
  const homeServiceLine = guideHomeServiceLines[post.slug];
  // The header's reading time (SoftHeader; no dates shown, owner, 23 Oct).
  const words = (post.content_html || "").replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  const contentHtml = sanitizeHtml(post.content_html);

  return (
    <div className={`page-wrapper lh p-guide-${post.slug}`}>
      <JsonLd
        data={articleSchema({
          slug: post.slug,
          title: post.title,
          description: post.seo_description || post.excerpt,
          image: post.cover_image,
          author: post.author,
          publishedAt: post.published_at,
          updatedAt: post.updated_at,
        })}
      />
      {/* The article's own "Frequently asked questions" section, when it has one. */}
      <FaqJsonLd items={faqFromHtml(contentHtml)} />
      <SoftHeader
        title={post.title}
        kicker="Massage Guide"
        trail={[
          { label: "Home", href: "/" },
          { label: "Massage Guides", href: "/guide/" },
        ]}
        // Three older articles were saved with "Admin" as their author; the articles are the spa's own.
        meta={[`By ${post.author && post.author !== "Admin" ? post.author : "Spa Bali Moon"}`, `${minutes} min read`]}
        image={post.cover_image}
      />
      <GuidePost
        post={{ ...post, content_html: contentHtml }}
        recentPosts={recentPosts}
        prevPost={prevPost}
        nextPost={nextPost}
        morePosts={morePosts}
        answer={answer ? <GuideAnswer text={answer} /> : undefined}
        closing={homeServiceLine ? <p className="guide-home-service-line">{linkedText(homeServiceLine)}</p> : undefined}
      />
    </div>
  );
}
