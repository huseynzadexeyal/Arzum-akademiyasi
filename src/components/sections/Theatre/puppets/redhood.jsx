// Qırmızı Papaq nağılının kuklaları (SVG, viewBox 120×140): canavar, Qırmızı Papaq, nənə.

function RedHood() {
  return (
    <>
      <defs>
        <linearGradient id="rhCape" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f04450" />
          <stop offset="1" stopColor="#b3121f" />
        </linearGradient>
        <radialGradient id="rhFace" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#ffeede" />
          <stop offset="1" stopColor="#ffd2b0" />
        </radialGradient>
      </defs>
      {/* plaş və ağ köynək */}
      <path d="M8 140 Q12 98 60 94 Q108 98 112 140Z" fill="url(#rhCape)" />
      <path d="M45 98 Q60 122 75 98 L72 140 L48 140Z" fill="#fffaf2" />
      <path d="M45 98 Q60 113 75 98 Q60 108 45 98Z" fill="#fff" stroke="#e6d8c2" strokeWidth="1.5" />
      <circle cx="60" cy="109" r="3.6" fill="#ffcf40" stroke="#d99a10" strokeWidth="1" />
      {/* papaq (başlıq) */}
      <path d="M14 82 Q8 22 60 10 Q112 22 106 82 Q106 102 84 106 L36 106 Q14 102 14 82Z" fill="url(#rhCape)" />
      <path d="M52 12 Q60 2 68 12 Q60 9 52 12Z" fill="#d6212e" />
      {/* arxa saç */}
      <path d="M26 60 Q22 94 33 100 L42 80Z" fill="#7a3f1d" />
      <path d="M94 60 Q98 94 87 100 L78 80Z" fill="#7a3f1d" />
      {/* üz */}
      <ellipse cx="60" cy="69" rx="28" ry="27" fill="url(#rhFace)" />
      {/* tökülən saç */}
      <path d="M31 64 Q33 38 60 36 Q87 38 89 64 Q76 50 60 55 Q44 50 31 64Z" fill="#7a3f1d" />
      {/* papağın üz ətrafındakı qırağı */}
      <path d="M25 78 Q19 28 60 20 Q101 28 95 78" fill="none" stroke="#cf1b2a" strokeWidth="7" strokeLinecap="round" />
      {/* yanaqlar */}
      <circle cx="40" cy="81" r="6.5" fill="#ff7f8a" opacity="0.5" />
      <circle cx="80" cy="81" r="6.5" fill="#ff7f8a" opacity="0.5" />
      {/* gözlər */}
      {[48, 72].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="68" rx="7" ry="8.5" fill="#fff" />
          <ellipse cx={cx} cy="69" rx="5.2" ry="7" fill="#5b2e14" />
          <ellipse cx={cx} cy="70" rx="2.7" ry="3.6" fill="#1e0f06" />
          <circle cx={cx - 2} cy="65.5" r="2.3" fill="#fff" />
          <circle cx={cx + 2} cy="73" r="1.1" fill="#fff" />
        </g>
      ))}
      <path d="M41 63 Q48 57 55 63" fill="none" stroke="#4a2410" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M65 63 Q72 57 79 63" fill="none" stroke="#4a2410" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M41 56 Q48 51 55 55" fill="none" stroke="#7a3f1d" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M65 55 Q72 51 79 56" fill="none" stroke="#7a3f1d" strokeWidth="2.4" strokeLinecap="round" />
      {/* burun və təbəssüm */}
      <path d="M58 78 Q60 81 62 78" fill="none" stroke="#e5937a" strokeWidth="2" strokeLinecap="round" />
      <path d="M51 85 Q60 98 69 85 Q60 89 51 85Z" fill="#b8323f" />
      <ellipse cx="60" cy="90" rx="3.6" ry="1.4" fill="#ff8aa0" />
    </>
  )
}

function Wolf() {
  return (
    <>
      <defs>
        <linearGradient id="wFur" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#aab0bb" />
          <stop offset="1" stopColor="#6f7684" />
        </linearGradient>
        <clipPath id="wMouth"><path d="M40 92 Q60 118 80 92 Q60 98 40 92Z" /></clipPath>
      </defs>
      {/* bədən və ağ sinə */}
      <path d="M6 140 Q10 102 60 98 Q110 102 114 140Z" fill="url(#wFur)" />
      <path d="M40 102 Q60 130 80 102 L74 140 L46 140Z" fill="#f1f3f6" />
      {/* qulaqlar */}
      <path d="M22 56 Q12 18 24 3 Q42 10 54 30Z" fill="url(#wFur)" />
      <path d="M98 56 Q108 18 96 3 Q78 10 66 30Z" fill="url(#wFur)" />
      <path d="M27 46 Q22 22 28 11 Q39 17 47 31Z" fill="#eaa1b0" />
      <path d="M93 46 Q98 22 92 11 Q81 17 73 31Z" fill="#eaa1b0" />
      {/* baş */}
      <path d="M12 72 Q8 30 60 26 Q112 30 108 72 Q117 82 104 94 Q92 109 60 109 Q28 109 16 94 Q3 82 12 72Z" fill="url(#wFur)" />
      <path d="M10 80 L1 86 L12 92Z" fill="#868c98" />
      <path d="M110 80 L119 86 L108 92Z" fill="#868c98" />
      <path d="M44 34 Q60 22 76 34 Q66 42 60 52 Q54 42 44 34Z" fill="#c6cbd4" />
      {/* ağ burun hissəsi */}
      <ellipse cx="60" cy="87" rx="31" ry="21" fill="#eef0f4" />
      {/* gözlər */}
      {[40, 80].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="62" rx="10.5" ry="11.5" fill="#fff" stroke="#3c4048" strokeWidth="2" />
          <ellipse cx={cx + 1} cy="63.5" rx="7.5" ry="9" fill="#5a3a22" />
          <ellipse cx={cx + 1} cy="64.5" rx="4" ry="5.5" fill="#14100d" />
          <circle cx={cx - 2} cy="59" r="3" fill="#fff" />
          <circle cx={cx + 4} cy="68" r="1.4" fill="#fff" />
        </g>
      ))}
      <path d="M26 48 Q40 39 52 50" fill="none" stroke="#4a4f59" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M94 48 Q80 39 68 50" fill="none" stroke="#4a4f59" strokeWidth="5.5" strokeLinecap="round" />
      {/* burun */}
      <path d="M50 77 Q60 69 70 77 Q68 86 60 87 Q52 86 50 77Z" fill="#26262e" />
      <ellipse cx="55.5" cy="75.5" rx="4" ry="1.6" fill="#fff" opacity="0.35" />
      {/* ağız */}
      <path d="M40 92 Q60 118 80 92 Q60 98 40 92Z" fill="#7d1d2b" />
      <g clipPath="url(#wMouth)"><ellipse cx="60" cy="104" rx="10" ry="5.5" fill="#f07f93" /></g>
      <path d="M46 93.5 L51 93.5 L48.5 100Z" fill="#fff" />
      <path d="M69 93.5 L74 93.5 L71.5 100Z" fill="#fff" />
      <path d="M60 87 L60 91" stroke="#26262e" strokeWidth="2" strokeLinecap="round" />
    </>
  )
}

