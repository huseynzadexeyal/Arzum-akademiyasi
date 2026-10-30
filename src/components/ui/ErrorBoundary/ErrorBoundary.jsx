import { Component } from 'react'
import { contact, telHref } from '@/data/contact'

// Gözlənilməz xəta olsa, ağ ekran əvəzinə sadə mesaj və telefon göstərir.
export default class ErrorBoundary extends Component {
  state = { failed: false }

  static getDerivedStateFromError() { return { failed: true } }

  componentDidCatch(error) { console.error(error) } // eslint-disable-line no-console

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <div role="alert" style={{ padding: '18vh 24px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '1.4rem' }}>Arzum Akademiya</h1>
        <p>Səhifə yüklənmədi. Zəhmət olmasa yeniləyin və ya bizə zəng edin.</p>
        <p><a href={telHref}>{contact.phone}</a></p>
      </div>
    )
  }
}
