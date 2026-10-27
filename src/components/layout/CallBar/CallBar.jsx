import { contact, telHref } from '@/data/contact'
import styles from './CallBar.module.css'

// Yalnız mobil: ekranın altında sabit zəng düyməsi.
export default function CallBar() {
  return (
    <a className={styles.callbar} href={telHref}>
      <span aria-hidden="true">📞</span> {contact.phone}
    </a>
  )
}
