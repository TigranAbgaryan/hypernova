import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { PROJECTS } from '../data/projects'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import mermasinFirst from '../assets/mermasin_first.png'
import mermasinSecond from '../assets/mermasin_second.png'
import mermasinThree from '../assets/mermasin_three.png'
import logo from '../assets/footer-logo.svg'
import slide1 from '../assets/home.png'
import slide2 from '../assets/slide_2.png'
import slide3 from '../assets/slide_3.png'
import slide4 from '../assets/slide_4.png'
import slide5 from '../assets/slide_5.png'
import slide6 from '../assets/slide_6.png'

const SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6]

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


const FEATURES = [
  'Մասնագիտական մոտեցում',
  'Ամուր և երկարատև արդյունք',
  'Ժամկետների պահպանում',
  'Արդյունավետ և արագ աշխատանք',
  'Միջազգային չափանիշներին համապատասխանություն',
]

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M12 3.66669C7.39996 3.66669 3.66663 7.40002 3.66663 12C3.66663 16.6 7.39996 20.3334 12 20.3334C16.6 20.3334 20.3333 16.6 20.3333 12C20.3333 7.40002 16.6 3.66669 12 3.66669ZM12 18.6667C8.32496 18.6667 5.33329 15.675 5.33329 12C5.33329 8.32502 8.32496 5.33335 12 5.33335C15.675 5.33335 18.6666 8.32502 18.6666 12C18.6666 15.675 15.675 18.6667 12 18.6667ZM15.825 8.31669L10.3333 13.8084L8.17496 11.6584L6.99996 12.8334L10.3333 16.1667L17 9.50002L15.825 8.31669Z" fill="#EF6C00"/>
    </svg>
  )
}

export default function HomePage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* ── Hero Slider ── */}
      <section className="hero">
        {/* Slides */}
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? ' hero-slide--active' : ''}`}
          >
            <img src={src} alt="" aria-hidden="true" className="hero-slide-img" />
          </div>
        ))}
        <div className="hero-overlay" />

        {/* Dots (desktop only) */}
        <div className="hero-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === current ? ' hero-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero-content">
            <img src={logo} alt="Hypernova" className="hero-logo" />
          <h2 className="hero-title" style={{ paddingBottom: 0 }}>Երաշխավորված որակ, պատասխանատվություն, </h2>
            <h2 className="hero-title">արդի տեխնոլոգիաններ</h2>

          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.querySelector('.about').scrollIntoView({ behavior: 'smooth' })}>
                Մեր մասին
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Prev / Next arrows (mobile only) */}
        <button
          className="hero-arrow hero-arrow--prev"
          onClick={() => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length)}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="hero-arrow hero-arrow--next"
          onClick={() => setCurrent(c => (c + 1) % SLIDES.length)}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {/* ── Why Choose Us ── */}
      {/* <section className="why-us">
        <div className="container">
          <h2>Ինչու՞ ընտրել մեզ</h2>
          <div className="features-grid">
            {FEATURES.map(f => (
              <div key={f} className="feature-item">
                <CheckIcon />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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

      {/* ── Projects ── */}
      <section className="projects">
        <div className="container">
          <h2>Մեր նախագծերը</h2>
          <div className="img-grid-3col">
            {PROJECTS.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/naxagdzer/${encodeURIComponent(p.slug)}`} className="img-card img-card--tall">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="img-card-overlay" />
                <div className="img-card-content">
                  <span className="img-card-title">{p.title}</span>
                  <span className="img-card-link">Դիտել մանրամասները</span>
                </div>
              </Link>
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

      {/* ── About ── */}
      <section className="about">
        <div className="container">
          <h2>Մեր մասին</h2>
          <div className="about-text">
            <p>Հիպերնովա ՍՊԸ-ն հիմնադրվել է 2019 թ.-ի հուլիսի 12-ին: Ընկերության գործունեության հիմնական ուղղվածությունը
                շինարարական նյութերի արտադրությունն է և շինարարական աշխատանքների իրականացումը: Ընկերությունը հիմնադրման
                օրվանից ձեռնամուղ է եղել բարձր որակավորում ունեցող մասնագետների հետ աշխատանքային հարաբերությունների
                ստեղծմանը և շինարարական հանրաճանաչ տեխնիկաների և սարքավորումների ձեռքբերմանը:  Ընկերությունը կայուն քայլերով դարձել է պետական և մասնավոր ընկերությունների հուսալի
                գործընկեր:
            </p>
            <p>Արդեն 2021թ-ին Ընկերությունը ՀՀ Արարատի մարզի, Մասիս համայնքի Նոր Խարբերդ բնակավայրի Երևան-
                Արտաշատ խճուղի 113,115 հասցեում հիմնում է ասֆալտբետոնի արտադրության 120 տոննա ժամ արտադրողականությամբ
                գործարան: Պետական գնումների մասնակցության մեջ առաջնահերթություն տալով աշխատանքների որակի կատարելագործմանն ու
                ստանդարտացմանը Ընկերությունը 2023թ.-ին հիմնում է երկաթբետոնե կոնստրուկցիաների արտադրամաս և ստանում
                համապատասխանության սերտիֆիկատներ:
            </p>
          </div>
          <div className="about-images">
            <img className="about-img" src={mermasinFirst} alt="Մեր մասին 1" loading="lazy" />
            <img className="about-img" src={mermasinSecond} alt="Մեր մասին 2" loading="lazy" />
            <img className="about-img" src={mermasinThree} alt="Մեր մասին 3" loading="lazy" />
          </div>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-num">200 +</span>
            <span className="stat-label">Ավարտված նախագծեր</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">50 +</span>
            <span className="stat-label">Թիմի անդամներ</span>
          </div>
        
        </div>
      </section>
    </>
  )
}
