# Migration Audit — spabalimoon.com

> Audit date: 2026-09-23. Source of truth: https://spabalimoon.com/ (production).
> **Nothing listed here has been fixed or decided.** The new site will show the existing value of each page exactly as it is today until the owner decides. Each item states which value is on which page.
> Priority: 🔴 High (price, contact or business-fact conflicts customers will see) · 🟠 Medium (SEO or functionality) · 🟢 Low (wording or housekeeping).

## Summary

| ID | Priority | Issue | Status |
|---|---|---|---|
| PRICE-01 | 🔴 | Deep Tissue Massage price differs | REQUIRES MANUAL REVIEW |
| PRICE-02 | 🟢 | Hot Stone Package B price differs | RESOLVED (live now shows 549K on both pages, 2026-09-25) |
| PRICE-03 | 🔴 | Homepage "From" prices do not match the pricelist | REQUIRES MANUAL REVIEW |
| PRICE-04 | 🔴 | Priced services missing from the pricelist (Hair Braiding, Nail Art options, Eyelash) | REQUIRES MANUAL REVIEW |
| PRICE-05 | 🟠 | Traditional Massage 30 min option missing on its own page | REQUIRES MANUAL REVIEW |
| PRICE-06 | 🟢 | Live prices changed after migration: Aromatherapy, Cellulite, Hot Stone Massage and six packages | RESOLVED (updated to the live values, 2026-09-25) |
| PRICE-07 | 🟢 | Live /seminyak/ and /outcall-home-service-massage/ changed again: Waxing Brazilian price, six descriptions, Balinese Massage Packages added, Couple Packages tab | RESOLVED (updated to the live values, 2026-09-26) |
| DUR-01 | 🔴 | Couple Warm Candle top tier: 2 Hours vs 2.5 Hours | ✅ RESOLVED: 2 Hours on every page (owner, 2026-10-23) |
| DUR-02 | 🔴 | Couple Package total durations | ✅ RESOLVED: written as on the price list, e.g. "1 Hour Balinese Massage + 30 Mins Ear Candle" (owner, 2026-10-23) |
| DUR-03 | 🟢 | Ear Candle duration wording | REQUIRES MANUAL REVIEW |
| HOURS-01 | 🔴 | Opening hours: 9am–11pm vs 9:00–22:00 | REQUIRES MANUAL REVIEW |
| ADDR-01 | 🔴 | Street name spelling: Pangkung vs Panggung | REQUIRES MANUAL REVIEW |
| ADDR-02 | 🟠 | Short vs full address format (NAP for schema) | REQUIRES MANUAL REVIEW |
| CONTACT-01 | 🔴 | Two different email addresses | REQUIRES MANUAL REVIEW |
| FEE-01 | 🔴 | Home-service fee: flat 75K vs distance-based | ✅ RESOLVED: fee by area (owner, 2026-10-22), see below |
| AREA-01 | 🟠 | Home-service area described differently | ✅ RESOLVED: areas listed with fee and travel time (owner, 2026-10-22) |
| PAY-01 | 🟠 | Accepted payment methods differ | ✅ RESOLVED for footer: VISA, Mastercard, Cash (owner, 2026-09-24); bank transfer open |
| FLOW-01 | 🟠 | Booking CTA destinations are inconsistent (WhatsApp vs /contact/) | REQUIRES MANUAL REVIEW |
| FLOW-02 | 🟠 | "In-spa bookings are made on-site" vs "book ahead via WhatsApp" | REQUIRES MANUAL REVIEW |
| FUNC-01 | 🟠 | Contact form backend and Cloudflare Turnstile | REQUIRES MANUAL REVIEW |
| FUNC-02 | 🟠 | Newsletter subscribe form | REQUIRES MANUAL REVIEW |
| FUNC-03 | 🟢 | Site search (header and blog sidebar) | REQUIRES MANUAL REVIEW |
| LINK-01 | 🟠 | Link to a staging domain | REQUIRES MANUAL REVIEW |
| LINK-02 | 🟢 | Placeholder `/#0` links | REQUIRES MANUAL REVIEW |
| SEO-01 | 🟠 | Homepage and Outcall share title and description | REQUIRES MANUAL REVIEW |
| SEO-02 | 🟠 | /reservation/ has no H1 | REQUIRES MANUAL REVIEW |
| SEO-03 | 🟠 | aggregateRating in homepage schema, and 5-star display on reviews | REQUIRES MANUAL REVIEW |
| SEO-04 | 🟠 | DaySpa schema is missing address, phone and hours (blocked by conflicts) | REQUIRES MANUAL REVIEW |
| SEO-05 | 🟢 | Truncated blog SEO title ("Jet Lag Relie") | REQUIRES MANUAL REVIEW |
| SEO-06 | 🟠 | 11 backlinked legacy URLs return 404 | REQUIRES MANUAL REVIEW |
| SEO-07 | 🟢 | Orphan page /wellness-in-bali/ | REQUIRES MANUAL REVIEW |
| SEO-08 | 🟠 | Full list of live redirect rules unknown | REQUIRES MANUAL REVIEW |
| SEO-09 | 🟢 | Heading structure quirks (blog H3 duplicate title, FAQ double H2) | REQUIRES MANUAL REVIEW |
| SEO-10 | 🟢 | Generic image alt texts | REQUIRES MANUAL REVIEW |
| URL-01 | 🟠 | Brief's route names vs live URLs | ✅ RESOLVED — keep live URLs (owner, 2026-09-23) |
| URL-03 | 🟠 | Proposed extra redirects (url-map C, D, G) — not active yet | REQUIRES MANUAL REVIEW |
| URL-02 | 🟠 | No /treatments/ hub or /about/ page exists | ✅ RESOLVED — brief menu; About → /#about, no new page (owner, 2026-09-23) |
| CONTENT-01 | 🟠 | Thai massage blog contains a facial-massage section | REQUIRES MANUAL REVIEW |
| CONTENT-02 | 🟠 | IV Drip blog promotes a third party and mentions medications | REQUIRES MANUAL REVIEW |
| CONTENT-03 | 🟠 | /wellness-in-bali/ promotes competitors and a third-party phone number | REQUIRES MANUAL REVIEW |
| CONTENT-04 | 🟢 | Treatment naming inconsistencies | REQUIRES MANUAL REVIEW |
| CONTENT-05 | 🟢 | Typos and unclear wording in existing copy | REQUIRES MANUAL REVIEW |
| CONTENT-06 | 🟢 | Waxing product description differs | REQUIRES MANUAL REVIEW |
| CONTENT-07 | 🟢 | Duplicate/generic copy on homepage featured cards | REQUIRES MANUAL REVIEW |
| CONTENT-08 | 🟢 | Same package set appears under different names | REQUIRES MANUAL REVIEW |
| CONTENT-09 | 🟢 | Meta description of /seminyak/couple-spa/ mentions a scrub not offered | REQUIRES MANUAL REVIEW |
| CONTENT-10 | 🟢 | "17 + Years" will go stale | REQUIRES MANUAL REVIEW |
| CONTENT-11 | 🟢 | Package item spelling normalised when packages were stored once (Step 7) | REQUIRES MANUAL REVIEW |
| IMG-01 | 🟠 | Placeholder image used as og:image | REQUIRES MANUAL REVIEW |
| IMG-02 | 🟠 | Low-resolution homepage images | REQUIRES MANUAL REVIEW |
| IMG-03 | 🟢 | Image originality/licence cannot be verified | REQUIRES MANUAL REVIEW |
| IMG-04 | 🟢 | Filename with a space; byte-identical duplicates | INFO (handled in image-inventory) |

