import { m, useScroll, useSpring, useTransform } from 'framer-motion'
import styles from './Trail.module.css'

// Yalnız desktop-da: scroll irəlilədikcə uşaq yolla aşağı gedir.
export default function Trail() {
  const { scrollYProgress } = useScroll()
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 20 })
  const top = useTransform(p, [0, 1], ['0%', '100%'])
  return (
    <div className={styles.trail} aria-hidden="true">
      <m.i className={styles.fill} style={{ scaleY: p }} />
      <m.span className={styles.kid} style={{ top }}>🧒</m.span>
    </div>
  )
}
