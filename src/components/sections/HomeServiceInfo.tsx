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
        d="M12.5 17.6875C12.3459 17.6875 12.199 17.6187 12.1 17.5C8.47609 13.15 8.47609 8.16143 12.1 3.81143C12.2969 3.57393 12.7021 3.57393 12.9 3.81143C16.524 8.16143 16.524 13.15 12.9 17.5C12.8011 17.6187 12.6542 17.6875 12.5 17.6875ZM12.5 4.98226C9.71359 8.66143 9.71359 12.651 12.5 16.3302C15.2865 12.651 15.2865 8.66143 12.5 4.98226Z"
        fill="currentColor"
      />
      <path
        d="M12.5 22.3749C12.3458 22.3749 12.199 22.3062 12.1 22.1874C11.2479 21.1645 10.5854 20.0843 10.1323 18.978C10.024 18.7114 10.151 18.4072 10.4167 18.2989C10.6833 18.1905 10.9875 18.3176 11.0958 18.5832C11.4344 19.4124 11.9052 20.228 12.499 21.0155C13.0917 20.228 13.5625 19.4124 13.9021 18.5832C14.0104 18.3176 14.3146 18.1895 14.5812 18.2989C14.8479 18.4072 14.975 18.7114 14.8656 18.978C14.4125 20.0843 13.751 21.1645 12.8979 22.1874C12.801 22.3062 12.6542 22.3749 12.5 22.3749Z"
        fill="currentColor"
      />
      <path
        d="M12.5094 17.6772C12.2438 17.6772 12.0167 17.4741 11.9917 17.2043C11.9656 16.9178 12.1761 16.6637 12.4625 16.6376C17.4125 16.1793 20.1344 13.647 20.7646 8.90324C18.4854 9.21053 16.699 10.0105 15.4448 11.2824C15.2406 11.4876 14.9104 11.4897 14.7083 11.2876C14.5031 11.0855 14.5011 10.7564 14.7021 10.5512C16.249 8.98241 18.4708 8.05532 21.3073 7.79386C21.4583 7.7772 21.6136 7.83449 21.7229 7.94386C21.8313 8.05324 21.8875 8.20532 21.874 8.35949C21.3625 14.0168 18.2281 17.1501 12.5594 17.6751C12.5417 17.6772 12.525 17.6772 12.5094 17.6772Z"
        fill="currentColor"
      />
      <path
        d="M18.2354 20.2978C16.2146 20.2978 14.1927 19.5301 12.1833 17.9926C11.9542 17.8186 11.9115 17.4916 12.0854 17.2624C12.2615 17.0332 12.5875 16.9916 12.8156 17.1655C16.4573 19.9509 20.0031 19.9551 23.6438 17.1739C21.9906 15.9155 20.3354 15.2259 18.7156 15.1197C18.4292 15.1009 18.2125 14.853 18.2302 14.5655C18.25 14.2791 18.4708 14.0603 18.7844 14.0801C20.7917 14.2114 22.8198 15.1176 24.8115 16.7718C24.9313 16.8707 25 17.0176 25 17.1718C25 17.327 24.9323 17.4739 24.8125 17.5728C22.6323 19.3895 20.4333 20.2978 18.2354 20.2978Z"
        fill="currentColor"
      />
      <path
        d="M6.76458 20.2978C4.56667 20.2978 2.36771 19.3895 0.1875 17.5728C0.0677083 17.4739 0 17.327 0 17.1718C0 17.0176 0.06875 16.8707 0.188542 16.7718C2.18021 15.1176 4.20833 14.2114 6.21562 14.0801C6.52396 14.0582 6.75104 14.2791 6.76979 14.5655C6.78854 14.852 6.57187 15.1009 6.28437 15.1197C4.66354 15.2259 3.00833 15.9166 1.35625 17.1739C4.99479 19.9551 8.54271 19.9509 12.1844 17.1655C12.4125 16.9916 12.7396 17.0332 12.9146 17.2624C13.0885 17.4905 13.0458 17.8176 12.8167 17.9926C10.8073 19.5291 8.78646 20.2978 6.76458 20.2978Z"
        fill="currentColor"
      />
      <path
        d="M12.4906 17.6772C12.4739 17.6772 12.4583 17.6772 12.4416 17.6751C6.77286 17.1501 3.63849 14.0157 3.12703 8.35949C3.11244 8.20636 3.16869 8.05324 3.27807 7.94386C3.38744 7.83449 3.53849 7.7772 3.69369 7.79386C6.53015 8.05428 8.75099 8.98241 10.2989 10.5512C10.4999 10.7564 10.4979 11.0855 10.2927 11.2876C10.0895 11.4897 9.75932 11.4876 9.55619 11.2824C8.30203 10.0105 6.51453 9.21157 4.23536 8.90324C4.86453 13.647 7.58744 16.1793 12.5374 16.6376C12.8239 16.6637 13.0354 16.9178 13.0083 17.2043C12.9833 17.4741 12.7562 17.6772 12.4906 17.6772Z"
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
        <img loading="lazy" decoding="async" src="/images/shape/about-left-shape.png" alt="shape" />
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
          src="/images/shape/about-right-shape.png"
          alt="shape"
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
            {brandMark}Treat yourself to a Balinese spa experience right where you are
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
                      title: "Full Spa Setup Provided to You",
                      desc: "Therapists bring the massage setup, towels, oils, and treatment essentials, so you do not need to prepare equipment before the session.",
                    },
                    {
                      title: "On-Time & Reliable Service",
                      desc: "Your appointment time and location are confirmed in advance so the therapist can arrive prepared and begin as scheduled.",
                    },
                    {
                      title: "Flexible Scheduling",
                      desc: "Home service is available daily from 9:00 AM to 11:00 PM, making it easier to arrange a treatment around your Bali plans.",
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
                            color: "#707070",
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
                  {"Home service fee: "}
                  <span
                    style={{
                      color: "var(--theme-color1)",
                      fontWeight: "600",
                    }}
                  >
                    IDR 75,000
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
