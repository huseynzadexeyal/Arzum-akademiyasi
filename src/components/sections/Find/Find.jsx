import { useState } from 'react'
import { useApp } from '@/context/AppContext'
import { contact } from '@/data/contact'
import Button from '@/components/ui/Button'
import Lead from '@/components/ui/Lead'
import Section, { SectionTitle } from '@/components/ui/Section'
import styles from './Find.module.css'

export default function Find() {
  const { t } = useApp()
  const [showMap, setShowMap] = useState(false)
  const q = encodeURIComponent(contact.mapQuery)
  return (
    <Section id="xerite" tone="find" className={styles.find}>
      <SectionTitle>{t.findH}</SectionTitle>
      <Lead>{t.addr}</Lead>
      <div className={styles.map}>
        {showMap ? (
          <iframe title={t.findH} referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${q}&output=embed`} />
        ) : (
          <button className={styles.placeholder} onClick={() => setShowMap(true)}>
            <span aria-hidden="true">📍</span>{t.showMap}
          </button>
        )}
      </div>
      <Button target="_blank" rel="noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}>{t.route}</Button>
    </Section>
  )
}
