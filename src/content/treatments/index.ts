import type { TreeNode } from "@/lib/treatments/tree";
import antiCelluliteMassage from "./anti-cellulite-massage.json";
import balineseMassage from "./balinese-massage.json";
import bodyScrub from "./body-scrub.json";
import coconutOilMassage from "./coconut-oil-massage.json";
import coupleSpa from "./couple-spa.json";
import creambath from "./creambath.json";
import daySpa from "./day-spa.json";
import deepTissueMassage from "./deep-tissue-massage.json";
import earCandle from "./ear-candle.json";
import facial from "./facial.json";
import footMassage from "./foot-massage.json";
import footReflexology from "./foot-reflexology.json";
import hairBraiding from "./hair-braiding.json";
import headMassage from "./head-massage.json";
import hotStoneMassage from "./hot-stone-massage.json";
import lymphaticDrainageMassage from "./lymphatic-drainage-massage.json";
import manicurePedicure from "./manicure-pedicure.json";
import nailSpa from "./nail-spa.json";
import shiatsuMassage from "./shiatsu-massage.json";
import sportMassage from "./sport-massage.json";
import sunburnMassage from "./sunburn-massage.json";
import thaiMassage from "./thai-massage.json";
import traditionalMassage from "./traditional-massage.json";
import waxingSalon from "./waxing-salon.json";
import cuppingTherapy from "./cupping-therapy.json";
import warmCandleMassage from "./warm-candle-massage.json";

/**
 * The original body of every treatment page, keyed by slug: the element tree
 * of the page as built from the live site (tools/live-port), written as data
 * by tools/treatments/tsx-to-json.mjs. A page edited in /admin/ is rendered
 * from its saved copy instead (lib/treatments/content.ts); "Restore original"
 * there brings this one back. (JSON imports are typed too narrowly for
 * TreeNode, hence the cast.)
 */
export const treatmentSeeds = {
  "anti-cellulite-massage": antiCelluliteMassage,
  "balinese-massage": balineseMassage,
  "body-scrub": bodyScrub,
  "coconut-oil-massage": coconutOilMassage,
  "couple-spa": coupleSpa,
  "creambath": creambath,
  "cupping-therapy": cuppingTherapy,
  "day-spa": daySpa,
  "deep-tissue-massage": deepTissueMassage,
  "ear-candle": earCandle,
  "facial": facial,
  "foot-massage": footMassage,
  "foot-reflexology": footReflexology,
  "hair-braiding": hairBraiding,
  "head-massage": headMassage,
  "hot-stone-massage": hotStoneMassage,
  "lymphatic-drainage-massage": lymphaticDrainageMassage,
  "manicure-pedicure": manicurePedicure,
  "nail-spa": nailSpa,
  "shiatsu-massage": shiatsuMassage,
  "sport-massage": sportMassage,
  "sunburn-massage": sunburnMassage,
  "thai-massage": thaiMassage,
  "traditional-massage": traditionalMassage,
  "warm-candle-massage": warmCandleMassage,
  "waxing-salon": waxingSalon,
} as unknown as Record<string, TreeNode>;
