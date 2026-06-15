import { useState, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { PRODUCTS } from '../data/products'
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

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = PROJECTS.find(p => p.slug === slug)
  const others = PROJECTS.filter(p => p.slug !== slug).slice(0, 3)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!project?.slides?.length) return
    const timer = setInterval(() => setCurrent(c => (c + 1) % project.slides.length), 4000)
    return () => clearInterval(timer)
  }, [project])

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

      {/* ── Full-width hero image / slider ── */}
      {project.slides?.length ? (
        <div className="proj-hero-banner" style={{ position: 'relative', overflow: 'hidden' }}>
          {project.slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={project.title}
              className="proj-hero-banner-img"
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
          <div className="proj-hero-banner-overlay" style={{ pointerEvents: 'none' }} />
          {/* Prev / Next */}
          <button
            onClick={() => setCurrent(c => (c - 1 + project.slides.length) % project.slides.length)}
            aria-label="Previous"
            style={{ position:'absolute', left:'16px', top:'50%', transform:'translateY(-50%)', background:'rgba(0,0,0,0.35)', border:'none', borderRadius:'50%', width:'40px', height:'40px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', zIndex: 10 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            onClick={() => setCurrent(c => (c + 1) % project.slides.length)}
            aria-label="Next"
            style={{ position:'absolute', right:'16px', top:'50%', transform:'translateY(-50%)', background:'rgba(0,0,0,0.35)', border:'none', borderRadius:'50%', width:'40px', height:'40px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', zIndex: 10 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" width="20" height="20"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          {/* Dots */}
          <div style={{ position:'absolute', bottom:'14px', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'8px', zIndex: 10 }}>
            {project.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                style={{ width: i === current ? '24px' : '8px', height:'8px', borderRadius:'4px', border:'none', background: i === current ? '#EF6C00' : 'rgba(255,255,255,0.6)', cursor:'pointer', transition:'all 0.3s', padding:0 }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="proj-hero-banner">
          <img src={project.heroImg || project.img} alt={project.title} className="proj-hero-banner-img" loading="eager" />
          <div className="proj-hero-banner-overlay" />
        </div>
      )}

      {/* ── Title + sidebar layout ── */}
      <section className="proj-detail-section">
        <div className="container proj-detail-inner">

          {/* Left: title + description */}
          <div className="proj-detail-body">
            <h1 className="proj-detail-title">{project.title}</h1>
            {project.desc && <p className="proj-detail-lead">{project.desc}</p>}
            {project.desc2 && <p className="proj-detail-text">{project.desc2}</p>}
            {project.video && (
              <video
                src={project.video}
                controls
                style={{ width: '100%', borderRadius: '8px', marginTop: '24px', display: 'block' }}
              />
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
