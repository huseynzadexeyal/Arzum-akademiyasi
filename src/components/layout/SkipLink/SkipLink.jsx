import { useApp } from '@/context/AppContext'
import styles from './SkipLink.module.css'

// Klaviatura istifadəçiləri üçün: Tab basanda "Əsas məzmuna keç" görünür.
export default function SkipLink() {
  const { t } = useApp()
  return <a className={styles.skip} href="#main">{t.skip}</a>
}
