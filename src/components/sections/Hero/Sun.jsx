import { useState } from 'react'
import { fireConfetti } from '@/components/ui/Confetti'
import styles from './Sun.module.css'

const PETALS = 12
// Ləçək şüalar: yuxarı baxan damla forması (uzun və qısa növbələşir, yüngül əyri)
const LONG = 'M-18 -68 Q-32 -108 4 -150 Q30 -108 18 -68 Z'
const SHORT = 'M-17 -68 Q-28 -102 -2 -136 Q28 -102 17 -68 Z'

// Gülən günəş: yumşaq ləçək şüalar, iri parlaq gözlər, yanaqlar, açıq təbəssüm.
// Üstünə klik: günəş sevinir (qaş-qabaq, sıçrayış) və konfeti səpilir.
export default function Sun() {
  const [joy, setJoy] = useState(0)
  const onClick = (e) => { setJoy((n) => n + 1); fireConfetti(e) }

  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        key={joy}
        className={`${styles.sun} ${joy ? styles.joy : ''}`}
        viewBox="-170 -170 340 340"
        onClick={onClick}
      >
        <defs>
          <radialGradient id="sunFace" cx="38%" cy="30%" r="78%">
            <stop offset="0" stopColor="#fff2a0" />
            <stop offset="0.5" stopColor="#ffd633" />
            <stop offset="1" stopColor="#ffab1a" />
          </radialGradient>
          <linearGradient id="sunPetal" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#ffd633" />
            <stop offset="1" stopColor="#ff9d1c" />
          </linearGradient>
          <radialGradient id="sunGlow">
            <stop offset="0.45" stopColor="#fff3a0" stopOpacity="0.8" />
            <stop offset="1" stopColor="#fff3a0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunCheek">
            <stop offset="0" stopColor="#ff6f86" stopOpacity="0.85" />
            <stop offset="1" stopColor="#ff6f86" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunIris" cx="50%" cy="35%" r="70%">
            <stop offset="0" stopColor="#7a4420" />
            <stop offset="1" stopColor="#2a1408" />
          </radialGradient>
          <clipPath id="mouthClip"><path d="M-24 26 Q0 66 24 26 Q0 33 -24 26 Z" /></clipPath>
        </defs>

        <circle className={styles.glow} r="165" fill="url(#sunGlow)" />

        <g className={styles.rays}>
          {Array.from({ length: PETALS }, (_, i) => (
            <g key={i} transform={`rotate(${(360 / PETALS) * i})`}>
              <path
                className={styles.petal}
                style={{ animationDelay: `${(i * 0.2).toFixed(1)}s` }}
                d={i % 2 ? SHORT : LONG}
                fill="url(#sunPetal)"
                stroke="#f58f12"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </g>
          ))}
        </g>

        <g className={styles.face}>
          <circle r="86" fill="url(#sunFace)" stroke="#f59a14" strokeWidth="3" />
          {/* parıltı */}
          <ellipse cx="-34" cy="-56" rx="30" ry="14" fill="#fff" opacity="0.3" transform="rotate(-28 -34 -56)" />
          {/* yanaqlar */}
          <circle cx="-56" cy="16" r="20" fill="url(#sunCheek)" />
          <circle cx="56" cy="16" r="20" fill="url(#sunCheek)" />
          {/* qaşlar */}
          <path className={styles.brow} d="M-50 -42 Q-33 -54 -17 -44" fill="none" stroke="#9a5410" strokeWidth="3.5" strokeLinecap="round" />
          <path className={styles.brow} d="M17 -44 Q33 -54 50 -42" fill="none" stroke="#9a5410" strokeWidth="3.5" strokeLinecap="round" />
          {/* gözlər */}
          <g className={styles.eyes}>
            <ellipse cx="-31" cy="-12" rx="15" ry="19" fill="#fff" stroke="#c9770f" strokeWidth="2" />
            <ellipse cx="31" cy="-12" rx="15" ry="19" fill="#fff" stroke="#c9770f" strokeWidth="2" />
            <ellipse cx="-30" cy="-9" rx="11.5" ry="15" fill="url(#sunIris)" />
            <ellipse cx="32" cy="-9" rx="11.5" ry="15" fill="url(#sunIris)" />
            <circle cx="-34" cy="-16" r="5" fill="#fff" />
            <circle cx="28" cy="-16" r="5" fill="#fff" />
            <circle cx="-26" cy="-1" r="2.6" fill="#fff" opacity="0.9" />
            <circle cx="36" cy="-1" r="2.6" fill="#fff" opacity="0.9" />
          </g>
          {/* burun */}
          <ellipse cx="0" cy="12" rx="5.5" ry="4" fill="#ff9a2a" stroke="#e8820e" strokeWidth="1.5" />
          {/* ağız */}
          <path d="M-24 26 Q0 66 24 26 Q0 33 -24 26 Z" fill="#9b1c2e" stroke="#6e0f1d" strokeWidth="3" strokeLinejoin="round" />
          <g clipPath="url(#mouthClip)">
            <ellipse cx="0" cy="56" rx="15" ry="11" fill="#ff7088" />
          </g>
        </g>
      </svg>
    </div>
  )
}
