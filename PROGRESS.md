# Progres rebuild

Diperbarui 1 Oktober 2026.

> **1 Oktober:** beranda `/` kini desain baru pilihan pemilik (draf "v3"),
> bukan lagi salinan 1:1 live — lihat "Beranda baru" di bawah. Price list
> `/seminyak/` dan outcall kini memakai desain price list beranda yang sama
> (lihat "Price list baru"), dan emas baru pemilik #B88C35 kini dipakai di
> seluruh situs (lihat "Emas baru di seluruh situs"; bisa dikembalikan dengan
> satu baris). Putaran klien berikutnya (rollover putih, jarak antar-section
> seragam, banner penutup seukuran, About & catatan paket beranda) ada di
> "Permintaan klien, putaran 2". Isi dan susunan halaman lain tetap dari live.

## Semua 42 halaman sudah jadi — dan identik dengan live

| | |
|---|---|
| Halaman diperiksa | **42** + halaman 404 |
| Status 200 di rebuild **dan** live | **42 / 42** |
| `<title>` cocok persis dengan live | **42 / 42** |
| Tampilan identik dengan live (elemen per elemen, hingga subpiksel) | **42 / 42** + 404 — lihat sesi 4 |
| Build produksi | sukses: 48 rute statis (termasuk robots.txt, sitemap.xml) + 2 API |
| Typecheck · lint | bersih · 0 error, 0 warning |

`node tools/compare-pages.mjs http://localhost:3100 https://spabalimoon.com`
mengulang pemeriksaan status/judul; perbandingan tampilan ada di
`tools/live-port/`.

### Rute

- `/` beranda, desain baru (10 seksi; sampai 30 September salinan live, 11
  seksi)
- `/seminyak/` daftar harga bertab
- `/seminyak/[slug]/` **24 halaman treatment**
- `/guide/` + `/guide/[slug]/` **7 artikel**
- `/contact/` · `/reservation/` · `/massage-kuta/` ·
  `/outcall-home-service-massage/` · `/villa-hotel-massage/`
- `/wellness-in-bali/` · `/privacy-policy/` · `/terms-and-conditions/`
- `/api/subscribe/` · `/api/search-posts/`

## Bobot (build produksi, 29 September)

| | Live | Rebuild | |
|---|---|---|---|
| CSS | 531,5 KB · 6 file · 5.488 aturan | **266 KB · 2 file** (36 KB gzip) | **−50%** |
| JS | 3047,3 KB · 132 file | **924 KB · 21 file** | **−70%** |

Keduanya mencakup seluruh situs. CSS rebuild hanya memuat aturan live yang
benar-benar dipakai salah satu dari 42 halaman (1.799 dari 6.097). Swiper,
Lenis dan subset Font Awesome sama dengan yang dipakai live.

## Kemiripan beranda (historis, sebelum port 1:1)

Tinggi total **13.017 vs 13.232 px (1,6%)**. Per seksi: hero +12, steps +12,
about −39, slider −17, testimoni −58, katalog +174, intro −24, paket +38,
keunggulan +28, FAQ −70, CTA +22.

Terbukti identik persis: h1 hero 936×156, link nav 52×106, paragraf hero
330×232, kartu langkah 280×302, heading seksi 2 936×130. Halaman treatment:
hero **tepat 848px**, total 12.571 vs 12.477 (0,8%).

## Dua temuan yang berdampak ke semua halaman

1. **Dropdown header harus tetap ada di HTML.** Awalnya hanya dirender saat
   dibuka; itu menghilangkan 23 tautan treatment + 7 artikel dari setiap
   halaman — regresi SEO, bukan sekadar selisih teks. Sekarang selalu dirender
   dan disembunyikan secara visual. Selisih teks halaman treatment turun dari
   11–14% menjadi **3–6%**.
2. **Tab harga juga.** Semua tab dirender, yang non-aktif diberi `hidden`,
   sehingga seluruh harga tetap terbaca mesin pencari.


## Perbaikan visual (28 September, sesi lanjutan)

Pembandingan angka saja ternyata menyesatkan: tinggi dan font cocok, tapi
situsnya terlihat datar karena **elemen dekoratifnya belum ada**. Yang
ditambahkan setelah membandingkan tangkapan layar berdampingan di 1280px:

- **Ornamen bunga kamboja di hero** — 5 SVG asli (3 bunga + 2 kelopak) plus
  glow emas radial, masing-masing beranimasi 13 detik.
- **Ornamen titik di atas judul** — garis · kuncup · bunga · kuncup · garis.
- **Tombol WhatsApp bundar 97px** bergaris emas di sebelah paragraf hero.
- **Tata letak dua foto bertumpuk** yang menjorok keluar tepi kiri.
- **Tepi bergelombang antar-seksi** (`section-decoration-top/bottom`,
  76px dan 74px) — ini penyebab terbesar kenapa situsnya terasa datar.
- **Ornamen daun di tiap seksi** (steps, about, testimoni, katalog, keunggulan).
- **Header diperbaiki**: full-width dengan gutter 50px (bukan container),
  satu baris 106px, tombol "Book an Appointment" baru muncul di ≥1400px —
  persis seperti live.

Hasil di viewport 1280px:

| Elemen hero | Live | Rebuild |
|---|---|---|
| tinggi seksi | 1033 | **1033 — persis** |
| h1 | `[101,402,1070,159]` | `[98,402,1070,159]` |
| paragraf | `[641,596,330,232]` | `[638,596,330,232]` |
| foto 1 | `[78,491,337,487]` | `[75,491,337,487]` |
| foto 2 | `[-102,361,281,377]` | `[-105,361,281,377]` |
| daun | `[0,722,255,367]` | `[0,722,255,367]` — persis |
| logo header | `[50,31,240,44]` | `[50,31,239,44]` |

Selisih x sebesar 3px berasal dari lebar scrollbar, bukan kesalahan tata letak.

Tinggi total beranda di 1280px: **12.250 vs 12.124 (1,0%)**.


## Bug render yang serius (diperbaiki)

Laporan "ada bagian yang tidak terender" benar, dan penyebabnya kesalahan
desainku sendiri: **59 dari 59 elemen `data-reveal` tersangkut di
`opacity: 0`** — katalog kehilangan 43 elemen, keunggulan 6, steps 5.

Akarnya: konten disembunyikan lebih dulu, lalu bergantung pada animasi
keyframe untuk memunculkannya kembali. Karena `animation-fill-mode: both`,
saat jam animasi berhenti (tab tidak di-paint, di-throttle browser) elemen
menahan keyframe 0% selamanya. Hal yang sama terjadi pada panel harga yang
memakai transisi `grid-template-rows: 0fr -> 1fr`.

Prinsip yang sekarang dipakai di seluruh proyek: **visibilitas berasal dari
deklarasi CSS atau atribut `hidden`, animasi hanya pemanis di atasnya.**
Kalau animasinya gagal jalan, yang hilang cuma efeknya — bukan isinya.

- Reveal memakai transisi (`opacity`/`transform`), bukan keyframe; state
  terbuka adalah deklarasi sungguhan.
- Elemen di dalam tab tertutup tidak pernah disembunyikan.
- Tiga jaring pengaman: IntersectionObserver, handler scroll, dan timeout 6
  detik yang memunculkan apa pun yang masih tersembunyi.
- Panel harga memakai atribut `hidden`; slide 400ms hanya tambahan.

Hasil verifikasi: **0 dari 59 elemen tersembunyi**, toggle harga bekerja
(0px → 64px berisi "1 Hour · 250K · View Aloe Vera Massage details" → 0px),
dan tab kategori berpindah dengan benar.

Header lengket juga diperbaiki: live menambahkan kelas `menu-fixed` saat
scroll (latar putih + `0 4px 30px rgba(0,0,0,.05)`, transisi 0.32s). Punyaku
tetap transparan sehingga konten menembus di belakang menu.

### Tinggi seksi beranda pada 1440px

| # | Seksi | Live | Rebuild | Selisih |
|---|---|---|---|---|
| 0 | hero | 1047 | 1033 | -14 |
| 1 | steps | 703 | 744 | +41 |
| 2 | about | 1105 | 970 | -135 |
| 3 | slider | 635 | 650 | +15 |
| 4 | testimoni | 515 | 457 | -58 |
| 5 | katalog | 2321 | 2107 | -214 |
| 6 | intro paket | 700 | 676 | -24 |
| 7 | paket | 966 | 1125 | +159 |
| 8 | keunggulan | 766 | 688 | -78 |
| 9 | FAQ | 1188 | 1523 | **+335** |
| 10 | CTA | 762 | 784 | +22 |
| | **total** | **11.412** | **11.551** | **+139 (1,2%)** |

FAQ adalah selisih terbesar yang tersisa (+28%).


## FAQ, CTA dan footer dibangun ulang

Ketiganya memang strukturnya beda, bukan sekadar meleset ukuran:

| Bagian | Yang kubuat sebelumnya | Struktur live |
|---|---|---|
| FAQ | banner lebar penuh lalu accordion di bawahnya | **dua kolom 654px**: kiri foto 654x908 dengan "Time to Unwind" ditumpuk, kanan kicker + h2 + accordion 514px, item pertama terbuka |
| CTA | panel ink rata 936px | **banner 1408x442, radius 18px**, foto `homepage-5.webp` di balik wash `rgba(28,26,29,.45)`, empat garis bingkai SVG, konten 860px |
| Footer | 4 kolom + baris newsletter + baris bawah terpisah | **5 kolom sebaris** (316/195/195/195/316, tinggi 304) lalu **satu baris copyright terpusat** |

Nilai yang terlewat sebelumnya: judul kolom footer `<h3>` 24px/500 warna
`#2f2924` (bukan abu body), pertanyaan accordion 22px/500, jawaban 16px/29px
warna `#5f5a54`, judul FAQ di atas foto 37.44px/500 putih.

### Hasil pada 1440px

| # | Seksi | Live | Rebuild | Selisih |
|---|---|---|---|---|
| 9 | **FAQ** | 1188 | **1188** | **0** |
| 10 | **CTA** | 762 | **762** | **0** |
| | footer | 598 | 572 | -26 |
| 5 | katalog | 2321 | 2107 | -214 |
| 7 | paket | 966 | 1125 | +159 |
| 2 | about | 1105 | 970 | -135 |
| 8 | keunggulan | 766 | 688 | -78 |
| 4 | testimoni | 515 | 457 | -58 |

Nol aset gagal, nol elemen tersembunyi, build 45 rute sukses, 42/42 halaman
status 200 dengan judul cocok.


## FAQ diselaraskan elemen per elemen

Tinggi seksinya sudah 1188 seperti live, tapi isinya masih meleset di enam
titik. Setelah membandingkan setiap elemen:

| Elemen | Live | Sebelum diperbaiki | Sebabnya |
|---|---|---|---|
| foto | `[50,143,654,908]` | `[12,143,677,908]` | kolom kiri butuh inset 12px |
| konten kanan | `x=798 w=514` | `x=737 w=514` | kolom kanan butuh inset **82px di kedua sisi** (678-164=514) |
| kicker ke h2 | jarak **0** | 8px | `mt-2` tidak ada di live |
| h2 ke accordion | jarak **0** | 32px | `mt-8` tidak ada di live |
| tombol accordion | line-height **35px** | 32px | 1 baris = 35+40 = 75px, 2 baris = 70+40 = 110px, padding 20px |
| "Time to Unwind" | `[100,974]` lh 1 | `[62,960]` lh 1.1 | 50px dari kiri foto, 40px dari bawahnya |

Animasi `panel-open` juga dibuat opacity saja tanpa `transform`: transform-nya
menggeser teks 6px dan menahannya di situ kalau jam animasi berhenti.

### Hasil akhir — seluruh elemen cocok

```
foto       live[50,143,654,908]   baru[47,143,654,908]    COCOK
judulFoto  live[100,974,292,37]   baru[97,974,306,37]     COCOK
kicker     live[798,183,514,30]   baru[795,183,514,30]    COCOK
h2         live[798,213,514,130]  baru[795,213,514,130]   COCOK
tombol1    live[798,343,514,75]   baru[795,343,514,75]    COCOK
jawaban1   live[798,418,514,87]   baru[795,418,514,87]    COCOK
tombol2    live[798,526,514,110]  baru[795,526,514,110]   COCOK
tombol6    live[798,935,514,75]   baru[795,935,514,75]    COCOK
```

Setiap koordinat y dan tinggi identik; x bergeser 3px karena lebar scrollbar,
bukan kesalahan tata letak.


## Detail visual dari tangkapan layar pengguna

Lima hal yang hanya kelihatan dari gambar, bukan dari angka:

| Detail | Live | Yang kubuat |
|---|---|---|
| sudut foto FAQ | pembungkus `border-radius: 30px; overflow: hidden` | kotak tajam |
| ikon accordion | **plus / minus** 20x20 warna `#1c1a1d` | chevron berputar |
| pemisah di CTA | `span 60x1` + **lotus 26x27** + `span 60x1`, gap 15px, margin 18px | garis polos 60px |
| tombol Reserve | ada ikon panah setelah teksnya | tanpa ikon |
| tombol "Book an Appointment" | ada lotus 18x18 setelah teksnya | tanpa ikon |

Ditambah satu kesalahan huruf yang kelihatan jelas: `text-transform: capitalize`
kupasang global untuk semua `h2`, sehingga muncul **"Time To Unwind"** dan
**"A Better Way To Experience Wellness In Bali"**. Di live kedua judul itu
`text-transform: none` ("Time to Unwind"), sementara heading seksi lain
memang `capitalize` — itu sebabnya live menulis "Of The Bali Experience".

Ikon panah dan plus/minus digambar sebagai SVG inline, bukan glyph Font
Awesome Pro seperti di live, supaya tidak menyeret font berlisensi.

Terverifikasi ulang: radius foto 30px, 6 ikon accordion, pemisah lotus ada,
`tt:none` pada dua judul itu dan `tt:capitalize` pada heading seksi, FAQ 1188
dan CTA 762 tetap nol selisih, nol aset gagal.


## Bug SVG (diperbaiki) dan jawaban soal aset

Bingkai CTA tampil sebagai ikon gambar rusak. Penyebabnya berlapis:

1. **Optimizer gambar Next.js menolak SVG.** Semua SVG lewat `next/image`
   balas `400 "image type is not allowed"` — logo, ikon treatment, ikon
   langkah, bingkai CTA, semuanya. Diperbaiki dengan `dangerouslyAllowSVG`
   plus CSP `default-src 'self'; script-src 'none'; sandbox;`.
