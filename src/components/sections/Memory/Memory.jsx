import { useState } from 'react'
import { m } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import Button from '@/components/ui/Button'
import styles from './Memory.module.css'

const MAX_FLOWERS = 40

export default function Memory() {
  const { t } = useApp()
  const [count, setCount] = useState(0)
  return (
    <section id="yaddas" className={styles.mem}>
      <h2 className={styles.title}>{t.memH}</h2>
      <p className={styles.lead}>{t.memLead}</p>

      <div className={styles.days}>
        {t.mdays.map(([date, title, text]) => (
          <article key={date}>
            <b>{date}</b>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div>
        <Button onClick={() => setCount(count + 1)}>{t.carn}</Button>
        <div className={styles.row} aria-live="polite">
          {Array.from({ length: Math.min(count, MAX_FLOWERS) }).map((_, i) => (
            <m.span
              key={i}
              initial={{ y: -40, opacity: 0, scale: 0.4 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            >
              🌹
            </m.span>
          ))}
        </div>
        {count > 0 && <p>{t.carnOk}</p>}
      </div>
    </section>
  )
}
