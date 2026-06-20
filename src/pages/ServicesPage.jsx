import { Link } from 'react-router-dom'
// import { SERVICES } from '../data/services'
import { PRODUCTS } from '../data/products'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import carayutyunnerTop from '../assets/carayutyunner.png'
import carayutyunFirst from '../assets/carayutyun_1.jpg'
import carayutyunSecond from '../assets/carayutyun_2.jpg'
import carayutyunThird from '../assets/carayutyun_3.jpg'
import carayutyunFourth from '../assets/carayutyun_4.jpg'

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
const SERVICES = [
  {
    slug: 'Ճանապարհաշինություն',
    title: 'Ճանապարհաշինություն',
    img: carayutyunFirst,
    heroImg: carayutyunFirst
  },
  {
    slug: 'ջրամատակարարում-և-ջրահեռացում',
    title: 'Ջրամատակարարում և ջրահեռացում',
    img: carayutyunSecond,
    heroImg: carayutyunSecond
  },
  {
    slug: 'տեխնիկայի-վարձակալություն',
    title: 'Տեխնիկայի վարձակալություն',
    img: carayutyunFourth,
    heroImg: carayutyunFourth
  },
]
export default function ServicesPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">Ծառայություններ</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="page-hero page-hero--tall">
        <div className="page-hero-overlay" />
        <img
          src={carayutyunnerTop}
          alt="Ծառայություններ"
          className="page-hero-img"
        />
      </div>

      {/* ── Services grid ── */}
      <section className="svc-page-section">
        <div className="container">
          <h1 className="prod-page-title">Մեր ծառայությունները</h1>
          <p className="prod-page-desc">
            «Հիպերնովա» ՍՊԸ-ն տրամադրում է ճանապարհաշինարարական և ինժեներական մասնագիտացված ծառայություններ՝ ապահովելով ենթակառուցվածքային նախագծերի արդյունավետ և որակյալ իրականացում։ Մեր ծառայությունները ներառում են ավտոճանապարհների կառուցում և վերանորոգում, ջրամատակարարման և ջրահեռացման համակարգերի իրականացում, ինչպես նաև ժամանակակից շինարարական տեխնիկայի և սարքավորումների վարձակալություն։ Բոլոր աշխատանքներն իրականացվում են ոլորտի ստանդարտներին համապատասխան՝ փորձառու մասնագետների և ժամանակակից տեխնոլոգիաների կիրառմամբ։
          </p>

          <div className="img-grid-2x2">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} to={`/carayutyunner/${encodeURIComponent(s.slug)}`} className="img-card">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                <span className="img-card-title">{s.title}</span>
                 <span className="img-card-link">դիտել մանրամասները</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="products products-mobile-hide">
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

      {/* ── Services cards ── */}
      <section className="services products-mobile-hide">
        <div className="container">
          <h2>Մեր ծառայությունները</h2>
          <div className="services-grid">
            {SERVICE_CARDS.map(s => (
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
