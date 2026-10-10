"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MobileMenuEntry } from "@/components/layout/mobileMenuData";
import { outcallMenu, treatmentMenu, treatmentMenuColumns } from "@/data/navigation";

const strip = (path: string) => path.replace(/\/$/, "") || "/";

/**
 * Desktop menu with the treatments mega menu and the blog dropdown — the live
 * markup, class for class (`jsx-nav` is the live styled-jsx scope).
 *
 * The live site fetches the blog list after hydration; here `posts` (the blog
 * menu from the database, read by the server) is rendered with the page, so
 * the links are in the HTML from the start.
 */
export default function MainMenu({ posts }: { posts: MobileMenuEntry[] }) {
  const current = strip(usePathname() || "/");
  const isCurrent = (href: string) => current === strip(href);
  const inTreatments = treatmentMenu.some((t) => isCurrent(t.href));
  const inBlog = current === "/guide" || current.startsWith("/guide/");
  const inOutcall = outcallMenu.some((o) => isCurrent(o.href));

  return (
    <ul className="jsx-nav">
      <li className="jsx-nav">
        <Link prefetch={false} href="/">
          Home
        </Link>
      </li>
      <li className="jsx-nav">
        <Link prefetch={false} href="/seminyak/">
          Pricelist
        </Link>
      </li>
      <li className={`jsx-nav treatments-menu-item${inTreatments ? " is-active" : ""}`}>
        <Link prefetch={false} href="/seminyak/">
          Treatments <i className="jsx-nav fa-solid fa-angle-down" />
        </Link>
        <ul className="jsx-nav sub-menu treatment-mega-menu">
          {treatmentMenuColumns.map((column, i) => (
            <li key={i} className="jsx-nav treatment-mega-menu__column">
              <ul className="jsx-nav treatment-mega-menu__column-list">
                {column.map((t) => (
                  <li
                    key={t.href}
                    className={`jsx-nav treatment-mega-menu__link-item${isCurrent(t.href) ? " is-active" : ""}`}
                  >
                    <Link prefetch={false} href={t.href}>
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
      <li className={`jsx-nav outcall-menu-item${inOutcall ? " is-active" : ""}`}>
        <Link prefetch={false} href="/outcall-home-service-massage/">
          Outcall <i className="jsx-nav fa-solid fa-angle-down" />
        </Link>
        <ul className="jsx-nav sub-menu outcall-dropdown-menu">
          {outcallMenu.map((o) => (
            <li key={o.href} className="jsx-nav">
              <Link prefetch={false} href={o.href}>
                {o.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="jsx-nav">
        <Link prefetch={false} href="/reservation/">
          Reservation
        </Link>
      </li>
      <li className={`jsx-nav blog-menu-item${inBlog ? " is-active" : ""}`}>
        <Link prefetch={false} href="/guide/">
          Blog <i className="jsx-nav fa-solid fa-angle-down" />
        </Link>
        <ul className="jsx-nav sub-menu blog-dropdown-menu">
          {posts.map((post) => (
            <li key={post.href} className="jsx-nav">
              <Link prefetch={false} href={post.href}>
                {post.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="jsx-nav">
        <Link prefetch={false} href="/contact/">
          Contact
        </Link>
      </li>
    </ul>
  );
}
