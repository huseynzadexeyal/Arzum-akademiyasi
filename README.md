# Arzum Akademiya

Şəhid Vüsal Məmmədov adına Uşaq İnkişaf Akademiyasının saytı.
**React 18 + Vite 5 + CSS Modules + Framer Motion.** Mobil-birinci dizayn, AZ/RU dil, avtomatik işıqlı/qaranlıq rejim.

## Başlamaq

```bash
npm install
npm run dev       # inkişaf: http://localhost:5173
npm run build     # istehsal versiyası → dist/
npm run preview   # build olunmuş saytı yerli yoxlamaq üçün
```

Node 18+ lazımdır (`.nvmrc`: 20).

## Məzmunu necə dəyişmək olar (kod bilmədən)

| Nəyi dəyişmək istəyirsiniz | Hansı fayl / qovluq |
| --- | --- |
| Bütün mətnlər (AZ / RU) | `src/data/i18n/az.js`, `ru.js` |
| Telefon, WhatsApp, Instagram, xəritə ünvanı | `src/data/contact.js` |
| Müəllim kollektivi (ad, vəzifə) | `src/data/staff.js` |
| Müəllim şəkilləri | `public/photos/staff/1.jpg, 2.jpg ...` |
| Bayram şəkilləri və videoları | `src/assets/gallery/<albom>/` (aşağıya baxın) |
| Kukla teatrı: nağıl adı, təsvir, replikalar | `thTales` siyahısı, `az.js` və `ru.js` |
| Kukla teatrı: personaj emojiləri, dekor | `src/data/theatre.js` |
| Fəaliyyət kartlarının ikon və rəngləri | `src/data/activities.js` |
| Rənglər, şriftlər, tema dəyişənləri | `src/styles/global.css` |

### Qalereya (bayram albomları)
Şəkil və videoları uyğun qovluğa atmaq kifayətdir, **kodu dəyişmək lazım deyil**:

```
src/assets/gallery/
├── yeni-il/      Yeni il
├── mart-8/       8 Mart
├── ramazan/      Ramazan bayramı
├── novruz/       Novruz
├── iyun-1/       1 İyun
├── payiz/        Payız bayramı
├── zefer/        Zəfər Günü
├── ad-gunleri/   Ad günləri
└── kukla/        Kukla teatrı
```

Şəkil: `.jpg .png .webp` · Video: `.mp4 .webm`. Fayllar adına görə sıralanır (`1.jpg, 2.jpg, 3.mp4`),
ilk şəkil albomun üz qabığı olur. Videoları əvvəlcədən sıxın (tövsiyə: 20 MB-dan az).
Yeni albom əlavə etmək üçün `src/data/albums.js`-ə sətir, `az.js`/`ru.js`-dəki `albums` siyahısına ad əlavə edin (eyni sıra ilə).

## Layihənin strukturu

```
src/
├── main.jsx                 giriş nöqtəsi
├── App.jsx                  səhifənin yığılması (bölmələrin sırası)
├── styles/global.css        rəng dəyişənləri, tema, reset, ümumi qaydalar
├── context/AppContext.jsx   dil + tema (useApp)
│
├── data/                    MƏZMUN (komponentlərdən ayrı)
│   ├── i18n/                az.js, ru.js — bütün mətnlər
│   ├── nav.js               bölmə id-ləri (SECTION), menyu (NAV_LINKS), dillər
│   ├── contact.js           telefon, WhatsApp, xəritə, Instagram
│   ├── staff.js             müəllim kollektivi
│   ├── albums.js            bayram albomları (fayllar avtomatik tapılır)
│   ├── theatre.js           kukla teatrı personajları və dekorları
│   └── activities.js        fəaliyyət ikonları və rəngləri
│
├── hooks/                   təkrar istifadə olunan məntiq
│   ├── useTheme.js          avtomatik / işıqlı / qaranlıq rejim
│   ├── useScrollSpy.js      menyuda aktiv bölmə
│   ├── usePauseOffscreen.js ekrandan çıxan bölmələrdə animasiyanı dayandırır
│   ├── useInViewOnce.js     ekranda ilk görünəndə bir dəfə işə düşür
│   └── useDesktop.js        masaüstü / mobil
│
├── utils/                   storage, sun (gün çıxımı/batımı hesabı), dom, cx
│
└── components/
    ├── layout/              Nav, Footer, CallBar, SkipLink, TopStripe, Trail
    ├── ui/                  Button, Section, Lead, Logo, Icon, Confetti, ErrorBoundary
    └── sections/            Hero, Activities, Theatre, Staff, Memorial,
                             Memory, Gallery (+Lightbox), Enroll, Find
```

**Qaydalar**
- Hər komponent öz qovluğunda: `Name.jsx` + `Name.module.css` + `index.js`.
- Mətn və məlumat `data/`-da, komponentlərdə yalnız görünüş və davranış olur.
- Import: `@/...` (alias `@` = `src`). Bölmə id-ləri yalnız `SECTION` vasitəsilə yazılır.
- Yeni bölmə: `components/sections/X/` yarat → `App.jsx`-ə əlavə et → `nav.js`-də `SECTION` və `NAV_LINKS` sırasına yaz → `i18n`-də `nav` açarı əlavə et.

## Əsas xüsusiyyətlər
- **Avtomatik tema:** gün batanda qaranlıq (günəş yerinə ay), gün çıxanda işıqlı. Hesab Bakı koordinatları ilə (`utils/sun.js`), internet tələb etmir. Menyudakı düymə: avtomatik → işıqlı → qaranlıq.
- **Mobil:** sürüşən bölmə menyusu (aktiv bölmə vurğulanır), üzən zəng/WhatsApp kartı (`CallBar`).
- **Performans:** ekranda olmayan bölmələrdə animasiyalar dayanır, ağır `blur`/`blend` effektləri yoxdur, şəkillər lazy-yüklənir.
- **Əlçatanlıq:** "Əsas məzmuna keç" linki, `aria-*` atributları, `prefers-reduced-motion` dəstəyi.
- **SEO:** başlıq/təsvir (dilə görə), canonical, Open Graph + önizləmə şəkli, `Preschool` strukturlaşdırılmış məlumatı, statik məzmun, `sitemap.xml`, `robots.txt`.

## SEO (Google-da görünmək)
Texniki SEO hazırdır. Domen alandan sonra `.env.example` faylını `.env.production` kimi kopyalayıb `VITE_SITE_URL` yazın, sonra Google Search Console və Google Business Profile addımlarını edin. Ətraflı təlimat: **[SEO.md](SEO.md)**.

## Yerləşdirmə (deploy)
`npm run build` → `dist/` qovluğunu istənilən statik hostinqə yükləyin (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
Netlify/Vercel üçün: build command `npm run build`, publish directory `dist`.
`sitemap.xml` və `robots.txt` build zamanı avtomatik yaranır (`VITE_SITE_URL` verilibsə, `vite.config.js`-dəki `seoPlugin`).

## Dizayn
- Şriftlər: **Unbounded** (başlıqlar) + **Onest** (mətn), Google Fonts.
- Forma dili: həndəsi fiqurlar (dairə, səkkizbucaqlı, yarpaq), markiz kənarı, bayraq rəngləri (mavi / qırmızı / yaşıl).
- Bölmə fonları: `components/ui/Section/Section.module.css` (`tone` prop).
