/**
 * Where the photos uploaded in /admin/ are public: the R2 bucket's custom
 * domain (R2_PUBLIC_URL, src/lib/blog/storage.ts). They are stored as
 * uploaded, a blog cover up to 1920px and about 120 KB, so next.config.ts
 * lets the image optimiser resize the ones from here
 * (src/lib/uploadedImage.ts). No imports: next.config.ts reads this file.
 */
export const UPLOADS_ORIGIN = "https://images.spabalimoon.com";

/** A photo uploaded in /admin/, which the image optimiser may resize. */
export const isUploaded = (src: string | null | undefined): src is string => !!src && src.startsWith(`${UPLOADS_ORIGIN}/`);
