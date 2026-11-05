# Plan: multi bahasa (November 2026)

Status: disusun 2 November 2026 dari `main` di commit `c189bd7`. Kode Fase 1–5
dikerjakan di branch `i18n/foundation` (lihat bagian 7). Pada 3 November 2026
owner memutuskan semua bahasa tetap di **satu domain, spabalimoon.com, dengan
folder per bahasa**, bukan domain per negara seperti rencana awal. Yang
tersisa adalah keputusan owner dan review terjemahan.

Tujuan: spabalimoon.com tersedia dalam bahasa Jepang, Korea, China, dan Hindi
(pasar India), masing-masing di folder sendiri: `/jp/`, `/kr/`, `/cn/`, `/in/`.
Situs English yang sekarang **tidak boleh berubah**: URL, title, canonical,
dan redirect tetap persis seperti sekarang.

## 1. Ringkasan

Satu codebase Next.js dan satu project Vercel melayani satu domain. Folder
pertama di alamat menentukan bahasa halaman; English tidak punya folder.

| Bahasa | Kode (hreflang) | Contoh alamat | Mesin pencari utama | Kanal chat untuk booking |
|---|---|---|---|---|
| English | `en` + `x-default` | spabalimoon.com/about/ (tetap) | Google | WhatsApp |
| Jepang | `ja` | spabalimoon.com/jp/about/ | Google (Yahoo! Japan memakai hasil Google) | LINE, WhatsApp |
| Korea | `ko` | spabalimoon.com/kr/about/ | Naver, Google | KakaoTalk, WhatsApp |
| China (aksara sederhana) | `zh-Hans` | spabalimoon.com/cn/about/ | Baidu (Google diblokir di China daratan) | WeChat (WhatsApp diblokir di China daratan) |
| India | `hi` (keputusan 1) | spabalimoon.com/in/about/ | Google | WhatsApp |

- Slug tetap bahasa Inggris, hanya diawali folder bahasa:
  `spabalimoon.com/jp/seminyak/balinese-massage/`. Dengan begitu peta
  hreflang cukup "path yang sama dengan awalan bahasa lain".
- **Nama folder memakai kode negara** (`jp`, `kr`, `cn`, `in`; keputusan
  owner 5 November 2026), karena lebih dikenali pengunjung daripada kode
  bahasa (`/hi/` terbaca seperti sapaan). Kode bahasa (`ja`, `ko`, `zh`,
  `hi`) tetap dipakai di dalam aplikasi dan untuk mesin pencari: `hreflang`,
  `<html lang>`, file terjemahan, kolom bahasa artikel, dan
  `I18N_PREVIEW_LOCALES`. Alamat `/ja/…` dialihkan 301 ke `/jp/…`.
- Satu domain berarti semua bahasa mewarisi otoritas spabalimoon.com di
  Google, tidak ada domain negara yang perlu didaftarkan, dan cukup satu
  property Search Console. Rencana awal (spabalimoon.jp, .kr, .cn, .in)
  dibatalkan 3 November 2026.

## 2. Keputusan yang perlu diambil sebelum coding

1. **India: Hindi atau English untuk India?** *(Diputuskan 3 November 2026:
   Hindi.)* Wisatawan India umumnya mencari
   info perjalanan dalam bahasa Inggris. Cek dulu volume keyword Hindi vs
   Inggris di Ahrefs (negara IN). Kalau volume Hindi kecil, versi India lebih
   berguna sebagai `en-IN`: English yang disesuaikan untuk tamu India
   (perkiraan harga INR, testimoni tamu India, paket honeymoon). Konten itu
   harus cukup berbeda dari halaman English supaya tidak dianggap duplikat.
2. **China: aksara sederhana (`zh-Hans`)** untuk wisatawan China daratan.
   Aksara tradisional (Taiwan, Hong Kong) tidak termasuk plan ini.
3. **Syarat domain negara.** *(Tidak berlaku lagi sejak 3 November 2026:
   semua bahasa di spabalimoon.com.)* Untuk China tetap berlaku: situs **tidak
   bisa di-host di China daratan** tanpa izin ICP. Dari server luar
   (Vercel/Cloudflare) situs tetap bisa dibuka di China, tapi bisa lambat, dan
   kanal utamanya tetap WeChat dan Xiaohongshu.
