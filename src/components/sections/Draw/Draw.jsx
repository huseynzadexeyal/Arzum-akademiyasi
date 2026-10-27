import { useRef, useState } from 'react'
import { useApp } from '@/context/AppContext'
import { drawColors } from '@/data/colors'
import Button from '@/components/ui/Button'
import Lead from '@/components/ui/Lead'
import Section, { SectionTitle } from '@/components/ui/Section'
import styles from './Draw.module.css'

const W = 800
const H = 450

export default function Draw() {
  const { t } = useApp()
  const canvas = useRef(null)
  const pen = useRef(null)
  const [color, setColor] = useState(drawColors[0])

  const point = (e) => {
    const b = canvas.current.getBoundingClientRect()
    return [((e.clientX - b.left) * W) / b.width, ((e.clientY - b.top) * H) / b.height]
  }

  const draw = (e) => {
    if (!pen.current) return
    const g = canvas.current.getContext('2d')
    const [x, y] = point(e)
    g.strokeStyle = color
    g.lineWidth = 10
    g.lineCap = 'round'
    g.beginPath()
    g.moveTo(...pen.current)
    g.lineTo(x, y)
    g.stroke()
    pen.current = [x, y]
  }

  const lift = () => { pen.current = null }
  const down = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    pen.current = point(e)
    draw(e)
  }
  const clear = () => canvas.current.getContext('2d').clearRect(0, 0, W, H)

  return (
    <Section id="cizim" tone="draw">
      <SectionTitle>{t.drawH}</SectionTitle>
      <Lead>{t.drawP}</Lead>
      <div className={styles.swatches}>
        {drawColors.map((c, i) => (
          <button key={c} className={styles.swatch} aria-label={`${i + 1}`} aria-pressed={color === c} style={{ background: c }} onClick={() => setColor(c)} />
        ))}
        <Button variant="ghost" size="sm" onClick={clear}>{t.clear}</Button>
      </div>
      <canvas
        ref={canvas} width={W} height={H} className={styles.paper} aria-label={t.drawH}
        onPointerDown={down} onPointerMove={draw} onPointerUp={lift} onPointerCancel={lift}
      />
    </Section>
  )
}
