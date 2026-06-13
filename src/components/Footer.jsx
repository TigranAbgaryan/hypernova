import { Link } from 'react-router-dom'
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

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">

        <div className="footer-nav">
          <ul>
            <li><a href="#">Ծառայություններ</a></li>
            <li><a href="#">Նախագծեր</a></li>
            <li><Link to="/artadranq">Ապրանքներ</Link></li>
            <li><a href="#">Կապ</a></li>
          </ul>
          <ul>
            <li><a href="#">Գործընկերներ</a></li>
            <li><Link to="/pastatxter">Փաստաթղթեր</Link></li>
            <li><a href="#">Մեր մասին</a></li>
          </ul>
        </div>

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Hypernova" style={{ height: '56px', width: 'auto' }} />
          </Link>

        </div>

        <div className="footer-contact">
          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="contact-icon" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            <a
              href="https://yandex.com/maps/?ll=44.479627%2C40.087119&mode=search&sll=44.469181%2C40.074897&text=40.074897%2C44.469181&z=14.22"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >Village of Nor Kharberd, Ararat Region</a>
          </div>
          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="contact-icon" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            <span>+374 93 785278</span>
          </div>
          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" className="contact-icon" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>hypernova.construction.llc@gmail.com</span>
          </div>
        </div>

      </div>

      <div className="footer-bar">
        © 2026 Hypernova LLC | All Rights Reserved.
      </div>
    </footer>
  )
}
