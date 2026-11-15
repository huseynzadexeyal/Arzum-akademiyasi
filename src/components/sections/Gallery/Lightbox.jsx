import { useEffect, useRef } from 'react'
import styles from './Lightbox.module.css'

// Albom görüntüləyicisi: şəkil və video, ← → ilə keçid, Esc ilə bağlanır, altda kiçik şəkillər.
export default function Lightbox({ items, index, title, emoji, empty, labels, onChange }) {
  const len = items.length
  const dialog = useRef(null)
  const open = index !== null

  // Açılanda fokus bağla düyməsinə keçir, bağlananda əvvəlki elementə qayıdır
  useEffect(() => {
    if (!open) return undefined
    const opener = document.activeElement
    dialog.current?.querySelector('button')?.focus()
    return () => { if (opener instanceof HTMLElement) opener.focus() }
  }, [open])

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Tab' && dialog.current) { // fokus pəncərədən çıxmasın
        const f = [...dialog.current.querySelectorAll('button')]
        if (!f.length) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
      if (e.key === 'Escape') onChange(null)
      if (!len) return
      if (e.key === 'ArrowRight') onChange((index + 1) % len)
      if (e.key === 'ArrowLeft') onChange((index + len - 1) % len)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, len, onChange])

  if (index === null) return null

  const cur = items[index]
  const stop = (e) => e.stopPropagation()
  const step = (d) => (e) => { e.stopPropagation(); onChange((index + d + len) % len) }

  return (
    // Fon klik-i yalnız siçan üçündür: klaviaturada Esc və "bağla" düyməsi var
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <div ref={dialog} className={styles.lb} role="dialog" aria-modal="true" aria-label={title} onClick={() => onChange(null)}>
      <button className={styles.close} aria-label={labels.close} onClick={() => onChange(null)}>✕</button>

      {len > 0 ? (
        <>
          {len > 1 && <button className={`${styles.nav} ${styles.prev}`} aria-label={labels.prev} onClick={step(-1)}>‹</button>}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <figure onClick={stop}>
            <div className={styles.media}>
              {cur.type === 'video' ? (
                // eslint-disable-next-line jsx-a11y/media-has-caption -- kukla tamaşası videoları, altyazı mətni yoxdur
                <video key={cur.src} src={cur.src} controls autoPlay playsInline preload="metadata" />
              ) : (
                <img key={cur.src} src={cur.src} alt={title} />
              )}
            </div>
            <figcaption><span>{title}</span><b>{index + 1} / {len}</b></figcaption>
            {len > 1 && (
              <div className={styles.thumbs}>
                {items.map((it, k) => (
                  <button key={it.src} aria-label={`${k + 1}`} aria-current={k === index ? 'true' : undefined} onClick={() => onChange(k)}>
                    {it.type === 'video' ? <span>▶</span> : <img src={it.src} alt="" loading="lazy" />}
                  </button>
                ))}
              </div>
            )}
          </figure>
          {len > 1 && <button className={`${styles.nav} ${styles.next}`} aria-label={labels.next} onClick={step(1)}>›</button>}
        </>
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <figure className={styles.none} onClick={stop}>
          <div className={styles.noneEmoji} aria-hidden="true">{emoji}</div>
          <figcaption><span>{title}</span></figcaption>
          <p>{empty}</p>
        </figure>
      )}
    </div>
  )
}
