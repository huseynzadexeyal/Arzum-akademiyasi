import { useState } from 'react'
import { useApp } from '@/context/AppContext'
import { contact } from '@/data/contact'
import { ALBUMS } from '@/data/albums'
import Button from '@/components/ui/Button'
import Section, { SectionTitle } from '@/components/ui/Section'
import Lightbox from './Lightbox'
import styles from './Gallery.module.css'

const countText = (items, soon) => {
  const p = items.filter((x) => x.type === 'photo').length
  const v = items.length - p
  const parts = []
  if (p) parts.push(`📷 ${p}`)
  if (v) parts.push(`🎬 ${v}`)
  return parts.length ? parts.join(' · ') : soon
}

// Bayram albomları: albomun üstünə basanda şəkillər və videolar açılır.
export default function Gallery() {
  const { t } = useApp()
  const [open, setOpen] = useState(null) // { a: albom, i: şəkil nömrəsi }
  const album = open ? ALBUMS[open.a] : null

  return (
    <Section id="qalereya" tone="gallery">
      <SectionTitle>{t.galH}</SectionTitle>
      <p className={styles.lead}>{t.galLead}</p>
      <div className={styles.gal}>
        {ALBUMS.map((a, k) => {
          const cover = a.items.find((x) => x.type === 'photo')
          return (
            <button key={a.slug} className={`${styles.item} ${styles[`c${k % 6}`]}`} onClick={() => setOpen({ a: k, i: 0 })}>
              <i className={styles.emoji} aria-hidden="true">{a.emoji}</i>
              {cover && <img src={cover.src} alt="" loading="lazy" decoding="async" />}
              <span><b>{t.albums[k][0]}</b><small>{countText(a.items, t.galSoon)}</small></span>
            </button>
          )
        })}
      </div>
      <Button variant="ghost" href={contact.instagram} target="_blank" rel="noreferrer">{t.galMore}</Button>
      <Lightbox
        items={album ? album.items : []}
        index={open ? open.i : null}
        title={album ? t.albums[open.a][1] : ''}
        emoji={album ? album.emoji : ''}
        empty={t.galEmpty}
        onChange={(i) => setOpen(i === null ? null : { ...open, i })}
      />
    </Section>
  )
}
