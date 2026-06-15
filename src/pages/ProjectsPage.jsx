import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { PRODUCTS } from '../data/products'
import naxagcerTop from '../assets/naxagcertop.png'
import arevik1 from '../assets/arevik_1.jpg'
import arevik2 from '../assets/arevik_2.jpg'
import arevik3 from '../assets/arevik_3.jpg'
import canaparh from '../assets/canaparh-icon.svg'
import jramatakar from '../assets/jramatakar-icon.svg'
import jraheracum from '../assets/jraheracum-icon.svg'
import texnikayi from '../assets/texnikayi-icon.svg'
import mijin0 from '../assets/mijinnorogum/Միջին նորոգում գլծավոր.jpeg'
import mijin1 from '../assets/mijinnorogum/Միջին նորոգման ծրագրեր.JPG'
import mijin2 from '../assets/mijinnorogum/Միջին նորոգում 1.jpeg'
import mijin3 from '../assets/mijinnorogum/Միջին նորոգում 2.jpeg'
import mijin4 from '../assets/mijinnorogum/Միջին նորոգում 3.jpeg'
import petutyun1 from '../assets/petutyun/Պետության համաֆինանսավորմամբ համայնքային նախագծեր 1.JPG'
import petutyun2 from '../assets/petutyun/Պետության համաֆինանսավորմամբ համայնքային նախագծեր 2.jpeg'
import vediVideo from '../assets/Վեդի ընթացիք.MP4'

const MIJIN_SLIDES = [mijin0, mijin1, mijin2, mijin3, mijin4]
const PETUTYUN_SLIDES = [petutyun1, petutyun2]

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
const TABS = [
  { key: 'canaparhashinutyun', label: 'Ճանապարհաշինության աշխատանքներ' },
  { key: 'mijin',              label: 'Միջին նորոգման աշխատանքներ' },
  { key: 'subvencyon',         label: 'Պետության համաֆինանսավորմամբ սուբվենցիոն ծրագրեր' },
  { key: 'shemayin',           label: 'Ընթացիկ աշխատանքներ' },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('canaparhashinutyun')
  const [mijinCurrent, setMijinCurrent] = useState(0)
  const [petutyunCurrent, setPetutyunCurrent] = useState(0)
  const filtered = PROJECTS.filter(p => p.tab === activeTab)

  useEffect(() => {
    if (activeTab !== 'mijin') return
    const timer = setInterval(() => setMijinCurrent(c => (c + 1) % MIJIN_SLIDES.length), 4000)
    return () => clearInterval(timer)
  }, [activeTab])

  useEffect(() => {
    if (activeTab !== 'subvencyon') return
    const timer = setInterval(() => setPetutyunCurrent(c => (c + 1) % PETUTYUN_SLIDES.length), 4000)
    return () => clearInterval(timer)
  }, [activeTab])
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
      <div className="page-hero page-hero--tall">
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

          <div className="proj-tabs">
            {TABS.map(t => (
              <button
                key={t.key}
                className={`proj-tab-btn${activeTab === t.key ? ' active' : ''}`}
                onClick={() => setActiveTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === 'mijin' && (
            <>
              <p className="prod-page-desc" style={{ marginBottom: '32px' }}>
                Սկսած 2023 թ-ից &laquo;Հիպերնովա&raquo; ՍՊԸ-ն իրականացնում է ճանապարհների միջին նորոգման աշխատանքներ։
              </p>
              {/* Mijin slider */}
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', marginBottom: '40px', height: '500px' }}>
                {MIJIN_SLIDES.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Միջին նորոգում ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    style={{
                      position: i === 0 ? 'relative' : 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      objectFit: 'cover',
                      opacity: i === mijinCurrent ? 1 : 0,
                      transition: 'opacity 0.7s ease',
                    }}
                  />
                ))}
                <button
                  onClick={() => setMijinCurrent(c => (c - 1 + MIJIN_SLIDES.length) % MIJIN_SLIDES.length)}
                  aria-label="Previous"
                  style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button
                  onClick={() => setMijinCurrent(c => (c + 1) % MIJIN_SLIDES.length)}
                  aria-label="Next"
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
                  {MIJIN_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setMijinCurrent(i)}
                      aria-label={`Slide ${i + 1}`}
                      style={{ width: i === mijinCurrent ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none', background: i === mijinCurrent ? '#EF6C00' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'subvencyon' && (
            <>
              <p className="prod-page-desc" style={{ marginBottom: '32px' }}>
                Պետության համաֆինանսավորմամբ սուբվենցիոն ծրագրերի շրջանակներում &laquo;Հիպերնովա&raquo; ՍՊԸ-ի կողմից 2019թ.-ից առ այսօր իրականացվում է ՀՀ Կոտայքի, Արարատի և Արմավիրի մի շարք համայնքների ճանապարհաշինարարական հիմնանորոգման աշխատանքներ։
              </p>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', marginBottom: '40px', height: '500px' }}>
                {PETUTYUN_SLIDES.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Պետություն ${i + 1}`}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    style={{
                      position: i === 0 ? 'relative' : 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      objectFit: 'cover',
                      opacity: i === petutyunCurrent ? 1 : 0,
                      transition: 'opacity 0.7s ease',
                    }}
                  />
                ))}
                <button
                  onClick={() => setPetutyunCurrent(c => (c - 1 + PETUTYUN_SLIDES.length) % PETUTYUN_SLIDES.length)}
                  aria-label="Previous"
                  style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button
                  onClick={() => setPetutyunCurrent(c => (c + 1) % PETUTYUN_SLIDES.length)}
                  aria-label="Next"
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
                  {PETUTYUN_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPetutyunCurrent(i)}
                      aria-label={`Slide ${i + 1}`}
                      style={{ width: i === petutyunCurrent ? '24px' : '8px', height: '8px', borderRadius: '4px', border: 'none', background: i === petutyunCurrent ? '#EF6C00' : 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
                    />
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'shemayin' && (
            <>
              <p className="prod-page-desc" style={{ marginBottom: '32px' }}>
                Հ-10, /Հ-8/ (Ոսկետափ) - Վեդի - Լանջառ - /Մ-2/ հանրապետական նշանակության ավտոճանապարհի կմ5+450 - կմ9+250 հատվածի հիմնանորոգման աշխատանքներ։
              </p>
              <video
                src={vediVideo}
                controls
                style={{ width: '100%', borderRadius: '8px', marginBottom: '40px', display: 'block' }}
              />
            </>
          )}

          {filtered.length > 0 && (
            <div className="img-grid-3col">
              {filtered.map((p) => (
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
          )}
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
