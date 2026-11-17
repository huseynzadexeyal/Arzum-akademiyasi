import { useApp } from '@/context/AppContext'
import { staff } from '@/data/staff'
import { hideOnError } from '@/utils/dom'
import Section, { SectionTitle } from '@/components/ui/Section'
import { fireConfetti } from '@/components/ui/Confetti'
import styles from './Staff.module.css'
import { SECTION } from '@/data/nav'

const COLORS = ['red', 'blue', 'green', 'sun']

// Müəllim kollektivi: hər kart öz rəngində, şəkil yoxdursa emoji görünür.
export default function Staff() {
  const { t, lang } = useApp()
  return (
    <Section id={SECTION.staff} tone="staff">
      <SectionTitle>{t.stH}</SectionTitle>
      <p className={styles.lead}>{t.stLead}</p>
      <ul className={styles.grid}>
        {staff.map((p, i) => (
          // Dekorativ klik (konfeti): məlumat daşımır
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li key={i} className={`${styles.card} ${styles[COLORS[i % COLORS.length]]}`} onClick={fireConfetti}>
            <div className={styles.photo}>
              <span className={styles.emoji} aria-hidden="true">{p.emoji}</span>
              {p.photo && <img src={`/photos/staff/${p.photo}`} alt={p.name || p.role[lang] || p.role.az} loading="lazy" decoding="async" onError={hideOnError} />}
            </div>
            {p.name ? <><h3>{p.name}</h3><p>{p.role[lang] || p.role.az}</p></> : <h3>{p.role[lang] || p.role.az}</h3>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
