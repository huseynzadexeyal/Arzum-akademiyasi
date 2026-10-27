import { useState } from 'react'
import { useApp } from '@/context/AppContext'
import { contact } from '@/data/contact'
import { hideOnError } from '@/utils/dom'
import Button from '@/components/ui/Button'
import Section, { SectionTitle } from '@/components/ui/Section'
import Lightbox from './Lightbox'
import styles from './Gallery.module.css'

export default function Gallery() {
  const { t } = useApp()
  const [open, setOpen] = useState(null)
  return (
    <Section id="qalereya" tone="gallery">
      <SectionTitle>{t.galH}</SectionTitle>
      <div className={styles.gal}>
        {t.gallery.map((caption, k) => (
          <button key={k} className={`${styles.item} ${styles[`c${k % 6}`]}`} onClick={() => setOpen(k)}>
            <img src={`/photos/${k + 1}.jpg`} alt="" loading="lazy" onError={hideOnError} />
            <span>{caption}</span>
          </button>
        ))}
      </div>
      <Button variant="ghost" href={contact.instagram} target="_blank" rel="noreferrer">{t.galMore}</Button>
      <Lightbox index={open} onChange={setOpen} items={t.gallery} />
    </Section>
  )
}
