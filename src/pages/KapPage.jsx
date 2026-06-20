import { Link } from 'react-router-dom'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import heroImg from '../assets/naxagcertop.png'
import kapMap from '../assets/kap-map.png'
import naxagicFirst from '../assets/naxagic_first.jpg'
import naxagicSecond from '../assets/naxagic_second.jpg'
import naxagicThree from '../assets/naxagic_three.jpg'

const SERVICE_CARDS = [
  {
    title: 'Ճանապարհաշինություն',
    desc: 'Նախագծումից մինչև իրականացում՝ կառուցում ենք դիմացկուն և անվտանգ ճանապարհներ՝ ժամանակակից տեխնոլոգիաներով։',
    icon: <img src={canaparh} width="32" height="32" alt="" />,
  },
  {
    title: 'Ջրամատակարարում և ջրահեռացում',
    desc: 'Ապահովում ենք հուսալի և արդյունավետ ջրամատակարարման համակարգերի կառուցում տարատեսակ նշանակության օբյեկտների համար։',
    icon: <img src={jramatakar} width="32" height="32" alt="" />,
  },
  {
    title: 'Տեխնիկայի վարձակալություն',
    desc: 'Առաջարկում ենք շինարարական և ճանապարհաշինական տեխնիկայի վարձակալության տարբեր ծավալի և բարդության աշխատանքների համար։',
    icon: <img src={texnikayi} width="32" height="32" alt="" />,
  },
]

const PROJECTS = [
  { title: 'Մ15 Վերին Պտղնի – Մասիս ճանապարհահատվածի հիմնանորոգում', img: naxagicFirst },
  { title: 'Մ-2, Երևան - Երասխ - Գորիս - Մեղրի - ՀՀ սահման միջպետական նշանակության ավտոճանապարհ', img: naxagicSecond },
  { title: 'Արևիկ – Տանձուտ ճանապարհահատվածի հիմնանորոգում', img: naxagicThree },
]

export default function KapPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">Կապ</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="page-hero page-hero--tall">
        <div className="page-hero-overlay" />
        <img src={heroImg} alt="Կապ" className="page-hero-img" loading="eager" />
      </div>

      {/* ── Contact section ── */}
      <section className="kap-section">
        <div className="container">
          <h1 className="prod-page-title">Կապ մեզ հետ</h1>

          <div className="kap-inner">
            {/* Map */}
            <a
              href="https://yandex.com/maps/?ll=44.469181,40.074897&z=15&pt=44.469181,40.074897"
              target="_blank"
              rel="noopener noreferrer"
              className="kap-map-wrap"
            >
              <img src={kapMap} alt="Hypernova LLC location" className="kap-map-img" />
              <span className="kap-map-open">Բացել Yandex Maps-ում</span>
            </a>

            {/* Contact info */}
            <div className="kap-info">
              <div className="kap-info-row">
                <div className="kap-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="kap-info-label">Հասցե</p>
                  <p className="kap-info-value">ՀՀ, Արարատի մարզ,<br />Նոր Հարբերդ գյուղ</p>
                </div>
              </div>

              <div className="kap-info-row">
                <div className="kap-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </div>
                <div>
                  <p className="kap-info-label">Հեռախոս</p>
                  <a href="tel:+37493785278" className="kap-info-value kap-info-link">+374 93785278</a>
                </div>
              </div>

              <div className="kap-info-row">
                <div className="kap-info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="kap-info-label">Էլ. փոստ</p>
                  <a href="mailto:hypernova.construction.llc@gmail.com" className="kap-info-value kap-info-link">
                    hypernova.construction.llc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services cards ── */}
      <section className="services products-mobile-hide">
        <div className="container">
          <h2>Մեր ծառայությունները</h2>
          <div className="services-grid">
            {SERVICE_CARDS.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="services-footer">
            <Link to="/carayutyunner" className="btn-services-all">
              Բոլոր ծառայությունները
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="projects products-mobile-hide">
        <div className="container">
          <h2>Մեր նախագծերը</h2>
          <div className="img-grid-3col">
            {PROJECTS.map((p, i) => (
              <a key={p.title} href="#" className="img-card img-card--tall">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                  <span className="img-card-title">{p.title}</span>
                  {i === 0 && <span className="img-card-link">Դիտել մանրամասները</span>}
                </div>
              </a>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/naxagdzer" className="btn-more">
              Դիտել բոլոր նախագծերը
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
