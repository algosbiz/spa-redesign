# Translations

One folder per language: `ja` (Japanese, /jp/), `ko` (Korean, /kr/), `zh` (Chinese, /cn/), `hi` (Hindi, /in/).

- `ui.json`: the texts of Client Components. They are sent to the browser, so the phone menu, the language switcher and the pairing sliders read from here.
- `content.json`: everything else, read on the server only.

Each entry is keyed by the **exact English text**. A page in another language looks each English text up here and shows English when it finds no match.

## When the English changes

Any change to English text makes a new text: a new heading, a new alt text, a button changed from "See the full price list" to "See the Full Price List". Until the new text has translations, the other languages show it in English.

**The rule:** an update that changes English text adds the translations in the same update, in all four languages.

The **Translations** check (`.github/workflows/i18n.yml`) does this on every pull request into `main` or `staging`:

1. It builds the site in every language and lists each English text with no translation.
2. It translates them with Claude (`tools/i18n/translate.mjs`) and commits them to the pull request. This needs the `ANTHROPIC_API_KEY` repository secret.
3. It fails while any text is left untranslated.

Read the translation commit before merging. A native speaker should look over anything customers will read closely, such as page titles, prices and booking steps.

## How the site is translated (owner, 3 Nov 2026)

- **Kept in Latin letters, exactly as written:**
  - the brand, Spa Bali Moon;
  - every treatment, service, package and product name, e.g. Balinese Massage, Mani & Pedi, Biokos;
  - place names and addresses;
  - prices, e.g. IDR 159.000;
  - phone numbers and WhatsApp.
- **Page titles made only of names** get a joining word, so they read in the language: Japanese の, Korean 의, Chinese 的, Hindi में. For example, "Bali Seminyak의 Balinese Massage".
- **Translating a name breaks things:** the package savings ("Booked separately: IDR …") are worked out from the item names.

## Commands

```bash
npm run i18n:status                      # how many texts each language has, and how many are empty
npm run i18n:missing -- ja               # with `npm run dev` running: add what /jp/ pages still need
npm run i18n:translate                   # translate the empty ones (needs ANTHROPIC_API_KEY)
npm run i18n:translate -- --check        # list what is still empty
```

Mistakes found in the 8 Nov 2026 review: `migration/i18n-review-2026-11-08.md`.
