// Qeydiyyat formunun yoxlaması (komponentdən ayrıdır ki, testlə yoxlana bilsin).

// Azərbaycan mobil nömrəsi: +994 / 994 / 0 ilə və ya prefikssiz (kodlar: 10, 50, 51, 55, 60, 70, 77, 99)
const PHONE_RE = /^(\+?994|0)?(10|50|51|55|60|70|77|99)\d{7}$/

export const isValidPhone = (value) => PHONE_RE.test(String(value).replace(/[\s\-().]/g, ''))

// f: { name, phone, age }, t: dilin mətnləri (t.e = xəta mesajları). Qaytarır: { sahə: mesaj }
export function validate(f, t) {
  const errors = {}
  if (f.name.trim().length < 2) errors.name = t.e[0]
  if (!isValidPhone(f.phone)) errors.phone = t.e[1]
  const age = Number(f.age)
  if (!f.age || !Number.isInteger(age) || age < 1 || age > 7) errors.age = t.e[2]
  return errors
}
