import { useEffect, useState } from 'react'

const QUERY = '(min-width: 801px)'

export function useDesktop() {
  const [desktop, setDesktop] = useState(() => window.matchMedia(QUERY).matches)
  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const onChange = () => setDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return desktop
}
