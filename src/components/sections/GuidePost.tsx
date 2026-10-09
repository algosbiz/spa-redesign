"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

// The database answers null for empty columns, so null is accepted throughout.
export type GuidePostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  cover_image?: string | null;
  category?: string | null;
  author?: string | null;
  /** False hides this article's date; missing (seed rows) shows it. */
  show_date?: boolean | null;
  published_at?: string | null;
};

export type GuidePostFull = GuidePostSummary & {
  heading?: string | null;
  content_html: string;
  tags?: string[] | null;
  [key: string]: unknown;
};

const S = "jsx-guide-post";
const FALLBACK_IMAGE = "/images/resource/news-details.jpg";

/** "December 9, 2024", as the live site prints dates. */
const formatDate = (iso?: string | null) =>
  iso ? new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }) : "";

/**
 * A blog article — the live "blog-details": the post, a sidebar with a live
 * search and the latest posts, then previous/next links and more articles on
 * a paper band.
 */
export default function GuidePost({
  post,
  recentPosts = [],
  prevPost = null,
  nextPost = null,
  morePosts = [],
}: {
  post: GuidePostFull;
  recentPosts?: GuidePostSummary[];
  prevPost?: GuidePostSummary | null;
  nextPost?: GuidePostSummary | null;
  morePosts?: GuidePostSummary[];
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GuidePostSummary[]>([]);
  const [searching, setSearching] = useState(false);
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const search = useCallback(async (q: string) => {
    if (!q || q.trim().length < 2) {
      setResults([]);
      setOpen(false);
      setSearching(false);
      return;
    }
    setSearching(true);
    try {
      const res = await fetch(`/api/search-posts/?q=${encodeURIComponent(q.trim())}`);
      const data = await res.json();
      setResults(data.posts || []);
      setOpen(true);
    } catch {
      setResults([]);
    } finally {
      setSearching(false);
    }
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const tags = Array.isArray(post.tags) ? post.tags : [];

  return (
    <>
      <section className={`${S} blog-details pt-100 pb-100`}>
        <div className={`${S} container`}>
          <div className={`${S} row`}>
            <div className={`${S} col-xl-8 col-lg-7`}>
              <div className={`${S} blog-details__left`}>
                <div className={`${S} blog-details__content`}>
                  <ul className={`${S} list-unstyled blog-details__meta`}>
                    {post.category && (
                      <li className={S}>
                        <span className={`${S} blog-details__category`}>
                          <i className={`${S} fas fa-folder`} /> {post.category}
                        </span>
                      </li>
                    )}
                    {post.show_date !== false && post.published_at && (
                      <li className={S}>
                        <i className={`${S} fas fa-calendar-alt`} />{" "}
                        <time dateTime={post.published_at} className={S}>
                          {formatDate(post.published_at)}
                        </time>
                      </li>
                    )}
                  </ul>
                  {/* h2 under the banner's h1 (owner, 5 Oct: heading order); look-h3 keeps the old h3 look. */}
                  <h2 className={`${S} blog-details__title look-h3`}>{post.heading || post.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: post.content_html || "" }} className={`${S} blog-details__rich`} />
                </div>
                {tags.length > 0 && (
                  <div className={`${S} blog-details__bottom`}>
                    <p className={`${S} blog-details__tags`}>
                      <span className={`${S} blog-details__tags-label`}>Tags</span>
                      {tags.map((t) => (
                        <span key={t} className={`${S} blog-details__tag`}>
                          {t}
                        </span>
                      ))}
                    </p>
                    <div className={`${S} blog-details__social-list`}>
                      <a
                        href="https://www.facebook.com/spabalimoon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Spa Bali Moon on Facebook"
                        className={S}
                      >
                        <i aria-hidden="true" className={`${S} fab fa-facebook`} />
                      </a>
                      <a
                        href="https://www.instagram.com/spabalimoon_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Spa Bali Moon on Instagram"
                        className={S}
                      >
                        <i aria-hidden="true" className={`${S} fab fa-instagram`} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={`${S} col-xl-4 col-lg-5`}>
              <div className={`${S} sidebar`}>
                <div ref={boxRef} className={`${S} sidebar__single sidebar__search`}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (timer.current) clearTimeout(timer.current);
                      search(query);
                    }}
                    className={`${S} sidebar__search-form`}
                  >
                    <input
                      type="search"
                      placeholder="Search here"
                      aria-label="Search the blog"
                      value={query}
                      onChange={(e) => {
                        const v = e.target.value;
                        setQuery(v);
                        if (timer.current) clearTimeout(timer.current);
                        if (!v || v.trim().length < 2) {
                          setResults([]);
                          setOpen(false);
                          return;
                        }
                        setSearching(true);
                        timer.current = setTimeout(() => search(v), 400);
                      }}
                      onFocus={() => {
                        if (results.length > 0) setOpen(true);
                      }}
                      className={S}
                    />
                    <button type="submit" aria-label="Search" className={S}>
                      <i className={`${S} fa-classic fa-light fa-magnifying-glass fa-fw`} />
                    </button>
                  </form>
                  {open && (
                    <div className={`${S} sidebar-search-results`}>
                      {searching && <div className={`${S} sidebar-search-results__loading`}>Searching...</div>}
                      {!searching && results.length === 0 && (
                        <div className={`${S} sidebar-search-results__empty`}>No posts found.</div>
                      )}
                      {!searching && results.length > 0 && (
                        <ul className={`${S} sidebar-search-results__list`}>
                          {results.map((r) => (
                            <li key={r.id} className={S}>
                              <Link href={`/guide/${r.slug}/`} onClick={() => setOpen(false)}>
                                <div className={`${S} sidebar-search-results__item`}>
                                  {r.cover_image && (
                                    <img loading="lazy" decoding="async" src={r.cover_image} alt={r.title} className={S} />
                                  )}
                                  <div className={`${S} sidebar-search-results__text`}>
                                    <strong className={S}>{r.title}</strong>
                                    {r.excerpt && <p className={S}>{r.excerpt.slice(0, 80)}…</p>}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
                <div className={`${S} sidebar__single sidebar__post`}>
                  <h3 className={`${S} sidebar__title`}>Latest Posts</h3>
                  <ul className={`${S} sidebar__post-list list-unstyled`}>
                    {recentPosts.map((p) => (
                      <li key={p.id} className={S}>
                        <div className={`${S} sidebar__post-image`}>
                          <img loading="lazy" decoding="async" src={p.cover_image || "/images/resource/news-1.jpg"} alt={p.title} className={S} />
                        </div>
                        <div className={`${S} sidebar__post-content`}>
                          <h3 className={S}>
                            <span className={`${S} sidebar__post-content-meta`}>
                              <i className={`${S} fas fa-user-circle`} />
                              {p.author || "Admin"}
                            </span>
                            <Link href={`/guide/${p.slug}/`}>{p.title}</Link>
                          </h3>
                        </div>
                      </li>
                    ))}
                    {recentPosts.length === 0 && (
                      <li className={S}>
                        <p className={S}>No other posts yet.</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {(prevPost || nextPost || morePosts.length > 0) && (
        <div className={`${S} guide-more-paper section__decoration-top section__decoration-bottom bg-sub`}>
          <section className={`${S} post-more pt-100 pb-100`}>
            <div className={`${S} container`}>
              {(prevPost || nextPost) && (
                <nav aria-label="Other articles" className={`${S} post-nav`}>
                  {prevPost && (
                    <Link href={`/guide/${prevPost.slug}/`} className="post-nav__link post-nav__link--prev">
                      <span className={`${S} post-nav__thumb`}>
                        <img loading="lazy" decoding="async" src={prevPost.cover_image || FALLBACK_IMAGE} alt="" className={S} />
                      </span>
                      <span className={`${S} post-nav__text`}>
                        <span className={`${S} post-nav__label`}>Previous</span>
                        <span className={`${S} post-nav__title`}>{prevPost.title}</span>
                      </span>
                    </Link>
                  )}
                  {nextPost && (
                    <Link href={`/guide/${nextPost.slug}/`} className="post-nav__link post-nav__link--next">
                      <span className={`${S} post-nav__text`}>
                        <span className={`${S} post-nav__label`}>Next</span>
                        <span className={`${S} post-nav__title`}>{nextPost.title}</span>
                      </span>
                      <span className={`${S} post-nav__thumb`}>
                        <img loading="lazy" decoding="async" src={nextPost.cover_image || FALLBACK_IMAGE} alt="" className={S} />
                      </span>
                    </Link>
                  )}
                </nav>
              )}
              {morePosts.length > 0 && (
                <>
                  <h3 className={`${S} post-more__title`}>More Articles</h3>
                  <div className={`${S} post-more__grid`}>
                    {morePosts.map((p) => (
                      <Link key={p.id} href={`/guide/${p.slug}/`} className="post-more__card">
                        <span className={`${S} post-more__image`}>
                          <img loading="lazy" decoding="async" src={p.cover_image || FALLBACK_IMAGE} alt={p.title} className={S} />
                        </span>
                        <span className={`${S} post-more__body`}>
                          <span className={`${S} post-more__heading`}>{p.title}</span>
                          {p.show_date !== false && p.published_at && (
                            <time dateTime={p.published_at} className={`${S} post-more__date`}>
                              {formatDate(p.published_at)}
                            </time>
                          )}
                          {p.excerpt && <span className={`${S} post-more__excerpt`}>{p.excerpt}</span>}
                        </span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
