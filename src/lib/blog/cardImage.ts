import { uploadedImage } from "@/lib/uploadedImage";
import { isUploaded } from "@/lib/uploads";
import copies from "./card-copies.json";

const srcSets: Record<string, string> = copies;

/** A card is about 390px wide on a phone and 430px on a desktop. */
export const CARD_SIZES = "(max-width: 991px) 100vw, 430px";
/** The small squares: the sidebar's latest posts, search results, previous and next. */
export const THUMB_SIZES = "120px";

/**
 * The attributes of a cover shown in a card or a thumbnail, so no card loads
 * the large file the article banner uses:
 *   - the site's own covers: their 240px, 768px and 1200px copies
 *     (tools/images/guide-cards.mjs, which also writes card-copies.json);
 *   - a cover uploaded in /admin/: the image optimiser's sizes of it.
 * Anything else (the fallback picture) is used as it is.
 */
export function cardImage(src: string, sizes: string): { src: string; srcSet?: string; sizes?: string } {
  if (isUploaded(src)) return uploadedImage(src, sizes, sizes === THUMB_SIZES ? 256 : 828);
  const srcSet = srcSets[src];
  if (!srcSet) return { src };
  // The src a crawler or an old browser takes: the card size.
  const entries = srcSet.split(", ");
  const card = entries.find((entry) => entry.endsWith(" 768w")) ?? entries[0];
  return { src: card.slice(0, card.indexOf(" ")), srcSet, sizes };
}