2. **13 file SVG tidak punya `width`/`height`, 4 di antaranya tidak punya
   `xmlns`.** SVG yang dimuat lewat `<img>` wajib punya namespace, dan tanpa
   dimensi intrinsik `naturalWidth` jadi 0. Diperbaiki langsung di file-nya.
3. **Empat bingkai CTA tetap 0x0** walau file-nya sudah benar: path-nya
   memakai atribut `style` inline, yang ditolak CSP `default-src 'self'`
   milik optimizer. Untuk ornamen sekecil ini tidak sepadan dilawan, jadi
   keempatnya di-inline sebagai JSX di `src/components/ui/CtaFrame.tsx`.
   Hasilnya juga menghilangkan empat permintaan jaringan.

Setelah itu: **0 gambar rusak**, bingkai tergambar pada 1349x30 dan 30x390
(live 1356x30 dan 30x390), tinggi CTA tetap 762 seperti live.

### Aset: tidak ada yang tertinggal

```
dirujuk di kode : 397 path
hilang          : 0
public/images   : 1005 file  (situs live punya 624)
public/icons    : 43 svg hasil ekstraksi, semuanya ber-xmlns
```

Justru berlebih: sekitar 380 gambar sisa desain Taman masih ikut dan belum
dibuang.

### Kenapa tidak memakai kode live apa adanya

CSS dan JS situs live adalah **bundle hasil kompilasi, bukan source** — satu
file CSS 502 KB ter-minify tanpa sumbernya. Tidak ada yang bisa "dirapikan";
paling jauh hanya bisa dipangkas yang tak terpakai, sekitar 531 KB menjadi
~100 KB, dengan markup yang tetap penuh kelas Bootstrap. Rebuild ini sudah di
36 KB dengan komponen yang bisa dikembangkan, jadi jalur itu justru mundur.

> Catatan sesi 3: keputusan ini dibalik untuk beranda, header dan footer —
> lihat bagian berikutnya.


## Slider treatment: kartunya ternyata horizontal

Kartuku vertikal (foto di atas, teks terpusat). Kartu live **horizontal di
semua lebar desktop**:

```
.inner-box    690x318 · flex row · gap 40 · padding 20 · bg #f5f2ec · radius 30px
              align-items: center        <- ini yang menengahkan foto
  .image-box  286x263 · radius 30px · overflow hidden
  .content-box 305x278 · column · justify-content: space-between · self-stretch
    .icon     80x80  /images/spa/<Nama>.svg
    .info     h6 gold 16/500 · h3 24/500 · p 16/29 pt10 mt15
```

Lebar kartu berubah menurut viewport (543 sampai 1200px, 690 dari 1440px),
tapi arahnya tetap horizontal.

Di bawah track ada `.feature-arrys` dengan **dua tombol 30x30** berlatar
`#f9f6f1`, terpusat, `margin-top: 60px` — itu yang mengisi 74px yang tadinya
hilang. Ditambahkan sebagai opsi `arrows` pada `Carousel`.

### Hasil

```
kartu  live[690x318]          baru[690x318]          COCOK
foto   live[32,171,286,263]   baru[32,171,286,263]   COCOK
ikon   live[358,163,80,80]    baru[358,163,80,80]    COCOK
h6/h3/p                       selisih 1px
tinggi seksi  live 635  baru 651  (+16)
```

## Selisih panjang teks yang tersisa

| Halaman | Selisih | Dugaan |
|---|---|---|
| `/guide/` | **+33%** | kartu arsipku menampilkan excerpt, live tidak |
| `/seminyak/` | −22% | sebagian baris harga live belum tereplikasi |
| `/guide/iv-drip/` | −15% | isi artikel lebih pendek dari live |
| `/contact/`, `/reservation/` | −12%, −11% | perlu dicek |
| 24 halaman treatment | −3% … −6% | wajar |

Sesi 3: selisih halaman dalam naik beberapa persen karena header kini
merender dropdown blog di server (live memuatnya setelah hidrasi).

## Beranda 1:1 dengan live (28 September, sesi 3)

Laporan: "berbeda jauh dengan live website". Benar — mengejar kemiripan
dengan menulis ulang tiap seksi di Tailwind tidak pernah tuntas. Pendekatannya
diganti: **markup dan CSS live dipindahkan apa adanya**, bukan ditiru.

- **CSS:** setiap aturan dari 3 file CSS + 9 blok styled-jsx live (5.505
  aturan) diuji terhadap DOM live, termasuk keadaan interaktif. 841 yang
  cocok disalin dengan urutan kaskade aslinya ke `src/styles/live.css`
  (hasil generator, jangan diedit tangan — lihat `tools/live-port/`).
  Tiap selektor diberi `:where(.lh,.lh *)`: hanya berlaku di dalam elemen
  berkelas `lh` dan **spesifisitasnya tidak berubah**, jadi kaskadenya
  persis live, dan reset Bootstrap tidak bocor ke halaman Tailwind.
- **Preflight Tailwind** dibatasi agar tidak menyentuh `.lh`
  (`src/styles/preflight-scoped.css`); aturan dasar `h1–h6`/`a` di
  `globals.css` juga. Folder `components/home` dan `components/layout`
  dikecualikan dari pemindaian Tailwind — kelas Bootstrap seperti `collapse`
  dan `mt-30` bentrok dengan utilitas Tailwind.
- **Markup:** header, menu mobile, 11 seksi, footer, tombol WhatsApp dan
  preloader ditulis ulang dari markup server live + logika komponen dari
  bundle JS live (header lengket di scrollY > 100, pencarian, mega menu,
  tab & panel harga katalog, akordeon FAQ, "Read more" testimoni).
- **Konten** beranda diambil ulang dari bundle live: `src/data/pages/home.ts`
  dan `home-catalog.ts` (38 kartu menu spa; slider treatment menurunkan
  harga "From"-nya dari sini, sama seperti live).
- **Library yang sama dengan live:** Swiper 11 (slider treatment & testimoni)
  dan Lenis 1.3.26 (`lerp: 0.06`). Carousel scroll-snap buatan sendiri tetap
  dipakai halaman treatment.
- **Font & ikon:** file woff2 live sendiri di `public/webfonts/` (Literata,
  Mulish, dan subset Font Awesome 3–6 KB milik live). `next/font` dilepas.
- Logo header (`SMBtitle.svg`) diganti versi live terbaru (viewBox 444).
- Tidak ada animasi reveal di beranda live (WOW.js tidak aktif, durasi 0s),
  jadi beranda baru juga tanpa reveal.

### Hasil (Chrome headless, animasi & slider dibekukan, semua gambar termuat)

| Lebar | Tinggi dokumen live / lokal | Elemen identik | Selisih |
|---|---|---|---|
| 1920 | 11.248 / 11.248 | 2.306 | 0 |
| 1440 | 11.412 / 11.412 | 2.306 | 0 |
| 1280 | 12.129 / 12.129 | 2.304 | 0* |
| 1024 | 13.870 / 13.870 | 2.306 | 0 |
| 768 | 14.545 / 14.545 | 2.304 | 0* |
| 390 | 16.130 / 16.130 | 2.304 | 0* |

\* sisa selisih hanya titik navigasi slider testimoni, karena slider live
sudah berputar otomatis saat dibekukan; keadaan awal keduanya identik.
Keadaan interaktif (header lengket, mega menu, dropdown blog, pencarian, tab
& panel katalog, FAQ, menu mobile) juga dibandingkan: identik. 17 animasi
dekorasi: durasi, delay dan keyframe sama.

CSS produksi: 116 KB (18 KB gzip) + 26 KB, dibanding 531 KB di live.

### Yang sengaja berbeda

- Semua halaman dibungkus `<main>`, live tidak. Dua aturan footer live
  diperluas agar tetap berlaku, dan `main.outcall-page` dirender sebagai
  `div` supaya tidak ada `<main>` bersarang.
- Kolom grid Bootstrap ditulis sebagai pecahan `calc()` (lihat sesi 4) —
  nilainya sama, bentuk tulisannya beda.
- Pencarian header tidak menawarkan "FAQ" (`/faq/` adalah halaman demo theme
  yang tidak dibangun ulang).
- Dropdown blog dirender di server, live baru memuatnya setelah hidrasi.
  Karena itu teks HTML server lebih panjang 3–28% (`tools/compare-pages.mjs`);
  setelah JS jalan, DOM-nya identik.
- Tautan "Skip to content" (tersembunyi sampai difokus keyboard) dan beberapa
  `aria-label` pada tombol ikon.

### Perlu dikonfirmasi

- **Lisensi Font Awesome Pro.** Ikon beranda live memakai glyph FA Pro
  (light/regular/solid). Rebuild memakai file subset yang sama persis dengan
  yang sudah disajikan situs live; pastikan lisensi theme/klien mencakupnya.
  Kalau tidak, ganti dengan ikon FA Free — bentuk `light` akan sedikit beda.
- **Preloader** (logo + "Loading...", 250 ms–1 dtk) ikut disalin karena ada di
  live. Menunda tampilan pertama; hapus `<Preloader />` di
  `src/app/layout.tsx` bila tidak diinginkan.
- **`/reservation/` tanpa H1** (SEO-02). Sesi sebelumnya sengaja menambah H1;
  kini disamakan dengan live. Menambah H1 berarti satu perbedaan kecil dari
  live — keputusan pemilik situs.

## Semua 42 halaman 1:1 dengan live (29 September, sesi 4)

Permintaan: "pricelist harus identik 100%, atau kalau bisa semua pages".
Cara beranda dipakai untuk seluruh situs:

- **CSS** kini dibangun dari DOM ke-42 halaman live sekaligus (5 file CSS + 48
  blok styled-jsx, 6.097 aturan → 1.799 terpakai). Aturan yang hanya dimuat
  sebagian halaman dan bisa bocor ke halaman lain diikat ke halamannya dengan
  `:where(body:has(.p-<halaman>))`; tiap halaman berakar
  `<div class="page-wrapper lh p-<halaman>">`.
- **Komponen** diambil dari modul JS live (di-*decompile* lalu dirapikan) ke
  `src/components/sections/`: PageBanner, AboutIntro, AboutSplit(Alt),
  TreatmentPricing, SessionOptions, Funfacts, TreatmentTestimonials,
  ServiceSlider, FaqSection, ReserveCta, PackageTabs, PackageIntro,
  Testimonials, VideoSection, PageTitle, GuidePost, HomeServiceInfo,
  ContactSection.
- **Isi halaman** dibangkitkan dari pohon komponen live (props apa adanya) ke
  `src/content/`: 24 treatment, 7 artikel guide, 9 halaman lain. Rute di
  `src/app/` tinggal memasang isi itu dan tetap memegang metadata SEO.
- **Kontak** mengikuti live: form tidak mengirim email (live juga
  `whatsappOnly`); submit membuka dialog "We reply on WhatsApp" dengan pesan
  yang sudah tersusun. **Reservation** kini persis live — tanpa banner dan tanpa
  H1 (lihat "Perlu dikonfirmasi").
- **404** kini halaman error milik live (gambar, "Page not found!", form
  cari, "Back to Home") — **tanpa header dan footer**, sama seperti live. Untuk
  itu semua rute dipindah ke route group `src/app/(site)/` yang layout-nya
  memuat header, `<main>` dan footer; root layout hanya memuat yang dipakai
  bersama (CSS, font, tombol WhatsApp, preloader, Lenis). URL tidak berubah.
  Slug treatment/artikel yang tidak ada juga jatuh ke 404 ini.

### Hasil (Chrome headless, animasi & slider dibekukan, semua gambar termuat)

Sapuan akhir: 42 halaman pada 1920 dan 390px, beranda dan pricelist juga
pada 1440/1280/1024/768, dan 404 pada keenam lebar (98 perbandingan).
**Tinggi dokumen sama di semua perbandingan, 0 selisih posisi/ukuran, gaya,
dan isi** (tag, kelas, teks, `src`, `href`), dan **0 selisih subpiksel**
(> 0,02px). Satu-satunya catatan: dua dekorasi di Balinese Massage 1920px
bergeser 10px pada sebagian pengujian. Posisinya mengikuti posisi scroll
terakhir saat dekorasi itu terlihat, dengan kode yang sama persis dengan live;
diuji pada posisi scroll yang sama, nilainya identik.
Sisa "struct" di laporan hanya urutan kelas yang ditambahkan Swiper dan
`main.outcall-page` yang dirender sebagai `div` (rebuild sudah punya
`<main>`).

Interaksi yang dibandingkan dan identik: tab & panel pricelist, tab paket +
buka/tutup baris di outcall (5 tab, 1440 & 390), form kontak → dialog
WhatsApp (isi link, fokus, kunci scroll, Escape), pencarian sidebar artikel
(1440 & 390), akordeon FAQ dan panah slider treatment, plus semua interaksi
beranda dari sesi 3.

### Tiga temuan yang diperbaiki di generator CSS

1. **Jarak footer outcall kurang 113px.** Aturan live
   `:has(> .section__decoration-bottom:last-child) + footer` tidak berlaku
   karena rebuild membungkus halaman dengan `<main>`; kini diperluas seperti
   aturan footer sebelumnya.
2. **Dropdown hasil pencarian artikel tanpa gaya.** Markupnya baru muncul
   setelah mengetik, jadi aturannya terbuang. Markup semacam ini kini bisa
   ditambahkan per blok styled-jsx di `live/extra-jsx-<hash>.html`.
3. **Next 16 membulatkan angka CSS ke 6 digit.** Lightning CSS menyajikan
   `33.33333333%` milik Bootstrap sebagai `33.3333%`, sehingga sepertiga dari
   1434px menjadi 477,98px, bukan 478px. Kolom grid kini ditulis
   `calc(400% / var(--lh-cols, 12))`, yang tidak bisa dilipat dan (diuji di
   Chrome untuk semua lebar 100–2600px) menghasilkan layout yang sama persis.

### Tag `<head>` (SEO) dibandingkan untuk 42 halaman

- **Beranda kehilangan canonical, robots, og:url dan JSON-LD `DaySpa`** sejak
  ditulis ulang di sesi 3 (tidak ada `metadata` di `src/app/(site)/page.tsx`).
  Dikembalikan persis seperti live, termasuk JSON-LD (nilai rating 4,2 / 193
  ulasan dan email `info@spabalimoon.com` seperti di live).
- Isi `robots` kini ditulis sebagai string agar urutannya sama dengan live;
  `application-name` (tidak ada di live) dihapus.
- Gambar share disamakan dengan live (atas permintaan pemilik): hanya 7
  artikel guide yang punya `og:image`/`twitter:image` (URL gambar sampul
  saja, tanpa ukuran/alt); halaman lain tanpa gambar share. Tag
  `article:published_time`/`modified_time` yang tidak ada di live dihapus.
