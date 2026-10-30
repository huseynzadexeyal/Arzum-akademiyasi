import { useEffect, useRef } from 'react'

// Element ilk dəfə ekranda göründükdə (threshold qədər) callback-i bir dəfə çağırır.
export function useInViewOnce(ref, onEnter, threshold = 0.5) {
  const cb = useRef(onEnter)
  cb.current = onEnter

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); cb.current() }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, threshold])
}
