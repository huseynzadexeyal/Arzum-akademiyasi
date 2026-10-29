import { useEffect, useRef, useState } from 'react'
import { useApp } from '@/context/AppContext'
import Section, { SectionTitle } from '@/components/ui/Section'
import { fireConfetti } from '@/components/ui/Confetti'
import styles from './Theatre.module.css'

// Hər nağılın kuklaları (sıra i18n-dəki dialoqdakı nömrələrə uyğundur)
// e: emoji, hat: qırmızı papaq, bun: Qoğal, size: ölçü (1 = normal)
const PUPPETS = [
  [{ e: '👧', hat: true }, { e: '🐺' }, { e: '👵' }],         // Qırmızı papaq
  [{ e: '🧒', size: 0.62 }, { e: '👴' }, { e: '👹' }],       // Cırtdan
  [{ bun: true }, { e: '🐰' }, { e: '🐺' }, { e: '🦊' }],    // Qoğal
  [{ e: '🪳' }, { e: '🐭' }, { e: '🐸' }, { e: '🐱' }],      // Tıq-tıq xanım
  [{ e: '🐢' }, { e: '🐰' }],                                 // Tısbağa və dovşan
  [{ e: '👸' }, { e: '🤴' }, { e: '🧚' }],                    // Zoluşka
]
const face = (p) => (p.bun ? '🥯' : p.e)

// Dekorlar: [emoji, soldan %, aşağıdan %, ölçü(rem)]
const PROPS = [
  [['🌲', 4, 18, 3.2], ['🌲', 15, 14, 2.4], ['🏡', 84, 16, 3.6], ['🌲', 93, 12, 2.6]],
  [['⛰️', 6, 17, 3.8], ['🌳', 20, 12, 2.4], ['🏡', 86, 15, 3.2], ['🌾', 77, 11, 2]],
  [['🌾', 5, 16, 2.8], ['🌼', 17, 12, 1.8], ['🌼', 79, 11, 1.8], ['🌳', 91, 15, 3.2]],
  [['🏠', 6, 16, 3.4], ['🌸', 19, 12, 2], ['🌷', 79, 12, 2], ['🌻', 92, 14, 3]],
  [['🌷', 6, 14, 2.2], ['🌳', 13, 17, 3], ['🌷', 77, 11, 2], ['🏁', 90, 16, 3.4]],
  [['🏰', 85, 20, 4.2], ['⭐', 10, 58, 1.6], ['✨', 32, 66, 1.4], ['🌟', 70, 72, 1.8]],
]

const AUDIENCE = Array.from({ length: 18 }, (_, i) => 34 + ((i * 17) % 30))

