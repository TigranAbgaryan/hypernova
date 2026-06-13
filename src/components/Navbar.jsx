import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/footer-logo.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <Link to="/" className="logo">
          <img src={logo} alt="Hypernova LLC" className="logo-img" style={{ objectFit: 'contain' }} />
        </Link>

        <nav className={`nav-menu${isOpen ? ' nav-menu--open' : ''}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/carayutyunner" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                Ծառայություններ
              </NavLink>
            </li>
            <li>
              <NavLink to="/artadranq" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                Արտադրանք
              </NavLink>
            </li>
            <li>
              <NavLink to="/naxagdzer" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                Նախագծեր
              </NavLink>
            </li>
            <li>
              <NavLink to="/mer-masin" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                Մեր մասին
              </NavLink>
            </li>
            <li>
              <NavLink to="/pastatxter" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                Փաստաթղթեր
              </NavLink>
            </li>
            <li>
              <NavLink to="/kap" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                Կապ
              </NavLink>
            </li>
          </ul>
          <a href="tel:+37493785278" className="btn-phone nav-phone-mobile">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            +374 93 785278
          </a>
        </nav>

        <div className="nav-actions">
          <a href="tel:+37493785278" className="btn-phone btn-phone--desktop">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            +374 93 785278
          </a>
          <button
            className={`hamburger${isOpen ? ' hamburger--open' : ''}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>

      </div>

      {/* Mobile overlay */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
    </header>
  )
}
