// Cırtdan nağılının kuklaları (SVG, viewBox 120×140): Cırtdan, qardaşı, div.

function Cirtdan() {
  return (
    <>
      <defs>
        <radialGradient id="ctFace" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#ffe9d2" />
          <stop offset="1" stopColor="#f6c9a0" />
        </radialGradient>
        <linearGradient id="ctFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a7650" />
          <stop offset="1" stopColor="#6a4a2c" />
        </linearGradient>
      </defs>
      {/* köynək və yun kürkü (sarı) */}
      <path d="M12 140 Q16 100 60 98 Q104 100 108 140Z" fill="#f4c64b" />
      <path d="M47 99 Q60 114 73 99 L70 140 L50 140Z" fill="#fff4d6" />
      <path d="M44 100 L49 100 L48 140 L42 140Z" fill="#8a5a30" />
      <path d="M76 100 L71 100 L72 140 L78 140Z" fill="#8a5a30" />
      <path d="M14 126 Q16 112 30 106" fill="none" stroke="#8a5a30" strokeWidth="5" strokeLinecap="round" />
      <path d="M106 126 Q104 112 90 106" fill="none" stroke="#8a5a30" strokeWidth="5" strokeLinecap="round" />
      {/* qulaqlar və üz */}
      <circle cx="35" cy="70" r="5.5" fill="#f6c9a0" />
      <circle cx="85" cy="70" r="5.5" fill="#f6c9a0" />
      <ellipse cx="60" cy="70" rx="25" ry="25" fill="url(#ctFace)" />
      {/* saç */}
      <path d="M34 60 Q36 46 60 44 Q84 46 86 60 Q76 52 60 54 Q44 52 34 60Z" fill="#5b3a22" />
      {/* xəz papaq */}
      <path d="M30 54 Q28 12 60 10 Q92 12 90 54 Q60 44 30 54Z" fill="url(#ctFur)" />
      {[[34, 54], [44, 50], [55, 48], [66, 48], [77, 50], [87, 54]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="6.2" fill="#8a6a46" stroke="#5e4429" strokeWidth="1.2" />
      ))}
      <path d="M44 24 Q60 16 76 24" fill="none" stroke="#b69470" strokeWidth="3" strokeLinecap="round" />
      {/* üz cizgiləri */}
      <circle cx="43" cy="82" r="5.5" fill="#ff8d8d" opacity="0.5" />
      <circle cx="77" cy="82" r="5.5" fill="#ff8d8d" opacity="0.5" />
      {[49, 71].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="71" rx="4.6" ry="6" fill="#3a2316" />
          <circle cx={cx - 1.4} cy="68.6" r="1.7" fill="#fff" />
        </g>
      ))}
      <path d="M43 62 Q49 58 55 62 M65 62 Q71 58 77 62" fill="none" stroke="#5b3a22" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M58 79 Q60 81 62 79" fill="none" stroke="#e29a7c" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 86 Q60 94 68 86 Q60 89 52 86Z" fill="#b8323f" />
    </>
  )
}

function Brother() {
  return (
    <>
      <defs>
        <radialGradient id="brFace" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#ffe6cd" />
          <stop offset="1" stopColor="#f2c298" />
        </radialGradient>
      </defs>
      {/* qırmızı köynək, sarı qurşaq */}
      <path d="M10 140 Q14 100 60 98 Q106 100 110 140Z" fill="#e5523a" />
      <path d="M49 99 Q60 110 71 99Z" fill="#fff4d6" />
      <path d="M10 124 Q60 131 110 124 L111 137 Q60 144 9 137Z" fill="#f4c542" />
      <path d="M26 112 Q30 104 40 102 M94 112 Q90 104 80 102" fill="none" stroke="#c63b26" strokeWidth="3" strokeLinecap="round" />
      {/* üz və saç */}
      <circle cx="33" cy="68" r="6" fill="#f2c298" />
      <circle cx="87" cy="68" r="6" fill="#f2c298" />
      <ellipse cx="60" cy="68" rx="27" ry="27" fill="url(#brFace)" />
      <path d="M31 62 Q28 22 60 20 Q92 22 89 62 Q84 42 60 44 Q36 42 31 62Z" fill="#5b3a22" />
      <path d="M30 60 Q27 78 33 86 L38 62Z" fill="#5b3a22" />
      <path d="M90 60 Q93 78 87 86 L82 62Z" fill="#5b3a22" />
      <circle cx="40" cy="80" r="6" fill="#ff8d8d" opacity="0.45" />
      <circle cx="80" cy="80" r="6" fill="#ff8d8d" opacity="0.45" />
      {[48, 72].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="68" rx="5" ry="6.4" fill="#2e1c10" />
          <circle cx={cx - 1.5} cy="65.5" r="1.8" fill="#fff" />
        </g>
      ))}
      <path d="M41 58 Q48 54 55 58 M65 58 Q72 54 79 58" fill="none" stroke="#4a2c16" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M58 77 Q60 79 62 77" fill="none" stroke="#dc9376" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 85 Q60 92 68 85" fill="none" stroke="#a63a30" strokeWidth="2.6" strokeLinecap="round" />
    </>
  )
}

