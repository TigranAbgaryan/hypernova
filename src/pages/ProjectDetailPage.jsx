import { Link, useParams, Navigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { PRODUCTS } from '../data/products'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'

const SERVICES = [
  {
    title: 'Ճանապարհաշինություն',
    desc: 'Նախագծումից մինչև իրականացում՝ կառուցում ենք դիմացկուն և անվտանգ ճանապարհներ՝ ժամանակակից տեխնոլոգիաներով։',
    icon: <img src={canaparh} width="32" height="32" alt="" />,
  },
  {
    title: 'Ջրամատակարարում',
    desc: 'Ապահովում ենք հուսալի և արդյունավետ ջրամատակարարման համակարգերի կառուցում տարատեսակ նշանակության օբյեկտների համար։',
    icon: <img src={jramatakar} width="32" height="32" alt="" />,
  },
  {
    title: 'Ջրահեռացում',
    desc: 'Իրականացնում ենք ջրահեռացման ծառայություն  ապահովելով անձրևաջրերի, մակերևութային և կեղտաջրերի արդյունավետ հեռացում։',
    icon: <img src={jraheracum} width="32" height="32" alt="" />,
    active: true,
  },
  {
    title: 'Տեխնիկայի վարձակալություն',
    desc: 'Առաջարկում ենք շինարարական և ճանապարհաշինական տեխնիկայի վարձակալության տարբեր ծավալի և բարդության աշխատանքների համար։',
    icon: <img src={texnikayi} width="32" height="32" alt="" />,
  },
]

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = PROJECTS.find(p => p.slug === slug)
  const others = PROJECTS.filter(p => p.slug !== slug).slice(0, 3)

  if (!project) return <Navigate to="/naxagdzer" replace />

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Gavnavar</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link to="/naxagdzer" className="breadcrumb-link">Naxagdzer</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">{project.shortTitle}</span>
        </div>
      </div>

      {/* ── Full-width hero image ── */}
      <div className="proj-hero-banner">
        <img src={project.heroImg} alt={project.title} className="proj-hero-banner-img" loading="eager" />
        <div className="proj-hero-banner-overlay" />
      </div>

      {/* ── Title + sidebar layout ── */}
      <section className="proj-detail-section">
        <div className="container proj-detail-inner">

          {/* Left: title + description */}
          <div className="proj-detail-body">
            <h1 className="proj-detail-title">{project.title}</h1>
            <p className="proj-detail-lead">{project.desc}</p>
            <p className="proj-detail-text">{project.desc2}</p>
          </div>

          {/* Right: info sidebar */}
          <aside className="proj-detail-sidebar">
            <div className="proj-info-card">
              <div className="proj-info-row">
                <span className="proj-info-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                  Shavy
                </span>
                <span className="proj-info-value">{project.type}</span>
              </div>
              <div className="proj-info-row">
                <span className="proj-info-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  Marz
                </span>
                <span className="proj-info-value">{project.region}</span>
              </div>
              <div className="proj-info-row">
                <span className="proj-info-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                    <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                  </svg>
                  Chap
                </span>
                <span className="proj-info-value">{project.length}</span>
              </div>
              <div className="proj-info-row">
                <span className="proj-info-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Tvakanin
                </span>
                <span className="proj-info-value">{project.year}</span>
              </div>
              <div className="proj-info-row">
                <span className="proj-info-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  Partezatar
                </span>
                <span className="proj-info-value">{project.client}</span>
              </div>
            </div>
            <a href="tel:+37410123456" className="pd-cta-btn" style={{ marginTop: '4px' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Կaputvel mer hет
            </a>
          </aside>

        </div>
      </section>

      {/* ── Services ── */}
      <section className="services">
        <div className="container">
          <h2>Մեր ծառայությունները</h2>
          <div className="services-grid">
            {SERVICES.map(s => (
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


      {/* ── Other Projects ── */}
      <section className="projects">
        <div className="container">
          <h2>Ayl naxagdzer</h2>
          <div className="img-grid-3col">
            {others.map(p => (
              <Link key={p.slug} to={`/naxagdzer/${p.slug}`} className="img-card img-card--tall">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                  <span className="img-card-title">{p.title}</span>
                  <span className="img-card-link">ditel manramasnutyunnere</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/naxagdzer" className="btn-more">
              ditel bolor naxagdzery
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
