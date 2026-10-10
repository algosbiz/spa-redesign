/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import PageTitle from "@/components/sections/PageTitle";
import type { PostSummary } from "@/lib/blog/types";

const FALLBACK_IMAGE = "/images/blog/blog-image1.jpg";

/**
 * /guide/ — the live blog archive ("NewsGrid"): one card per published
 * article, newest first, three to a row on wide screens.
 */
export default function GuideArchive({ posts }: { posts: PostSummary[] }) {
  return (
    <div className="page-wrapper lh p-guide">
      <PageTitle pageName="Bali Spa & Massage Guides" backgroundImage="/images/blog/blog-1.webp" />
      <section className="blog-section-two pt-120 pb-90">
        <div className="container">
          <div className="row">
            {posts.length === 0 ? (
              <div className="col-12 text-center">
                <p>No articles yet. Please check back later.</p>
              </div>
            ) : (
              posts.map((post, i) => {
                const href = `/guide/${post.slug}/`;
                return (
                  <div
                    key={post.id}
                    className="col-md-6 col-xl-4 mb-30 blog-block wow fadeInLeft"
                    data-wow-delay={`${(i % 3) * 100}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <Link href={href}>
                            <img
                              loading="lazy"
                              decoding="async"
                              src={post.cover_image || FALLBACK_IMAGE}
                              alt={post.title}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="content-box">
                        <div className="info look-h6">
                          <span>{post.author || "Admin"}</span>
                          {post.category ? <span className="dot">{post.category}</span> : null}
                        </div>
                        <h2 className="title look-h4">
                          <Link href={href}>{post.title}</Link>
                        </h2>
                        {/* The hidden title makes the link text say which
                            article it opens (a bare "Read More" is flagged).
                            The div keeps it on a line of its own, at the
                            bottom of the card (custom.css). */}
                        <div className="read-more">
                          <Link className="readMore-btn" href={href}>
                            Read More<span className="sr-only">: {post.title}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
