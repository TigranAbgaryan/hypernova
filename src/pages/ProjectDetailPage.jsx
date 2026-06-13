import { Link, useParams, Navigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { PRODUCTS } from '../data/products'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import arevikFirst from '../assets/arevik_1.jpg'

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
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Link to="/naxagdzer" className="breadcrumb-link">Նախագծեր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">{project.shortTitle}</span>
        </div>
      </div>

      {/* ── Full-width hero image ── */}
      <div className="proj-hero-banner">
        <img src={arevikFirst} alt={project.title} className="proj-hero-banner-img" loading="eager" />
        <div className="proj-hero-banner-overlay" />
      </div>

      {/* ── Title + sidebar layout ── */}
      <section className="proj-detail-section">
        <div className="container proj-detail-inner">

          {/* Left: title + description */}
          <div className="proj-detail-body">
            <h1 className="proj-detail-title">{project.title}</h1>
            <p className="proj-detail-lead">Տ-3-19 Արևիկ–Տանձուտ ավտոճանապարհի կմ 0+000 – կմ 3+400 հատվածի հիմնանորոգման աշխատանքներ։</p>
            <p className="proj-detail-text">Նախագծի շրջանակում իրականացվել են ճանապարհային ծածկի հիմնանորոգման, հողային աշխատանքների, ջրահեռացման համակարգերի բարելավման և երթևեկության անվտանգության բարձրացմանն ուղղված միջոցառումներ՝ ապահովելով ճանապարհահատվածի հուսալի և երկարատև շահագործումը։ Աշխատանքներն ավարտվել և ճանապարհահատվածը շահագործման է հանձնվել 2025 թվականին</p>
          </div>



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


    </>
  )
}
