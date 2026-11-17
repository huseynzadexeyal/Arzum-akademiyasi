import { describe, expect, it } from 'vitest'
import { T } from '@/data/i18n'
import { PUPPETS, PROPS } from '@/data/theatre'
import { ICONS } from '@/data/activities'
import { NAV_LINKS } from '@/data/nav'
import { staff } from '@/data/staff'

// Açar və massiv uzunluqlarının "forma"sını çıxarır (mətnin özünü yox)
const shape = (v) => (Array.isArray(v) ? v.map(shape) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, shape(x)])) : typeof v)

describe('i18n', () => {
  it('AZ və RU açarları və massiv uzunluqları eynidir', () => {
    expect(shape(T.ru)).toEqual(shape(T.az))
  })
  it('boş mətn yoxdur', () => {
    const empties = []
    const walk = (v, path) => {
      if (typeof v === 'string') { if (!v.trim()) empties.push(path) } else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => walk(x, `${path}.${k}`))
    }
    for (const [lang, t] of Object.entries(T)) walk(t, lang)
    expect(empties).toEqual([])
  })
  it('FAQ cavablarında {tel} yerlər uyğundur', () => {
    const count = (t) => t.faq.map(([, a]) => a.split('{tel}').length - 1)
    expect(count(T.ru)).toEqual(count(T.az))
  })
})

describe('məlumat uyğunluğu', () => {
  it('nağıl sayı: mətn, kuklalar və dekorlar eyni sayda', () => {
    for (const t of Object.values(T)) {
      expect(t.thTales).toHaveLength(PUPPETS.length)
      expect(PROPS).toHaveLength(PUPPETS.length)
    }
  })
  it('replikadakı personaj nömrələri mövcuddur', () => {
    for (const t of Object.values(T)) {
      t.thTales.forEach(([, , lines], i) => {
        for (const [who] of lines) expect(who).toBeLessThan(PUPPETS[i].length)
      })
    }
  })
  it('fəaliyyət kartları ikon sayına uyğundur', () => {
    for (const t of Object.values(T)) expect(t.acts).toHaveLength(ICONS.length)
  })
  it('menyu açarları hər dildə var', () => {
    for (const t of Object.values(T)) for (const [, k] of NAV_LINKS) expect(t.nav).toHaveProperty(k)
  })
  it('kollektivdə hər vəzifə AZ və RU dilindədir', () => {
    for (const p of staff) expect(Object.keys(p.role)).toEqual(expect.arrayContaining(['az', 'ru']))
  })
})
