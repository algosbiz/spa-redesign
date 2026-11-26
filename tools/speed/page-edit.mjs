/**
 * What happens to a page's HTML just before it leaves Next's renderer
 * (patch-next-renderer.mjs puts this function there). Method and reasons:
 * README.md in this folder.
 *
 * `editPage` is written into the renderer as source (Function.prototype.toString),
 * so everything it uses is inside it. It takes the whole document and returns
 * the document to send. Pages without `data-site` on <html> (the admin) come
 * back untouched. `sizes`: the site's pictures and their width and height.
 */
export function editPage(html, sizes) {
  if (!/^[\s\S]{0,300}?<html\b[^>]*\bdata-site\b/.test(html) || !html.includes("</head>")) return html;

  /* ------------------------------------------------------------ 1. styles
     `experimental.inlineCss` puts the whole stylesheet in a <style>. The page
     keeps the rules its own HTML can match; the full stylesheets come with
     the scripts, at the reader's first interaction. */

  // Statements of a stylesheet: { head, body } rules and { raw } at-rules.
  function parse(css) {
    const out = [];
    let i = 0;
    const n = css.length;
    while (i < n) {
      const start = i;
      let stop = "";
      for (let depth = 0; i < n; i++) {
        const c = css[i];
        if (c === "/" && css[i + 1] === "*") {
          const end = css.indexOf("*/", i + 2);
          i = end < 0 ? n : end + 1;
        } else if (c === '"' || c === "'") {
          for (i++; i < n && css[i] !== c; i++) if (css[i] === "\\") i++;
        } else if (c === "\\") i++;
        else if (c === "(" || c === "[") depth++;
        else if (c === ")" || c === "]") depth--;
        else if (depth <= 0 && (c === "{" || c === ";" || c === "}")) {
          stop = c;
          break;
        }
      }
      const head = css.slice(start, i).replace(/\/\*[\s\S]*?\*\//g, "").trim();
      i++;
      if (stop === ";") {
        if (head) out.push({ raw: head + ";" });
        continue;
      }
      if (stop !== "{") continue;
      const from = i;
      for (let depth = 1; i < n && depth; i++) {
        const c = css[i];
        if (c === "/" && css[i + 1] === "*") {
          const end = css.indexOf("*/", i + 2);
          i = end < 0 ? n : end + 1;
        } else if (c === '"' || c === "'") {
          for (i++; i < n && css[i] !== c; i++) if (css[i] === "\\") i++;
        } else if (c === "\\") i++;
        else if (c === "{") depth++;
        else if (c === "}") depth--;
      }
      out.push({ head, body: css.slice(from, i - 1) });
    }
    return out;
  }

  // Splits a selector list at its own commas.
  function selectors(list) {
    const out = [];
    let depth = 0;
    let last = 0;
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (c === "\\") i++;
      else if (c === '"' || c === "'") {
        for (i++; i < list.length && list[i] !== c; i++) if (list[i] === "\\") i++;
      } else if (c === "(" || c === "[") depth++;
      else if (c === ")" || c === "]") depth--;
      else if (c === "," && depth === 0) {
        out.push(list.slice(last, i));
        last = i + 1;
      }
    }
    out.push(list.slice(last));
    return out;
  }

  // Whether a selector can match: every class and id outside (…) and […] is in
  // the page. What :is(), :where(), :not() and :has() say is not weighed, so a
  // rule stays when in doubt.
  function matches(selector, names) {
    let depth = 0;
    for (let i = 0; i < selector.length; i++) {
      const c = selector[i];
      if (c === "\\") {
        i++;
        continue;
      }
      if (c === '"' || c === "'") {
        for (i++; i < selector.length && selector[i] !== c; i++) if (selector[i] === "\\") i++;
        continue;
      }
      if (c === "(" || c === "[") depth++;
      else if (c === ")" || c === "]") depth--;
      else if (depth === 0 && (c === "." || c === "#")) {
        let name = "";
        let j = i + 1;
        for (; j < selector.length; j++) {
          const d = selector[j];
          if (d === "\\") {
            const hex = /^[0-9a-f]{1,6}\s?/i.exec(selector.slice(j + 1));
            if (hex) {
              name += String.fromCodePoint(parseInt(hex[0], 16));
              j += hex[0].length;
            } else name += selector[++j];
          } else if (/[\w-]/.test(d) || d > "\x7f") name += d;
          else break;
        }
        if (name && !names.has(name)) return false;
        i = j - 1;
      }
    }
    return true;
  }

  const decode = (s) =>
    s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

  // Class names and ids of the page's elements, and the class the inline
  // script below sets before React is there.
  function namesOf(markup) {
    const names = new Set(["menu-fixed"]);
    for (const m of markup.matchAll(/\s(?:class|id)="([^"]*)"/g)) {
      for (const name of decode(m[1]).split(/\s+/)) if (name) names.add(name);
    }
    return names;
  }

  // The rules of a stylesheet the page can match.
  function prune(css, names) {
    const keyframes = [];
    function keep(nodes) {
      let out = "";
      for (const node of nodes) {
        if (node.raw) out += node.raw;
        else if (/^@(?:-webkit-|-moz-)?keyframes\b/i.test(node.head)) {
          out += `\u0000${keyframes.length}\u0000`;
          keyframes.push(node);
        } else if (/^@(?:media|supports|layer|container|scope|starting-style)\b/i.test(node.head)) {
          const inner = keep(parse(node.body));
          if (inner || /^@layer\b/i.test(node.head)) out += `${node.head}{${inner}}`;
        } else if (node.head.startsWith("@")) out += `${node.head}{${node.body}}`;
        else {
          const kept = selectors(node.head).filter((s) => matches(s, names));
          if (kept.length) out += `${kept.join(",")}{${node.body}}`;
        }
      }
      return out;
    }
    const text = keep(parse(css));
    // Animations that nothing kept names are left out.
    const words = new Set(text.match(/[\w-]+/g));
    return text.replace(/\u0000(\d+)\u0000/g, (_, k) => {
      const { head, body } = keyframes[+k];
      const name = head.replace(/^@\S+\s+/, "").replace(/["']/g, "");
      return words.has(name) ? `${head}{${body}}` : "";
    });
  }

  const STYLE = /<style\b([^>]*\bdata-href="([^"]*)"[^>]*)>([\s\S]*?)<\/style>/g;
  const hrefs = [];
  const inlined = [];
  let names = null;
  let doc = html.replace(STYLE, (tag, attributes, list, css) => {
    const files = decode(list).split(/\s+/).filter((href) => /^\/_next\/\S+\.css(\?|$)/.test(href));
    if (!files.length) return tag;
    names ??= namesOf(html.replace(/<script\b[\s\S]*?<\/script>/g, "").replace(STYLE, ""));
    hrefs.push(...files);
    inlined.push(css);
    return `<style${attributes}>${prune(css, names)}</style>`;
  });

  /* ------------------------------------------- 2. the payload's copy of it
     Next also writes each stylesheet into the page's data for React (the RSC
     payload), as a text row. React finds the <style> in the page by its
     data-href and never reads that copy, so it goes out empty. */
  function slimPayload(page) {
    // "<" is always escaped inside the payload.
    const PUSH = /<script>self\.__next_f\.push\((\[(?:1|3),"[^<]*"\])\)<\/script>/g;
    const found = [...page.matchAll(PUSH)];
    if (!found.length) return page;
    const bytes = Buffer.concat(
      found.map((m) => {
        const [kind, text] = JSON.parse(m[1]);
        return Buffer.from(text, kind === 3 ? "base64" : "utf8");
      }),
    );
    const out = [];
    let i = 0;
    let from = 0;
    while (i < bytes.length) {
      // A row: its id in hex, a colon, then JSON to the end of the line, or a
      // letter, a length in hex, a comma and that many bytes.
      const colon = bytes.indexOf(58, i);
      if (colon < 0 || !/^[0-9a-f]*$/.test(bytes.toString("latin1", i, colon))) return page;
      const tag = String.fromCharCode(bytes[colon + 1]);
      const size = /^([0-9a-f]+),/.exec(bytes.toString("latin1", colon + 2, colon + 20));
      if ("TAOoUSsLlGgMmV".includes(tag) && size) {
        if (tag !== "T") return page;
        const at = colon + 2 + size[0].length;
        const end = at + parseInt(size[1], 16);
        if (end > bytes.length) return page;
        const text = bytes.toString("utf8", at, end);
        if (text.length > 200 && inlined.some((css) => css.includes(text))) {
          out.push(bytes.subarray(from, colon + 2), Buffer.from("1, "));
          from = end;
        }
        i = end;
      } else {
        const newline = bytes.indexOf(10, colon);
        if (newline < 0) break;
        i = newline + 1;
      }
    }
    if (!out.length) return page;
    out.push(bytes.subarray(from));
    const slim = Buffer.concat(out);
    const text = slim.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(slim)) return page;
    const json = JSON.stringify([1, text]).replace(/[&><\u2028\u2029]/g, (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));
    let first = true;
    return page.replace(PUSH, () => {
      if (!first) return "";
      first = false;
      return `<script>self.__next_f.push(${json})</script>`;
    });
  }
  if (inlined.length) doc = slimPayload(doc);

  /* ----------------------------------------------------------- 3. scripts
     Next's <script src> tags and their preloads come out; the inline script
     below puts them back at the reader's first interaction. */
  const scripts = [];
  const attributesOf = (text) => {
    const out = {};
    for (const m of text.matchAll(/([\w:-]+)(?:="([^"]*)")?/g)) {
      const name = m[1].toLowerCase();
      if (name !== "src") out[name] = decode(m[2] ?? "");
    }
    return out;
  };
  doc = doc
    .replace(/<script\b([^>]*)\bsrc="(\/_next\/[^"]+)"([^>]*)><\/script>/g, (_, before, src, after) => {
      const attributes = attributesOf(`${before} ${after}`);
      // Polyfills for browsers without modules, which cannot run the rest.
      if (!("nomodule" in attributes)) scripts.push([decode(src), attributes]);
      return "";
    })
    .replace(/<link\b(?=[^>]*\brel="(?:preload|modulepreload)")[^>]*\bhref="\/_next\/[^"]+\.js(?:\?[^"]*)?"[^>]*>/g, "");
  if (!scripts.length) return html;

  /* ---------------------------------------------------------- 4. pictures
     One without width and height says its shape, so that its place can be kept
     while the script below holds it back. */
  doc = doc.replace(/<img\b[^>]*>/g, (tag) => {
    if (!/\sloading="lazy"/.test(tag) || /\s(?:width|height)="/.test(tag)) return tag;
    const src = /\ssrc="([^"]+)"/.exec(tag);
    const size = src && sizes && sizes[decode(src[1]).replace(/[?#].*$/, "")];
    return size ? tag.replace("<img", `<img data-sbm-size="${size}"`) : tag;
  });
  // Before every other rule, at no specificity: a shape the stylesheets give a picture wins.
  doc = doc.replace("<head>", "<head><style>:where(img[data-sbm-size]){aspect-ratio:auto var(--sbm-size)}</style>");

  // Runs in the browser, in <head>.
  function boot(w, d, scripts, styles) {
    /* Scripts: at the reader's first interaction. */
    const EVENTS = ["scroll", "wheel", "touchstart", "pointerdown", "mousemove", "keydown"];
    const OPTIONS = { passive: true, capture: true };
    let started = false;
    let pending = null;
    let pendingForm = null;
    function run() {
      scripts.forEach(([src, attributes]) => {
        const el = d.createElement("script");
        for (const name in attributes) el.setAttribute(name, attributes[name]);
        el.src = src;
        el.async = true;
        el.onerror = stale;
        d.head.appendChild(el);
      });
    }
    // A page kept by the browser from before a deployment can name files that
    // are gone: it is fetched afresh, once.
    function stale() {
      try {
        if (sessionStorage.getItem("sbm-stale") || !navigator.onLine) return;
        sessionStorage.setItem("sbm-stale", "1");
      } catch {
        return;
      }
      fetch(location.href, { cache: "reload" }).then((r) => {
        if (r.ok) location.reload();
      });
    }
    function start(e) {
      if (started) return;
      // What the browser sends of itself is not the reader: a mouse move that
      // moved nothing, a scroll still at the top.
      if (e && e.type === "mousemove" && !e.movementX && !e.movementY) return;
      if (e && e.type === "scroll" && !(w.scrollY > 0)) return;
      started = true;
      EVENTS.forEach((name) => w.removeEventListener(name, start, OPTIONS));
      scripts.forEach(([src]) => {
        const link = d.createElement("link");
        link.rel = "preload";
        link.as = "script";
        link.href = src;
        d.head.appendChild(link);
      });
      // The full stylesheets first (a menu or tab that React opens may need a
      // rule the page went out without), React once they are there.
      let left = styles.length;
      let ran = false;
      const go = () => {
        if (ran) return;
        ran = true;
        run();
      };
      if (!left) return go();
      let after = d.querySelector("style[data-href]");
      styles.forEach((href) => {
        const link = d.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.setAttribute("data-precedence", "next");
        link.onload = link.onerror = () => {
          if (--left <= 0) go();
        };
        if (after) after.after(link);
        else d.head.appendChild(link);
        after = link;
      });
      setTimeout(go, 4000);
    }
    EVENTS.forEach((name) => w.addEventListener(name, start, OPTIONS));

    /* What the reader did before React was there is done again for it. */
    d.addEventListener(
      "click",
      (e) => {
        if (w.__sbmHydrated || !e.target.closest) return;
        const el = e.target.closest('button, [role="button"], a[href="#"]');
        if (!el) return;
        start();
        if (el.tagName === "A") e.preventDefault();
        // A form's own button: the form's submit below is sent again instead.
        if (el.type === "submit" && el.form) return;
        pending = el;
      },
      true,
    );
    d.addEventListener(
      "submit",
      (e) => {
        if (w.__sbmHydrated) return;
        e.preventDefault();
        pendingForm = e.target;
        start();
      },
      true,
    );
    d.addEventListener("sbm:hydrated", () => {
      const el = pending;
      const form = pendingForm;
      pending = pendingForm = null;
      // Some sections wake up after the page (HydrateLater): not before React
      // knows the element, and not inside React's own work.
      const again = (target, act, tries) =>
        setTimeout(() => {
          if (!d.contains(target)) return;
          if (Object.keys(target).some((key) => key.startsWith("__reactProps"))) act(target);
          else if (tries) again(target, act, tries - 1);
        }, 50);
      if (el) again(el, (x) => x.click(), 200);
      if (form) again(form, (x) => x.requestSubmit && x.requestSubmit(), 200);
    });

    /* The header sticks from the first scroll, as in Header.tsx. */
    w.addEventListener(
      "scroll",
      () => {
        if (w.__sbmHydrated) return;
        const header = d.querySelector("header.header-three-area");
        if (header) header.classList.toggle("menu-fixed", w.scrollY > 100);
      },
      { passive: true },
    );

    /* Pictures: none below the screen while the page opens. Crawlers get the
       page as it is, every address in place. */
    if (!w.IntersectionObserver || !w.MutationObserver || /bot|crawl|spider|slurp|inspectiontool/i.test(navigator.userAgent)) return;
    const HELD = "img[data-sbm-src],img[data-sbm-srcset],iframe[data-sbm-src]";
    function hold(el) {
      if (el.getAttribute("loading") !== "lazy" || el.getAttribute("fetchpriority") === "high") return;
      // The corner decorations' styles read the picture's address (decorations.css).
      if (el.closest(".shape1,.shape2")) return;
      if (el.parentNode && el.parentNode.tagName === "PICTURE") {
        for (const source of el.parentNode.querySelectorAll("source[srcset]")) {
          source.setAttribute("data-sbm-srcset", source.getAttribute("srcset"));
          source.removeAttribute("srcset");
        }
      }
      const size = el.getAttribute("data-sbm-size");
      if (size) el.style.setProperty("--sbm-size", size);
      for (const name of ["srcset", "src", "alt"]) {
        const value = el.getAttribute(name);
        if (value === null || (name === "alt" && !value)) continue;
        el.setAttribute("data-sbm-" + name, value);
        // An image without src draws its alt text, so that waits too; its name
        // stays, for a screen reader and for the link it may be in.
        if (name !== "alt") el.removeAttribute(name);
        else {
          el.setAttribute("alt", "");
          if (!el.hasAttribute("aria-label") && !el.hasAttribute("role")) {
            el.setAttribute("role", "img");
            el.setAttribute("aria-label", value);
          }
        }
      }
    }
    function show(el) {
      if (el.parentNode && el.parentNode.tagName === "PICTURE") {
        for (const source of el.parentNode.querySelectorAll("source[data-sbm-srcset]")) {
          source.setAttribute("srcset", source.getAttribute("data-sbm-srcset"));
          source.removeAttribute("data-sbm-srcset");
        }
      }
      for (const name of ["srcset", "src"]) {
        const value = el.getAttribute("data-sbm-" + name);
        if (value === null) continue;
        el.removeAttribute("data-sbm-" + name);
        // One React has given a value of its own since keeps it.
        if (!el.hasAttribute(name)) el.setAttribute(name, value);
      }
      // The alt text comes back with the picture: a browser draws it in the
      // picture's place until then, and the place changes size.
      const alt = el.getAttribute("data-sbm-alt");
      if (alt === null) return;
      const named = () => {
        el.removeAttribute("data-sbm-alt");
        if (!el.getAttribute("alt")) el.setAttribute("alt", alt);
        if (el.getAttribute("aria-label") !== alt) return;
        el.removeAttribute("aria-label");
        el.removeAttribute("role");
      };
      if (el.complete && el.naturalWidth) return named();
      el.addEventListener("load", named, { once: true });
      el.addEventListener("error", named, { once: true });
    }
    const hidden = (el) => (el.checkVisibility ? !el.checkVisibility({ visibilityProperty: true }) : getComputedStyle(el).visibility === "hidden");
    // On the screen but not shown (a shut menu's flags): they wait for what shows them.
    let waiting = [];
    let queued = false;
    // A picture without a size of its own can lie on the edge of a box that
    // clips it and never be "on the screen": the first box around it that has
    // a size stands for it.
    const around = new Map();
    function seen(entries, observer) {
      entries.forEach(({ target, isIntersecting, boundingClientRect: box }) => {
        const held = around.get(target) || [target];
        if (isIntersecting) {
          observer.unobserve(target);
          around.delete(target);
          held.forEach((el) => {
            if (hidden(el)) waiting.push(el);
            else show(el);
          });
        } else if (target.matches(HELD) && !(box.width && box.height) && target.checkVisibility && target.checkVisibility({ contentVisibilityAuto: true })) {
          let parent = target.parentElement;
          while (parent && parent !== d.body && !(parent.offsetWidth && parent.offsetHeight)) parent = parent.parentElement;
          if (!parent || parent === d.body) return;
          observer.unobserve(target);
          around.set(parent, [...(around.get(parent) || []), target]);
          observer.observe(parent);
        }
      });
    }
    function check() {
      waiting = waiting.filter((el) => {
        if (hidden(el)) return true;
        show(el);
        return false;
      });
    }
    function recheck() {
      if (queued || !waiting.length) return;
      queued = true;
      requestAnimationFrame(check);
      setTimeout(() => {
        queued = false;
        check();
      }, 300);
    }
    ["mouseover", "focusin", "click", "transitionrun"].forEach((name) => d.addEventListener(name, recheck, true));
    let io = new IntersectionObserver(seen);
    // A section the browser had not laid out yet (content-visibility: auto) is
    // looked at again when it is; measured before, all of it would be laid out.
    d.addEventListener(
      "contentvisibilityautostatechange",
      (e) => {
        if (e.skipped || !e.target.querySelectorAll) return;
        e.target.querySelectorAll(HELD).forEach((el) => {
          io.unobserve(el);
          io.observe(el);
        });
      },
      true,
    );
    const fresh = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType !== 1) continue;
          for (const el of node.matches("img,iframe") ? [node] : node.querySelectorAll("img,iframe")) {
            hold(el);
            if (el.matches(HELD)) io.observe(el);
          }
        }
      }
    });
    fresh.observe(d.documentElement, { childList: true, subtree: true });
    // Only what the page came with: what React draws later loads as usual.
    d.addEventListener("DOMContentLoaded", () => setTimeout(() => fresh.disconnect(), 0));
    // From the reader's first scroll, a screen and a half ahead.
    function ahead() {
      if (!(w.scrollY > 0)) return;
      w.removeEventListener("scroll", ahead);
      io.disconnect();
      around.clear();
      io = new IntersectionObserver(seen, { rootMargin: "150% 0px" });
      d.querySelectorAll(HELD).forEach((el) => io.observe(el));
    }
    w.addEventListener("scroll", ahead, { passive: true });
    w.addEventListener("beforeprint", () => d.querySelectorAll(HELD).forEach(show));
  }

  const json = (value) => JSON.stringify(value).replace(/</g, "\\u003c");
  const source = boot
    .toString()
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "")
    .replace(/\n\s*/g, "\n");
  return doc.replace("</head>", () => `<script>(${source})(window,document,${json(scripts)},${json(hrefs)})</script></head>`);
}
