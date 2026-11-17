import { describe, expect, it } from 'vitest'
import { isValidPhone, validate } from './validate'
import { T } from '@/data/i18n'

describe('isValidPhone', () => {
  it.each(['051 429 65 63', '+994514296563', '994514296563', '0514296563', '(051) 429-65-63', '501234567'])('qəbul edir: %s', (v) => {
    expect(isValidPhone(v)).toBe(true)
  })
  it.each(['', '12345', '051 429 65', '0314296563', '+7 912 345 67 89', 'abcdefghij'])('rədd edir: %s', (v) => {
    expect(isValidPhone(v)).toBe(false)
  })
})

describe('validate', () => {
  const ok = { name: 'Aysel', phone: '051 429 65 63', age: '4' }
  it('düzgün forma xətasızdır', () => expect(validate(ok, T.az)).toEqual({}))
  it('yaş yalnız 1-7 tam ədəd', () => {
    for (const age of ['0', '8', '2.5', '', 'x']) expect(validate({ ...ok, age }, T.az)).toHaveProperty('age')
  })
  it('qısa ad rədd edilir', () => expect(validate({ ...ok, name: ' a ' }, T.ru)).toHaveProperty('name'))
})
