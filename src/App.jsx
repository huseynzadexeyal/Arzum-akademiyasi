import { useEffect } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { AppProvider } from '@/context/AppContext'
import { useDesktop } from '@/hooks/useDesktop'
import TopStripe from '@/components/layout/TopStripe'
import Trail from '@/components/layout/Trail'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CallBar from '@/components/layout/CallBar'
import Confetti from '@/components/ui/Confetti'
import Hero from '@/components/sections/Hero'
import Activities from '@/components/sections/Activities'
import Theatre from '@/components/sections/Theatre'
import Staff from '@/components/sections/Staff'
import Memorial from '@/components/sections/Memorial'
import Memory from '@/components/sections/Memory'
import Gallery from '@/components/sections/Gallery'
import Enroll from '@/components/sections/Enroll'
import Find from '@/components/sections/Find'

export default function App() {
  const desktop = useDesktop()

  // Ekrandan çıxan bölmələrin animasiyalarını dayandırır (CSS-də [data-off])
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.toggleAttribute('data-off', !e.isIntersecting))
    }, { rootMargin: '150px 0px' })
    document.querySelectorAll('main > section').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <AppProvider>
        <TopStripe />
        {desktop && <Trail />}
        <Nav />
        <main>
          <Hero />
          <Activities />
          <Theatre />
          <Staff />
          <Memorial />
          <Memory />
          <Gallery />
          <Enroll />
          <Find />
        </main>
        <Footer />
        <CallBar />
        <Confetti />
      </AppProvider>
    </LazyMotion>
  )
}