function Giant() {
  return (
    <>
      <defs>
        <linearGradient id="dvSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d49a63" />
          <stop offset="1" stopColor="#a8693a" />
        </linearGradient>
      </defs>
      {/* iri bədən, xəz geyim */}
      <path d="M0 140 Q4 96 60 92 Q116 96 120 140Z" fill="url(#dvSkin)" />
      <path d="M8 140 Q8 108 38 100 L60 128 L82 100 Q112 108 112 140Z" fill="#8f8f96" />
      {[[26, 124], [44, 134], [74, 130], [94, 122], [60, 138], [34, 110], [86, 110]].map(([x, y]) => (
        <ellipse key={`${x}${y}`} cx={x} cy={y} rx="5" ry="3.4" fill="#5c5c64" />
      ))}
      <path d="M40 100 Q60 116 80 100" fill="none" stroke="#a8693a" strokeWidth="4" strokeLinecap="round" />
      {/* sivri qulaqlar */}
      <path d="M24 62 L6 46 L26 80Z" fill="#c68a55" />
      <path d="M96 62 L114 46 L94 80Z" fill="#c68a55" />
      {/* baş */}
      <path d="M22 70 Q20 30 60 26 Q100 30 98 70 Q100 100 78 108 Q60 114 42 108 Q20 100 22 70Z" fill="url(#dvSkin)" />
      {/* daranmamış saç */}
      <path d="M26 44 L30 22 L42 38 L50 16 L60 36 L70 16 L78 38 L90 22 L94 44 Q60 32 26 44Z" fill="#3b2416" />
      {/* qaşlar və gözlər */}
      <path d="M31 56 Q43 47 55 57" fill="none" stroke="#3b2416" strokeWidth="6.5" strokeLinecap="round" />
      <path d="M89 56 Q77 47 65 57" fill="none" stroke="#3b2416" strokeWidth="6.5" strokeLinecap="round" />
      {[43, 77].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="64" rx="7.6" ry="5.4" fill="#f7ecb8" stroke="#3b2416" strokeWidth="1.6" />
          <circle cx={cx} cy="64.5" r="3" fill="#2a1a10" />
          <circle cx={cx - 1} cy="63.4" r="1" fill="#fff" />
        </g>
      ))}
      {/* iri burun */}
      <path d="M50 68 Q60 62 70 68 Q73 84 60 86 Q47 84 50 68Z" fill="#b3743f" />
      <ellipse cx="55" cy="82" rx="2.2" ry="1.6" fill="#6e3f1d" />
      <ellipse cx="65" cy="82" rx="2.2" ry="1.6" fill="#6e3f1d" />
      {/* ağız və dişlər */}
      <path d="M40 94 Q60 108 80 94 Q60 101 40 94Z" fill="#4a1d14" />
      <path d="M45 95 L50 95 L47.5 102Z" fill="#fff" />
      <path d="M70 95 L75 95 L72.5 102Z" fill="#fff" />
    </>
  )
}

export const cirtdan = { cirtdan: Cirtdan, brother: Brother, giant: Giant }
