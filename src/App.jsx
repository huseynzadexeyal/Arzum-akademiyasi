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
import Events from '@/components/sections/Events'
import Memorial from '@/components/sections/Memorial'
import Memory from '@/components/sections/Memory'
import Gallery from '@/components/sections/Gallery'
import Enroll from '@/components/sections/Enroll'
import Find from '@/components/sections/Find'

export default function App() {
  const desktop = useDesktop()
  return (
    <LazyMotion features={domAnimation}>
      <AppProvider>
        <TopStripe />
        {desktop && <Trail />}
        <Nav />
        <main>
          <Hero />
          <Activities />
          <Events />
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
