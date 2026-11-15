import { useRef, useState } from 'react'
import { useApp } from '@/context/AppContext'
import { contact, telHref, waHref } from '@/data/contact'
import Button from '@/components/ui/Button'
import Lead from '@/components/ui/Lead'
import Section, { SectionTitle } from '@/components/ui/Section'
import styles from './Enroll.module.css'
import { SECTION } from '@/data/nav'

// Azərbaycan mobil nömrəsi: +994 / 994 / 0 ilə və ya prefikssiz (kodlar: 10, 50, 51, 55, 60, 70, 77, 99)
const PHONE_RE = /^(\+?994|0)?(10|50|51|55|60|70|77|99)\d{7}$/
const FIELDS = [['name', 'text', 'name'], ['phone', 'tel', 'tel'], ['age', 'number', 'off']] // [açar, type, autocomplete]

function validate(f, t) {
  const errors = {}
  if (f.name.trim().length < 2) errors.name = t.e[0]
  if (!PHONE_RE.test(f.phone.replace(/[\s-]/g, ''))) errors.phone = t.e[1]
  const age = Number(f.age)
  if (!f.age || !Number.isInteger(age) || age < 1 || age > 7) errors.age = t.e[2]
  return errors
}

// Backend yoxdur: yoxlanılmış məlumat WhatsApp mesajı kimi açılır.
export default function Enroll() {
  const { t } = useApp()
  const [form, setForm] = useState({ name: '', phone: '', age: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null) // göndəriləndən sonra WhatsApp linki
  const refs = useRef({})

  const change = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value })
    setErrors({ ...errors, [key]: '' })
  }

  const submit = (ev) => {
    ev.preventDefault()
    const found = validate(form, t)
    setErrors(found)
    const firstBad = FIELDS.find(([k]) => found[k])
    if (firstBad) { refs.current[firstBad[0]]?.focus(); return } // ilk səhv sahəyə keçir
    const msg = `Salam! Qeydiyyat: valideyn ${form.name.trim()}, nömrə ${form.phone}, uşağın yaşı ${form.age}.`
    const link = `${waHref}?text=${encodeURIComponent(msg)}`
    window.open(link, '_blank', 'noopener')
    setSent(link) // pəncərə bloklansa, istifadəçi aşağıdakı linkə basa bilər
  }

  return (
    <Section id={SECTION.enroll} tone="cta" className={styles.enroll}>
      <div>
        <SectionTitle>{t.enrH}</SectionTitle>
        <Lead>{t.enrLead} <a href={telHref}>{contact.phone}</a></Lead>
      </div>

      {sent ? (
        <div className={styles.ok} role="status">
          <p>{t.ok}</p>
          <p><a href={sent} target="_blank" rel="noopener noreferrer">{t.waFallback}</a></p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={submit} noValidate>
          {FIELDS.map(([key, type, auto], i) => (
            <label key={key} className={styles.label}>
              {t.f[i]}
              <input
                className={styles.input}
                type={type}
                inputMode={type === 'tel' ? 'tel' : type === 'number' ? 'numeric' : undefined}
                value={form[key]}
                onChange={change(key)}
                ref={(el) => { refs.current[key] = el }}
                autoComplete={auto}
                maxLength={type === 'number' ? undefined : 40}
                aria-invalid={!!errors[key]}
                aria-describedby={errors[key] ? `enr-${key}-err` : undefined}
                min={type === 'number' ? 1 : undefined}
                max={type === 'number' ? 7 : undefined}
              />
              {errors[key] && <small id={`enr-${key}-err`} className={styles.error} role="alert">{errors[key]}</small>}
            </label>
          ))}
          <Button type="submit" variant="navy" className={styles.submit}>{t.send}</Button>
          <small className={styles.note}>{t.consent}</small>
        </form>
      )}
    </Section>
  )
}
