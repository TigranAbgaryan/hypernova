import { Link, useParams, Navigate } from 'react-router-dom'
import { PRODUCTS } from '../data/products'

const SERVICES = [
  {
    title: 'Փոխadrutyun',
    desc: 'Nakatagrutyan dimum hrazkazmagumy kyanoghum mez nimagkins u alertnerov ծannayargnerу шamanakyutyannerov.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <rect x="1" y="5" width="15" height="11" rx="2" />
        <path d="M16 9h4l3 3.5V19h-7V9z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Ashxatanq',
    desc: 'Hrazkagtsum mez bargandral ashxatutyuna ashxatanskneri apahovogh parpo u erkparatsun dzhnutyun dzelery.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Betone ashxatanq',
    desc: 'Bargandval betonne zhapandrutyan sharenosagas kanganutyaneri li Himkoyi li azhxatansknery u kanoghnery.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Oraky ev kachoyutyun',
    desc: 'Mеr normoghutyan hamakargы apahov e bolor nakhagtserin mi tareri aparkov yntragneri bargandal аrandзevnerы.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

const PROJECTS = [
  { title: 'Bajrhovit – Mjaykovlyki chananaparhnshаtuvatd', img: 'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=800&q=80' },
  { title: 'М-2 Ереван – Гюмри – Мhрdji – LL', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80' },
  { title: 'Аrtаshаt – Sadakhlo chananaparhnshаtuvatd', img: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?w=800&q=80' },
]

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = PRODUCTS.find(p => p.slug === slug)

  if (!product) return <Navigate to="/artadranq" replace />

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Gavnavar</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link to="/artadranq" className="breadcrumb-link">Artadranq</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">{product.title}</span>
        </div>
      </div>

      {/* ── Product Hero ── */}
      <section className="pd-hero">
        <div className="container pd-hero-inner">
          <div className="pd-hero-img-wrap">
            <img src={product.heroImg} alt={product.title} className="pd-hero-img" loading="eager" />
          </div>
          <aside className="pd-sidebar">
            <div className="pd-sidebar-category">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              {product.category}
            </div>
            <h1 className="pd-sidebar-title">{product.title}</h1>
            <div className="pd-sidebar-specs">
              {product.specs.map(s => (
                <div key={s.label} className="pd-spec-row">
                  <span className="pd-spec-label">{s.label}</span>
                  <span className="pd-spec-value">{s.value}</span>
                </div>
              ))}
            </div>
            <a href="tel:+37410123456" className="pd-cta-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Ձekavarеl artadranq
            </a>
          </aside>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="pd-desc-section">
        <div className="container pd-desc-inner">
          <h2 className="pd-desc-title">Vibratsianayin betone yaporastavsvatsvagner</h2>
          <div className="pd-desc-body">
            <p>{product.desc}</p>
            <div className="pd-measurements">
              <h3>Чapery nerkayatsner</h3>
              <ul>
                <li>10 × 20 × 5 sd</li>
                <li>20 × 20 sd</li>
                <li>30 × 10 sd</li>
              </ul>
              <h3 style={{ marginTop: '12px' }}>Мeծ chaper</h3>
              <ul>
                <li>40 × 75 × 28 sd</li>
                <li>50 × 40 × 20 sd</li>
              </ul>
            </div>
            <p>{product.desc2}</p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services">
        <div className="container">
          <h2>Мeр ծannayutienner</h2>
          <div className="services-grid services-grid--4">
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#" className="service-link">Imanay antin</a>
              </div>
            ))}
          </div>
          <div className="services-footer">
            <button className="btn-services-all">
              Burr ծannayutienner
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="projects">
        <div className="container">
          <h2>Мeр naxagdzery</h2>
          <div className="img-grid-3col">
            {PROJECTS.map(p => (
              <a key={p.title} href="#" className="img-card img-card--tall">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                  <span className="img-card-title">{p.title}</span>
                  <span className="img-card-link">ditel manramasnutyunnere</span>
                </div>
              </a>
            ))}
          </div>
          <div className="section-footer">
            <button className="btn-more">
              ditel bolor naxagdzery
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
