# Layihənin senior baxışı (kod, əlçatanlıq, performans, SEO)

Yoxlama: ESLint (react-hooks + jsx-a11y), axe-core (açıq/tünd tema, 1280px və 320px), brauzer testləri (Playwright), `npm audit`, i18n AZ/RU müqayisəsi, aktivlərin ölçüsü.

## Düzəldilənlər

| Sahə | Problem | Həll |
|---|---|---|
| Təhlükəsizlik | `npm audit`: Vite 5-də 1 yüksək + 1 orta zəiflik | Vite 7 + plugin-react 5, `engines: node >=20.19`, `.nvmrc = 22`. İndi 0 zəiflik |
| Performans/məxfilik | Şriftlər Google Fonts-dan (3-cü tərəf sorğusu, render-blokerdir, oflayn işləmir) | `@fontsource` ilə saytın özündən; yalnız latin, latin-ext (ə ğ ı ö ş ü ç) və kiril |
| Performans | `logo.png` 613 KB (600×600, 54 px göstərilir) | 360 px, 54 KB (görünüşdə fərq yoxdur) |
| Xəta | Pərdə tez bağlananda video `AbortError` səbəbilə səssiz **yenidən başlayırdı** | Yalnız `NotAllowedError`-da səssiz fallback |
| Xəta | "Yenidən göstər"/dil dəyişməsi zamanı vəziyyət effektin içində sinxron sıfırlanırdı (React xəbərdarlığı, artıq render) | Sıfırlama cleanup-a köçürüldü |
| Xəta | Keçid zamanı eyni nağıla klik köhnə nağılı bir anlıq açırdı | `tale === sel` şərti |
| Xəta | `onAnimationEnd` uşaq SVG animasiyalarından da işləyirdi | `e.target === e.currentTarget` |
| Performans | `pointermove` hər pikseldə stil yeniləyirdi (kukla gözləri) | rAF ilə kadrda 1 dəfə, toxunuşda və bağlı pərdədə işləmir |
| Xəta | `useInViewOnce` renderdə `ref` yazırdı | effektə köçürüldü |
| Xəta | Konfeti: təsadüfi `id` toqquşa bilərdi, timeout təmizlənmirdi | sayğac + cleanup |
| Əlçatanlıq | Kontrast: qırmızı/yaşıl/mavi/sarı zona başlıqları və nişanları < 4.5:1 | `--h` (başlıq) və `--c` (fon) ayrıldı, tünd temada ayrıca |
| Əlçatanlıq | Zəng paneli heç bir landmark-da deyildi | `<aside aria-label>` |
| Əlçatanlıq | Lightbox: fokus tələsi yox, bağlananda fokus qayıtmırdı, düymə adları ingiliscə | fokus tələsi + bərpa, AZ/RU etiketlər |
| Əlçatanlıq | Nağıl replikaları yalnız vizual idi | gizli canlı region (`role=status`) |
| Əlçatanlıq | `prefers-reduced-motion`: video özü başlayır, konfeti səpilir | video başlamır, konfeti yoxdur |
| Forma | `autocomplete` yox, xəta sahəsi `aria-describedby`-sız, fokus səhv sahəyə getmirdi, WhatsApp bloklananda "göndərildi" yazılırdı | hamısı düzəldildi + ehtiyat link, yaş yalnız tam ədəd, `60` prefiksi (Naxtel) |
| Məzmun/təhlükəsizlik | `Memorial`: `http://` ilə dövlət saytından şəkil (qarışıq məzmun, hotlink) | silindi, `width/height/lazy` |
| i18n | Footer-də "Bakı" rus dilində də Azərbaycanca idi, dil qrupu `aria-label="Language"` | `t.city`, `t.langLabel` |
| Keyfiyyət | Lint quraşdırılmamışdı | `npm run lint` (0 xəta). Dekorativ klik-lərə izahlı `eslint-disable` |
| Buraxılış | Unudulan şeylər səssiz qalırdı | `npm run build` indi xəbərdarlıq verir (aşağıda) |

Nəticə: axe-core 4 konfiqurasiyada 0 pozuntu, konsol və şəbəkə xətası 0, 320 px-də üfüqi scroll yoxdur, AZ/RU açarları tam uyğundur.

## Buraxılışdan əvvəl sizin etməli olduqlarınız (build bunları xəbərdar edir)

1. **Kollektiv (`src/data/staff.js`)**: hələ `Ad Soyad` nümunələridir və sayt canlıda belə görünür. Real ad, vəzifə və şəkillərlə (`public/photos/staff/1.jpg`...) əvəz edin. Şəkil olmayanda hər kart üçün 404 sorğusu gedir.
2. **Ünvan (`src/data/contact.js`)**: `mapQuery` dəqiq ünvanla əvəz olunmayıb. Xəritə və yol göstərişi buna baxır.
3. **Domen**: `.env.production` faylında `VITE_SITE_URL=https://...`. Bunsuz canonical, sitemap və sosial önizləmə yaranmır.
4. **Qalereya**: `src/assets/gallery/<albom>/` boşdur, bütün albomlar "tezliklə" göstərir.
5. **Google**: Search Console (sitemap göndərin) və Google Business Profile (Maps).

## Məsləhətlər (növbəti addımlar)

- **Forma**: indi məlumat yalnız WhatsApp mesajı kimi gedir, saytda saxlanmır (yaxşıdır, məxfilik riski yoxdur). Müraciətlərin sayını izləmək istəsəniz, sonradan Formspree/Google Forms kimi yüngül xidmət əlavə edin.
- **Analitika**: məxfilik dostu və cookie-siz (Plausible/Umami). Hansı bölmənin oxunduğunu görərsiniz.
- **Yerləşdirmə (hosting)**: Netlify/Vercel/Cloudflare Pages. Başlıqlar: `Cache-Control: public, max-age=31536000, immutable` yalnız `/assets/*` üçün, `index.html` üçün `no-cache`. Əlavə: `Content-Security-Policy` (indi xarici resurs yalnız Google Maps iframe-dir) və `X-Content-Type-Options`.
- **Video (5 MB)**: yalnız Cırtdan seçiləndə yüklənir, bu düzgündür. Səhifə trafikindən narahatsınızsa, daha aşağı bitreytlə (`-crf 28`) 2-3 MB-a salmaq olar.
- **Qalereya şəkilləri**: yükləməzdən əvvəl 1600 px eninə və WebP/AVIF formatına salın (Vite onları olduğu kimi paketləyir).
- **Test və CI**: `npm run lint && npm run build` GitHub Actions-da hər push-da işləsin. Vitest ilə `validatePhone` və i18n uyğunluq testləri ucuz və faydalıdır.
- **Kod**: `Puppets.jsx` böyüyür (6 nağıl, 25+ personaj). Bir də böyüsə, nağıl başına fayla bölün (`puppets/redhood.jsx` ...).
- **Rus mətni**: "шехид" yazılışını rusdilli bir şəxsə yoxlatdırın.
- **Uşaq məxfiliyi**: saytda uşaq şəkilləri və adları yerləşdirəcəksinizsə, valideyn razılığını yazılı alın.