4. **Kanal chat per negara.** Apakah owner mau membuka akun LINE Official
   Account, KakaoTalk Channel, dan WeChat? Siapa yang membalas chat dalam
   bahasa itu? Minimal untuk China harus ada WeChat. Kalau owner belum siap
   untuk Jepang dan Korea, tombol tetap WhatsApp dengan pesan otomatis dalam
   bahasa tamu.
5. **Penerjemahan:** draf dibuat AI (Claude) dengan glosarium, lalu dicek
   penutur asli per bahasa. Minimal halaman inti dan glosarium harus dicek.
   Perlu anggaran untuk reviewer.
6. **Urutan peluncuran.** Rekomendasi: Jepang → Korea → China → India.
   Jepang dijadikan pilot karena pasarnya bergantung pada Google (alur
   Search Console sama dengan English), wisatawannya sangat memilih situs
   berbahasa Jepang, dan kanal chatnya jelas (LINE). China ditaruh setelah
   arsitektur terbukti karena infrastruktur dan kanalnya paling rumit.

## 3. Arsitektur

### 3.1 Routing

Sekarang semua halaman ada di `src/app/(site)/` di bawah satu root layout
`src/app/layout.tsx`. Rencananya:

```
src/app/
├── [lang]/
│   ├── layout.tsx          root layout situs: <html lang>, font per bahasa, metadata dasar
│   ├── not-found.tsx
│   └── (site)/...          semua halaman yang sekarang di src/app/(site)/
├── admin/layout.tsx        jadi root layout sendiri (admin tidak multi bahasa)
├── api/...                 tetap
├── sitemap.xml/route.ts    satu sitemap: semua bahasa aktif + xhtml:link alternate
└── robots.txt              tetap file statis
```

- `generateStaticParams` di `[lang]/layout.tsx` hanya mengembalikan bahasa
  yang sudah aktif. Halaman statis menjadi sekitar 42 × jumlah bahasa.
- Komponen server membaca bahasa aktif lewat `lang()` dari
  `next/root-params` (fitur Next 16, lihat
  `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/next-root-params.md`),
  jadi `lang` tidak perlu dioper ke tiap komponen. Ada 35 client component
  yang tidak bisa memakai fungsi ini. Teksnya dikirim lewat props dari
  komponen server di atasnya.
- `src/proxy.ts` membaca folder pertama di alamat. Alamat tanpa folder bahasa
  dilayani dari `/en/...` lewat *rewrite* internal, jadi URL English tidak
  berubah, dan `/jp/...` dilayani dari `/ja/...` kalau bahasa itu aktif
  (atau sedang preview) dan halamannya sudah diterjemahkan; selain itu 404.
  Jalur internal (`/en/...`, `/ja/...`) di-redirect 301 ke alamat yang
  terlihat. Peta redirect dari admin
  (R2) hanya dicek untuk alamat English.
- Bahasa yang sedang diterjemahkan bisa dibuka di localhost dan preview Vercel
  lewat `I18N_PREVIEW_LOCALES=ja` (`localhost:3009/jp/`), tidak di produksi.
- `next.config.ts`: aturan `www` → apex dan redirect URL lama WordPress
  (`liveRedirects`) tetap seperti sekarang.
- `trailingSlash: true` dipertahankan.

### 3.2 URL

- `src/i18n/config.ts`: daftar bahasa, bahasa default, kode hreflang, kode
  `og:locale` (`ja_JP`, `ko_KR`, `zh_CN`, `hi_IN`), dan `localePath(path,
  lang)` yang menambahkan folder bahasa (`/about/` → `/jp/about/`).
- `absoluteUrl(path, lang)` di `src/lib/seo.ts` memakai `business.url` untuk
  semua bahasa. File (gambar) tidak punya bahasa, jadi alamatnya sama di
  semua halaman.

### 3.3 Teks dan konten: lima lapisan

