import { LazyMotion, domAnimation } from 'framer-motion'
import { AppProvider } from '@/context/AppContext'
import { useDesktop } from '@/hooks/useDesktop'
import { usePauseOffscreen } from '@/hooks/usePauseOffscreen'
import SkipLink from '@/components/layout/SkipLink'
import TopStripe from '@/components/layout/TopStripe'
import Trail from '@/components/layout/Trail'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CallBar from '@/components/layout/CallBar'
import Confetti from '@/components/ui/Confetti'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
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
  usePauseOffscreen()

  return (
    <ErrorBoundary>
      <LazyMotion features={domAnimation}>
        <AppProvider>
          <SkipLink />
          <TopStripe />
          {desktop && <Trail />}
          <Nav />
          <main id="main">
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
    </ErrorBoundary>
  )
}
