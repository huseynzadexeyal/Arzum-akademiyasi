import { useApp } from '@/context/AppContext'
import { contact, telHref } from '@/data/contact'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer className={styles.foot}>
      <p>{t.center}</p>
      <p>{t.addr}</p>
      <p className={styles.links}>
        <a href={telHref}>{contact.phone}</a>
        <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </p>
    </footer>
  )
}