- Hasil `tools/live-port/headcmp.mjs`: semua tag `<head>` ke-42 halaman
  sama dengan live. Satu-satunya sisa adalah `next-head-count`, penanda
  internal Next.js Pages Router milik live yang tidak dibaca mesin pencari.
  404 punya satu tag `robots: noindex` tambahan dari Next; gabungannya tetap
  "noindex, nofollow".

### Berkas di luar halaman

- **`/robots.txt`, `/sitemap.xml` dan `/favicon.ico` tadinya 404** di rebuild.
  Kini disalin byte-per-byte dari live: `src/app/robots.txt`,
  `src/app/sitemap.xml` (42 URL + 40 gambar, semuanya ada di `public/`) dan
  `public/favicon.ico` (di `public/` agar Next tidak menambah tag ikon yang
  tidak ada di live). Perbarui `sitemap.xml` bila ada halaman baru.
- Redirect `/sitemap_index.xml` → `/sitemap.xml` ternyata sudah aktif di live
  (301), jadi dipindah dari `proposedRedirects` ke `liveRedirects`. Redirect
  lain yang aktif dicek ulang terhadap live: semua tujuannya sama.
- `/faq/` dan halaman demo tema lain (`/index-*`, `/shop-*`, …) masih
  dilayani live dengan `noindex` dan tidak ada di sitemap. Tetap tidak
  dibangun ulang (keputusan sesi sebelumnya).

### Bersih-bersih

- 19 file lama hasil tulis-ulang Tailwind (`components/pages`,
  `components/treatments`, beberapa `ui/*`, `data/packages.ts`,
  `data/treatmentIcons.ts`, `lib/article.ts`, `lib/format.ts`) tidak dipakai
  rute mana pun dan dihapus. Cadangannya:
  `migration/removed-pre-live-port-sources.tar.gz`.
- Variabel satu huruf sisa decompile diganti nama yang jelas. Lint 0 error
  0 warning, typecheck bersih.
- `tools/live-port/` diperbarui untuk 42 halaman (lihat README-nya).

## Cek responsif + perubahan atas permintaan pemilik (29 September, sesi 5)

### Cek responsif

Build produksi dibandingkan dengan live, 43 halaman × 7 lebar
(1440, 1280, 1024, 768, 600, 540, 360), satu lebar di tiap rentang breakpoint
live.css (1400/1200/992/768/576/500/376). Bersama sweep 1920 & 390 di sesi 4,
semua rentang sudah tercakup. Hasil 301 perbandingan: **tinggi dokumen sama,
0 selisih gaya/isi/subpiksel**. Satu-satunya selisih geometri adalah dekorasi
Balinese Massage 1440px yang sudah dikenal (ikut posisi scroll).
Overflow horizontal diperiksa di 320/360/375/414: tidak ada halaman yang bisa
digeser ke samping.

Koreksi catatan sesi 4: sisa "struct" di banner semua halaman bukan soal urutan
kelas. Kelas `swiper-backface-hidden` di `.banner-two__slider` memang hilang:
Swiper menambahkannya langsung ke DOM, lalu render ulang React menimpanya.
Di live hal yang sama terjadi, tapi kelas itu kembali setiap kali handler
resize Swiper berjalan (sering beberapa detik setelah load, pasti setelah
jendela diubah ukurannya), selalu di akhir daftar kelas. `PageBanner`
kini menjalankan `swiper.updateSlides()` sekali setelah render ulang itu,
sehingga hasil akhirnya sama dengan live secara konsisten (di dev, StrictMode
membuat urutannya lain; build produksi sama persis).

### Bug: jawaban FAQ kosong (ditemukan pemilik)

Semua jawaban FAQ yang dibuka tampil kosong: ruangnya ada, teksnya tidak.
Penyebab: `.collapse.show` kena `visibility: collapse` dari utility Tailwind
`collapse`. Tailwind v4 memindai seluruh proyek, termasuk PROGRESS.md dan
`tools/live-port`, dan kata "collapse" di sana membuatnya menghasilkan utility
itu. live.css tidak pernah mengatur `visibility`, jadi utility tersebut menang.
Bug ini sudah ada sejak commit awal. `compare.mjs` tidak menangkapnya karena
tidak membandingkan `visibility`, dan jawaban FAQ tertutup saat diukur.

Perbaikan di `src/app/globals.css`:
- Tailwind hanya memindai `src/` (`source("../")`).
- `@source not inline(...)` memblokir ke-58 nama kelas live yang akan menjadi
  utility Tailwind (`collapse`, `visible`, `hidden`, `fixed`, `container`,
  `mt-30`, `pt-120`, …). Kini Tailwind hanya menghasilkan 8 utility, semuanya
  untuk skip link.

`compare.mjs` kini ikut membandingkan `visibility`. Alat baru
`tools/live-port/dropdowns.mjs` membuka setiap dropdown di semua halaman,
live dan lokal, lalu menghitung teks yang benar-benar terlihat. Dropdown yang
diperiksa: FAQ, baris harga per tab, katalog beranda, "Read more" testimoni,
menu desktop (hover), submenu mobile, dan pencarian guide.

Hasil setelah perbaikan: 319 dropdown, 0 teks tersembunyi, jumlah karakter
sama dengan live. Satu-satunya perbedaan adalah paket couple /seminyak/ yang
sengaja dipindah ke tabnya sendiri.

Sweep `compare.mjs` ulang (43 halaman × 1920/390, kini termasuk
`visibility`), 30 September. Hasil: 0 selisih gaya/visibility di semua
halaman. Yang berbeda hanya perubahan yang disengaja:
- logo menu mobile, di semua halaman kecuali 404;
- price list /seminyak/ (tab ke-4; di 390px tab 2 × 2 menambah tinggi 59px);
- price list outcall (ruang 105px untuk dekorasi di ≥992px, foto paket).

Selain itu hanya dekorasi Balinese Massage yang sudah dikenal (ikut posisi
scroll).

### Sengaja berbeda dari live (permintaan pemilik)

Semua aturan ada di `src/styles/custom.css` (dimuat setelah live.css, jadi
tidak hilang saat live.css dibuat ulang):
- **/seminyak/ price list:** "Couple Massage Packages" dipindah dari tab For
  Couples menjadi tab keempat **Couple Packages** (data di
  `src/data/pages/pricelist.ts`; tiap paket satu baris dengan thumbnail
  sendiri). Di bawah 768px tab tersusun 2 × 2.
- **Price list /seminyak/ dan /outcall-home-service-massage/:** thumbnail
  sejajar judul (tidak turun ke tengah saat baris dibuka), dan kolom kanan
  diberi ruang di ≥992px agar dekorasi pojok kanan bawah tidak menimpa
  teks/harga (145px di /seminyak/, 105px di outcall karena dekorasinya 40px
  lebih rendah).
- **Outcall, tab Couple Packages:** tiap paket punya foto sendiri, sama dengan
  /seminyak/ (live memakai foto yang sama untuk A=B dan C=D). Tab outcall
  (5 tab) di HP tetap 3 + 2 seperti live.
- **Menu mobile:** logo di kepala menu kini `SMBtitle.svg`, sama dengan header
  (210px di HP), menggantikan ikon kecil + teks tebal milik live.
- **/privacy-policy/ dan /terms-and-conditions/ (30 September):** banner judul
  kini memakai foto dari pemilik (bunga kamboja di atas handuk),
  `public/images/legal/privacy-terms.webp` (1920×850) dan `-sm.webp` untuk HP
  (828×640, dipotong di sisi bunga). Live memakai latar polos
  `page-title-bg.jpg`. Foto dipasang lewat prop `backgroundImage` di
  `src/content/pages/privacy-policy.tsx` dan `terms-and-conditions.tsx`. Atas
  permintaan pemilik, overlay gelapnya diturunkan dari 70% (live) ke 45% di
  `src/styles/custom.css`, hanya untuk dua halaman ini.
- **Beranda, kartu About (30 September):** label "Seminyak · Since 2009"
  dibesarkan dari 12px (11px di bawah 992px) ke 14px (13px di bawah 992px),
  tetap satu baris. Aturannya di `src/styles/custom.css`, jadi berlaku juga
  di draf `/home-v2/`, `/home-v3/`, `/home-v4/`. `compare.mjs` di `/`: 1440px
  hanya kartu itu yang beda (+3px tinggi); 390px kartu +3px, dan isi di
  bawahnya turun 3px.
- **Beranda `/` (1 Oktober):** seluruhnya desain baru pilihan pemilik (draf
  v3), bukan salinan live — lihat "Beranda baru".
- **Price list /seminyak/ dan /outcall-home-service-massage/ (1 Oktober):**
  section price list memakai desain beranda (pilih durasi), menggantikan tab
  bergaya live dan baris buka-tutup — lihat "Price list baru". Tiga aturan
  price list lama di `custom.css` (tab 2 × 2, thumbnail sejajar judul, ruang
  dekorasi kanan bawah) kini tidak mengenai apa pun; dibiarkan untuk
  `PackageTabs` bila dikembalikan. Tab desain baru di /seminyak/ kembali
  2 × 2 di HP (pemilik, 1 Oktober); beranda dan outcall tetap 3 + 1 / 3 + 2.
- **Emas #B88C35 di seluruh situs (1 Oktober):** menggantikan #A78627 milik
  live di semua halaman — lihat "Emas baru di seluruh situs".
- **Bar WhatsApp di bawah layar HP (1 Oktober):** di bawah 768px tombol hijau
  bulat melayang diganti bar putih menempel di bawah layar. Riwayat: satu
  tombol emas selebar layar (52px) terasa terlalu besar → dua opsi
  dibandingkan (WhatsApp saja; WhatsApp + Contact Us) → **pilihan pemilik:
  opsi bawah tapi satu tombol saja, outline**. Jadi kini satu tombol
  "WhatsApp" (ikon + teks) `.btn-two` situs apa adanya (garis emas, teks
  emas; saat diketuk emas penuh berteks putih), 44px, setengah lebar bar,
  di tengah. Huruf dipatok ke huruf pill HP situs (Literata 15px 600, seperti
  tab dan switch price list), karena `.btn-two` mengikuti huruf halaman
  (Mulish di beranda, Literata di tempat lain). Bayangan bar = bayangan
  header lengket dibalik. Rencana pemilik berikutnya: teks pendek di
  sebelah tombol, mis. jam buka "9am–11pm" (saat itu tombol pindah ke sisi,
  teks di sisi lain). Komponen `src/components/layout/MobileActionBar.tsx`
  (dipasang di `src/app/layout.tsx`), gaya di `custom.css`. Bar 60px (HP
  miring 52px) + area aman iPhone; halaman diberi ruang bawah sebesar itu.
  Menu HP, dialog WhatsApp dan preloader tetap di atas bar; tablet/desktop
  tetap tombol melayang. Dicek 320/360/390 dan 740×360: teks utuh, tidak
  ada scroll ke samping. Mengembalikan tombol melayang: hapus
  `<MobileActionBar />` dari `layout.tsx`.
- **Banner 7 artikel guide di HP (1 Oktober):** `PageTitle` memberi HP versi
  `-sm` dari foto banner, tetapi file itu tidak pernah ada (live juga 404),
  jadi di bawah 768px banner tampil tanpa foto. Kini ada
  `public/images/guide/*-sm.webp`: potongan 828×1000 (bentuk banner di HP)
  dari tinggi penuh foto, dipusatkan pada subjeknya (mis. wajah di foto jet
  lag, kantong infus di IV drip), 24–38 KB (slimming 100 KB, IV drip 477×576
  tanpa diperbesar). Dicek 320/390/767: ketujuhnya termuat; desktop tetap
  foto besar. Artikel baru dengan foto banner perlu file `-sm`-nya juga
  (`var(--pt-bg-sm, …)` di live.css tidak jatuh ke foto besar bila file
  hilang).

`compare.mjs` akan melaporkan bagian-bagian ini sebagai selisih.

## Beranda baru: draf v3 menjadi `/` (1 Oktober)

Atas permintaan pemilik, desain `/home-v3/` kini menjadi beranda.
- `src/app/(site)/page.tsx` merender susunan v3 (`HomeV2Layout` + slider 23
  treatment + price list per durasi + semua perubahan pemilik, lihat bagian
  draf di bawah). Yang sama dengan beranda lama: `<title>`, deskripsi,
  canonical `https://spabalimoon.com/`, `index, follow`, JSON-LD DaySpa, satu
  `<h1>`. Wrapper tetap ber-kelas `home-v3`, jadi `home-v3.css` berlaku apa
  adanya.
- `/home-v3/` → **307** ke `/` (`redirect()` di halamannya; `next.config.ts`
  tidak diubah, jadi dev server tidak perlu restart). Tautan lama yang sudah
  dibagikan tetap jalan. Draf `/home-v2/`, `/home-v4/`, `/home-v2/options/`
  tetap ada (noindex).
- **Emas #B88C35** awalnya hanya di beranda; sejak 1 Oktober di seluruh
  situs (lihat "Emas baru di seluruh situs").
- `/` tidak lagi 1:1 dengan live: `compare.mjs`, `survey.mjs` dan
  `dropdowns.mjs` akan melaporkan selisih besar di `/` — itu disengaja.
- Beranda lama bisa dikembalikan dengan
  `git checkout HEAD -- "src/app/(site)/page.tsx"` (file itu belum diubah
  sejak commit awal). Bila v3 masih ingin disimpan sebagai draf, isi
  `page.tsx` yang sekarang dipindah ke `home-v3/page.tsx` dengan
  `path: "/home-v3/"` dan `index: false` (folder draf belum pernah di-commit).
  Komponen beranda lama (`home/Hero`, `FeaturedTreatments`,
  `TreatmentCatalog`, `sections/PackageIntro`, `home/Faq`) dibiarkan dulu
  walau kini tidak dipakai.
- Dicek: `/` 200 + `/home-v3/` 307; emas baru di `/` (logo 528 px emas B, 0
  emas lama) dan emas lama di `/seminyak/`, `/contact/`, `/home-v2/`; 0 error
  console; perbaikan review desain (lihat putaran v3) lolos di 1440, 390, dan
  HP miring 844×390 / 740×360 / 667×375.

## Price list baru di `/seminyak/` dan outcall (1 Oktober)

Atas permintaan pemilik, price list beranda (opsi A, "pilih durasi") kini
juga menjadi price list di `/seminyak/` dan `/outcall-home-service-massage/`.
- **Desain sama dengan beranda:** biaya home service, tab pill, switch
  durasi yang menempel di bawah header selama daftar di-scroll, harga di
  baris tiap treatment, baris tanpa durasi itu memudar ("Not available"),
  varian dan add-on sebagai catatan kecil. Emas mengikuti halaman (#A78627;
  emas B tetap hanya di `/`). Hiasan nampan spa kanan bawah tidak ada lagi,
  sama seperti di beranda.