| Lapisan | Sekarang | Rencana |
|---|---|---|
| Teks UI (menu, tombol, footer, form, 404) | tertulis langsung di 85 file komponen | `src/i18n/dictionaries/{en,ja,ko,zh,hi}.json`. Komponen server membaca lewat `getDictionary()`, client component lewat props. |
| Data (nama treatment, paket, navigasi, testimoni, label jam buka) | `src/data/*.ts` | Angka dan harga tetap satu sumber. Teksnya dipisah ke terjemahan per bahasa dengan kunci id, sehingga perubahan harga otomatis berlaku di semua bahasa. |
| Halaman biasa (about, contact, reservation, outcall, villa, kuta, privacy, terms) | teks English langsung di JSX `src/content/pages/*.tsx` | Teks diekstrak ke `src/content/pages/<bahasa>/<halaman>.ts` dengan struktur yang sama. Komponen membaca sesuai bahasa. |
| 25 halaman treatment | pohon elemen JSON `src/content/treatments/*.json` (sekitar 25.000 kata) + SEO di `src/data/treatments/*.ts` | `src/content/treatments/<bahasa>/<slug>.json` dibuat skrip yang hanya menerjemahkan prop teks (`text`, `title`, `label`, `question`, `answer`, ...). Struktur, gambar, dan `className` tidak disentuh. |
| Guide/blog | tabel `posts` di Neon, satu bahasa | Tambah kolom `locale` dan `translation_of` (id artikel English), unique `(locale, slug)`. Editor admin mendapat pilihan bahasa dan tombol "buat terjemahan". Tabel `page_content` (edit treatment di admin) dikunci per `(locale, path)`. |

Selain itu:

- **Schema JSON-LD** (`src/lib/schema.ts`): ditambah `inLanguage`, deskripsi
  dan FAQ per bahasa. `@id` spa tetap `https://spabalimoon.com/#spa` di
  semua bahasa supaya Google melihat satu bisnis yang sama.
- **Pesan WhatsApp otomatis** (`src/lib/whatsapp.ts`) per bahasa, ditambah
  penanda bahasa (misalnya "(Website: JP)") agar staf tahu bahasa tamunya.
- **Glosarium per bahasa:** "Spa Bali Moon" tidak diterjemahkan. Nama
  layanan dan nama tempat juga tidak diterjemahkan, karena itu brand
  (keputusan owner 3 November 2026): tetap huruf Latin seperti di English,
  misalnya "SeminyakのBalinese Massage". Kata umum seperti pijat atau spa
  tetap diterjemahkan. Alamat tetap huruf Latin. Harga tetap ditulis
  "IDR 159.000". Perkiraan dalam JPY/KRW/CNY/INR bisa ditambahkan di fase
  belakangan.
- **Penanda terjemahan basi:** setiap terjemahan menyimpan hash teks English
  sumbernya. Perintah `npm run i18n:check` mendaftar terjemahan yang
  sumbernya sudah berubah. Ini penting karena teks dan harga situs ini sering
  diperbarui (copy rewrite 15 Okt, AEO 17 Okt, harga 1 Nov).

### 3.4 Halaman yang belum diterjemahkan

Halaman yang belum diterjemahkan tidak tersedia di folder bahasa itu (404).
Halaman itu tidak masuk sitemap atau hreflang bahasa tersebut, dan link
menunya mengarah ke versi English (alamat tanpa awalan). Konten English tidak
boleh tampil di bawah `/jp/`, `/kr/`, `/cn/`, atau `/in/` karena menjadi
duplikat dan membingungkan tamu.

### 3.5 SEO per bahasa

- **hreflang dua arah** di setiap halaman lewat `alternates.languages` di
  `buildMetadata`, hanya untuk bahasa yang halamannya ada. `en` dan
  `x-default` mengarah ke halaman English.
- **Canonical** setiap halaman mengarah ke dirinya sendiri, dengan awalan
  bahasanya (`https://spabalimoon.com/jp/about/`).
- **Satu sitemap.xml** berisi semua bahasa aktif, dengan `xhtml:link`
  alternate. **robots.txt** tetap file statis yang sama.
- **Title dan meta description** ditulis untuk keyword lokal, bukan
  terjemahan harfiah. Riset keyword per negara lewat Ahrefs (JP, KR, IN).
  Untuk China dipakai data Baidu.
- **Search Console** cukup property spabalimoon.com yang sudah ada; laporan
  per bahasa difilter per folder. Daftarkan juga spabalimoon.com ke Naver
  Search Advisor (Korea), Baidu Ziyuan (China), dan Bing Webmaster Tools.
