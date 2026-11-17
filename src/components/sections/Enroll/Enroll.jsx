import { useRef, useState } from 'react'
import { useApp } from '@/context/AppContext'
import { contact, telHref, waHref } from '@/data/contact'
import Button from '@/components/ui/Button'
import Lead from '@/components/ui/Lead'
import Section, { SectionTitle } from '@/components/ui/Section'
import styles from './Enroll.module.css'
import { SECTION } from '@/data/nav'
import { validate } from '@/utils/validate'

const FIELDS = [['name', 'text', 'name'], ['phone', 'tel', 'tel'], ['age', 'number', 'off']] // [açar, type, autocomplete]

// Backend yoxdur: yoxlanılmış məlumat WhatsApp mesajı kimi açılır.
export default function Enroll() {
  const { t } = useApp()
  const [form, setForm] = useState({ name: '', phone: '', age: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null) // göndəriləndən sonra WhatsApp linki
  const refs = useRef({})

  const change = (key) => (e) => {
    const { value } = e.target
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((er) => ({ ...er, [key]: '' }))
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
