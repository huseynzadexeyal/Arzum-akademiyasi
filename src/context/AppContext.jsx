import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { T } from '@/data/i18n'
import { storage } from '@/utils/storage'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [lang, setLangState] = useState(() => storage.get('lang', 'az'))
  const [theme, setThemeState] = useState(() =>
    storage.get('theme', window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  )
  const t = T[lang] || T.az

  const value = useMemo(() => ({
    t, lang, theme,
    setLang: (l) => { setLangState(l); storage.set('lang', l) },
    setTheme: (m) => { setThemeState(m); storage.set('theme', m) },
  }), [t, lang, theme])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dataset.theme = theme
    document.title = t.title
  }, [lang, theme, t])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