function Granny() {
  return (
    <>
      <defs>
        <radialGradient id="grFace" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#ffe9d6" />
          <stop offset="1" stopColor="#ffd3b2" />
        </radialGradient>
      </defs>
      {/* donu çiçəkli don */}
      <path d="M6 140 Q10 102 60 98 Q110 102 114 140Z" fill="#eba6ba" />
      {[[24, 124], [44, 132], [80, 128], [98, 122], [62, 136], [30, 108], [92, 108]].map(([x, y]) => (
        <g key={`${x}${y}`}>
          <circle cx={x} cy={y} r="4" fill="#fff" opacity="0.85" />
          <circle cx={x} cy={y} r="1.3" fill="#f3c24a" />
        </g>
      ))}
      {/* krujeva yaxalıq */}
      <path d="M36 100 Q60 126 84 100 Q72 98 60 106 Q48 98 36 100Z" fill="#fffdf8" stroke="#eadfcb" strokeWidth="1" />
      {[[41, 111], [50, 116], [60, 119], [70, 116], [79, 111]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="3.4" fill="#fffdf8" stroke="#eadfcb" strokeWidth="1" />
      ))}
      {/* ağ buruq saç */}
      {[[22, 72, 10], [20, 89, 8], [98, 72, 10], [100, 89, 8]].map(([x, y, r]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r={r} fill="#eceef2" stroke="#cfd3db" strokeWidth="1.5" />
      ))}
      {/* üz */}
      <ellipse cx="60" cy="76" rx="26" ry="24" fill="url(#grFace)" />
      {/* başlıq (bonnet) */}
      <path d="M18 66 Q14 22 60 20 Q106 22 102 66 Q60 40 18 66Z" fill="#fffaf0" stroke="#eadfcb" strokeWidth="1.5" />
      <path d="M42 27 Q38 38 40 50 M60 23 Q60 35 60 48 M78 27 Q82 38 80 50" fill="none" stroke="#eadfcb" strokeWidth="1.2" />
      {[[24, 64], [34, 58.5], [46, 54.5], [60, 53], [74, 54.5], [86, 58.5], [96, 64]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="5.2" fill="#fffaf0" stroke="#eadfcb" strokeWidth="1.2" />
      ))}
      {/* yanaqlar */}
      <circle cx="38" cy="88" r="6" fill="#ff8e9a" opacity="0.5" />
      <circle cx="82" cy="88" r="6" fill="#ff8e9a" opacity="0.5" />
      {/* gözlər */}
      {[47, 73].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="75" r="3.8" fill="#3a2316" />
          <circle cx={cx - 1.2} cy="73.6" r="1.3" fill="#fff" />
        </g>
      ))}
      <path d="M40 62 Q47 58 54 62" fill="none" stroke="#b9bcc4" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M66 62 Q73 58 80 62" fill="none" stroke="#b9bcc4" strokeWidth="2.4" strokeLinecap="round" />
      {/* eynək */}
      <circle cx="47" cy="75" r="10.5" fill="#fff" fillOpacity="0.22" stroke="#c9962a" strokeWidth="2.6" />
      <circle cx="73" cy="75" r="10.5" fill="#fff" fillOpacity="0.22" stroke="#c9962a" strokeWidth="2.6" />
      <path d="M57.5 74 Q60 71 62.5 74" fill="none" stroke="#c9962a" strokeWidth="2.4" strokeLinecap="round" />
      {/* burun, qırışlar, təbəssüm */}
      <path d="M58 84 Q60 87 62 84" fill="none" stroke="#e4967a" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 80 Q33 83 35 86 M85 80 Q87 83 85 86" fill="none" stroke="#e6b79c" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M51 92 Q60 102 69 92 Q60 95 51 92Z" fill="#c0404d" />
    </>
  )
}

export const redhood = { hood: RedHood, wolf: Wolf, granny: Granny }
