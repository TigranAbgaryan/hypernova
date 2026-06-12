import { Link, useParams, Navigate } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { PRODUCTS } from '../data/products'
import { PROJECTS } from '../data/projects'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = SERVICES.find(s => s.slug === slug)
  const others = SERVICES.filter(s => s.slug !== slug)

  if (!service) return <Navigate to="/carayutyunner" replace />

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Gavnavar</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link to="/carayutyunner" className="breadcrumb-link">Ծannayutienner</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">{service.shortTitle}</span>
        </div>
      </div>

      {/* ── Hero + sidebar layout ── */}
      <section className="svc-detail-hero">
        <div className="container svc-detail-hero-inner">

          {/* Left: image */}
          <div className="svc-detail-img-wrap">
            <img src={service.heroImg} alt={service.title} className="svc-detail-img" loading="eager" />
          </div>

          {/* Right: sidebar */}
          <aside className="pd-sidebar">
            <div className="pd-sidebar-category">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              {service.category}
            </div>
            <h2 className="pd-sidebar-title">{service.title}</h2>

            <div className="svc-sidebar-features">
              {service.features.map(f => (
                <div key={f} className="svc-sidebar-feature-row">
                  <svg viewBox="0 0 22 22" width="18" height="18" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="11" cy="11" r="11" fill="#F97316" />
                    <path d="M6.5 11.5l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a href="tel:+37410123456" className="pd-cta-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Ձekavarеl ծannayutyun
            </a>
          </aside>

        </div>
      </section>

      {/* ── Description ── */}
      <section className="pd-desc-section">
        <div className="container pd-desc-inner">
          <h2 className="pd-desc-title">{service.title}</h2>
          <div className="pd-desc-body">
            <p>{service.desc}</p>
            <p>{service.desc2}</p>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="products" style={{ background: '#f9fafb' }}>
        <div className="container">
          <h2>Мeр artadranqы</h2>
          <div className="img-grid-3x2">
            {PRODUCTS.slice(0, 6).map(p => (
              <Link key={p.slug} to={`/artadranq/${p.slug}`} className="img-card">
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
            <Link to="/artadranq" className="btn-more">
              Ambogj tsankы
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="services">
        <div className="container">
          <h2>Ayl ծannayutienner</h2>
          <div className="services-grid services-grid--3">
            {others.map(s => (
              <Link key={s.slug} to={`/carayutyunner/${s.slug}`} className="service-card svc-link-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc.slice(0, 110)}…</p>
                <span className="service-link">
                  Imanay antin
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13" style={{ marginLeft: 6 }}>
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="services-footer">
            <Link to="/carayutyunner" className="btn-services-all">
              Burr ծannayutienner
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="projects">
        <div className="container">
          <h2>Мeр naxagdzery</h2>
          <div className="img-grid-3col">
            {PROJECTS.slice(0, 3).map(p => (
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
