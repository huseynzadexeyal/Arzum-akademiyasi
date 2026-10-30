import { useEffect, useRef } from 'react'
import { useApp } from '@/context/AppContext'
import { contact, telHref } from '@/data/contact'
import { NAV_LINKS, LANGS, SECTION } from '@/data/nav'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'
import styles from './Nav.module.css'

// Düymə rejimləri dövrə vurur: avtomatik → işıqlı → qaranlıq
const NEXT_MODE = { auto: 'light', light: 'dark', dark: 'auto' }
const MODE_ICON = { auto: '🌗', light: '☀', dark: '☾' }

export default function Nav() {
  const { t, lang, setLang, mode, setMode } = useApp()
  const active = useScrollSpy(NAV_LINKS.map(([id]) => id))
  const linksRef = useRef(null)

  // Telefonda aktiv düyməni sürüşən sətrin ortasına gətirir
  useEffect(() => {
    const box = linksRef.current
    const el = box && box.querySelector('[aria-current="true"]')
    if (!el || box.scrollWidth <= box.clientWidth) return
    box.scrollTo({ left: el.offsetLeft - (box.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' })
  }, [active])

  return (
    <header className={styles.nav}>
      <a href={`#${SECTION.top}`} className={styles.brand}><Logo className={styles.logo} />Arzum Akademiya</a>

      <nav className={styles.links} aria-label={t.menu} ref={linksRef}>
        {NAV_LINKS.map(([id, k]) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>{t.nav[k]}</a>
        ))}
      </nav>

      <div className={styles.tools}>
        <div className={styles.langs} role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button key={l} className={styles.chip} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
          ))}
        </div>
        <button className={styles.chip} aria-label={`${t.theme}: ${t.modes[mode]}`} title={t.modes[mode]} onClick={() => setMode(NEXT_MODE[mode])}>
          {MODE_ICON[mode]}
        </button>
        <span className={styles.call}>
          <Button size="sm" href={telHref} aria-label={contact.phone}>{contact.phone}</Button>
        </span>
      </div>
    </header>
  )
}
