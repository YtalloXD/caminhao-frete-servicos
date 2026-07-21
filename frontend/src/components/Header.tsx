import { useState } from 'react'
import { BRAND, NAV_ITEMS } from '../content'
import { Icon } from './Icon'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label={`${BRAND.name}, voltar ao início`} onClick={closeMenu}>
          <span className="brand-logo">{BRAND.logo}</span>
          <span className="brand-name">{BRAND.name}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>

        <div className={`header-panel ${menuOpen ? 'is-open' : ''}`} id="main-navigation">
          <nav aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="button button-small button-secondary"
              type="button"
              onClick={() => setNotice('O acesso à conta será habilitado com a integração do aplicativo.')}
            >
              Entrar
            </button>
            <a className="button button-small button-primary" href="#simulacao" onClick={closeMenu}>
              Solicitar transporte
            </a>
          </div>
        </div>
      </div>
      {notice && <p className="header-notice" role="status" aria-live="polite">{notice}</p>}
    </header>
  )
}
