# Google-da görünmək (SEO) təlimatı

Saytın texniki SEO hissəsi hazırdır. Amma **kodla 1-ci yerə çıxmaq zəmanəti vermək olmur**: Google sıralamanı sayta, Google Maps profilinə, rəylərə və rəqiblərə baxaraq həftələr-aylar ərzində müəyyən edir. Aşağıdakı addımları ardıcıl etsəniz, "Binəqədi" üzrə yerli axtarışlarda yuxarı çıxma şansı ən yüksək olur.

## 1. Saytın ünvanını verin (ən vacib texniki addım)
Domen alıb (məs. `arzumakademiya.az`) yerləşdirəndən sonra:

1. `.env.example` faylını `.env.production` adı ilə kopyalayın.
2. İçində `VITE_SITE_URL=https://sizin-domen.az` yazın (sonda `/` olmasın).
3. `npm run build` edin.

Bu zaman sayt avtomatik olaraq `canonical`, `og:url`, `og:image`, `sitemap.xml` və `robots.txt` yaradır.
Ünvan verilməyibsə, bu teqlər çıxarılır (səhv ünvan Google-a zərər verər).
Sayt mütləq **https** ilə açılmalıdır.

## 2. Google Search Console (pulsuz, məcburi)
1. https://search.google.com/search-console → "Add property" → domeninizi əlavə edin.
2. Təsdiq üçün `index.html`-dəki şərhdə olan `google-site-verification` sətrini açın (`<!-- -->` işarələrini silin), kodu yazın, saytı yenidən yerləşdirin.
3. "Sitemaps" bölməsində `sitemap.xml` yazıb göndərin.
4. "URL Inspection" ilə əsas ünvanı yoxlayıb "Request indexing" basın.

Google adətən bir neçə gün-həftəyə saytı indeksləyir.

## 3. Google Business Profile (Google Maps): Binəqədi üzrə ən güclü vasitə
"Şəhid Vüsal Məmmədov adına bağça Binəqədi" kimi axtarışlarda Google əvvəlcə **xəritədəki 3 nəticəni** göstərir. Oraya düşmək üçün:

1. https://business.google.com → biznesi yaradın: ad **Arzum Akademiya**, kateqoriya **uşaq bağçası** (əlavə: uşaq inkişaf mərkəzi / təhsil mərkəzi).
2. Ünvan, telefon (051 429 65 63) və sayt ünvanı **saytdakılarla hərfi-hərfinə eyni** olsun (Footer, Google, Instagram, kataloqlar).
3. İş saatları, xidmətlər (məktəbə hazırlıq, rəsm, rəqs, kukla teatrı), real şəkillər (bağça, otaqlar, bayramlar) əlavə edin.
4. Poçt və ya telefonla təsdiqləyin.
5. **Valideynlərdən rəy istəyin** (5 ulduz, mətnli). Rəylərin sayı və keyfiyyəti yerli sıralamada böyük rol oynayır. Hər rəyə cavab yazın. Saxta rəy yazmayın, Google cəzalandırır.

## 4. Axtarış sözləri və saytda harada işlənib
| Axtarış | Harada var |
| --- | --- |
| Binəqədi bağça / Arzum Akademiyası / Şəhid Vüsal Məmmədov adına bağça | başlıq (`<title>`), təsvir, ilk başlıq (kicker), "Bizi Binəqədidə tapın" mətni, schema (`alternateName`) |
| Binəqədi uşaq inkişaf mərkəzi | başlıq, təsvir, schema, statik məzmun |
| Binəqədi məktəbə hazırlıq | "Fəaliyyət" bölməsi, təsvir, schema |
| uşaq rəsm / rəqs dərnəyi Binəqədi | "Fəaliyyət" bölməsi, schema |
| kukla teatrı uşaqlar üçün Bakı | "Kukla teatrı" bölməsi |
| Bizi Binəqədidə tapın | ünvan bölməsinin başlığı, Footer |

Mətnləri `src/data/i18n/az.js` və `ru.js`-də dəyişə bilərsiniz. Açar sözləri süni şəkildə təkrarlamayın (Google bunu pis qiymətləndirir), təbii cümlələr yazın.
**Bir şeyi yoxlayın:** saytda "bağça" sözünü işlətmişəm (loqoda "BAXÇA" yazılıb). Rəsmi statusunuz fərqlidirsə (məs. yalnız inkişaf mərkəzi), `az.js`-dəki `title`, `desc`, `kicker` və `index.html`-dəki eyni mətnləri düzəldin.

## 5. Digər güclü addımlar
- **Instagram:** profilin təsvirində sayt linki olsun, saytda Instagram linki artıq var. Hər paylaşımda "Binəqədi" yazın.
- **Yerli kataloqlar və xəritələr:** Bakı üzrə uşaq bağçaları/təhsil kataloqlarına, 2GIS, Yandex Xəritə, Apple Maps kimi xəritələrə eyni ad-ünvan-telefonla qeydiyyatdan keçin. Hər biri sayta keyfiyyətli keçid verir.
- **Yerli keçidlər:** Binəqədi icma səhifələri, valideyn qrupları, xəbər saytları bayram tədbirləriniz haqqında yazanda saytın linkini versin.
- **Yeni məzmun:** bayram şəkilləri və videoları qalereyaya əlavə edin. Zaman-zaman "Məktəbə hazırlıq nədir?", "Uşaq bağçası seçərkən nəyə baxmalı?" kimi qısa məqalələr (ayrı səhifə) çox köməkçi olur.
- **FAQ:** "Neçə yaşdan qəbul edirsiniz?", "Qiymət?", "İş saatları?" kimi real sualları cavablarla əlavə edin (cavabları siz verməlisiniz, mən uydurmamışam).
- **Sürət və mobil:** sayt mobil üçün sürətli işləyir. Qalereyaya yükləyəcəyiniz şəkil/videoları sıxın.

## 6. Nəticəni izləmək
Search Console → "Performance": hansı sözlərlə neçə nəfərin sayta girdiyi, orta yer. 4-8 həftə sonra baxın, ona görə mətnləri yaxşılaşdırın.

## Texniki olaraq saytda artıq edilənlər
- Dəqiq başlıq və təsvir (AZ/RU dilə görə dəyişir), `canonical`, Open Graph (WhatsApp/Instagram/Facebook önizləməsi üçün 1200×630 şəkil).
- `Preschool` / `ChildCare` strukturlaşdırılmış məlumatı (ad, ünvan, telefon, xidmətlər, Binəqədi/Bakı).
- JavaScript yüklənməmiş halda da axtarış robotlarının oxuya biləcəyi statik məzmun (`index.html`).
- Düzgün başlıq iyerarxiyası (bir `h1`, bölmələr `h2`), `address` teqi, mobil uyğunluq, `lang` atributu, `robots.txt` + `sitemap.xml`.

## Məhdudiyyət
Sayt tək səhifəlidir və dil dəyişimi JavaScript ilə edilir. Gələcəkdə daha yüksək nəticə üçün hər xidmət üçün ayrı səhifə (məs. `/mektebe-hazirliq`, `/kukla-teatri`) və hər dil üçün ayrı ünvan (`/ru`) yaratmaq lazımdır. Bu, ayrıca işdir.
