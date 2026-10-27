import { useState } from 'react'
import { useApp } from '@/context/AppContext'
import { contact, telHref } from '@/data/contact'
import Button from '@/components/ui/Button'
import Lead from '@/components/ui/Lead'
import Section, { SectionTitle } from '@/components/ui/Section'
import styles from './Enroll.module.css'

const PHONE_RE = /^(\+?994|0)?(50|51|55|70|77|99|10)\d{7}$/
const FIELDS = [['name', 'text'], ['phone', 'tel'], ['age', 'number']]

function validate(f, t) {
  const errors = {}
  if (f.name.trim().length < 2) errors.name = t.e[0]
  if (!PHONE_RE.test(f.phone.replace(/[\s-]/g, ''))) errors.phone = t.e[1]
  const age = Number(f.age)
  if (!f.age || !Number.isFinite(age) || age < 1 || age > 7) errors.age = t.e[2]
  return errors
}

// Backend yoxdur: yoxlanılmış məlumat WhatsApp mesajı kimi açılır.
export default function Enroll() {
  const { t } = useApp()
  const [form, setForm] = useState({ name: '', phone: '', age: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const change = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value })
    setErrors({ ...errors, [key]: '' })
  }

  const submit = (ev) => {
    ev.preventDefault()
    const found = validate(form, t)
    setErrors(found)
    if (Object.keys(found).length) return
    const msg = `Salam! Qeydiyyat: valideyn ${form.name.trim()}, nömrə ${form.phone}, uşağın yaşı ${form.age}.`
    window.open(`https://wa.me/${contact.wa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <Section id="qeydiyyat" tone="cta" className={styles.enroll}>
      <div>
        <SectionTitle>{t.enrH}</SectionTitle>
        <Lead>{t.enrLead} <a href={telHref}>{contact.phone}</a></Lead>
      </div>

      {sent ? (
        <p className={styles.ok} role="status">{t.ok}</p>
      ) : (
        <form className={styles.form} onSubmit={submit} noValidate>
          {FIELDS.map(([key, type], i) => (
            <label key={key} className={styles.label}>
              {t.f[i]}
              <input
                className={styles.input}
                type={type}
                inputMode={type === 'tel' ? 'tel' : type === 'number' ? 'numeric' : undefined}
                value={form[key]}
                onChange={change(key)}
                aria-invalid={!!errors[key]}
                min={type === 'number' ? 1 : undefined}
                max={type === 'number' ? 7 : undefined}
              />
              {errors[key] && <small className={styles.error} role="alert">{errors[key]}</small>}
            </label>
          ))}
          <Button type="submit" variant="navy" className={styles.submit}>{t.send}</Button>
        </form>
      )}
    </Section>
  )
}
