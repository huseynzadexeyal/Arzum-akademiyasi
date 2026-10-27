import styles from './Lead.module.css'

export default function Lead({ children }) {
  return <p className={styles.lead}>{children}</p>
}
