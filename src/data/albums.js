// Bayram albomları. Şəkil və video əlavə etmək üçün fayllarınızı
// src/assets/gallery/<qovluq>/ içinə atmaq kifayətdir (kodu dəyişmək lazım deyil).
// Şəkil: .jpg .png .webp   Video: .mp4 .webm   Fayllar ad üzrə (1, 2, 3...) sıralanır.
// Albomların mətnləri (ad, tarix) i18n fayllarında `albums` siyahısındadır, eyni sıra ilə.
const files = import.meta.glob(
  '/src/assets/gallery/*/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,mov,m4v,JPG,JPEG,PNG,WEBP,MP4,MOV}',
  { eager: true, query: '?url', import: 'default' },
)

const VIDEO = /\.(mp4|webm|mov|m4v)$/i
const collator = new Intl.Collator(undefined, { numeric: true })

const itemsOf = (slug) =>
  Object.entries(files)
    .filter(([path]) => path.includes(`/gallery/${slug}/`))
    .sort(([a], [b]) => collator.compare(a, b))
    .map(([path, src]) => ({ type: VIDEO.test(path) ? 'video' : 'photo', src }))

export const ALBUMS = [
  { slug: 'yeni-il', emoji: '🎄' },
  { slug: 'mart-8', emoji: '💐' },
  { slug: 'ramazan', emoji: '🌙' },
  { slug: 'novruz', emoji: '🌱' },
  { slug: 'iyun-1', emoji: '🎈' },
  { slug: 'payiz', emoji: '🍂' },
  { slug: 'zefer', emoji: '🇦🇿' },
  { slug: 'ad-gunleri', emoji: '🎂' },
  { slug: 'kukla', emoji: '🎭' },
].map((a) => ({ ...a, items: itemsOf(a.slug) }))
