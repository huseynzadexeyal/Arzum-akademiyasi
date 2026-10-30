import { useApp } from '@/context/AppContext'
import { contact, telHref } from '@/data/contact'
import Icon from '@/components/ui/Icon'
import styles from './CallBar.module.css'

// Yalnız mobil: ekranın altında üzən zəng kartı (zəng + WhatsApp).
export default function CallBar() {
  const { t } = useApp()
  return (
    <div className={styles.bar}>
      <a className={styles.call} href={telHref} aria-label={`${t.callNow}: ${contact.phone}`}>
        <span className={styles.ico} aria-hidden="true">
          <Icon name="phone" size={22} />
        </span>
        <span className={styles.txt}>
          <small>{t.callNow}</small>
          <b>{contact.phone}</b>
        </span>
      </a>
      <a className={styles.wa} href={`https://wa.me/${contact.wa}`} target="_blank" rel="noreferrer" aria-label={t.waLabel}>
        <Icon name="whatsapp" size={24} />
      </a>
    </div>
  )
}