- Folder bahasa mewarisi otoritas spabalimoon.com, jadi biasanya lebih cepat
  terindeks daripada domain baru. Backlink lokal (blog wisata, Naver Blog,
  Xiaohongshu, direktori wisata) tetap membantu.

### 3.6 Font dan tipografi

- Fraunces dan Plus Jakarta Sans (`src/app/fonts.ts`) hanya memuat huruf
  Latin. Untuk ja/ko/zh/hi dipakai **font bawaan sistem**: Hiragino/Yu
  Gothic, Apple SD Gothic Neo/Malgun Gothic, PingFang SC/Microsoft YaHei,
  dan Kohinoor/Noto Sans Devanagari. Tidak ada file tambahan yang diunduh,
  jadi hasil kerja PageSpeed di commit `797265c` tidak hilang. Webfont CJK
  berukuran besar. Kalau owner ingin judul tetap serif, Noto Serif JP/KR/SC
  bisa dipakai lewat `next/font` untuk judul saja, setelah dampaknya diukur.
- Atribut `lang` yang benar wajib ada. Tanpanya, karakter Han bisa tampil
  dengan bentuk China di halaman Jepang, atau sebaliknya.
- CSS per bahasa: `:lang(ko) { word-break: keep-all }`,
  `:lang(ja) { line-break: strict }`, huruf kapital dan letter-spacing pada
  kicker tidak berlaku di CJK, dan line-height Devanagari lebih tinggi.
- Cek tampilan per bahasa: teks Hindi lebih panjang dan teks CJK lebih
  pendek dari English. Hero, tombol, menu, dan kartu harga tidak boleh pecah.

### 3.7 Booking dan operasional

- `src/lib/whatsapp.ts` diganti `src/lib/booking.ts`, yang memilih kanal per
  bahasa: ja → LINE (+ WhatsApp), ko → KakaoTalk (+ WhatsApp), zh → WeChat
  (QR + ID), hi/en-IN → WhatsApp. Tombol WhatsApp mengambang dan
  `MobileActionBar` ikut berganti.
- Staf perlu template balasan per bahasa atau alat terjemahan. Tanpa itu,
  situs berbahasa lokal hanya menghasilkan chat yang tidak terjawab dengan
  baik.
- Email sambutan newsletter (SendGrid) per bahasa bisa ditunda.

### 3.8 Infrastruktur

- **Vercel dan Cloudflare:** tidak ada domain atau zone baru. Satu build
  melayani semua bahasa, dan purge Cloudflare tetap satu zone.
- **Admin** hanya di `/admin/` dan tidak multi bahasa.
- **Gambar** tetap dari `/images/` dan `images.spabalimoon.com`, dipakai
  bersama oleh semua bahasa.

## 4. Fase kerja

Perkiraan waktu di bawah hanya untuk kerja teknis dan masih kasar. Waktu
review penerjemah tidak termasuk.

**Fase 0: Persiapan (owner, berjalan paralel, 1–2 minggu)**
Ambil keputusan di bagian 2, buka akun LINE/Kakao/WeChat, cari reviewer
penutur asli, dan riset keyword per negara.

**Fase 1: Fondasi i18n, English tetap identik (4–6 hari)**
Buat `src/i18n/config.ts`, pindahkan rute ke `[lang]`, tambahkan awalan
bahasa di proxy, helper URL, hreflang di `buildMetadata`, sitemap dengan
alternate, serta font per bahasa. Pemilih bahasa di header dipindah ke Fase 3:
selama situs hanya berbahasa Inggris, pemilih itu tidak punya isi dan tidak
bisa diuji.
*Syarat lolos:* `tools/compare-pages.mjs` terhadap produksi menunjukkan
42/42 status dan title sama, canonical English tidak berubah, serta build,
typecheck, dan lint bersih. Fase ini bisa di-deploy sebelum bahasa lain aktif.

**Fase 2: Ekstraksi teks (4–6 hari)**
Pindahkan teks dari komponen, `src/content/pages/`, dan `src/data/` ke
kamus dan file per bahasa. Isi English-nya sama persis dengan sekarang.
Buat skrip terjemahan pohon JSON treatment dan `npm run i18n:check`.
*Syarat lolos:* English tetap identik, seperti di Fase 1.

