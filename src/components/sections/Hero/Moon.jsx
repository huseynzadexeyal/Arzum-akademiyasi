import { useState } from 'react'
import { fireConfetti } from '@/components/ui/Confetti'
import styles from './Moon.module.css'

// Ulduz forması (5 guşəli), mərkəz 0,0
const STAR = 'M0 -10 L3 -3 L10 -3 L4.5 1.5 L6.5 9 L0 4.5 L-6.5 9 L-4.5 1.5 L-10 -3 L-3 -3 Z'

// [x, y, ölçü, gecikmə(s)]
const STARS = [
  [92, -96, 1, 0],
  [128, -30, 0.7, 0.8],
  [104, 62, 0.85, 1.6],
  [30, -128, 0.6, 2.2],
  [-120, -92, 0.7, 1.2],
  [-132, 70, 0.6, 2.8],
]

// Yatmış ay: qapalı gözlər, təbəssüm, yanaqlar, üzən "z z z" və yanıb-sönən ulduzlar.
// Üstünə klik: ay oyanır (hoppanır, gözləri açılır) və konfeti səpilir.
export default function Moon() {
  const [awake, setAwake] = useState(0)
  const onClick = (e) => { setAwake((n) => n + 1); fireConfetti(e) }

  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        key={awake}
        className={`${styles.moon} ${awake ? styles.awake : ''}`}
        viewBox="-170 -170 340 340"
        onClick={onClick}
      >
        <defs>
          <radialGradient id="moonFace" cx="30%" cy="28%" r="80%">
            <stop offset="0" stopColor="#fffdf0" />
            <stop offset="0.6" stopColor="#fff1b8" />
            <stop offset="1" stopColor="#f2cf6e" />
          </radialGradient>
          <radialGradient id="moonGlow">
            <stop offset="0.4" stopColor="#bfe3ff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#bfe3ff" stopOpacity="0" />
          </radialGradient>
          <mask id="moonCut">
            <rect x="-100" y="-100" width="200" height="200" fill="#fff" />
            <circle cx="46" cy="-12" r="64" fill="#000" />
          </mask>
        </defs>

        <circle r="165" fill="url(#moonGlow)" />

        {/* ətrafda yanıb-sönən ulduzlar */}
        {STARS.map(([x, y, s, d], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
            <path className={styles.star} d={STAR} fill="#fff6c2" style={{ animationDelay: `${d}s` }} />
          </g>
        ))}

        {/* üzən "z z z" */}
        <g className={styles.zzz} fontFamily="Unbounded, Onest, sans-serif" fontWeight="700" fill="#cfe8ff">
          <text className={styles.z1} x="38" y="-62" fontSize="26">z</text>
          <text className={styles.z2} x="62" y="-92" fontSize="20">z</text>
          <text className={styles.z3} x="82" y="-116" fontSize="15">z</text>
        </g>

        <g>
          <g mask="url(#moonCut)">
            <circle r="84" fill="url(#moonFace)" stroke="#e7bd4f" strokeWidth="4" />
            {/* kraterlər */}
            <circle cx="-62" cy="46" r="9" fill="#ecd079" opacity="0.7" />
            <circle cx="-30" cy="-58" r="6" fill="#ecd079" opacity="0.7" />
            <circle cx="-40" cy="62" r="5" fill="#ecd079" opacity="0.6" />
          </g>

          {/* yanaqlar */}
          <ellipse cx="-76" cy="8" rx="9" ry="6" fill="#ff8fa3" opacity="0.6" />
          <ellipse cx="-30" cy="8" rx="8" ry="6" fill="#ff8fa3" opacity="0.6" />

          {/* gözlər: yatanda qapalı, oyananda açıq */}
          <g className={styles.sleepy}>
            <path d="M-80 -16 Q-70 -6 -60 -16" fill="none" stroke="#6b4a12" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M-46 -16 Q-36 -6 -26 -16" fill="none" stroke="#6b4a12" strokeWidth="4.5" strokeLinecap="round" />
          </g>
          <g className={styles.open}>
            <ellipse cx="-70" cy="-14" rx="7" ry="10" fill="#2a1a0a" />
            <ellipse cx="-36" cy="-14" rx="7" ry="10" fill="#2a1a0a" />
            <circle cx="-68" cy="-18" r="3" fill="#fff" />
            <circle cx="-34" cy="-18" r="3" fill="#fff" />
          </g>

          {/* təbəssüm */}
          <path d="M-62 18 Q-53 30 -44 18" fill="none" stroke="#8e5a12" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}
