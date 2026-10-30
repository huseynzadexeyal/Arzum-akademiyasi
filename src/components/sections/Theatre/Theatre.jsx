import { useEffect, useRef, useState } from 'react'
import { useApp } from '@/context/AppContext'
import Section, { SectionTitle } from '@/components/ui/Section'
import { fireConfetti } from '@/components/ui/Confetti'
import { PUPPETS, PROPS, face } from '@/data/theatre'
import { Puppet, RedHoodScene, CirtdanScene, QogalScene, TiqScene, RaceScene, BallScene } from './Puppets'

// Hər nağılın SVG dekoru (sıra t.thTales ilə eynidir)
const SCENES = [RedHoodScene, CirtdanScene, QogalScene, TiqScene, RaceScene, BallScene]
import { SECTION } from '@/data/nav'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import styles from './Theatre.module.css'

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
  useInViewOnce(stageRef, () => { timer.current = setTimeout(() => setOpen(true), 500) }, 0.6)
  useEffect(() => () => clearTimeout(timer.current), [])

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

  // Bəbəklər kursoru izləyir: re-render olmadan CSS dəyişənləri yazılır
  const look = (e) => {
    const el = stageRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const c = (v) => Math.max(-1, Math.min(1, v)).toFixed(2)
    el.style.setProperty('--lx', c(((e.clientX - r.left) / r.width) * 2 - 1))
    el.style.setProperty('--ly', c(((e.clientY - r.top) / r.height) * 2 - 1))
  }
  const lookAway = () => {
    stageRef.current?.style.setProperty('--lx', '0')
    stageRef.current?.style.setProperty('--ly', '0')
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
    <Section id={SECTION.theatre} tone="theatre">
      <SectionTitle>{t.thH}</SectionTitle>
      <p className={styles.lead}>{t.thLead}</p>

      <div
        ref={stageRef}
        className={styles.stage}
        data-open={open}
        data-scene={tale}
        onClick={() => { if (!open) setOpen(true) }}
        onPointerMove={look}
        onPointerLeave={lookAway}
      >
        <div className={styles.scene}>
          {(() => { const Scene = SCENES[tale]; return Scene ? <Scene /> : null })()}
          {PROPS[tale].map(([emoji, l, b, s], i) => (
            <span key={`p${tale}-${i}`} className={styles.prop} aria-hidden="true" style={{ left: `${l}%`, bottom: `${b}%`, '--s': s, '--d': `${i * 0.7}s` }}>{emoji}</span>
          ))}
          <div className={styles.puppets} key={tale}>
            {PUPPETS[tale].map((p, i) => (
              <span
                key={i}
                className={`${styles.puppet} ${who === i ? styles.talk : ''} ${poke === i ? styles.hop : ''}`}
                style={{ '--i': i, '--sz': p.size || 1, order: p.o ?? i }}
                aria-hidden="true"
                onClick={poked(i)}
                onAnimationEnd={() => setPoke(null)}
              >
                {p.k ? <Puppet kind={p.k} talking={who === i} /> : p.bun ? <b className={styles.bun} /> : p.e}
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
            <i>{PUPPETS[tale][who].k ? <Puppet kind={PUPPETS[tale][who].k} head /> : face(PUPPETS[tale][who])}</i>
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