**Fase 3: Pilot bahasa pertama (rekomendasi: Jepang, sekitar 1 minggu + review)**
Kerjakan halaman inti dulu: beranda, price list, 8–10 treatment terlaris,
contact, reservation, outcall, dan villa. Setelah itu sisa treatment dan
halaman lain. Tambahkan pemilih bahasa di header, aktifkan bahasanya, lalu
kirim ulang sitemap di Search Console.

**Fase 4: Korea, China, India (masing-masing 3–5 hari + review)**
Polanya sama dengan Fase 3. China ditambah WeChat dan pendaftaran ke Baidu.
Korea ditambah KakaoTalk dan Naver Search Advisor.

**Fase 5: Guide/blog multi bahasa dan admin (3–5 hari)**
Migrasi DB (`locale`, `translation_of`), editor dengan pilihan bahasa,
`page_content` per bahasa, dan parameter bahasa di `/api/search-posts/`.
Artikel diterjemahkan selektif per pasar berdasarkan keyword, tidak semuanya.

**Fase 6: SEO lokal berkelanjutan**
Artikel khusus tiap pasar, backlink lokal, Naver Blog, Xiaohongshu, dan
pemantauan Search Console per folder bahasa.

## 5. Risiko

| Risiko | Mitigasi |
|---|---|
| SEO English yang sudah dibangun rusak (URL dan title sekarang identik dengan live) | English diuji di setiap fase dengan `tools/compare-pages.mjs`. Fondasi di-deploy dulu sebelum bahasa lain aktif. |
| Terjemahan mesin tanpa review terasa murahan bagi tamu Jepang atau Korea | Review penutur asli minimal untuk halaman inti dan glosarium. |
| Terjemahan basi: harga atau teks berubah di English tapi tidak di bahasa lain | Harga dari satu sumber data, plus `npm run i18n:check` berbasis hash. |
| China: tanpa ICP, akses bisa lambat, WhatsApp diblokir | WeChat sebagai kanal utama, ekspektasi trafik organik rendah. |
| PageSpeed turun karena font CJK | Pakai font sistem. Webfont hanya untuk judul, setelah diukur. |
| Admin makin rumit (posts dan page_content per bahasa) | Dikerjakan terakhir (Fase 5), setelah halaman statis stabil. |

## 6. Di luar cakupan

- Bahasa Indonesia, China aksara tradisional, bahasa lain.
- Konversi mata uang otomatis (kurs live).
- Menerjemahkan antarmuka admin.
- Draf beranda lama `home-v2`, `home-v3`, `home-v4`.

## 7. Yang sudah dikerjakan di kode (2 November 2026, branch `i18n/foundation`)

Semua bahasa selain English sudah disiapkan tapi **belum aktif**:
`activeLocales` di `src/i18n/config.ts` baru berisi `"en"`. Selama itu situs
English dibuat persis seperti sebelumnya.

### Perubahan dari rencana awal

- **Terjemahan memakai translation memory, bukan salinan file per bahasa**
  (menggantikan bagian 3.3). Semua file English tetap menjadi satu-satunya
  sumber konten. Setiap bahasa punya satu daftar terjemahan yang kuncinya teks
  English itu sendiri: `src/i18n/messages/<bahasa>/ui.json` (teks yang
  ditampilkan komponen client, ikut terkirim ke browser) dan `content.json`
  (sisanya, hanya di server). Saat halaman dibuat dalam bahasa lain, semua
  teks dicari dan diganti; struktur, harga, foto, dan link tidak pernah
  disalin. Kalau kalimat English berubah, terjemahannya otomatis tercatat
  sebagai "belum diterjemahkan". Cara kerjanya dijelaskan di
  `src/i18n/translate.ts`.
- **Halaman treatment yang diedit di admin tetap satu versi (English).**
  Bahasa lain menampilkan versi itu yang sudah diterjemahkan, jadi
  `page_content` tidak perlu per bahasa.
- **Artikel guide adalah satu-satunya konten yang ditulis per bahasa.** Editor
  admin punya pilihan Language dan Translation of. Terjemahan memakai slug
  artikel English-nya, jadi alamatnya sama dengan awalan bahasanya
  (`/jp/guide/…/`) dan hreflang saling menunjuk.
