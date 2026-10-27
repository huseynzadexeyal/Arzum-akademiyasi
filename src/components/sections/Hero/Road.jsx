import { m } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import styles from './Road.module.css'

const PATH = 'M70 370 C 230 400, 100 230, 262 224 S 400 90, 456 70'

const pop = (delay) => ({
  initial: { opacity: 0, scale: 0.4 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay, type: 'spring', stiffness: 220, damping: 14 },
  style: { transformBox: 'fill-box', transformOrigin: 'center' },
})

// Ailə → Akademiya → Məktəb yolu
export default function Road() {
  const { t } = useApp()
  return (
    <svg viewBox="0 0 520 440" className={styles.road} role="img" aria-label={t.h1}>
      <m.path d={PATH} fill="none" className={styles.rd} stroke="#0A2540" strokeWidth="26" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.8, ease: 'easeInOut' }} />
      <m.path d={PATH} fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 14"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} />

      <m.g {...pop(0.1)}>
        <circle cx="70" cy="370" r="30" fill="#DC2A3E" />
        <text x="70" y="378" textAnchor="middle" fontSize="26">🏠</text>
        <text x="70" y="424" textAnchor="middle" className={styles.lbl}>{t.road[0]}</text>
      </m.g>
      <m.g {...pop(1.5)}>
        <circle cx="262" cy="224" r="42" fill="#fff" />
        <text x="262" y="236" textAnchor="middle" fontSize="36">🌈</text>
        <text x="262" y="288" textAnchor="middle" className={styles.lbl}>{t.road[1]}</text>
      </m.g>
      <m.g {...pop(2.8)}>
        <circle cx="456" cy="70" r="30" fill="#3F8F2B" />
        <text x="456" y="79" textAnchor="middle" fontSize="26">🎒</text>
        <text x="456" y="26" textAnchor="middle" className={styles.lbl}>{t.road[2]}</text>
      </m.g>
    </svg>
  )
}
