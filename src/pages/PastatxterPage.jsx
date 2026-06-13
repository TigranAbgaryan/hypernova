import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import pastatuxt1 from '../assets/pastatuxt_1.jpg'
import pastatuxt2 from '../assets/pastatuxt_2.jpg'
import pastatuxt3 from '../assets/pastatuxt_3.png'
import pastatuxt4 from '../assets/pastatuxt_4.png'
import othersPastatuxtFirst from '../assets/others_pastatuxt_1.jpg'
import othersPastatuxtSecond from '../assets/others_pastatuxt_2.png'
import othersPastatuxtThird from '../assets/others_pastatuxt_3.png'
import othersPastatuxtFourth from '../assets/others_pastatuxt_4.jpg'

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

const LICENSES = [
  { id: 1, title: 'Լիցենզիա N 001', img: pastatuxt1 },
  { id: 2, title: 'Լիցենզիա N 002', img: pastatuxt2 },
  { id: 3, title: 'Սերտիֆիկատ ISO 9001', img: pastatuxt3 },
  { id: 4, title: 'Սերտիֆիկատ ISO 14001', img: pastatuxt4 },
]

const OTHER_DOCS = [
  { id: 5, title: 'Կանոնադրություն', img: othersPastatuxtFirst },
  { id: 6, title: 'Հարկային գրանցում', img: othersPastatuxtSecond },
  { id: 7, title: 'Բնապահպանական եզրակացություն', img: othersPastatuxtThird },
  { id: 8, title: 'Աշխատանքային անվտանգություն', img: othersPastatuxtFourth },
]

function DocGallery({ items }) {
  const [lightbox, setLightbox] = useState(null)
  return (
    <>
      <div className="doc-gallery">
        {items.map(doc => (
          <button key={doc.id} className="doc-gallery-item" onClick={() => setLightbox(doc)}>
            <img src={doc.img} alt={doc.title} loading="lazy" />
            <div className="doc-gallery-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="doc-lightbox" onClick={() => setLightbox(null)}>
          <div className="doc-lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="doc-lightbox-close" onClick={() => setLightbox(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img src={lightbox.img} alt={lightbox.title} />
            <p className="doc-lightbox-title">{lightbox.title}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default function PastatxterPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">Փաստաթղթեր</span>
        </div>
      </div>

      {/* ── Licenses & Certificates ── */}
      <section className="svc-page-section">
        <div className="container">
          <h1 className="prod-page-title">Փաստաթղթեր</h1>
          <p className="prod-page-desc">Լիցենզիաներ և սերտիֆիկատներ</p>
          <DocGallery items={LICENSES} />

          {/* ── Other Documents ── */}
          <h2 className="docs-section-title">Այլ փաստաթղթեր</h2>
          <DocGallery items={OTHER_DOCS} />
        </div>
      </section>

      {/* ── Services cards ── */}
      <section className="services">
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

      {/* ── Products ── */}
      <section className="products">
        <div className="container">
          <h2>Մեր արտադրանքը</h2>
          <div className="img-grid-3x2">
            {PRODUCTS.map(p => p.noLink ? (
              <div key={p.slug} className="img-card">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                  <span className="img-card-title">{p.title}</span>
                </div>
              </div>
            ) : (
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
            <Link to="/artadranq" className="btn-more">
              Ամբողջական ցանկը
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
