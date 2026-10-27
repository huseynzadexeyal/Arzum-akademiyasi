import { useId } from 'react'

const rad = (d) => (d * Math.PI) / 180

// 8 guşəli ulduz (cx, cy, xarici radius)
const star = (cx, cy, R) => {
  const r = R * 0.765
  return Array.from({ length: 16 }, (_, i) => {
    const a = rad(-90 + i * 22.5)
    const k = i % 2 ? r : R
    return `${(cx + k * Math.cos(a)).toFixed(1)},${(cy + k * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

// Qalxanın ətrafında yarpaq çələngi: sol budaq hesablanır, sağ budaq güzgü əksidir.
// Hər düyündə iki yarpaq (xaricə və içəri meylli) — klassik dəfnə çələngi.
const LEAVES = Array.from({ length: 8 }, (_, i) => {
  const a = 108 + i * 13
  const at = (R, tilt) => ({ x: 50 + R * Math.cos(rad(a)), y: 62 + R * Math.sin(rad(a)), rot: a + tilt })
  return [at(43.5, -32), at(37.5, 32)]
}).flat()

// Vətənpərvər gerb: bayraq rəngli qalxan, aypara + ulduz, taclı ulduz, yarpaq çələngi.
// size-i parent təyin edir (width/height ötürün).
export default function Emblem(props) {
  const id = `emb${useId().replace(/:/g, '')}`
  return (
    <svg viewBox="0 0 100 120" aria-hidden="true" {...props}>
      <defs>
        <clipPath id={id}><path d="M23 16h54v46c0 24-17 38-27 44C40 100 23 86 23 62z" /></clipPath>
      </defs>

      {[1, -1].map((side) => (
        <g key={side} transform={side === -1 ? 'translate(100 0) scale(-1 1)' : undefined} fill="#3F8F2B">
          {LEAVES.map((l, i) => (
            <ellipse key={i} cx={l.x} cy={l.y} rx="2.5" ry="6.2" transform={`rotate(${l.rot} ${l.x} ${l.y})`} />
          ))}
        </g>
      ))}

      <g clipPath={`url(#${id})`}>
        <rect x="0" y="0" width="100" height="47" fill="#00B5E2" />
        <rect x="0" y="47" width="100" height="30" fill="#DC2A3E" />
        <rect x="0" y="77" width="100" height="45" fill="#3F8F2B" />
      </g>
      <path d="M23 16h54v46c0 24-17 38-27 44C40 100 23 86 23 62z" fill="none" stroke="#FFC83D" strokeWidth="2.6" strokeLinejoin="round" />

      {/* aypara */}
      <g transform="translate(3 0)">
        <path d="M51.1 54.6A9 9 0 1 0 51.1 69.4A7.5 7.5 0 1 1 51.1 54.6Z" fill="#fff" />
        <polygon points={star(56.5, 62, 5)} fill="#fff" />
      </g>

      {/* tac ulduz */}
      <polygon points={star(50, 8, 8)} fill="#FFC83D" stroke="#0A2540" strokeWidth="0.8" strokeLinejoin="round" />
    </svg>
  )
}
