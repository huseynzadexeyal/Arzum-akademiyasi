import Logo from '@/components/ui/Logo'
import styles from './Badge.module.css'

// Dönən möhür: mətn dairəsi + mərkəzdə ulduz içində gerb
export default function Badge() {
  return (
    <svg className={styles.badge} viewBox="0 0 120 120" aria-hidden="true">
      <defs><path id="circ" d="M60 60 m-45 0 a45 45 0 1 1 90 0 a45 45 0 1 1 -90 0" /></defs>
      <g className={styles.ring}>
        <text className={styles.bt} fontSize="10.5" fontFamily="Unbounded, Onest, sans-serif" fontWeight="700" letterSpacing="1.4">
          <textPath href="#circ">Arzum Akademiya • Binəqədi • Bakı • </textPath>
        </text>
      </g>
      <Logo x="28" y="28" width="64" height="64" />
    </svg>
  )
}
