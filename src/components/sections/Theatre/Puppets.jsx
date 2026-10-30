import { useId } from 'react'
import styles from './Puppets.module.css'

// Qırmızı papaq tamaşasının kukla personajları (afişadakı kimi): Qırmızı papaq, Canavar, Nənə.
// Hamısı SVG-dir: gözlər qırpılır və kursoru izləyir, danışanda ağız açılıb-bağlanır.
// `head` verilsə yalnız baş görünür (altyazı balonundakı kiçik üz üçün).

const FULL = '0 0 200 260'
const HEAD = '26 8 148 148'
// Qoğal yumrudur: öz çərçivəsi var [bütöv, baş]
const BOX = { bun: ['16 40 168 168', '26 36 148 148'] }


// Ortaq hissələr: gözlər (qırpılır, kursoru izləyir), ağız (danışanda açılır), yanaqlar
const Eyes = ({ xs = [82, 118], y = 108, rx = 10, ry = 12, r = 7, c = '#2a1608' }) => (
  <g className={styles.eyes}>
    {xs.map((x) => <ellipse key={x} cx={x} cy={y} rx={rx} ry={ry} fill="#fff" />)}
    <g className={styles.pupil}>
      {xs.map((x) => (
        <g key={x}>
          <circle cx={x + 1} cy={y + 2} r={r} fill={c} />
          <circle cx={x + 1} cy={y + 2} r={r * 0.5} fill="#0e0804" />
          <circle cx={x + 3.5} cy={y - 1} r={r * 0.33} fill="#fff" />
        </g>
      ))}
    </g>
  </g>
)
const Mouth = ({ x = 100, y = 130, w = 15, h = 14, c = '#8a2230' }) => (
  <g className={styles.mouth}>
    <path d={`M${x - w} ${y} Q${x} ${y + 6} ${x + w} ${y} Q${x + w - 2} ${y + h} ${x} ${y + h} Q${x - w + 2} ${y + h} ${x - w} ${y}Z`} fill={c} />
    <ellipse cx={x} cy={y + h - 3} rx={w * 0.45} ry="3.2" fill="#ff7b8a" />
  </g>
)
const Cheeks = ({ y = 126, dx = 34, c = '#ff8f9a' }) => (
  <>
    <circle cx={100 - dx} cy={y} r="8" fill={c} opacity=".55" />
    <circle cx={100 + dx} cy={y} r="8" fill={c} opacity=".55" />
  </>
)

function Hood({ u }) {
  return (
    <>
      <defs>
        <radialGradient id={`${u}r`} cx="35%" cy="22%" r="85%">
          <stop offset="0" stopColor="#ff5d62" />
          <stop offset=".55" stopColor="#d8262f" />
          <stop offset="1" stopColor="#a5131f" />
        </radialGradient>
      </defs>
      {/* sol əl aşağıda */}
      <circle cx="44" cy="234" r="9" fill="#ffd2b0" />
      {/* alt paltar */}
      <path d="M78 166 Q100 178 122 166 L130 254 Q100 262 70 254Z" fill="#fff3ee" />
      <g fill="#ffb3bd"><circle cx="90" cy="198" r="3.2" /><circle cx="108" cy="214" r="3.2" /><circle cx="94" cy="236" r="3.2" /><circle cx="112" cy="192" r="3.2" /></g>
      {/* plaş */}
      <path d="M40 176 Q68 160 80 166 L68 256 Q48 258 28 252 Q24 220 40 176Z" fill={`url(#${u}r)`} />
      <path d="M160 176 Q132 160 120 166 L132 256 Q152 258 172 252 Q176 220 160 176Z" fill={`url(#${u}r)`} />
      {/* yelləyən əl */}
      <g className={styles.wave}>
        <path d="M148 188 Q168 178 171 156" stroke="#d8262f" strokeWidth="15" strokeLinecap="round" fill="none" />
        <circle cx="171" cy="147" r="10.5" fill="#ffd2b0" />
        <path d="M165 141 Q171 134 177 141" stroke="#f0a97f" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* düyün */}
      <path d="M100 168 L88 182 M100 168 L112 182" stroke="#ffd23f" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="168" r="6.5" fill="#ffd23f" />
      {/* papaq */}
      <path d="M34 118 Q26 28 100 22 Q174 28 166 118 Q168 150 150 176 Q100 150 50 176 Q32 150 34 118Z" fill={`url(#${u}r)`} />
      <path d="M44 108 Q42 44 100 40 Q158 44 156 108" fill="none" stroke="#ff7b80" strokeWidth="3" opacity=".55" strokeLinecap="round" />
      {/* üz */}
      <ellipse cx="100" cy="108" rx="45" ry="43" fill="#ffd2b0" />
      <path d="M56 98 Q58 62 100 60 Q142 62 144 98 Q130 76 112 80 Q100 94 88 80 Q70 76 56 98Z" fill="#8a4b25" />
      <path d="M55 100 Q48 130 60 146 Q56 120 62 104Z M145 100 Q152 130 140 146 Q144 120 138 104Z" fill="#8a4b25" />
      <path d="M70 90 Q82 84 94 90 M106 90 Q118 84 130 90" stroke="#6b3a1c" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <g className={styles.eyes}>
        <ellipse cx="82" cy="108" rx="10" ry="12" fill="#fff" />
        <ellipse cx="118" cy="108" rx="10" ry="12" fill="#fff" />
        <g className={styles.pupil}>
          <circle cx="83" cy="110" r="7.6" fill="#6b3a1c" /><circle cx="83" cy="110" r="4" fill="#1c1008" /><circle cx="86" cy="106" r="2.5" fill="#fff" />
          <circle cx="119" cy="110" r="7.6" fill="#6b3a1c" /><circle cx="119" cy="110" r="4" fill="#1c1008" /><circle cx="122" cy="106" r="2.5" fill="#fff" />
        </g>
        <path d="M71 101 Q82 94 93 100 M107 100 Q118 94 129 101" stroke="#3a2010" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </g>
      <circle cx="66" cy="125" r="8" fill="#ff8f9a" opacity=".55" />
      <circle cx="134" cy="125" r="8" fill="#ff8f9a" opacity=".55" />
      <path d="M97 120 Q100 123 103 120" stroke="#d99a7a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <g className={styles.mouth}>
        <path d="M86 128 Q100 134 114 128 Q112 147 100 147 Q88 147 86 128Z" fill="#a8283a" />
        <ellipse cx="100" cy="141" rx="6.5" ry="3.6" fill="#ff7b8a" />
      </g>
    </>
  )
}