- **Isi tetap milik halaman masing-masing** (teks dan harga live): judul
  ("Best Price / Our Massages Price List", "Prices / Professional Care …"),
  tab (/seminyak/ 4 tab termasuk Couple Packages; outcall 5 tab termasuk
  Most Popular), nama, deskripsi, foto dan harga. Data dipetakan oleh
  `src/components/pricelist/menuTabs.ts`: label seperti "1 Hour · Balinese
  Massage · 2 Pax" dibaca sebagai durasi; "1 Hour Aloe Vera" tetap varian;
  isi paket couple ("1.5 Hours – Balinese Massage + Ear Candle") jadi catatan
  di bawah deskripsi; manfaat facial ("Benefits:") jadi daftar catatan.
  Treatment di bawah treatment lain (Four Hand Warm Candle di bawah Organic
  Warm Candle; lima couple massage di bawah "Couple Massage" di tab Massage
  outcall) tampil sebagai catatan dengan harga untuk durasi yang dipilih;
  "Couple Massage" sendiri menunjukkan "from" harga terendahnya. Di tab Most
  Popular, Cream Bath dan Manicure Pedicure (tanpa durasi) tampil seperti
  baris Beauty. Tab For Couples outcall punya tombol "2.5 Hrs" karena Warm
  Candle couple di halaman itu 2,5 jam (live); di /seminyak/ 2 jam.
- **SEO tetap:** semua tab dan harga setiap durasi ada di HTML server (yang
  tidak tampil diberi `hidden`), sama seperti tab dan baris tertutup di
  versi live. Tiap harga berdurasi diawali label tersembunyi ("1.5 Hrs:")
  untuk pembaca layar dan mesin pencari. Beranda ikut cara ini; tampilannya
  tidak berubah.
- **Kode:** `MenuDurations` menerima `tabs`, `spacing` (kedua halaman
  tetap `pt-130 pb-130` seperti section lamanya) dan `sticky`;
  `MenuIntro` menerima `tabs`. CSS menu harga dipindah dari
  `home-v2.css`/`home-v2-options.css`/`home-v3.css` ke
  `src/styles/spa-menu.css` (diawali `.lh`, spesifisitas sama), dimuat
  oleh `MenuIntro`. `PackageTabs` kini tidak dipakai halaman mana pun,
  dibiarkan dulu.
- **Dicek:** beranda + draf (46 state: tiap tab × durasi, 1440 & 390) —
  teks identik dan tata letak sama; selisih piksel hanya header/tombol
  WhatsApp yang fixed saat screenshot, dan opsi A di `/home-v2/options/`
  versi HP kini ikut padding kanan 16px milik beranda. /seminyak/ dan
  outcall: semua tab × durasi di 1440 & 390, tanpa scroll horizontal dan
  tanpa harga yang menimpa judul di 320–1280px, switch menempel di HP
  (bawah header 68px) dan desktop (106px), 0 error console. Typecheck dan
  lint bersih. `compare.mjs` akan melaporkan section ini sebagai selisih.
- **Durasi terpilih = garis emas (1 Oktober):** atas permintaan pemilik ("gold
  outline only"), tombol durasi yang dipilih di switch "Prices for" tidak lagi
  emas penuh berteks putih, tetapi teks emas dengan garis emas 1px (seperti
  garis pill kategori), digambar di dalam tombol sehingga ukurannya tetap.
  Satu aturan di `spa-menu.css`, jadi berlaku di semua price list durasi:
  beranda, /seminyak/, outcall (dan draf opsi). Dicek: hanya tombol terpilih
  yang bergaris, ukuran tombol tidak berubah (40px HP, 42px desktop).
- **Tab 2 × 2 di HP (/seminyak/ saja, 1 Oktober):** atas permintaan pemilik,
  keempat tab tersusun dua baris rata (sebelumnya 3 + 1, seperti beranda),
  aturan di `custom.css`. Di bawah 360px padding pill 8px agar "Couple
  Packages" (123px) tetap satu baris; dicek rata di 320–767px.

## Emas baru di seluruh situs (1 Oktober)

Atas permintaan pemilik, emas B **#B88C35** (sebelumnya hanya di beranda)
kini dipakai di semua halaman, termasuk 404, header, menu HP, footer, tombol
WhatsApp dan preloader. Hover yang di live lebih gelap (#8A6F1C, #8F7223)
menjadi #987426; emas lain live (#B39242 di newsletter, #B8952E di navigasi
artikel) menjadi B.

**Emas lama tidak dihapus.** #A78627 tetap terdefinisi di `live.css` (tidak
diubah); emas B hanya lapisan di atasnya:
- **Saklar:** kelas `gold-b` pada `<html>` di `src/app/layout.tsx`.
  Hapus `className="gold-b"` → seluruh situs kembali ke #A78627 dan hanya
  beranda tetap emas B (keadaan sebelum 1 Oktober). Untuk #A78627 di
  beranda juga, hapus pula `:has(.home-v3)` dari cakupan di `gold.css`.
- **`src/styles/gold.css`** (dimuat setelah `custom.css`), semua aturan
  di bawah `:root:is(.gold-b, :has(.home-v3))`:
  1. variabel `--theme-color1`/`-rgb` pada setiap `.lh` (+ `--color-gold`
     Tailwind) — semua yang memakai variabel ikut;
  2. ikon SVG inline ber-atribut `fill`/`stroke="#A78627"`;
  3. gambar emas satu warna diwarnai ulang dengan filter SVG `#gold-b`
     (didefinisikan di `layout.tsx`, menggantikan `#v3-gold` di beranda):
     logo header/menu HP/footer/kartu sesi, lotus `sbm.webp`/`lotus.svg`
     (preloader, kartu brand, watermark ulasan, kontak, ikon kicker dan
     bullet artikel), 23 ikon treatment `/images/spa/`, ikon PNG paket
     `/images/icon/icon-spa/`. Spesifisitas dibuat serendah mungkin agar
     ikon putih di badge beranda dan ikon putih saat hover di slider
     treatment tetap putih;
  4. nilai emas tetap di `live.css` (pencarian header, hover telepon/menu
     HP, fokus input, garis frangipani, toggle harga, tombol dialog
     WhatsApp, newsletter, navigasi artikel, tab lama) dan di CSS kita
     (hover panah `spa-menu.css`/`home-v2.css`), selektor sama.
- Gaya inline emas di komponen (ikon kontak menu HP, HomeServiceInfo,
  PackageIntro, PackageTabs, privacy/terms/reservation/wellness, hero lama)
  kini `var(--theme-color1)` / `rgba(var(--theme-color1-rgb), …)` — saat
  saklar mati nilainya tetap #A78627 persis.
- Blok emas khusus beranda di `home-v3.css` dan filter `#v3-gold` di
  `(site)/page.tsx` dipindah ke `gold.css` / `layout.tsx`.
- Sengaja tidak diubah: bunga frangipani (dan bayangan cokelatnya), logo
  kartu pembayaran, kuning bintang ulasan.

Dicek:
- Sapuan gaya terhitung, 43 halaman × 1440 & 390, semua elemen dan
  pseudo-elemen termasuk yang tersembunyi (menu, dropdown): **0** nilai emas
  lama (sebelumnya ribuan per halaman; beranda sudah 0).
- 59 penempatan gambar emas: semuanya berfilter `#gold-b`, ikon putih di
  beranda tetap putih, bullet lotus artikel ikut.
- Uji diferensial keadaan interaktif: pada setiap elemen yang disasar
  aturan `:hover`/`:focus*`/`:active` (±500–2.600 per halaman), empat
  set keadaan dipaksa lewat DevTools Protocol, lalu warna dibandingkan
  dengan saklar hidup vs mati. Hasil di 43 halaman × 1440 & 390: setiap
  perbedaan adalah emas lama → emas B (atau filter gambar), **0** perubahan
  lain — jadi hover putih, teks putih di tombol emas, dsb. tetap seperti
  live. Beranda diuji dengan mencabut aturan `gold.css`.
- Menu harga beranda tidak berubah (selisih piksel hanya header fixed saat
  screenshot). Typecheck dan lint bersih.
- `compare.mjs` kini melaporkan selisih warna emas di semua halaman — itu
  disengaja; nyalakan ulang perbandingan 1:1 dengan mematikan saklar.

## Permintaan klien, putaran 2 (1 Oktober)

Lima permintaan dari pemilik (Uriah), dianalisis di semua 43 halaman pada
1920/1440/1024/390 lalu dikerjakan:

1. **Rollover putih, bukan emas penuh** ("the pure gold is too intense for
   the roll over"). `src/styles/rollover.css` (dimuat di `layout.tsx` setelah
   `gold.css`): semua tombol yang di live jadi emas penuh berteks putih saat
   hover (27 jenis: `.btn-one/.btn-two/.btn-two-light`, "Book an
   Appointment", "Reserve", tab price list, tombol kontak/peta/dialog
   WhatsApp, panah slider, lingkaran ikon slider treatment, ikon kontak) kini
   jadi putih; teks, garis, panah dan ikon tetap emas, plus bayangan emas
   lembut agar tetap terlihat di section/kartu putih. Tab price list yang aktif:
   putih bergaris emas (sebelumnya emas penuh). Fokus keyboard tab: cincin
   emas. Hapus import-nya untuk kembali ke rollover emas live. Dicek: 0 elemen
   yang jadi emas penuh saat hover di 43 halaman (sebelumnya 27 jenis); sisa
   emas penuh hanya dekorasi (titik slider, nomor langkah, badge ikon).
2. **Kotak "Spa Bali Moon · Since 2009" (About beranda) dirapikan.** Live
   menggantungnya di pojok, menutupi foto kiri 59px dan hanya 5px di atas
   foto batu. Kini grid (`custom.css`, ≥577px): foto tinggi di kiri; di kanan
   kotak selebar foto batu (min. 237px agar "Seminyak · Since 2009" tetap
   satu baris), jarak 24px, lalu foto batu mengisi sisanya; semua tepi
   sejajar, semua jarak 24px. Potongan (mask) di pojok foto kiri yang dibuat
   untuk kotak lama dihilangkan. HP (≤576px) tetap seperti live (sudah rapi).
3. **Catatan di bawah paket ("looks very strange")**: bukan lagi kotak putih
   bergaris (terlihat seperti kartu kelima), tetapi teks biasa di tengah di
   bawah lotus yang diapit dua garis emas tipis (pemisah banner penutup)
   (`home-v3.css`, `home-v2/Packages.tsx` membungkus lotus). Setelah dilihat
   pemilik ("jarak atas bawah aneh": 40px di atas, jauh lebih besar di bawah),
   catatan diletakkan di tengah: setengah jarak section di atasnya dan
   setengah di bawahnya, 100 / 80 / 70px (`--sp-half`; section paket berakhir
   di catatan, aturan 7 di `spacing.css`). Di HP jarak atas dihitung dari
   tombol geser kartu.
4. **Jarak antar-section sama secara visual** ("regardless of code padding").
   `src/styles/spacing.css`: dari konten terakhir satu section ke konten
   pertama section berikutnya selalu `--sp-gap` = **200px** (≥992px), **160px**
   (768–991), **140px** (HP), apa pun padding live-nya (dulu 39–420px). Tepi
   sobek (76/74px) diletakkan di tengah jarak; setelah banner foto atas, jarak
   dihitung dari tengah tepi sobeknya; setelah judul halaman, jarak penuh.
   Padding pembungkus dinolkan; tipe section yang menyimpan ruang kosong di
   dalamnya diberi `--sp-in-top/--sp-in-bottom` (slider treatment: ruang
   panah hover; kotak FAQ yang warnanya sama dengan kertas; titik slider
   testimoni; rail kontak; dll., semua dengan alasan di komentar). Aturan
   jarak lama khusus beranda di `home-v3.css` dihapus. Ubah satu variabel
   `--sp-gap` untuk mengubah semua jarak. Alat ukur:
   `node tools/spacing/measure-gaps.mjs` (lihat komentar di file). Hasil di
   10 lebar (1920–320px): **semua 351 jarak dalam ±8px** dari aturan, kecuali
   satu: Body Scrub di HP, dua section kertas bersebelahan sehingga dua tepi
   sobek (150px) tidak muat di 140px (+16px). Panah hover kartu slider
   treatment tetap utuh (section slider di atas section berikutnya). Tidak ada
   scroll horizontal (320/390/768/1440; 404 diperbaiki 2 Oktober, lihat di
   bawah).
5. **Banner penutup seukuran banner lymphatic** (termasuk beranda). Lebar dan
   padding ke-29 banner sudah sama; tingginya mengikuti teks (413–512px).
   Kini minimal setinggi lymphatic di setiap lebar (483px ≥992, 512px tablet,
   444px 576–767, di HP garis yang mengikuti tinggi lymphatic 679→534px),
   isi di tengah (`custom.css`). Beranda 442 → 483px. Lebih tinggi hanya bila
   teksnya lebih panjang dari lymphatic (Shiatsu 512px di desktop).

### Pemeriksaan menyeluruh (2 Oktober)

43 halaman × 14 ukuran (desktop 1920/1440, laptop 1366/1280, tablet
1024×768 miring dan 820/768 tegak, HP 430/390/375/360/320, HP miring 844×390
dan 740×360): 0 error konsol, 0 request
gagal, 0 gambar rusak, 0 teks tumpang-tindih atau terpotong; bar WhatsApp HP
tampil di <768px dan tombol mengambang di ≥768px. Price list (semua tab ×
durasi), switch menempel (27 kombinasi), emas lama (0), rollover (0 emas
penuh), dan jarak section (12 lebar) dicek ulang. Diperbaiki saat
pemeriksaan:

- **404 bisa digeser ke samping** (sama di live): pembungkusnya tanpa gutter
  sehingga margin −12px baris grid keluar layar (12px di desktop), dan gambar
  700px melebihi layar HP (sampai 380px). Pembungkus diberi gutter 12px,
  gambar dibatasi lebar layar (`custom.css`).
- **Jarak di HP sangat kecil (≤324px):** kartu slider treatment dan rail
  kontak terbungkus lebih tinggi, jadi kompensasinya punya breakpoint sendiri
  (`spacing.css`: slider ≤324px, kontak ≤322px; sebelumnya ≤374px dan
  meleset di 360px).
- **Nampan spa di /reservation/ menutupi teks** (sama di live): gambar 327px
  di pojok kiri bawah menimpa butir daftar terakhir ("Quick Booking" di
  desktop, "Easy Reservations" di tablet) di semua lebar ≥576px. Kini 170px,
  ukuran yang dipakai halaman treatment untuk gambar yang sama, dan pas di
  pojok kosong di bawah daftar (`custom.css`).
