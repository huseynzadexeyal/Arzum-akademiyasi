# Buraxılış planı (domen, ünvan, şəkillər hazır olanda)

Sayt indi də olduğu kimi yerləşdirilə bilər: boş qalereya və adsız kollektiv kartları səliqəli görünür.
Aşağıdakıları hazır olduqca doldurun, hər biri 1-5 dəqiqədir. `npm run build` hələ nəyin qaldığını özü xəbərdarlıqla göstərir.

## 1. Domen alınanda (ən vacibi)
1. `.env.production.example` faylını `.env.production` adı ilə kopyalayın.
2. İçindəki ünvanı real domenlə əvəz edin, sonda `/` olmadan: `VITE_SITE_URL=https://arzumakademiya.az`
3. `npm run build`. İndən canonical, sitemap.xml, robots.txt və WhatsApp/Instagram önizləmə şəkli avtomatik yaranır.
4. Hosting panelində (Netlify, Cloudflare Pages, Vercel) domeni bağlayın, DNS qeydlərini panel göstərir. HTTPS avtomatik olur.
5. Google Search Console-da domeni əlavə edin, `sitemap.xml` göndərin. `index.html`-də hazır şərh edilmiş `google-site-verification` sətrini açıb kodu yazın.
6. Google Business Profile açın (Maps-da görünmək üçün ən güclü addım).

## 2. Dəqiq ünvan
`src/data/contact.js` → `mapQuery` sətrini dəqiq ünvanla əvəz edin (küçə, ev nömrəsi, rayon, Bakı), sonra yanındakı `// TODO` şərhini silin.
İstəsəniz `index.html`-dəki JSON-LD-də `streetAddress`, `src/data/i18n/az.js` və `ru.js`-də `addr` sahələrini də dəqiqləşdirin.

## 3. Kollektiv
`src/data/staff.js`: hər kart üçün `name`-ə real adı yazın, şəkli `public/photos/staff/` qovluğuna atın və `photo`-ya fayl adını yazın (məs. `'1.jpg'`). Şəkil kvadrat, 600 px, .jpg/.webp.
Valideyn razılığı olmadan uşaq şəkli və adı yerləşdirməyin.

## 4. Qalereya
Şəkil və videoları `src/assets/gallery/<albom>/` qovluğuna atın (`1.jpg`, `2.jpg`, `3.mp4` ...). Kod dəyişməyə ehtiyac yoxdur.
Yalnız şəkil olan albomlar saytda görünür. Şəkilləri əvvəlcədən 1600 px eninə və WebP formatına salın, videolar 20 MB-dan az olsun.

## 5. Vercel-ə yerləşdirmə
Layihədə `vercel.json` hazırdır (Vite aşkarlanır, təhlükəsizlik və keş başlıqları daxildir).
1. Layihəni GitHub-a yükləyin (əvvəl bir dəfə `npm install` işlədib yenilənmiş `package-lock.json`-u da commit edin).
2. vercel.com → Add New → Project → GitHub repozitoriyasını seçin → Deploy. Başqa ayar lazım deyil.
3. Domen alınana qədər Vercel `layihə.vercel.app` ünvanı verir. `VITE_SITE_URL`-i hələ **yazmayın**: səhv canonical Google üçün zərərlidir. Sayt bu halda canonical və sitemap olmadan işləyir.
4. Domen alınanda: Project → Settings → Domains → domeni əlavə edin və DNS qeydlərini domen qeydiyyatçısında yazın (Vercel dəqiq göstərir). Sonra Settings → Environment Variables → `VITE_SITE_URL=https://sizin-domen.az` əlavə edib Redeploy edin.
5. Hər `git push` avtomatik yeni versiya yerləşdirir. Alternativ: `npx vercel --prod` (terminaldan).
Qeyd: `public/_headers` yalnız Netlify/Cloudflare üçündür, Vercel onu istifadə etmir, onun əvəzi `vercel.json`-dur.

## Yoxlama siyahısı
- [ ] `.env.production` yaradıldı, build xəbərdarlığı yoxdur
- [ ] Telefonda sayt açıldı: zəng düyməsi, WhatsApp forması, AZ/RU keçidi, qaranlıq rejim
- [ ] Domen HTTPS ilə açılır, `https://domen/sitemap.xml` görünür
- [ ] Search Console-da sitemap göndərildi
- [ ] Instagram profilinə sayt linki yazıldı
