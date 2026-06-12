import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import artadranqHome from '../assets/artadranq_home.png'
import canaparh from '../assets/canaparh-icon.svg'
import asfaltbeton from '../assets/asfaltbeton.jpg'
import beton from '../assets/beton.jpg'
import erkatbeton from '../assets/erkatbeton.jpg'
import bitumayinEmulsia from '../assets/bitumayin-emulsia.jpg'
import vibrobeton from '../assets/vibrobeton.jpg'
import bitum from '../assets/bitum.jpg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import naxagicFirst from '../assets/naxagic_first.jpg'
import naxagicSecond from '../assets/naxagic_second.jpg'
import naxagicThree from '../assets/naxagic_three.jpg'

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


export default function ProductsPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">Արտադրանք</span>
        </div>
      </div>

      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <img
          src={artadranqHome}
          alt="Artadranq"
          className="page-hero-img"
        />
      </div>

      {/* ── Products intro + grid ── */}
      <section className="prod-page-section">
        <div className="container">
          <h1 className="prod-page-title">Արտադրանք</h1>
          <p className="prod-page-desc">
        «Հիպերնովա» ՍՊԸ-ն արտադրում և մատակարարում է սերտիֆիկացված շինարարական նյութեր և երկաթբետոնե արտադրատեսակներ՝ համապատասխանելով ոլորտի որակի և անվտանգության բարձր չափանիշներին։ Մեր արտադրական կարողությունները թույլ են տալիս ապահովել ինչպես խոշոր ենթակառուցվածքային նախագծերի, այնպես էլ մասնավոր շինարարության պահանջները։
          </p>


          <div className="prod-page-grid">
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
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services">
        <div className="container">
          <h2>Մեր ծառայությունները</h2>
          <div className="services-grid services-grid--3">
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#" className="service-link">Դիտել մանրամասները</a>
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

      {/* ── Projects ── */}
      <section className="projects">
        <div className="container">
          <h2>Մեր նախագծերը</h2>
          <div className="img-grid-3col">
            {PROJECTS.map(p => (
              <a key={p.title} href="#" className="img-card img-card--tall" >
                <img src={p.img} alt={p.title} loading="lazy"  />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                  <span className="img-card-title">{p.title}</span>
                  <span className="img-card-link">Դիտել մանրամասները</span>
                </div>
              </a>
            ))}
          </div>
          <div className="section-footer">
            <button className="btn-more">
           Դիտել բոլոր նախագծերը
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
