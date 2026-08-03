import { Link } from 'react-router-dom'
import pdf1 from '../assets/partatomser/1․300 Հիպերնովա.pdf'
import pdf2 from '../assets/partatomser/Ազդագիր.pdf'
import pdf3 from '../assets/partatomser/Հիպերնովա - Պարտատոմսերի գներ.pdf'
import pdf4 from '../assets/partatomser/nerdrox_1.pdf'
import pdf5 from '../assets/partatomser/nerdrox_2.pdf'  

const DOCS = [
  { id: 1, pdf: pdf1, title: '1․300 Հիպերնովա' },
  { id: 2, pdf: pdf2, title: 'Ազդագիր' },
  { id: 3, pdf: pdf3, title: 'Հիպերնովա - Պարտատոմսերի գներ' },
  { id: 4, pdf: pdf4, title: 'Հայտ ֆիզիկական անձ ներդրողների համար' },
  { id: 5, pdf: pdf5, title: 'Հայտ իրավաբանական անձ ներդրողների համար' },
]

export default function PartatomserPage() {
  return (
    <>

      <div className="breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Գլխավոր</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="breadcrumb-current">Պարտատոմսեր</span>
        </div>
      </div>


      <section className="svc-page-section">
        <div className="container">
          <h1 className="prod-page-title">Պարտատոմսեր</h1>
          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '32px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: '#111827' }}> Պարտատոմսերի հիմնական պայմանները</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                ['Դասը՝ անվանական արժեկտրոնային'],
                ['Տարեկան արժեկտրոնային եկամտաբերությունը՝ 13%'],
                ['Թողարկման ծավալը՝ 1,500,000,000 ՀՀ դրամ'],
                ['Անվանական արժեքը՝ 100,000 ՀՀ դրամ'],
                ['Արժեկտրոնի վճարման պարբերականությունը՝ եռամսյակային'],
                ['Տեղաբաշխման ժամկետը՝ 29.07.2026 – 27.08.2026 թթ.'],
                ['Մարման ամսաթիվը՝ 29.07.2029 թ.'],
                ['Շրջանառության ժամկետը՝ 36 ամիս'],
                ['Տեղաբաշխողը՝ «Դայմենշն» ՓԲԸ'],
                ['Արժեկտրոնների վճարման ամսաթվերը  -  29/10/2026, 29/01/2027, 29/04/2027, 29/07/2027, 29/10/2027, 29/01/2028, 29/04/2028, 29/07/2028, 29/10/2028, 29/01/2029, 29/04/2029, 29/07/2029'],
              ].map(([label, value]) => (
                <li key={label} style={{ display: 'flex', gap: '8px', fontSize: '15px', color: '#374151' }}>
                  <span style={{ color: '#EF6C00', flexShrink: 0 }}>•</span>
                  <span><strong>{label}՝</strong> {value}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.7' }}>
                    ՀՀ ԿԲ նախագահի 08.07.2026 թ.-ի թիվ 1/300Ա որոշմամբ գրանցվել է «Հիպերնովա» ՍՊԸ Ազդագիրը, որը հասանելի է  «Դայմենշն» ՓԲԸ-ի  և  «Հիպերնովա» ՍՊԸ-ի  պաշտոնական կայքերում։
              </p>
                            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.7' }}>
"Պարտատոմսերի ձեռքբերման և մանրամասն տեղեկատվության համար կարող եք զանգահարել տեղաբաշխող «Դայմենշն» ՓԲԸ՝ 099 88 29 81,  043 88 29 81 հեռախոսահամարներով։" 
              </p>
            </div>
          </div>
          <div className="doc-gallery-part" style={{ justifyContent: 'center' }}>
            {DOCS.map(doc => (
              <a
                key={doc.id}
                href={doc.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="doc-gallery-item doc-gallery-item--pdf"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', textDecoration: 'none', background: '#f9fafb', border: '2px dashed #e5e7eb', borderRadius: '8px', padding: '32px 16px', color: '#111827' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#EF6C00" strokeWidth="1.5" width="48" height="48">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="9" y1="13" x2="15" y2="13" strokeLinecap="round" />
                  <line x1="9" y1="17" x2="15" y2="17" strokeLinecap="round" />
                  <line x1="9" y1="9" x2="11" y2="9" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: '14px', fontWeight: '600', textAlign: 'center' }}>{doc.title}</span>
                <span style={{ fontSize: '12px', color: '#EF6C00' }}>Բացել PDF</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
