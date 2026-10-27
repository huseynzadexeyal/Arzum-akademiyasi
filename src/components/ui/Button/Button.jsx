import { cx } from '@/utils/cx'
import styles from './Button.module.css'

// variant: 'red' | 'navy' | 'ghost', size: 'sm' | undefined. href verilibsə <a>, yoxsa <button>.
export default function Button({ variant = 'red', size, href, className, children, ...rest }) {
  const cls = cx(styles.btn, styles[variant], size === 'sm' && styles.sm, className)
  if (href) return <a className={cls} href={href} {...rest}>{children}</a>
  return <button type="button" className={cls} {...rest}>{children}</button>
}
