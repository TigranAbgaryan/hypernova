import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import canaparh from '../assets/canaparh-icon.svg'
import karucvacky from '../assets/Կառուցվածքը.jpg'
import mermasin0 from '../assets/mermasin/Մեր մասին.JPG'
import mermasin1 from '../assets/mermasin/Մեր մասին1.jpeg'
import mermasin2 from '../assets/mermasin/Մեր մասին2.jpeg'
import mermasin3 from '../assets/mermasin/Մեր մասին3.jpeg'
import mermasin4 from '../assets/mermasin/Մեր մասին4.jpeg'
import mermasinMijin from '../assets/mermasin/Միջին նորոգման ծրագրեր.JPG'

const MERMASIN_SLIDES = [mermasin0, mermasin1, mermasin2, mermasin3, mermasin4, mermasinMijin]
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

export default function AboutPage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % MERMASIN_SLIDES.length), 4000)
    return () => clearInterval(timer)
  }, [])

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

      {/* ── Hero Slider ── */}
      <div className="page-hero page-hero--tall" style={{ position: 'relative', overflow: 'hidden' }}>
        {MERMASIN_SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Մեր մասին ${i + 1}`}
            className="page-hero-img"
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{
              position: i === 0 ? 'relative' : 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              opacity: i === current ? 1 : 0,
              transition: 'opacity 0.7s ease',
            }}
          />
        ))}
        <div className="page-hero-overlay" style={{ pointerEvents: 'none' }} />
        <button
          onClick={() => setCurrent(c => (c - 1 + MERMASIN_SLIDES.length) % MERMASIN_SLIDES.length)}
          aria-label="Previous"
          style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button
          onClick={() => setCurrent(c => (c + 1) % MERMASIN_SLIDES.length)}
          aria-label="Next"
          style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
          {MERMASIN_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none', background: i === current ? '#EF6C00' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
            />
          ))}
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

            <img
              src={karucvacky}
              alt="Կառուցվածքը"
              style={{ width: '100%', borderRadius: '8px', marginTop: '24px', display: 'block' }}
              loading="lazy"
            />
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
