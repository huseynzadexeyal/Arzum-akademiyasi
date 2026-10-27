import { m } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import Button from '@/components/ui/Button'
import Lead from '@/components/ui/Lead'
import { fireConfetti } from '@/components/ui/Confetti'
import Badge from './Badge'
import Road from './Road'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useApp()
  return (
    <section id="top" className={styles.hero}>
      <Badge />
      <div className={styles.content}>
        <p className={styles.kicker}>{t.kicker}</p>
        <h1 className={styles.title} aria-label={t.h1}>
          {t.h1.split(' ').map((word, i) => (
            <span className={styles.wm} key={i} aria-hidden="true">
              <m.span
                initial={{ y: '110%', rotate: 6 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ delay: 0.1 + i * 0.12, type: 'spring', stiffness: 140, damping: 16 }}
              >
                {word}
              </m.span>
            </span>
          ))}
        </h1>
        <Lead>{t.lead}</Lead>
        <Button href="#qeydiyyat" onClick={fireConfetti}>{t.cta1}</Button>
        <Button href="#fealiyyet" variant="ghost">{t.cta2}</Button>
      </div>
      <Road />
    </section>
  )
}
