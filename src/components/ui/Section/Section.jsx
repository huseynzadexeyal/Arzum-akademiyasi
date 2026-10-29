import { cx } from '@/utils/cx'
import styles from './Section.module.css'

// tone: staff | theatre | gallery | find | cta — fon rəngi
export function SectionTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>
}

export default function Section({ id, tone, className, children }) {
  return <section id={id} className={cx(styles.sec, tone && styles[tone], className)}>{children}</section>
}
