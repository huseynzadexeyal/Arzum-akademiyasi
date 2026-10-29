import { useEffect } from 'react'
import styles from './Lightbox.module.css'

// Albom görüntüləyicisi: şəkil və video, ← → ilə keçid, Esc ilə bağlanır, altda kiçik şəkillər.
export default function Lightbox({ items, index, title, emoji, empty, onChange }) {
  const len = items.length

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
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
    <div className={styles.lb} role="dialog" aria-modal="true" aria-label={title} onClick={() => onChange(null)}>
      <button className={styles.close} aria-label="Close" autoFocus onClick={() => onChange(null)}>✕</button>

      {len > 0 ? (
        <>
          {len > 1 && <button className={`${styles.nav} ${styles.prev}`} aria-label="Previous" onClick={step(-1)}>‹</button>}
          <figure onClick={stop}>
            <div className={styles.media}>
              {cur.type === 'video'
                ? <video key={cur.src} src={cur.src} controls autoPlay playsInline preload="metadata" />
                : <img key={cur.src} src={cur.src} alt={title} />}
            </div>
            <figcaption><span>{title}</span><b>{index + 1} / {len}</b></figcaption>
            {len > 1 && (
              <div className={styles.thumbs}>
                {items.map((it, k) => (
                  <button key={it.src} aria-label={`${k + 1}`} aria-current={k === index} onClick={() => onChange(k)}>
                    {it.type === 'video' ? <span>▶</span> : <img src={it.src} alt="" loading="lazy" />}
                  </button>
                ))}
              </div>
            )}
          </figure>
          {len > 1 && <button className={`${styles.nav} ${styles.next}`} aria-label="Next" onClick={step(1)}>›</button>}
        </>
      ) : (
        <figure className={styles.none} onClick={stop}>
          <div className={styles.noneEmoji} aria-hidden="true">{emoji}</div>
          <figcaption><span>{title}</span></figcaption>
          <p>{empty}</p>
        </figure>
      )}
    </div>
  )
}
