// Dovşan və Tısbağa nağılının kuklaları (SVG, viewBox 120×140): tısbağa, dovşan.

function Turtle() {
  return (
    <>
      <defs>
        <linearGradient id="trSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fd44e" />
          <stop offset="1" stopColor="#3f9a2a" />
        </linearGradient>
        <linearGradient id="trShell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a6a38" />
          <stop offset="1" stopColor="#5a3a1c" />
        </linearGradient>
      </defs>
      {/* qabıq */}
      <path d="M2 140 Q6 86 60 82 Q114 86 118 140Z" fill="url(#trShell)" />
      <path d="M2 140 Q6 86 60 82 Q114 86 118 140" fill="none" stroke="#4a2e14" strokeWidth="3" />
      <path d="M30 100 Q60 90 90 100 M22 120 Q60 108 98 120 M60 90 L60 140 M40 96 L34 140 M80 96 L86 140" fill="none" stroke="#4a2e14" strokeWidth="2.4" strokeLinecap="round" />
      <ellipse cx="38" cy="108" rx="12" ry="6" fill="#b88650" opacity="0.5" />
      {/* boyun və baş */}
      <path d="M38 76 Q36 98 32 102 L88 102 Q84 98 82 76Z" fill="url(#trSkin)" />
      <ellipse cx="60" cy="58" rx="32" ry="30" fill="url(#trSkin)" />
      <ellipse cx="40" cy="42" rx="11" ry="6" fill="#fff" opacity="0.25" />
      {[46, 74].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="52" rx="9.4" ry="11.6" fill="#fff" stroke="#2f7a1e" strokeWidth="1.6" />
          <ellipse cx={cx + (cx < 60 ? 1 : -1)} cy="54" rx="5.2" ry="7" fill="#1c2a14" />
          <circle cx={cx - 1.6} cy="50" r="2.4" fill="#fff" />
        </g>
      ))}
      <path d="M34 38 Q46 30 56 38 M64 38 Q74 30 86 38" fill="none" stroke="#2f7a1e" strokeWidth="3.4" strokeLinecap="round" />
      <ellipse cx="56" cy="68" rx="1.8" ry="1.2" fill="#2f7a1e" />
      <ellipse cx="64" cy="68" rx="1.8" ry="1.2" fill="#2f7a1e" />
      <path d="M40 74 Q60 92 80 74 Q60 82 40 74Z" fill="#b8323f" />
      <path d="M40 74 Q60 82 80 74" fill="none" stroke="#2f7a1e" strokeWidth="2.4" strokeLinecap="round" />
    </>
  )
}

function Hare() {
  return (
    <>
      <defs>
        <linearGradient id="hrFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3c898" />
          <stop offset="1" stopColor="#dca168" />
        </linearGradient>
      </defs>
      {/* bədən və ağ qarın */}
      <path d="M8 140 Q12 100 60 96 Q108 100 112 140Z" fill="url(#hrFur)" />
      <path d="M30 140 Q32 104 60 100 Q88 104 90 140Z" fill="#fffaf2" />
      {/* sallanan qulaqlar */}
      <path d="M34 42 Q4 30 4 74 Q8 100 26 82 Q34 62 42 46Z" fill="url(#hrFur)" />
      <path d="M86 42 Q116 30 116 74 Q112 100 94 82 Q86 62 78 46Z" fill="url(#hrFur)" />
      <path d="M29 48 Q14 46 13 70 Q16 86 26 74 Q30 62 34 52Z" fill="#f6b9a8" />
      <path d="M91 48 Q106 46 107 70 Q104 86 94 74 Q90 62 86 52Z" fill="#f6b9a8" />
      {/* baş */}
      <ellipse cx="60" cy="62" rx="29" ry="28" fill="url(#hrFur)" />
      <ellipse cx="60" cy="76" rx="18" ry="14" fill="#fffaf2" />
      {[47, 73].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="58" rx="6.6" ry="8.6" fill="#fff" />
          <ellipse cx={cx} cy="59" rx="5" ry="7" fill="#5a2e14" />
          <ellipse cx={cx} cy="60" rx="2.6" ry="3.6" fill="#1a0e06" />
          <circle cx={cx - 1.8} cy="56" r="2.2" fill="#fff" />
        </g>
      ))}
      <path d="M39 46 Q47 40 55 46 M65 46 Q73 40 81 46" fill="none" stroke="#8a4a1a" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M55 70 Q60 66 65 70 Q60 75 55 70Z" fill="#e8584a" />
      <path d="M60 74 L60 78 M60 78 Q54 84 49 80 M60 78 Q66 84 71 80" fill="none" stroke="#8a4a1a" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M57 80 L63 80 L63 86 L57 86Z" fill="#fff" stroke="#e7d9c6" strokeWidth="1" />
      <circle cx="36" cy="72" r="5.4" fill="#ff8d8d" opacity="0.5" />
      <circle cx="84" cy="72" r="5.4" fill="#ff8d8d" opacity="0.5" />
      {/* yaşıl papyon */}
      <path d="M60 98 L40 88 L40 110Z" fill="#6cc04a" stroke="#3f8f2a" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M60 98 L80 88 L80 110Z" fill="#6cc04a" stroke="#3f8f2a" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="60" cy="98" r="5.6" fill="#4ea83a" stroke="#3f8f2a" strokeWidth="1.4" />
    </>
  )
}

export const hare = { turtle: Turtle, hare: Hare }
