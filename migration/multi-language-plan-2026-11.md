# Plan: multi bahasa dan multi domain (November 2026)

Status: disusun 2 November 2026 dari `main` di commit `c189bd7`. Kode Fase 1–5
dikerjakan hari yang sama di branch `i18n/foundation` (lihat bagian 7). Yang
tersisa adalah keputusan owner, domain, dan isi terjemahan.

Tujuan: spabalimoon.com tersedia dalam bahasa Jepang, Korea, China, dan bahasa
untuk pasar India, masing-masing di domain negaranya sendiri. Situs English
yang sekarang **tidak boleh berubah**: URL, title, canonical, dan redirect
tetap persis seperti sekarang.

## 1. Ringkasan

Satu codebase Next.js dan satu project Vercel melayani lima domain. Domain
yang dibuka menentukan bahasa halaman.

| Bahasa | Kode (hreflang) | Domain usulan | Mesin pencari utama | Kanal chat untuk booking |
|---|---|---|---|---|
| English | `en` + `x-default` | spabalimoon.com (tetap) | Google | WhatsApp |
| Jepang | `ja` | spabalimoon.jp | Google (Yahoo! Japan memakai hasil Google) | LINE, WhatsApp |
| Korea | `ko` | spabalimoon.kr atau .co.kr | Naver, Google | KakaoTalk, WhatsApp |
| China (aksara sederhana) | `zh-Hans` | spabalimoon.cn | Baidu (Google diblokir di China daratan) | WeChat (WhatsApp diblokir di China daratan) |
| India | `hi` atau `en-IN` (lihat keputusan 1) | spabalimoon.in | Google | WhatsApp |

- Path URL sama di semua domain, slug tetap bahasa Inggris:
  `spabalimoon.jp/seminyak/balinese-massage/`. Dengan begitu peta hreflang
  antar-domain cukup "path yang sama di domain lain".
- Per 2 November 2026, kedelapan nama domain kandidat (`.jp`, `.co.jp`, `.kr`,
  `.co.kr`, `.cn`, `.com.cn`, `.in`, `.co.in`) belum ada di DNS. Kemungkinan
  besar belum terdaftar, tapi tetap harus dicek di registrar.

## 2. Keputusan yang perlu diambil sebelum coding

1. **India: Hindi atau English untuk India?** Wisatawan India umumnya mencari
   info perjalanan dalam bahasa Inggris. Cek dulu volume keyword Hindi vs
   Inggris di Ahrefs (negara IN). Kalau volume Hindi kecil, `.in` lebih
   berguna sebagai versi `en-IN`: English yang disesuaikan untuk tamu India
   (perkiraan harga INR, testimoni tamu India, paket honeymoon). Konten itu
   harus cukup berbeda dari .com supaya tidak dianggap duplikat.
2. **China: aksara sederhana (`zh-Hans`)** untuk wisatawan China daratan.
   Aksara tradisional (Taiwan, Hong Kong) tidak termasuk plan ini.
