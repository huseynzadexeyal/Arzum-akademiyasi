import { useApp } from '@/context/AppContext'
import { hideOnError } from '@/utils/dom'
import styles from './Memorial.module.css'

const PHOTO = '/photos/vusal.jpg'

export default function Memorial() {
  const { t } = useApp()
  return (
    <section className={styles.memorial} aria-labelledby="memorial-title">
      <img className={styles.photo} src={PHOTO} alt={t.mrl[2]} width="399" height="501" loading="lazy" decoding="async" onError={hideOnError} />
      <div>
        <h2 id="memorial-title" className={styles.title}>{t.mrl[0]}</h2>
        <p className={styles.name}>{t.mrlName}</p>
        <dl className={styles.facts}>
          {t.mrlFacts.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
        <p className={styles.text}>{t.mrl[1]}</p>
        <blockquote className={styles.quote}>{t.mrlQuote}</blockquote>
        <p className={styles.medalsH}>{t.mrlMedalsH}</p>
        <ul className={styles.medals}>
          {t.mrlMedals.map((m) => <li key={m}>{m}</li>)}
        </ul>
      </div>
    </section>
  )
}
