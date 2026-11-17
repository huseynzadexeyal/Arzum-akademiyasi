import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { T } from '@/data/i18n'
import { storage } from '@/utils/storage'
import { useTheme } from '@/hooks/useTheme'

const AppContext = createContext(null)

// Bütün səhifə üçün ümumi vəziyyət: dil (t = həmin dilin mətnləri) və tema.
export function AppProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const l = storage.get('lang', 'az')
    return Object.hasOwn(T, l) ? l : 'az'
  })
  const { mode, setMode, theme } = useTheme()
  const t = T[lang] || T.az

  const setLang = useCallback((l) => { setLangState(l); storage.set('lang', l) }, [])
  const value = useMemo(() => ({ t, lang, theme, mode, setMode, setLang }), [t, lang, theme, mode, setMode, setLang])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.desc)
  }, [lang, t])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
