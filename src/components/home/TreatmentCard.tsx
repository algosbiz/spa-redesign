/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import Link from "next/link";

type Props = {
  name: string;
  href: string;
  image: string;
  icon: string;
  desc: string;
  price: string | null;
  /** false: the name is plain text in the same type, not a heading (the homepage lists these names again under its menu). */
  heading?: boolean;
};

/** A treatment card: photo, gold icon badge, name, starting price, one line, "Learn More". */
export default function TreatmentCard({ name, href, image, icon, desc, price, heading = true }: Props) {
  const link = (
    <Link prefetch={false} href={href}>
      {name}
    </Link>
  );
  return (
    <article className="v2-treat">
      <Link prefetch={false} href={href} className="v2-treat__media" tabIndex={-1} aria-hidden="true">
        <img loading="lazy" decoding="async" src={image} alt="" />
      </Link>
      <div className="v2-treat__body">
        <span className="v2-treat__icon" aria-hidden="true">
          <img loading="lazy" decoding="async" src={icon} alt="" />
        </span>
        {heading ? (
          <h3 className="v2-treat__title">{link}</h3>
        ) : (
          <div className="v2-treat__title look-h3">{link}</div>
        )}
        {price && <div className="v2-treat__price look-h6">{price}</div>}
        <p className="v2-treat__text">{desc}</p>
        {/* The hidden words make the link text say where it goes (search
            engines and Lighthouse flag a bare "Learn More"). */}
        <Link prefetch={false} href={href} className="v2-treat__link">
          Learn More<span className="sr-only"> about {name}</span>
          <i className="fa-regular fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
