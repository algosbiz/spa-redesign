# How we write spabalimoon.com

The site's voice and content approach from November 2026. It was first used on the Lymphatic Drainage Massage page, and the other pages move to it as they are rewritten.

## Why the October approach is retired

In October, every page was written for answer engines in the same way:

- **Keyword headings:** question or keyword-string headings, such as "Why Guests Book a Lymphatic Massage in Seminyak".
- **Brand and place in every sentence,** such as "Lymphatic drainage massage at Spa Bali Moon in Seminyak is…"
- **Long FAQ lists** that repeated the page.

People read this as spam (owner, 8 Nov 2026), and it no longer helps in AI search either:

- **What gets quoted:** Google's AI Overviews and AI Mode, ChatGPT and Perplexity pick passages that answer a question with specific facts, from pages that show first-hand knowledge.
- **Where they find the brand and place:** they read them from the page as a whole (the title, the opening, the address and the structured data). Repeating them in each sentence adds nothing.
- **Templated pages:** 25 pages with the same headings look templated, which counts against them.

## The approach

1. **Open every section with a fact.** Make its first sentence able to stand alone as an answer: what happens, how long it takes, what it costs, what is used, and who it suits. AI search quotes this sentence, and a guest skimming reads it.
2. **Write what only we can say:**
   - our order of work and our tools;
   - what the therapist asks first;
   - our prices;
   - how home service works and how long it takes to reach you.

   General background (what the lymphatic system is, the history, the general benefits) belongs in the guide articles. Link to the guide once.
3. **Name the brand and the place once.** They go in the title, the H1, the meta description, the opening paragraph, the address block and the structured data. In the body, write "we", "our spa" or "here", with at most one natural "in Seminyak" further down.
4. **Headings are signposts, not keyword strings.** Make them short, plain and specific to their section. Put the treatment name in about half the headings, where it reads naturally, and the place (Seminyak) in one. Never write a heading that is only a keyword string.
   - Use the small line above a heading only when it adds something. Never use it for a slogan.
5. **FAQs are real questions.** Write 6 to 10 questions guests actually ask on WhatsApp, each answered in 1 to 3 sentences, and don't repeat the page. They feed the FAQ structured data.
6. **No internal claims and no hype.**
   - Don't write "most booked", "our best", "experts", "world-class" or "luxury". Show it instead: how the therapists work and what they check.
   - The owner's notes are background for the writer, not copy for the page.
   - Make no medical promises. "Many guests find" and "can feel" are fine; "detox", "cures" and "boosts immunity" are not.
7. **Show that a real spa wrote it:**
   - real photos of our rooms and tools;
   - named techniques;
   - reviews that mention the treatment;
   - the same prices and hours everywhere: the site, the Google profile and WhatsApp.

## Voice

- **Calm, warm and direct,** written to one guest as "you".
- **Plain words and short sentences,** in British spelling (specialise, colour).
- **What the guest feels and what happens next,** in order.
- **Numbers as numerals:** 1 hour, IDR 300.000, 30–60 minutes. Prices come from `src/data/pricelist.ts` only.
- **Treatment names as the menu writes them** (Lymphatic Drainage Massage). Lower case in running text is fine ("a lymphatic massage").
- **Buttons in Title Case,** saying what happens: "Book on WhatsApp".

## Headings, before and after (Lymphatic Drainage Massage page)

| October (AEO) | Now |
|---|---|
| Why Guests Book a Lymphatic Massage in Seminyak | After a Flight, a Hike or a Hot Day |
| Your Lymphatic Massage, Step by Step | How a Lymphatic Massage Session Runs |
| Wood Therapy with Your Lymphatic Massage | Wood Therapy |
| (new: comparison table) | Lymphatic, Deep Tissue or Cellulite Massage? |
| When Not to Book a Lymphatic Drainage Massage | Before You Book |
| At Our Seminyak Spa or in Your Villa | At Our Seminyak Spa or in Your Villa |
| About Lymphatic Drainage Massage in Seminyak (FAQ) | Questions About Lymphatic Drainage Massage |

## Checklist for a new or rewritten page

- [ ] The title and H1 carry the treatment and Seminyak, once. Until the 18 Nov 2026 rankings check, existing titles and H1s stay as they are.
- [ ] The opening paragraph is 2–3 sentences that answer the visitor: what it is here, how long, how much, and where.
- [ ] Each section has one job and opens with a fact.
- [ ] The page links to its guide article for background, and the guide links back with "[treatment] in Seminyak".
- [ ] There are 10 FAQs or fewer, and none repeats the body.
- [ ] Nothing is claimed that the owner hasn't confirmed: training, tools, numbers.
- [ ] New English text comes with its Japanese, Korean, Chinese and Hindi translations in the same pull request. The Translations check lists what's missing.
- [ ] Roll a new style out on one page first, compare its rankings with the last baseline after 2–3 weeks, then extend it.
