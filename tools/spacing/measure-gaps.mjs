/**
 * Measures the visual gap between consecutive sections on every page and
 * checks it against the site-wide rule in src/styles/spacing.css: from the
 * last visible thing in one section (text, photo, card, button, icon) to the
 * first in the next is 200px from 992px up, 160px on tablets, 120px on
 * phones; after a top banner photo, half that from its torn line (26px
 * up). Torn edges and decorations (leaves, flowers, shapes) are not
 * content. Where one torn edge sits between two sections, its torn line
 * (26px into the edge image) should be in the middle of the gap: listed
 * when the space above and below it differ by more than 16px. Between two
 * plain white sections (no torn edge, not paper) the gap is half.
 *
 *   node tools/spacing/measure-gaps.mjs [base=http://localhost:3100]
 *   WIDTHS=1440,1024,820,390 ONLY=/,/seminyak/ node tools/spacing/measure-gaps.mjs
 *
 * Prints, per width, how many gaps are within ±8px and lists the others by
 * transition (a section type that keeps empty space inside itself shows up
 * here: give it --sp-in-top / --sp-in-bottom in spacing.css). Writes the raw
 * numbers to tools/spacing/gaps.json. Needs a running server.
 */
import { createRequire } from "node:module";
import { readFile, writeFile } from "node:fs/promises";
const ROOT = new URL("../../", import.meta.url);
const require = createRequire(new URL("package.json", ROOT));
const puppeteer = require("puppeteer-core");