- **Satu domain dengan folder per bahasa** (keputusan owner 3 November 2026,
  menggantikan domain per negara). Kode dan terjemahan dari 2–3 November
  dipakai apa adanya; yang berubah hanya cara alamat dipetakan:
  - `/about/` tetap English; `/jp/about/` dan seterusnya untuk bahasa lain.
  - Link di halaman bahasa lain ke halaman yang sudah diterjemahkan otomatis
    diberi awalan (`/about/` → `/jp/about/`, `linkFor` di
    `src/i18n/config.ts`). Link ke halaman yang belum diterjemahkan tetap ke
    versi English.
  - Pemilih bahasa menunjuk halaman yang sama di folder bahasa lain.
  - Satu sitemap untuk semua bahasa, robots.txt kembali file statis, purge
    Cloudflare kembali satu zone, dan aturan domain lain di `next.config.ts`
    dihapus.

### Daftar perubahan

| Area | Perubahan |
|---|---|
| Rute | Semua halaman di `src/app/[lang]/`. Admin punya root layout sendiri. Alamat yang tidak cocok dengan rute apa pun dijawab `src/app/global-not-found.tsx`. |
| Alamat → bahasa | `src/proxy.ts`: folder pertama di alamat (`/jp/…`, dilayani dari rute `/ja/…`); tanpa folder berarti English. Halaman yang belum diterjemahkan dijawab 404. Bahasa yang belum aktif bisa dibuka di localhost/preview lewat `I18N_PREVIEW_LOCALES`. |
| Penerjemah | `src/i18n/server.ts` (`getI18n`, `render`) dan `src/i18n/client.tsx` (`useI18n`, `el`). Setiap halaman dan layout `(site)` lewat `render()`, setiap komponen client yang punya teks lewat `el()`. |
| SEO | `pageMetadata` (title/description diterjemahkan, canonical dengan awalan bahasa, `og:locale`), hreflang dua arah dan `og:locale:alternate`, satu sitemap untuk semua bahasa, JSON-LD dengan alamat dan `inLanguage` bahasa halaman (`src/components/seo/JsonLd.tsx`), dan `noindex` untuk bahasa yang masih preview. |
| Tampilan | Font sistem per bahasa dan aturan pemenggalan baris (`src/styles/i18n.css`), tanggal per bahasa (`src/i18n/format.ts`), pemilih bahasa berupa dropdown bendera (di navbar mulai 1200px, di baris atas menu ponsel di bawahnya; bendera di `public/images/flags/`, English memakai bendera UK). Di production hanya muncul kalau halaman ada di ≥ 2 bahasa aktif; di localhost dan preview, bahasa yang sedang preview ikut tampil. |
| Booking | `src/data/booking.ts`: LINE/KakaoTalk/WeChat per bahasa, WhatsApp selama belum diisi. Pesan WhatsApp otomatis diterjemahkan dan diberi kode bahasa (`[JA]`). |
| Blog | Kolom `locale` dan `translation_of` dibuat otomatis saat pertama dipakai. Semua query per bahasa, plus pencarian, menu blog, dan sitemap. |
| Cache | Purge Cloudflare tetap satu zone. `revalidatePath` memakai alamat `/[lang]/…`. |
| Alat | `npm run i18n:missing -- ja` mengumpulkan teks yang belum diterjemahkan; `npm run i18n:status` menampilkan jumlahnya. |

### Langkah menyalakan satu bahasa (contoh: Jepang)

1. Isi `.env.local`: `I18N_PREVIEW_LOCALES=ja` dan
   `I18N_MISSING_FILE=.i18n-missing.jsonl`, lalu `npm run dev`.
2. Jalankan `npm run i18n:missing -- ja`. Semua teks yang belum diterjemahkan
   masuk ke `src/i18n/messages/ja/*.json` dengan nilai kosong.
3. Isi terjemahannya (draf AI, lalu dicek penutur asli). Buka
   `http://localhost:3009/jp/…` untuk mengecek tampilannya, lalu ulangi
   langkah 2 sampai tidak ada yang tersisa.
4. Daftarkan path halaman yang sudah diterjemahkan di `translatedPaths`
   (`src/i18n/config.ts`), lalu tambahkan `"ja"` ke `activeLocales`.
