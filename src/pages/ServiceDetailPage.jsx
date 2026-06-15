import { Link, useParams, Navigate } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { PRODUCTS } from '../data/products'
import { PROJECTS } from '../data/projects'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import canaparhFirst from '../assets/canaparh.jpg'

const HOME_SERVICES = [
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
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link to="/carayutyunner" className="breadcrumb-link">Ծառայություններ</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">{service.shortTitle}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="page-hero page-hero--tall">
        <div className="page-hero-overlay" />
        <img
          src={canaparhFirst}
          alt={service.title}
          className="page-hero-img"
          loading="eager"
        />
      </div>

      {/* ── Description ── */}
      <section className="pd-desc-section">
        <div className="container pd-desc-inner">
          <h2 className="pd-desc-title">Ճանապարհաշինություն</h2>
          <div className="pd-desc-body">
            <p>Մենք իրականացնում ենք բարձրորակ ասֆալտապատման աշխատանքներ՝ ապահովելով ամուր, հարթ և երկարատև ճանապարհային ծածկեր։ Մեր փորձառու մասնագետների թիմը և ժամանակակից տեխնիկան թույլ են տալիս արդյունավետ կերպով իրականացնել ինչպես փոքր, այնպես էլ մեծածավալ նախագծեր՝ պահպանելով որակի և անվտանգության բոլոր չափանիշները։
Ասֆալտապատման ծառայությունները ներառում են տարածքի նախապատրաստում, հիմքի հարթեցում և ամրացում, ասֆալտբետոնե խառնուրդի փռում և խտացում։ Աշխատանքներն իրականացվում են ժամանակակից տեխնոլոգիաներով և բարձրորակ նյութերով, ինչը երաշխավորում է ճանապարհի դիմացկունությունը տարբեր կլիմայական և շահագործման պայմաններում։
Մենք կատարում ենք ավտոճանապարհների, փողոցների, բակային տարածքների, կայանատեղիների, արդյունաբերական և կոմերցիոն տարածքների ասֆալտապատում՝ յուրաքանչյուր նախագծի համար առաջարկելով անհատական և արդյունավետ լուծումներ։
Մեր նպատակն է ստեղծել անվտանգ, հուսալի և երկարաժամկետ օգտագործման համար նախատեսված ճանապարհային ենթակառուցվածքներ, որոնք լիովին համապատասխանում են պատվիրատուի պահանջներին և ոլորտի բարձր չափանիշներին։</p>

          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services">
        <div className="container">
          <h2>Մեր ծառայությունները</h2>
          <div className="services-grid">
            {HOME_SERVICES.map(s => (
              <div key={s.title} className={`service-card${s.active ? ' active' : ''}`}>
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
              Ամբոլջական ցանկը
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
