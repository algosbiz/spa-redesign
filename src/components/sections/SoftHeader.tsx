/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * The light page header of the guides, their list and the legal pages
 * (owner, 23 Oct: the dark photo band with its heavy title "looks so old"):
 * on the white page, a short trail, a word in small gold capitals, the title
 * in Literata at a calm size, then a line under it (the article's byline and
 * reading time, no dates; the list's one-line intro) and, for an article,
 * its cover photo as a wide rounded picture. Phones get a photo's `-sm` file
 * when it is one from /public.
 * Styles: src/styles/outcall.css, section 24.
 */
export default function SoftHeader({
  title,
  kicker,
  trail,
  meta,
  intro,
  image,
}: {
  title: string;
  kicker: string;
  /** The way back: linked steps, then the page itself (no href). */
  trail: { label: string; href?: string }[];
  /** Short facts in one line, dot-separated (an article's byline and reading time). */
  meta?: ReactNode[];
  /** One sentence under the title. */
  intro?: ReactNode;
  image?: string | null;
}) {
  const small = image && !/^https?:\/\//i.test(image) ? image.replace(/(\.[a-z0-9]+)$/i, "-sm$1") : null;
  return (
    <section className="soft-header">
      <div className="container">
        <div className="soft-header__head">
          <nav className="soft-header__trail" aria-label="Breadcrumb">
            {trail.map((step, i) => (
              <span key={step.label} className="soft-header__step">
                {i > 0 && <span aria-hidden="true">›</span>}
                {step.href ? (
                  <Link prefetch={false} href={step.href}>
                    {step.label}
                  </Link>
                ) : (
                  <span aria-current="page">{step.label}</span>
                )}
              </span>
            ))}
          </nav>
          <p className="soft-header__kicker">{kicker}</p>
          <h1 className="soft-header__title">{title}</h1>
          {meta && meta.length > 0 && (
            <p className="soft-header__meta">
              {meta.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </p>
          )}
          {intro && <p className="soft-header__intro">{intro}</p>}
        </div>
        {image && (
          <div className="soft-header__photo">
            <picture>
              {small && <source media="(max-width: 767px)" srcSet={small} />}
              <img src={image} alt="" fetchPriority="high" decoding="async" />
            </picture>
          </div>
        )}
      </div>
    </section>
  );
}
