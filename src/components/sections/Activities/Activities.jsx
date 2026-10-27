import { useApp } from '@/context/AppContext'
import Section, { SectionTitle } from '@/components/ui/Section'
import { fireConfetti } from '@/components/ui/Confetti'
import styles from './Activities.module.css'

const ICONS = [['👩‍🍳', 'red'], ['🎨', 'green'], ['💃', 'blue'], ['📚', 'sun']]
const BALLS = ['#f0344b', '#ffc83d', '#00b5e2', '#3fae2a', '#ff8fc0', '#7b5cff']

// Uşaq əyləncə mərkəzi: hər fəaliyyət öz rəngli "zonası" ilə.
export default function Activities() {
  const { t } = useApp()
  return (
    <Section id="fealiyyet" tone="act" className={styles.hall}>
      <i className={`${styles.balloon} ${styles.bl1}`} aria-hidden="true" />
      <i className={`${styles.balloon} ${styles.bl2}`} aria-hidden="true" />
      <i className={`${styles.balloon} ${styles.bl3}`} aria-hidden="true" />

      <div className={styles.inner}>
        <SectionTitle>{t.actH}</SectionTitle>
        <div className={styles.zones}>
          {t.acts.map(([title, text], i) => (
            <article key={title} className={`${styles.zone} ${styles[ICONS[i][1]]}`} onClick={fireConfetti}>
              <span className={styles.tag} aria-hidden="true">0{i + 1}</span>
              <span className={styles.ico} aria-hidden="true">{ICONS[i][0]}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.pit} aria-hidden="true">
        {Array.from({ length: 44 }, (_, i) => (
          <i key={i} style={{ '--c': BALLS[(i * 5) % BALLS.length], '--d': `${(i % 7) * 0.25}s`, '--s': 34 + ((i * 13) % 22) }} />
        ))}
      </div>
    </Section>
  )
}
