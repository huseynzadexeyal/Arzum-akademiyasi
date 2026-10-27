// Brend loqosu: public/logo.png (dairəvi, şəffaf fonlu).
// <svg> içində olduğu üçün həm adi yerdə, həm də başqa <svg>-nin (Badge) içində işləyir.
export default function Logo(props) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" {...props}>
      <image href="/logo.png" x="0" y="0" width="120" height="120" />
    </svg>
  )
}
