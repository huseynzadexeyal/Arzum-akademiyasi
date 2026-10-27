import { useApp } from '@/context/AppContext'
import { contact, telHref } from '@/data/contact'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import styles from './Nav.module.css'

const LINKS = [['fealiyyet', 'act'], ['tedbirler', 'ev'], ['yaddas', 'mem'], ['qalereya', 'gal'], ['qeydiyyat', 'enr']]
const LANGS = ['az', 'ru']

export default function Nav() {
  const { t, lang, setLang, theme, setTheme } = useApp()
  return (
    <header className={styles.nav}>
      <a href="#top" className={styles.brand}><Logo className={styles.logo} />Arzum Akademiya</a>

      <nav className={styles.links} aria-label={t.menu}>
        {LINKS.map(([id, k]) => <a key={id} href={`#${id}`}>{t.nav[k]}</a>)}
      </nav>

      <div className={styles.tools}>
        <div className={styles.langs} role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button key={l} className={styles.chip} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
          ))}
        </div>
        <button className={styles.chip} aria-label={t.theme} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? '☀' : '☾'}
        </button>
        <span className={styles.call}>
          <Button size="sm" href={telHref} aria-label={contact.phone}>{contact.phone}</Button>
        </span>
      </div>
    </header>
  )
}