const base = process.argv[2] || "http://localhost:3100";
// The pages are listed in src/data/sitemap.ts (src/app/sitemap.xml is a route folder now).
const sitemap = await readFile(new URL("src/data/sitemap.ts", ROOT), "utf8");
let paths = [...new Set([...sitemap.matchAll(/loc: "https:\/\/spabalimoon\.com([^"]*)"/g)].map((m) => m[1]))];
paths.push("/this-page-does-not-exist/");
if (process.env.ONLY) paths = process.env.ONLY.split(",");
const widths = (process.env.WIDTHS || "1440,390").split(",").map(Number);
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--hide-scrollbars"] });
const out = {};

async function run(path, w) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: 900, isMobile: w < 768, hasTouch: w < 768 });
  await page.goto(base + path, { waitUntil: "networkidle2", timeout: 180000 });
  await page.addStyleTag({ content: "#preloader{display:none!important} *,*::before,*::after{animation:none!important;transition:none!important;content-visibility:visible!important}" });
  await page.evaluate(async () => {
    for (const img of document.querySelectorAll("img[loading=lazy]")) img.loading = "eager";
    // Scroll through the page first, as a visitor does: parts that fade in
    // when they come into view (the closing banner's photo box) are hidden
    // until then, and would not count as content.
    // Lenis (smooth scroll, laptops) would ease each jump: stopped while this runs.
    window.lenis?.stop?.();
    document.documentElement.style.scrollBehavior = "auto";
    const to = (y) => window.scrollTo(0, y);
    for (let y = 0; y < document.documentElement.scrollHeight; y += 500) {
      to(y);
      await new Promise((r) => setTimeout(r, 150));
    }
    to(0);
    await new Promise((r) => setTimeout(r, 1200));
  });
  const r = await page.evaluate(() => {
    const Y = (v) => Math.round(v + scrollY);
    const DECOR = /(^|[\s_-])(shape\d*|decoration|frangipani|floral|sway|bobble|leaf|bg-shape|footer__shape)/i;
    const cls = (e) => (typeof e.className === "string" ? e.className : e.className?.baseVal || "");
    const name = (e) => e.tagName.toLowerCase() + (cls(e).trim() ? "." + cls(e).trim().split(/\s+/).filter((c) => !c.startsWith("jsx-")).slice(0, 3).join(".") : "");
    const alpha = (c) => { const m = /rgba?\(([^)]+)\)/.exec(c); if (!m) return 0; const p = m[1].split(",").map(Number); return p.length === 4 ? p[3] : 1; };
    const bgOf = (e) => { for (let x = e; x; x = x.parentElement) { const c = getComputedStyle(x).backgroundColor; if (alpha(c) > 0.5) return c; } return "rgb(255, 255, 255)"; };

    // visible part of an element's rect, clipped by overflow ancestors (up to `stop`)
    const clipRect = (el, rect, stop, self = false) => {
      let { top, bottom, left, right } = rect;
      for (let a = self ? el : el.parentElement; a && a !== stop.parentElement; a = a.parentElement) {
        const cs = getComputedStyle(a);
        if (/(hidden|clip|auto|scroll)/.test(cs.overflowY + cs.overflowX)) {
          const ar = a.getBoundingClientRect();
          if (/(hidden|clip|auto|scroll)/.test(cs.overflowY)) { top = Math.max(top, ar.top); bottom = Math.min(bottom, ar.bottom); }
          if (/(hidden|clip|auto|scroll)/.test(cs.overflowX)) { left = Math.max(left, ar.left); right = Math.min(right, ar.right); }
        }
      }
      return bottom - top > 1 && right - left > 1 && right > 0 && left < innerWidth ? { top, bottom } : null;
    };
    const decorative = (el, stop) => { for (let a = el; a && a !== stop; a = a.parentElement) if (DECOR.test(cls(a))) return true; return false; };

    function contentBox(block) {
      let top = Infinity, bottom = -Infinity;
      const add = (el, rect, self = false) => { const c = clipRect(el, rect, block, self); if (c) { top = Math.min(top, c.top); bottom = Math.max(bottom, c.bottom); } };
      const bcs = getComputedStyle(block);
      if (/url\(/.test(bcs.backgroundImage) && !decorative(block, block.parentElement)) add(block, block.getBoundingClientRect());
      const blockBg = bgOf(block);
      for (const el of block.querySelectorAll("*")) {
        if (!el.checkVisibility({ opacityProperty: true, visibilityProperty: true })) continue;
        if (decorative(el, block)) continue;
        const cs = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        if (rect.width < 2 || rect.height < 2) continue;
        const tag = el.tagName;
        if (el.tagName === "I" && String(el.className).split(/ +/).some((c) => c.startsWith("fa-"))) { add(el, rect); continue; } // icon-font glyphs (stars, contact icons)
        if (/^(IMG|VIDEO|IFRAME|PICTURE|CANVAS)$/.test(tag) || (tag === "svg" && !el.closest("button, a"))) { add(el, rect); continue; }
        // a visible box: own background, photo or border
        const ownBg = alpha(cs.backgroundColor) > 0.05 && cs.backgroundColor !== blockBg && el !== block;
        // a photo, or a wash you can see (the closing banner shows its dark
        // wash alone until its photo loads near the viewport: LazyBackground)
        const photo = /url\(/.test(cs.backgroundImage) || (/gradient\(/.test(cs.backgroundImage) && [...cs.backgroundImage.matchAll(/rgba?\([^)]+\)/g)].some((m) => alpha(m[0]) > 0.3));
        const border = ["Top", "Bottom"].some((s) => parseFloat(cs[`border${s}Width`]) > 0 && alpha(cs[`border${s}Color`]) > 0.2);
        // the homepage's row buttons show as a white box with a faint border
        if (ownBg || photo || border || el.classList.contains("row-btn")) add(el, rect);
        for (const n of el.childNodes) {
          if (n.nodeType === 3 && n.textContent.trim()) {
            const rg = document.createRange();
            rg.selectNodeContents(n);
            const tr = rg.getBoundingClientRect();
            if (tr.height > 1) add(el, tr, true);
          }
        }
      }
      return top === Infinity ? null : { top: Y(top), bottom: Y(bottom) };
    }

    const root = document.querySelector("main") || document.body;
    const blocks = [...root.querySelectorAll("section")].filter((s) => !s.parentElement.closest("main section") && s.checkVisibility());
    const footer = document.querySelector("footer");
    if (footer) blocks.push(footer);
    const rows = blocks.map((b) => {
      const box = contentBox(b);
      const rect = b.getBoundingClientRect();
      return {
        block: name(b),
        bg: bgOf(b),
        torn: /section__decoration-(top|bottom)/.test(cls(b) + " " + cls(b.parentElement)),
        // its own torn edge, or its wrapper's when it is the wrapper's first / last section
        tornTop: b.matches(".section__decoration-top") || (b.parentElement.matches(".section__decoration-top") && b === b.parentElement.querySelector(":scope > section")),
        tornBottom: b.matches(".section__decoration-bottom") || (b.parentElement.matches(".section__decoration-bottom") && b === [...b.parentElement.querySelectorAll(":scope > section")].pop()),
        // plain: white, no torn edge, not a banner or title band (spacing.css 1b)
        plain: !/section__decoration|bg-sub|banner-(two|five)-area|page-title/.test(cls(b) + " " + cls(b.parentElement)),
        top: Y(rect.top), bottom: Y(rect.bottom),
        content: box,
      };
    });
    const gaps = [];
    for (let i = 1; i < rows.length; i++) {
      const a = rows[i - 1], b = rows[i];
      if (!a.content || !b.content) continue;
      // one torn edge between them (not two, not a banner's over its photo): where its line shows
      const lineAt = a.tornBottom && !b.tornTop && !/banner-(two|five)-area/.test(a.block) ? a.bottom - 26 : b.tornTop && !a.tornBottom ? b.top + 26 : null;
      const line = lineAt === null ? null : { above: lineAt - a.content.bottom, below: b.content.top - lineAt };
      gaps.push({ from: a.block, to: b.block, gap: b.content.top - a.content.bottom, bgChange: a.bg !== b.bg, line, plain: a.plain && b.plain && a.bg === b.bg });
    }

    // closing banner(s)
    const banners = [...document.querySelectorAll(".reserve-cta-banner")].map((b) => {
      const r = b.getBoundingClientRect();
      const t = b.querySelector("h2, h3, .title");
      const sec = b.closest("section");
      const tcs = t ? getComputedStyle(t) : null;
      const inner = [...b.querySelectorAll("*")].filter((e) => e.childNodes.length && [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()));
      const it = Math.min(...inner.map((e) => e.getBoundingClientRect().top)), ib = Math.max(...inner.map((e) => e.getBoundingClientRect().bottom));
      return {
        w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.left),
        textPadTop: Math.round(it - r.top), textPadBottom: Math.round(r.bottom - ib),
        title: t ? `${t.textContent.trim().slice(0, 60)} | ${tcs.fontSize} lh${tcs.lineHeight} lines ${Math.round(t.getBoundingClientRect().height / parseFloat(tcs.lineHeight))}` : null,
        sectionPad: sec ? `${getComputedStyle(sec).paddingTop} / ${getComputedStyle(sec).paddingBottom}` : null,
        comp: name(sec || b),
      };
    });

    // brand cards over photos
    const cards = [...document.querySelectorAll(".about-brand-mark, .brand-card")].filter((c) => c.checkVisibility()).map((c) => {
      const r = c.getBoundingClientRect();
      const col = c.closest(".image-column, .inner-column, [class*=image]") || c.parentElement;
      const imgs = [...(col.closest(".image-column") || col).querySelectorAll("img")].filter((i) => i.checkVisibility() && !i.closest(".about-brand-mark, .brand-card") && !DECOR.test(cls(i)) && !decorative(i, col.closest("section"))).map((i) => i.getBoundingClientRect());
      const ov = imgs.map((ir) => {
        const ox = Math.max(0, Math.min(r.right, ir.right) - Math.max(r.left, ir.left));
        const oy = Math.max(0, Math.min(r.bottom, ir.bottom) - Math.max(r.top, ir.top));
        return `img[${Math.round(ir.left)},${Math.round(ir.top + scrollY)} ${Math.round(ir.width)}x${Math.round(ir.height)}] overlap ${Math.round(ox)}x${Math.round(oy)}`;
      });
      return { card: name(c), rect: `[${Math.round(r.left)},${Math.round(r.top + scrollY)} ${Math.round(r.width)}x${Math.round(r.height)}]`, vs: ov };
    });

    return { gaps, banners, cards, blocks: rows.map((r) => `${r.block} ${r.content ? r.content.top + "-" + r.content.bottom : "EMPTY"}`) };
  });
  out[`${path} @${w}`] = r;
  await page.close();
}
const queue = paths.flatMap((p) => widths.map((w) => [p, w]));
await Promise.all([0, 1, 2].map(async () => { while (queue.length) { const [p, w] = queue.shift(); try { await run(p, w); } catch (e) { out[`${p} @${w}`] = { error: e.message }; } process.stdout.write("."); } }));
await writeFile(new URL("tools/spacing/gaps.json", ROOT), JSON.stringify(out, null, 1));
await browser.close();

