import { Link } from 'react-router-dom'


import asfaltbeton from '../assets/asfaltbeton.jpg'
import beton from '../assets/beton.jpg'
import erkatbeton from '../assets/erkatbeton.jpg'
import bitumayinEmulsia from '../assets/bitumayin-emulsia.jpg'
import vibrobeton from '../assets/vibrobeton.jpg'
import bitum from '../assets/bitum.jpg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import canaparh from '../assets/canaparh-icon.svg'
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
const CERTIFICATIONS = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'OHSAS 18001',
  'GOST R 58033-2017',
  'SNiP 3.06.03-85',
  'SNiP 3.09.01-85',
  'EN 13108-1',
  'EN 206-1',
]

const STATS = [
  { num: '200 +', label: 'Avartvatsd naxagdzerry' },
  { num: '50 +', label: 'Ashxatakitsner' },
  { num: '12 +', label: 'Taryi gordzuneutyun' },
]
const PRODUCTS = [
  { title: 'Ասֆալտբետոն', img: asfaltbeton },
  { title: 'Բետոն', img: beton },
  { title: 'Երկաթբետոնե կոնստրուկցիաներ', img: erkatbeton },
  { title: 'Բիտումային էմուլսիա', img: bitumayinEmulsia },
  { title: 'Վիբրոսեղմամբ բետոնե պատրաստվածքներ', img: vibrobeton },
  { title: 'Բիտում', img: bitum },
]
const TEAM = [
  {
    name: 'Aram Petrosyan',
    role: 'Geneteral Dyrektor',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Lilit Sargsyan',
    role: 'Texnikakan Dyrektor',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Davit Hakobyan',
    role: 'Nakhagitsneri Ղekarvar',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">Մեր մասին</span>
        </div>
      </div>

      {/* ── About text + images ── */}
      <section className="about-page-section">
        <div className="container about-page-inner">
          <div className="about-page-body">
            <h1 className="about-page-title">Մեր մասին</h1>
            <p>
                Հիպերնովա ՍՊԸ-ն հիմնադրվել է 2019 թ.-ի հուլիսի 12-ին: Ընկերության գործունեության հիմնական ուղղվածությունը
                շինարարական նյութերի արտադրությունն է և շինարարական աշխատանքների իրականացումը: Ընկերությունը հիմնադրման
                օրվանից ձեռնամուղ է եղել բարձր որակավորում ունեցող մասնագետների հետ աշխատանքային հարաբերությունների
                ստեղծմանը և շինարարական հանրաճանաչ տեխնիկաների և սարքավորումների ձեռքբերմանը: Ընկերությունը կայուն քայլերով դարձել է պետական և մասնավոր ընկերությունների հուսալի
                գործընկեր:
            </p>
            <p>
            Արդեն 2021թ-ին Ընկերությունը ՀՀ Արարատի մարզի, Մասիս համայնքի Նոր Խարբերդ բնակավայրի Երևան-
            Արտաշատ խճուղի 113,115 հասցեում հիմնում է ասֆալտբետոնի արտադրության 120 տոննա ժամ արտադրողականությամբ
            գործարան: Պետական գնումների մասնակցության մեջ առաջնահերթություն տալով աշխատանքների որակի կատարելագործմանն ու
            ստանդարտացմանը Ընկերությունը 2023թ.-ին հիմնում է երկաթբետոնե կոնստրուկցիաների արտադրամաս և ստանում
            համապատասխանության սերտիֆիկատներ:
            </p>



            
          </div>

          {/* <div className="about-page-images">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Artadrutyun"
              className="about-page-img about-page-img--tall"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=800&q=80"
              alt="Tekhnika"
              className="about-page-img"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1555858615-03d2c4ad2a5e?w=800&q=80"
              alt="Greyder"
              className="about-page-img"
              loading="lazy"
            />
          </div> */}
        </div>
      </section>

      {/* ── Certifications / Standards ── */}
      {/* <section className="cert-section">
        <div className="container">
          <h2 className="cert-title">Sertifikatneri hamakarg</h2>
          <div className="cert-grid">
            {CERTIFICATIONS.map(c => (
              <div key={c} className="cert-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
