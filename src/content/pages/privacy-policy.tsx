/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */
import SoftHeader from "@/components/sections/SoftHeader";
import { business } from "@/data/business";

/** /privacy-policy/ — generated from the live page's component tree, section for section. */
export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper lh p-privacy-policy">
      <SoftHeader title="Privacy Policy" kicker="Spa Bali Moon" trail={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section
        className="privacy-policy-section pt-120 pb-120"
        style={{ backgroundColor: "#fcfaf6", position: "relative", overflow: "hidden", zIndex: 1 }}
      >
        <div className="shape1" style={{ position: "absolute", left: 0, top: "10%", zIndex: -1 }}>
          <img loading="lazy" decoding="async" src="/images/shape/about-left-shape.png" alt="shape" />
        </div>
        <div className="shape2" style={{ position: "absolute", right: 0, bottom: "15%", zIndex: -1 }}>
          <img
            loading="lazy"
            decoding="async"
            className="sway_Y__animation"
            src="/images/shape/about-right-shape.png"
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" style={{ position: "relative", zIndex: 2 }}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "60px 50px",
                  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(232, 227, 218, 0.6)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--text-font)",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#5f5a54",
                    marginBottom: "40px",
                    borderLeft: "3px solid var(--theme-color1)",
                    paddingLeft: "20px",
                  }}
                >
                  At Spa Bali Moon, we respect your privacy and are committed to protecting the personal information you
                  share with us. This Privacy Policy explains how we collect, use, and safeguard your information when
                  you visit our spa or request home service treatments.
                </p>
                <div className="mb-40">
                  <h2
                    className="look-h3"
                    style={{
                      fontFamily: "var(--title-font)",
                      fontSize: "26px",
                      fontWeight: "500",
                      color: "#1c1a1d",
                      marginBottom: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <i
                      className="fa-light fa-clipboard-list"
                      style={{ color: "var(--theme-color1)", fontSize: "28px", width: "32px", textAlign: "center" }}
                    />
                    Information We Collect
                  </h2>
                  <p
                    style={{ fontFamily: "var(--text-font)", fontSize: "15px", color: "var(--text-color)", marginBottom: "15px" }}
                  >
                    We may collect personal details in the following ways:
                  </p>
                  <ul style={{ paddingLeft: "25px", marginBottom: "18px" }}>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      <strong>Directly from you:</strong>
                      {" When booking appointments, completing forms, or contacting us via phone, WhatsApp, or email."}
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      <strong>During services:</strong>
                      {
                        " Information such as health conditions, preferences, or treatment notes to ensure safe and personalized care."
                      }
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      <strong>Payment details:</strong>
                      {" For processing transactions securely (e.g., card or digital payments)."}
                    </li>
                  </ul>
                  <p
                    style={{
                      fontFamily: "var(--text-font)",
                      fontSize: "15px",
                      color: "#5f5a54",
                      lineHeight: "1.6",
                      marginTop: "15px",
                    }}
                  >
                    <strong>Online interactions:</strong>
                    {
                      " When you use our website or social media platforms, we may collect basic browsing data (cookies, device info)."
                    }
                  </p>
                </div>
                <div className="mb-40">
                  <h2
                    className="look-h3"
                    style={{
                      fontFamily: "var(--title-font)",
                      fontSize: "26px",
                      fontWeight: "500",
                      color: "#1c1a1d",
                      marginBottom: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <i
                      className="fa-solid fa-bullseye"
                      style={{ color: "var(--theme-color1)", fontSize: "28px", width: "32px", textAlign: "center" }}
                    />
                    How We Use Your Information
                  </h2>
                  <p
                    style={{ fontFamily: "var(--text-font)", fontSize: "15px", color: "var(--text-color)", marginBottom: "15px" }}
                  >
                    Your information helps us:
                  </p>
                  <ul style={{ paddingLeft: "25px", marginBottom: "18px" }}>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Schedule and manage spa and home service appointments.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Provide safe, customized treatments based on your preferences.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Process payments and issue receipts.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Communicate promotions, updates, or special offers (with your consent).
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Improve our services and client experience.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Ensure the safety of our therapists during home visits.
                    </li>
                  </ul>
                </div>
                <div className="mb-40">
                  <h2
                    className="look-h3"
                    style={{
                      fontFamily: "var(--title-font)",
                      fontSize: "26px",
                      fontWeight: "500",
                      color: "#1c1a1d",
                      marginBottom: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <i
                      className="fa-solid fa-shield-alt"
                      style={{ color: "var(--theme-color1)", fontSize: "28px", width: "32px", textAlign: "center" }}
                    />
                    Data Protection
                  </h2>
                  <p style={{ fontFamily: "var(--text-font)", fontSize: "15px", lineHeight: "1.75", color: "#5f5a54" }}>
                    We implement physical, electronic, and managerial safeguards to protect your information against
                    unauthorized access, misuse, or disclosure. While we strive to maintain high standards of security,
                    no system is completely impenetrable, and we cannot guarantee absolute protection.
                  </p>
                </div>
                <div className="mb-40">
                  <h2
                    className="look-h3"
                    style={{
                      fontFamily: "var(--title-font)",
                      fontSize: "26px",
                      fontWeight: "500",
                      color: "#1c1a1d",
                      marginBottom: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <i
                      className="fa-solid fa-share-nodes"
                      style={{ color: "var(--theme-color1)", fontSize: "28px", width: "32px", textAlign: "center" }}
                    />
                    Sharing of Information
                  </h2>
                  <p
                    style={{ fontFamily: "var(--text-font)", fontSize: "15px", color: "var(--text-color)", marginBottom: "15px" }}
                  >
                    We do not sell your personal information. We may share limited data only with:
                  </p>
                  <ul style={{ paddingLeft: "25px", marginBottom: "18px" }}>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      <strong>Service providers:</strong>
                      {" For payment processing or booking systems."}
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      <strong>Therapists:</strong>
                      {" To deliver your requested treatment safely."}
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      <strong>Legal authorities:</strong>
                      {" If required by law or to protect the safety of our staff and clients."}
                    </li>
                  </ul>
                </div>
                <div className="mb-40">
                  <h2
                    className="look-h3"
                    style={{
                      fontFamily: "var(--title-font)",
                      fontSize: "26px",
                      fontWeight: "500",
                      color: "#1c1a1d",
                      marginBottom: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <i
                      className="fa-solid fa-lock"
                      style={{ color: "var(--theme-color1)", fontSize: "28px", width: "32px", textAlign: "center" }}
                    />
                    Home Service Privacy
                  </h2>
                  <p
                    style={{ fontFamily: "var(--text-font)", fontSize: "15px", color: "var(--text-color)", marginBottom: "15px" }}
                  >
                    For home service treatments:
                  </p>
                  <ul style={{ paddingLeft: "25px", marginBottom: "18px" }}>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Your address and contact details are used solely to arrange transport and confirm bookings.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Therapists are instructed to maintain strict confidentiality regarding your location and personal
                      details.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Transport fees are calculated based on distance and time, and discussed transparently before
                      service.
                    </li>
                  </ul>
                </div>
                <div className="mb-40">
                  <h2
                    className="look-h3"
                    style={{
                      fontFamily: "var(--title-font)",
                      fontSize: "26px",
                      fontWeight: "500",
                      color: "#1c1a1d",
                      marginBottom: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <i
                      className="fa-solid fa-user-check"
                      style={{ color: "var(--theme-color1)", fontSize: "28px", width: "32px", textAlign: "center" }}
                    />
                    Your Rights
                  </h2>
                  <p
                    style={{ fontFamily: "var(--text-font)", fontSize: "15px", color: "var(--text-color)", marginBottom: "15px" }}
                  >
                    You have the right to:
                  </p>
                  <ul style={{ paddingLeft: "25px", marginBottom: "18px" }}>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Access the personal information we hold about you.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Request corrections to inaccurate details.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Opt out of marketing communications at any time.
                    </li>
                    <li
                      style={{
                        fontFamily: "var(--text-font)",
                        fontSize: "15px",
                        color: "#5f5a54",
                        marginBottom: "10px",
                        lineHeight: "1.6",
                        display: "list-item",
                        listStyleType: "disc",
                      }}
                    >
                      Request deletion of your data, subject to legal and operational requirements.
                    </li>
                  </ul>
                </div>
                <div
                  className="mb-40"
                  style={{
                    backgroundColor: "#fcfaf6",
                    borderRadius: "12px",
                    padding: "25px",
                    border: "1px solid rgba(232, 227, 218, 0.8)",
                  }}
                >
                  <div
                    className="look-h4"
                    style={{
                      fontFamily: "var(--title-font)",
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#1c1a1d",
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fa-light fa-clock"
                      style={{ color: "var(--theme-color1)", marginRight: "10px", fontSize: "22px" }}
                    />
                    Hours of Operation
                  </div>
                  <p style={{ fontFamily: "var(--text-font)", fontSize: "15px", color: "#5f5a54", margin: 0 }}>
                    {"Spa Bali Moon operates daily from "}
                    <strong>9am to 11pm</strong>, offering both in‑spa and home service treatments.
                  </p>
                </div>
                <div style={{ borderTop: "1px solid rgba(95, 90, 84, 0.12)", paddingTop: "40px" }}>
                  <h2
                    className="look-h3"
                    style={{
                      fontFamily: "var(--title-font)",
                      fontSize: "26px",
                      fontWeight: "500",
                      color: "#1c1a1d",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <i
                      className="fa-solid fa-address-book"
                      style={{ color: "var(--theme-color1)", fontSize: "28px", width: "32px", textAlign: "center" }}
                    />
                    Contact Us
                  </h2>
                  <p
                    style={{ fontFamily: "var(--text-font)", fontSize: "15px", color: "var(--text-color)", marginBottom: "25px" }}
                  >
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us
                    via:
                  </p>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <div
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(var(--theme-color1-rgb), 0.08)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "var(--theme-color1)",
                            fontSize: "18px",
                          }}
                        >
                          <i className="fa-light fa-envelope" />
                        </div>
                        <div>
                          <div
                            className="look-h6"
                            style={{ fontFamily: "var(--title-font)", margin: 0, fontSize: "14px", color: "#1c1a1d" }}
                          >
                            Email
                          </div>
                          <a
                            href={`mailto:${business.email}`}
                            style={{ fontFamily: "var(--text-font)", fontSize: "14px", color: "var(--text-color)" }}
                          >
                            {business.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <div
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(var(--theme-color1-rgb), 0.08)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "var(--theme-color1)",
                            fontSize: "18px",
                          }}
                        >
                          <i className="fa-brands fa-whatsapp" />
                        </div>
                        <div>
                          <div
                            className="look-h6"
                            style={{ fontFamily: "var(--title-font)", margin: 0, fontSize: "14px", color: "#1c1a1d" }}
                          >
                            WhatsApp
                          </div>
                          <a
                            href="https://wa.me/6287863175144"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: "var(--text-font)", fontSize: "14px", color: "var(--text-color)" }}
                          >
                            +62 878-6317-5144
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <div
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(var(--theme-color1-rgb), 0.08)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "var(--theme-color1)",
                            fontSize: "18px",
                          }}
                        >
                          <i className="fa-light fa-location-dot" />
                        </div>
                        <div>
                          <div
                            className="look-h6"
                            style={{ fontFamily: "var(--title-font)", margin: 0, fontSize: "14px", color: "#1c1a1d" }}
                          >
                            Address
                          </div>
                          <span style={{ fontFamily: "var(--text-font)", fontSize: "14px", color: "var(--text-color)" }}>
                            Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
