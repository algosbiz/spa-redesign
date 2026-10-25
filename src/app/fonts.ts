import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

/*
 * The site's two families (owner, 25 Oct: "the font is a bit old fashion and
 * hard to read"; option A of the homepage demo): Fraunces for headings, with
 * its optical-size axis so small sizes (prices, menu names) stay sturdy, and
 * Plus Jakarta Sans for text. next/font serves both from this site and
 * preloads their Latin files; the theme reads them as --title-font and
 * --text-font (src/styles/live.css). They replace Literata and Mulish.
 */
export const fraunces = Fraunces({ subsets: ["latin"], axes: ["opsz"], variable: "--font-fraunces", display: "swap" });
export const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
