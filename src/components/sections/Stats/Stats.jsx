import { useApp } from '@/context/AppContext'
import { stats } from '@/data/stats'
import Count from './Count'
import styles from './Stats.module.css'

export default function Stats() {
  const { t } = useApp()
  return (
    <section className={styles.stats}>
      {stats.map((value, i) => (
        <div key={i}>
          <b className={styles.num}><Count to={value} /></b>
          <span>{t.statL[i]}</span>
        </div>
      ))}
    </section>
  )
}