- **Daun yang kini jatuh di judul karena jarak baru** (live bersih di lebar
  itu): daun kanan atas slider treatment ("Continue Your…", 23 halaman)
  menyentuh judul di bawah ~1150px → disembunyikan di bawah 1200px
  (`spacing.css` bagian 9; di HP live pun menimpa judul). Daun "What Makes
  Spa Bali Moon Different" di beranda 992–1199px menimpa judul 65px → 160px
  (`home-v2.css`; ≥1200px tetap 220px).

**Dekorasi tidak pernah di atas teks (pilihan B, 2 Oktober).** Daun, bunga,
nampan, dan kamboja di sudut section menimpa teks di banyak halaman, sebagian
besar sudah begitu di live, terutama 600–1440px; jarak baru membawa sebagian
lebih dekat (section putih kehilangan ±80px padding). Pemilik memilih aturan
"dekorasi tidak pernah di atas teks": dikecilkan atau disembunyikan per lebar
layar, tidak pernah dipindah ke atas konten. Semua di
`src/styles/decorations.css` (aturan daun slider treatment dan nampan
/reservation/ dipindah ke sana):
- **Cara mengukur:** setiap dekorasi yang kotaknya menyentuh baris teks (atau
  dalam 10px, jangkauan goyangnya) difoto dengan dan tanpa dekorasi itu;
  hanya dihitung bila pikselnya benar-benar berubah, jadi dekorasi di belakang
  kartu atau sudut PNG yang transparan tidak ikut.
- **Sebelum:** 43 halaman × 13 lebar, di 1920 bersih, di bawah 576px hampir
  bersih (live sudah menyembunyikannya); tabrakan di sekitar 10 jenis
  dekorasi pada 600–1440px dan, setelah dicek lebih rapat, juga 1500–1840px.
- **Aturan:**
  - di bawah 1500px dekorasi sudut yang bertabrakan disembunyikan pada
    rentang tempat ia bertabrakan (testimoni dan daun /reservation/ hanya di
    tablet; intro treatment sampai 1919px karena kontainernya lebih lebar);
  - mulai 1500px dekorasi **dikecilkan**: lebarnya dibatasi 80% ruang kosong
    di samping kontainer 1320px dikurangi 12px (60px di 1500, 228px di 1920),
    bunga FloralDecoration diskalakan utuh, sehingga tidak bisa mencapai
    teks.
- **Sesudah:** 0 dekorasi di atas teks di 42 halaman × 27 lebar (1920–320px).
  Satu temuan 48px di /privacy-policy/ 960px tidak terulang dalam 4 uji ulang
  (waktu muat).

## Permintaan klien, putaran 3 (2 Oktober)