---

## 🔴 Prices and durations

### PRICE-01

ISSUE:
PRICE CONFLICT — Deep Tissue Massage

PAGE A:
https://spabalimoon.com/seminyak/deep-tissue-massage/
VALUE
1 Hour **219K** · 1.5 Hours **319K**

PAGE B:
https://spabalimoon.com/seminyak/ (price list) · https://spabalimoon.com/ (catalog + featured card "From IDR 269K | 1 Hour") · https://spabalimoon.com/outcall-home-service-massage/
VALUE
1 Hour **269K** · 1.5 Hours **359K**

Related: Couple Deep Tissue is 539K / 719K for 2 pax (does not settle which single price is right).

RECOMMENDATION:
Requires manual review. Owner to confirm the current price. Until then each page keeps its own value, because centralising the data would silently pick one.

STATUS:
REQUIRES MANUAL REVIEW

### PRICE-02

ISSUE:
PRICE CONFLICT — Hot Stone Package B (1 Hr Hot Stone + 1 Hr Cream Bath + 30 Mins Reflexology)

PAGE A:
https://spabalimoon.com/seminyak/hot-stone-massage/
VALUE
**559K**

PAGE B:
https://spabalimoon.com/seminyak/ ("Hot Stone / Package B")
VALUE
**599K**

RECOMMENDATION:
Requires manual review.

STATUS:
RESOLVED (2026-09-25): the live site now shows **549K** for Hot Stone Package B on both pages, so the page override was removed and the package data updated (see PRICE-06).

### PRICE-03

ISSUE:
PRICE CONFLICT — "From" prices on the homepage featured-treatment slider do not match the pricelist or detail pages

| Card | Homepage label | Pricelist / detail page |
|---|---|---|
| Body Scrub | From IDR **100K** | Body scrub variants 169K ("Body Massage & Scrub · Start From 169K"). 100K is the *Additional Body Mask* or *Foot Scrub* price |
| Traditional Massage | From IDR **90K \| 30 Minutes** | Pricelist has 30 Minutes 90K; the detail page `/seminyak/traditional-massage/` starts at 1 Hour 169K (see PRICE-05) |
| Nail Art | From IDR **159K** | Not on the pricelist; `/seminyak/nail-spa/` "Manicure & Colour 159K" (see PRICE-04) |
| Hair Braiding | From IDR **279K** | Not on the pricelist; `/seminyak/hair-braiding/` Short Hair 279K |
| Bali Moon Facial | From IDR **196K** | Consistent for Bali Moon facials; Biokos-range facials are cheaper (169K) but are a different product |
| Deep Tissue Massage | From IDR **269K** | Conflicts with the detail page 219K (PRICE-01) |

PAGE A:
https://spabalimoon.com/ (featured slider)

PAGE B:
https://spabalimoon.com/seminyak/ and the detail pages listed

RECOMMENDATION:
Requires manual review. Proposed approach after approval: compute "From" labels from the treatment data so they cannot drift.

STATUS:
REQUIRES MANUAL REVIEW

### PRICE-04

ISSUE:
PRICING PRESENT ON SOME PAGES BUT MISSING FROM THE PRICELIST

| Service | Where priced | Values |
|---|---|---|
| Hair Braiding | `/seminyak/hair-braiding/`, homepage card | Short 279K · Medium 379K · Long 469K |
| Nail Art options | `/seminyak/nail-spa/` | Manicure & Colour 159K · Pedicure & Colour 169K · Nail Gel 219K (Nail Gel 219K matches pricelist "Nail Gel Feet or Hands") |
| Eyelash | `/outcall-home-service-massage/`, homepage JS catalog | Normal Eyelash 299K · Volume 359K · Mega Volume 399K |

PAGE A:
the pages listed

PAGE B:
https://spabalimoon.com/seminyak/ (does not list them)

RECOMMENDATION:
Requires manual review. Should they be added to the pricelist, and are they still offered?

STATUS:
REQUIRES MANUAL REVIEW

### PRICE-05

ISSUE:
PRICE/DURATION OPTION MISSING — Traditional Massage 30 Minutes / 90K

PAGE A:
https://spabalimoon.com/seminyak/ · https://spabalimoon.com/ · https://spabalimoon.com/outcall-home-service-massage/
VALUE
30 Minutes 90K · 1 Hour 169K · 1.5 Hours 259K · 2 Hours 339K

PAGE B:
https://spabalimoon.com/seminyak/traditional-massage/
VALUE
1 Hour 169K · 1.5 Hours 259K · 2 Hours 339K (no 30-minute option)

Also: the pricelist FAQ #8 names "the 30-minute traditional massage and 30-minute back massage at IDR 90,000" as the cheapest options.

RECOMMENDATION:
Requires manual review.

STATUS:
REQUIRES MANUAL REVIEW

### PRICE-06

ISSUE:
LIVE PRICES CHANGED AFTER THE MIGRATION SNAPSHOT (2026-09-23) — Aromatherapy, Cellulite and Hot Stone Massage

PAGE A:
Migration snapshot 2026-09-23 (homepage JS catalog, /seminyak/, treatment pages)
VALUE
Aromatherapy Massage: 1 Hour 199K · 1.5 Hours 239K · 2 Hours 339K · Cellulite Massage: 1 Hour 350K · 1.5 Hours 450K · Hot Stone Massage: 1 Hour 250K · 1.5 Hours 370K · 2 Hours 439K

PAGE B:
https://spabalimoon.com/ · https://spabalimoon.com/seminyak/ · https://spabalimoon.com/outcall-home-service-massage/ · https://spabalimoon.com/seminyak/anti-cellulite-massage/ · https://spabalimoon.com/seminyak/hot-stone-massage/ (checked 2026-09-25)
VALUE
Aromatherapy Massage: 1 Hour 199K · 1.5 Hours 339K · 2 Hours 439K · Cellulite Massage: 1 Hour 350K · 1.5 Hours 520K · 2 Hours 695K (new option, card text "All main target areas / Most thorough treatment / Guests wanting the fullest session") · Hot Stone Massage: 1 Hour 250K · 1.5 Hours 380K · 2 Hours 495K

