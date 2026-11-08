/* eslint-disable @next/next/no-img-element -- the live site serves this as a plain <img> */
import type { Metadata } from "next";
import Link from "next/link";
import { getI18n } from "@/i18n/server";

// The live 404's robots value. Next also adds its own `noindex` tag for 404s;
// together they still read "noindex, nofollow".
export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

/**
 * 404 — the live error page: no header or footer, only this section (plus the
 * WhatsApp button and preloader from the root layout). As on live, the search
 * form has no handler and the magnifier icon's font is not loaded. Shown for a
 * missing article or treatment; an address that matches no page at all gets
 * the same page from src/app/global-not-found.tsx.
 */
export default async function NotFound() {
  const { render } = await getI18n();
  return render(
    <div className="page-wrapper lh p-404" id="top">
      <section className="">
        <div className="auto-container pt-120 pb-70">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <div className="error-page__title-box">
                  <img loading="lazy" decoding="async" src="/images/resource/404.jpg" alt="Image" />
                  <h3 className="error-page__sub-title">Page not found!</h3>
                </div>
                <p className="error-page__text">
                  {/* "for was never existed." until 8 Nov (a grammar mistake copied from live). */}
                  Sorry we can&apos;t find that page! The page you are looking <br /> for doesn&apos;t exist.
                </p>
                <form className="error-page__form">
                  <div className="error-page__form-input">
                    <input type="search" placeholder="Search here" />
                    <button type="submit">
                      <i className="lnr lnr-icon-magnifier" />
                    </button>
                  </div>
                </form>
                <Link href="/" className="btn-one shop-now">
                  <span className="btn-title">Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
