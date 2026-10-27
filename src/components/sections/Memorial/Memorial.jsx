import { useApp } from '@/context/AppContext'
import { hideOnError } from '@/utils/dom'
import styles from './Memorial.module.css'

const LOCAL = '/photos/vusal.jpg'
const REMOTE = 'http://binegedi-ih.gov.az/storage/files/images/M%C9%99mm%C9%99dov%20V%C3%BCsal%20Aftandil%20o%C4%9Flu.jpg'

// Əvvəl yerli şəkil, yoxdursa rəsmi saytdakı şəkil, o da yüklənməsə gizlənir.
const onPhotoError = (e) => {
  if (e.target.src.endsWith(LOCAL)) e.target.src = REMOTE
  else hideOnError(e)
}

export default function Memorial() {
  const { t } = useApp()
  return (
    <section className={styles.memorial}>
      <img className={styles.photo} src={LOCAL} alt={t.mrl[2]} onError={onPhotoError} />
      <div>
        <h2 className={styles.title}>{t.mrl[0]}</h2>
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
