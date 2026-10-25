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
  title: string;
  /**
   * What each package has, after "Four packages from IDR … to IDR … per
   * person, each " (PackageGroups writes that part from the prices). The
   * answer comes first, then the description (owner, 22 Oct: plain headings,
   * not "How Much Is a … Package?").
   */
  includes: string;
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
    // The quick answer under the H1 (copy rewrite, 15 Oct).
    text: "Massage at Spa Bali Moon in Seminyak starts at IDR 90.000 for 30 minutes. A one-hour Balinese massage is IDR 159.000 per person, and a couple's massage starts at IDR 319.000 for two. Open daily 9am–11pm at Jl. Pangkung Sari No. 30. Home service adds IDR 75.000 per therapist in the Seminyak area.",
    buttonText: "Book Now",
    image: "/images/banners/pricelist.webp",
    imagePosition: "70% 50%",
    // Phones: the whole photo above the long banner text (owner, 22 Oct).
    mobilePhoto: "/images/banners/pricelist-wide-sm.webp",
  },

  /** The "complete spa menu" block with its two photos. `firstStat`/`secondStat` break after the first words. */
  menu: {
    // One heading instead of two in a row (owner, 24 Oct: "seems a bit awkward"):
    // the centred "Choose Your Treatment" and "Our Treatments" beside the photo.
    contentSubTitle: "Start With What You Need",
    contentTitle: "Choose Your Treatment",
    contentText: "Massage and muscle care, facials, body scrubs and beauty treatments, all in one place in Seminyak. Choose a familiar treatment or try something new during your Bali stay, and ask our team on WhatsApp if you would like help choosing.",
    firstStat: ["In Seminyak", "Since 2009"] as [string, string],
    secondStat: ["In-Spa &", "Home Service"] as [string, string],
    contentImage: "/images/pricelist/pricelist-2.webp",
    featureImage: "/images/pricelist/pricelist-3.webp",
  },

  priceList: {
    subTitle: "Price List",
    title: "How Much Does a Massage Cost in Seminyak?",
    // The text of the removed "Prices at a Glance" table section (owner, 21 Oct), without "in one table".
    text: "Every massage price at Spa Bali Moon, in Indonesian rupiah. Prices are the same at our Seminyak spa and at your villa or hotel, where home service adds IDR 75.000 per therapist in the Seminyak area.",
    note: "Home service available — extra IDR 75.000 per therapist in the Seminyak area.",
    tabs: [
    {
      label: "Massage",
      services: [
        {
          name: "Aloe Vera Massage",
          desc: "A soothing massage with cooling aloe vera for skin that feels hot or tight after a day in the sun.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 250.000"
            }
          ],
          id: 1,
          image: "/images/listmenu/aloeveramassage.webp"
        },
        {
          name: "Aromatherapy Massage",
          desc: "A calming massage that uses essential oils and gentle strokes to ease tension and help you unwind.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 199.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 339.000"
            },
            {
              time: "2 Hours",
              price: "IDR 439.000"
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
              price: "IDR 159.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 239.000"
            },
            {
              time: "2 Hours",
              price: "IDR 330.000"
            },
            {
              time: "1 Hour Aloe Vera",
              price: "IDR 195.000"
            }
          ],
          id: 5,
          image: "/images/listmenu/balinesemassage.webp"
        },
        {
          name: "Back Massage",
          desc: "A focused massage that eases tension in the back and restores comfort.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 90.000"
            },
            {
              time: "1 Hour",
              price: "IDR 199.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 259.000"
            },
            {
              time: "2 Hours",
              price: "IDR 339.000"
            }
          ],
          id: 6,
          image: "/images/listmenu/backmassage.webp"
        },
        {
          name: "Cellulite Massage",
          desc: "A firm, targeted massage that leaves the skin feeling smooth.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 350.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 520.000"
            },
            {
              time: "2 Hours",
              price: "IDR 695.000"
            }
          ],
          id: 12,
          image: "/images/treatments/cards/cellulitemassage-warm.webp"
        },
        {
          name: "Cupping Therapy",
          desc: "Solid cups and a hand pump create gentle suction on your back and shoulders, with no flame: 1 hour of cupping, or 2 hours with a 1-hour Balinese massage.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 500.000"
            },
            {
              time: "2 Hours · with Balinese Massage",
              price: "IDR 600.000"
            }
          ],
          id: 30,
          image: "/images/listmenu/cuppingtherapy.webp"
        },
        {
          name: "Deep Tissue Massage",
          desc: "A firm massage that uses deeper pressure to ease muscle stiffness and release tension.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 269.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 359.000"
            },
            {
              time: "2 Hours",
              price: "IDR 518.000"
            }
          ],
          id: 13,
          image: "/images/listmenu/deeptissuemassage.webp"
        },
        {
          name: "Foot Reflexology",
          desc: "A focused massage applying pressure to reflex points on the feet for deep relaxation.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 99.000"
            },
            {
              time: "1 Hour",
              price: "IDR 169.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 239.000"
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
              price: "IDR 159.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 239.000"
            },
            {
              time: "2 Hours",
              price: "IDR 330.000"
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
              price: "IDR 339.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 499.000"
            },
            {
              time: "2 Hours",
              price: "IDR 669.000"
            }
          ],
          id: 17,
          image: "/images/listmenu/fourhandmassage.webp"
        },
        {
          name: "Herbal Massage",
          desc: "A comforting massage with herbal ingredients to relax tired muscles.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 199.000"
            },
            {
              time: "2 Hours",
              price: "IDR 399.000"
            }
          ],
          id: 18,
          image: "/images/listmenu/herbalmassage.webp"
        },
        {
          name: "Hot Stone Massage",
          desc: "A soothing massage using heated basalt stones to warm and relax tired muscles.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 250.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 380.000"
            },
            {
              time: "2 Hours",
              price: "IDR 495.000"
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
              time: "30 Minutes",
              price: "IDR 90.000"
            },
            {
              time: "1 Hour",
              price: "IDR 159.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 239.000"
            },
            {
              time: "2 Hours",
              price: "IDR 330.000"
            }
          ],
          id: 20,
          image: "/images/listmenu/headmassage.webp"
        },
        {
          name: "Lymphatic Massage",
          desc: "A gentle massage with light, rhythmic strokes that leaves the body feeling lighter.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 300.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 440.000"
            },
            {
              time: "2 Hours",
              price: "IDR 580.000"
            }
          ],
          id: 21,
          image: "/images/treatments/cards/lymphaticmassage-warm.webp"
        },
        {
          name: "Natural Warm Candle Massage",
          desc: "Our richest massage oil: lukewarm wax from a 100% natural shea butter candle, scented with aromas like frangipani, dripped onto your skin and massaged in.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 269.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 399.000"
            },
            {
              time: "2 Hours",
              price: "IDR 499.000"
            }
          ],
          children: [
            {
              name: "Four Hand Warm Candle Massage",
              desc: "Two therapists at once, with lukewarm wax from our natural shea butter candles dripped onto your skin and massaged in.",
              options: [
                {
                  time: "1 Hour · Four Hand Warm Candle",
                  price: "IDR 539.000"
                },
                {
                  time: "1.5 Hours · Four Hand Warm Candle",
                  price: "IDR 799.000"
                },
                {
                  time: "2 Hours · Four Hand Warm Candle",
                  price: "IDR 999.000"
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
              price: "IDR 119.000"
            },
            {
              time: "1 Hour",
              price: "IDR 219.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 329.000"
            }
          ],
          id: 24,
          image: "/images/treatments/cards/shiatsumassage-warm.webp"
        },
        {
          name: "Sports Massage",
          desc: "A focused massage to ease tight muscles after sport or a long day.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 269.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 359.000"
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
              price: "IDR 90.000"
            },
            {
              time: "1 Hour",
              price: "IDR 169.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 259.000"
            },
            {
              time: "2 Hours",
              price: "IDR 339.000"
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
              price: "IDR 133.000"
            },
            {
              time: "1 Hour",
              price: "IDR 259.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 379.000"
            }
          ],
          id: 27,
          image: "/images/treatments/cards/thaimassage-warm.webp"
        },
        {
          name: "Virgin Cold-Press Coconut Oil Massage",
          desc: "A nourishing massage using pure coconut oil to relax muscles and soften the skin.",
          options: [
            {
              time: "1 Hour",
              price: "IDR 300.000"
            },
            {
              time: "1.5 Hours",
              price: "IDR 440.000"
            },
            {
              time: "2 Hours",
              price: "IDR 580.000"
            }
          ],
          id: 28,
          image: "/images/treatments/cards/coconutoilmassage-warm.webp"
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
            "Helps skin look calmer and clearer",
            "Soothes and refreshes the skin",
            "Maintains balanced hydration"
          ],
          options: [
            {
              time: "Price",
              price: "IDR 196.000"
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
              price: "IDR 269.000"
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
              price: "IDR 169.000"
            },
            {
              time: "Chocolate",
              price: "IDR 169.000"
            },
            {
              time: "Coconut",
              price: "IDR 169.000"
            },
            {
              time: "Strawberry",
              price: "IDR 169.000"
            },
            {
              time: "Bengkoang",
              price: "IDR 169.000"
            },
            {
              time: "Jasmine",
              price: "IDR 169.000"
            },
            {
              time: "Green Tea",
              price: "IDR 169.000"
            },
            {
              time: "Spa Sari",
              price: "IDR 169.000"
            },
            {
              time: "Additional Body Mask",
              price: "IDR 100.000"
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
              price: "IDR 100.000"
            }
          ],
          id: 8,
          image: "/images/listmenu/footscrub.webp"
        },
        {
          name: "Biokos Facial",
          desc: "A customised facial treatment for dry, normal, or oily skin, including a facial massage and mask.",
          options: [
            {
              time: "Biokos",
              price: "IDR 179.000"
            },
            {
              time: "Mustika Ratu",
              price: "IDR 169.000"
            },
            {
              time: "Sari Ayu",
              price: "IDR 169.000"
            },
            {
              time: "Viva",
              price: "IDR 169.000"
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
              price: "IDR 165.000"
            },
            {
              time: "Avocado",
              price: "IDR 165.000"
            },
            {
              time: "Aloe Vera",
              price: "IDR 165.000"
            },
            {
              time: "L'Oreal",
              price: "IDR 195.000"
            },
            {
              time: "NR",
              price: "IDR 165.000"
            },
            {
              time: "Hair Mask",
              price: "IDR 165.000"
            }
          ],
          id: 10,
          image: "/images/treatments/cards/creambath-warm.webp"
        },
        {
          name: "Ear Candle",
          desc: "A gentle traditional treatment designed to promote comfort and relaxation.",
          options: [
            {
              time: "30 Minutes",
              price: "IDR 159.000"
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
              price: "IDR 238.000"
            },
            {
              time: "Manicure",
              price: "IDR 99.000"
            },
            {
              time: "Pedicure",
              price: "IDR 139.000"
            },
            {
              time: "Nail Colour Feet & Hands",
              price: "IDR 138.000"
            },
            {
              time: "Nail Colour Feet or Hands",
              price: "IDR 69.000"
            },
            {
              time: "Nail Remover Feet & Hands",
              price: "IDR 98.000"
            },
            {
              time: "Nail Gel Feet & Hands",
              price: "IDR 438.000"
            },
            {
              time: "Nail Gel Feet or Hands",
              price: "IDR 219.000"
            }
          ],
          id: 22,
          image: "/images/treatments/cards/manicurepedicure-warm.webp"
        },
        {
          name: "Waxing",
          desc: "A hair removal treatment using hot wax to leave the skin smooth and clean.",
          options: [
            {
              time: "Arms",
              price: "IDR 159.000"
            },
            {
              time: "Under Arms",
              price: "IDR 99.000"
            },
            {
              time: "Back · Start From",
              price: "IDR 139.000"
            },
            {
              time: "Full Back",
              price: "IDR 299.000"
            },
            {
              time: "Half Legs",
              price: "IDR 149.000"
            },
            {
              time: "Full Legs",
              price: "IDR 299.000"
            },
            {
              time: "Brazilian",
              price: "IDR 350.000"
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
          desc: "A side-by-side massage using steady pressure and flowing movements for shared relaxation.",
          options: [
            {
              time: "1 Hour · Balinese Massage · 2 Pax",
              price: "IDR 319.000"
            },
            {
              time: "1.5 Hours · Balinese Massage · 2 Pax",
              price: "IDR 479.000"
            },
            {
              time: "2 Hours · Balinese Massage · 2 Pax",
              price: "IDR 659.000"
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
              price: "IDR 339.000"
            },
            {
              time: "1.5 Hours · Traditional Massage · 2 Pax",
              price: "IDR 519.000"
            },
            {
              time: "2 Hours · Traditional Massage · 2 Pax",
              price: "IDR 679.000"
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
              price: "IDR 539.000"
            },
            {
              time: "1.5 Hours · Deep Tissue Massage · 2 Pax",
              price: "IDR 719.000"
            }
          ],
          id: "couple-3",
          image: "/images/listmenu/coupledeeptissumassage.webp"
        },
        {
          name: "Couple Warm Candle Massage",
          desc: "Two warm candle massages side by side: lukewarm wax from a natural shea butter candle, dripped onto the skin and massaged in.",
          options: [
            {
              time: "1 Hour · Warm Candle Massage · 2 Pax",
              price: "IDR 539.000"
            },
            {
              time: "1.5 Hours · Warm Candle Massage · 2 Pax",
              price: "IDR 799.000"
            },
            {
              time: "2 Hours · Warm Candle Massage · 2 Pax",
              price: "IDR 999.000"
            }
          ],
          id: "couple-4",
          image: "/images/listmenu/couplewarmcandle-2.webp"
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
              price: "IDR 605.000"
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
              price: "IDR 675.000"
            }
          ],
          id: "couple-package-b",
          image: "/images/listmenu/couplemassagepackage.webp"
        },
        {
          name: "Couple Package C",
          desc: "Warm Candle Massage + Ear Candle · 2 Pax",
          options: [
            {
              time: "1 Hour Warm Candle Massage + 30 Mins Ear Candle · 2 Pax",
              price: "IDR 810.000"
            }
          ],
          id: "couple-package-c",
          image: "/images/listmenu/couplemassagepackage.webp"
        },
        {
          name: "Couple Package D",
          desc: "Warm Candle Massage + Bali Moon Facial · 2 Pax",
          options: [
            {
              time: "1 Hour Warm Candle Massage + 1 Hour Bali Moon Facial · 2 Pax",
              price: "IDR 875.000"
            }
          ],
          id: "couple-package-d",
          image: "/images/listmenu/couplemassagepackage.webp"
        }
      ]
    }
  ] as { label: string; services: PricedService[] }[],
  },

  /** Every timed price in one table, under the duration switch (AEO roadmap R21, 17 Oct). */
  priceTable: {
    subTitle: "Prices at a Glance",
    title: "Massage Prices by Length",
    text: "Every massage price at Spa Bali Moon in one table, in Indonesian rupiah. Prices are the same at our Seminyak spa and at your villa or hotel, where home service adds IDR 75.000 per therapist in the Seminyak area.",
    note: "Home service: add IDR 75.000 per therapist in the Seminyak area (IDR 150.000 for a couple with two therapists). Open daily 9am–11pm, Jl. Pangkung Sari No. 30, Seminyak.",
  },

  packagesIntro: {
    subTitle: "All Spa Packages",
    title: "Spa Packages in Seminyak",
    text: "Our packages combine a massage with a facial, cream bath, body scrub or nail care in one visit. Prices are per person; couple packages are for two. Selected packages can also be booked as home service.",
    note: "Browse the packages below to find a combination that fits your plans."
  },

  /** Shown sorted by title, as on the live page. */
  packageGroups: [
    {
      title: "Balinese Massage Packages",
      includes: "a 1-hour Balinese massage with a manicure and pedicure, cream bath or facial",
      description: "Our signature massage, with long, flowing strokes that ease tension and stress.",
      cardTitle: "Balinese Massage",
      packages: [
        {
          price: "IDR 520.000",
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
              duration: "45 Mins",
              service: "Cream Bath"
            }
          ]
        },
        {
          price: "IDR 545.000",
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
          price: "IDR 485.000",
          items: [
            {
              duration: "1 Hr",
              service: "Balinese Massage"
            },
            {
              duration: "45 Mins",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 375.000",
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
      title: "Thai Massage Packages",
      includes: "a 1-hour Thai massage with a facial, cream bath, body scrub or manicure",
      description: "A good choice when you feel stiff or tired: stretching and gentle pressure leave you feeling lighter.",
      cardTitle: "Thai Massage",
      packages: [
        {
          price: "IDR 510.000",
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
          price: "IDR 570.000",
          items: [
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "45 Mins",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            }
          ]
        },
        {
          price: "IDR 425.000",
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
          price: "IDR 545.000",
          items: [
            {
              duration: "1 Hr",
              service: "Thai Massage"
            },
            {
              duration: "45 Mins",
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
      title: "Cream Bath Packages",
      includes: "a cream bath with a Thai, Balinese or hot stone massage and a facial, reflexology or body scrub",
      description: "A hair wash, conditioning cream and a calming head massage, for when you simply want to slow down.",
      cardTitle: "Cream Bath",
      packages: [
        {
          price: "IDR 570.000",
          items: [
            {
              duration: "45 Mins",
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
          price: "IDR 480.000",
          items: [
            {
              duration: "45 Mins",
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
          price: "IDR 485.000",
          items: [
            {
              duration: "45 Mins",
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
          price: "IDR 545.000",
          items: [
            {
              duration: "45 Mins",
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
      title: "Body Scrub Packages",
      includes: "a 30-minute body scrub with a Balinese, Thai, hot stone or warm candle massage and a facial, cream bath or head massage",
      description: "A scrub that clears away dull skin, then a massage, so you leave feeling fresh and clean.",
      cardTitle: "Body Scrub",
      packages: [
        {
          price: "IDR 485.000",
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
          price: "IDR 585.000",
          items: [
            {
              duration: "30 Mins",
              service: "Body Scrub"
            },
            {
              duration: "1.5 Hr",
              service: "Hot Stone"
            },
            {
              duration: "30 Mins",
              service: "Head Massage"
            }
          ]
        },
        {
          price: "IDR 545.000",
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
              duration: "45 Mins",
              service: "Cream Bath"
            }
          ]
        },
        {
          price: "IDR 580.000",
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
      title: "Hot Stone Massage Packages",
      includes: "a hot stone massage with a facial, pedicure, body scrub, cream bath or reflexology",
      description: "Warm stones release deep tension, for when you want to switch off completely.",
      cardTitle: "Hot Stone",
      packages: [
        {
          price: "IDR 585.000",
          items: [
            {
              duration: "1.5 Hr",
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
          price: "IDR 480.000",
          items: [
            {
              duration: "1 Hr",
              service: "Hot Stone"
            },
            {
              duration: "45 Mins",
              service: "Cream Bath"
            },
            {
              duration: "30 Mins",
              service: "Reflexology"
            }
          ]
        },
        {
          price: "IDR 420.000",
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
          price: "IDR 480.000",
          items: [
            {
              duration: "1.5 Hr",
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
      title: "Facial Packages",
      includes: "a 1-hour Bali Moon Facial with a Balinese, Thai or warm candle massage, some with a body scrub or cream bath",
      description: "Cleansing and gentle care that keep your skin balanced and comfortable.",
      cardTitle: "Bali Moon Facial",
      packages: [
        {
          price: "IDR 485.000",
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
          price: "IDR 570.000",
          items: [
            {
              duration: "1 Hr",
              service: "Bali Moon Facial"
            },
            {
              duration: "45 Mins",
              service: "Cream Bath"
            },
            {
              duration: "1 Hr",
              service: "Thai Massage"
            }
          ]
        },
        {
          price: "IDR 425.000",
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
          price: "IDR 580.000",
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
      title: "Manicure and Pedicure Packages",
      includes: "a manicure and pedicure with a cream bath, Balinese massage or facial",
      description: "Neat, clean and refreshed hands and feet.",
      cardTitle: "Mani Pedi",
      packages: [
        {
          price: "IDR 520.000",
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
              duration: "45 Mins",
              service: "Cream bath"
            }
          ]
        },
        {
          price: "IDR 545.000",
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
          price: "IDR 380.000",
          items: [
            {
              duration: "1 Hr",
              service: "Mani & Pedi"
            },
            {
              duration: "45 Mins",
              service: "Cream Bath"
            }
          ]
        },
        {
          price: "IDR 375.000",
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
      title: "Couples Massage Packages",
      includes: "a 1-hour Balinese or warm candle massage side by side, with an ear candle or a Bali Moon Facial",
      // The link: the couple page is the one to rank for couples searches (24 Oct).
      description: "A quiet hour side by side, to share with someone special. More about our [couples massage in Seminyak](/seminyak/couple-spa/).",
      cardTitle: "Couple Massage",
      twoPax: true,
      packages: [
        {
          price: "IDR 605.000",
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
          price: "IDR 675.000",
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
          price: "IDR 810.000",
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
          price: "IDR 875.000",
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
      question: "1. How much is a massage in Bali?",
      answer: "At Spa Bali Moon in Seminyak, a massage starts at IDR 90.000 per person for 30 minutes. A 1-hour Balinese massage is IDR 159.000, and most 1-hour massages are IDR 159.000 to IDR 350.000 per person. Home service at your villa or hotel adds IDR 75.000 per therapist in the Seminyak area."
    },
    {
      question: "2. How do I choose the right treatment?",
      answer: "Start with what you want from your visit. At Spa Bali Moon, Balinese Massage (IDR 159.000 for 1 hour) is popular for general relaxation, while Sports Massage and Deep Tissue Massage (both IDR 269.000 for 1 hour) suit tight, tired muscles. Our team can also recommend a treatment based on how you feel."
    },
    {
      question: "3. Can I combine several treatments into one visit?",
      answer: "Yes. At Spa Bali Moon, massage, facials, body scrubs, cream baths, manicures, pedicures, and other services can be combined through our spa packages or selected treatment combinations. Packages start at IDR 375.000 per person, for a 1-hour Balinese Massage with a 30-minute manicure and 30-minute pedicure."
    },
    {
      question: "4. Are the prices listed for each treatment?",
      answer: "Yes. Every treatment and package on the Spa Bali Moon price list has its price listed, in Indonesian rupiah (IDR), with each duration priced separately. For example, Balinese massage is IDR 159.000 for 1 hour, IDR 239.000 for 1.5 hours and IDR 330.000 for 2 hours. Home service adds IDR 75.000 per therapist in the Seminyak area."
    },
    {
      question: "5. Can I book a treatment at my hotel or villa?",
      answer: "Yes. Many Spa Bali Moon massage and spa treatments are available as home service at your hotel or villa in Seminyak and nearby areas, such as Kerobokan, Petitenget, Canggu, North Kuta and Kuta. An extra IDR 75.000 per therapist applies in Seminyak, Petitenget and Kerobokan, and IDR 150.000 in Canggu, North Kuta and Kuta, on top of the treatment price. Send your location and preferred time on WhatsApp to book."
    },
    {
      question: "6. Can I create a custom spa package?",
      answer: "Yes. If you have several treatments in mind, contact Spa Bali Moon through WhatsApp and our team can help you find a combination that suits your preferences, schedule, and budget. For ideas, browse our ready-made packages, which combine treatments such as Balinese massage, Thai massage, facials, cream baths, body scrubs and manicures."
    },
    {
      question: "7. Do I need to book in advance?",
      answer: "Advance booking is recommended at Spa Bali Moon, particularly during busy periods, although walk-ins are welcome at our Seminyak spa. Contact us on WhatsApp at +62 878-6317-5144 with your preferred treatment and time so we can check availability. Same-day home service is often possible, depending on therapist availability."
    },
    {
      question: "8. What currency are the prices in?",
      answer: "All prices at Spa Bali Moon are in Indonesian Rupiah (IDR), with a dot as the thousands separator. For example, IDR 159.000 is one hundred and fifty-nine thousand rupiah, the price of a one-hour Balinese massage. The same IDR prices apply at our Seminyak spa and for home service, plus the outcall fee."
    },
    {
      question: "9. What is your cheapest treatment?",
      answer: "The lowest price on the Spa Bali Moon menu is IDR 69.000 for nail colour on feet or hands. For massage, the lowest-priced options are the 30-minute traditional massage and 30-minute back massage at IDR 90.000. For a full hour, Balinese massage at IDR 159.000 is the most affordable full-body treatment."
    },
    {
      question: "10. Are prices per person or per booking?",
      answer: "At Spa Bali Moon, individual treatments and spa packages are priced per person. Couple treatments are priced for two people together; the \"2 pax\" label means the listed price covers both guests. For example, a one-hour couple Balinese massage at IDR 319.000 is the total for two people, not per person."
    },
    {
      question: "11. How much extra is home service?",
      answer: "Spa Bali Moon home service costs an additional IDR 75.000 per therapist in Seminyak, Petitenget and Kerobokan, or IDR 150.000 in Canggu, North Kuta and Kuta, on top of the treatment price. Treatments cost the same as in-spa, so a one-hour Balinese massage is IDR 159.000 in the spa and IDR 234.000 at your villa in the Seminyak area. For a couple with two therapists in the Seminyak area, the fee is IDR 150.000 in total."
    },
    {
      question: "12. Which areas do you cover for outcall massage?",
      answer: "Spa Bali Moon covers Seminyak and surrounding areas, including Kerobokan, Petitenget, Canggu, North Kuta and Kuta. We also travel to Jimbaran, Uluwatu, Nusa Dua, Sanur, Denpasar and Ubud, subject to therapist availability and travel time. Message us on WhatsApp with your location and we will confirm availability and any additional travel cost before you book."
    },
    {
      question: "13. Is tipping expected?",
      answer: "Tipping is not required at Spa Bali Moon and is never added automatically, whether you visit our Seminyak spa or book home service at your villa or hotel. A tip is appreciated but entirely at your discretion, and our therapists are paid either way."
    },
    {
      question: "14. Do prices differ between the website and in the spa?",
      answer: "No. The prices listed on the Spa Bali Moon website are our current rates and apply both in our Seminyak spa and for home service, with the outcall fee (IDR 75.000 per therapist in the Seminyak area) added separately for home visits. If you are ever quoted a different price, please tell us before your treatment."
    },
    {
      question: "15. Are towels, oils, and amenities included?",
      answer: "Yes. Every treatment at our Seminyak spa includes clean towels, professional-grade massage oil, and use of a private treatment room, with no additional charge for amenities. For home service, the Spa Bali Moon therapist brings freshly laundered linens and towels, massage oils and any tools your treatment needs, so you do not need to supply anything."
    },
    {
      question: "16. Can I choose the pressure or a specific therapist?",
      answer: "Yes. Tell your Spa Bali Moon therapist your preferred pressure at the start and adjust it at any point during the session. For firmer pressure, try Deep Tissue Massage or Traditional Massage (Strong). If you have a therapist you have booked before, request them by name on WhatsApp and we will do our best to accommodate."
    },
    {
      question: "17. How can I pay for my treatment?",
      answer: "Spa Bali Moon accepts Visa, Mastercard and cash. All prices are in Indonesian rupiah (IDR) and are the same at our Seminyak spa and for home service, where the home service fee of IDR 75.000 per therapist in the Seminyak area is added. For home service, you pay your therapist after the treatment, in cash or by card."
    },
    {
      question: "18. What are your opening hours?",
      answer: "Spa Bali Moon is open daily from 9am to 11pm at Jl. Pangkung Sari No. 30, Seminyak. Home service and WhatsApp booking are available during the same hours, and walk-ins are welcome at the spa. In busy periods, book ahead on WhatsApp at +62 878-6317-5144."
    }
  ],
  },

  reserve: {
    title: "Plan Your Spa Day in Seminyak",
    text: "Some treatments are chosen because your muscles need attention. Others are for tired skin, overworked feet, a scalp that needs care, or simply the feeling that you have been moving from one plan to the next without stopping.",
    closingText: "Visit us in Seminyak or arrange selected treatments at your villa or hotel.",
    backgroundImage: "/images/pricelist/pricelist-5.webp"
  },
};
