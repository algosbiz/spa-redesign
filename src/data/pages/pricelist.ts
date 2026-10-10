// ⚠️  Copied from spabalimoon.com (live bundle, 28 September 2026): every text,
// price and image below is what the live price list shows. Do not reword or
// re-price without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/

/** One row of a treatment's price list: duration or variant, and its price. */
export type PriceOption = { time: string; price: string };

export type PricedService = {
  id: number | string;
  name: string;
  desc?: string;
  image: string;
  benefits?: string[];
  options?: PriceOption[];
  /** Sub-treatments listed under this one (couple massages, four-hand warm candle). */
  children?: { name: string; desc?: string; options: PriceOption[] }[];
};

export type PackageGroup = {
  subTitle: string;
  title: string;
  description: string;
  cardTitle: string;
  /** Couple packages: the price covers two guests ("2 pax"). */
  twoPax?: boolean;
  packages: { price: string; items: { duration: string; service: string }[] }[];
};

/**
 * PRICELIST & SPA PACKAGES PAGE (/seminyak/)
 */
export const pricelistPage = {
  path: "/seminyak/",
  seo: {
    title: "Massage Seminyak - Prices & Spa Packages - Spa Bali Moon",
    description:
      "Massage in Seminyak with prices: Balinese, Thai, shiatsu, facials and couples packages. In-spa or home service. Book via WhatsApp.",
  },

  banner: {
    subTitle: "Find Your Treatment",
    titleSpan: "Massage in Seminyak:",
    title: "Prices, Treatments & Packages",
    buttonText: "Book Now",
    image: "/images/pricelist/pricelist-1.webp"
  },

  /** The "complete spa menu" block with its two photos. `firstStat`/`secondStat` break after the first words. */
  menu: {
    topSubTitle: "Start With What You Need",
    topTitle: "Choose Your Seminyak Massage or Spa Treatment",
    topText: "Our treatment menu makes it easy to find the care your body or skin needs, from massage and muscle care to facials, body scrubs, and beauty treatments. Choose the treatment and duration that suit your day.",
    contentSubTitle: "More Than Massage",
    contentTitle: "A Complete Spa Menu in Seminyak",
    contentText: "Spa Bali Moon brings massage, body care, facials, and beauty services together in one place. Choose a familiar treatment, try something new during your Bali stay, or ask our team for help finding the right option.",
    firstStat: ["Established Since", "2009"] as [string, string],
    secondStat: ["In-Spa &", "Home Service"] as [string, string],
    contentImage: "/images/pricelist/pricelist-2.webp",
    featureImage: "/images/pricelist/pricelist-3.webp",
  },

  priceList: {
    subTitle: "Best Price",
    title: "Seminyak Massage Price List",
    note: "Home service available — extra IDR 75K per therapist.",
    tabs: [
    {
      label: "Massage",
      services: [
        {
          name: "Aloe Vera Massage",
          desc: "A soothing massage that helps calm the skin, reduce irritation, and support gentle recovery after travel or sun exposure.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 250K"
            }
          ],
          id: 1,
          image: "/images/listmenu/aloeveramassage.webp"
        },
        {
          name: "Aromatherapy Massage",
          desc: "A calming massage that uses essential oils and gentle strokes to ease tension and support circulation.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 199K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 339K"
            },
            {
              time: "2 Hours",
              price: "IDR 439K"
            }
          ],
          id: 2,
          image: "/images/listmenu/aromatherapymassage.webp"
        },
        {
          name: "Balinese Massage - Relaxing",
          desc: "A holistic massage that combines flowing movements, gentle stretches, and aromatherapy to encourage deep relaxation.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 159K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 239K"
            },
            {
              time: "2 Hours",
              price: "IDR 330K"
            },
            {
              time: "1 Hour Aloe Vera",
              price: "IDR 195K"
            }
          ],
          id: 5,
          image: "/images/listmenu/balinesemassage.webp"
        },
        {
          name: "Back Massage",
          desc: "A focused massage that targets back tension to improve circulation and restore comfort.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 90K"
            },
            {
              time: "1 Hour",
              price: "IDR 199K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 259K"
            },
            {
              time: "2 Hours",
              price: "IDR 339K"
            }
          ],
          id: 6,
          image: "/images/listmenu/backmassage.webp"
        },
        {
          name: "Cellulite Massage",
          desc: "A targeted massage that helps stimulate circulation and support firmer-looking skin.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 350K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 520K"
            },
            {
              time: "2 Hours",
              price: "IDR 695K"
            }
          ],
          id: 12,
          image: "/images/listmenu/cellulitemassage.webp"
        },
        {
          name: "Deep Tissue Massage",
          desc: "A therapeutic massage that uses deeper pressure to ease muscle stiffness and release tension.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 269K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 359K"
            }
          ],
          id: 13,
          image: "/images/listmenu/deeptissuemassage.webp"
        },
        {
          name: "Foot Reflexology",
          desc: "A focused massage applying pressure to reflex points on the feet to support circulation and relaxation.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 99K"
            },
            {
              time: "1 Hour",
              price: "IDR 169K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 239K"
            }
          ],
          id: 15,
          image: "/images/listmenu/footreflexology.webp"
        },
        {
          name: "Foot Massage",
          desc: "A relieving massage that focuses on the soles, heels, and ankles to reduce stiffness.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 159K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 239K"
            },
            {
              time: "2 Hours",
              price: "IDR 330K"
            }
          ],
          id: 16,
          image: "/images/listmenu/footmassage.webp"
        },
        {
          name: "Four Hand Massage",
          desc: "A coordinated massage performed by two therapists working in harmony for deeper relaxation.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 339K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 499K"
            },
            {
              time: "2 Hours",
              price: "IDR 669K"
            }
          ],
          id: 17,
          image: "/images/listmenu/fourhandmassage.webp"
        },
        {
          name: "Herbal Massage",
          desc: "A comforting massage using herbal techniques to support relaxation, circulation, and muscle relief.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 199K"
            },
            {
              time: "2 Hours",
              price: "IDR 399K"
            }
          ],
          id: 18,
          image: "/images/listmenu/herbalmassage.webp"
        },
        {
          name: "Hot Stone Massage",
          desc: "A soothing massage using heated basalt stones to relax muscles and encourage circulation.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 250K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 380K"
            },
            {
              time: "2 Hours",
              price: "IDR 495K"
            }
          ],
          id: 19,
          image: "/images/listmenu/hotstonemassage.webp"
        },
        {
          name: "Head Massage",
          desc: "A calming massage that helps release tension around the head and scalp.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 159K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 239K"
            },
            {
              time: "2 Hours",
              price: "IDR 330K"
            }
          ],
          id: 20,
          image: "/images/listmenu/headmassage.webp"
        },
        {
          name: "Lymphatic Massage",
          desc: "A gentle massage that supports natural drainage, circulation, and overall body balance.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 300K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 440K"
            },
            {
              time: "2 Hours",
              price: "IDR 580K"
            }
          ],
          id: 21,
          image: "/images/listmenu/lymphaticmassage%20.webp"
        },
        {
          name: "Organic Warm Candle Oil Massage",
          desc: "A warming massage using natural candle oils to relax muscles and ease tension.",
          options: [
            {
              time: "1 Hour · Warm Candle Wax Balinese",
              price: "IDR 269K"
            },
            {
              time: "1.5 Hours · Warm Candle Wax Balinese",
              price: "IDR 399K"
            },
            {
              time: "2 Hours · Warm Candle Wax Balinese",
              price: "IDR 499K"
            }
          ],
          children: [
            {
              name: "Four Hand Warm Candle",
              desc: "A deeply relaxing treatment where two therapists work together using warmed oils.",
              options: [
                {
                  time: "1 Hour · Four Hand Warm Candle",
                  price: "IDR 539K"
                },
                {
                  time: "1.5 Hours · Four Hand Warm Candle",
                  price: "IDR 799K"
                },
                {
                  time: "2 Hours · Four Hand Warm Candle",
                  price: "IDR 999K"
                }
              ]
            }
          ],
          id: 23,
          image: "/images/listmenu/organicwarmcandle.webp"
        },
        {
          name: "Shiatsu Massage",
          desc: "A traditional Japanese massage using oil-free pressure-point techniques to release tension.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 119K"
            },
            {
              time: "1 Hour",
              price: "IDR 219K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 329K"
            }
          ],
          id: 24,
          image: "/images/listmenu/shiatsumassage.webp"
        },
        {
          name: "Sport Massage",
          desc: "A focused massage designed to relieve muscle tightness and support mobility.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 269K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 359K"
            }
          ],
          id: 25,
          image: "/images/listmenu/sportmassage.webp"
        },
        {
          name: "Traditional Massage - Strong",
          desc: "A firmer massage using deeper pressure for a more intense muscle release.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 90K"
            },
            {
              time: "1 Hour",
              price: "IDR 169K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 259K"
            },
            {
              time: "2 Hours",
              price: "IDR 339K"
            }
          ],
          id: 26,
          image: "/images/listmenu/traditionalmassage.webp"
        },
        {
          name: "Thai Massage",
          desc: "A traditional oil-free massage using assisted stretches and deep pressure techniques.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 133K"
            },
            {
              time: "1 Hour",
              price: "IDR 259K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 379K"
            }
          ],
          id: 27,
          image: "/images/listmenu/thaimassage.webp"
        },
        {
          name: "Virgin Cold-Press Coconut Oil Massage",
          desc: "A nourishing massage using pure coconut oil to relax muscles and soften the skin.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 300K"
            },
            {
              time: "1.5 Hours",
              price: "IDR 440K"
            },
            {
              time: "2 Hours",
              price: "IDR 580K"
            }
          ],
          id: 28,
          image: "/images/listmenu/coconutoilmassage.webp"
        }
      ]
    },
    {
      label: "Beauty",
      services: [
        {
          name: "Bali Moon Tea Tree Facial",
          desc: "A purifying facial treatment for oily or blemish-prone skin using clay, tea tree care, and nourishing oils to restore balance. Benefits:",
          benefits: [
            "Regulates shine and excess oil",
            "Aids in decreasing redness and breakouts",
            "Soothes and refreshes the skin",
            "Maintains balanced hydration"
          ],
          options: [
            {
              time: "Price",
              price: "IDR 196K"
            }
          ],
          id: 3,
          image: "/images/listmenu/balimoonteatreefacial.webp"
        },
        {
          name: "Bali Moon Gold Facial",
          desc: "A restorative facial treatment using gold and argan oil to enhance radiance, hydration, and skin firmness. Benefits:",
          benefits: [
            "Restores a natural glow",
            "Smooths and firms the skin",
            "Provides deep hydration",
            "Enhances overall skin vitality"
          ],
          options: [
            {
              time: "Price",
              price: "IDR 269K"
            }
          ],
          id: 4,
          image: "/images/listmenu/balimoongoldfacial.webp"
        },
        {
          name: "Body Scrub",
          desc: "A refreshing treatment that gently exfoliates the skin, leaving it smooth, clean, and renewed.",
          options: [
            {
              time: "Body Massage & Scrub · Start From",
              price: "IDR 169K"
            },
            {
              time: "Chocolate",
              price: "IDR 169K"
            },
            {
              time: "Coconut",
              price: "IDR 169K"
            },
            {
              time: "Strawberry",
              price: "IDR 169K"
            },
            {
              time: "Bengkoang",
              price: "IDR 169K"
            },
            {
              time: "Jasmine",
              price: "IDR 169K"
            },
            {
              time: "Green Tea",
              price: "IDR 169K"
            },
            {
              time: "Spa Sari",
              price: "IDR 169K"
            },
            {
              time: "Additional Body Mask",
              price: "IDR 100K"
            }
          ],
          id: 7,
          image: "/images/listmenu/bodyscrub.webp"
        },
        {
          name: "Foot Scrub",
          desc: "A short exfoliating treatment that smooths rough skin on the feet and leaves them feeling refreshed.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 100K"
            }
          ],
          id: 8,
          image: "/images/listmenu/footscrub.webp"
        },
        {
          name: "Biokos Facial",
          desc: "A customized facial treatment for dry, normal, or oily skin, including a facial massage and mask.",
          options: [
            {
              time: "Biokos",
              price: "IDR 179K"
            },
            {
              time: "Mustika Ratu",
              price: "IDR 169K"
            },
            {
              time: "Sari Ayu",
              price: "IDR 169K"
            },
            {
              time: "Viva",
              price: "IDR 169K"
            }
          ],
          id: 9,
          image: "/images/listmenu/biokosfacial.webp"
        },
        {
          name: "Creambath & Hair Mask",
          desc: "A nourishing hair treatment that includes cleansing, conditioning, and a relaxing head massage.",
          options: [
            {
              time: "Ginseng",
              price: "IDR 165K"
            },
            {
              time: "Avocado",
              price: "IDR 165K"
            },
            {
              time: "Aloe Vera",
              price: "IDR 165K"
            },
            {
              time: "L'Oreal",
              price: "IDR 195K"
            },
            {
              time: "NR",
              price: "IDR 165K"
            },
            {
              time: "Hair Mask",
              price: "IDR 165K"
            }
          ],
          id: 10,
          image: "/images/listmenu/creambath.webp"
        },
        {
          name: "Ear Candle",
          desc: "A gentle traditional treatment designed to promote comfort and relaxation.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 159K"
            }
          ],
          id: 14,
          image: "/images/listmenu/earcandle.webp"
        },
        {
          name: "Manicure Pedicure",
          desc: "A grooming treatment for hands and feet, including nail care, cuticle work, and polish.",
          options: [
            {
              time: "Manicure & Pedicure",
              price: "IDR 238K"
            },
            {
              time: "Manicure",
              price: "IDR 99K"
            },
            {
              time: "Pedicure",
              price: "IDR 139K"
            },
            {
              time: "Nail Color Feet & Hands",
              price: "IDR 138K"
            },
            {
              time: "Nail Color Feet or Hands",
              price: "IDR 69K"
            },
            {
              time: "Nail Remover Feet & Hands",
              price: "IDR 98K"
            },
            {
              time: "Nail Gel Feet & Hands",
              price: "IDR 438K"
            },
            {
              time: "Nail Gel Feet or Hands",
              price: "IDR 219K"
            }
          ],
          id: 22,
          image: "/images/listmenu/manicurepedicure.webp"
        },
        {
          name: "Waxing",
          desc: "A hair removal treatment using hot wax to leave the skin smooth and clean.",
          options: [
            {
              time: "Arms",
              price: "IDR 159K"
            },
            {
              time: "Under Arms",
              price: "IDR 99K"
            },
            {
              time: "Back · Start From",
              price: "IDR 139K"
            },
            {
              time: "Full Back",
              price: "IDR 299K"
            },
            {
              time: "Half Legs",
              price: "IDR 149K"
            },
            {
              time: "Full Legs",
              price: "IDR 299K"
            },
            {
              time: "Waxing Brazilian",
              price: "IDR 350K"
            }
          ],
          id: 29,
          image: "/images/listmenu/waxing.webp"
        }
      ]
    },
    {
      label: "For Couples",
      services: [
        {
          name: "Couple Balinese Massage",
          desc: "1 Hour – Balinese Massage",
          options: [
            {
              time: "1 Hour · Balinese Massage · 2 Pax",
              price: "IDR 319K"
            },
            {
              time: "1.5 Hours · Balinese Massage · 2 Pax",
              price: "IDR 479K"
            },
            {
              time: "2 Hours · Balinese Massage · 2 Pax",
              price: "IDR 659K"
            }
          ],
          id: "couple-1",
          image: "/images/listmenu/couplebalinesemassage.webp"
        },
        {
          name: "Couple Traditional Massage",
          desc: "A side-by-side massage with firmer pressure to help release tension together.",
          options: [
            {
              time: "1 Hour · Traditional Massage · 2 Pax",
              price: "IDR 339K"
            },
            {
              time: "1.5 Hours · Traditional Massage · 2 Pax",
              price: "IDR 519K"
            },
            {
              time: "2 Hours · Traditional Massage · 2 Pax",
              price: "IDR 679K"
            }
          ],
          id: "couple-2",
          image: "/images/listmenu/coupletraditionalmassage.webp"
        },
        {
          name: "Couple Deep Tissue Massage",
          desc: "A deeper-pressure massage for two, focused on easing tight muscles and improving comfort.",
          options: [
            {
              time: "1 Hour · Deep Tissue Massage · 2 Pax",
              price: "IDR 539K"
            },
            {
              time: "1.5 Hours · Deep Tissue Massage · 2 Pax",
              price: "IDR 719K"
            }
          ],
          id: "couple-3",
          image: "/images/listmenu/coupledeeptissumassage.webp"
        },
        {
          name: "Couple Warm Candle Oil Massages",
          desc: "A comforting couple’s massage using gently heated candle oils to soften muscles and create a sense of calm.",
          options: [
            {
              time: "1 Hour · Warm Candle Massage · 2 Pax",
              price: "IDR 539K"
            },
            {
              time: "1.5 Hours · Warm Candle Massage · 2 Pax",
              price: "IDR 799K"
            },
            {
              time: "2 Hours · Warm Candle Massage · 2 Pax",
              price: "IDR 999K"
            }
          ],
          id: "couple-4",
          image: "/images/listmenu/couplewarmcandle.webp"
        }
      ]
    },
    {
      // Not on the live page: there the four packages were one row at the end of
      // "For Couples". The owner asked for them as a tab of their own.
      label: "Couple Packages",
      services: [
        {
          name: "Couple Package A",
          desc: "Balinese Massage + Ear Candle · 2 Pax",
          options: [
            {
              time: "1 Hour Balinese Massage + 30 Mins Ear Candle · 2 Pax",
              price: "IDR 639K"
            }
          ],
          id: "couple-package-a",
          image: "/images/listmenu/couplemassagepackage.webp"
        },
        {
          name: "Couple Package B",
          desc: "Balinese Massage + Bali Moon Facial · 2 Pax",
          options: [
            {
              time: "1 Hour Balinese Massage + 1 Hour Bali Moon Facial · 2 Pax",
              price: "IDR 709K"
            }
          ],
          id: "couple-package-b",
          image: "/images/listmenu/couplebalinesemassage.webp"
        },
        {
          name: "Couple Package C",
          desc: "Warm Candle Massage + Ear Candle · 2 Pax",
          options: [
            {
              time: "1 Hour Warm Candle Massage + 30 Mins Ear Candle · 2 Pax",
              price: "IDR 849K"
            }
          ],
          id: "couple-package-c",
          image: "/images/listmenu/couplewarmcandle.webp"
        },
        {
          name: "Couple Package D",
          desc: "Warm Candle Massage + Bali Moon Facial · 2 Pax",
          options: [
            {
              time: "1 Hour Warm Candle Massage + 1 Hour Bali Moon Facial · 2 Pax",
              price: "IDR 929K"
            }
          ],
          id: "couple-package-d",
          image: "/images/listmenu/couplemassage.webp"
        }
      ]
    }
  ] as { label: string; services: PricedService[] }[],
  },

  packagesIntro: {
    subTitle: "All Spa Packages",
    title: "In-Spa and Home Service Massage Prices",
    text: "We offer multiple spa packages at our spa or as a day spa at home. Some guests know what they want, while others wish to combine treatments. We provide the help, so you can enjoy a laid-back and cozy experience, whether alone, with a partner, or with friends.",
    note: "Browse the packages below to find a combination that fits your plans."
  },

  /** Shown sorted by title, as on the live page. */
  packageGroups: [
    {
      subTitle: "Rejuvenate and Revive",
      title: "Balinese Massage Packages",
      description: "Our signature Balinese massage is a traditional treatment designed to release muscle tension, ease stress, and restore balance. Available at our Seminyak spa or as a convenient home service, this therapy offers complete relaxation wherever you are. For bookings or package details, please contact us via WhatsApp.",
      cardTitle: "Balinese Massage",
      packages: [
        {
          price: "IDR 449K",
          items: [
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "1 Hr",
              service: "Mani & Pedi"
            },
            {
              duration: "30 Mins",
              service: "Cream Bath"
            }
          ]
        },
        {
          price: "IDR 549K",
          items: [
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "1 Hr",
              service: "Mani & Pedi"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 449K",
          items: [
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "30 Mins",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 399K",
          items: [
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "30 Mins",
              service: "Manicure"
            },
            {
              duration: "30 Mins",
              service: "Pedicure"
            }
          ]
        }
      ]
    },
    {
      subTitle: "Relax and Revitalize",
      title: "Thai Massage Packages",
      description: "A good choice if you feel stiff or tired. Gentle pressure and stretching help you feel lighter and more relaxed. Available in-spa or at home. See our packages or contact us on WhatsApp to schedule.",
      cardTitle: "Thai Massage",
      packages: [
        {
          price: "IDR 549K",
          items: [
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            },
            {
              duration: "30 Mins",
              service: "Manicure"
            }
          ]
        },
        {
          price: "IDR 649K",
          items: [
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "1 Hr",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 449K",
          items: [
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 539K",
          items: [
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "1 Hr",
              service: "Cream Bath"
            },
            {
              duration: "30 Mins",
              service: "Body Scrub"
            }
          ]
        }
      ]
    },
    {
      subTitle: "Revitalize and Renew",
      title: "Cream Bath Packages",
      description: "Ideal when you simply want to slow down. Do a light hair wash, conditioner, and a calming head massage to relax completely. For tailored packages or to schedule a home session, please reach out to us through WhatsApp.",
      cardTitle: "Cream Bath",
      packages: [
        {
          price: "IDR 649K",
          items: [
            {
              duration: "1 Hr",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 549K",
          items: [
            {
              duration: "1 Hr",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Hot Stone"
            },
            {
              duration: "30 Mins",
              service: "Reflexology"
            }
          ]
        },
        {
          price: "IDR 449K",
          items: [
            {
              duration: "30 Mins",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 539K",
          items: [
            {
              duration: "1 Hr",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "30 Mins",
              service: "Body Scrub"
            }
          ]
        }
      ]
    },
    {
      subTitle: "Exfoliate and Refresh",
      title: "Body Scrub Packages",
      description: "Great for refreshing your skin. A body scrub can go a long way toward removing any dull skin, followed by a relaxing massage so you're feeling good and clean. Get your package from us or book a session on WhatsApp.",
      cardTitle: "Body Scrub",
      packages: [
        {
          price: "IDR 439K",
          items: [
            {
              duration: "30 Mins",
              service: "Body Scrub"
            },
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 549K",
          items: [
            {
              duration: "30 Mins",
              service: "Body Scrub"
            },
            {
              duration: "1,5 Hr",
              service: "Hot Stone"
            },
            {
              duration: "30 Mins",
              service: "Head Massage"
            }
          ]
        },
        {
          price: "IDR 539K",
          items: [
            {
              duration: "30 Mins",
              service: "Body Scrub"
            },
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "1 Hr",
              service: "Cream Bath"
            }
          ]
        },
        {
          price: "IDR 549K",
          items: [
            {
              duration: "30 Mins",
              service: "Body Scrub"
            },
            {
              duration: "1 Hr",
              service: "Warm Candle"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        }
      ]
    },
    {
      subTitle: "Relax and Unwind",
      title: "Hot Stone Packages",
      description: "Great for if you require deeper relaxation. Warm stones are utilized to release tension and relax your body. This can be enjoyed on its own or combined with a full massage for a more complete experience.",
      cardTitle: "Hot Stone",
      packages: [
        {
          price: "IDR 549K",
          items: [
            {
              duration: "1,5 Hr",
              service: "Hot Stone"
            },
            {
              duration: "30 Mins",
              service: "Body Scrub"
            },
            {
              duration: "30 Mins",
              service: "Head Massage"
            }
          ]
        },
        {
          price: "IDR 549K",
          items: [
            {
              duration: "1 Hr",
              service: "Hot Stone"
            },
            {
              duration: "1 Hr",
              service: "Cream Bath"
            },
            {
              duration: "30 Mins",
              service: "Reflexology"
            }
          ]
        },
        {
          price: "IDR 449K",
          items: [
            {
              duration: "1 Hr",
              service: "Hot Stone"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 519K",
          items: [
            {
              duration: "1,5 Hr",
              service: "Hot Stone"
            },
            {
              duration: "30 Mins",
              service: "Pedicure"
            }
          ]
        }
      ]
    },
    {
      subTitle: "Nourish and Rejuvenate",
      title: "Facial Treatment Packages",
      description: "A simple facial treatment and cleansing to keep your skin balanced and comfortable. Sessions are in-spa or a home service. For more on your custom treatment, please contact us over WhatsApp.",
      cardTitle: "Bali Moon Facial",
      packages: [
        {
          price: "IDR 439K",
          items: [
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            },
            {
              duration: "30 Mins",
              service: "Body Scrub"
            },
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            }
          ]
        },
        {
          price: "IDR 649K",
          items: [
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            },
            {
              duration: "1 Hr",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Thai Massage"
            }
          ]
        },
        {
          price: "IDR 449K",
          items: [
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            },
            {
              duration: "1 Hr",
              service: "Thai Massage"
            }
          ]
        },
        {
          price: "IDR 549K",
          items: [
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            },
            {
              duration: "1 Hr",
              service: "Warm Candle"
            },
            {
              duration: "30 Mins",
              service: "Body Scrub"
            }
          ]
        }
      ]
    },
    {
      subTitle: "Pamper and Perfect",
      title: "Manicure and Pedicure Packages",
      description: "For hands and feet that need a little care. Our manicure and pedicure appointments keep them neat, clean, and refreshed. The treatments are available in-spa or at home. For tailored packages, you can contact us via WhatsApp.",
      cardTitle: "Mani Pedi",
      packages: [
        {
          price: "IDR 449K",
          items: [
            {
              duration: "1 Hr",
              service: "Mani & Pedi"
            },
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "30 Mins",
              service: "Cream bath"
            }
          ]
        },
        {
          price: "IDR 549K",
          items: [
            {
              duration: "1 Hr",
              service: "Mani & Pedi"
            },
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 299K",
          items: [
            {
              duration: "1 Hr",
              service: "Mani & Pedi"
            },
            {
              duration: "30 Mins",
              service: "Cream Bath"
            }
          ]
        },
        {
          price: "IDR 399K",
          items: [
            {
              duration: "30 Mins",
              service: "Pedicure"
            },
            {
              duration: "30 Mins",
              service: "Manicure"
            },
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            }
          ]
        }
      ]
    },
    {
      subTitle: "Reconnect and Relax Together",
      title: "Couples Massage Packages",
      description: "A soothing massage experience to enjoy side by side. Great to spend a quiet moment together in a peaceful place. Sessions can be conducted in-spa or at home. The opportunity to get custom packages or book reservations are available on WhatsApp.",
      cardTitle: "Couple Massage",
      twoPax: true,
      packages: [
        {
          price: "IDR 639K",
          items: [
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "30 Mins",
              service: "Ear Candle"
            }
          ]
        },
        {
          price: "IDR 709K",
          items: [
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 849K",
          items: [
            {
              duration: "1 Hr",
              service: "Warm Candle"
            },
            {
              duration: "30 Mins",
              service: "Ear Candle"
            }
          ]
        },
        {
          price: "IDR 929K",
          items: [
            {
              duration: "1 Hr",
              service: "Warm Candle"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        }
      ]
    }
  ] as PackageGroup[],

  /** Icon on every card of a package group, keyed by `cardTitle`. */
  packageIcons: {
    "Balinese Massage": "/images/icon/icon-spa/Balinese.png",
    "Thai Massage": "/images/icon/icon-spa/Thai Massage.png",
    "Cream Bath": "/images/icon/icon-spa/Cream Bath.png",
    "Body Scrub": "/images/icon/icon-spa/Body Scrub.png",
    "Hot Stone": "/images/icon/icon-spa/Hot Stone.png",
    "Bali Moon Facial": "/images/icon/icon-spa/Biokos Facial.png",
    "Mani Pedi": "/images/icon/icon-spa/menipedi.png",
    "Couple Massage": "/images/icon/icon-spa/Couple Massage.png"
  } as Record<string, string>,

  faq: {
    subTitle: "Frequently Asked Questions",
    title: "Massage Prices in Seminyak: FAQs",
    imageTitle: "Book Your Massage in Seminyak",
    image: "/images/pricelist/pricelist-4.webp",
    items: [
    {
      question: "1. How do I choose the right treatment?",
      answer: "Start with what you want from your visit. Balinese Massage is a popular choice for general relaxation, while Sport Massage and Deep Tissue Massage are better suited to muscle tightness and recovery. Our team can also recommend a treatment based on how your body feels and what you would like to achieve."
    },
    {
      question: "2. Can I combine several treatments into one visit?",
      answer: "Yes. Massage, facials, body scrubs, cream baths, manicures, pedicures, and other services can be combined through our spa packages or selected treatment combinations."
    },
    {
      question: "3. Are the prices listed for each treatment?",
      answer: "Yes. Our treatment menu provides clear pricing for individual services and packages, making it easier to compare your options before booking."
    },
    {
      question: "4. Can I book a treatment at my hotel or villa?",
      answer: "Many of our massage and spa treatments are available through home service in Seminyak and nearby areas. An additional outcall fee of IDR 75,000 per therapist applies."
    },
    {
      question: "5. Can I create a custom spa package?",
      answer: "Yes. If you have several treatments in mind, contact us through WhatsApp and our team can help you find a combination that suits your preferences, schedule, and budget."
    },
    {
      question: "6. Do I need to book in advance?",
      answer: "Advance booking is recommended, particularly during busy periods. Contact us on WhatsApp with your preferred treatment and time so we can check availability."
    },
    {
      question: "7. What does \"K\" mean in the prices?",
      answer: "\"K\" means thousand Indonesian Rupiah. A treatment listed at 159K costs IDR 159,000. All prices on this page are in Indonesian Rupiah (IDR)."
    },
    {
      question: "8. What is your cheapest treatment?",
      answer: "The lowest-priced options are the 30-minute traditional massage and 30-minute back massage at IDR 90,000, and the 30-minute foot reflexology at IDR 99,000. For a full hour, Balinese massage at IDR 159,000 is the most affordable full-body treatment."
    },
    {
      question: "9. Are prices per person or per booking?",
      answer: "Individual treatments are priced per person. Couple treatments are priced for two people together; the \"2 pax\" label means the listed price covers both guests. For example, a one-hour couple Balinese massage at IDR 319,000 is the total for two people, not per person."
    },
    {
      question: "10. How much extra is home service?",
      answer: "Home service costs an additional IDR 75,000 per therapist on top of the treatment price. The treatment itself is charged at the same rate as in-spa. For a couple booking with two therapists, the outcall fee is IDR 150,000 total."
    },
    {
      question: "11. Which areas do you cover for outcall massage?",
      answer: "Seminyak and surrounding areas. For villas, hotels, or residences further out, message us on WhatsApp with your location and we will confirm availability and any additional travel cost before you book."
    },
    {
      question: "12. Is tipping expected?",
      answer: "Tipping is not required and is never added automatically. It is appreciated but entirely at your discretion, and our therapists are paid regardless."
    },
    {
      question: "13. Do prices differ between the website and in the spa?",
      answer: "No. The prices listed on this page are our current rates and apply both in-spa and for home service, with the outcall fee added separately for home visits. If you are ever quoted a different price, please tell us before your treatment."
    },
    {
      question: "14. Are towels, oils, and amenities included?",
      answer: "Yes. Every treatment includes clean towels, professional-grade massage oil, and use of a private treatment room. There is no additional charge for amenities."
    },
    {
      question: "15. Can I choose the pressure or a specific therapist?",
      answer: "Yes. Tell your therapist your preferred pressure at the start and adjust it at any point during the session. If you have a therapist you have booked before, request them by name on WhatsApp and we will do our best to accommodate."
    }
  ],
  },

  reserve: {
    title: "Plan Your Spa Day in Seminyak",
    text: "Some treatments are chosen because your muscles need attention. Others are for tired skin, overworked feet, a scalp that needs care, or simply the feeling that you have been moving from one plan to the next without stopping. Browse the Spa Bali Moon price list to find the treatment that fits your day.",
    closingText: "Visit us in Seminyak or arrange selected treatments at your villa or hotel.",
    backgroundImage: "/images/pricelist/pricelist-5.webp"
  },
};
