import { useApp } from '@/context/AppContext'
import Section, { SectionTitle } from '@/components/ui/Section'
import { fireConfetti } from '@/components/ui/Confetti'
import styles from './Activities.module.css'

const ICONS = [['👩‍🍳', 'red'], ['🎨', 'green'], ['💃', 'blue'], ['📚', 'sun']]

export default function Activities() {
  const { t } = useApp()
  return (
    <Section id="fealiyyet" tone="act">
      <SectionTitle>{t.actH}</SectionTitle>
      <div className={styles.tiles}>
        {t.acts.map(([title, text], i) => (
          <article key={title} className={`${styles.tile} ${styles[ICONS[i][1]]}`} onClick={fireConfetti}>
            <span className={styles.ico} aria-hidden="true">{ICONS[i][0]}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
