import styles from './Doodles.module.css'

const DOODLES = [['☁️', '5%', '52%'], ['🌈', '4%', '72%'], ['🎈', '52%', '83%'], ['🦋', '66%', '47%'], ['⭐', '78%', '60%']]

export default function Doodles() {
  return DOODLES.map(([emoji, top, left], i) => (
    <span key={i} className={`${styles.dd} ${styles[`d${i}`]}`} style={{ top, left, animationDelay: `${i * 0.7}s` }} aria-hidden="true">
      {emoji}
    </span>
  ))
}
