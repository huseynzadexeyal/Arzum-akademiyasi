# Saytın məzmununu necə dəyişmək olar (akademiya işçisi üçün)

Kodu bilmək lazım deyil: aşağıdakı fayl və qovluqlara toxunmaq kifayətdir. Dəyişiklikdən sonra sayt yenidən yerləşdirilməlidir (texniki şəxs `npm run build` edib `dist` qovluğunu yükləyir).

## 1. Şəkil və videolar (qalereya)
- Qovluq: `src/assets/gallery/<albom>/`. Albomlar: `yeni-il`, `mart-8`, `ramazan`, `novruz`, `iyun-1`, `payiz`, `zefer`, `ad-gunleri`, `kukla`.
- Faylları ad ilə nömrələyin: `1.jpg`, `2.jpg`, `3.mp4`. İlk şəkil albomun üz qabığı olur.
- Format: şəkil `.jpg/.png/.webp`, video `.mp4/.webm`. Videolar 20 MB-dan az, şəkillər 1600 px enində olsun.
- **Uşaq şəkillərini yalnız valideynin razılığı ilə yerləşdirin.**

## 2. Müəllim kollektivi
- Fayl: `src/data/staff.js`. Hər sətirdə `name` (ad), `role` (vəzifə, AZ və RU).
- Şəkil: `public/photos/staff/` qovluğuna `1.jpg`, `2.jpg`... atın (sətirdəki `photo` adı ilə eyni olsun). Şəkil yoxdursa emoji görünür.

## 3. Telefon, WhatsApp, ünvan, Instagram
- Fayl: `src/data/contact.js`.
- `mapQuery` sahəsinə dəqiq ünvanı (küçə, bina, rayon, Bakı) yazın: xəritə və "yol göstəriş" buna baxır.
- Telefon dəyişəndə saytın hər yerində (zəng düyməsi, FAQ, qeydiyyat) avtomatik yenilənir.

## 4. Mətnlər (Azərbaycan və rus dilində)
- Fayllar: `src/data/i18n/az.js` və `src/data/i18n/ru.js`. İki fayldakı **açarlar və siyahı uzunluğu eyni olmalıdır**.
- **Tez-tez verilən suallar**: `faq` siyahısı. Hər sual `['Sual', 'Cavab']` formasındadır. Cavabda `{tel}` yazılan yerdə telefon nömrəsi link kimi görünür.
- **Yaddaş günləri**: `mdays` siyahısı: `['Tarix', 'Başlıq', 'Mətn']`.
- Alboma ad və tarix: `albums` siyahısı (qovluqların sırası ilə eyni).

## 5. Qiymət və iş saatları
Saytda hələ yazılmayıb (FAQ yalnız zəng etməyi tövsiyə edir). Yazmaq istəsəniz, `faq`-da "Qiymət və iş saatları necədir?" sualının cavabını hər iki dildə dəyişin.

## Yoxlama (texniki şəxs üçün)
```
npm install
npm run lint     # kod yoxlaması
npm run build    # istehsal versiyası, çatışmayan məzmun barədə xəbərdarlıq verir
```
