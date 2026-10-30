import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { T } from '@/data/i18n'
import { storage } from '@/utils/storage'
import { useTheme } from '@/hooks/useTheme'

const AppContext = createContext(null)

// Bütün səhifə üçün ümumi vəziyyət: dil (t = həmin dilin mətnləri) və tema.
export function AppProvider({ children }) {
  const [lang, setLangState] = useState(() => storage.get('lang', 'az'))
  const { mode, setMode, theme } = useTheme()
  const t = T[lang] || T.az

  const value = useMemo(() => ({
    t, lang, theme, mode, setMode,
    setLang: (l) => { setLangState(l); storage.set('lang', l) },
  }), [t, lang, theme, mode]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.desc)
  }, [lang, t])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