RECOMMENDATION:
The live site is consistent on every page, so the owner changed the prices. Updated `src/data/pricelist.ts` and the Cellulite page card. All 33 items of the live /seminyak/ price list (every tab) were compared with `src/data/pricelist.ts`: these three were the only price differences. The same check showed that "Four Hand Warm Candle" (539K / 799K / 999K, listed on the live price list under Organic Warm Candle Oil Massage since before the migration) was missing from our /seminyak/ list; it is now added after Organic Warm Candle Oil Massage. Package prices (every package group on /seminyak/ and the homepage, and the package cards on the Body Scrub, Cream Bath and Hot Stone pages) were compared too; six changed on the live site and were updated in `src/data/packages.ts`: Body Scrub B 449K → 549K, Cream Bath B 589K → 549K, Hot Stone A 449K → 549K, Hot Stone B 599K → 549K (this also resolves PRICE-02), Hot Stone C 489K → 449K, Hot Stone D 439K → 519K. A full live-vs-rebuild content comparison (Step 21) should run shortly before launch to catch any other later edits.

STATUS:
RESOLVED (2026-09-25)

### PRICE-07

ISSUE:
THE LIVE PRICELIST PAGE CHANGED AGAIN AFTER PRICE-06 (checked 2026-09-26)

PAGE A:
Rebuild before 2026-09-26 (`src/data/pricelist.ts`, `src/data/packages.ts`, `src/data/pages/pricelist.ts`)
VALUE
Waxing Brazilian 269K · Organic Warm Candle Oil Massage description "1 Hr – warm candle wax balinese" · Biokos Facial description "Spa Facials For Dry, Normal & Oily Face" · 7 package collections (no Balinese Massage) · Four Hand Warm Candle and the four couple packages shown as separate rows

PAGE B:
https://spabalimoon.com/seminyak/ (Waxing Brazilian also on https://spabalimoon.com/, /outcall-home-service-massage/ and /seminyak/waxing-salon/), checked 2026-09-26
VALUE
Waxing Brazilian **350K** on all four pages · Organic Warm Candle Oil Massage: "A warming massage using natural candle oils to relax muscles and ease tension." · Biokos Facial: "A customized facial treatment for dry, normal, or oily skin, including a facial massage and mask." · a new first collection **Balinese Massage Packages** ("Rejuvenate and Revive", its own text and icon; the same four packages as the homepage) · Four Hand Warm Candle listed inside the Organic Warm Candle Oil Massage row · the couple packages listed as one row "Couple Massage Packages" (Package A–D)

RECOMMENDATION:
The owner changed the live page, so the rebuild follows it. Updated the Brazilian price (every page that shows it), the two pricelist descriptions, the Balinese Massage group texts and icon (`public/images/branding/icons/packages/balinese.png`, copied from the live `/images/icon/icon-spa/Balinese.png`) and added it first on /seminyak/; the price list now nests Four Hand Warm Candle (`pricelistParentId`). At the owner's request (2026-09-26) the couple packages are NOT inside "For Couples" as on live but in their own tab "Couple Massage Packages" next to it, one row per package, with the same labels and prices. A scripted comparison of every price-list row (33), every package collection (8 × 4 packages) and every other text on the live /seminyak/ page against the rebuild found no remaining differences, apart from the spelling items of CONTENT-11 which the pricelist now shows exactly as live (see there).

The same day the Home Service page (/outcall-home-service-massage/) was compared the same way (47 price rows in 5 tabs and every other text). Its live price list now has a separate **Couple Packages** tab (Couple Massage Package A–D, each with a photo), the "For Couples" order Balinese · Deep Tissue · Traditional · Warm Candle, the Massage tab's "Couple Massage" row lists every couple option and package, Waxing shows "Back" with "Start from 139K", and four Home Service descriptions changed: Sport Massage ("Targeted to ease muscle soreness, reduce stiffness, and support physical recovery."), Biokos Facial ("Custom facial care adjusted for dry, normal, or oily skin, including facial massage and mask application."), Couple Balinese Massage ("Designed for two to relax together while easing the body and sharing a calm moment.") and Couple Massage Warm Candle ("Using gently warmed candle oils to create comfort and a deeper sense of relaxation for couples."). All updated (`homeService*` fields in `src/data/pricelist.ts`, `src/data/pages/home-service.ts`); the scripted comparison then found no differences.

STATUS:
RESOLVED (2026-09-26)

### DUR-01

ISSUE:
DURATION CONFLICT — Couple Warm Candle Massage, top tier (999K, 2 pax)

PAGE A:
https://spabalimoon.com/seminyak/ · https://spabalimoon.com/seminyak/couple-spa/ · homepage JS catalog
VALUE
**2 Hours** · 2 pax · 999K

PAGE B:
https://spabalimoon.com/outcall-home-service-massage/ (twice)
VALUE
**2.5 Hours** · 2 pax · 999K

RECOMMENDATION:
Requires manual review.

STATUS:
REQUIRES MANUAL REVIEW

### DUR-02

ISSUE:
DURATION CONFLICT — Couple Massage Package total durations

PAGE A:
https://spabalimoon.com/seminyak/ and https://spabalimoon.com/seminyak/couple-spa/
VALUE
A: 1 Hr Balinese + 30 Mins Ear Candle (639K) · B: 1 Hr Balinese + 1 Hr Bali Moon Facial (709K) · C: 1 Hr Warm Candle + 30 Mins Ear Candle (849K) · D: 1 Hr Warm Candle + 1 Hr Bali Moon Facial (929K). Implied totals: 1.5 h / 2 h / 1.5 h / 2 h

PAGE B:
https://spabalimoon.com/outcall-home-service-massage/
VALUE
A "1.5 Hours" · B "**2.5 Hours**" · C "1.5 Hours" · D "**2.5 Hours**"

PAGE C:
Homepage JS catalog: description of every couple package is "1 Hour – Balinese Massage" / "1 Hour – Warm Candle"

RECOMMENDATION:
Requires manual review.

STATUS:
REQUIRES MANUAL REVIEW

### DUR-03

ISSUE:
UNCLEAR WORDING — Ear Candle duration / Hair Braiding duration

PAGE A:
https://spabalimoon.com/seminyak/ear-wax-removal/ price card
VALUE
30 Minutes 159K

PAGE B:
Same page, FAQ "How long does Ear Candle treatment take?"
VALUE
"around 20 - 30 minutes"

Also `/seminyak/hair-braiding/` FAQ says "between 30 minutes and 2 hours" with no duration on the price cards (priced by hair length). Not contradictory, but noted.

RECOMMENDATION:
Requires manual review (low).

STATUS:
REQUIRES MANUAL REVIEW

---

## 🔴 Business facts (NAP, hours, fees)

### HOURS-01

ISSUE:
OPENING HOURS CONFLICT

PAGE A:
Footer (every page) "Open Daily: 9am - 11pm" · https://spabalimoon.com/reservation/ "9:00 AM to 11:00 PM" · https://spabalimoon.com/outcall-home-service-massage/ "Open Daily: 9:00 - 23:00", "9am - 11pm", "9:00 AM to 11:00 PM" · https://spabalimoon.com/privacy-policy/ and https://spabalimoon.com/terms-and-conditions/ "9:00 AM to 11:00 PM"
VALUE
**09:00–23:00**

