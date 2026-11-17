import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { storage } from '@/utils/storage'
import { isNight } from '@/utils/sun'

const MODES = ['auto', 'light', 'dark']

// Rejim: 'auto' (gün batanda qaranlıq, gün çıxanda işıqlı), 'light' və ya 'dark'.
// Qaytarır: { mode, setMode, theme } — theme həmişə 'light' və ya 'dark' olur.
export function useTheme() {
  const [mode, setModeState] = useState(() => {
    const m = storage.get('themeMode', 'auto')
    return MODES.includes(m) ? m : 'auto'
  })
  const [night, setNight] = useState(() => isNight())
  const theme = mode === 'auto' ? (night ? 'dark' : 'light') : mode

  // Avtomatik rejimdə gün batımı/çıxımı yoxlanılır (hər dəqiqə və səhifəyə qayıdanda)
  useEffect(() => {
    if (mode !== 'auto') return undefined
    const check = () => setNight(isNight())
    const id = setInterval(check, 60000)
    document.addEventListener('visibilitychange', check)
    return () => { clearInterval(id); document.removeEventListener('visibilitychange', check) }
  }, [mode])

  // layout effekt: tema ilk boyadan əvvəl qoyulur, səhv rəngli bir kadr görünmür
  useLayoutEffect(() => { document.documentElement.dataset.theme = theme }, [theme])

  const setMode = useCallback((m) => {
    if (m === 'auto') setNight(isNight()) // avtomatikə qayıdanda vəziyyət dərhal təzələnir
    setModeState(m)
    storage.set('themeMode', m)
  }, [])
  return { mode, setMode, theme }
}
