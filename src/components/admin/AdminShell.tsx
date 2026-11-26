"use client";

/* eslint-disable @next/next/no-img-element -- static brand images, as on the live admin */
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export type AdminSection = "articles" | "treatments" | "redirects";

const SECTIONS: { id: AdminSection; label: string; href: string; icon: ReactNode }[] = [
  {
    id: "articles",
    label: "Articles",
    href: "/admin/",
    icon: (
      <path
        d="M6.5 3.5h7.2l4.8 4.8V20.5H6.5zm6.9.1v5h5M9.3 13h6.2M9.3 16.3h4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    id: "treatments",
    label: "Treatments",
    href: "/admin/treatments/",
    icon: (
      <path
        d="M12 20c-4.4-1.2-7-4.6-7-8.6 2.6 0 5 1 7 3.3 2-2.3 4.4-3.3 7-3.3 0 4-2.6 7.4-7 8.6zm0-5.3C10.4 12 10.6 8 12 4.5c1.4 3.5 1.6 7.5 0 10.2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "redirects",
    label: "Redirects",
    href: "/admin/redirects/",
    icon: (
      <path
        d="M4.5 7.5h10a4.5 4.5 0 0 1 0 9H8m6.5-12 3 3-3 3M8 13.5l-3 3 3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1 -1.5)"
      />
    ),
  },
];

/**
 * The frame of every admin page except the editors: background, top bar with
 * the brand, the section tabs (Articles, Treatments, Redirects), the page's
 * own buttons and Log Out.
 */
export default function AdminShell({
  active,
  actions,
  children,
}: {
  active: AdminSection;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/logout/", { method: "POST" });
    router.replace("/admin/login/");
    router.refresh();
  };

  return (
    <div className="adm-page">
      <div className="adm-bg" aria-hidden="true">
        <span className="adm-glow adm-glow-a" />
        <span className="adm-glow adm-glow-b" />
        <img className="adm-watermark" src="/images/logo/sbm.webp" alt="" />
      </div>

      <header className="adm-topbar">
        <div className="adm-topbar-inner">
          <Link href="/admin/" className="adm-brand">
            <img src="/images/logo/SMBtitle.svg" alt="Spa Bali Moon" width="444" height="80" />
            <span className="adm-eyebrow">Content Studio</span>
          </Link>
          <div className="adm-top-actions">
            {actions}
            <button type="button" className="adm-btn adm-btn-ghost" onClick={logout}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M14.5 8.2V6.4A1.9 1.9 0 0 0 12.6 4.5H6.4A1.9 1.9 0 0 0 4.5 6.4v11.2a1.9 1.9 0 0 0 1.9 1.9h6.2a1.9 1.9 0 0 0 1.9-1.9v-1.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M10 12h9.5m0 0-2.7-2.7M19.5 12l-2.7 2.7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Log Out
            </button>
          </div>
        </div>
        <nav className="adm-tabs" aria-label="Admin sections">
          <div className="adm-tabs-inner">
            {SECTIONS.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className={`adm-tab${s.id === active ? " is-active" : ""}`}
                aria-current={s.id === active ? "page" : undefined}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {s.icon}
                </svg>
                {s.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="adm-dash">{children}</main>
    </div>
  );
}