1. **Badge foto "keluar" ke bingkai foto** ("these need to come out into
   the larger image framing"; badge "17 + Years Experience", "Where Tension
   Lives", "The Art of Focus", dst. di sudut foto section about). Live
   meletakkannya 1,4cqw (8px pada ukuran penuh) di dalam lekukan sudut foto
   di semua sisi. Kini badge mengisi lekukan sampai tepi kiri dan bawah
   bingkai foto (rata dengan foto), celah 8px ke arah foto tetap
   (`custom.css`; lekukan 216×146 dari mask 570×496). Berlaku di semua lebar.
2. **Ruang kosong di bawah footer di HP** ("delete some space here"): live
   menyisakan 96px di bawah baris copyright untuk tombol WhatsApp bulat, plus
   60px padding footer: 156px putih di atas bar WhatsApp. Kini 28px
   (`custom.css`, di blok bar HP, karena hanya berlaku selama bar ada).
3. **Header HP** (<992px): logo "Spa Bali Moon" di tengah ("center the spa
   bali moon text"), ikon telepon (WhatsApp) di kiri, tombol menu di kanan.
   Tombol menu kini **teratai dari logo** (`LotusPaths`), bukan empat kotak
   (klien: "could this be a flower or hot stone"; sempat kamboja, lalu
   pemilik minta "bunga kyk logo bunga spa balimoon"), emas seperti ikon
   telepon. Desktop tidak berubah.
4. **Menu HP didesain ulang** ("modernize the menu"). Dua versi pertama
   (daftar teks biasa, lalu dengan daftar treatment dua kolom) dinilai kurang
   oke / terlalu polos; dari tiga opsi (foto + ubin, ikon + keterangan,
   editorial + populer) pemilik memilih **opsi 2**. Berkas: `Header.tsx`,
   `MobileMenu.tsx`, `MenuIcons.tsx`, `mobileMenuData.ts`,
   `src/styles/mobile-nav.css`.
   - Selebar layar di HP, panel 420px di tablet. Baris atasnya mengulang
     header: logo di tengah, tombol tutup di tempat teratai.
   - Panel pertama berlatar kertas: tiap item kartu putih berisi ikon garis
     emas dalam lingkaran (teratai, label harga, batu panas, rumah, kalender,
     buku, obrolan; set ikon sendiri, `MenuIcons.tsx`), nama (Literata 18/26)
     dan satu kalimat keterangan (Mulish 13/18; teks usulan, bisa diganti
     pemilik: "Our day spa in Seminyak", "Every treatment and price",
     "23 massages and beauty treatments", "Massage at your villa or hotel",
     "Book your visit", "Guides to our treatments", "Find us and get in
     touch"). Halaman aktif: nama emas dan garis tepi emas. Di bawahnya
     kartu putih berisi jam buka, alamat (ke Google Maps), telepon, dan
     tombol pill "Book on WhatsApp".
   - "Treatments" dan "Blog" membuka **panel sendiri** yang bergeser masuk,
     dengan tombol kembali. Treatments dikelompokkan Massage (15) dan
     Beauty & Body (8), tiap baris berisi foto, nama, dan harga awal ("From
     IDR 159K", dari data menu beranda), lalu tombol "See the full price
     list". Blog: artikel di menu dengan foto sampul, lalu "All articles".
   - Datanya disusun di server (`mobileMenuData()` di
     `src/app/(site)/layout.tsx`) dan dikirim ke header sebagai props,
     sehingga data treatment dan artikel tidak ikut di JavaScript setiap
     halaman. Foto kecilnya (next/image, 72px) baru dimuat setelah menu
     dibuka pertama kali (29 foto kecil).
   - Perilaku: tautan apa pun, tombol Back, Escape, atau klik di luar menutup
     menu dan mengembalikannya ke panel pertama. Halaman di belakang tidak
     ikut bergulir. Fokus pindah ke tombol tutup atau tombol kembali, lalu
     kembali ke baris yang membukanya atau ke teratai. Item masuk berurutan
     saat menu dibuka (tanpa animasi bila pengguna memilih reduced motion).
     Diuji dengan sentuhan jari di 390px: 0 error, 0 foto rusak.
5. **Ikon fakta hero beranda di tengah** ("center these icons"): di HP
   (390–575px) ketiga fakta (Since 2009, Home Service, Experienced) dulu rata
   kiri. Kini ikon di tengah di atas teksnya, sama seperti 576–767px
   (`home-v2.css`). Di bawah 390px ketiganya tidak muat berdampingan: tetap
   satu per baris, tetapi daftarnya di tengah dengan ikon sejajar.
6. **"IV Drip Therapy in Bali" keluar dari menu Blog** ("we can take that one
   out of the menu"): dropdown desktop dan menu HP kini 6 artikel
   (`blogMenu` di `src/data/navigation.ts`). Artikelnya tetap ada di
   /guide/, di pencarian header, dan di sitemap.
7. **"Seminyak · Since 2009" tanpa huruf kapital** ("i think this one no
   capital"; kartu About beranda): live menulisnya kapital berjarak
   (`text-transform: uppercase`, spasi huruf 0,11em); kini sebagaimana
   ditulis, tanpa spasi huruf tambahan (`custom.css`).
8. **Jarak grup paket di /seminyak/** ("check mobile gaps on price page"):
   kedelapan grup paket (Balinese … Thai Massage Packages) satu pita kertas,
   tetapi aturan satu jarak memberi tiap grup jarak section penuh: di HP
   140px di atas tiap judul, hanya 30px dari paragraf ke kartunya. Kini
   antar-grup setengah jarak (100 / 80 / 70px) dan paragraf → kartu 40px di
   HP (60px di atasnya, seperti live) (`spacing.css` 7b;
   `tools/spacing/measure-gaps.mjs` mengenal jarak ini).
9. **Footer baru** ("can we also modernize the footer"; `Footer.tsx`,
   `src/styles/footer.css`). Dari tiga opsi (panel kertas + kartu, tengah +
   kolom dengan kamboja, panel gelap) pemilik memilih **opsi 1**, senada
   dengan menu HP:
   - **Isi:** sama dengan lima kolom live. Panel kertas bersudut bulat
     berisi logo, teks tentang spa, tombol pill "Book on WhatsApp",
     Instagram dan Facebook (dari `business.social`), dan metode
     pembayaran.
   - **Kartu:** empat kartu putih, masing-masing dengan ikon emas dalam
     lingkaran:
     - Our Day Spa: jam buka, alamat ke Google Maps;
     - Contact Us: telepon ke WhatsApp;
     - Home Services: tiga halaman dan biaya 75k;
     - Join Our Newsletter: form yang sama, tetap ke /api/subscribe/.
   - **Bawah panel:** baris copyright dengan Privacy Policy dan Terms.
   - **Tata letak:** ≥1200px kolom logo di kiri dan kartu 2×2 di kanan;
     di bawah 1200px logo di atas kartu 2×2; HP satu kolom rata tengah,
     newsletter disembunyikan seperti live.
   - **Seni mawar** (pemilik: "agak sepi … kasih art bunga sebelumnya";
     di bawah 1500px, tempat sisi tidak ada ruang, mawar yang sama naik dari
     sudut bawah panel ke pita 96px, 76px di HP, setelah klien menilai pita
     120px "a large space"):
     gambar garis mawar footer lama (`footer-shape-left.png`), diwarnai
     emas lewat filter `#gold-b` (55%), di kiri dan kanan panel. Hanya
     mulai 1500px, menempel ke tepi layar (gambar aslinya terpotong lurus
     di satu sisi) selebar ruang kosong + 80px di belakang panel, tidak
     pernah di atas teks. Sempat dicoba diganti daun tropis + kamboja (foto)
     dan ilustrasi garis emas (palem, monstera, kamboja); pemilik tetap
     memilih mawar.
   - **Diperiksa:** jarak dari isi halaman ke footer tetap aturan satu
     jarak (26/26 di 1440–320px), tanpa luberan ke samping di 320–1440px,
     form newsletter berfungsi.
10. **Tombol hero beranda bergaya baris menu** ("text buttons on a page to
    be more like these … maybe just on home"). `RowButton`
    (`src/components/ui/RowButton.tsx`, `src/styles/row-button.css`) berupa
    kotak putih bersudut bulat berisi ikon emas dalam lingkaran kertas,
    label (Literata 18/26), satu baris keterangan (Mulish 13/18), dan panah
    emas. Saat hover: garis tepi emas + bayangan emas (gaya rollover situs).
    Sempat dipasang di 11 tombol beranda; pemilik lalu memilih: "keep these
    in the home page banner … the rest of the site can stay the original
    shape buttons for now". Kini hanya dua tombol di hero ("Book on WhatsApp
    · +62 878-6317-5144", "View Price List · Every treatment and price");
    About, slider treatment, paket (termasuk "Reserve" di kartu), "Why It
    Matters", dan banner penutup kembali ke tombol pill live.

### Pemeriksaan akhir putaran 3 (2 Oktober)

Diulang setelah tombol hero, footer HP, dan pilihan B selesai, hasilnya
sama:
- 602 kombinasi bersih;
- dekorasi 0 di 42 halaman × 8 lebar;
- 2.100 dari 2.106 jarak dalam ±8px; sisanya Body Scrub di HP, dan slider
  yang bergeser sendiri selama pengukuran (−29 sampai −35px, halamannya
  berganti tiap kali diukur);
- menu, typecheck, lint `src`, dan build lolos.


- **Pengecekan menyeluruh:** 43 halaman × 14 ukuran (1920 → 320px, tablet,
  HP miring). Hasil: 0 error konsol, 0 request gagal, 0 gambar rusak, 0
  luberan ke samping, 0 teks bertumpuk atau terpotong (main dan footer), bar
  WhatsApp HP benar di semua ukuran.
- **Jarak section:** semua halaman di 1920/1440/1024/768/390/320px dalam
  ±8px dari aturan, kecuali dua kasus lama:
  - Body Scrub di HP: dua tepi sobek, +16px;
  - variasi slider treatment di satu halaman: tinggi kartu yang tampil
    berbeda-beda.

  Alat ukur kini menghitung tombol-baris dari kotaknya (garis tepinya
  sengaja tipis).
- **Dekorasi:** 0 di atas teks (lihat pilihan B).
- **Menu HP:** buka/tutup, panel Treatments/Blog, kembali, Escape, tautan,
  dan Back lolos; halaman di belakang terkunci; 29 foto kecil termuat.
- **Kode:** typecheck bersih; lint `src` bersih (sisa 1 error + 7 warning di
  `tools/live-port`, sudah ada sejak commit pertama); build produksi sukses.

## Permintaan klien, putaran 4 (3 Oktober)

Dari tangkapan layar klien di HP (lebarnya di bawah 390px):

1. **Header HP: ukuran item disamakan** ("even these items sizes") **dan
   nama spa lebih kecil** (permintaan pemilik). Ikon telepon dan tombol menu
   kini dua kotak putih 40px yang sama (sudut 12px, garis tepi tipis,
   bayangan lembut, ikon garis emas 22px; hover: garis tepi emas + bayangan
   rollover). Logo 210 → 170px di HP, 240 → 200px di tablet. Tinggi header
   68 → 70px. Desktop tidak berubah (`mobile-nav.css`).
2. **Tombol menu: batu panas dalam kotak putih** ("a hot stone icon inside
   a white square … more like a menu button"), menggantikan teratai dari
   putaran 3. Ikonnya ikon "stones" milik menu HP (`MenuIcons.tsx`). Baris
   atas menu yang terbuka ikut: logo 170/200px dan tombol tutup kotak putih
   yang sama, tepat di posisi tombol menu.
3. **Tiga fakta hero berjajar di HP < 390px** ("could these be across").
   Dulu satu per baris di bawah 390px (putaran 3, butir 5); kini tetap tiga
   kolom dengan jarak 8px, judul 15px (14px di bawah 340px), keterangan
   11/17px (`home-v2.css`). Dicek di 320/340/360/375/389px: judul satu
   baris, tanpa luberan ke samping.
4. **Foto banner utama baru** ("just the main banner image"). Dari lima foto
   pijat milik situs yang dipasang langsung di hero (desktop + HP), pemilik
   memilih pijat kepala yang terang (sampul artikel Jet Lag). Tidak ada foto
   pijat besar yang belum terpakai: dari 970 file di `public/images`, 782
   tampil di 42 halaman; sisanya placeholder abu-abu template, tekstur,
   ikon, plus foto foot scrub 1024px dan handuk 388px.
   - File: `public/images/home/hero-massage.webp` (salinan 1920×1080, 73 KB)
     dan `hero-massage-1200.webp` (30 KB, sharp q82).
   - `sizes` di `Hero.tsx` dihitung ulang untuk rasio 1,78: HP sampai ±2,4x
     kepadatan piksel mendapat file 1200px (dulu ±1,8x).
   - Posisi foto 50% 50% di semua lebar (dulu 26%/30% untuk foto lama).
   - Foto lama `contact-1.webp` tetap dipakai halaman Contact.
   - **Diganti 5 Oktober** dengan foto pilihan pemilik: terapis Spa Bali Moon
     (seragam hitam berlogo lotus) memijat kepala tamu. Sumbernya file klien
     `D:\Office\Clients\spa\Homepage.jpg` (1920×850, JPEG 599 KB), dijadikan
     `public/images/home/hero-head-massage.webp` (1920×850, 48 KB) dan
     `hero-head-massage-1200.webp` (1200×531, 26 KB), sharp WebP q82. Nama
     file baru dipakai supaya cache `/images` yang panjang tidak menampilkan
     foto lama. `hero-massage*.webp` dihapus. `sizes` dihitung ulang untuk
     rasio 2,26: HP sampai ±1,9x kepadatan piksel mendapat file 1200px. Posisi
     tetap 50% 50%. Sudah dicek di 1920/1440/1280/1024/390px: logo seragam,
     tangan terapis, dan wajah tamu terlihat; di HP komposisinya utuh.
     Versi crop sempitnya sudah lebih dulu dipakai di `/seminyak/head-massage/`
     (`headmassage-6.webp`, kartu "2 Hours").

## Admin blog di `/admin/` (2 Oktober)

Duplikat admin blog dari project lama (`D:Next.js Dataspabalimoon`):
login dengan satu password, dashboard (statistik, tabel, hapus dengan
dialog), editor artikel (TipTap 3: judul, slug otomatis, isi, ringkasan,
status, cover, kategori, tag, penulis, SEO, autosave di browser), dan upload
gambar. Tampilannya sama dengan "Content Studio" lama.

**Backend: Neon (Postgres) untuk artikel + Cloudflare R2 untuk gambar**
(pilihan pemilik; awalnya dibuat untuk Supabase, lalu diganti — terpisah
dari database live). **Tersambung 2 Oktober** di `.env.local`: bucket R2
`spabalimoon-blog` (APAC) dengan domain `https://images.spabalimoon.com`,
token R2 "Object Read & Write"; `npm run blog:setup` sudah dijalankan (tabel +
7 artikel). Diuji langsung: upload ke R2 tampil publik (cache 1 tahun),
draft dibuat/dibaca/dihapus di Neon, dan 8 halaman blog dari Neon identik
dengan sebelumnya.

Masih perlu: isi env yang sama di Vercel (Project Settings → Environment
Variables) — `DATABASE_URL`, `R2_*`, `ADMIN_PASSWORD`, `SESSION_SECRET`
(acak, ≥32 karakter), opsional `CLOUDFLARE_*`. Nilai asli hanya di
`.env.local`; `.env.example` (ikut git) hanya berisi contoh.

Langkah untuk memasang di mesin/akun lain:
1. Neon: buat project, salin connection string ke `DATABASE_URL`.
2. `npm run blog:setup` — membuat tabel (`db/schema.sql`) dan memasukkan 7
   artikel yang ada (id & tanggal asli). Aman dijalankan ulang.
3. R2: buat bucket, sambungkan custom domain, buat API token "Object Read &
   Write" untuk bucket itu; isi `R2_*` (lihat `.env.example`).
4. Login di `/admin/login/` dengan `ADMIN_PASSWORD` dari `.env.local`.

Selama `DATABASE_URL` kosong, `/guide/` dan artikel tampil dari
`src/data/guide/seed-posts.json` (7 artikel yang sama), dan admin hanya
menampilkan petunjuk setup. Tanpa `R2_*`, menulis artikel tetap bisa, hanya
upload gambar yang nonaktif.

**Yang berubah di situs publik (HTML tetap identik):**
- `/guide/`, `/guide/<slug>/`, `/api/search-posts/`, dan `/sitemap.xml` kini
  membaca database. Artikel baru langsung punya halaman.
- Halaman blog **di-cache sampai ada perubahan dari admin** (tanpa ISR
  berkala): setiap simpan di admin membangun ulang `/guide/` dan semua
  artikel, plus purge Cloudflare bila `CLOUDFLARE_*` diisi. Kunjungan biasa
  tidak menyentuh database (diukur: 0 query dari 9 kunjungan), jadi compute
  Neon tetap bisa tidur. Kalau database error saat membangun ulang, versi
  terakhir yang baik tetap disajikan. Edit langsung di konsol Neon baru
  tampil setelah ada simpan di admin atau deploy.
- `/sitemap.xml` dirender per request dengan `s-maxage=3600` (sama dengan
  live): CDN menyimpannya 1 jam.
- `src/content/guide/*`, `src/data/blog/*`, `src/content/pages/guide.tsx`
  dan `src/app/sitemap.xml` (file statis) dihapus; isinya kini di
  `seed-posts.json`, `src/components/sections/GuideArchive.tsx` dan
  `src/data/sitemap.ts` + `src/app/sitemap.xml/route.ts`.
- Diverifikasi: `<head>` dan seluruh `<main>` 8 halaman blog identik dengan
  sebelum perubahan (juga saat dibaca dari Postgres ber-zona waktu GMT+8);
  sitemap, search, dan menu API identik byte per byte; tidak ada utility
  Tailwind baru.
- Menu "Blog" (header & HP) **tetap daftar tetap** di `navigation.ts`
  (tanpa IV Drip, permintaan pemilik). Artikel baru tidak otomatis masuk
  menu.
- Artikel dengan cover hasil upload tidak punya file `-sm`; `PageTitle`
  memakai foto aslinya di HP.
- Admin tidak memuat preloader, tombol/bar WhatsApp, dan smooth scroll
  (`SiteChrome` di root layout).

**Uji:** 45 tes end-to-end di build produksi terhadap Postgres sungguhan
(PGlite, di balik tiruan endpoint HTTP Neon) dan tiruan S3 R2 (cek tanda
tangan AWS4): login/cookie, draft, publish, slug bentrok, rename slug,
unpublish, hapus, upload + tolak SVG/>5MB, sanitasi skrip & link keluar,
sitemap, search, revalidasi halaman — semua lolos; ditambah alur UI publish
& hapus di browser. Lalu diuji langsung ke Neon dan R2 sungguhan (lihat di atas).

## Satu folder komponen beranda (2 Oktober)

`src/components/home-v2/` digabung ke `src/components/home/`:

- Isinya hanya yang dipakai beranda `/`, price list `/seminyak/` dan outcall
  (`MenuDurations`), serta menu mobile (`treatments.ts`).
- `HomeV2Layout` berganti nama menjadi `HomeLayout`.
- Ikon bersama (`ArrowBox`, `PACKAGE_ICONS`, `ICON_BOXES`) kini di
  `home/icons.tsx`.
- Komponen yang hanya dipakai draf `/home-v2/`, `/home-v2/options/`, dan
  `/home-v4/` ada di `home/drafts/`. Kalau draf dihapus, folder itu ikut dihapus.
- Section beranda lama yang sudah tidak di-import dihapus: Hero, Faq,
  FeaturedTreatments, TreatmentCatalog, serta komponen Packages dan
  WhyDifferent lama. Semuanya masih ada di commit awal git.
- `src/components/ui/Frangipani.tsx` kini tidak dipakai (dulu hanya untuk hero
  lama).

Hasilnya sudah diverifikasi:

- HTML 47 halaman identik sebelum dan sesudah penggabungan (`next start`,
  tanpa script dan URL aset build).
- Price list, tab, FAQ, dan slider di `/` dan `/seminyak/` tetap jalan, tanpa
  error di console.

Nama file CSS (`home-v2*.css`, `home-v3.css`) dan class `.home-v2`/`.home-v3`
sengaja tidak diubah.

## Cek SEO sebelum go-live (2 Oktober)

Build produksi (`next start`) dibandingkan dengan spabalimoon.com untuk 419 URL:
semua URL sitemap, versi tanpa garis miring, semua aturan redirect di
`next.config.js` project lama (`D:\Next.js Data\spabalimoon`), url-map, dan
halaman di folder `pages/` lama.

- **Redirect:** 60 aturan redirect live belum ada dan akan menjadi 404 (halaman
  treatment lama seperti `/balinese-massage/`, slug lama di `/seminyak/`,
  `/blog/*` dan `/news/*` → `/guide/*`, `/terms-conditions/`, `/wellness-bali/`,
  `page-sitemap.xml`, dll). Semuanya kini ada di `src/data/redirects.ts`.
  Kodenya kini 301 seperti live (sebelumnya 308) lewat `statusCode` di
  `next.config.ts`. Hasil: 349 URL identik dengan live, termasuk jumlah hop.
- **Sengaja beda:** 28 halaman demo template (`/faq/`, `/testimonials/`,
  `/index-*`, `/shop-*`, dll.) dan 3 redirect ke sana (`/page-faq/`,
  `/page-testimonial/`, `/page-team-details/`) menjadi 404. Di live semuanya
  `noindex, nofollow`, tidak di sitemap, dan tidak di-link dari halaman asli.
  `/wp-admin/` dan `/wp-login.php` 403 di live karena Cloudflare, jadi tetap
  403 setelah deploy.
- **Sama persis dengan live:** robots.txt, sitemap.xml (termasuk lastmod dan
  gambar artikel), canonical, meta description, robots, og/twitter (kecuali
  judul), schema DaySpa di beranda, `lang`, status 404 halaman tak dikenal.
  Googlebot menerima head yang sama. 487 link internal, gambar, og:image, dan
  URL sitemap di build baru semuanya 200.
- **Beda yang disengaja:** 16 judul dari sheet pemilik, beranda baru, price
  list `/seminyak/` dan outcall (semua nama treatment dan harga live tetap
  ada), serta header, menu mobile, dan footer.

## Kecepatan mobile (2 Oktober)

Patokan live di PageSpeed Insights: mobile 77, desktop 98. Pingdom tidak bisa
dipakai: Cloudflare menjawab server Pingdom dengan halaman blokir 403.

Diukur dengan Lighthouse 13.5 (versi yang sama dengan PSI) pada `next start`
lewat proxy brotli, karena Vercel/Cloudflare mengirim HTML dengan brotli
(beranda 65 KB). `next start` lokal memakai gzip (133 KB). Perubahan, semuanya
tanpa beda tampilan (dicek piksel per piksel):

- **Foto banner penutup (ReserveCta) dimuat saat mendekati layar**
  (`src/components/ui/LazyBackground.tsx`). Berlaku di sekitar 30 halaman;
  fotonya 35 sampai 508 KB per halaman.
- **Foto hero beranda:** `srcSet` dengan `contact-1-1200.webp`. Hanya ponsel
  dengan kepadatan piksel ≤ 1,8x yang mendapat file 1200 px. Ponsel yang lebih
  tajam dan desktop tetap mendapat 1920 px.
- **"Learn More" di kartu treatment beranda:** teks tersembunyi " about …"
  (`sr-only`) menggantikan `aria-label`. SEO beranda naik dari 92 ke 100.

Hasil mobile: beranda 79–84 (median 81, SEO 100). `/seminyak/`,
`/outcall-home-service-massage/` dan `/seminyak/balinese-massage/` mendapat
84–85. Hambatan yang tersisa ada di desain:
- Literata variable font 108 KB.
- JS framework sekitar 105 KB.
- Halaman yang panjang.
Tanpa JS sama sekali, beranda baru mencapai 85–87.

Perubahan lanjutan, sama-sama dari 2 Oktober:

- **Preloader (pemilik memilih opsi b):** `custom.css` kini menyembunyikan
  preloader 0,5 detik setelah halaman pertama kali di-style. Ia tidak lagi
  menunggu JavaScript.
  - Di ponsel lambat (4G lambat, CPU 4x) preloader tampil sekitar 0,4–0,6
    detik dan hilang di sekitar 2,9–3,2 detik. Sebelumnya tampil 1,8 detik dan
    hilang di sekitar 4,1 detik.
  - Di perangkat cepat tidak ada perubahan (sekitar 0,35–0,4 detik).
  - `Preloader.tsx` tetap menghapus elemennya setelah hydration.
- **Swiper testimoni dimuat saat mendekati layar.** Kodenya dipecah menjadi
  tiga file:
  - `Testimonials.tsx` merender markup statis yang sama dengan output server
    swiper/react, sehingga semua ulasan tetap ada di HTML.
  - `TestimonialsSlider.tsx` dimuat lewat `next/dynamic` begitu section
    berjarak 1500 px dari layar (`src/lib/useNearViewport.ts`, juga dipakai
    `LazyBackground`).
  - `TestimonialCard.tsx` berisi satu kartu ulasan dan dipakai keduanya.

  Hasilnya, JS awal beranda turun dari 192 KB menjadi 166 KB. Geometri slider
  di `/seminyak/` sama persis dengan live (0 beda di 390 dan 1440). Bedanya
  hanya emas B dan posisi watermark karena aturan spasi, yang memang sudah
  disengaja.
- **Gambar Head Massage dan Lymphatic:** 11 file `.webp` ternyata PNG
  (headmassage-2 sampai 9, lymphaticmassage-3/6/9), masing-masing ada di
  `images/services/` dan `images/treatments/`.
  - Semuanya diubah menjadi WebP asli q85 dengan nama dan ukuran yang sama
    (PSNR 40–43 dB).
  - Total turun dari 6,2 MB menjadi 294 KB per salinan. headmassage-2 sendiri
    turun dari 1,6 MB menjadi 61 KB.
  - Halaman `/seminyak/head-massage/` saat pertama dimuat turun dari sekitar
    3,9 MB menjadi 718 KB.

Kini tidak ada lagi file `.webp` yang isinya bukan WebP.

Cek ulang, masih 2 Oktober:

- **Lighthouse mobile di 42 halaman:** rata-rata 83, median 82. Desktop 99–100.
- **Overflow beranda karena saya sendiri:** teks `sr-only` "Learn More about …"
  lolos dari baris treatment yang bisa di-scroll, sehingga lebar beranda
  menjadi 7132 px. Diperbaiki dengan `position: relative` pada
  `.v2-treat__link`.
- **SEO 92 di 4 halaman** karena link bertuliskan "Read More" / "Learn More".
  Kini SEO 100. Tampilannya identik piksel per piksel, tetapi markup-nya beda
  dari live:
  - `GuideArchive` mendapat teks tersembunyi ": {judul artikel}".
  - Tombol bawaan "Learn More" ke `/seminyak/` di `AboutSplit`/`AboutSplitAlt`
    (`learnMoreLabel.tsx`) mendapat " about our Seminyak spa, prices and
    packages". Ini dipakai di massage-kuta, day-spa dan villa-hotel-massage.
- **Header cache belum ikut dipindah dari live.**
  - `next.config.js` project lama mengirim `Cache-Control` untuk
    `/images/*` (30 hari + stale-while-revalidate 1 hari) dan
    `/webfonts/*` (1 tahun, immutable). Rebuild masih memakai `max-age=0`.
  - Kini sudah ada di `next.config.ts` (`headers()`).
  - Pingdom (San Francisco) untuk https://spa-redesign.vercel.app/ naik dari
    C 74 menjadi B 83, dan load time turun dari 2,34 detik menjadi 2,05 detik.
  - Yang tersisa adalah artefak domain vercel.app, jadi tidak bisa diubah:
    - "Compress with gzip" F, karena Vercel mengirim brotli dan Pingdom hanya
      menghitung gzip;
    - "Use a CDN" 0;
    - "Make fewer HTTP requests" E52 (10 file JS + 7 file CSS).
  - spabalimoon.com sendiri tidak bisa dites Pingdom selama Cloudflare
    memblokir IP-nya.
- **Purge Cloudflare otomatis setelah deploy**
  (`.github/workflows/purge-cloudflare.yml`). Setiap deploy Production yang
  sukses di Vercel memicu event `deployment_status`. Action menunggu 30 detik
  lalu menjalankan Purge Everything untuk zone spabalimoon.com.
  - Butuh repository secret `CLOUDFLARE_ZONE_ID` dan `CLOUDFLARE_API_TOKEN`.
  - Bisa juga dijalankan manual dari tab Actions.
  - Alasannya: setelah go-live, Cloudflare menyimpan HTML 2 jam
    (`max-age=7200`) dan gambar 30 hari.
  - Sejak go-live 2 Oktober malam, `/admin/` tidak di-cache (DYNAMIC). `/api/`
    masih ikut di-cache dan sebaiknya diberi aturan Bypass.
- **Skor 75 di coconut-oil hanya variasi antar-run.** Dijalankan sendiri 3x,
  hasilnya 80/82/82, sama dengan hot-stone. Sesekali Chrome menunda gambar
  pertama sampai sekitar 2,2 detik di mesin ini, di halaman mana saja.

## Urutan heading (5 Oktober)

Pemilik minta struktur heading dirapikan per halaman, dimulai dari `/`. Teks
yang hanya *terlihat* seperti heading kini memakai `<div>` dengan class
`look-h2` / `look-h4` / `look-h6` (`src/styles/custom.css`). Class ini
mengulang aturan h2/h4/h6 milik live.css dengan specificity nol, jadi tampilan
tidak berubah. Sudah dicek: 0 beda di 21 properti CSS dan posisi elemen, pada 12
lebar layar, untuk `/`, `/seminyak/`, dan outcall.

- **`/`:** kicker di atas judul (6×), nomor langkah 01–03, harga kartu
  treatment, nama dan harga paket (harga sebelumnya H2), judul kartu "What
  Makes Spa Bali Moon Different", serta nama reviewer. Hasilnya H1 → H2 → H3
  tanpa lompatan, dan jumlah heading turun dari 151 menjadi 84.
- **Ikut berubah karena komponennya sama:** nama reviewer di `/seminyak/`
  (`TestimonialCard`), serta kicker price list di `/seminyak/` ("Best Price")
  dan outcall ("Prices") (`MenuIntro`).
- **Masih tersisa di `/`:** dua H2 di FAQ ("Time to Unwind" di atas foto +
  "Questions About Our Spa"), nomor pertanyaan yang ikut masuk teks H3 FAQ, dan
  4 H3 di footer (semua halaman).
- **`/seminyak/` (Pricelist):** 11 kicker H4 lagi menjadi `div.look-h4`
  (VideoSection, PackageIntro, judul kecil di atas 8 grup paket). Atas
  permintaan pemilik, kartu paket memakai nama **H3** (sebelumnya H4) dan harga
  **H4** (sebelumnya H2), tanpa perubahan tampilan. Aturannya ada di
  `custom.css`. Hasilnya H1 → H2 (grup) → H3 (paket) → H4 (harga) tanpa
  lompatan, dan heading turun dari 172 menjadi 137. Sudah dicek: 0 beda di 12
  lebar layar. Yang tersisa sama seperti `/`: dua H2 di FAQ dan H3 di footer.
  Di beranda, nama dan harga paket tetap `<div>`.
- **Outcall:** 6 poin keunggulan dan baris "Home service fee: IDR 75,000 per
  therapist" di section "Home Service Massage" diubah dari H5 menjadi **H3**
  (`HomeServiceInfo.tsx`), atas permintaan pemilik. Line-height 30px dikunci di
  inline style supaya tidak ikut line-height H3 (35px). Sudah dicek: 0 beda di
  12 lebar layar. Kicker H4 "Treat yourself to a Balinese spa experience right
  where you are" kini `div.look-h4`.
- **`/reservation/` kini punya H1** (live tidak punya). Kicker "Your Spa
  Experience is One Click Away" diubah dari H4 menjadi `div`. "Book Your
  Treatment" naik dari H2 ke **H1**. Dua rute booking ("Home Service Massage
  (Hotel & Villa)", "Day Spa Bookings (Seminyak Location)") naik dari H3 ke
  **H2**. Delapan poinnya naik dari H5 ke **H3**. Tiap tag membawa class
  `look-h2/3/5` sesuai level lamanya. Di `custom.css`, class `look-h*` kini
  juga berlaku pada tag heading, dengan specificity yang sama dengan heading
  sehingga menang karena dimuat lebih akhir. Hasilnya H1 → H2 → H3. Sudah
  dicek: 0 beda di 12 lebar layar untuk `/`, `/seminyak/`, outcall, dan
  reservation.
- **`/guide/` (Blog):** baris "Spa Bali Moon · Blog" di tiap kartu diubah dari
  H6 menjadi `div.look-h6`. Judul artikel naik dari H4 ke **H2**
  (`h2.look-h4`, `GuideArchive.tsx`). Hasilnya H1 → H2. Sudah dicek: 0 beda di
  12 lebar layar.
- **`/contact/`:** label "WhatsApp Message / Visit anytime / Opening Times"
  diubah dari H6 menjadi **H3** (`ContactSection.tsx`). `custom.css` menyalin
  aturan live `.cf-rail__list.jsx-contact h6` untuk `h3`. Hasilnya H1 → H2 →
  H3. Sudah dicek: 0 beda di 12 lebar layar.
- **`/privacy-policy/` dan `/terms-and-conditions/`:** judul bagian (7 di
  tiap halaman) diubah dari H3 menjadi **H2** (`h2.look-h3`; ukuran 26px tetap
  dari inline style). Kotak "Hours of Operation" diubah dari H4 menjadi `div`,
  dan label Email / WhatsApp / Address di privacy dari H6 menjadi `div`.
  Hasilnya H1 → H2.
- **`/seminyak/day-spa/`:** 23 nama reviewer diubah dari H4 menjadi
  `div.look-h4`, sehingga lompatan H2→H4 hilang. Perubahan ini lewat prop
  `namesAsHeadings={false}` di `TreatmentTestimonials`, jadi 25 halaman lain
  yang memakai komponen itu masih H4. Kalau nanti semua halaman diubah, cukup
  balik default prop-nya. Ketiga halaman sudah dicek: 0 beda di 12 lebar
  layar.
- **Sisa heading, putaran 2 (5 Oktober).** Pemilik minta: "perbaiki kecuali
  footer dan faq di / dan /seminyak", blog tidak termasuk.
  - Nama reviewer di semua halaman treatment, Kuta, dan Villa menjadi
    `div.look-h4`. Prop `namesAsHeadings` di `TreatmentTestimonials`
    dihapus.
  - Label funfact (`Funfacts.tsx`: treatment, Kuta, Villa, outcall) menjadi
    `div.title.look-h3`.
  - Teks di atas foto FAQ (`FaqSection.tsx`) menjadi `div.look-h2`, kecuali
    di `/seminyak/` (prop `imageTitleAsHeading`). FAQ beranda (`home/Faq.tsx`)
    tidak diubah.
  - Couple-spa: durasi di bawah judul grup naik dari H3 ke H4 (`h4.look-h3`,
    `SessionOptions.tsx`). Halaman lain yang tidak memakai grup tetap H3.
  - Footer tetap H3.
  - Sudah dicek: 0 beda gaya dan posisi di 12 lebar layar untuk `/`,
    `/seminyak/`, outcall, Kuta, Villa, couple-spa, day-spa, balinese, dan
    contact. Dari 42 halaman, 33 sudah bersih. Sisanya 7 artikel blog (H3
    judul duplikat) serta dua H2 di FAQ `/` dan `/seminyak/`, yang memang
    sengaja dibiarkan.

## Tombol banner outcall (7 Oktober)

`/outcall-home-service-massage/` mendapat trafik pencarian yang bagus (GSC 3
bulan: "outcall massage bali", "outcall massage", "outcall massage ubud",
"nusa dua outcall massage", dan lain-lain). Pengunjungnya membandingkan harga
sebelum booking. Karena itu tombol "Book Now" di banner diganti dua tombol
baris seperti di hero beranda.

- **Book on WhatsApp** (catatan: +62 878-6317-5144) membuka `whatsappChatUrl`
  di tab baru.
- **View Price List** (catatan: "Home service prices") turun ke
  `#outcall-prices`, yaitu price list di halaman ini sendiri. Bukan ke
  `/seminyak/` seperti di beranda, karena harga outcall berbeda.
- `PageBanner` punya prop baru `actions`. Halaman lain tidak memakainya, jadi
  tetap memakai "Book Now" (dicek). CSS ada di `custom.css`
  (`.banner-two__actions`): kedua tombol berdampingan, dan di bawah 576px
  bertumpuk selebar layar. Baris jam buka tetap ada.
- Dari dua versi (putih seperti beranda, dan kaca), yang dipilih versi kaca
  dengan nuansa emas sesuai color guide: `className="row-btn--glass"` (CSS di
  `custom.css`). Latarnya kaca buram dengan tint emas #B88C35 24%, garis tepi
  emas, lingkaran ikon emas, dan teks putih. Saat hover tombol berubah menjadi
  tombol baris putih (teks dan garis emas), sesuai aturan rollover situs.
  Tanpa class itu `RowButton` kembali ke versi putih.
- `RowButton` kini membuat `<a>` biasa untuk link `#…`, supaya Lenis (desktop)
  atau CSS scroll-behavior (layar sentuh) yang menggulir. Dicek dengan klik
  nyata di 1440 dan 390px: halaman mendarat tepat di judul price list.
- Link "available treatments" di section kedua sebelumnya mengarah ke situs
  staging lama `https://spa-ten-ochre.vercel.app/#0` (masih aktif, tersalin
  dari live). Kini mengarah ke `#outcall-prices`.
- Tombol baris setinggi 66px, sehingga banner bertambah sekitar 20px di
  desktop. Di 1440×900 tombol berada di y 842–908, hampir sama dengan posisi
  "Book Now" di live, karena padding-top banner live 300px. Di laptop dengan
  viewport lebih pendek dari ±910px, tombol masih di bawah lipatan pertama.

## Draf: beranda v2 di `/home-v2/` (30 September)

Duplikat beranda dengan layout sedikit diubah; isi, warna, huruf dan dekorasi
tetap sama. Halaman ini `noindex` dan tidak ada di sitemap; `/` tidak berubah
(dicek `compare.mjs` 1440 + 390: geom 0, style 0).

- Rute: `src/app/(site)/home-v2/page.tsx`. Section yang diubah ada di
  `src/components/home-v2/`, sisanya memakai komponen beranda yang sama.
- CSS: `src/styles/home-v2.css`, semua aturan di bawah `.home-v2`.
- Perubahan: hero bergaya referensi pemilik (teks + tombol WhatsApp/Price
  List + 3 fakta berikon di kiri, foto `contact-1.webp` di kanan yang memudar
  ke krem; di HP foto di atas); slider 23 treatment diganti 5 kartu
  "Our Most-Loved Treatments" (Balinese, Thai, Sports, Hair Cream Bath,
  Manicure Pedicure — semuanya dari tab "Most Popular" di halaman outcall)
  dengan tombol "View All Treatments" ke `/seminyak/`; menu spa
  (`TreatmentMenu.tsx`) menampilkan harga di baris tiap treatment ("from
  159K"; harga tunggal tanpa "from"; couple dengan "2 pax" di bawahnya; add-on
  seperti "Additional Body Mask" tidak dihitung sebagai harga awal), dan harga
  + panah jadi satu tombol yang membuka daftar lengkap (animasi 0,25 detik,
  live 0,4); panah punya kolom sendiri di kanan, dan deskripsi + daftar yang
  terbuka berhenti di garis yang sama sehingga semua harga lurus (live di HP
  membiarkan daftar melebar ke bawah panah); ulasan dipindah ke antara menu dan paket, dan gambar nampan spa
  kini hanya di ulasan (di menu dulu tertimpa harga); intro
  "Looking for More Than One Treatment?" dilebur ke judul paket dua kolom;
  "What Makes Spa Bali Moon Different" jadi kartu 2×2 di samping judulnya.
  Di tablet/HP langkah booking jadi baris ringkas.
- Baris geser (`ScrollRow.tsx`): kartu "Most-Loved" (<992px) dan paket
  (<768px) bisa digeser dengan swipe, seret mouse, trackpad, atau tombol
  panah + titik di bawahnya. Snap per kartu hanya di layar sentuh (snap wajib
  membuat scroll trackpad selalu kembali ke kartu pertama). Baris diberi
  `data-lenis-prevent-horizontal` agar Lenis tidak menelan geseran ke samping.
  **Bug yang ditemukan pemilik di HP (30 September):** halaman tidak bisa
  digulir melewati baris ini dengan jari. Penyebabnya aturan Lenis di
  `live.css`, `.lenis [data-lenis-prevent-horizontal] { overscroll-behavior:
  contain }`: geseran vertikal yang dimulai di atas kartu tertahan di baris
  dan tidak diteruskan ke halaman. Perbaikan di `home-v2.css`:
  `overscroll-behavior-y: auto` (x tetap `contain`) untuk semua elemen
  ber-atribut itu di draf, plus `overflow-y: hidden` di tiap baris yang
  menggeser. Diuji dengan sentuhan jari asli (CDP `Input.dispatchTouchEvent`,
  390px, Lenis aktif): sebelum 0px, sesudah ~300px, sama dengan geseran di
  luar baris; geseran ke samping tetap menggeser kartu. Berlaku juga untuk
  slider 23 treatment dan tabel harga (Opsi B).
- Responsif dicek otomatis di 30 lebar (320–2560px): tidak ada scroll
  horizontal, teks yang saling tumpuk, atau harga yang keluar kartu di keempat
  tab menu.
- Font & tombol: tidak ada gaya huruf baru. Semua teks memakai class situs
  (`.section-header .sub-title/.title`, judul hero live, `h3`/`h6` slider lama,
  `.btn-two`; fakta hero = kartu "Spa Bali Moon" di About). Dicek dengan
  computed style vs `/` di 1920–390px. Yang beda hanya atas permintaan
  pemilik: "Learn More" emas, dan judul hero ("Our Seminyak Day Spa") kini
  hitam lembut #343434 (warna gelap yang sudah ada di palet situs), tebal 400
  (live 600), dengan bayangan teks tipis menggantikan bayangan gelap besar di
  belakangnya (sempat dicoba emas, pemilik memilih hitam). Harga di
  menu spa memakai gaya harga kartu paket (Literata 300 26px emas) dan
  "2 pax"-nya (`.pax-note`). Label "Seminyak · Since 2009" di kartu About
  ikut perubahan di beranda asli (lihat "Sengaja berbeda dari live").
- Untuk dipakai sebagai beranda: pindahkan isi `home-v2/page.tsx` ke
  `(site)/page.tsx` (metadata & JSON-LD beranda), lalu hapus rute draf.

### Pilihan yang sedang ditimbang pemilik: `/home-v2/options/`

Halaman `noindex` yang memajang tiap opsi dengan label, untuk dipilih pemilik:
- **Treatments · Opsi 1** (`options/AllTreatmentsSlider.tsx`): ke-23 halaman
  treatment sebagai kartu v2 dalam satu baris geser di semua lebar (4 kartu +
  sedikit kartu ke-5 di desktop), panah bergeser satu "layar", dan progress
  bar di antaranya.
- **Treatments · Opsi 2** (`options/AllTreatmentsGrid.tsx`): semua treatment
  sebagai tile ringkas (6 per baris di layar lebar) dengan filter All /
  Massage / Beauty; di bawah 992px tampil 6 dulu + tombol "Show All".
- **Price list · Opsi A** (`options/MenuDurations.tsx`): satu pilihan durasi
  (30 Mins / 1 Hr / 1.5 Hrs / 2 Hrs) di bawah tab mengubah semua harga
  sekaligus; treatment tanpa durasi itu memudar dengan "Not available".
  Beauty dan paket couple: harga di baris, varian di satu baris kecil (yang
  harganya sama digabung).
- **Price list · Opsi B** (`options/MenuTable.tsx`): tabel harga (baris =
  treatment, kolom = durasi) dua tabel berdampingan di desktop; Beauty
  sebagai kartu kecil berisi semua varian; paket couple sebagai tabel isi
  paket + harga.
- Bersama: `TreatmentCard.tsx`, `treatments.ts` (23 treatment; Hair Braiding
  dan Nail Art memakai foto dari halamannya sendiri, bukan foto Cream Bath /
  Manicure seperti slider live), `price.ts`, `MenuIntro.tsx`.
  `src/data/pages/home.ts` kini juga mengekspor `menuItem` di tiap
  `treatmentSlides` (tidak mengubah tampilan `/`).
- CSS opsi: `src/styles/home-v2-options.css`. Setelah pemilik memilih,
  pindahkan komponen + blok CSS-nya ke `/home-v2/` dan hapus sisanya.
- Opsi yang sama juga terpasang di beranda utuh (atas permintaan pemilik),
  semuanya `noindex`:
  - `/home-v3/` = Treatments Opsi 1 (slider) + Price list Opsi A (durasi).
  - `/home-v4/` = Treatments Opsi 2 (grid) + Price list Opsi B (tabel).
  Ketiga beranda memakai `HomeV2Layout.tsx`; hanya section treatments dan
  menu yang dioper sebagai slot, jadi bagian lain selalu sama.
- Umpan balik pemilik (30 September): harga Opsi A (pilih durasi) "awesome",
  slider 23 treatment (Opsi 1) "nice … it has all treatment" — keduanya ada
  di `/home-v3/`. Atas permintaan pemilik, judul slider di `/home-v3/` saja
  kini "Find Your Spa Treatment" (dari "Find the Treatment for You") dengan
  kicker "Massage & Beauty" (dari "Our Treatments"; teks kicker pilihan
  sendiri karena pemilik hanya minta diganti). `AllTreatmentsSlider` menerima
  `subTitle`/`title`; halaman opsi tetap teks lama.
- **Putaran berikutnya, khusus `/home-v3/` (30 September)**, semua di
  `src/styles/home-v3.css` (di bawah `.home-v3`, kelas dari prop `className`
  `HomeV2Layout`) dan prop komponen, sehingga v2/v4 tidak berubah:
  - teks slider: "23 massages and spa services, in-call or outcall." (kata
    pemilik "in call or out call", ejaan dirapikan: "outcall" seperti menu
    situs; sebelumnya "All 23 of our massages and services, at our Seminyak
    spa or as home service."; prop `text`, kini `ReactNode`). "in-call or
    outcall." tidak dipotong (`white-space: nowrap`), jadi di HP <380px
    barisnya patah di koma, bukan menyisakan "outcall." sendirian;
  - kicker About "Beyond Relaxation" terasa "too AI" bagi pemilik → "About
    Us" (pilihan sendiri, kata biasa untuk section About), hanya di
    `/home-v3/`: prop opsional `subTitle` di `home/About.tsx` lewat
    `aboutSubTitle` di `HomeV2Layout`; `/` tetap teks live;
  - switch durasi di price list ikut turun: menempel di bawah header selama
    daftar di-scroll ("change without scrolling up"), lepas bersama baris
    terakhir. Prop `sticky` di `MenuDurations` (hanya v3), CSS di akhir
    bagian Opsi A `home-v2-options.css`: section `overflow: clip` (live
    `hidden` mencegah sticky), `top` = tinggi header yang diukur komponen
    (`--v2-stick-top`: 68px HP, 73px tablet, 106px desktop, ~149–156px di
    lebar tempat nav desktop terbungkus dua baris); strip putih selebar layar
    + bayangan halus muncul saat menempel (`is-stuck`); di HP baris "Prices
    for" naik ke bawah header sehingga hanya switch yang tampak (strip 66px
    di bawah header 68px). Padding diimbangi margin negatif, jadi tata letak
    saat tidak menempel sama persis. Ganti durasi saat menempel tidak
    menggeser baris yang sedang dibaca (scroll anchoring). Setelah review
    desain: bayangan header dimatikan selama strip menempel (header + strip
    jadi satu blok putih, bayangan hanya di bawah strip); `is-stuck` lepas
    begitu switch sudah naik ke bawah header bersama baris terakhir (dulu
    tetap menyala sampai bawah halaman); latar strip mulai 2px di bawah
    header agar tidak ada garis tipis di layar 125%; layar pendek
    (≤500px, HP miring) strip + pill lebih ramping: header + strip 32–35%
    tinggi layar (sebelumnya 37–39%);
  - di bawah 992px dua kolom menu bersusun jadi satu daftar; live tidak
    memberi garis pemisah di baris terakhir tiap kolom, sehingga satu baris
    di tengah daftar tanpa garis. Kini baris itu bergaris seperti yang lain
    (`home-v2.css`, semua menu draf);
  - judul menu: "Browse Our Spa Menu" (dari "Browse Our Spa Treatments"),
    kicker "Price List" (dari "Our Spa Menu"; pemilik hanya minta diganti,
    teksnya pilihan sendiri) — prop `subTitle`/`title` di `MenuDurations` →
    `MenuIntro`;
  - FAQ: panah garis tipis tanpa lingkaran (`<Faq arrow="line" />`, slot
    `faq` di `HomeV2Layout`), berputar saat dibuka; nomor emas #B88C35
    (lihat di bawah), panah **abu** `var(--text-color)` #707070, abu teks
    situs (pemilik: "maybe these can be grey"; 4,95:1 di putih), tetap abu
    saat pertanyaannya jadi emas karena hover/dibuka;
  - jarak FAQ → banner penutup di HP (≤767px): 174px → 119px (padding bawah
    FAQ 52 → 20px, padding atas section penutup 89 → 66px). Desktop tetap
    340px mengikuti ritme section desktop;
  - pembanding emas A/B/C/D (sementara, di kartu "Different") sudah dipakai
    pemilik untuk memilih lalu dihapus. **Pemilik memilih B #B88C35** untuk
    seluruh `/home-v3/`, termasuk logo — hanya halaman ini (pilihan pemilik;
    halaman lain dan `/` tetap #A78627). Cara kerjanya, semua di
    `home-v3.css` bagian atas: variabel `--theme-color1`/`-rgb` ditimpa pada
    setiap `.lh` (header, menu HP, halaman, footer, tombol WhatsApp) lewat
    `body:has(.home-v3)`; ikon SVG ber-atribut `fill`/`stroke="#A78627"`
    ditimpa CSS; logo SVG (header, menu HP, footer), logo preloader, lotus
    `sbm.webp` (kartu About, watermark ulasan, lotus kecil di catatan paket
    dan banner penutup) diwarnai ulang dengan filter SVG `#v3-gold` (flood
    #b88c35 + alpha, didefinisikan di `home-v3/page.tsx`) sehingga bentuknya
    utuh; beberapa warna tetap di `live.css` (pencarian header, hover tombol
    telepon & menu HP → #987426, input/tombol newsletter footer) ditimpa
    satu per satu. Warna `rgba(167,134,39,…)` di `home-v2*.css` diganti
    `rgba(var(--theme-color1-rgb),…)` (v2/v4 tampil sama). Bunga kamboja dan
    logo Mastercard sengaja tidak diubah. Ditemukan dengan sweep 3 arah
    (literal sumber, aset, gaya terhitung per state) dan dicek ulang: 0 nilai
    emas lama di 5 state, logo header rgb(184,140,53) di v3 dan tetap
    rgb(167,134,39) di `/`. Verifikasi 3 agen: 0 emas lama di ±4.800 state
    hover/fokus/aktif per lebar, 0 kebocoran ke halaman lain (juga setelah
    navigasi klien; `compare.mjs` di `/` hanya selisih yang sudah dikenal),
    logo bersih di DPR 1/2/3. Dibiarkan: bila tiba di v3 lewat navigasi klien
    (mis. tombol Back), tombol "Book an Appointment" dan ikon telepon di
    header memudar ±0,25 detik dari emas lama ke baru, karena header tetap
    terpasang antar-halaman dan punya `transition: all .3s` dari live
    (mematikan transisi saat pindah halaman ikut mematikan animasi menu HP);
  - HP: harga + deskripsi menu masuk 16px dari tepi ("prices could still come
    in a bit");
  - catatan di bawah paket jadi kartu putih kecil bergaris emas tipis, lotus
    di atas, teks di tengah; jarak ke "Why It Matters" 98 → 60px di
    tablet/HP (desktop 163 → 120px).
- **FAQ draf** (`home-v2/Faq.tsx`, dipakai ketiga beranda draf; beranda asli
  `/` tetap FAQ live): pemilik merasa "jumbly" dan minta judul lebih kecil
  dengan kata kunci. Judul kini "Questions About Our Spa" (40px desktop /
  36px tablet / 26px HP; live "Everything You Need to Know" 55px / 30px).
  Nomor pertanyaan di kolom emas terpisah sehingga baris yang terbungkus
  lurus; tiap pertanyaan memakai panah lingkaran emas milik menu spa
  (live: kotak abu "−" dan "+" polos); pertanyaan Literata 20px/18px 500,
  jawaban Mulish 15px/14px (gaya deskripsi menu) yang lurus di bawah teks
  pertanyaan; buka/tutup beranimasi seperti menu, satu jawaban terbuka.
  Foto, kicker, dan jarak section tetap live.

## Yang belum beres

- **`/api/subscribe/` sudah sama dengan live sejak 2 Oktober.** Email disimpan
  ke Google Sheet lewat Apps Script (`GOOGLE_SHEET_WEBAPP_URL`), lalu email
  selamat datang dikirim lewat SendGrid (`SENDGRID_API_KEY`,
  `SENDGRID_FROM_EMAIL`, `BUSINESS_NAME`).
  - Nilainya disalin dari `.env.local` project lama.
  - Kunci SendGrid sudah dicek dengan sandbox mode.
  - Yang belum: isi keempat variabel di Vercel (project `spa-redesign`), lalu
    redeploy dan lakukan satu tes nyata.
- **Form kontak tidak mengirim email** — sama seperti live saat ini (mode
  WhatsApp). Bila nanti ada endpoint, logikanya di
  `src/components/sections/ContactSection.tsx`.
- **Admin blog: env Neon + R2 belum diisi di Vercel.** Lihat "Admin blog di
  `/admin/`".
- **Data lama hanya untuk metadata:** `src/data/treatments/*.ts` masih
  memuat teks halaman versi lama, padahal kini hanya judul/deskripsi/gambar
  SEO-nya yang dipakai. Bisa dipangkas. (`src/data/blog/*.ts` sudah dihapus:
  artikel kini dari database.)
- **Duplikasi harga:** `src/data/pricelist.ts` (dipakai data treatment lama),
  `src/data/pages/pricelist.ts` dan `src/data/pages/home-catalog.ts` memuat
  harga yang sama. Semuanya cocok dengan live, tapi sebaiknya disatukan.
- **±380 gambar desain Taman** masih ikut di `public/images` (folder `beauty`,
  `branding`, `gallery`, `packages`, `treatments`) dan perlu dibuang setelah
  ketahuan mana yang dipakai.
- **`public/icons/` (44 SVG, 240 KB) tidak dipakai lagi** — ikon kini dari
  subset Font Awesome milik live. Bisa dihapus.
