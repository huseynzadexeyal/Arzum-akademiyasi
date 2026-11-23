import { useEffect, useRef, useState } from 'react'
import { useApp } from '@/context/AppContext'
import Section, { SectionTitle } from '@/components/ui/Section'
import { fireConfetti } from '@/components/ui/Confetti'
import { PUPPETS, PROPS, VIDEOS, face } from '@/data/theatre'
import { SECTION } from '@/data/nav'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { Puppet, Kid, RedHoodScene, CirtdanScene, QogalScene, TiqScene, RaceScene, BallScene } from './Puppets'
import styles from './Theatre.module.css'

// Hər nağılın SVG dekoru (sıra t.thTales ilə eynidir)
const SCENES = [RedHoodScene, CirtdanScene, QogalScene, TiqScene, RaceScene, BallScene]

// Tamaşaçı uşaqlar: hər birinin dərisi, saçı, köynəyi və saç düzümü fərqlidir
const SKIN = ['#ffd9b8', '#f1c196', '#d9a074', '#b97a4f']
const HAIR = ['#3b2412', '#6b3a1c', '#e6b64a', '#1d1208', '#b4532a']
const SHIRT = ['#ff6b81', '#4aa3e0', '#ffd23f', '#7bc45e', '#a874dc', '#ff9f1c']
const AUDIENCE = Array.from({ length: 20 }, (_, i) => ({
  skin: SKIN[(i * 3) % 4], hair: HAIR[(i * 2 + 1) % 5], shirt: SHIRT[i % 6], look: i % 5, dy: [10, 0, 14, 4, 18, 2, 12, 6][i % 8],
}))

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
  const intro = useRef(0) // səhnə ilk görünəndə pərdəni açan taymer
  const videoRef = useRef(null)
  const frame = useRef(0) // pointermove üçün requestAnimationFrame
  const [vPlaying, setVPlaying] = useState(false)
  const [vMuted, setVMuted] = useState(false)
  const video = VIDEOS[tale] // varsa, səhnədə animasiya yerinə video oynayır

  // Səhnə ekrana çıxanda pərdə özü açılır
  useInViewOnce(stageRef, () => { intro.current = setTimeout(() => setOpen(true), 500) }, 0.4)
  useEffect(() => () => { clearTimeout(timer.current); clearTimeout(intro.current); cancelAnimationFrame(frame.current) }, [])

  // Tamaşa ssenarisi: pərdə açılandan sonra replikalar ardıcıl səslənir, axırda alqış
  useEffect(() => {
    // Dəyişiklikdə (pərdə bağlandı, nağıl dəyişdi, "yenidən göstər", dil) köhnə vəziyyət təmizlənir
    const reset = () => { setStep(-1); setClap(false) }
    if (!open || VIDEOS[tale]) return reset
    const lines = t.thTales[tale][2]
    const ids = lines.map((_, i) => setTimeout(() => setStep(i), 1500 + i * 3000))
    ids.push(setTimeout(() => {
      setStep(-1)
      setClap(true)
      if (stageRef.current) fireConfetti({ currentTarget: stageRef.current, clientX: 0, clientY: 0 })
    }, 1500 + lines.length * 3000))
    return () => { ids.forEach(clearTimeout); reset() }
  }, [open, tale, run, t])

  // Video: pərdə açılanda başlayır, bağlananda dayanır, "yenidən göstər" başa qaytarır
  useEffect(() => {
    const v = videoRef.current
    if (!video || !v) return undefined
    if (!open) { v.pause(); return undefined }
    v.currentTime = 0
    // Hərəkəti azaltmış istifadəçi üçün video özü başlamır (oynat düyməsi var)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => v.pause()
    const go = v.play()
    // Brauzer səsli avtomatik oynatmanı bloklasa (NotAllowedError), səssiz başlayır.
    // Pərdə tez bağlananda pause() "AbortError" verir: bu halda videonu yenidən BAŞLATMIRIQ.
    if (go) go.catch((err) => { if (err.name === 'NotAllowedError') { v.muted = true; v.play().catch(() => {}) } })
    return () => v.pause()
  }, [open, video, run])

  const videoEnded = () => {
    setClap(true)
    if (stageRef.current) fireConfetti({ currentTarget: stageRef.current, clientX: 0, clientY: 0 })
  }

  const pick = (i) => (e) => {
    fireConfetti(e)
    if (i === sel && tale === sel) { setOpen(true); setRun((n) => n + 1); return } // keçid gedirsə, aşağıda davam edir
    clearTimeout(timer.current)
    clearTimeout(intro.current)
    setVMuted(false) // yeni video səslə başlayır: köhnə nağılın düymə vəziyyəti qalmasın
    setVPlaying(false)
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
    if (!el || !open || e.pointerType === 'touch') return // toxunuşda (scroll zamanı) boş yerə işləməsin
    const { clientX, clientY } = e
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => { // kadrda bir dəfə: hər pikseldə stil hesablanmasın
      const r = el.getBoundingClientRect()
      const c = (v) => Math.max(-1, Math.min(1, v)).toFixed(2)
      el.style.setProperty('--lx', c(((clientX - r.left) / r.width) * 2 - 1))
      el.style.setProperty('--ly', c(((clientY - r.top) / r.height) * 2 - 1))
    })
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

      {/* Səhnəyə klik pərdəni açır (siçan üçün rahatlıq); klaviatura/ekran oxuyucu üçün aşağıdakı düymə var */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        ref={stageRef}
        className={styles.stage}
        data-open={open}
        data-scene={tale}
        data-video={Boolean(video)}
        onClick={() => { if (!open) setOpen(true) }}
        onPointerMove={look}
        onPointerLeave={lookAway}
      >
        <div className={styles.scene}>
          {!video && (() => { const Scene = SCENES[tale]; return Scene ? <Scene /> : null })()}
          {!video && PROPS[tale].map(([emoji, l, b, s], i) => (
            <span key={`p${tale}-${i}`} className={styles.prop} aria-hidden="true" style={{ left: `${l}%`, bottom: `${b}%`, '--s': s, '--d': `${i * 0.7}s` }}>{emoji}</span>
          ))}
          {video && (
            <div className={styles.videoBox} key={`v${tale}`}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption -- kukla tamaşası videosudur, altyazı mətni yoxdur */}
              <video
                ref={videoRef}
                className={styles.video}
                src={video.src}
                poster={video.poster}
                title={title}
                aria-label={title}
                playsInline
                preload="metadata"
                onEnded={videoEnded}
                onPlay={() => setVPlaying(true)}
                onPause={() => setVPlaying(false)}
                onVolumeChange={(e) => setVMuted(e.currentTarget.muted)}
                onClick={(e) => e.stopPropagation()}
              />
              <div className={styles.vctrl}>
                <button type="button" aria-label={vPlaying ? t.vPause : t.vPlay} onClick={(e) => { e.stopPropagation(); const v = videoRef.current; if (v) (v.paused ? v.play() : v.pause()) }}>{vPlaying ? '⏸' : '▶'}</button>
                <button type="button" aria-label={vMuted ? t.vSound : t.vMute} onClick={(e) => { e.stopPropagation(); const v = videoRef.current; if (v) v.muted = !v.muted }}>{vMuted ? '🔇' : '🔊'}</button>
              </div>
            </div>
          )}
          {!video && <div className={styles.puppets} key={tale}>
            {PUPPETS[tale].map((p, i) => (
              <span
                key={i}
                className={`${styles.puppet} ${who === i ? styles.talk : ''} ${poke === i ? styles.hop : ''}`}
                style={{ '--i': i, '--sz': p.size || 1, order: p.o ?? i }}
                aria-hidden="true"
                onClick={poked(i)}
                onAnimationEnd={(e) => { if (e.target === e.currentTarget) setPoke(null) }}
              >
                {p.k ? <Puppet kind={p.k} talking={who === i} /> : p.bun ? <b className={styles.bun} /> : p.e}
              </span>
            ))}
          </div>}
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
          {AUDIENCE.map((k, i) => (
            <span key={i} className={styles.kid} style={{ '--i': i, '--dy': `${k.dy}%` }}>
              <Kid skin={k.skin} hair={k.hair} shirt={k.shirt} look={k.look} cheer={clap} />
            </span>
          ))}
        </div>
        <p className="sr-only" role="status">{line ? line[1] : ''}</p>
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