function Wolf({ dressed = false }) {
  return (
    <>
      <g className={styles.tail}>
        <path d="M148 232 Q196 220 190 172 Q178 204 146 210Z" fill="#8c939c" />
        <path d="M190 172 Q192 184 186 196 Q182 184 190 172Z" fill="#e8ebee" />
      </g>
      {dressed ? (
        <>
          <path d="M50 152 Q100 134 150 152 Q166 206 158 252 Q100 264 42 252 Q34 206 50 152Z" fill="#3a6fc2" />
          <path d="M100 148 L100 256" stroke="#2a559a" strokeWidth="3" />
          <g fill="#f3d9a0">
            <path d="M72 176 L79 185 L72 194 L65 185Z M128 176 L135 185 L128 194 L121 185Z M72 200 L79 209 L72 218 L65 209Z M128 200 L135 209 L128 218 L121 209Z" />
          </g>
          <path d="M80 158 Q100 168 120 158" stroke="#d8262f" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M44 228 Q100 242 156 228 L156 240 Q100 254 44 240Z" fill="#d8262f" />
          <ellipse cx="50" cy="214" rx="12" ry="10" fill="#7a818a" /><ellipse cx="150" cy="214" rx="12" ry="10" fill="#7a818a" />
        </>
      ) : (
        <>
      <path d="M50 152 Q100 134 150 152 Q166 206 158 252 Q100 264 42 252 Q34 206 50 152Z" fill="#8c939c" />
      <ellipse cx="100" cy="202" rx="30" ry="44" fill="#e8ebee" />
      <path d="M82 170 L88 180 L94 170 L100 182 L106 170 L112 180 L118 170" stroke="#cfd4d9" strokeWidth="3" fill="none" strokeLinejoin="round" />
      <g fill="#7a818a">
        <ellipse cx="56" cy="236" rx="13" ry="10" /><ellipse cx="144" cy="236" rx="13" ry="10" />
      </g>
      <path d="M50 236 L50 242 M56 238 L56 244 M62 236 L62 242 M138 236 L138 242 M144 238 L144 244 M150 236 L150 242" stroke="#4c525a" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {/* qulaqlar */}
      <g className={styles.earL}>
        <path d="M42 80 L32 14 Q62 26 84 54Z" fill="#8c939c" />
        <path d="M50 68 L44 34 Q60 42 73 58Z" fill="#f4a9b8" />
      </g>
      <g className={styles.earR}>
        <path d="M158 80 L168 14 Q138 26 116 54Z" fill="#8c939c" />
        <path d="M150 68 L156 34 Q140 42 127 58Z" fill="#f4a9b8" />
      </g>
      {/* baş */}
      <path d="M38 96 L24 102 L40 108 L28 120 L46 122 L40 136 L60 130 Q100 168 140 130 L160 136 L154 122 L172 120 L160 108 L176 102 L162 96 Q150 42 100 40 Q50 42 38 96Z" fill="#8c939c" />
      <path d="M62 62 Q100 44 138 62 Q120 56 100 66 Q80 56 62 62Z" fill="#6f767f" opacity=".7" />
      <ellipse cx="100" cy="118" rx="42" ry="31" fill="#eef0f2" />
      <path d="M60 72 L91 82 M140 72 L109 82" stroke="#4a5058" strokeWidth="6.5" strokeLinecap="round" />
      <g className={styles.eyes}>
        <ellipse cx="76" cy="92" rx="13" ry="12" fill="#f6f7c9" />
        <ellipse cx="124" cy="92" rx="13" ry="12" fill="#f6f7c9" />
        <g className={styles.pupil}>
          <circle cx="78" cy="93" r="6.2" fill="#1d1f22" /><circle cx="80.5" cy="90.5" r="2" fill="#fff" />
          <circle cx="122" cy="93" r="6.2" fill="#1d1f22" /><circle cx="124.5" cy="90.5" r="2" fill="#fff" />
        </g>
      </g>
      <path d="M86 104 Q100 98 114 104 Q112 114 100 116 Q88 114 86 104Z" fill="#2b2d31" />
      <ellipse cx="96" cy="104" rx="4" ry="2" fill="#fff" opacity=".45" />
      <g className={styles.mouth}>
        <path d="M66 120 Q100 128 134 120 Q130 158 100 160 Q70 158 66 120Z" fill="#6b1a28" />
        <ellipse cx="100" cy="150" rx="14" ry="7" fill="#ff7b8a" />
        <path d="M72 122 L79 122 L75.5 135Z M84 124 L91 125 L87.5 134Z M109 125 L116 124 L112.5 134Z M121 122 L128 122 L124.5 135Z" fill="#fff" />
      </g>
    </>
  )
}

function Granny() {
  return (
    <>
      {/* paltar */}
      <path d="M50 156 Q100 138 150 156 Q168 204 162 252 Q100 264 38 252 Q32 204 50 156Z" fill="#e9a0b4" />
      <g fill="#fff" opacity=".88">
        <circle cx="64" cy="190" r="4" /><circle cx="90" cy="210" r="4" /><circle cx="122" cy="196" r="4" /><circle cx="138" cy="226" r="4" /><circle cx="70" cy="234" r="4" /><circle cx="108" cy="240" r="4" /><circle cx="150" cy="192" r="3.4" />
      </g>
      <g fill="#f9c74f"><circle cx="64" cy="190" r="1.6" /><circle cx="90" cy="210" r="1.6" /><circle cx="122" cy="196" r="1.6" /><circle cx="138" cy="226" r="1.6" /><circle cx="70" cy="234" r="1.6" /><circle cx="108" cy="240" r="1.6" /></g>
      <g fill="#7cc68a"><ellipse cx="76" cy="196" rx="5" ry="2.4" transform="rotate(-30 76 196)" /><ellipse cx="130" cy="212" rx="5" ry="2.4" transform="rotate(30 130 212)" /><ellipse cx="82" cy="244" rx="5" ry="2.4" transform="rotate(20 82 244)" /></g>
      {/* ağ krujeva yaxa */}
      <ellipse cx="100" cy="154" rx="38" ry="12" fill="#fff" />
      <g fill="#fff" stroke="#e8dfea" strokeWidth="1">
        {[68, 80, 92, 104, 116, 128, 138].map((x) => <circle key={x} cx={x} cy="163" r="6" />)}
      </g>
      <circle cx="100" cy="164" r="4.5" fill="#d96a8c" />
      <circle cx="64" cy="224" r="10" fill="#f7cfb4" /><circle cx="136" cy="224" r="10" fill="#f7cfb4" />
      {/* saç */}
      <ellipse cx="52" cy="112" rx="12" ry="22" fill="#d2d2da" />
      <ellipse cx="148" cy="112" rx="12" ry="22" fill="#d2d2da" />
      {/* üz */}
      <ellipse cx="100" cy="106" rx="42" ry="40" fill="#f7cfb4" />
      {/* papaq-krujeva */}
      <path d="M42 96 Q38 24 100 22 Q162 24 158 96 Q130 70 100 70 Q70 70 42 96Z" fill="#fff" stroke="#e8dfea" strokeWidth="1.5" />
      <path d="M46 84 Q100 50 154 84" stroke="#f3a6c0" strokeWidth="5" fill="none" strokeLinecap="round" />
      <g fill="#fff" stroke="#e8dfea" strokeWidth="1.5">
        {[[50, 90], [64, 79], [80, 73], [100, 70], [120, 73], [136, 79], [150, 90]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="9" />)}
      </g>
      <path d="M70 84 Q80 78 92 83 M108 83 Q120 78 130 84" stroke="#b9b9c4" strokeWidth="3" fill="none" strokeLinecap="round" />
      <g className={styles.eyes}>
        <ellipse cx="80" cy="104" rx="7" ry="8" fill="#fff" />
        <ellipse cx="120" cy="104" rx="7" ry="8" fill="#fff" />
        <g className={styles.pupil}>
          <circle cx="81" cy="105" r="4.2" fill="#4b2e1a" /><circle cx="83" cy="103" r="1.5" fill="#fff" />
          <circle cx="119" cy="105" r="4.2" fill="#4b2e1a" /><circle cx="121" cy="103" r="1.5" fill="#fff" />
        </g>
      </g>
      {/* eynək */}
      <g fill="#ffffff" fillOpacity=".3" stroke="#d9a826" strokeWidth="3">
        <circle cx="80" cy="104" r="15.5" /><circle cx="120" cy="104" r="15.5" />
      </g>
      <path d="M95 102 Q100 98 105 102 M64 102 L57 99 M136 102 L143 99" stroke="#d9a826" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M70 99 Q76 94 84 96" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".8" />
      <circle cx="66" cy="124" r="8" fill="#ff8f9a" opacity=".5" />
      <circle cx="134" cy="124" r="8" fill="#ff8f9a" opacity=".5" />
      <ellipse cx="100" cy="117" rx="5" ry="4" fill="#efb597" />
      <g className={styles.mouth}>
        <path d="M88 129 Q100 134 112 129 Q110 144 100 144 Q90 144 88 129Z" fill="#a8283a" />
        <ellipse cx="100" cy="139" rx="5" ry="2.8" fill="#ff7b8a" />
      </g>
    </>
  )
}


// ===== CIRTDAN NAĞILI =====
function Tom() {
  return (
    <>
      <circle cx="44" cy="234" r="9" fill="#ffd2b0" />
      {/* köynək + jilet */}
      <path d="M52 158 Q100 142 148 158 Q164 206 158 252 Q100 264 42 252 Q36 206 52 158Z" fill="#4aa3e0" />
      <path d="M62 160 Q80 166 84 172 L78 256 Q60 256 44 252 Q38 206 62 160Z" fill="#d8262f" />
      <path d="M138 160 Q120 166 116 172 L122 256 Q140 256 156 252 Q162 206 138 160Z" fill="#d8262f" />
      <g fill="#ffd23f"><circle cx="72" cy="196" r="3" /><circle cx="72" cy="216" r="3" /><circle cx="128" cy="196" r="3" /><circle cx="128" cy="216" r="3" /></g>
      <path d="M100 160 L100 256" stroke="#2f86c0" strokeWidth="2" />
      {/* qılınclı əl */}
      <g className={styles.wave}>
        <path d="M148 188 Q166 178 170 158" stroke="#4aa3e0" strokeWidth="15" strokeLinecap="round" fill="none" />
        <circle cx="171" cy="149" r="10" fill="#ffd2b0" />
        <rect x="169" y="96" width="5" height="46" rx="2" fill="#cfd8de" stroke="#8fa0aa" />
        <rect x="162" y="140" width="19" height="5" rx="2.5" fill="#ffd23f" />
      </g>
      {/* qulaqlar + üz */}
      <circle cx="56" cy="110" r="9" fill="#ffd2b0" /><circle cx="144" cy="110" r="9" fill="#ffd2b0" />
      <ellipse cx="100" cy="108" rx="45" ry="43" fill="#ffd2b0" />
      {/* saç + tük */}
      <path d="M54 100 Q50 54 100 50 Q150 54 146 100 Q132 78 112 84 Q100 70 88 84 Q68 78 54 100Z" fill="#6b3a1c" />
      <path d="M96 52 Q92 34 106 28 Q104 40 112 52Z" fill="#6b3a1c" />
      <path d="M70 92 Q82 86 94 91 M106 91 Q118 86 130 92" stroke="#4a2810" strokeWidth="3" fill="none" strokeLinecap="round" />
      <g className={styles.eyes}>
        <ellipse cx="82" cy="108" rx="11" ry="13" fill="#fff" />
        <ellipse cx="118" cy="108" rx="11" ry="13" fill="#fff" />
        <g className={styles.pupil}>
          <circle cx="83" cy="110" r="7.8" fill="#3b2412" /><circle cx="83" cy="110" r="4" fill="#0e0804" /><circle cx="86" cy="106" r="2.6" fill="#fff" />
          <circle cx="119" cy="110" r="7.8" fill="#3b2412" /><circle cx="119" cy="110" r="4" fill="#0e0804" /><circle cx="122" cy="106" r="2.6" fill="#fff" />
        </g>
      </g>
      <circle cx="66" cy="126" r="8" fill="#ff8f9a" opacity=".55" /><circle cx="134" cy="126" r="8" fill="#ff8f9a" opacity=".55" />
      <circle cx="90" cy="124" r="1.3" fill="#d99a7a" /><circle cx="110" cy="124" r="1.3" fill="#d99a7a" /><circle cx="100" cy="122" r="1.3" fill="#d99a7a" />
      <path d="M97 119 Q100 122 103 119" stroke="#d99a7a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <g className={styles.mouth}>
        <path d="M84 128 Q100 134 116 128 Q114 150 100 150 Q86 150 84 128Z" fill="#a8283a" />
        <path d="M90 129 L110 129 L110 134 Q100 136 90 134Z" fill="#fff" />
        <ellipse cx="100" cy="144" rx="7" ry="3.8" fill="#ff7b8a" />
      </g>
    </>
  )
}

function Elder() {
  return (
    <>
      <circle cx="136" cy="230" r="10" fill="#f0c4a2" />
      {/* çuxa */}
      <path d="M46 158 Q100 140 154 158 Q172 206 164 252 Q100 264 36 252 Q28 206 46 158Z" fill="#8a5a35" />
      <path d="M100 158 L100 256" stroke="#6e4426" strokeWidth="3" />
      <path d="M34 214 Q100 228 166 214 L166 226 Q100 240 34 226Z" fill="#c1272d" />
      <g fill="#c99a4a"><circle cx="86" cy="196" r="3" /><circle cx="114" cy="196" r="3" /></g>
      {/* əsa */}
      <g className={styles.cane}>
        <path d="M150 154 L150 262" stroke="#6b4423" strokeWidth="7" strokeLinecap="round" />
        <path d="M150 154 Q150 140 164 140 Q174 140 174 150" stroke="#6b4423" strokeWidth="7" fill="none" strokeLinecap="round" />
      </g>
      <circle cx="150" cy="212" r="9.5" fill="#f0c4a2" />
      {/* üz */}
      <circle cx="58" cy="108" r="8" fill="#f0c4a2" /><circle cx="142" cy="108" r="8" fill="#f0c4a2" />
      <ellipse cx="100" cy="106" rx="43" ry="41" fill="#f0c4a2" />
      {/* papaq */}
      <path d="M52 92 Q48 30 100 28 Q152 30 148 92 Q130 76 100 76 Q70 76 52 92Z" fill="#3b3b42" />
      <path d="M56 80 Q100 62 144 80" stroke="#55555e" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M62 54 Q100 40 138 54" stroke="#55555e" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".7" />
      <path d="M64 92 Q78 82 94 90 M106 90 Q122 82 136 92" stroke="#e9e9ee" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M66 102 Q72 98 78 100 M122 100 Q128 98 134 102" stroke="#d9a98a" strokeWidth="1.8" fill="none" />
      <g className={styles.eyes}>
        <ellipse cx="82" cy="106" rx="8" ry="9" fill="#fff" />
        <ellipse cx="118" cy="106" rx="8" ry="9" fill="#fff" />
        <g className={styles.pupil}>
          <circle cx="83" cy="108" r="4.8" fill="#4b2e1a" /><circle cx="85" cy="106" r="1.7" fill="#fff" />
          <circle cx="119" cy="108" r="4.8" fill="#4b2e1a" /><circle cx="121" cy="106" r="1.7" fill="#fff" />
        </g>
      </g>
      <ellipse cx="100" cy="118" rx="7" ry="6" fill="#e3ad8b" />
      <circle cx="68" cy="122" r="7" fill="#ff8f9a" opacity=".4" /><circle cx="132" cy="122" r="7" fill="#ff8f9a" opacity=".4" />
      {/* saqqal + bığ */}
      <path d="M58 118 Q60 170 100 184 Q140 170 142 118 Q132 140 100 142 Q68 140 58 118Z" fill="#f4f4f7" stroke="#dcdce4" strokeWidth="1.5" />
      <g className={styles.mouth}>
        <path d="M90 140 Q100 146 110 140 Q108 154 100 154 Q92 154 90 140Z" fill="#7a2230" />
      </g>
      <path d="M72 126 Q86 120 100 128 Q114 120 128 126 Q116 138 100 134 Q84 138 72 126Z" fill="#fff" stroke="#dcdce4" strokeWidth="1.5" />
    </>
  )
}

function Giant({ u }) {
  return (
    <>
      <defs>
        <radialGradient id={`${u}g`} cx="35%" cy="25%" r="85%">
          <stop offset="0" stopColor="#9ccb7d" /><stop offset="1" stopColor="#5f9246" />
        </radialGradient>
      </defs>
      {/* topuz */}
      <g className={styles.club}>
        <path d="M168 250 L176 150 Q166 112 186 104 Q204 112 192 150 L186 250Z" fill="#7a4a1e" />
        <g fill="#cfd4d9"><path d="M170 124 L158 120 L170 132Z" /><path d="M192 120 L204 114 L194 130Z" /><path d="M176 108 L172 96 L184 106Z" /></g>
      </g>
      {/* bədən */}
      <path d="M36 158 Q100 136 164 158 Q184 210 170 254 Q100 268 30 254 Q16 210 36 158Z" fill={`url(#${u}g)`} />
      <path d="M44 162 Q100 144 156 162 L164 204 Q100 192 36 204Z" fill="#7a4a2a" />
      <g stroke="#5a3318" strokeWidth="3" strokeLinecap="round"><path d="M56 174 L62 186 M82 168 L86 182 M112 168 L114 182 M138 174 L134 186" /></g>
      <ellipse cx="100" cy="232" rx="36" ry="22" fill="#78ad5c" />
      <path d="M30 250 L170 250 L170 262 L30 262Z" fill="#7a4a2a" />
      <circle cx="152" cy="226" r="12" fill="#78ad5c" />
      {/* buynuzlar */}
      <path d="M52 66 Q32 54 36 22 Q60 36 72 58Z" fill="#f1e6c6" stroke="#c9b98d" strokeWidth="1.5" />
      <path d="M148 66 Q168 54 164 22 Q140 36 128 58Z" fill="#f1e6c6" stroke="#c9b98d" strokeWidth="1.5" />
      {/* qulaqlar + baş */}
      <path d="M44 100 L26 92 L40 118Z M156 100 L174 92 L160 118Z" fill="#6aa04d" />
      <ellipse cx="100" cy="102" rx="58" ry="52" fill={`url(#${u}g)`} />
      <path d="M52 66 L60 50 L70 62 L80 44 L90 60 L100 42 L110 60 L120 44 L130 62 L140 50 L148 66 Q100 54 52 66Z" fill="#2b2430" />
      <path d="M52 86 L88 96 M148 86 L112 96" stroke="#2b2430" strokeWidth="9" strokeLinecap="round" />
      <g className={styles.eyes}>
        <ellipse cx="76" cy="102" rx="14" ry="12" fill="#fff6b0" />
        <ellipse cx="124" cy="102" rx="14" ry="12" fill="#fff6b0" />
        <g className={styles.pupil}>
          <circle cx="78" cy="103" r="6" fill="#c1272d" /><circle cx="78" cy="103" r="3" fill="#1a0a0a" />
          <circle cx="122" cy="103" r="6" fill="#c1272d" /><circle cx="122" cy="103" r="3" fill="#1a0a0a" />
        </g>
      </g>
      <path d="M92 112 Q100 108 108 112 Q106 122 100 122 Q94 122 92 112Z" fill="#4f7e3a" />
      <circle cx="96" cy="116" r="1.6" fill="#2b4a20" /><circle cx="104" cy="116" r="1.6" fill="#2b4a20" />
      <g className={styles.mouth}>
        <path d="M62 128 Q100 138 138 128 Q134 164 100 166 Q66 164 62 128Z" fill="#5a1626" />
        <ellipse cx="100" cy="156" rx="16" ry="8" fill="#ff7b8a" />
        <path d="M68 130 L78 130 L73 152Z M122 130 L132 130 L127 152Z" fill="#fff6e0" stroke="#d8cba4" strokeWidth="1" />
        <path d="M84 134 L92 134 L88 144Z M108 134 L116 134 L112 144Z" fill="#fff" />
      </g>
    </>
  )
}

// ===== TIQ-TIQ XANIM =====
function Roach({ u }) {
  return (
    <>
      <defs>
        <radialGradient id={`${u}c`} cx="35%" cy="25%" r="85%">
          <stop offset="0" stopColor="#d58a4a" /><stop offset="1" stopColor="#8a4a22" />
        </radialGradient>
      </defs>
      <g stroke="#6b3a1c" strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M52 190 Q30 190 26 214 M50 214 Q26 222 26 246 M148 190 Q170 190 174 214 M150 214 Q174 222 174 246" />
      </g>
      <ellipse cx="100" cy="206" rx="56" ry="54" fill={`url(#${u}c)`} stroke="#6b3a1c" strokeWidth="3" />
      <path d="M100 156 L100 258" stroke="#6b3a1c" strokeWidth="3" />
      <ellipse cx="76" cy="182" rx="11" ry="22" fill="#fff" opacity=".2" transform="rotate(-18 76 182)" />
      <path d="M74 178 Q100 190 126 178 L134 254 Q100 262 66 254Z" fill="#ffd6e0" />
      <g fill="#ff7aa2"><circle cx="86" cy="204" r="3.6" /><circle cx="114" cy="210" r="3.6" /><circle cx="94" cy="232" r="3.6" /><circle cx="116" cy="238" r="3.6" /></g>
      <g className={styles.earL}>
        <path d="M78 68 Q60 26 34 30" stroke="#6b3a1c" strokeWidth="4.5" fill="none" strokeLinecap="round" /><circle cx="34" cy="30" r="6" fill="#6b3a1c" />
      </g>
      <g className={styles.earR}>
        <path d="M122 68 Q140 26 166 30" stroke="#6b3a1c" strokeWidth="4.5" fill="none" strokeLinecap="round" /><circle cx="166" cy="30" r="6" fill="#6b3a1c" />
      </g>
      <ellipse cx="100" cy="108" rx="46" ry="42" fill="#b86a34" stroke="#6b3a1c" strokeWidth="3" />
      <ellipse cx="100" cy="114" rx="36" ry="32" fill="#e8b27c" />
      <path d="M128 66 L106 54 L106 78Z M128 66 L150 54 L150 78Z" fill="#ff5c8a" /><circle cx="128" cy="66" r="6" fill="#d83a6a" />
      <Eyes y={108} />
      <Cheeks y={126} dx={36} />
      <Mouth y={132} w={13} h={12} />
    </>
  )
}

function Mouse() {
  return (
    <>
      <g className={styles.tail}><path d="M150 238 Q198 234 192 190 Q186 224 148 224Z" fill="#f0a9b8" /></g>
      <path d="M52 156 Q100 140 148 156 Q164 206 156 252 Q100 264 44 252 Q36 206 52 156Z" fill="#9fa4b8" />
      <ellipse cx="100" cy="214" rx="28" ry="36" fill="#e9ebf2" />
      <path d="M62 160 Q100 180 138 160 L138 172 Q100 192 62 172Z" fill="#d8262f" />
      <path d="M120 178 L134 208 L118 206Z" fill="#b01822" />
      <circle cx="50" cy="232" r="10" fill="#b9bdd0" /><circle cx="150" cy="232" r="10" fill="#b9bdd0" />
      <circle cx="56" cy="62" r="24" fill="#b9bdd0" /><circle cx="56" cy="62" r="14" fill="#f4a9b8" />
      <circle cx="144" cy="62" r="24" fill="#b9bdd0" /><circle cx="144" cy="62" r="14" fill="#f4a9b8" />
      <ellipse cx="100" cy="106" rx="46" ry="42" fill="#b9bdd0" />
      <ellipse cx="100" cy="122" rx="24" ry="17" fill="#eceef4" />
      <path d="M72 118 L46 110 M72 124 L46 126 M128 118 L154 110 M128 124 L154 126" stroke="#8a90a8" strokeWidth="2" strokeLinecap="round" />
      <Eyes xs={[80, 120]} y={94} rx={9} ry={11} r={6.4} />
      <Cheeks y={118} dx={42} />
      <ellipse cx="100" cy="112" rx="6.5" ry="4.8" fill="#f08a9a" />
      <Mouth y={124} w={10} h={11} />
      <rect x="95" y="126" width="10" height="8" rx="2" fill="#fff" stroke="#d6d9de" />
    </>
  )
}

function Frog() {
  return (
    <>
      <ellipse cx="54" cy="248" rx="22" ry="10" fill="#5aae3c" /><ellipse cx="146" cy="248" rx="22" ry="10" fill="#5aae3c" />
      <path d="M50 156 Q100 140 150 156 Q166 206 158 252 Q100 264 42 252 Q34 206 50 156Z" fill="#6cbf4a" />
      <ellipse cx="100" cy="212" rx="30" ry="40" fill="#e4f2a0" />
      <g fill="#55a038"><circle cx="64" cy="190" r="6" /><circle cx="140" cy="200" r="7" /><circle cx="56" cy="222" r="5" /><circle cx="148" cy="230" r="5" /></g>
      <circle cx="44" cy="228" r="10" fill="#6cbf4a" /><circle cx="156" cy="228" r="10" fill="#6cbf4a" />
      <ellipse cx="100" cy="114" rx="56" ry="42" fill="#6cbf4a" />
      <circle cx="66" cy="72" r="20" fill="#6cbf4a" /><circle cx="134" cy="72" r="20" fill="#6cbf4a" />
      <Eyes xs={[66, 134]} y={72} rx={12} ry={13} r={7} />
      <circle cx="92" cy="102" r="2.2" fill="#3d7a28" /><circle cx="108" cy="102" r="2.2" fill="#3d7a28" />
      <Cheeks y={122} dx={42} />
      <Mouth y={124} w={36} h={18} c="#7a2230" />
    </>
  )
}

function Cat() {
  return (
    <>
      <g className={styles.tail}>
        <path d="M150 240 Q202 236 196 178 Q190 214 148 224Z" fill="#f0a040" />
        <path d="M188 198 L198 202 M184 216 L196 220" stroke="#c27a1c" strokeWidth="4" strokeLinecap="round" />
      </g>
      <path d="M50 156 Q100 140 150 156 Q166 206 158 252 Q100 264 42 252 Q34 206 50 156Z" fill="#f0a040" />
      <ellipse cx="100" cy="210" rx="26" ry="40" fill="#fff3e0" />
      <path d="M64 160 Q100 176 136 160 L136 170 Q100 186 64 170Z" fill="#d8262f" /><circle cx="100" cy="180" r="6" fill="#ffd23f" stroke="#d9a01a" />
      <ellipse cx="56" cy="238" rx="14" ry="10" fill="#fff3e0" /><ellipse cx="144" cy="238" rx="14" ry="10" fill="#fff3e0" />
      <path d="M46 84 L38 22 L86 54Z" fill="#f0a040" /><path d="M52 72 L46 38 L74 56Z" fill="#f4a9b8" />
      <path d="M154 84 L162 22 L114 54Z" fill="#f0a040" /><path d="M148 72 L154 38 L126 56Z" fill="#f4a9b8" />
      <ellipse cx="100" cy="106" rx="54" ry="46" fill="#f0a040" />
      <path d="M100 62 L100 76 M84 64 L88 76 M116 64 L112 76 M48 104 L62 106 M48 114 L62 112 M152 104 L138 106 M152 114 L138 112" stroke="#c27a1c" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="100" cy="124" rx="26" ry="18" fill="#fff3e0" />
      <Eyes xs={[78, 122]} y={98} rx={11} ry={12} r={7} c="#3f9a4a" />
      <path d="M93 112 L107 112 L100 120Z" fill="#f08a9a" />
      <path d="M72 122 L42 116 M72 128 L42 130 M128 122 L158 116 M128 128 L158 130" stroke="#6b4a22" strokeWidth="2" strokeLinecap="round" />
      <Mouth y={127} w={10} h={10} />
    </>
  )
}

// ===== TISBAĞA VƏ DOVŞAN =====
function Turtle({ u }) {
  return (
    <>
      <defs>
        <radialGradient id={`${u}t`} cx="35%" cy="25%" r="85%">
          <stop offset="0" stopColor="#8fbf4e" /><stop offset="1" stopColor="#4f7f2e" />
        </radialGradient>
      </defs>
      <ellipse cx="54" cy="248" rx="18" ry="10" fill="#8ec45a" /><ellipse cx="146" cy="248" rx="18" ry="10" fill="#8ec45a" />
      <path d="M22 234 Q24 134 100 132 Q176 134 178 234 Q100 264 22 234Z" fill={`url(#${u}t)`} stroke="#3e6422" strokeWidth="3" />
      <g fill="none" stroke="#3e6422" strokeWidth="3" opacity=".55" strokeLinejoin="round">
        <path d="M100 152 L128 168 L128 200 L100 216 L72 200 L72 168Z" />
        <path d="M128 168 L160 160 M128 200 L162 212 M72 168 L40 160 M72 200 L38 212 M100 216 L100 246" />
      </g>
      <ellipse cx="32" cy="206" rx="16" ry="10" fill="#8ec45a" transform="rotate(-20 32 206)" />
      <ellipse cx="168" cy="206" rx="16" ry="10" fill="#8ec45a" transform="rotate(20 168 206)" />
      <ellipse cx="100" cy="114" rx="42" ry="38" fill="#8ec45a" />
      <path d="M60 88 Q100 68 140 88 L140 99 Q100 80 60 99Z" fill="#d8262f" />
      <path d="M74 98 Q84 92 94 97 M106 97 Q116 92 126 98" stroke="#4f7f2e" strokeWidth="3" fill="none" strokeLinecap="round" />
      <Eyes xs={[82, 118]} y={110} rx={9} ry={11} r={6} />
      <Cheeks y={128} dx={32} />
      <circle cx="96" cy="120" r="1.8" fill="#4f7f2e" /><circle cx="104" cy="120" r="1.8" fill="#4f7f2e" />
      <Mouth y={130} w={12} h={9} />
    </>
  )
}

// ===== ZOLUŞKA =====
function Cinder({ u }) {
  return (
    <>
      <defs>
        <linearGradient id={`${u}d`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fd0f5" /><stop offset="1" stopColor="#4a8fd9" />
        </linearGradient>
      </defs>
      <path d="M62 158 Q100 144 138 158 Q152 200 192 256 L8 256 Q48 200 62 158Z" fill={`url(#${u}d)`} />
      <path d="M8 256 Q50 238 100 246 Q150 238 192 256" stroke="#fff" strokeWidth="3" fill="none" opacity=".7" />
      <g className={styles.spark} fill="#fff">
        <circle cx="52" cy="226" r="2.6" /><circle cx="86" cy="214" r="2" /><circle cx="122" cy="230" r="2.6" /><circle cx="150" cy="212" r="2" /><circle cx="100" cy="240" r="2.2" />
      </g>
      <path d="M62 158 Q100 144 138 158 L132 196 Q100 206 68 196Z" fill="#b6e0fa" />
      <path d="M100 198 L82 190 L82 206Z M100 198 L118 190 L118 206Z" fill="#fff" /><circle cx="100" cy="198" r="4" fill="#fff" />
      <rect x="90" y="138" width="20" height="22" fill="#ffd8bc" />
      <circle cx="46" cy="218" r="9" fill="#fff" /><circle cx="154" cy="218" r="9" fill="#fff" />
      <path d="M50 100 Q38 150 64 172 Q54 140 62 108Z M150 100 Q162 150 136 172 Q146 140 138 108Z" fill="#f3d27a" />
      <ellipse cx="100" cy="104" rx="52" ry="50" fill="#f3d27a" />
      <circle cx="100" cy="46" r="19" fill="#f3d27a" stroke="#d9b552" strokeWidth="1.5" />
      <ellipse cx="100" cy="108" rx="42" ry="40" fill="#ffd8bc" />
      <path d="M58 96 Q62 62 100 60 Q138 62 142 96 Q126 78 108 84 Q96 96 82 82 Q68 84 58 96Z" fill="#f3d27a" stroke="#d9b552" strokeWidth="1.5" />
      <path d="M78 66 L84 50 L92 62 L100 44 L108 62 L116 50 L122 66Z" fill="#ffd23f" stroke="#d9a01a" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="100" cy="52" r="3.4" fill="#7fd0ff" />
      <path d="M72 94 Q82 88 92 93 M108 93 Q118 88 128 94" stroke="#b9964a" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <Eyes xs={[82, 118]} y={108} rx={9} ry={11} r={6.6} c="#3a8ad8" />
      <Cheeks y={124} dx={32} />
      <Mouth y={129} w={10} h={10} />
    </>
  )
}

function Prince() {
  return (
    <>
      <path d="M52 238 L148 238 L156 256 Q100 264 44 256Z" fill="#fff" />
      <path d="M50 158 Q100 142 150 158 Q166 206 158 244 L42 244 Q34 206 50 158Z" fill="#243b7a" />
      <path d="M60 164 L146 232 L134 244 L48 184Z" fill="#c1272d" />
      <path d="M86 158 L100 190 L114 158Z" fill="#fff" />
      <g fill="#ffd23f"><circle cx="100" cy="206" r="3.4" /><circle cx="100" cy="224" r="3.4" /></g>
      <ellipse cx="56" cy="168" rx="15" ry="7" fill="#f2c14e" transform="rotate(-20 56 168)" />
      <ellipse cx="144" cy="168" rx="15" ry="7" fill="#f2c14e" transform="rotate(20 144 168)" />
      <circle cx="46" cy="232" r="9" fill="#fff" /><circle cx="154" cy="232" r="9" fill="#fff" />
      <ellipse cx="100" cy="102" rx="48" ry="46" fill="#4a2c14" />
      <ellipse cx="100" cy="108" rx="42" ry="40" fill="#ffd2b0" />
      <path d="M56 98 Q56 58 100 56 Q146 58 144 98 Q130 74 108 80 Q84 74 56 98Z" fill="#4a2c14" />
      <path d="M70 60 L76 38 L88 52 L100 32 L112 52 L124 38 L130 60Z" fill="#ffd23f" stroke="#d9a01a" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="76" cy="42" r="3" fill="#d8262f" /><circle cx="100" cy="36" r="3" fill="#3a8ad8" /><circle cx="124" cy="42" r="3" fill="#d8262f" />
      <path d="M70 94 Q82 89 94 93 M106 93 Q118 89 130 94" stroke="#2e1a0a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <Eyes xs={[82, 118]} y={108} rx={9} ry={11} r={6.6} c="#4a2c14" />
      <Cheeks y={124} dx={32} />
      <Mouth y={129} w={11} h={10} />
    </>
  )
}

function Fairy() {
  return (
    <>
      <g className={styles.wingL}><ellipse cx="46" cy="168" rx="32" ry="58" transform="rotate(24 46 168)" fill="#cfe8ff" opacity=".75" stroke="#9cc8f0" strokeWidth="2" /></g>
      <g className={styles.wingR}><ellipse cx="154" cy="168" rx="32" ry="58" transform="rotate(-24 154 168)" fill="#cfe8ff" opacity=".75" stroke="#9cc8f0" strokeWidth="2" /></g>
      <path d="M54 160 Q100 142 146 160 Q168 208 172 256 L28 256 Q32 208 54 160Z" fill="#a874dc" />
      <path d="M28 246 Q100 264 172 246" stroke="#e8d4ff" strokeWidth="4" fill="none" strokeLinecap="round" />
      <g className={styles.spark} fill="#ffe27a">
        <path d="M70 200 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3Z" /><path d="M128 216 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3Z" /><path d="M96 238 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2Z" />
      </g>
      <ellipse cx="100" cy="158" rx="26" ry="8" fill="#fff" />
      <circle cx="50" cy="228" r="9" fill="#f7cfb4" />
      <g className={styles.wave}>
        <path d="M148 188 Q168 178 172 158" stroke="#a874dc" strokeWidth="15" strokeLinecap="round" fill="none" />
        <circle cx="172" cy="149" r="10" fill="#f7cfb4" />
        <path d="M172 142 L184 94" stroke="#8a5a2b" strokeWidth="4" strokeLinecap="round" />
        <polygon points="184,72 188,85 201,85 190,93 194,106 184,98 174,106 178,93 167,85 180,85" fill="#ffd23f" stroke="#d9a01a" strokeWidth="1.5" strokeLinejoin="round" />
      </g>
      <ellipse cx="100" cy="104" rx="50" ry="48" fill="#d9d6e8" />
      <circle cx="100" cy="46" r="19" fill="#d9d6e8" stroke="#b9b5cf" strokeWidth="1.5" />
      <ellipse cx="100" cy="108" rx="42" ry="40" fill="#f7cfb4" />
      <path d="M58 96 Q62 62 100 60 Q138 62 142 96 Q126 76 104 82 Q84 78 58 96Z" fill="#d9d6e8" stroke="#b9b5cf" strokeWidth="1.5" />
      <path d="M92 52 L100 36 L108 52 L124 56 L112 66 L116 82 L100 72 L84 82 L88 66 L76 56Z" fill="#ffd23f" stroke="#d9a01a" strokeWidth="1.5" strokeLinejoin="round" transform="translate(0 -4) scale(1 .9) translate(0 6)" />
      <path d="M72 94 Q82 89 92 93 M108 93 Q118 89 128 94" stroke="#a9a5c0" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <Eyes xs={[82, 118]} y={108} rx={9} ry={11} r={6.4} c="#6a4fa8" />
      <Cheeks y={124} dx={32} />
      <Mouth y={129} w={11} h={10} />
    </>
  )
}

// ===== QOĞAL NAĞILI =====
function Bun({ u }) {
  const rays = Array.from({ length: 14 }, (_, i) => i * (360 / 14))
  return (
    <>
      <defs>
        <radialGradient id={`${u}b`} cx="38%" cy="30%" r="80%">
          <stop offset="0" stopColor="#ffe98a" /><stop offset=".6" stopColor="#f5b83a" /><stop offset="1" stopColor="#d88a1e" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="124" r="82" fill={`url(#${u}b)`} stroke="#c47a18" strokeWidth="3" />
      <g stroke="#d9901f" strokeWidth="3" strokeLinecap="round" opacity=".5">
        {rays.map((a) => <path key={a} d="M100 70 L100 56" transform={`rotate(${a} 100 124)`} />)}
      </g>
      <path d="M72 92 Q84 84 94 90 M106 90 Q116 84 128 92" stroke="#8a4b1c" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <g className={styles.eyes}>
        <ellipse cx="78" cy="110" rx="10" ry="12" fill="#fff" />
        <ellipse cx="122" cy="110" rx="10" ry="12" fill="#fff" />
        <g className={styles.pupil}>
          <circle cx="79" cy="112" r="7" fill="#2a1608" /><circle cx="82" cy="108" r="2.4" fill="#fff" />
          <circle cx="121" cy="112" r="7" fill="#2a1608" /><circle cx="124" cy="108" r="2.4" fill="#fff" />
        </g>
      </g>
      <circle cx="58" cy="136" r="11" fill="#f4727f" opacity=".55" /><circle cx="142" cy="136" r="11" fill="#f4727f" opacity=".55" />
      <ellipse cx="100" cy="126" rx="5" ry="4" fill="#c4701a" />
      <g className={styles.mouth}>
        <path d="M76 138 Q100 146 124 138 Q120 166 100 166 Q80 166 76 138Z" fill="#8a2a1a" />
        <ellipse cx="100" cy="158" rx="10" ry="5" fill="#ff7b8a" />
        <path d="M84 141 Q100 146 116 141 L114 147 Q100 151 86 147Z" fill="#fff" />
      </g>
    </>
  )
}

function Rabbit({ sporty = false }) {
  return (
    <>
      {/* səbət */}
      {!sporty && (
        <>
      <path d="M24 238 Q50 266 76 238Z" fill="#a8743a" />
      <ellipse cx="50" cy="238" rx="26" ry="6" fill="#7a4e22" />
      <path d="M30 236 Q50 192 70 236" stroke="#8a5a2b" strokeWidth="4" fill="none" strokeLinecap="round" />
              </>
      )}
      {/* bədən */}
      <path d="M50 156 Q100 140 150 156 Q166 206 158 252 Q100 264 42 252 Q34 206 50 156Z" fill={sporty ? '#2f86c0' : '#d8372f'} />
      <g fill={sporty ? 'none' : '#fff3d0'}>
        {[[70, 182], [100, 190], [130, 182], [80, 208], [120, 208], [64, 232], [100, 226], [136, 232]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.6" />)}
      </g>
      <path d="M72 158 Q100 172 128 158" stroke="#ffd23f" strokeWidth="6" fill="none" strokeLinecap="round" />
      {sporty && <><circle cx="100" cy="206" r="22" fill="#fff" /><text x="100" y="217" textAnchor="middle" fontSize="30" fontWeight="800" fill="#2f86c0" fontFamily="system-ui, sans-serif">1</text></>}
      <path d="M44 236 L156 236 L160 256 Q100 264 40 256Z" fill="#46385f" />
      <circle cx="52" cy="224" r="10" fill="#aeb3bb" /><circle cx="148" cy="232" r="10" fill="#aeb3bb" />
      {/* qulaqlar */}
      <g className={styles.earL}>
        <ellipse cx="66" cy="42" rx="16" ry="44" transform="rotate(-12 66 42)" fill="#aeb3bb" />
        <ellipse cx="66" cy="44" rx="7.5" ry="32" transform="rotate(-12 66 44)" fill="#f4a9b8" />
      </g>
      <g className={styles.earR}>
        <ellipse cx="134" cy="42" rx="16" ry="44" transform="rotate(12 134 42)" fill="#aeb3bb" />
        <ellipse cx="134" cy="44" rx="7.5" ry="32" transform="rotate(12 134 44)" fill="#f4a9b8" />
      </g>
      {/* baş */}
      <ellipse cx="100" cy="106" rx="48" ry="44" fill="#aeb3bb" />
      <ellipse cx="100" cy="124" rx="28" ry="20" fill="#eceef1" />
      {sporty && <path d="M54 78 Q100 60 146 78 L146 88 Q100 70 54 88Z" fill="#ffd23f" />}
      <path d="M72 84 Q82 78 92 84 M108 84 Q118 78 128 84" stroke="#6f757e" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <g className={styles.eyes}>
        <ellipse cx="80" cy="98" rx="11" ry="13" fill="#fff" />
        <ellipse cx="120" cy="98" rx="11" ry="13" fill="#fff" />
        <g className={styles.pupil}>
          <circle cx="81" cy="100" r="6.4" fill="#2a1608" /><circle cx="83.5" cy="97" r="2.2" fill="#fff" />
          <circle cx="119" cy="100" r="6.4" fill="#2a1608" /><circle cx="121.5" cy="97" r="2.2" fill="#fff" />
        </g>
      </g>
      <ellipse cx="100" cy="114" rx="7.5" ry="5.5" fill="#f08a9a" />
      <path d="M62 120 L44 116 M62 126 L44 128 M138 120 L156 116 M138 126 L156 128" stroke="#8a9098" strokeWidth="2" strokeLinecap="round" />
      <g className={styles.mouth}>
        <path d="M86 124 Q100 128 114 124 Q112 144 100 144 Q88 144 86 124Z" fill="#7a2230" />
        <rect x="93" y="124" width="14" height="14" rx="3" fill="#fff" stroke="#d6d9de" />
        <path d="M100 124 L100 138" stroke="#d6d9de" />
      </g>
    </>
  )
}

function Fox() {
  return (
    <>
      <g className={styles.tail}>
        <path d="M146 238 Q202 234 196 146 Q180 200 140 212Z" fill="#ee7d1f" />
        <path d="M196 146 Q198 164 192 178 Q184 160 196 146Z" fill="#fff" />
      </g>
      {/* şalvar */}
      <path d="M52 226 L148 226 L154 256 Q100 264 46 256Z" fill="#fff" />
      <g fill="#3a62b3">{[58, 74, 90, 106, 122, 138].map((x) => <rect key={x} x={x} y="226" width="7" height="34" />)}</g>
      {/* köynək + jilet */}
      <path d="M50 156 Q100 140 150 156 Q164 190 158 228 L42 228 Q36 190 50 156Z" fill="#fff" />
      <path d="M58 160 Q80 166 86 172 L82 228 L42 228 Q38 190 58 160Z" fill="#3a62b3" />
      <path d="M142 160 Q120 166 114 172 L118 228 L158 228 Q162 190 142 160Z" fill="#3a62b3" />
      <g fill="#ffd23f"><circle cx="66" cy="196" r="3" /><circle cx="66" cy="212" r="3" /><circle cx="134" cy="196" r="3" /><circle cx="134" cy="212" r="3" /></g>
      <path d="M44 220 L156 220 L156 228 L44 228Z" fill="#c1272d" />
      {/* əl */}
      <g className={styles.wave}>
        <path d="M148 188 Q166 178 170 158" stroke="#fff" strokeWidth="15" strokeLinecap="round" fill="none" />
        <circle cx="171" cy="149" r="10" fill="#ee7d1f" />
      </g>
      <circle cx="46" cy="232" r="9" fill="#ee7d1f" />
      {/* qulaqlar */}
      <path d="M46 78 L40 18 L84 54Z" fill="#ee7d1f" /><path d="M52 66 L48 34 L72 54Z" fill="#2b2220" />
      <path d="M154 78 L160 18 L116 54Z" fill="#ee7d1f" /><path d="M148 66 L152 34 L128 54Z" fill="#2b2220" />
      {/* baş */}
      <path d="M44 100 Q44 50 100 48 Q156 50 156 100 L146 124 Q122 136 100 158 Q78 136 54 124Z" fill="#ee7d1f" />
      <path d="M48 112 Q76 116 100 150 Q124 116 152 112 Q132 136 100 160 Q68 136 48 112Z" fill="#fff" />
      <path d="M100 150 L100 118" stroke="#ee7d1f" strokeWidth="0" />
      <path d="M62 84 L90 94 M138 84 L110 94" stroke="#8a3d0c" strokeWidth="4.5" strokeLinecap="round" />
      <g className={styles.eyes}>
        <ellipse cx="78" cy="100" rx="11" ry="10" fill="#fff6c4" />
        <ellipse cx="122" cy="100" rx="11" ry="10" fill="#fff6c4" />
        <g className={styles.pupil}>
          <ellipse cx="79" cy="101" rx="4.2" ry="6.4" fill="#1d1208" /><circle cx="81" cy="98" r="1.7" fill="#fff" />
          <ellipse cx="121" cy="101" rx="4.2" ry="6.4" fill="#1d1208" /><circle cx="123" cy="98" r="1.7" fill="#fff" />
        </g>
      </g>
      <ellipse cx="100" cy="120" rx="8" ry="6" fill="#2b2220" />
      <ellipse cx="97" cy="118" rx="2.6" ry="1.6" fill="#fff" opacity=".5" />
      <g className={styles.mouth}>
        <path d="M86 132 Q100 140 114 132 Q112 148 100 148 Q88 148 86 132Z" fill="#7a2230" />
        <ellipse cx="100" cy="143" rx="5.5" ry="3" fill="#ff7b8a" />
      </g>
    </>
  )
}

const CHAR = { hood: Hood, wolf: Wolf, granny: Granny, tom: Tom, elder: Elder, giant: Giant, bun: Bun, rabbit: Rabbit, wolfy: (p) => <Wolf {...p} dressed />, fox: Fox, roach: Roach, mouse: Mouse, frog: Frog, cat: Cat, turtle: Turtle, hare: (p) => <Rabbit {...p} sporty />, cinder: Cinder, prince: Prince, fairy: Fairy }

export function Puppet({ kind, talking = false, head = false }) {
  const u = useId().replace(/:/g, '')
  const C = CHAR[kind]
  return (
    <svg
      className={`${head ? styles.head : styles.svg} ${styles[kind]}`}
      viewBox={head ? (BOX[kind]?.[1] ?? HEAD) : (BOX[kind]?.[0] ?? FULL)}
      data-talk={talking}
      aria-hidden="true"
      focusable="false"
    >
      <C u={u} />
    </svg>
  )
}

// Qırmızı papaq nağılının dekoru: afişadakı kimi mavi səma, bulud, ev, ağaclar, çəmən.
export function RedHoodScene() {
  return (
    <svg className={styles.scenery} viewBox="0 0 160 90" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <g fill="#fff" opacity=".95">
        <g className={styles.cloud}><ellipse cx="36" cy="16" rx="12" ry="5" /><ellipse cx="44" cy="12" rx="8" ry="5.5" /><ellipse cx="29" cy="13" rx="7" ry="4.5" /></g>
        <g className={`${styles.cloud} ${styles.c2}`}><ellipse cx="122" cy="11" rx="11" ry="4.6" /><ellipse cx="128" cy="8" rx="7" ry="4.6" /><ellipse cx="116" cy="9" rx="6" ry="4" /></g>
      </g>
      <path d="M0 62 Q40 54 80 60 Q120 66 160 57 V90 H0Z" fill="#5bb449" />
      <path d="M0 72 Q50 66 100 72 Q135 76 160 70 V90 H0Z" fill="#6fc65a" />
      {/* ev */}
      <rect x="82" y="40" width="30" height="24" fill="#f6e3c2" />
      <polygon points="78,42 97,25 116,42" fill="#cf4a2f" />
      <polygon points="97,25 116,42 108,42 97,31" fill="#e0603f" />
      <rect x="106" y="28" width="5.5" height="10" fill="#b3472f" />
      <rect x="91" y="50" width="11" height="14" rx="5.5" fill="#8b5a2b" />
      <rect x="105" y="47" width="7" height="7" fill="#bfe6ff" stroke="#8b5a2b" strokeWidth="1.2" />
      {/* sol küknar */}
      <rect x="28" y="56" width="4" height="12" fill="#7a4a1e" />
      <polygon points="30,20 42,42 18,42" fill="#2e8b3a" />
      <polygon points="30,31 46,54 14,54" fill="#379a44" />
      <polygon points="30,42 50,64 10,64" fill="#41a84e" />
      {/* sağ ağac */}
      <rect x="130" y="52" width="4" height="16" fill="#7a4a1e" />
      <circle cx="132" cy="42" r="13" fill="#3a9a46" /><circle cx="121" cy="49" r="10" fill="#3a9a46" /><circle cx="143" cy="49" r="10" fill="#3a9a46" />
      <circle cx="128" cy="38" r="6" fill="#55b25c" />
      {/* çiçəklər */}
      <g>
        {[[56, 70, '#ff6b81'], [66, 74, '#ffd23f'], [118, 72, '#fff'], [104, 76, '#ff6b81'], [48, 76, '#fff'], [138, 74, '#ffd23f']].map(([x, y, c]) => (
          <g key={x}><circle cx={x} cy={y} r="2" fill={c} /><circle cx={x} cy={y} r=".7" fill="#e8a317" /></g>
        ))}
      </g>
    </svg>
  )
}

// Cırtdan nağılının dekoru: şəfəqli səma, dağlar, kənd evləri, ağaclar, taxıl.
export function CirtdanScene() {
  return (
    <svg className={styles.scenery} viewBox="0 0 160 90" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <polygon points="0,62 28,22 58,62" fill="#9a6fa0" />
      <polygon points="28,22 36,34 30,32 26,38 21,32" fill="#fff" />
      <polygon points="40,62 80,14 124,62" fill="#855d93" />
      <polygon points="80,14 92,30 84,27 79,35 73,28" fill="#fff" />
      <polygon points="100,62 132,28 160,62" fill="#a77bab" />
      <polygon points="132,28 138,37 133,35 130,40 126,35" fill="#fff" />
      <path d="M0 62 Q40 56 80 61 Q120 66 160 58 V90 H0Z" fill="#7bb648" />
      <path d="M0 72 Q50 66 100 72 Q135 76 160 70 V90 H0Z" fill="#92c95a" />
      {/* kənd evi */}
      <rect x="16" y="46" width="24" height="20" fill="#e8c897" />
      <polygon points="12,48 28,34 44,48" fill="#a8452b" />
      <rect x="25" y="55" width="8" height="11" rx="4" fill="#6e4426" />
      <rect x="35" y="42" width="4" height="8" fill="#8a3a24" />
      <rect x="118" y="48" width="22" height="18" fill="#e8c897" />
      <polygon points="114,50 129,38 144,50" fill="#a8452b" />
      <rect x="125" y="56" width="7" height="10" rx="3.5" fill="#6e4426" />
      {/* ağaclar */}
      <rect x="60" y="54" width="3.5" height="14" fill="#7a4a1e" />
      <circle cx="62" cy="46" r="11" fill="#4a9b3e" /><circle cx="55" cy="52" r="8" fill="#4a9b3e" /><circle cx="69" cy="52" r="8" fill="#4a9b3e" />
      <circle cx="59" cy="42" r="4.5" fill="#66b556" />
      {/* taxıl */}
      <g stroke="#e0b53a" strokeWidth="1.2" strokeLinecap="round">
        {[92, 96, 100, 104, 108].map((x) => <path key={x} d={`M${x} 72 L${x} 62`} />)}
      </g>
      <g fill="#f2cc4f">{[92, 96, 100, 104, 108].map((x) => <ellipse key={x} cx={x} cy="61" rx="1.4" ry="3" />)}</g>
    </svg>
  )
}

// Qoğal nağılının dekoru: açıq mavi səma, bulud, iri palıd, çəmən, kötük və çiçəklər.
export function QogalScene() {
  return (
    <svg className={styles.scenery} viewBox="0 0 160 90" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <g fill="#fff" opacity=".95">
        <g className={styles.cloud}><ellipse cx="110" cy="14" rx="14" ry="5.5" /><ellipse cx="120" cy="10" rx="9" ry="5.5" /><ellipse cx="102" cy="11" rx="7" ry="4.5" /></g>
        <g className={`${styles.cloud} ${styles.c2}`}><ellipse cx="62" cy="22" rx="10" ry="4" /><ellipse cx="68" cy="19" rx="6" ry="4" /></g>
      </g>
      {/* uzaq meşə */}
      <path d="M90 58 Q104 40 120 50 Q136 36 160 48 V62 H90Z" fill="#4a9b5a" />
      <path d="M0 60 Q40 54 80 60 Q120 66 160 58 V90 H0Z" fill="#6fbd44" />
      <path d="M0 72 Q50 66 100 72 Q135 76 160 70 V90 H0Z" fill="#86cf55" />
      {/* iri palıd */}
      <rect x="14" y="40" width="9" height="28" fill="#6e4426" />
      <circle cx="18" cy="26" r="20" fill="#2f7d3a" /><circle cx="4" cy="38" r="14" fill="#2f7d3a" /><circle cx="32" cy="36" r="14" fill="#2f7d3a" />
      <circle cx="14" cy="18" r="9" fill="#3f9a4a" /><circle cx="28" cy="30" r="7" fill="#3f9a4a" />
      {/* kötük */}
      <rect x="104" y="62" width="40" height="10" rx="5" fill="#7a4e28" />
      <ellipse cx="143" cy="67" rx="4" ry="5" fill="#d9b27a" stroke="#7a4e28" strokeWidth="1" />
      <path d="M108 63 L130 63" stroke="#8f6236" strokeWidth="1.2" strokeLinecap="round" />
      {/* çiçəklər */}
      <g>
        {[[44, 70, '#fff'], [54, 76, '#f48fb1'], [72, 72, '#ffd23f'], [88, 76, '#fff'], [96, 70, '#f48fb1'], [126, 76, '#fff'], [138, 74, '#ffd23f'], [36, 76, '#ffd23f']].map(([x, y, c]) => (
          <g key={x}><circle cx={x} cy={y} r="2" fill={c} /><circle cx={x} cy={y} r=".7" fill="#e8a317" /></g>
        ))}
      </g>
    </svg>
  )
}

// Tıq-tıq xanımın dekoru: kiçik ev, tər-təmiz bağça, hasar, günəbaxan və lalələr.
export function TiqScene() {
  return (
    <svg className={styles.scenery} viewBox="0 0 160 90" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <path d="M0 62 Q40 55 80 61 Q120 66 160 58 V90 H0Z" fill="#7cc46a" />
      <path d="M0 72 Q50 66 100 72 Q135 76 160 70 V90 H0Z" fill="#94d37a" />
      <rect x="26" y="44" width="34" height="22" fill="#f4dcae" />
      <polygon points="21,46 43,27 65,46" fill="#c65a3a" />
      <rect x="53" y="30" width="5" height="10" fill="#a8452b" />
      <rect x="39" y="52" width="9" height="14" rx="4.5" fill="#7a4e28" />
      <rect x="29" y="50" width="8" height="7" fill="#bfe6ff" stroke="#7a4e28" strokeWidth="1" />
      <rect x="50" y="50" width="8" height="7" fill="#bfe6ff" stroke="#7a4e28" strokeWidth="1" />
      <rect x="28" y="57" width="10" height="3" fill="#8f5a3a" /><circle cx="31" cy="56" r="1.6" fill="#ff6b81" /><circle cx="35" cy="56" r="1.6" fill="#ffd23f" />
      <g fill="#fff">
        {[96, 104, 112, 120, 128, 136, 144].map((x) => <rect key={x} x={x} y="58" width="4" height="12" rx="1.5" />)}
        <rect x="94" y="62" width="54" height="2.4" /><rect x="94" y="67" width="54" height="2.4" />
      </g>
      <g>
        <rect x="76" y="48" width="2" height="22" fill="#4a9b3e" />
        <circle cx="77" cy="46" r="7" fill="#ffd23f" /><circle cx="77" cy="46" r="3.4" fill="#7a4a1e" />
        {[[88, 74, '#ff6b81'], [96, 77, '#ff6b81'], [116, 76, '#ffd23f'], [132, 75, '#ff6b81']].map(([x, y, c]) => (
          <g key={x}><rect x={x - 0.6} y={y} width="1.2" height="6" fill="#4a9b3e" /><ellipse cx={x} cy={y} rx="2.6" ry="3.2" fill={c} /></g>
        ))}
      </g>
    </svg>
  )
}

// Tısbağa və dovşan: yarış yolu, finiş xətti, ağaclar və çiçəklər.
export function RaceScene() {
  return (
    <svg className={styles.scenery} viewBox="0 0 160 90" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="rcChk" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="3" height="3" fill="#222" /><rect x="3" y="3" width="3" height="3" fill="#222" /></pattern>
      </defs>
      <path d="M0 58 Q40 50 80 56 Q120 62 160 54 V90 H0Z" fill="#7bc24a" />
      <path d="M0 72 Q80 66 160 72 V86 Q80 80 0 86Z" fill="#cf9f60" />
      <path d="M0 79 Q80 73 160 79" stroke="#fff" strokeWidth="1" strokeDasharray="5 4" fill="none" />
      <rect x="34" y="48" width="3.5" height="14" fill="#7a4a1e" /><circle cx="36" cy="42" r="11" fill="#3a9a46" /><circle cx="30" cy="48" r="8" fill="#3a9a46" /><circle cx="42" cy="48" r="8" fill="#3a9a46" /><circle cx="33" cy="38" r="4" fill="#55b25c" />
      <rect x="120" y="30" width="3" height="42" fill="#fff" /><rect x="148" y="30" width="3" height="42" fill="#fff" />
      <rect x="120" y="30" width="31" height="10" fill="#fff" /><rect x="120" y="30" width="31" height="10" fill="url(#rcChk)" />
      <rect x="120" y="30" width="31" height="10" fill="none" stroke="#222" strokeWidth=".8" />
      <g>
        {[[56, 66, '#ff6b81'], [68, 62, '#fff'], [96, 64, '#ffd23f'], [108, 66, '#ff6b81']].map(([x, y, c]) => (
          <g key={x}><circle cx={x} cy={y} r="2" fill={c} /><circle cx={x} cy={y} r=".7" fill="#e8a317" /></g>
        ))}
      </g>
    </svg>
  )
}

// Zoluşka: gecə səması altında saray, qarğıdalı kareta və parıltılar.
export function BallScene() {
  return (
    <svg className={styles.scenery} viewBox="0 0 160 90" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <path d="M0 64 Q40 58 80 63 Q120 68 160 60 V90 H0Z" fill="#3b2a73" />
      <path d="M0 74 Q50 68 100 74 Q135 78 160 72 V90 H0Z" fill="#4b3590" />
      <path d="M96 90 Q104 76 112 68 L120 68 Q124 78 138 90Z" fill="#6a56b0" opacity=".8" />
      {/* saray */}
      <rect x="97" y="38" width="30" height="30" fill="#6a4cb0" />
      <rect x="88" y="28" width="11" height="40" fill="#7a5cc4" /><polygon points="86,30 93.5,14 101,30" fill="#9a6fe0" />
      <rect x="125" y="28" width="11" height="40" fill="#7a5cc4" /><polygon points="123,30 130.5,14 138,30" fill="#9a6fe0" />
      <rect x="106" y="22" width="12" height="18" fill="#7a5cc4" /><polygon points="104,24 112,6 120,24" fill="#9a6fe0" />
      <g fill="#ffe27a">
        <rect x="91" y="38" width="4" height="7" rx="2" /><rect x="128" y="38" width="4" height="7" rx="2" /><rect x="110" y="26" width="4" height="7" rx="2" />
        <rect x="102" y="46" width="4" height="7" rx="2" /><rect x="118" y="46" width="4" height="7" rx="2" />
      </g>
      <rect x="108" y="54" width="8" height="14" rx="4" fill="#2a1b5c" />
      {/* qarğıdalı kareta */}
      <circle cx="44" cy="62" r="12" fill="#ff9f1c" />
      <path d="M44 50 Q36 62 44 74 M44 50 Q52 62 44 74 M32 62 L56 62" stroke="#d97a0a" strokeWidth="1.5" fill="none" />
      <rect x="43" y="46" width="2.6" height="5" fill="#5a8a2e" />
      <circle cx="34" cy="73" r="5" fill="none" stroke="#ffd23f" strokeWidth="2" /><circle cx="54" cy="73" r="5" fill="none" stroke="#ffd23f" strokeWidth="2" />
      <g className={styles.spark} fill="#ffe27a">
        <path d="M70 40 l1.4 3.4 3.4 1.4 -3.4 1.4 -1.4 3.4 -1.4 -3.4 -3.4 -1.4 3.4 -1.4Z" /><path d="M26 42 l1.2 2.8 2.8 1.2 -2.8 1.2 -1.2 2.8 -1.2 -2.8 -2.8 -1.2 2.8 -1.2Z" />
      </g>
    </svg>
  )
}