5. Isi akun LINE di `src/data/booking.ts` kalau sudah ada, deploy, lalu
   kirim ulang sitemap di Search Console.

### Status bahasa Jepang (2 November 2026)

- **Draf AI untuk 17 halaman inti sudah lengkap**, sekitar 3.000 teks: beranda,
  `/seminyak/`, About, Contact, Reservation, Outcall, Villa & Hotel, serta 10
  treatment (Balinese, Couple, Body Scrub, Cream Bath, Hot Stone, Foot
  Reflexology, Facial, Deep Tissue, Warm Candle, Traditional). Header, menu,
  dan footer ikut diterjemahkan. Ke-17 halaman ini sudah terdaftar di
  `translatedPaths.ja`.
- Hasil pengecekan di preview `/jp/`: `npm run i18n:missing` menemukan 0 teks
  yang tersisa. Tombol durasi, total paket, dan item menu harga sama jumlahnya
  dengan versi English. Judul Jepang dipenggal per frasa (`auto-phrase`), dan
  judul banner di ponsel dikecilkan supaya kata katakana panjang tidak
  terpotong.
- Istilah utama: home service → 出張サービス/出張マッサージ,
  harga tetap "IDR …", jam buka 9:00〜23:00. Daftar lengkapnya ada di glosarium
  yang dipakai penerjemah.

Sebelum bahasa Jepang dinyalakan:

1. Review penutur asli, terutama judul halaman (title/description), nama
   treatment, dan potongan kalimat yang diselingi harga atau link.
2. **Ringankan `ui.json`.** File ini sekitar 200 KB dan ikut terkirim di setiap
   halaman Jepang (HTML Jepang sekitar 220 KB lebih besar dari English,
   sebelum dikompresi). Komponen client seperti FAQ beranda, testimoni, dan
   menu harga sebaiknya menerima teksnya dari server lewat props, supaya
   `ui.json` hanya berisi teks antarmuka.
3. Terjemahkan halaman sisanya: 15 treatment lain, Kuta, Privacy, Terms, dan
   `/guide/`, lalu pilih artikel guide yang diterjemahkan lewat admin.
4. Dari konten English: paket yang sama tertulis IDR 375.000 di satu tempat dan
   IDR 379.000 di tempat lain (temuan penerjemah). Perlu dicek owner.

### Status Korea dan China (3 November 2026)

- **Draf AI untuk 17 halaman inti yang sama sudah lengkap**, masing-masing 2.347
  teks. Glosarium Korea memakai home service → 출장 마사지/출장 서비스.
  Glosarium China (aksara sederhana) memakai home service → 上门按摩/上门服务.
- Hasil pengecekan di preview `/kr/` dan `/cn/`: 0 teks tersisa. Tombol durasi,
  total paket, menu harga, dan FAQ sama jumlahnya dengan versi English, dan
  `<html lang>` bernilai `ko` / `zh-Hans`.