PAGE B:
https://spabalimoon.com/contact/ ("Opening Times: Open Daily: 9:00 - 22:00" and "Open daily · 9:00 – 22:00")
VALUE
**09:00–22:00**

Possible explanation (not assumed): in-spa hours vs home-service hours. The Contact page does not say so.

RECOMMENDATION:
Requires manual review. Opening hours will also go into the LocalBusiness/DaySpa schema, so one confirmed value (or separate in-spa / home-service values) is needed.

STATUS:
REQUIRES MANUAL REVIEW

### ADDR-01

ISSUE:
ADDRESS CONFLICT — street name spelling

PAGE A:
Footer, Home FAQ #6, `/contact/`, `/privacy-policy/`
VALUE
Jl. **Pangkung** Sari No. 30

PAGE B:
Mobile off-canvas menu (every page)
VALUE
Jl. **Panggung** Sari No. 30, Seminyak, Bali

RECOMMENDATION:
Requires manual review. "Pangkung" is the majority spelling and matches the Google Maps link, but this audit does not choose.

STATUS:
REQUIRES MANUAL REVIEW

### ADDR-02

ISSUE:
ADDRESS FORMAT — which full address is canonical for NAP and schema

PAGE A:
Footer / Privacy
VALUE
"Jl. Pangkung Sari No. 30, Seminyak, Bali"

PAGE B:
https://spabalimoon.com/contact/
VALUE
"Jl. Pangkung Sari No. 30 Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361" (second instance has a comma after "30")

RECOMMENDATION:
Requires manual review. Confirm one structured address (street, locality, region, postal code) for the schema. Display texts stay per page.

STATUS:
REQUIRES MANUAL REVIEW

### CONTACT-01

ISSUE:
CONTACT CONFLICT — email address

PAGE A:
https://spabalimoon.com/ (DaySpa JSON-LD, not visible)
VALUE
info@spabalimoon.com

PAGE B:
https://spabalimoon.com/privacy-policy/ (visible mailto link)
VALUE
spabalimoon@gmail.com

No other page shows an email.

RECOMMENDATION:
Requires manual review. Which email should appear in the footer and schema?

STATUS:
REQUIRES MANUAL REVIEW

Note: the WhatsApp number is **consistent** everywhere (+62 878-6317-5144 / wa.me/6287863175144; `/wellness-in-bali/` writes it as 0878-6317-5144, the same number). No conflict.

### FEE-01

ISSUE:
HOME SERVICE FEE CONFLICT — flat vs distance-based

