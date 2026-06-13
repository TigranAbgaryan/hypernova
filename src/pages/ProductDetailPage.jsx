import { Link, useParams, Navigate } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import naxagicFirst from '../assets/naxagic_first.jpg'
import naxagicSecond from '../assets/naxagic_second.jpg'
import naxagicThree from '../assets/naxagic_three.jpg'
import vibroIcon from '../assets/vibro-icon.svg'

const SERVICES = [
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

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = PRODUCTS.find(p => p.slug === slug)

  if (!product) return <Navigate to="/artadranq" replace />

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link to="/artadranq" className="breadcrumb-link">Արտադրանք</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">{product.title}</span>
        </div>
      </div>

      {/* ── Product Hero ── */}
      <div className="page-hero page-hero--tall">
        <div className="page-hero-overlay" />
        <img src={product.heroImg} alt={product.title} className="page-hero-img" loading="eager" />
      </div>

      {/* ── Description ── */}
      <section className="pd-desc-section">
        <div className="container pd-desc-inner">
          <h2 className="pd-desc-title">{product.title}</h2>
          <div className="pd-desc-body">
            <p>{product.desc}</p>
            {product.items && (
              <div className="pd-measurements">
                <ul>
                  {product.items.map((item, i) => (
                    <li key={i}><img src={vibroIcon} width="18" height="18" alt="" />{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {slug !== 'asfalt' && slug !== 'betone-favaryit' && slug !== 'betone-baryer' && slug !== 'bitum' && (
              <>
                <div className="pd-measurements">
                  <h3>Մայթի բետոնե սալիկներ</h3>
                  <ul>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />10 × 20 սմ չափսի բետոնե սալիկներ</li>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />«Հին քաղաք» տեսակի բետոնե սալիկներ</li>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />«Նոր քաղաք» տեսակի բետոնե սալիկներ</li>
                  </ul>
                  <h3 style={{ marginTop: '12px' }}>Բետոնե եզրաքարեր</h3>
                  <ul>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />8 × 20 սմ</li>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />10 × 20 սմ</li>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />15 × 30 սմ</li>
                  </ul>
                  <h3 style={{ marginTop: '12px' }}>Բետոնե բլոկներ</h3>
                  <ul>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />40 × 20 × 20 սմ</li>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />40 × 15 × 20 սմ</li>
                    <li><img src={vibroIcon} width="18" height="18" alt="" />40 × 10 × 20 սմ</li>
                  </ul>
                </div>
                <p>Արտադրությունն իրականացվում է ժամանակակից տեխնոլոգիաներով և որակի խիստ վերահսկողությամբ, ինչը երաշխավորում է արտադրանքի հուսալիությունն ու երկարաժամկետ շահագործումը։ Մենք առաջարկում ենք ինչպես մեծածախ, այնպես էլ մանրածախ վաճառք՝ ապահովելով պատվերների արագ և ժամանակին մատակարարում։</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services">
        <div className="container">
          <h2>Մեր ծառայությունները</h2>
          <div className="services-grid">
            {SERVICES.map(s => (
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
      <section className="projects">
        <div className="container">
          <h2>Մեր նախագծերը</h2>
          <div className="img-grid-3col">
            {PROJECTS.map(p => (
              <a key={p.title} href="#" className="img-card img-card--tall">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                  <span className="img-card-title">{p.title}</span>
                  <span className="img-card-link">Դիտել մանրամասները</span>
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
