import { useEffect } from 'react'

// Ekrandan çıxan elementlərə `data-off` qoyur; global.css bunlarda animasiyaları dayandırır.
// Beləcə telefon görünməyən bölmələr üçün boş yerə işləmir.
export function usePauseOffscreen(selector = 'main > section') {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.toggleAttribute('data-off', !e.isIntersecting))
    }, { rootMargin: '150px 0px' })
    document.querySelectorAll(selector).forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [selector])
}
