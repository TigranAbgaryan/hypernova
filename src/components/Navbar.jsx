import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/footer-logo.svg'

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
      <rect x="1" y="5" width="15" height="11" rx="2" />
      <path d="M16 9h4l3 3.5V19h-7V9z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">

        <Link to="/" className="logo">
          <img src={logo} alt="Hypernova LLC" width={144} height={40} style={{ objectFit: 'contain' }} />
        </Link>

        <nav>
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
              <NavLink to="/kap" className={({ isActive }) => isActive ? 'nav-active' : ''}>
                Կապ
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="tel:+37493785278" className="btn-phone">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            +374 93 785278
          </a>
          {/* <span className="flag" title="Armenian">🇦🇲</span>
          <button className="hamburger" aria-label="Open menu">
            <span /><span /><span />
          </button> */}
        </div>

      </div>
    </header>
  )
}