- Perbaikan yang muncul saat pengecekan, berlaku untuk semua bahasa:
  - Potongan kalimat berhuruf kecil yang diakhiri titik ("also available for
    hotels and villas in nearby areas.") tadinya dianggap kode dan tidak
    diterjemahkan.
  - Di Jepang dan China, spasi English di sekitar link kini dibuang
    (`wordSpaces` di `src/i18n/config.ts`).
- Untuk China, tombol booking masih mengarah ke WhatsApp, yang diblokir di China
  daratan. Perlu akun WeChat dan tampilan QR.
- Dari konten English (temuan penerjemah): halaman About menampilkan angka besar
  "23" treatment, padahal teksnya menyebut 25.

### Status semua halaman (3 November 2026)

- **Jepang, Korea, dan China kini punya draf untuk 35 dari 36 halaman**: 17
  halaman inti ditambah 18 halaman sisa, yaitu 15 treatment, Massage Kuta,
  Privacy Policy, dan Terms & Conditions. Setiap bahasa berisi 3.778 teks unik.
  `/guide/` dan artikelnya belum diterjemahkan. Artikel ditulis per bahasa
  lewat admin, dan sebelum ada artikel, halaman `/guide/` akan kosong.
- Hasil pengecekan di preview, untuk ketiga bahasa:
  - 0 teks tersisa di 35 halaman.
  - Struktur halaman sama dengan English, kecuali menu Blog.
  - Tidak ada link relatif ke halaman yang tidak tersedia dalam bahasa itu.
- Bahasa yang belum punya artikel tidak menampilkan menu Blog (desktop dan
  mobile).
- Link di dalam konten ke halaman yang belum tersedia dalam bahasa itu (artikel
  guide, `/guide/`) diarahkan ke versi English (`linkFor` di
  `src/i18n/config.ts`), supaya tidak ada yang 404.
- Titik atau koma yang berdiri sendiri setelah link diganti 。 / 、 / ，
  untuk Jepang dan China.
- Dari konten English (temuan penerjemah, perlu dicek owner):
  - Rentang harga paket Thai tertulis IDR 425.000–570.000 di satu tempat dan
    IDR 445.000–609.000 di tempat lain.
  - Sunburn treatment tertulis IDR 250.000 di satu tempat dan "1 Hour Aloe
    Vera · IDR 195.000" di tempat lain.

### Status Hindi (3 November 2026)

- **Owner memutuskan India memakai bahasa Hindi** (keputusan 1 di bagian 2),
  di `/in/`.
- **Draf AI untuk 35 halaman yang sama sudah lengkap**, berisi 3.781 teks.
  - Bahasanya Hindi modern sehari-hari dan menyapa pembaca dengan आप.
  - Istilah spa memakai serapan yang lazim di India (मसाज, स्पा, फेशियल,
    होम सर्विस), dan मसाज diperlakukan sebagai kata feminin.
  - Jam buka ditulis "सुबह 9 बजे से रात 11 बजे तक". Angka tetap 0–9.
- Hasil pengecekan di preview `/in/`:
  - 0 teks tersisa, tidak ada error, dan tidak ada link rusak.
  - Struktur halaman sama dengan English.
  - Aksara Devanagari tampil utuh di judul dan menu.
- Titik "." yang berdiri sendiri setelah link menjadi danda "।".
- Booking tetap lewat WhatsApp, yang memang dipakai luas di India.

### Nama layanan dan tempat tetap huruf Latin (3 November 2026)

- **Owner memutuskan nama layanan dan nama tempat tidak diterjemahkan**,
  karena itu brand. Di keempat bahasa, "バリニーズマッサージ", "스미냑",
  "水明漾", "सेमिन्याक" dan sejenisnya kini ditulis "Balinese Massage",
  "Seminyak", dan seterusnya, persis seperti di English.
- Yang tetap diterjemahkan: kata umum (pijat atau spa secara umum), teknik
  yang sedang dijelaskan, bahan (aloe vera, minyak kelapa), dan bagian
  tubuh.
- Daftar ringkas di English ("a Thai, Balinese or hot stone massage") ditulis
  dengan nama lengkap: "Thai Massage, Balinese Massage, Hot Stone Massage".
- Partikel Korea mengikuti bunyi nama Latinnya ("Foot Reflexology는",
  "Body Scrub은"). Di Jepang dan China, browser yang mendukung memberi jarak
  kecil antara huruf Latin dan aksara di sekitarnya (`text-autospace` di
  `src/styles/i18n.css`).
- Catatan SEO: wisatawan Jepang, Korea, dan China sering mencari dengan
  aksara mereka sendiri (misalnya "バリ島 スパ", "발리 마사지", "巴厘岛按摩").
  Kalau trafik organik bahasa itu nanti lemah, nama lokal bisa ditambahkan
  sekali di title atau meta description, tanpa mengganti nama Latin di
  halaman.

### Yang belum dikerjakan

- Artikel guide per bahasa (lewat admin, butuh database).
- Review penutur asli untuk Jepang, Korea, China, dan Hindi.
- Perampingan `ui.json` (poin 2 di atas) berlaku untuk semua bahasa.
- Keputusan di bagian 2: kanal chat per negara.
- Data terstruktur artikel guide per bahasa (`articleSchema`) masih memakai
  alamat English. Halaman lain sudah memakai folder bahasanya.
- Tampilan QR WeChat untuk China (menunggu akun).
- Pengecekan tampilan per bahasa (teks panjang Hindi, judul CJK) setelah
  terjemahan ada.
