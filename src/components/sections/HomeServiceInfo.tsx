/* eslint-disable @next/next/no-img-element -- the live site serves these as plain <img> */

export type HomeServiceInfoProps = {
  plain?: boolean;
};

const brandMark = (
    <img
      loading="lazy"
      decoding="async"
      className="brand-lotus-icon"
      src="/images/logo/sbm.webp"
      alt=""
      aria-hidden="true"
    />
  ),
  lotusIcon = (
    <svg
      width="22"
      height="23"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        color: "var(--theme-color1)",
        flex: "0 0 22px",
      }}
      aria-hidden="true"
    >
      <path
        d="M12.5 17.69c-.15 0-.3-.07-.4-.19-3.62-4.35-3.62-9.34 0-13.69.2-.24.6-.24.8 0 3.62 4.35 3.62 9.34 0 13.69-.1.12-.25.19-.4.19zm0-12.71c-2.79 3.68-2.79 7.67 0 11.35 2.79-3.68 2.79-7.67 0-11.35z"
        fill="currentColor"
      />
      <path
        d="M12.5 22.37c-.15 0-.3-.06-.4-.18-.85-1.03-1.51-2.11-1.97-3.21-.11-.27.02-.57.29-.68.26-.11.57.02.68.28.33.83.81 1.65 1.4 2.44.59-.79 1.06-1.61 1.4-2.44.11-.26.41-.39.68-.28.27.11.4.41.29.68-.46 1.1-1.12 2.18-1.97 3.21-.1.12-.25.18-.4.18z"
        fill="currentColor"
      />
      <path
        d="M12.51 17.68c-.27 0-.49-.21-.52-.48-.02-.28.19-.54.47-.56 4.95-.46 7.67-2.99 8.3-7.74-2.27.31-4.06 1.11-5.32 2.38-.2.21-.53.21-.73.01-.21-.2-.21-.53-.01-.74 1.55-1.57 3.77-2.49 6.61-2.76.15-.01.3.04.41.15.11.11.17.27.15.42-.51 5.66-3.64 8.79-9.31 9.32-.02 0-.04 0-.05 0z"
        fill="currentColor"
      />
      <path
        d="M18.24 20.3c-2.03 0-4.05-.77-6.06-2.31-.23-.17-.27-.5-.09-.73.17-.23.5-.27.73-.09 3.64 2.78 7.18 2.79 10.82 0-1.65-1.25-3.3-1.94-4.92-2.05-.29-.02-.51-.27-.49-.55.02-.29.24-.51.55-.49 2.01.13 4.04 1.04 6.03 2.69.12.1.19.25.19.4 0 .16-.07.3-.19.4-2.18 1.82-4.38 2.73-6.57 2.73z"
        fill="currentColor"
      />
      <path
        d="M6.76 20.3c-2.19 0-4.39-.91-6.57-2.73-.12-.1-.19-.24-.19-.4 0-.15.07-.3.19-.4 1.99-1.65 4.02-2.56 6.03-2.69.3-.02.53.2.55.49.02.28-.2.53-.49.55-1.62.11-3.27.8-4.92 2.05 3.63 2.79 7.18 2.78 10.82 0 .23-.18.56-.14.73.09.18.23.14.56-.09.73-2.01 1.54-4.03 2.31-6.06 2.31z"
        fill="currentColor"
      />
      <path
        d="M12.49 17.68c-.02 0-.03 0-.05 0-5.67-.53-8.8-3.66-9.31-9.32-.02-.15.04-.31.15-.42.11-.11.26-.16.41-.15 2.84.26 5.06 1.19 6.61 2.76.2.21.2.54-.01.74-.2.2-.53.2-.73-.01C8.3 10.01 6.51 9.21 4.24 8.9c.62 4.75 3.35 7.28 8.3 7.74.28.02.5.28.47.56-.03.27-.25.48-.52.48z"
        fill="currentColor"
      />
    </svg>
  );
