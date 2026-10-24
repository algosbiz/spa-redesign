// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.

    /**
     * ALL TREATMENT PAGES (/seminyak/<slug>/)
     *
     * Each treatment has its own file in this folder, e.g. `balinese-massage.ts`.
     *
     * To EDIT a treatment:   open its file and change the text.
     * To ADD a treatment:     copy an existing file, rename it to the new slug,
     *                         change the content, then add it to the list below.
     * Prices are not typed here: they come from src/data/pricelist.ts via priceOf().
     */
    import type { Treatment } from "../types";
    import balineseMassage from "./balinese-massage";
import bodyScrub from "./body-scrub";
import antiCelluliteMassage from "./anti-cellulite-massage";
import coupleSpa from "./couple-spa";
import coconutOilMassage from "./coconut-oil-massage";
import creambath from "./creambath";
import deepTissueMassage from "./deep-tissue-massage";
import earCandle from "./ear-candle";
import facial from "./facial";
import footMassage from "./foot-massage";
import footReflexology from "./foot-reflexology";
import hairBraiding from "./hair-braiding";
import hotStoneMassage from "./hot-stone-massage";
import headMassage from "./head-massage";
import lymphaticDrainageMassage from "./lymphatic-drainage-massage";
import manicurePedicure from "./manicure-pedicure";
import nailSpa from "./nail-spa";
import shiatsuMassage from "./shiatsu-massage";
import sportMassage from "./sport-massage";
import sunburnMassage from "./sunburn-massage";
import traditionalMassage from "./traditional-massage";
import thaiMassage from "./thai-massage";
import waxingSalon from "./waxing-salon";
import cuppingTherapy from "./cupping-therapy";
import warmCandleMassage from "./warm-candle-massage";
import daySpa from "./day-spa";

    /** Order = order of the "Treatments" menu on the old site (Day Spa is last; it was only in the footer). */
    export const treatments: Treatment[] = [
      balineseMassage,
  bodyScrub,
  antiCelluliteMassage,
  coupleSpa,
  coconutOilMassage,
  creambath,
  deepTissueMassage,
  earCandle,
  facial,
  footMassage,
  footReflexology,
  hairBraiding,
  hotStoneMassage,
  headMassage,
  lymphaticDrainageMassage,
  manicurePedicure,
  nailSpa,
  shiatsuMassage,
  sportMassage,
  sunburnMassage,
  traditionalMassage,
  thaiMassage,
  waxingSalon,
  warmCandleMassage,
  cuppingTherapy,
  daySpa,
    ];

    /**
     * The "related treatments" slider. The old site showed the same 16 cards,
     * in this order, on every treatment page.
     */
    export const relatedTreatmentSlugs: string[] = [
  "foot-reflexology",
  "head-massage",
  "hot-stone-massage",
  "balinese-massage",
  "deep-tissue-massage",
  "sport-massage",
  "cupping-therapy",
  "thai-massage",
  "lymphatic-drainage-massage",
  "shiatsu-massage",
  "traditional-massage",
  "coconut-oil-massage",
  "warm-candle-massage",
  "foot-massage",
  "body-scrub",
  "creambath",
  "manicure-pedicure",
  "couple-spa",
];

    /** Find a treatment by its URL slug. Returns undefined if it does not exist. */
    export function getTreatment(slug: string): Treatment | undefined {
      return treatments.find((treatment) => treatment.slug === slug);
    }
    