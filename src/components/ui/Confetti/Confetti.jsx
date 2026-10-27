import { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import styles from './Confetti.module.css'

const COLORS = ['#00B5E2', '#EF3340', '#509E2F', '#FFC83D']

// Konfeti öz komponentində: kliklər bütün səhifəni yenidən render etmir.
let emit = () => {}

// onClick={fireConfetti} kimi istifadə olunur.
export const fireConfetti = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  emit(e.clientX || r.left + r.width / 2, e.clientY || r.top + r.height / 2)
}

export default function Confetti() {
  const [bits, setBits] = useState([])

  useEffect(() => {
    emit = (x, y) => {
      const n = window.innerWidth < 800 ? 9 : 14
      const id = Math.random()
      const add = Array.from({ length: n }, (_, i) => ({
        id: id + i, x, y,
        dx: (Math.random() - 0.5) * 320,
        dy: -60 - Math.random() * 180,
        c: COLORS[i % COLORS.length],
        r: Math.random() * 540,
      }))
      setBits((b) => [...b, ...add])
      setTimeout(() => setBits((b) => b.filter((k) => !add.includes(k))), 1000)
    }
    return () => { emit = () => {} }
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
