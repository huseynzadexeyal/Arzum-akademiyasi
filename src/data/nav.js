// Bölmə id-ləri bir yerdə saxlanır: id dəyişəndə menyu, linklər və bölmələr birlikdə uyğunlaşır.
export const SECTION = {
  top: 'top',
  activities: 'fealiyyet',
  theatre: 'teatr',
  staff: 'kollektiv',
  memory: 'yaddas',
  gallery: 'qalereya',
  enroll: 'qeydiyyat',
  find: 'xerite',
}

// Menyu: [bölmə id-si, i18n-dəki `nav` açarı]. Sıra səhifədəki bölmə sırası ilə eyni olmalıdır.
export const NAV_LINKS = [
  [SECTION.activities, 'act'],
  [SECTION.theatre, 'thr'],
  [SECTION.staff, 'staff'],
  [SECTION.memory, 'mem'],
  [SECTION.gallery, 'gal'],
  [SECTION.enroll, 'enr'],
]

export const LANGS = ['az', 'ru']
