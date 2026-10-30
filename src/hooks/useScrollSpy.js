import { useEffect, useState } from 'react'

// Hansı bölmənin ekranın ortasında olduğunu izləyir və onun id-sini qaytarır.
// Səhifənin başında (hero) boş sətir qaytarır.
export function useScrollSpy(ids) {
  const [active, setActive] = useState('')
  const key = ids.join('|')

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length || !('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-30% 0px -60% 0px' })
    els.forEach((el) => io.observe(el))
    const onScroll = () => { if (window.scrollY < 160) setActive('') }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
