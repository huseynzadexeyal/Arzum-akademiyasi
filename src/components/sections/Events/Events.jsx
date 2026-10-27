import { useApp } from '@/context/AppContext'
import Section, { SectionTitle } from '@/components/ui/Section'
import styles from './Events.module.css'

export default function Events() {
  const { t } = useApp()
  return (
    <Section id="tedbirler" tone="events" className={styles.events}>
      <SectionTitle>{t.evH}</SectionTitle>
      <ol className={styles.timeline}>
        {t.events.map(([date, title, text]) => (
          <li key={title} className={styles.item}>
            <b className={styles.date}>{date}</b>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
