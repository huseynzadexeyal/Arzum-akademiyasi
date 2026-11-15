import { useEffect, useRef, useState } from 'react'
import { m } from 'framer-motion'
import styles from './Confetti.module.css'

const COLORS = ['#00B5E2', '#EF3340', '#509E2F', '#FFC83D']

// Konfeti öz komponentində: kliklər bütün səhifəni yenidən render etmir.
let emit = () => {}
let seq = 0 // benzərsiz açarlar üçün sayğac (təsadüfi ədədlər toqquşa bilər)

// onClick={fireConfetti} kimi istifadə olunur.
export const fireConfetti = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  emit(e.clientX || r.left + r.width / 2, e.clientY || r.top + r.height / 2)
}

export default function Confetti() {
  const [bits, setBits] = useState([])
  const timers = useRef(new Set())

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pending = timers.current
    emit = (x, y) => {
      if (reduce.matches) return // hərəkətdən narahat olanlara konfeti göstərilmir
      const n = window.innerWidth < 800 ? 9 : 14
      const add = Array.from({ length: n }, (_, i) => ({
        id: ++seq, x, y,
        dx: (Math.random() - 0.5) * 320,
        dy: -60 - Math.random() * 180,
        c: COLORS[i % COLORS.length],
        r: Math.random() * 540,
      }))
      setBits((b) => [...b, ...add])
      const id = setTimeout(() => {
        pending.delete(id)
        setBits((b) => b.filter((k) => !add.includes(k)))
      }, 1000)
      pending.add(id)
    }
    return () => { emit = () => {}; pending.forEach(clearTimeout); pending.clear() }
  }, [])

  return (
    <div className={styles.bits} aria-hidden="true">
      {bits.map((b) => (
        <m.i
          key={b.id}
          className={styles.bit}
          style={{ left: b.x, top: b.y, background: b.c }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: b.dx, y: b.dy + 260, opacity: 0, rotate: b.r }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}
