import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { T } from '@/data/i18n'
import { storage } from '@/utils/storage'
import { isNight } from '@/utils/sun'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [lang, setLangState] = useState(() => storage.get('lang', 'az'))
  // Rejim: 'auto' (gün batanda qaranlıq, gün çıxanda işıqlı), 'light' və ya 'dark'
  const [mode, setModeState] = useState(() => {
    const m = storage.get('themeMode', 'auto')
    return ['auto', 'light', 'dark'].includes(m) ? m : 'auto'
  })
  const [night, setNight] = useState(() => isNight())
  const theme = mode === 'auto' ? (night ? 'dark' : 'light') : mode
  const t = T[lang] || T.az

  const value = useMemo(() => ({
    t, lang, theme, mode,
    setLang: (l) => { setLangState(l); storage.set('lang', l) },
    setMode: (m) => { setModeState(m); storage.set('themeMode', m) },
  }), [t, lang, theme, mode])

  // Avtomatik rejimdə gün batımı/çıxımı yoxlanılır (hər dəqiqə və səhifəyə qayıdanda)
  useEffect(() => {
    if (mode !== 'auto') return undefined
    const check = () => setNight(isNight())
    check()
    const id = setInterval(check, 60000)
    document.addEventListener('visibilitychange', check)
    return () => { clearInterval(id); document.removeEventListener('visibilitychange', check) }
  }, [mode])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dataset.theme = theme
    document.title = t.title
  }, [lang, theme, t])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