export default function HomeServiceInfo({ plain = false }: HomeServiceInfoProps) {
  return (
    <section
      className="home-service-info-area pt-100 pb-100"
      style={{
        backgroundColor: plain ? "transparent" : "#fcfaf6",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <div
        className="shape1"
        style={{
          position: "absolute",
          left: 0,
          top: "15%",
          zIndex: -1,
        }}
      >
        <img loading="lazy" decoding="async" src="/images/shape/about-left-shape.webp" alt="" />
      </div>
      <div
        className="shape2"
        style={{
          position: "absolute",
          right: 0,
          bottom: "15%",
          zIndex: -1,
        }}
      >
        <img
          loading="lazy"
          decoding="async"
          className="sway_Y__animation"
          src="/images/shape/about-right-shape.webp"
          alt=""
        />
      </div>
      <div className="container">
        <div className="section-header center mb-60">
          <div
            className="sub-title look-h4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {brandMark}The Spa Comes to You
          </div>
          <h2
            className="title"
            style={{
              marginBottom: "20px",
            }}
          >
            Why Choose Our Home Service Massage
          </h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-10"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "50px 40px",
                boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.04)",
                border: "1px solid rgba(232, 227, 218, 0.6)",
              }}
            >
              <div className="list mt-25">
                <ul
                  style={{
                    padding: 0,
                    listStyle: "none",
                  }}
                >
                  {[
                    {
                      title: "Professional & Experienced Therapists",
                      desc: "Our trained therapists provide Balinese massage and selected spa treatments with attentive techniques suited to each guest.",
                    },
                    {
                      title: "Clean & Hygienic Practice",
                      desc: "Every appointment is prepared with clean linens, sanitised equipment, and quality massage oils for a safe and comfortable experience.",
                    },
                    {
                      title: "Linen, Oils & Essentials Brought to You",
                      desc: "Therapists bring fresh linen, towels, oils, and treatment essentials, so you do not need to prepare equipment before the session.",
                    },
                    {
                      title: "On-Time & Reliable Service",
                      desc: "Your appointment time and location are confirmed in advance so the therapist can arrive prepared and begin as scheduled.",
                    },
                    {
                      title: "Flexible Scheduling",
                      desc: "Home service is available daily from 9am to 11pm, so you can fit a treatment around your Bali plans.",
                    },
                    {
                      title: "Simple Booking via WhatsApp",
                      desc: "Send your preferred treatment, time, number of guests, and location through WhatsApp, and our team will confirm the booking details.",
                    },
                  ].map((e, a) => (
                    <li
                      style={{
                        display: "flex",
                        gap: "18px",
                        marginBottom: "25px",
                        alignItems: "flex-start",
                      }}
                      key={a}
                    >
                      <span
                        style={{
                          minWidth: "22px",
                          paddingTop: "4px",
                          display: "inline-flex",
                        }}
                      >
                        {lotusIcon}
                      </span>
                      <div>
                        <h3
                          style={{
                            marginBottom: "6px",
                            fontWeight: "500",
                            color: "#1c1a1d",
                            fontSize: "20px",
                            lineHeight: "30px",
                            fontFamily: "var(--title-font)",
                          }}
                        >
                          {e.title}
                        </h3>
                        <p
                          className="text"
                          style={{
                            margin: 0,
                            fontSize: "15px",
                            color: "var(--text-color)",
                            fontFamily: "var(--text-font)",
                            lineHeight: "1.75",
                          }}
                        >
                          {e.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="text-center mt-40"
                style={{
                  borderTop: "1px solid rgba(95, 90, 84, 0.12)",
                  paddingTop: "25px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    color: "#1c1a1d",
                    fontFamily: "var(--title-font)",
                    margin: 0,
                  }}
                >
                  {"Home service fee: from "}
                  <span
                    style={{
                      color: "var(--theme-color1)",
                      fontWeight: "600",
                    }}
                  >
                    IDR 75.000
                  </span>
                  {" per therapist"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
