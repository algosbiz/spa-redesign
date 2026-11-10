"use client";

/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import { useState, type CSSProperties } from "react";
import type { PricedService } from "@/data/pages/pricelist";
import { useI18n } from "@/i18n/client";
import { displayPrice } from "@/lib/price";

const DESC: CSSProperties = { marginTop: "2px", marginBottom: "0", fontSize: "14px", color: "#5f5a54" };
const ROW: CSSProperties = { borderBottom: "1px solid #e1e1e1" };
const TIME: CSSProperties = { fontFamily: "var(--subtitle-font)", fontSize: "18px", color: "#6A6F73" };
const PRICE: CSSProperties = { fontFamily: "var(--title-font)", fontSize: "24px", fontWeight: "500", color: "var(--title-color)" };
const LIST: CSSProperties = { paddingLeft: "0" };

/**
 * Tabbed price list — the live "package-section" with its tabs. Every tab is
 * in the HTML; Bootstrap's `.tab-pane` classes show the active one. Each
 * treatment opens its prices in place (`spreadDropdownArrow`: a full-width
 * toggle button with the arrow at the far end; `outcallPricing` uses the
 * outcall price styling).
 */
export default function PackageTabs({
  subTitle,
  title,
  tabs,
  note,
  outcallPricing = false,
  spreadDropdownArrow = false,
}: {
  subTitle: string;
  title: string;
  tabs: { label: string; services: PricedService[] }[];
  note?: string;
  outcallPricing?: boolean;
  spreadDropdownArrow?: boolean;
}) {
  const { el } = useI18n();
  const [active, setActive] = useState(0);
  const spread = outcallPricing || spreadDropdownArrow;
  return el(
    <section
      className={`package-section section__decoration-top section__decoration-bottom bg-sub pt-130 pb-130${
        outcallPricing ? " outcall-package-pricing" : ""
      }${spread ? " package-spread-toggles" : ""}`}
    >
      <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
        <img loading="lazy" decoding="async" className="sway_Y__animationY" src="/images/shape/banner-five-shape1.png" alt="" />
      </div>
      <div className="shape2">
        <img loading="lazy" decoding="async" className="sway__animation" src="/images/shape/package-shape-right.png" alt="" />
      </div>
      <div className="container">
        <div className="section-header mb-60 center">
          <h4 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            {subTitle}
          </h4>
          <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            {title}
          </h2>
        </div>
        <div className="package-tab mb-60">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {tabs.map((tab, i) => (
              <li key={tab.label} className="nav-item" role="presentation">
                <button
                  className={active === i ? "nav-link active" : "nav-link"}
                  onClick={() => setActive(i)}
                  id={`package-item-${i}-tab`}
                  type="button"
                  role="tab"
                  aria-controls={`package-item-${i}`}
                  aria-selected={active === i}
                >
                  <div className="icon-box" />
                  <h6 className="title">{tab.label}</h6>
                </button>
              </li>
            ))}
          </ul>
          {note && (
            <p
              className="package-tab-note"
              style={{ marginTop: "22px", marginBottom: "0", color: "#5f5a54", fontSize: "15px", lineHeight: "26px", textAlign: "center" }}
            >
              {note}
            </p>
          )}
        </div>
        <div className="tab-content" id="myTabContent">
          {tabs.map((tab, i) => {
            const half = Math.ceil(tab.services.length / 2);
            const columns = [tab.services.slice(0, half), tab.services.slice(half)];
            return (
              <div
                key={tab.label}
                className={active === i ? "tab-pane fade show active" : "tab-pane fade"}
                id={`package-item-${i}`}
                role="tabpanel"
                aria-labelledby={`package-item-${i}-tab`}
              >
                <div className="row g-5">
                  {columns.map((column, c) => (
                    <div key={c} className="col-lg-6 package-block">
                      {column.map((item, j) => (
                        <ServiceRow
                          key={item.id}
                          item={item}
                          isLast={j === column.length - 1}
                          outcallPricing={outcallPricing}
                          spread={spread}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  item,
  isLast,
  outcallPricing,
  spread,
}: {
  item: PricedService;
  isLast: boolean;
  outcallPricing: boolean;
  spread: boolean;
}) {
  const { el } = useI18n();
  const [open, setOpen] = useState(false);
  const hasPanel = !!(item.benefits?.length || item.options?.length || item.children?.length);
  const priceClass = outcallPricing ? "outcall-package-price" : "package-item-price";

  let heading: React.ReactNode = item.name;
  if (hasPanel && spread) {
    heading = (
      <button type="button" className="package-row-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{item.name}</span>
        <span className="package-row-toggle__icon" aria-hidden="true">
          <i className="fa-solid fa-angle-down" />
        </span>
      </button>
    );
  } else if (hasPanel) {
    heading = (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        style={{ cursor: "pointer" }}
      >
        {item.name}{" "}
        <i className={`fa-solid ${open ? "fa-angle-up" : "fa-angle-down"} ms-1`} style={{ fontSize: "14px" }} />
      </a>
    );
  }

  return el(
    <div className={`inner-box ${isLast ? "" : "mb-50"}`}>
      <div className="image">
        <img loading="lazy" decoding="async" src={item.image} alt={item.name} />
      </div>
      <div className="content">
        <h3 className="title">{heading}</h3>
        {item.desc && (
          <p className="text" style={DESC}>
            {item.desc}
          </p>
        )}
        {hasPanel && (
          <div
            className="pricing-dropdown"
            style={{
              padding: open ? "5px 0 10px" : "0",
              maxHeight: open ? "4000px" : "0",
              opacity: open ? 1 : 0,
              overflow: "hidden",
              transition: "all 0.4s ease-in-out",
              visibility: open ? "visible" : "hidden",
              marginTop: open ? "5px" : "0",
            }}
          >
            {item.benefits && (
              <div className="benefits-list" style={{ marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "15px" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", marginBottom: "8px", color: "#2f2924" }}>Benefits:</p>
                <ul className="list-unstyled" style={LIST}>
                  {item.benefits.map((b, i) => (
                    <li
                      key={i}
                      style={{ fontSize: "13px", color: "#5f5a54", display: "flex", gap: "10px", marginBottom: "5px", lineHeight: "1.4" }}
                    >
                      <i className="fa-solid fa-circle" style={{ fontSize: "5px", marginTop: "8px", color: "var(--theme-color1)" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <ul className="list-unstyled mb-0" style={LIST}>
              {(item.options || []).map((o, i) => (
                <li key={i} className="d-flex justify-content-between align-items-center pb-2 mb-2" style={ROW}>
                  <span style={TIME}>{o.time}</span>
                  <span className={priceClass} style={outcallPricing ? undefined : PRICE}>
                    {displayPrice(o.price)}
                  </span>
                </li>
              ))}
            </ul>
            {(item.children || []).map((child) => (
              <section
                key={child.name}
                className="package-child-service"
                style={{
                  marginTop: "20px",
                  padding: "18px 0 0 18px",
                  borderTop: "1px solid #e1e1e1",
                  borderLeft: "2px solid var(--theme-color1)",
                }}
              >
                <h4 style={{ marginBottom: child.desc ? "7px" : "12px", fontSize: "18px", lineHeight: "1.35" }}>{child.name}</h4>
                {child.desc && (
                  <p style={{ marginBottom: "12px", color: "#5f5a54", fontSize: "13px", lineHeight: "1.55" }}>{child.desc}</p>
                )}
                <ul className="list-unstyled mb-0" style={LIST}>
                  {(child.options || []).map((o, i) => (
                    <li
                      key={`${child.name}-${i}`}
                      className="d-flex justify-content-between align-items-center pb-2 mb-2"
                      style={{ gap: "18px", borderBottom: "1px solid #e1e1e1" }}
                    >
                      <span style={{ fontFamily: "var(--subtitle-font)", fontSize: "16px", color: "#6A6F73" }}>{o.time}</span>
                      <span
                        className={priceClass}
                        style={
                          outcallPricing
                            ? undefined
                            : {
                                flexShrink: 0,
                                fontFamily: "var(--title-font)",
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "var(--title-color)",
                              }
                        }
                      >
                        {displayPrice(o.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
