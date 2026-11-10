import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

/*
 * The site's two families (owner, 25 Oct: "the font is a bit old fashion and
 * hard to read"; option A of the homepage demo): Fraunces for headings and
 * Plus Jakarta Sans for text. Fraunces loads without its optical-size axis
 * (10 Nov, speed): the file is 36 KB instead of 66 KB, and side-by-side
 * screenshots of titles, banner prices and price cards showed no visible
 * difference. next/font serves both from this site and
 * preloads their Latin files; the theme reads them as --title-font and
 * --text-font (src/styles/live.css). They replace Literata and Mulish.
 */
export const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
export const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