PAGE A:
Footer, `/`, `/seminyak/` (FAQ #4, #10), `/outcall-home-service-massage/`, `/reservation/`, `/villa-hotel-massage/`, treatment page CTAs
VALUE
"Extra 75K/Therapist", "IDR 75,000 per therapist" (flat; couples 150K total per pricelist FAQ #10)

PAGE B:
https://spabalimoon.com/terms-and-conditions/
VALUE
"a transport fee of 75k applies to accommodations within Seminyak. Fees for locations outside Seminyak vary depending on distance and travel time"

PAGE C:
https://spabalimoon.com/privacy-policy/ — "Transport fees are calculated based on distance and time" · `/seminyak/` FAQ #11 — "further out … any additional travel cost" · `/massage-kuta/` FAQ — "Availability and travel fees depend on the location"

RECOMMENDATION:
Requires manual review. The Home Service page's "Home Service Fee" section needs one confirmed rule.

STATUS:
✅ RESOLVED (owner, 2026-10-22). Fee per therapist by area: IDR 75.000 in Seminyak, Petitenget
and Kerobokan; IDR 150.000 in Canggu, North Kuta and Kuta; confirmed on WhatsApp for Uluwatu,
Jimbaran, Nusa Dua, Ubud, Sanur and Denpasar. Stored once in `business.homeService.zones`, with
the travel time from the spa. Rule for copy: wherever a page gives one figure, it says "from
IDR 75.000" or ties IDR 75.000 to the Seminyak area. The Kuta page says IDR 150.000. Terms and
Privacy Policy already say the fee varies outside Seminyak, so they were left as they are.

### AREA-01

ISSUE:
UNCLEAR WORDING — home service coverage area

PAGE A:
https://spabalimoon.com/outcall-home-service-massage/ FAQ
VALUE
"Seminyak, Kerobokan, Petitenget, Canggu, and North Kuta. We also travel to Kuta, Jimbaran, Uluwatu, Nusa Dua, Sanur, Denpasar, and Ubud, subject to therapist availability and travel time."

PAGE B:
Most other pages
VALUE
"Seminyak and nearby areas" / "Seminyak and surrounding areas" / `areaServed: "Seminyak, Bali"` in schema

RECOMMENDATION:
Requires manual review. Not a direct contradiction. The new "Service Area" section will use the Outcall FAQ list verbatim unless told otherwise.

STATUS:
✅ RESOLVED (owner, 2026-10-22). The outcall page's "Home Service Areas Around Seminyak" section
lists every area with its fee and travel time (`business.homeService.zones`). Lists that put
Canggu and North Kuta at the Seminyak fee were corrected.

### PAY-01

ISSUE:
PAYMENT METHODS CONFLICT

PAGE A:
Footer "Accepted Payments:"
VALUE
VISA · Cash

PAGE B:
https://spabalimoon.com/villa-hotel-massage/
VALUE
"cash, bank transfer, Visa, and Mastercard, subject to availability" and "Cash & card accepted"

RECOMMENDATION:
Requires manual review.

OWNER DECISION (2026-09-24):
Footer shows VISA, Mastercard and Cash, with their logos (Mastercard added on the owner's request, matching the villa page). Bank transfer is still only mentioned on the villa page.

STATUS:
✅ RESOLVED for the footer (bank transfer: still open)

---

## 🟠 Booking flow and functionality

### FLOW-01

ISSUE:
UNCLEAR BOOKING DESTINATION — CTAs go to different places

| Location | Button | Destination |
|---|---|---|
| Header, every hero "Book Now", treatment package cards, homepage package "Reserve", final CTAs | Book an Appointment / Book Now / Reserve | WhatsApp `wa.me/6287863175144` (no pre-filled message) |
| `/seminyak/` package cards (all 28) | Reserve | `/contact/` |
| Homepage catalog items without a detail page | "Book <name>" | `/contact/` |
| Home "Easy WhatsApp Booking" card | link | `/contact/` |

RECOMMENDATION:
Requires manual review. The brief asks for one centralised WhatsApp helper with a pre-filled message ("Hi Spa Bali Moon, I'd like to book …"). Switching the `/contact/` buttons to WhatsApp changes the existing flow, so it needs approval. No existing WhatsApp link uses a pre-filled message today, so adding one is also a change to approve.

STATUS:
REQUIRES MANUAL REVIEW

### FLOW-02

ISSUE:
UNCLEAR WORDING — in-spa booking policy

PAGE A:
https://spabalimoon.com/outcall-home-service-massage/ final CTA
VALUE
"For in-spa treatments, bookings are made on-site at your preferred time."

PAGE B:
https://spabalimoon.com/reservation/ "walk-ins welcome or book ahead" · Home FAQ #1 "Advance bookings are recommended" · `/seminyak/` FAQ #6 "Advance booking is recommended … Contact us on WhatsApp"

RECOMMENDATION:
Requires manual review.

STATUS:
REQUIRES MANUAL REVIEW

### FUNC-01

ISSUE:
EXISTING FUNCTIONALITY — Contact form

PAGE A:
https://spabalimoon.com/contact/
VALUE
Form fields: Name*, Email*, Subject*, Phone/WhatsApp, Message* · hidden `form_botcheck` honeypot · **Cloudflare Turnstile** · buttons "Send message" / "Reset" · success/error toast. Submission goes to the current site's own backend (not a public third-party endpoint), so it cannot be reused as-is.

RECOMMENDATION:
Requires manual review. Options: (a) rebuild with a Next.js Route Handler plus an email provider (needs API keys / SMTP) and keep Turnstile (needs a site key), (b) use a form service (e.g. Web3Forms/Formspree), or (c) replace it with WhatsApp. The form will **not** be removed silently. Until decided, it will be built as UI with a clearly marked TODO.

STATUS:
REQUIRES MANUAL REVIEW

STEP 10–17 NOTE:
Interim build: `/contact/` keeps the same fields (Name*, Email*, Subject*, Phone/WhatsApp, Message*) with client-side validation. On submit it opens WhatsApp with the message pre-filled (helper text: "Your message opens in WhatsApp, ready to send."). No email is sent and Turnstile is not included yet. Still waiting for the owner's choice of option (a), (b) or (c).

### FUNC-02

ISSUE:
EXISTING FUNCTIONALITY — Footer newsletter ("Join Our Newsletter", posts to `/api/subscribe/`)

PAGE A:
Footer, every page

RECOMMENDATION:
Requires manual review. Which mailing-list provider receives subscribers today? Keep, reconnect or remove?

STEP 9 NOTE: the new footer does NOT include the newsletter form yet, because a form that submits nowhere would lose sign-ups. It will be added as soon as a provider is chosen. This is a documented, temporary gap, not a removal.

STATUS:
REQUIRES MANUAL REVIEW

FOOTER UPDATE (2026-09-24):
The footer now matches the live footer 100% (Contact Us, Our Day Spa, Home Services, Join Our Newsletter, Accepted Payments, bottom line). Texts: `src/data/footer.ts`.
The newsletter field is back. Interim behaviour: "Subscribe" opens WhatsApp with "Please add me to your newsletter: <email>", so no sign-up is lost. Still needs the owner's choice of a mailing-list service (Mailchimp, Brevo, etc.) to replace it.

### FUNC-03

ISSUE:
EXISTING FUNCTIONALITY — Site search (header "Search treatments, pages…" → `/api/search-posts/?menu=1`; blog sidebar "Search here")

RECOMMENDATION:
Requires manual review (low). With about 42 pages, a simple static client-side search over treatments and posts is enough if it should be kept.

STEP 9 NOTE: the new header has no search box yet. Treatments are reachable through the Treatments menu (every treatment listed) and the footer. Pending the owner's decision.

STATUS:
REQUIRES MANUAL REVIEW


HEADER UPDATE (2026-09-24):
The header now has the live site's search button. It searches the 7 blog articles (title, excerpt, tags) directly in the browser, with no server, so the old `/api/search-posts/` endpoint is no longer needed.
### LINK-01

ISSUE:
BROKEN / LEAKED LINK — staging domain

PAGE A:
https://spabalimoon.com/outcall-home-service-massage/ ("Check [available treatments](…) and arrange your spa session easily through WhatsApp.")
VALUE
`https://spa-ten-ochre.vercel.app/#0`

RECOMMENDATION:
Requires manual review. Proposal: point it to `/seminyak/` (the treatment list). The text stays unchanged.

STATUS:
REQUIRES MANUAL REVIEW

### LINK-02

ISSUE:
PLACEHOLDER LINKS

PAGE A:
Header "Treatments" (dropdown trigger) → `/#0`; mobile-menu address → `/#0`

RECOMMENDATION:
Requires manual review (low). Proposal: the dropdown trigger becomes a `<button>` (accessibility), and the address links to the existing Google Maps directions URL from `/contact/`.

STATUS:
REQUIRES MANUAL REVIEW

---

## 🟠 SEO

### SEO-01

ISSUE:
SEO CONFLICT — duplicate title and meta description

PAGE A:
https://spabalimoon.com/
VALUE
Title "Spa Bali Moon - Outcall & Home Service Massage"; description "Our traditional Bali massage is available for outcall massage to your stay. Visit our spa or call for home service. Feel the signature warmth of Bali Moon."

PAGE B:
https://spabalimoon.com/outcall-home-service-massage/
VALUE
identical title and description

RECOMMENDATION:
Requires manual review. Migrating as-is keeps the duplicate. Changing either title changes existing SEO.

STATUS:
REQUIRES MANUAL REVIEW

### SEO-02

ISSUE:
SEO CONFLICT — missing H1

PAGE A:
https://spabalimoon.com/reservation/
VALUE
No H1 (headings: H4 "Your Spa Experience is One Click Away", H2 "Book Your Treatment")

RECOMMENDATION:
Requires manual review. Proposal: promote the existing H2 text "Book Your Treatment" to the H1 (no new copy).

STATUS:
REQUIRES MANUAL REVIEW

### SEO-03

ISSUE:
SEO / TRUST — aggregateRating and star display

PAGE A:
https://spabalimoon.com/ JSON-LD
VALUE
`aggregateRating: { ratingValue: 4.2, reviewCount: 192 }`, loaded live from Google Places at build time (`googleReviews.isLive: true`)

PAGE B:
Testimonials slider (Home, Pricelist, treatment pages)
VALUE
23 hand-picked Google review texts, each shown with **5 stars** and "Customer review"; no link to the source review

Concerns: (1) Google does not show self-serving LocalBusiness review stars and may treat them as a structured-data violation. (2) The brief forbids fake ratings. The numbers are real, but only if they stay synced to Google. (3) Showing all reviews at 5★ next to a 4.2 average is selective.

RECOMMENDATION:
Requires manual review. Proposal: keep the review texts and names verbatim, do not add stars unless confirmed, and omit `aggregateRating` from schema unless it is fetched live with a Google Places API key.

STATUS:
REQUIRES MANUAL REVIEW

### SEO-04

ISSUE:
SEO — LocalBusiness/DaySpa schema is incomplete, and completing it depends on HOURS-01, ADDR-01/02, CONTACT-01

PAGE A:
https://spabalimoon.com/ (only page with schema)
VALUE
DaySpa: name, url, image, email (info@), areaServed, aggregateRating. No address, telephone, openingHours or sameAs.

RECOMMENDATION:
Requires manual review. Once NAP, hours and email are confirmed, add address, telephone (+62 878-6317-5144, which is consistent), openingHours and sameAs (Facebook and Instagram URLs found on blog pages).

STATUS:
REQUIRES MANUAL REVIEW

### SEO-05

ISSUE:
SEO — truncated title

PAGE A:
https://spabalimoon.com/guide/best-massages-after-a-long-flight/
VALUE
`<title>` / og:title "Best Massage After a Long Flight – Jet Lag Relie" (likely "Relief")

RECOMMENDATION:
Requires manual review. Migrating as-is keeps the typo.

STATUS:
REQUIRES MANUAL REVIEW

### SEO-06

ISSUE:
BROKEN EXISTING URL — backlinked legacy URLs return 404

PAGE A:
`/bali-moon-best-massage-bali-seminyak-our-team.html` (138 backlinks), `/index.html` (9), `/bali-moon-best-massage-bali-seminyak-our-team-html.html` (7), four `/cheap-massage-seminyak-bali-price-list/*.html` sub-pages, `/contact.html`, `/appointments.html`, `/reservation-spa-bali-moon-massage.html`, plus `/spa-treatments/{balinese,traditional,foot}-massage-bali/` (pattern gaps)
VALUE
HTTP 404 today

RECOMMENDATION:
Requires manual review. Proposed 301 targets are in `url-map.md` §D.

STATUS:
REQUIRES MANUAL REVIEW

### SEO-07

ISSUE:
SEO — orphan page

PAGE A:
https://spabalimoon.com/wellness-in-bali/
VALUE
Indexed and in the sitemap, but no internal link points to it

RECOMMENDATION:
Requires manual review. Keep as orphan, link it from the blog, or retire it (see also CONTENT-03).

STATUS:
REQUIRES MANUAL REVIEW

### SEO-08

ISSUE:
SEO — unknown full redirect set on the live site

VALUE
The 35 live redirects in `url-map.md` §B were found by testing. The old project's config (next.config.js, vercel.json, middleware or CMS redirect table) was not available to this audit.

RECOMMENDATION:
Requires manual review. Share the old redirect config if possible, so no rule is lost.

STATUS:
REQUIRES MANUAL REVIEW

STEP 18 NOTE:
All 35 redirects from url-map section B are active (`src/data/redirects.ts` → `next.config.ts`, permanent 308) and were tested: each one lands on a 200 page. Addresses without the trailing slash also work (308 to the slash version, then to the new page — the same two steps the old site does). Still open: compare with the old project's own redirect config, if it can be found.

### SEO-09

ISSUE:
SEO — heading structure quirks (existing)

- Blog posts: H1 = title, then an H3 repeating the title before the article body.
- FAQ blocks: two H2s ("Time to Unwind" / "Everything You Need to Know"), with "Frequently Asked Questions" as a paragraph.
- Blog archive cards use H4 for post titles.
- Thai massage post: see CONTENT-01.

RECOMMENDATION:
Requires manual review (low). Proposal: keep every heading **text**, and fix only obvious levels (drop the duplicate H3 title in posts; use one H2 per FAQ block with the eyebrow as a paragraph).

STATUS:
REQUIRES MANUAL REVIEW

STEP 10–17 NOTE:
Applied the proposal: blog posts no longer repeat the title as an H3; FAQ blocks use one H2; text pages (privacy, terms, wellness) have their heading levels normalised so they start at H2 under the page H1. All heading texts are unchanged.

### SEO-10

ISSUE:
SEO — generic image alt text

VALUE
Most content photos use "Spa treatment", "Spa treatment detail", "Spa facial treatment" or "image"; some have empty alt. Details per page are in `seo-inventory.md`.

RECOMMENDATION:
Requires manual review (low). Keeping them verbatim preserves the existing state. Writing descriptive alts would be new copy, so it needs approval.

STATUS:
REQUIRES MANUAL REVIEW

### URL-01

ISSUE:
URL STRUCTURE — brief's suggested routes differ from the live URLs

VALUE
Brief: `/treatments/[slug]`, `/pricelist`, `/home-service`, `/blog/[slug]`, `/terms`. Live: `/seminyak/[slug]/`, `/seminyak/`, `/outcall-home-service-massage/`, `/guide/[slug]/`, `/terms-and-conditions/`.

RECOMMENDATION:
Keep the live URLs. Brief names become 301 aliases (§C, still to be confirmed individually).

DECISION:
Owner approved keeping the live URLs on 2026-09-23.

STATUS:
RESOLVED

### URL-02

ISSUE:
PAGE WITHOUT OBVIOUS DESTINATION — "About" and "Treatments" hub in the brief's navigation

VALUE
There is no `/about/` page (404) and no treatments hub. About content exists only as homepage sections (e.g. "Why Spa Bali Moon Is Part of the Bali Experience", "Since 2009") and the footer/mobile "About Us" paragraph. The only list of all treatments is the pricelist `/seminyak/`.

RECOMMENDATION:
Requires manual review. Options: (a) nav "About" → homepage `#about` anchor, "Treatments" → dropdown plus `/seminyak/` (no new pages, no new copy); (b) new `/about/` and `/treatments/` pages built only from existing copy (risk of duplicate content with the homepage and pricelist). Recommended: (a).

DECISION:
Owner chose the brief's menu (Treatments · Spa Packages · Home Service · About · Blog · Contact · Book via WhatsApp) on 2026-09-23. Spa Packages → /seminyak/#packages, Home Service → /outcall-home-service-massage/, About → /#about (homepage About section). No new pages or URLs. Pricelist and Reservation stay reachable (Treatments dropdown, footer).

STATUS:
RESOLVED

---



HEADER UPDATE (2026-09-24, owner): the header now copies the live website exactly: Home · Pricelist · Treatments (23 treatments in 4 columns) · Outcall · Reservation · Blog (7 articles) · Contact, plus search and "Book an Appointment" (WhatsApp). The utility bar (hours / address) was removed because the live site has none. Menu data: `src/data/navigation.ts`.
### URL-03

ISSUE:
SEO — extra redirects that need approval

VALUE
17 proposed redirects are written in `src/data/redirects.ts` → `proposedRedirects` but are **not active**:
- url-map C: `/pricelist/`, `/treatments/`, `/terms/` (short aliases)
- url-map D: 13 old URLs that other websites still link to but that return 404 today (e.g. `/bali-moon-best-massage-bali-seminyak-our-team.html`, 138 backlinks; `/index.html`, 9 backlinks)
- url-map G: `/sitemap_index.xml` → `/sitemap.xml`

RECOMMENDATION:
Approve all, some, or none. To activate one, move its line from `proposedRedirects` into `liveRedirects`. No other code change is needed.

STATUS:
REQUIRES MANUAL REVIEW
## Content

### CONTENT-01

ISSUE:
DUPLICATE CONTENT / UNCLEAR WORDING — facial section inside the Thai massage article

PAGE A:
https://spabalimoon.com/guide/what-is-thai-massage/
VALUE
H2 "How Facial Massage Supports Skin Wellness" + a paragraph about facial massage, placed between Thai-massage sections

PAGE B:
https://spabalimoon.com/guide/understanding-of-facial-massage/ (same H2 heading)

RECOMMENDATION:
Requires manual review. Likely a copy-paste error. It will be migrated verbatim until told otherwise.

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-02

ISSUE:
UNCLEAR / RISKY CONTENT — IV Drip article

PAGE A:
https://spabalimoon.com/guide/iv-drip/
VALUE
Describes IV drips containing "vitamins and medications", says "Book an IV Drip therapy in Seminyak", and ends with "IV Drip Therapy with Thrive Wellness Bali … Visit their website" with no link and no Spa Bali Moon service or price.

RECOMMENDATION:
Requires manual review. Is this a partner article? Should it link to the partner, stay as-is, or be retired (a retired post would need a 301)?

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-03

ISSUE:
UNCLEAR CONTENT — /wellness-in-bali/ promotes other businesses

PAGE A:
https://spabalimoon.com/wellness-in-bali/
VALUE
Sections on COMO Shambhala Estate, REVĪVŌ, Sukhavati, Nyuh Bali (with its phone "085 333 779 779"), Fivelements, Floating Leaf, Four Seasons, The Apurva Kempinski. Orphan page (SEO-07).

RECOMMENDATION:
Requires manual review. Migrated verbatim by default.

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-04

ISSUE:
UNCLEAR WORDING — the same treatment has different names

| Treatment | Names used |
|---|---|
| `/seminyak/sport-massage/` | Sport Massage (H1, pricelist) · Sports Massage (nav, title, cards) |
| `/seminyak/anti-cellulite-massage/` | Cellulite Massage (nav, H1) · Anti-Cellulite Massage (title) |
| `/seminyak/sunburn-massage/` | Sunburn Treatment (nav) · Sunburn Seminyak (H1) · Aloe Vera Massage (pricelist) |
| `/seminyak/ear-wax-removal/` | Ear Candle (everywhere) · slug "ear-wax-removal" · "Ear Wax Candle" (one H2) |
| `/seminyak/creambath/` | Cream Bath · Creambath · Hair Cream Bath · Hair Creambath · Creambath & Hair Mask |
| `/seminyak/nail-spa/` | Nail Art (nav) · Gel Art & Nails (title) · Nail Art & Gel Nails (H1) |
| `/seminyak/facial/` | Facial (nav) · Bali Moon Facial · Bali Moon Tea Tree / Gold Facial |
| `/seminyak/couple-spa/` | Couple Massage · Couple Massage Balinese · Couple Balinese Massage · Romantic Couple Massage |
| `/seminyak/balinese-massage/` | Balinese Massage · "Balinese Massage - Relaxing" (pricelist) |
| `/seminyak/traditional-massage/` | Traditional Massage · "Traditional Massage - Strong" (pricelist) |
| `/seminyak/coconut-oil-massage/` | Coconut Oil Massage (nav) · Virgin Cold-Press / Cold Press Coconut Oil Massage |

RECOMMENDATION:
Requires manual review (low). Each context keeps its existing label: the data model will store `navLabel`, `h1`, `pricelistName` and so on separately, so nothing is renamed.

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-05

ISSUE:
UNCLEAR WORDING / TYPOS in existing copy (kept verbatim unless approved)

- "1 Hr **Medi Pedi**" — `/seminyak/balinese-massage/` Package A & B (elsewhere "Mani & Pedi")
- "**We offers** …" — `/seminyak/creambath/`, `/seminyak/facial/`, `/seminyak/manicure-pedicure/`
- "**it’s** known for **it’s** affordable massage in seminyak" — `/wellness-in-bali/`
- "skilled **masseurs'**" — `/seminyak/head-massage/` meta description
- "1.5 Hour", "2 Hour" (singular) — `/seminyak/balinese-massage/`
- "Home FAQ #6 'Is Spa Bali Moon a licensed spa?'": the answer says "Yes" but describes establishment and location rather than a licence
- "Spa Bali MoonBlog" label (missing space) on the blog archive cards
- ~~Pricelist "Organic Warm Candle Oil Massage" description reads "1 Hr – warm candle wax balinese"~~ (the live page replaced it on 2026-09-26, see PRICE-07); the couple packages' JS description reads "1 Hour – Balinese Massage"

RECOMMENDATION:
Requires manual review (low). Proposal: approve a short list of pure typo fixes (Medi→Mani, We offers→We offer, it’s→its). Nothing will be changed without approval.

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-06

ISSUE:
UNCLEAR WORDING — wax products and waxing areas

PAGE A:
`/outcall-home-service-massage/`, homepage catalog
VALUE
"using olive oil hot wax"

PAGE B:
`/seminyak/waxing-salon/`
VALUE
"Mancine Strawberry Hard Wax for sensitive areas and olive oil strip wax for larger sections". It also mentions facial waxing (lip, chin, eyebrows) and "Manzilian" with no prices, and the meta description says "From brows to full body".

RECOMMENDATION:
Requires manual review (low).

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-07

ISSUE:
DUPLICATE CONTENT — every homepage featured card has the same description

PAGE A:
https://spabalimoon.com/ (23 featured cards)
VALUE
"Relax and rejuvenate your body and soul." on all 23 cards

RECOMMENDATION:
Requires manual review. Proposal: keep that sentence as-is, or (with approval) reuse each treatment's existing short description from the catalog / related-treatments block. That is existing copy, not new copy.

STATUS:
REQUIRES MANUAL REVIEW

STEP 10–17 NOTE:
The shared sentence is shown **once**, as the heading of the featured-treatments section, instead of repeating it on 23 cards. No new copy was written. Still open: whether to show each treatment's existing short description on the cards.

### CONTENT-08

ISSUE:
DUPLICATE CONTENT — the same packages appear under different group names

VALUE
Homepage "Balinese Massage / Package A–D" (449K, 549K, 449K, 399K) = Balinese-massage page Package A–D = "Mani Pedi Package A, B, D" + "Cream Bath Package C" on `/seminyak/`. Likewise "Body Scrub Package A" = "Bali Moon Facial Package A" (439K), and Thai/Cream Bath/Facial packages overlap.

RECOMMENDATION:
Requires manual review (low). Proposal: store each unique package once in `packages.ts` and reference it from each group, so a future price change happens in one place. Display names per group are kept.

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-09

ISSUE:
SEO CONFLICT — meta description does not match the page

PAGE A:
https://spabalimoon.com/seminyak/couple-spa/
VALUE
Meta: "Indulge in a warm candle massage perfect for couples. Includes facial, natural scrub, and Balinese massage." None of the couple packages on the page includes a scrub.

RECOMMENDATION:
Requires manual review (low).

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-10

ISSUE:
UNCLEAR WORDING — time-sensitive claim

VALUE
"17 + Years Experience" badge on every treatment page and outcall/villa/kuta/day-spa (2009 + 17 = 2026). It will be wrong from 2027.

RECOMMENDATION:
Requires manual review (low). Proposal: compute it from the founding year 2009 so the displayed text stays true (renders "17 + Years" today).

STATUS:
REQUIRES MANUAL REVIEW

### CONTENT-11

ISSUE:
UNCLEAR WORDING — spelling of package items after storing each package once (added in Step 7)

VALUE
In Step 7 each package group was stored once in `src/data/packages.ts` (previously the same package was typed separately on the pricelist, the homepage and the treatment page). The same package item was spelled differently on different pages:
- "1,5 Hr" (pricelist) vs "1.5 Hr" (treatment pages) → stored as **1.5 Hr**
- "Cream bath" (homepage, pricelist Mani Pedi A) vs "Cream Bath" (everywhere else) → stored as **Cream Bath**
- "Medi Pedi" (`/seminyak/balinese-massage/` only) vs "Mani & Pedi" (homepage, pricelist, mani-pedi page) → stored as **Mani & Pedi**
- "Balinese Massage 2 Pax" (couple page) vs "Balinese Massage" + "2 pax" price label → stored as treatment name + `pax: 2`

Prices were NOT normalised. The only package price difference (Hot Stone B, PRICE-02) is kept per page with `priceOverrides`.
Treatment names, descriptions and price-list labels are stored exactly as each page wrote them (`pricelist*`, `homeService*`, `home*` fields in `src/data/pricelist.ts`).

RECOMMENDATION:
Requires manual review (low). If the owner wants each page's exact spelling back, add a per-page override. Otherwise approve the majority spelling.

UPDATE (2026-09-26): the Pricelist page (/seminyak/) must match the live page exactly, so it now has that per-page override: `pricelistDuration` / `pricelistTreatment` on the package items in `src/data/packages.ts` ("1,5 Hr" for Body Scrub B, Hot Stone A and D; "Cream bath" for Mani Pedi A). The other pages still use the stored spelling.

STATUS:
REQUIRES MANUAL REVIEW

---

## Images

### IMG-01

ISSUE:
MISSING IMAGE / PLACEHOLDER

PAGE A:
https://spabalimoon.com/privacy-policy/ (og:image and sitemap image)
VALUE
`/images/bg/page-title-bg.jpg`, a grey box with the text "1920 x 500"

RECOMMENDATION:
Requires manual review. It will not be migrated (placeholder). The page will use the site's default share image instead.

STATUS:
REQUIRES MANUAL REVIEW

### IMG-02

ISSUE:
IMAGE QUALITY — low resolution for a modern layout

VALUE
Homepage hero photos `homepage-1.webp` 388×561 and `homepage-2.webp` 337×452. Catalog photos `homepage-6…27.webp` 233×306. The only high-resolution photos are the 1920px page heroes (`*-1.webp`, `homepage-5`, `homepage-28`, `pricelist-*`, `outcall-5`, `contact-1`) and the 630×580 treatment cards.

Note (Step 7): the old homepage catalog data referenced `homepage-6…27.webp`, but at render time the old site replaced them with the 630×580 `listmenu` cards. So those low-resolution files were never actually shown. They are migrated (in `public/images/home/shared/`) but not used by the data.

RECOMMENDATION:
Requires manual review. Higher-resolution originals from the owner would help. Otherwise the redesign will use these images only at their native size or smaller, and never upscale or stretch them.

STATUS:
REQUIRES MANUAL REVIEW

### IMG-03

ISSUE:
IMAGE ORIGINALITY cannot be verified

VALUE
Many photos show therapists in branded black uniforms (clearly the spa's own shoot or commissioned imagery). Several homepage/blog photos have a generic stock-like look. This audit cannot verify licences.

RECOMMENDATION:
Requires manual review (low). All images come from spabalimoon.com, as instructed. The owner should confirm the licence for any photo that was bought as stock.

STATUS:
REQUIRES MANUAL REVIEW

### IMG-04

ISSUE:
INFO — filename hygiene

VALUE
`/images/listmenu/lymphaticmassage%20.webp` has a trailing space in its filename. 21 byte-identical duplicate pairs exist (e.g. `listmenu/x.webp` = `services/x/x-3.webp`). 29 `-sm` files are plain 828px downscales.

RECOMMENDATION:
Handled in `image-inventory.md`: rename without the space, migrate duplicates once, and let next/image replace the `-sm` files. No content change.

STATUS:
INFO — no decision needed

---

## Step 10–17 build notes

### BUILD-01

ISSUE:
INFO — new UI microcopy (not business content)

VALUE
Short interface labels were added where the redesign needs them: board column headers "Treatment / Option / Price", "Show all" / "Show less", "Book" buttons, 404 page text ("Page not found", "This page may have moved. Our treatments, prices and booking are one tap away."), and the contact helper line. They make no claims about prices, reviews or services.

RECOMMENDATION:
Owner can review and reword freely. They live in the components, not in `src/data`.

STATUS:
REQUIRES MANUAL REVIEW

### BUILD-02

ISSUE:
INFO — homepage sections from the brief that were not built

VALUE
The brief lists "In-Spa vs Home Service" and "Gallery" sections for the homepage. The old site has no copy or gallery set for these, so they were **not** built (no invented text).

RECOMMENDATION:
If the owner supplies copy / picks photos, they can be added as sections in `src/app/page.tsx`.

STATUS:
REQUIRES MANUAL REVIEW

### BUILD-03

ISSUE:
INFO — board shows per-page descriptions

VALUE
The treatment board (pricelist and treatment pages) now shows each item's description / details under its name, taken from the page it appears on (`src/lib/board.ts`). No text was merged across pages.

STATUS:
INFO — no decision needed

### BUILD-04

ISSUE:
INFO — share picture for pages without a photo (Step 18)

VALUE
On the old site, `og:image` was missing on some pages. Now every page has one. Pages with no photo of their own (reservation, privacy policy, terms, wellness in Bali) use the pricelist hero photo (`/images/gallery/pricelist/pricelist-1.webp`), set in `src/lib/seo.ts` → `defaultShareImage`.

RECOMMENDATION:
Owner may choose another existing photo, or supply a dedicated 1200×630 share image.

STATUS:
REQUIRES MANUAL REVIEW


### BUILD-05

ISSUE:
INFO — Google Maps embed restored on /contact/ (2026-09-24)

VALUE
The old /contact/ page had a Google Maps embed ("Map showing Spa Bali Moon in Seminyak, Bali") that was missed in the first migration pass. It is now back, beside the "Find Us" card, with the exact same embed URL and title (stored in `src/data/pages/contact.ts` → `findUs.map`). It loads lazily and only when the visitor scrolls near it.

STATUS:
INFO — no decision needed