3. **Syarat domain negara:**
   - `.jp` dan `.kr`/`.co.kr` mewajibkan alamat lokal di negara itu. Pakai
     layanan *local presence* atau *trustee* dari registrar.
   - `.cn` mewajibkan verifikasi identitas pendaftar (*real-name
     verification*). Situs **tidak bisa di-host di China daratan** tanpa izin
     ICP, dan izin itu mensyaratkan badan usaha China. Dari server luar
     (Vercel/Cloudflare) situs tetap bisa dibuka di China, tapi bisa lambat
     dan Baidu cenderung kurang mengunggulkannya. Untuk pasar China, kanal
     utamanya tetap WeChat dan Xiaohongshu. Situs berperan sebagai pendukung.
   - `.in` terbuka untuk siapa saja.
   - Kalau salah satu domain tidak bisa didapat, bahasa itu bisa jalan dulu
     di subdomain (misalnya `ja.spabalimoon.com`). Arsitekturnya sama, yang
     berubah hanya satu baris di peta domain.
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
   Search Console sama dengan .com), wisatawannya sangat memilih situs
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
├── sitemap.xml/route.ts    membaca host → sitemap domain itu
└── robots.txt/route.ts     menggantikan file statis src/app/robots.txt
```

- `generateStaticParams` di `[lang]/layout.tsx` hanya mengembalikan bahasa
  yang sudah aktif. Halaman statis menjadi sekitar 42 × jumlah bahasa.
- Komponen server membaca bahasa aktif lewat `lang()` dari
  `next/root-params` (fitur Next 16, lihat
  `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/next-root-params.md`),
  jadi `lang` tidak perlu dioper ke tiap komponen. Ada 35 client component
  yang tidak bisa memakai fungsi ini. Teksnya dikirim lewat props dari
  komponen server di atasnya.
- `src/proxy.ts` mendapat tugas baru: memetakan host ke bahasa lalu
  me-*rewrite* secara internal. Permintaan `spabalimoon.jp/seminyak/x/`
  dilayani dari `/ja/seminyak/x/`, sedangkan `spabalimoon.com/...` dari
  `/en/...`. Prefix bahasa tidak pernah terlihat di URL. Peta redirect dari
  admin (R2) tetap dicek lebih dulu. Kalau seseorang membuka `/ja/...`
  langsung di domain produksi, dia di-redirect 301 ke domain yang benar.
- Di development dan preview Vercel (satu host), prefix boleh dipakai
  langsung: `localhost:3009/ja/`. Halaman preview diberi noindex.
- `next.config.ts`: aturan `www` → apex dipakai untuk semua domain, tidak
  hanya .com. Redirect URL lama WordPress (`liveRedirects`) tetap khusus .com.
- `trailingSlash: true` dipertahankan.

### 3.2 Domain dan URL

`business.url` dan string `spabalimoon.com` muncul sekitar 100 kali di
`src/`, ditambah URL lengkap di `src/data/sitemap.ts`. Semua diganti dengan
helper:

- `src/i18n/config.ts`: daftar bahasa, bahasa default, origin per bahasa
  (`en: "https://spabalimoon.com"`, `ja: "https://spabalimoon.jp"`, ...),
  kode hreflang, dan kode `og:locale` (`ja_JP`, `ko_KR`, `zh_CN`, `hi_IN`).
- `absoluteUrl(path, lang)` di `src/lib/seo.ts`.
- Entri `src/data/sitemap.ts` disimpan sebagai path. Origin ditambahkan
  sesuai domain.

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
  semua domain supaya Google melihat satu bisnis yang sama.
- **Pesan WhatsApp otomatis** (`src/lib/whatsapp.ts`) per bahasa, ditambah
  penanda bahasa (misalnya "(Website: JP)") agar staf tahu bahasa tamunya.
- **Glosarium per bahasa:** "Spa Bali Moon" tidak diterjemahkan. Nama
  treatment memakai bentuk lokal yang lazim (misalnya バリニーズマッサージ).
  Alamat tetap huruf Latin. Harga tetap ditulis "IDR 159.000". Perkiraan
  dalam JPY/KRW/CNY/INR bisa ditambahkan di fase belakangan.
- **Penanda terjemahan basi:** setiap terjemahan menyimpan hash teks English
  sumbernya. Perintah `npm run i18n:check` mendaftar terjemahan yang
  sumbernya sudah berubah. Ini penting karena teks dan harga situs ini sering
  diperbarui (copy rewrite 15 Okt, AEO 17 Okt, harga 1 Nov).

### 3.4 Halaman yang belum diterjemahkan

Halaman yang belum diterjemahkan tidak tersedia di domain bahasa itu (404).
Halaman itu tidak masuk sitemap atau hreflang domain tersebut, dan link
menunya mengarah ke versi English di .com. Konten English tidak boleh tampil
di domain .jp, .kr, .cn, atau .in karena menjadi duplikat dan membingungkan
tamu.

### 3.5 SEO per domain

- **hreflang dua arah** di setiap halaman lewat `alternates.languages` di
  `buildMetadata`, hanya untuk bahasa yang halamannya ada. `en` dan
  `x-default` mengarah ke .com.
- **Canonical** setiap halaman mengarah ke dirinya sendiri di domainnya.
- **sitemap.xml per host**: route-nya sudah dinamis, tinggal ditambah
  filter host dan `xhtml:link` alternate.
- **robots.txt** dijadikan route handler, dengan baris `Sitemap:` sesuai
  host.
- **Title dan meta description** ditulis untuk keyword lokal, bukan
  terjemahan harfiah. Riset keyword per negara lewat Ahrefs (JP, KR, IN).
  Untuk China dipakai data Baidu.
- **Daftarkan domain** ke Google Search Console (4 domain baru), Naver
  Search Advisor (.kr), Baidu Ziyuan (.cn), dan Bing Webmaster Tools.
- Domain baru mulai dengan otoritas nol. Trafik organik baru terasa beberapa
  bulan setelah peluncuran dan perlu backlink lokal (blog wisata, Naver Blog,
  Xiaohongshu, direktori wisata).

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

- **Vercel:** tambahkan 4 domain baru (+ `www`) ke project yang sama. Satu
  build melayani semuanya.
- **Cloudflare:** satu zone per domain, DNS proxied, SSL Full (strict),
  Bulk Redirect `www` → apex per domain. `.github/workflows/purge-cloudflare.yml`
  diubah agar me-*purge* semua zone (secret zone ID baru per domain).
- **Admin** hanya di `spabalimoon.com/admin/`. Di domain lain `/admin/`
  menghasilkan 404.
- **Gambar** tetap dari `/images/` dan `images.spabalimoon.com`, dipakai
  bersama oleh semua domain.

## 4. Fase kerja

Perkiraan waktu di bawah hanya untuk kerja teknis dan masih kasar. Waktu
review penerjemah tidak termasuk.

**Fase 0: Persiapan (owner, berjalan paralel, 1–2 minggu)**
Ambil keputusan di bagian 2, daftarkan domain (local presence .jp/.kr dan
verifikasi .cn butuh waktu), buka akun LINE/Kakao/WeChat, cari reviewer
penutur asli, dan riset keyword per negara.

**Fase 1: Fondasi i18n, English tetap identik (4–6 hari)**
Buat `src/i18n/config.ts`, pindahkan rute ke `[lang]`, tambahkan host →
bahasa di proxy, helper URL, hreflang di `buildMetadata`, sitemap dan robots
per host, serta font per bahasa. Pemilih bahasa di header dipindah ke Fase 3:
selama situs hanya berbahasa Inggris, pemilih itu tidak punya isi dan tidak
bisa diuji.
*Syarat lolos:* `tools/compare-pages.mjs` terhadap produksi menunjukkan
42/42 status dan title sama, canonical .com tidak berubah, serta build,
typecheck, dan lint bersih. Fase ini bisa di-deploy sebelum ada domain baru.

**Fase 2: Ekstraksi teks (4–6 hari)**
Pindahkan teks dari komponen, `src/content/pages/`, dan `src/data/` ke
kamus dan file per bahasa. Isi English-nya sama persis dengan sekarang.
Buat skrip terjemahan pohon JSON treatment dan `npm run i18n:check`.
*Syarat lolos:* English tetap identik, seperti di Fase 1.

**Fase 3: Pilot bahasa pertama (rekomendasi: Jepang, sekitar 1 minggu + review)**
Kerjakan halaman inti dulu: beranda, price list, 8–10 treatment terlaris,
contact, reservation, outcall, dan villa. Setelah itu sisa treatment dan
halaman lain. Tambahkan pemilih bahasa di header, aktifkan domain, daftarkan
ke Search Console, kirim sitemap.

**Fase 4: Korea, China, India (masing-masing 3–5 hari + review)**
Polanya sama dengan Fase 3. China ditambah WeChat dan pendaftaran ke Baidu.
Korea ditambah KakaoTalk dan Naver Search Advisor.

**Fase 5: Guide/blog multi bahasa dan admin (3–5 hari)**
Migrasi DB (`locale`, `translation_of`), editor dengan pilihan bahasa,
`page_content` per bahasa, dan parameter bahasa di `/api/search-posts/`.
Artikel diterjemahkan selektif per pasar berdasarkan keyword, tidak semuanya.

**Fase 6: SEO lokal berkelanjutan**
Artikel khusus tiap pasar, backlink lokal, Naver Blog, Xiaohongshu, dan
pemantauan Search Console per domain.

## 5. Risiko

| Risiko | Mitigasi |
|---|---|
| SEO English yang sudah dibangun rusak (URL dan title sekarang identik dengan live) | English diuji di setiap fase dengan `tools/compare-pages.mjs`. Fondasi di-deploy dulu tanpa domain baru. |
| Terjemahan mesin tanpa review terasa murahan bagi tamu Jepang atau Korea | Review penutur asli minimal untuk halaman inti dan glosarium. |
| Terjemahan basi: harga atau teks berubah di English tapi tidak di bahasa lain | Harga dari satu sumber data, plus `npm run i18n:check` berbasis hash. |
| China: tanpa ICP, akses bisa lambat, WhatsApp diblokir | WeChat sebagai kanal utama, ekspektasi trafik organik rendah. |
| Domain baru mulai dari otoritas nol (subfolder di .com akan mewarisi otoritas .com) | Backlink lokal per pasar. Kalau hasilnya lambat, bahasa bisa dipindah ke subfolder dengan mengganti peta origin. |
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
  artikel English-nya, jadi alamatnya sama di domain bahasanya dan hreflang
  saling menunjuk.

### Daftar perubahan

| Area | Perubahan |
|---|---|
| Rute | Semua halaman di `src/app/[lang]/`. Admin punya root layout sendiri. Alamat yang tidak cocok dengan rute apa pun dijawab `src/app/global-not-found.tsx`. |
| Domain → bahasa | `src/proxy.ts`. Halaman yang belum diterjemahkan dijawab 404 di domain bahasanya. Di localhost/preview, `/ja/…` membuka bahasa itu langsung (`I18N_PREVIEW_LOCALES`). |
| Penerjemah | `src/i18n/server.ts` (`getI18n`, `render`) dan `src/i18n/client.tsx` (`useI18n`, `el`). Setiap halaman dan layout `(site)` lewat `render()`, setiap komponen client yang punya teks lewat `el()`. |
| SEO | `pageMetadata` (title/description diterjemahkan, canonical di domain bahasa, `og:locale`), hreflang dua arah, sitemap dan robots per domain. |
| Tampilan | Font sistem per bahasa dan aturan pemenggalan baris (`src/styles/i18n.css`), tanggal per bahasa (`src/i18n/format.ts`), pemilih bahasa di header (hanya muncul kalau halaman ada di ≥ 2 bahasa aktif). |
| Booking | `src/data/booking.ts`: LINE/KakaoTalk/WeChat per bahasa, WhatsApp selama belum diisi. Pesan WhatsApp otomatis diterjemahkan dan diberi kode bahasa (`[JA]`). |
| Blog | Kolom `locale` dan `translation_of` dibuat otomatis saat pertama dipakai. Semua query per bahasa, plus pencarian, menu blog, dan sitemap. |
| Cache | Purge Cloudflare per zone domain (`CLOUDFLARE_ZONE_ID_JA` dst., juga di workflow deploy). `revalidatePath` memakai alamat `/[lang]/…`. |
| Alat | `npm run i18n:missing -- ja` mengumpulkan teks yang belum diterjemahkan; `npm run i18n:status` menampilkan jumlahnya. |

### Langkah menyalakan satu bahasa (contoh: Jepang)

1. Isi `.env.local`: `I18N_PREVIEW_LOCALES=ja` dan
   `I18N_MISSING_FILE=.i18n-missing.jsonl`, lalu `npm run dev`.
2. Jalankan `npm run i18n:missing -- ja`. Semua teks yang belum diterjemahkan
   masuk ke `src/i18n/messages/ja/*.json` dengan nilai kosong.
3. Isi terjemahannya (draf AI, lalu dicek penutur asli). Buka
   `http://localhost:3009/ja/…` untuk mengecek tampilannya, lalu ulangi
   langkah 2 sampai tidak ada yang tersisa.
4. Daftarkan path halaman yang sudah diterjemahkan di `translatedPaths`
   (`src/i18n/config.ts`), lalu tambahkan `"ja"` ke `activeLocales`.
5. Pasang domain di Vercel dan Cloudflare, isi `CLOUDFLARE_ZONE_ID_JA`, dan
   isi akun LINE di `src/data/booking.ts` kalau sudah ada.

### Status bahasa Jepang (2 November 2026)

- **Draf AI untuk 17 halaman inti sudah lengkap**, sekitar 3.000 teks: beranda,
  `/seminyak/`, About, Contact, Reservation, Outcall, Villa & Hotel, serta 10
  treatment (Balinese, Couple, Body Scrub, Cream Bath, Hot Stone, Foot
  Reflexology, Facial, Deep Tissue, Warm Candle, Traditional). Header, menu,
  dan footer ikut diterjemahkan. Ke-17 halaman ini sudah terdaftar di
  `translatedPaths.ja`.
- Hasil pengecekan di preview `/ja/`: `npm run i18n:missing` menemukan 0 teks
  yang tersisa. Tombol durasi, total paket, dan item menu harga sama jumlahnya
  dengan versi English. Judul Jepang dipenggal per frasa (`auto-phrase`), dan
  judul banner di ponsel dikecilkan supaya kata katakana panjang tidak
  terpotong.
- Istilah utama: Seminyak → スミニャック, home service → 出張サービス/出張マッサージ,
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

### Yang belum dikerjakan

- Isi terjemahan Korea, China, dan India; sisa halaman Jepang; review penutur asli.
- Keputusan di bagian 2: Hindi atau `en-IN`, `.kr` atau `.co.kr`, kanal chat,
  dan pendaftaran domain.
- Tampilan QR WeChat untuk China (menunggu akun).
- Pengecekan tampilan per bahasa (teks panjang Hindi, judul CJK) setelah
  terjemahan ada.