// The report: gaps against the rule, per width.
const G = (w) => (w >= 992 ? 200 : w >= 768 ? 160 : 120);
const short = (s) => s.replace(/^section\./, "").replace(/^footer\..*/, "footer").replace(/\.(pt|pb|mb)-\d+/g, "").replace(/section__decoration-(top|bottom)/g, "T").replace(/\.+/g, ".").slice(0, 40);
for (const w of [...widths].sort((a, b) => b - a)) {
  let n = 0, ok = 0; const bad = {};
  for (const [k, v] of Object.entries(out)) {
    if (!k.endsWith("@" + w) || v.error) continue;
    for (const g of v.gaps) {
      n++;
      // after a photo banner: half a gap from its torn line (26px up), as after any torn edge
      const banner = /banner-two-area/.test(g.from) || (/banner-five-area/.test(g.from) && w >= 992);
      // homepage: the packages' note sits mid-gap (half the gap on each side)
      const noteJoin = g.from.includes("pricing-section-five") && g.to.startsWith("section.service-section");
      // price list: between two of its package groups, half the gap (spacing.css 7b)
      const packageJoin = g.from.includes("package-pricing-section") && g.to.includes("package-pricing-section");
      // two plain white sections: half the gap (spacing.css 1b)
      const expect = noteJoin ? G(w) / 2 + 5 : packageJoin || g.plain ? G(w) / 2 : banner ? G(w) / 2 - 26 : G(w); // +5: the note's own line spacing
      const d = g.gap - expect;
      if (Math.abs(d) <= 8) ok++;
      else { const key = `${short(g.from)} -> ${short(g.to)} (${d > 0 ? "+" : ""}${d})`; (bad[key] ??= []).push(k.split(" ")[0].replace("/seminyak/", "sm/").replace("/guide/", "g/").slice(0, 24)); }
    }
  }
  console.log(`\n== ${w}: ${ok}/${n} within ±8px of the rule (${G(w)}px)`);
  for (const [k, ps] of Object.entries(bad).sort((a, b) => b[1].length - a[1].length)) console.log("  ", String(ps.length).padStart(3), k, "|", ps.slice(0, 3).join(" "));
  // torn lines in the middle of their gap
  let lines = 0, centred = 0; const offCentre = {};
  for (const [k, v] of Object.entries(out)) {
    if (!k.endsWith("@" + w) || v.error) continue;
    for (const g of v.gaps) {
      if (!g.line) continue;
      lines++;
      const d = g.line.above - g.line.below;
      if (Math.abs(d) <= 16) centred++;
      else { const key = `${short(g.from)} -> ${short(g.to)} (${g.line.above}/${g.line.below})`; (offCentre[key] ??= []).push(k.split(" ")[0].replace("/seminyak/", "sm/").replace("/guide/", "g/").slice(0, 24)); }
    }
  }
  console.log(`   torn lines in the middle of their gap (±8px): ${centred}/${lines}`);
  for (const [k, ps] of Object.entries(offCentre).sort((a, b) => b[1].length - a[1].length)) console.log("  ", String(ps.length).padStart(3), k, "|", ps.slice(0, 3).join(" "));
}
