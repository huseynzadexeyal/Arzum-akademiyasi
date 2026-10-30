// Tıq-tıq xanım nağılının kuklaları (SVG, viewBox 120×140): Tıq-tıq xanım, təlxək, tülkü.
// Bu kuklalar ipli kukladır (marionet), ipləri CSS ilə yuxarıdan çəkilir.

function TiqTiq() {
  return (
    <>
      <defs>
        <linearGradient id="ttHair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffa43c" />
          <stop offset="1" stopColor="#e0701a" />
        </linearGradient>
        <radialGradient id="ttFace" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#ffeede" />
          <stop offset="1" stopColor="#ffd2ae" />
        </radialGradient>
      </defs>
      {/* qırmızı xallı don */}
      <path d="M6 140 Q12 100 60 98 Q108 100 114 140Z" fill="#e03a45" />
      <circle cx="24" cy="114" r="12" fill="#e03a45" />
      <circle cx="96" cy="114" r="12" fill="#e03a45" />
      {[[20, 112], [28, 120], [92, 112], [100, 120], [36, 132], [60, 124], [84, 132], [48, 112], [74, 112], [60, 138]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="3.4" fill="#fff" />
      ))}
      <path d="M44 100 Q60 116 76 100 Q60 98 44 100Z" fill="#ffd2ae" />
      {/* narıncı bukle saç */}
      <ellipse cx="60" cy="60" rx="40" ry="38" fill="url(#ttHair)" />
      {[[24, 70, 11], [96, 70, 11], [28, 92, 9], [92, 92, 9], [32, 40, 10], [88, 40, 10], [60, 22, 10]].map(([x, y, r]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r={r} fill="url(#ttHair)" />
      ))}
      {/* üz */}
      <ellipse cx="60" cy="72" rx="24" ry="23" fill="url(#ttFace)" />
      <path d="M36 62 Q40 44 60 42 Q80 44 84 62 Q72 52 60 56 Q48 52 36 62Z" fill="#f08224" />
      {/* qırmızı bant */}
      <path d="M18 26 L38 36 L20 48Z" fill="#e63a4a" />
      <path d="M54 26 L38 36 L52 48Z" fill="#e63a4a" />
      <circle cx="37" cy="37" r="4.6" fill="#b3202e" />
      <circle cx="42" cy="84" r="5.6" fill="#ff7f8a" opacity="0.5" />
      <circle cx="78" cy="84" r="5.6" fill="#ff7f8a" opacity="0.5" />
      {[50, 70].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="72" rx="4.8" ry="6.6" fill="#4a2410" />
          <circle cx={cx - 1.4} cy="69.6" r="1.8" fill="#fff" />
        </g>
      ))}
      <path d="M44 66 Q41 62 39 63 M76 66 Q79 62 81 63" fill="none" stroke="#4a2410" strokeWidth="2" strokeLinecap="round" />
      <path d="M45 62 Q50 58 55 62 M65 62 Q70 58 75 62" fill="none" stroke="#a0521a" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 80 Q60 82 62 80" fill="none" stroke="#e29a7c" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M52 88 Q60 97 68 88 Q60 91 52 88Z" fill="#c4152e" />
    </>
  )
}

