// Qoğal nağılının kuklaları (SVG, viewBox 120×140): Qoğal, dovşan, tülkü.

function Bun() {
  return (
    <>
      <defs>
        <radialGradient id="bnBody" cx="38%" cy="30%" r="80%">
          <stop offset="0" stopColor="#fff09a" />
          <stop offset="0.55" stopColor="#ffd23f" />
          <stop offset="1" stopColor="#f0a41c" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="128" rx="34" ry="6" fill="#000" opacity="0.2" />
      <circle cx="60" cy="80" r="50" fill="url(#bnBody)" stroke="#e08f12" strokeWidth="3" />
      <ellipse cx="38" cy="50" rx="17" ry="8" fill="#fff" opacity="0.35" />
      <circle cx="36" cy="92" r="8" fill="#ff8a7a" opacity="0.55" />
      <circle cx="84" cy="92" r="8" fill="#ff8a7a" opacity="0.55" />
      {[46, 74].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="74" rx="7" ry="9" fill="#fff" stroke="#7a4a12" strokeWidth="1.5" />
          <ellipse cx={cx} cy="76" rx="4.6" ry="6.4" fill="#3a2010" />
          <circle cx={cx - 1.6} cy="72.5" r="2" fill="#fff" />
        </g>
      ))}
      <path d="M38 62 Q46 56 54 62 M66 62 Q74 56 82 62" fill="none" stroke="#9a5c12" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M50 92 Q60 106 70 92 Q60 97 50 92Z" fill="#b8323f" />
      <ellipse cx="60" cy="98" rx="4" ry="1.8" fill="#ff8aa0" />
    </>
  )
}

function Bunny() {
  return (
    <>
      <defs>
        <linearGradient id="bnFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9cdd3" />
          <stop offset="1" stopColor="#9aa0aa" />
        </linearGradient>
      </defs>
      {/* qırmızı köynək */}
      <path d="M12 140 Q16 100 60 98 Q104 100 108 140Z" fill="#dc4430" />
      {[[30, 118], [50, 128], [76, 120], [92, 130], [62, 110]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3" fill="#b83020" />
      ))}
      <path d="M50 99 Q60 108 70 99Z" fill="#fff" />
      {/* uzun qulaqlar */}
      <path d="M36 46 Q20 6 34 2 Q52 6 50 46Z" fill="url(#bnFur)" />
      <path d="M84 46 Q100 6 86 2 Q68 6 70 46Z" fill="url(#bnFur)" />
      <path d="M38 42 Q30 14 36 8 Q46 12 46 42Z" fill="#f4b7c6" />
      <path d="M82 42 Q90 14 84 8 Q74 12 74 42Z" fill="#f4b7c6" />
      {/* baş */}
      <ellipse cx="60" cy="72" rx="31" ry="28" fill="url(#bnFur)" />
      <ellipse cx="60" cy="84" rx="19" ry="14" fill="#fff" />
      {[45, 75].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="66" rx="7" ry="8.6" fill="#fff" />
          <ellipse cx={cx} cy="67" rx="5.2" ry="7" fill="#2a2a32" />
          <circle cx={cx - 1.8} cy="64" r="2.3" fill="#fff" />
        </g>
      ))}
      <path d="M38 55 Q45 51 52 55 M68 55 Q75 51 82 55" fill="none" stroke="#6f747d" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M55 77 Q60 73 65 77 Q60 82 55 77Z" fill="#f08aa0" />
      <path d="M60 80 L60 85 M60 85 Q55 89 51 86 M60 85 Q65 89 69 86" fill="none" stroke="#6f747d" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M57 86 L63 86 L63 92 L57 92Z" fill="#fff" stroke="#c9cdd3" strokeWidth="1" />
      <circle cx="36" cy="80" r="5.5" fill="#ff8d9a" opacity="0.5" />
      <circle cx="84" cy="80" r="5.5" fill="#ff8d9a" opacity="0.5" />
    </>
  )
}

function FoxLady() {
  return (
    <>
      <defs>
        <linearGradient id="fxFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7902a" />
          <stop offset="1" stopColor="#e0661a" />
        </linearGradient>
      </defs>
      {/* ağ köynək, qırmızı jilet */}
      <path d="M8 140 Q12 102 60 99 Q108 102 112 140Z" fill="#faf4e9" />
      <path d="M8 140 Q12 108 38 101 L48 140Z" fill="#c0392b" />
      <path d="M112 140 Q108 108 82 101 L72 140Z" fill="#c0392b" />
      <path d="M18 112 L26 112 M16 120 L24 120 M94 112 L102 112 M96 120 L104 120" stroke="#2f6fb5" strokeWidth="3" strokeLinecap="round" />
      {/* qulaqlar */}
      <path d="M26 52 L22 6 L54 34Z" fill="url(#fxFur)" />
      <path d="M94 52 L98 6 L66 34Z" fill="url(#fxFur)" />
      <path d="M30 44 L28 16 L46 34Z" fill="#3b2a1e" />
      <path d="M90 44 L92 16 L74 34Z" fill="#3b2a1e" />
      {/* baş */}
      <path d="M16 72 Q16 36 60 32 Q104 36 104 72 Q102 102 60 114 Q18 102 16 72Z" fill="url(#fxFur)" />
      <path d="M16 76 Q30 90 60 92 Q90 90 104 76 Q102 104 60 114 Q18 104 16 76Z" fill="#fff8ee" />
      {[44, 76].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="68" rx="6.4" ry="8" fill="#2b1a10" />
          <circle cx={cx - 2} cy="65" r="2.4" fill="#fff" />
        </g>
      ))}
      <path d="M36 62 Q33 58 31 59 M84 62 Q87 58 89 59" fill="none" stroke="#2b1a10" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 56 Q44 51 52 56 M68 56 Q76 51 84 56" fill="none" stroke="#b5561a" strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="60" cy="91" rx="5.4" ry="3.8" fill="#26262e" />
      <path d="M60 94 L60 98 M53 99 Q60 105 67 99" fill="none" stroke="#7a4a2a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="86" r="5.5" fill="#ff9aa6" opacity="0.5" />
      <circle cx="86" cy="86" r="5.5" fill="#ff9aa6" opacity="0.5" />
    </>
  )
}

export const qogal = { bun: Bun, bunny: Bunny, foxlady: FoxLady }
