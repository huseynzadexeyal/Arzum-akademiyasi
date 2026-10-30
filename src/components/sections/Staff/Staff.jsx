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
          <li key={i} className={`${styles.card} ${styles[COLORS[i % COLORS.length]]}`} onClick={fireConfetti}>
            <div className={styles.photo}>
              <span className={styles.emoji} aria-hidden="true">{p.emoji}</span>
              <img src={`/photos/staff/${p.photo}`} alt={p.name} loading="lazy" decoding="async" onError={hideOnError} />
            </div>
            <h3>{p.name}</h3>
            <p>{p.role[lang] || p.role.az}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
