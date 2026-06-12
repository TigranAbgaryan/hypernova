import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { PRODUCTS } from '../data/products'
import naxagcerTop from '../assets/naxagcertop.png'
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
export default function ProjectsPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">Նախագծեր</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <img
          src={naxagcerTop}
          alt="Naxagdzer"
          className="page-hero-img"
        />
      </div>

      {/* ── Projects grid ── */}
      <section className="proj-page-section">
        <div className="container">
          <h1 className="prod-page-title">Մեր նախագծերը</h1>

          <p className="prod-page-desc">
          «Հիպերնովա» ՍՊԸ-ն մասնագիտացած է ճանապարհաշինարարական և ենթակառուցվածքային նախագծերի իրականացման ոլորտում։ Ընկերությունն իրականացնում է միջպետական, հանրապետական և համայնքային նշանակության ավտոճանապարհների կառուցման, հիմնանորոգման և վերականգնման աշխատանքներ՝ ապահովելով բարձր որակ և համապատասխանություն ոլորտային չափանիշներին։
          </p>


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
    </>
  )
}
