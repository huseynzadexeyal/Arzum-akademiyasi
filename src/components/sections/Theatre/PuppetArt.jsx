import { redhood } from './puppets/redhood'
import { cirtdan } from './puppets/cirtdan'
import { qogal } from './puppets/qogal'
import { tiqtiq } from './puppets/tiqtiq'
import { hare } from './puppets/hare'

// Nağıl kuklalarının siyahısı: ad → SVG komponenti. Hər biri viewBox 120×140-da çəkilib,
// buna görə səhnədə eyni ölçü və eyni yerləşmə ilə düzülür. Yeni kukla: puppets/ içində çək, bura yaz.
const ART = { ...redhood, ...cirtdan, ...qogal, ...tiqtiq, ...hare }

export default function PuppetArt({ name, className }) {
  const Art = ART[name]
  return (
    <svg className={className} viewBox="0 0 120 140" aria-hidden="true" focusable="false">
      <Art />
    </svg>
  )
}
