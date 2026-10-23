// Screenshot of one element at phone width (the footer by default):
// node tools/spacing/shot-footer.mjs <url> <out.png> [width] [selector]
import puppeteer from "puppeteer-core";

const [url = "http://localhost:3100/about/", out = "footer.png", width = "390", selector = ".site-footer"] =
  process.argv.slice(2);
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: Number(width), height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate(async () => {
  for (const img of document.querySelectorAll("img[loading=lazy]")) img.loading = "eager";
  window.scrollTo(0, document.body.scrollHeight);
  await new Promise((r) => setTimeout(r, 1200));
  // The sticky header would sit over the element in the shot.
  for (const el of document.querySelectorAll("header, .main-header, .sticky-header")) el.style.visibility = "hidden";
});
const el = await page.$(selector);
// Bring it into view first, so the sections that fade in when seen have.
await el.evaluate((e) => e.scrollIntoView({ block: "center" }));
await new Promise((r) => setTimeout(r, 1500));
await el.screenshot({ path: out });
await browser.close();
console.log(out);
