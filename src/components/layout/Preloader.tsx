"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves this as a plain <img> */
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/client";

/**
 * The live site's loading screen: the lotus logo over four panels, shown on
 * the first page load only. It is removed two frames after 250ms, or at 1s at
 * the latest — the same timing as the live _app. Since 2 Oct it no longer
 * waits for that: custom.css hides it 0.5s after it is first styled, so a
 * slow phone does not sit on "Loading..." until the JavaScript has run.
 */
export default function Preloader() {
  const { el } = useI18n();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let done = false;
    const hide = () => {
      if (!done) {
        done = true;
        setVisible(false);
      }
    };
    const soon = window.setTimeout(() => {
      window.requestAnimationFrame(() => window.requestAnimationFrame(hide));
    }, 250);
    const latest = window.setTimeout(hide, 1000);
    return () => {
      window.clearTimeout(soon);
      window.clearTimeout(latest);
    };
  }, []);

  if (!visible) return null;
  return el(
    <div id="preloader" className="lh">
      <div className="animation-preloader">
        <div className="preloader-mark">
          {/* Its own copy of the lotus logo (PageSpeed, 21 Oct: 20 -> 10 KB,
              which on a slow phone shares the line with the hero photo):
              540px wide, three times the logo's width on a phone, in the old
              gold with a compressed alpha. The #gold-b filter repaints it
              from its shape alone (gold.css), so it looks the same. */}
          <img
            className="preloader-logo"
            fetchPriority="high"
            decoding="async"
            src="/images/logo/sbm-preloader.webp"
            alt="Spa Bali Moon logo"
            width="280"
            height="219"
          />
        </div>
        <div className="preloader-brand">Spa Bali Moon</div>
        <p className="text-center">Loading...</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
