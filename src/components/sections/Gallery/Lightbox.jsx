import { useEffect } from 'react'
import { hideOnError } from '@/utils/dom'
import styles from './Lightbox.module.css'

// Şəkilə klik: böyüdür; ← → ilə keçid, Esc ilə bağlanır.
export default function Lightbox({ index, onChange, items }) {
  const len = items.length

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') onChange(null)
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

  const step = (d) => (e) => { e.stopPropagation(); onChange((index + d + len) % len) }

  return (
    <div className={styles.lb} role="dialog" aria-modal="true" aria-label={items[index]} onClick={() => onChange(null)}>
      <button className={styles.close} aria-label="Close" autoFocus onClick={() => onChange(null)}>✕</button>
      <button className={`${styles.nav} ${styles.prev}`} aria-label="Previous" onClick={step(-1)}>‹</button>
      <figure className={styles[`c${index % 3}`]} onClick={(e) => e.stopPropagation()}>
        <img src={`/photos/${index + 1}.jpg`} alt={items[index]} onError={hideOnError} />
        <figcaption>{items[index]}</figcaption>
      </figure>
      <button className={`${styles.nav} ${styles.next}`} aria-label="Next" onClick={step(1)}>›</button>
    </div>
  )
}
