import { getImageProps } from "next/image";

/**
 * The attributes of a photo uploaded in /admin/ (src/lib/uploads.ts) shown
 * `sizes` wide: a srcset of the image optimiser's sizes (/_next/image), so a
 * card on a phone gets a file of about 750px instead of the 1428 to 1920px
 * upload (58 to 129 KB per card, audit 26 Nov). `fallback` is the width of
 * the plain src, the one a crawler or an old browser takes.
 */
export function uploadedImage(src: string, sizes: string, fallback: number): { src: string; srcSet?: string; sizes?: string } {
  const { props } = getImageProps({ src, alt: "", fill: true, sizes, quality: 75 });
  if (!props.srcSet) return { src: props.src };
  const entries = props.srcSet.split(", ").map((entry) => {
    const space = entry.lastIndexOf(" ");
    return { url: entry.slice(0, space), width: parseInt(entry.slice(space + 1), 10) };
  });
  const plain = entries.find((entry) => entry.width >= fallback) ?? entries[entries.length - 1];
  return { src: plain.url, srcSet: props.srcSet, sizes: props.sizes };
}
