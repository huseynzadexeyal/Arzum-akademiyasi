import { Fragment } from 'react'
import { useApp } from '@/context/AppContext'
import { contact, telHref } from '@/data/contact'
import { SECTION } from '@/data/nav'
import Section, { SectionTitle } from '@/components/ui/Section'
import styles from './Faq.module.css'

// Cavablarda {tel} yazılan yer zəng linkinə çevrilir (nömrə yalnız data/contact.js-də saxlanır).
function withPhone(text) {
  return text.split('{tel}').map((part, i, all) => (
    <Fragment key={i}>
      {part}
      {i < all.length - 1 && <a href={telHref}>{contact.phone}</a>}
    </Fragment>
  ))
}

export default function Faq() {
  const { t } = useApp()
  return (
    <Section id={SECTION.faq} className={styles.faq}>
      <SectionTitle>{t.faqH}</SectionTitle>
      <div className={styles.list}>
        {t.faq.map(([q, a]) => (
          // `name` eyni olan <details> elementləri birlikdə açılır-bağlanır (köhnə brauzerdə hər biri ayrıca işləyir)
          <details key={q} name="faq" className={styles.item}>
            <summary>{q}</summary>
            <p>{withPhone(a)}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