// Kukla teatrı: pərdə açılır, kuklalar danışır (altyazı balonu), sonda tamaşaçılar alqışlayır.
export default function Theatre() {
  const { t } = useApp()
  const [sel, setSel] = useState(0)      // seçilmiş nağıl
  const [tale, setTale] = useState(0)    // səhnədəki nağıl
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(-1)   // hazırda danışan replika
  const [clap, setClap] = useState(false)
  const [run, setRun] = useState(0)      // "yenidən göstər" üçün sayğac
  const [poke, setPoke] = useState(null) // klik edilən kukla
  const stageRef = useRef(null)
  const timer = useRef(0)

  // Səhnə ekrana çıxanda pərdə özü açılır
  useEffect(() => {
    const el = stageRef.current
    if (!el || !('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        io.disconnect()
        timer.current = setTimeout(() => setOpen(true), 500)
      }
    }, { threshold: 0.6 })
    io.observe(el)
    return () => { io.disconnect(); clearTimeout(timer.current) }
  }, [])

  // Tamaşa ssenarisi: pərdə açılandan sonra replikalar ardıcıl səslənir, axırda alqış
  useEffect(() => {
    setStep(-1)
    setClap(false)
    if (!open) return undefined
    const lines = t.thTales[tale][2]
    const ids = lines.map((_, i) => setTimeout(() => setStep(i), 1500 + i * 3000))
    ids.push(setTimeout(() => {
      setStep(-1)
      setClap(true)
      if (stageRef.current) fireConfetti({ currentTarget: stageRef.current, clientX: 0, clientY: 0 })
    }, 1500 + lines.length * 3000))
    return () => ids.forEach(clearTimeout)
  }, [open, tale, run, t])

  const pick = (i) => (e) => {
    fireConfetti(e)
    if (i === sel) { setOpen(true); setRun((n) => n + 1); return }
    clearTimeout(timer.current)
    setSel(i)
    setOpen(false)
    // pərdə bağlanır, dekor dəyişir, pərdə yenidən açılır
    timer.current = setTimeout(() => {
      setTale(i)
      timer.current = setTimeout(() => setOpen(true), 200)
    }, 650)
  }

  const toggle = (e) => {
    if (clap) { setRun((n) => n + 1); return }
    if (!open) fireConfetti(e)
    setOpen(!open)
  }

  const poked = (i) => (e) => {
    if (!open) return
    e.stopPropagation()
    fireConfetti(e)
    setPoke(i)
  }

  const [title, text] = t.thTales[sel]
  const line = step >= 0 ? t.thTales[tale][2][step] : null
  const who = line ? line[0] : -1

  return (
    <Section id="teatr" tone="theatre">
      <SectionTitle>{t.thH}</SectionTitle>
      <p className={styles.lead}>{t.thLead}</p>

      <div
        ref={stageRef}
        className={styles.stage}
        data-open={open}
        data-scene={tale}
        onClick={() => { if (!open) setOpen(true) }}
      >
        <div className={styles.scene}>
          {PROPS[tale].map(([emoji, l, b, s], i) => (
            <span key={`p${tale}-${i}`} className={styles.prop} aria-hidden="true" style={{ left: `${l}%`, bottom: `${b}%`, '--s': s, '--d': `${i * 0.7}s` }}>{emoji}</span>
          ))}
          <div className={styles.puppets} key={tale}>
            {PUPPETS[tale].map((p, i) => (
              <span
                key={i}
                className={`${styles.puppet} ${who === i ? styles.talk : ''} ${poke === i ? styles.hop : ''}`}
                style={{ '--i': i, '--sz': p.size || 1 }}
                aria-hidden="true"
                onClick={poked(i)}
                onAnimationEnd={() => setPoke(null)}
              >
                {p.bun ? <b className={styles.bun} /> : p.e}
                {p.hat && <b className={styles.hat} />}
              </span>
            ))}
          </div>
        </div>

        <i className={`${styles.beam} ${styles.b1}`} aria-hidden="true" />
        <i className={`${styles.beam} ${styles.b2}`} aria-hidden="true" />
        <div className={`${styles.curtain} ${styles.l}`} aria-hidden="true" />
        <div className={`${styles.curtain} ${styles.r}`} aria-hidden="true" />
        <div className={styles.valance} aria-hidden="true" />

        {line && (
          <div className={styles.say} key={step} aria-hidden="true">
            <i>{face(PUPPETS[tale][who])}</i>
            <span>{line[1]}</span>
          </div>
        )}

        <div className={styles.foot} aria-hidden="true" />
        <div className={styles.audience} data-clap={clap} aria-hidden="true">
          {AUDIENCE.map((h, i) => <i key={i} style={{ '--h': h, '--i': i }} />)}
        </div>
        {clap && (
          <div className={styles.clap} aria-hidden="true">
            <b>{t.thApplause}</b>
            {Array.from({ length: 7 }, (_, i) => <span key={i} style={{ '--i': i }}>👏</span>)}
          </div>
        )}
      </div>

      <div className={styles.ctrl}>
        <button className={styles.toggle} onClick={toggle}>{clap ? t.thReplay : open ? t.thClose : t.thOpen}</button>
        <div className={styles.tales} role="group" aria-label={t.thPick}>
          {t.thTales.map(([name], i) => (
            <button key={name} className={styles.tale} aria-pressed={sel === i} onClick={pick(i)}>{name}</button>
          ))}
        </div>
      </div>

      <div className={styles.story} aria-live="polite">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Section>
  )
}
