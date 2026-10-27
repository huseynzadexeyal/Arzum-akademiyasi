# Arzum Akademiya

React + Vite + CSS Modules + Framer Motion.

```bash
npm install
npm run dev
```

## Struktur

```
src/
├── main.jsx                  giriş nöqtəsi
├── App.jsx                   səhifənin yığılması
├── styles/global.css         dəyişənlər (rənglər, tema), reset, body
├── context/AppContext.jsx    dil + tema (useApp)
├── hooks/                    useDesktop
├── utils/                    cx, storage, dom
├── data/
│   ├── contact.js            telefon, WhatsApp, xəritə, Instagram
│   └── i18n/ (az.js, ru.js)  bütün mətnlər
└── components/
    ├── layout/               Nav, Footer, CallBar, TopStripe, Trail
    ├── ui/                   Button, Section, Lead, Logo, Confetti (təkrar istifadə)
    └── sections/             Hero, Activities, Events,
                              Memorial, Memory, Gallery, Enroll, Find
```

Hər komponent öz qovluğunda: `Name.jsx` + `Name.module.css` + `index.js`.
İmport: `@/components/...` (alias `@` = `src`).

## Şəkillər
`public/photos/` qovluğuna qoyun: `1.jpg … 6.jpg` (qalereya) və `vusal.jpg` (şəhidin şəkli).

## Dizayn
- Şriftlər: **Unbounded** (başlıqlar) + **Onest** (mətn), `index.html`-də Google Fonts ilə yüklənir.
- Rənglər və ümumi dəyişənlər: `src/styles/global.css`.
- Forma dili: həndəsi fiqurlar — dairə, səkkizbucaqlı, altıbucaqlı, yarpaq (Activities, Gallery), loqo: `ui/Logo` (Nav, Badge; şəkil `public/logo.png`), markiz kənarı (Hero).
- Bölmə fonları: `ui/Section/Section.module.css` (`tone` prop).
