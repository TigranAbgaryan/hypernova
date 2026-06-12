import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { PRODUCTS } from '../data/products'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import carayutyunnerTop from '../assets/carayutyunner.png'

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

export default function ServicesPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Gavnavar</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">Ծannayutienner</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <img
          src={carayutyunnerTop}
          alt="Ծannayutienner"
          className="page-hero-img"
        />
      </div>

      {/* ── Services grid ── */}
      <section className="svc-page-section">
        <div className="container">
          <h1 className="prod-page-title">Мeр ծannayutienner</h1>
          <p className="prod-page-desc">
            Hypernova LLC-ն artadrum e bard oraki ծannayutienner shinarararakan nakhagdzerum:
            Мer kompanian iravunq uni ashxatel mets u фoch chananaparhayin nakhagdzerum ev
            artadrel barzr kachutyan betone artadranq:
          </p>

          <div className="svc-page-grid">
            {SERVICES.map(s => (
              <Link key={s.slug} to={`/carayutyunner/${s.slug}`} className="svc-card">
                <div className="svc-card-icon">{s.icon}</div>
                <div className="svc-card-body">
                  <span className="svc-card-cat">{s.category}</span>
                  <h3 className="svc-card-title">{s.title}</h3>
                  <p className="svc-card-desc">{s.desc.slice(0, 120)}…</p>
                  <span className="svc-card-link">
                    Imanay antin
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="products">
        <div className="container">
          <h2>Մեր արտադրանքը</h2>
          <div className="img-grid-3x2">
            {PRODUCTS.map(p => (
              <Link key={p.slug} to={`/artadranq/${p.slug}`} className="img-card">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                  <span className="img-card-title">{p.title}</span>
                  <span className="img-card-link">դիտել մանրամասները</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-footer">
            <button className="btn-more">
              Ամբողջական ցանկը
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Services cards ── */}
      <section className="services">
        <div className="container">
          <h2>Մեր ծառայությունները</h2>
          <div className="services-grid">
            {SERVICE_CARDS.map(s => (
              <div key={s.title} className={`service-card${s.active ? ' active' : ''}`}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#" className="service-link">Իմանալ ավելին  </a>
              </div>
            ))}
          </div>
          <div className="services-footer">
            <button className="btn-services-all">
              Բոլոր ծառայությունները
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