function Clown() {
  return (
    <>
      <defs>
        <linearGradient id="clHat" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f6c93a" />
          <stop offset="1" stopColor="#e7a914" />
        </linearGradient>
      </defs>
      {/* kostyum */}
      <path d="M8 140 Q12 102 60 99 Q108 102 112 140Z" fill="#f2c230" />
      {[[30, 120], [60, 128], [90, 120], [44, 138], [76, 138], [20, 134], [100, 134]].map(([x, y]) => (
        <path key={`${x}${y}`} d={`M${x} ${y - 6} L${x + 6} ${y} L${x} ${y + 6} L${x - 6} ${y}Z`} fill="#e2342f" />
      ))}
      {/* qıvrım yaxalıq */}
      {[[32, 104, '#fff'], [44, 109, '#ffd54a'], [60, 112, '#fff'], [76, 109, '#6cc0f0'], [88, 104, '#fff']].map(([x, y, c]) => (
        <circle key={x} cx={x} cy={y} r="7" fill={c} stroke="#d4dbe8" strokeWidth="1.2" />
      ))}
      {/* narıncı saç */}
      <circle cx="30" cy="66" r="11" fill="#f07a22" />
      <circle cx="90" cy="66" r="11" fill="#f07a22" />
      <circle cx="28" cy="82" r="8" fill="#f07a22" />
      <circle cx="92" cy="82" r="8" fill="#f07a22" />
      {/* üz */}
      <ellipse cx="60" cy="70" rx="26" ry="24" fill="#fff3ea" />
      <circle cx="60" cy="77" r="6.4" fill="#e8283c" />
      <circle cx="58" cy="75" r="1.8" fill="#fff" opacity="0.7" />
      {[49, 71].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="66" rx="4" ry="5.2" fill="#222" />
          <circle cx={cx - 1.2} cy="64" r="1.4" fill="#fff" />
        </g>
      ))}
      <path d="M42 57 Q49 50 56 56 M64 56 Q71 50 78 57" fill="none" stroke="#222" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="40" cy="80" r="5.6" fill="#ff6f7e" opacity="0.6" />
      <circle cx="80" cy="80" r="5.6" fill="#ff6f7e" opacity="0.6" />
      <path d="M44 86 Q60 104 76 86 Q60 93 44 86Z" fill="#c4152e" />
      <path d="M50 88 Q60 94 70 88 L68 91 Q60 95 52 91Z" fill="#fff" />
      {/* qırmızı-sarı zolaqlı papaq */}
      <path d="M60 4 L90 46 Q60 38 30 46Z" fill="url(#clHat)" />
      <path d="M52 16 L68 16 L73 24 L47 24Z" fill="#e2342f" />
      <path d="M43 32 L77 32 L82 40 L38 40Z" fill="#e2342f" />
      <path d="M28 46 Q60 56 92 46 L90 53 Q60 62 30 53Z" fill="#e2342f" />
      <circle cx="60" cy="5" r="6.5" fill="#e2342f" />
    </>
  )
}

function FoxPuppet() {
  return (
    <>
      <defs>
        <linearGradient id="fpFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f08a2a" />
          <stop offset="1" stopColor="#d9631a" />
        </linearGradient>
      </defs>
      {/* narıncı bədən, ağ qarın */}
      <path d="M10 140 Q14 102 60 99 Q106 102 110 140Z" fill="url(#fpFur)" />
      <path d="M42 102 Q60 126 78 102 L72 140 L48 140Z" fill="#fff4e4" />
      {/* qulaqlar */}
      <path d="M28 52 L22 8 L54 34Z" fill="url(#fpFur)" />
      <path d="M92 52 L98 8 L66 34Z" fill="url(#fpFur)" />
      <path d="M32 44 L29 18 L46 34Z" fill="#3b2a1e" />
      <path d="M88 44 L91 18 L74 34Z" fill="#3b2a1e" />
      {/* baş */}
      <path d="M16 72 Q16 36 60 32 Q104 36 104 72 Q102 102 60 114 Q18 102 16 72Z" fill="url(#fpFur)" />
      <path d="M16 78 Q30 92 60 94 Q90 92 104 78 Q102 104 60 114 Q18 104 16 78Z" fill="#fff8ee" />
      {[44, 76].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="68" rx="6.4" ry="8" fill="#2b1a10" />
          <circle cx={cx - 2} cy="65" r="2.4" fill="#fff" />
        </g>
      ))}
      <path d="M36 56 Q44 50 52 56 M68 56 Q76 50 84 56" fill="none" stroke="#9a4a14" strokeWidth="2.6" strokeLinecap="round" />
      <ellipse cx="60" cy="91" rx="5.4" ry="3.8" fill="#26262e" />
      <path d="M60 94 L60 98 M53 99 Q60 105 67 99" fill="none" stroke="#7a4a2a" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

export const tiqtiq = { girl: TiqTiq, clown: Clown, foxpup: FoxPuppet }
