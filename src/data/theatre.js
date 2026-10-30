// Kukla teatrının personajları və dekorları. Nağılların mətni və replikaları i18n-dədir (`thTales`),
// sıra eynidir: PUPPETS[i], PROPS[i] və t.thTales[i] eyni nağıla aiddir.
// Hər nağılın kuklaları (sıra i18n-dəki dialoqdakı nömrələrə uyğundur)
// e: emoji, k: SVG personaj (Puppets.jsx), o: səhnədə soldan-sağa sıra, bun: Qoğal, size: ölçü (1 = normal)
export const PUPPETS = [
  [{ k: 'hood', o: 1 }, { k: 'wolf', o: 0, size: 1.06 }, { k: 'granny', o: 2, size: 0.96 }], // Qırmızı papaq (afişadakı sıra: canavar, qız, nənə)
  [{ k: 'tom', o: 1, size: 0.8 }, { k: 'elder', o: 0 }, { k: 'giant', o: 2, size: 1.2 }], // Cırtdan (sıra: ağsaqqal, Cırtdan, div)
  [{ k: 'bun', o: 2, size: 0.8 }, { k: 'rabbit', o: 0, size: 0.98 }, { k: 'wolfy', o: 1, size: 1.04 }, { k: 'fox', o: 3, size: 1.02 }], // Qoğal (afişadakı sıra: dovşan, canavar, Qoğal, tülkü)
  [{ k: 'roach', size: 0.96 }, { k: 'mouse', size: 0.96 }, { k: 'frog', size: 1 }, { k: 'cat', size: 1 }], // Tıq-tıq xanım
  [{ k: 'turtle', o: 1, size: 1.1 }, { k: 'hare', o: 0, size: 1.05 }],   // Tısbağa və dovşan (dovşan solda, tısbağa finişə yaxın)
  [{ k: 'cinder', o: 1, size: 1.05 }, { k: 'prince', o: 2 }, { k: 'fairy', o: 0 }], // Zoluşka (sıra: pəri, Zoluşka, şahzadə)
]
export const face = (p) => (p.bun ? '🥯' : p.e)  // SVG personajlar (p.k) üçün Puppet head rejimi işlədilir

// Dekorlar: [emoji, soldan %, aşağıdan %, ölçü(rem)]
export const PROPS = [
  [], // Qırmızı papaq: dekor RedHoodScene SVG-sidir
  [], // Cırtdan: dekor CirtdanScene SVG-sidir
  [], // Qoğal: dekor QogalScene SVG-sidir
  [], // Tıq-tıq xanım: dekor TiqScene SVG-sidir
  [], // Tısbağa və dovşan: dekor RaceScene SVG-sidir
  [], // Zoluşka: dekor BallScene SVG-sidir
]
