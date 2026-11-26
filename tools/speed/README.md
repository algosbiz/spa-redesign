# Speed: what a page loads as it opens

Ported on 25 Nov 2026 from the Legend Diving sites (diving-komodo's
`tools/defer-next-scripts.mjs` above all) and adapted to Next 16 with
Turbopack. A page opens with its HTML, two fonts and the pictures of its first
screen. No script and no stylesheet is fetched before the reader does
something.

| File | What it does |
|---|---|
| `page-edit.mjs` | `editPage`: edits a page's HTML as Next draws it, and holds the inline script of every page |
| `patch-next-renderer.mjs` | puts `editPage` into Next's renderer; `postinstall` and `prebuild` run it |
| `check-build.mjs` | fails a build whose pages still load scripts or stylesheets at open; `postbuild` runs it |
| `icons.py` | draws the Font Awesome icons as masks (`src/styles/icons.css`) |
| `light-images.py` | lighter copies of the decorative pictures (`src/styles/light-images.css`) |

`next dev` is not patched: there, scripts, styles and pictures load as usual.
The admin (`/admin/`) is left alone (no `data-site` on `<html>`).

## 1. Scripts wait for the reader

The page is whole in its HTML. React adds the phone menu, the search, the FAQ,
the tabs, the sliders and the form, and each of those starts with a touch, a
scroll, a click, a key or a mouse move. `editPage` takes Next's
`<script src="/_next/…">` tags and their preloads out, and the inline script in
`<head>` puts them back at the first of those.

- A button, a `role="button"` or an `a[href="#"]` tapped before React is there
  is tapped again once it is, and a form sent before then is sent again.
  `src/components/ui/Hydrated.tsx` says when (`sbm:hydrated`) and hands React
  the text already typed into a field. The second tap waits until React knows
  the element: sections inside `HydrateLater` wake up after the page.
- What the browser sends of itself does not count: a mouse move that moved
  nothing, a scroll still at the top.
- The header sticks from the first scroll without React (same rule as
  `Header.tsx`).
- A page the browser kept from before a deployment can name script files that
  are gone. If one fails to load, the page is fetched afresh, once.

**Anything new that must work before the first touch cannot rely on React.**
The preloader is an example: it leaves by CSS (`custom.css`).

## 2. The styles are in the page

`experimental.inlineCss` writes the stylesheets into the page. On its own that
was slower (tried and reverted on 10 Nov: the whole stylesheet went out twice,
once for React). `editPage` keeps the rules whose classes and ids are in the
page's HTML (about a third), and empties the second copy in the data for React.
The full stylesheets load with the scripts, before React runs, so a class React
adds later finds its rules.

A class set by an inline script before React (only `menu-fixed`) is on the list
in `namesOf`.

## 3. Pictures below the screen wait

`loading="lazy"` alone fetches 1,250 to 2,500 px ahead. The inline script takes
the address off each lazy picture and iframe as the HTML is read, and gives it
back when the picture reaches the screen; from the first scroll, a screen and a
half before. The HTML itself keeps `src` and `alt`, and a crawler's browser is
left alone, so search engines see every picture.

- A lazy picture with no `width` and `height` gets its shape from the file
  (`data-sbm-size`), so nothing moves when it comes.
- Its `alt` waits as `aria-label`, so links and screen readers keep the name.
- The corner decorations (`.shape1`, `.shape2`) are not held: their styles read
  the picture's address (`decorations.css`).
- A picture that must be there at once has no `loading="lazy"`.

## 4. Translations

`ui.json` (360 KB) used to be inside every translated page. The browser now
fetches its language's file once, with the scripts (`src/i18n/client.tsx`).

## 5. Icon paths and uploaded photos (26 Nov)

The path data of the SVG icons written into the pages was 30 to 40% of a
page's compressed HTML, and React's data carries it a second time.
`svg-paths.py` writes it with 2 decimals and relative steps where shorter;
only `d` changes, never an element, a class or a colour. All 105 rewritten
paths were drawn old and new at 8x: no pixel differed by more than 25 of 255.
Run it after adding an icon (`--check` lists what it would change).

Photos uploaded in /admin/ (`images.spabalimoon.com`) are stored as uploaded
(a blog cover 1428px, about 120 KB). Cards, thumbnails and the article banner
on phones now take a size from the image optimiser (`src/lib/uploadedImage.ts`,
`remotePatterns` in `next.config.ts`).

## After a Next upgrade

`patch-next-renderer.mjs` stops the install if it no longer recognises Next's
renderer, and `check-build.mjs` stops the build if the result is not as above.
Next 16 draws pages through Node streams; the web-stream function has the same
shape as in Next 15 but draws nothing here, so both are wrapped.

## Measured (25 Nov 2026, local production build behind brotli, phone, median of 3)

See PROGRESS.md, "Kecepatan mobile (25 November)". Local numbers have misled
before: check on PageSpeed after a deployment, twice (the first run meets an
empty Cloudflare cache).
