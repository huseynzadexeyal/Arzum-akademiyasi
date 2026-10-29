// Gün çıxımı / gün batımı hesabı (SunCalc alqoritminin sadə versiyası).
// İnternet və yer icazəsi lazım deyil: akademiyanın yerləşdiyi Bakı koordinatları ilə hesablanır.
export const BAKU = { lat: 40.41, lon: 49.87 }

const RAD = Math.PI / 180
const DAY = 86400000
const J1970 = 2440588
const J2000 = 2451545
const J0 = 0.0009
const OBLIQ = RAD * 23.4397

const toDays = (date) => date.getTime() / DAY - 0.5 + J1970 - J2000
const fromJulian = (j) => new Date((j + 0.5 - J1970) * DAY)

// Verilmiş günün gün çıxımı və batımı (Date cütü)
function sunTimes(date, lat, lon) {
  const lw = RAD * -lon
  const phi = RAD * lat
  const d = toDays(date)
  const n = Math.round(d - J0 - lw / (2 * Math.PI))
  const ds = J0 + lw / (2 * Math.PI) + n
  const M = RAD * (357.5291 + 0.98560028 * ds)
  const C = RAD * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M))
  const L = M + C + RAD * 102.9372 + Math.PI
  const dec = Math.asin(Math.sin(L) * Math.sin(OBLIQ))
  const noon = J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L)

  const cosH = (Math.sin(-0.833 * RAD) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec))
  if (cosH >= 1) return null            // gün çıxmır (qütb gecəsi)
  if (cosH <= -1) return [new Date(-Infinity), new Date(Infinity)] // gün batmır
  const w = Math.acos(cosH)
  const set = J2000 + J0 + (w + lw) / (2 * Math.PI) + n + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L)
  return [fromJulian(noon - (set - noon)), fromJulian(set)]
}

// İndi gecədirmi? (dünən, bu gün və sabahın gün aralıqlarına baxılır ki, gecə yarısı ətrafında səhv olmasın)
export function isNight(now = new Date(), { lat, lon } = BAKU) {
  for (const k of [-1, 0, 1]) {
    const t = sunTimes(new Date(now.getTime() + k * DAY), lat, lon)
    if (t && now >= t[0] && now < t[1]) return false
  }
  return true
}
