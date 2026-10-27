import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

// Görünəndə 0-dan hədəf rəqəmə qədər sayır.
export default function Count({ to }) {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true })
  useEffect(() => {
    if (!seen) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (x) => { ref.current.textContent = Math.round(x).toLocaleString('ru') },
    })
    return () => controls.stop()
  }, [seen, to])
  return <span ref={ref}>0</span>
}
