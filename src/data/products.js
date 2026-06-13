import artadranqFirst from '../assets/artadranq_first.jpg'
import artadranqSecond from '../assets/artadranq_second.png'
import artadranqThird from '../assets/artadranq_three.png'
import artadranqFour from '../assets/artadranq_four.png'
import artadranqFive from '../assets/artadranq_five.png'
import artadranqSix from '../assets/artadranq_six.png'
import asfaltbeton from '../assets/asfaltbeton.jpg'
import beton from '../assets/beton.jpg'
import erkatbeton from '../assets/erkatbeton.jpg'
import bitumayinEmulsia from '../assets/bitumayin-emulsia.jpg'
import vibrobeton from '../assets/vibrobeton.jpg'
import bitum from '../assets/bitum.jpg'


export const PRODUCTS = [
  {
    slug: 'asfalt',
    title: 'Ասֆալտբետոն',
    img: asfaltbeton,
    heroImg: asfaltbeton,
    category: 'Ճանապարհաշինություն',
    desc: 'Սերտիֆիկացված ասֆալտբետոնի արտադրություն բոլոր տիպերի։',
   
  },
  {
    slug: 'betone-favaryit',
    title: 'Բետոն',
    img: beton,
    heroImg: artadranqFirst,
    category: 'Բetone artadranq',
    desc: 'Սերտիֆիկացված բետոնի արտադրություն բոլոր տիպերի',
    desc2: 'Mer betone favority hasaneli e ev barzr kacharutyan: Handipum e hamakargi bolor patahanjnerin ev kiriararkvum e mshakuytabanak shal u glaner:',
    specs: [
      { label: 'Markaver', value: 'B25, B30, B35' },
      { label: 'Chap', value: '20 × 10 × 6 sd' },
      { label: 'Чap', value: '30 × 15 × 8 sd' },
      { label: 'Мek ardjunky', value: '40 × 15 × 25 sd' },
    ],
  },
  {
    slug: 'betone-baryer',
    title: 'Երկաթբետոնե կոնստրուկցիաներ',
    img: erkatbeton,
    heroImg: artadranqFirst,
    category: 'Անվտանգությունի համակարգեր',
    desc: 'Սերտիֆիկացված երկաթբետոնե կոնստրուկցիաների արտադրություն և վաճառք, մասնավորապես.',
    items: [
      'Երկայնական բետոնե վաք Б-2-20',
      'Б-8 բետոնե բլոկ',
      'Երկայնական բետոնե վաք Б-1-20',
      'Ե/բ վաք 30×34 սմ',
      'Ե/բ վաք 50×60 սմ',
      'Բետոնե 17×34 սմ վաք',
      'Հենարանների իրանների հավաքովի N5 բլոկների բետոն — չափ. 285×165×100 սմ, V=3.01մ³, P=7.2տ',
      'Ե/բ հավաքովի գլխադիրների N8 բլոկներ — չափ. 302×75×60 սմ, V=1.09մ³, P=2.7տ',
      'N25 ծածկի սալերի հավաքովի ե/բ — չափ. 38×100×460 սմ, V=1.54մ³, P=3.9տ; AI=35.39 կգ/մ³, AII=144.87 կգ/մ³',
      'Ե/բ դիտահորեր D=1000մմ, D=1500մմ, D=2000մմ',
      'Ե/բ դիտահորի ծածկի սալ թուջե մտոցով և շրջանակով, թուջե անձրևընդունիչ ցանցով D=1000մմ, D=1500մմ, D=2000մմ, 1200×1200, 1700×1700, 2200×2200',
    ],
  },
  {
    slug: 'bitumayin-emulsia',
    title: 'Բիտումային էմուլսիա',
    img: bitumayinEmulsia,
    heroImg: artadranqFirst,
    noLink: true,
    category: 'Litsker ev nюter',
    desc: 'Hankayan licky barzr oraki litsq e shinarararutyunum: Kiriararkvum e vkayakan ahberum u norin hamakargum ev angnum e sharzhman petqnery nvazeluny:',
    desc2: 'Mer hankayan licky hertsk artadrvogh e ev inq hasanelyali: Artadranky pataskhanum e bolor texnikakan normayvorerum:',
    specs: [
      { label: 'Kshiry', value: 'Dolomit, Bazalt, Granit' },
      { label: 'Mardzer', value: '5–20 mm' },
      { label: 'Kashore', value: '1450–1700 kg/m³' },
      { label: 'Shalnenutяun', value: '< 0.5%' },
    ],
  },
  {
    slug: 'vidroizolaciya',
    title: 'Վիբրոսեղմամբ բետոնե պատրաստվածքներ',
    img: vibrobeton,
    heroImg: artadranqFirst,
    category: 'Izolacion nюter',
    desc: 'Սերտիֆիկացված վիբրոսեղմամբ բետոնե պատրաստվածքների արտադրություն և վաճառք, մասնավորապես.',
    desc2: 'Mer vidroizolaciyay barzr oraky e ev angnum e uzhey mekcnel: Pataskhanum e erkararaseli normayvorerum ev kiriararkvum e mshakuytabanak materialov:',
    specs: [
      { label: 'Nerk', value: '3 mm, 4 mm' },
      { label: 'Lairdjutyan', value: '1 × 10 m' },
      { label: 'Kashore', value: '3.5–4.5 kg/m²' },
      { label: 'Amboghanumery', value: '–25°C — +120°C' },
    ],
  },
  {
    slug: 'bitum',
    title: 'Բիտում',
    img: bitum,
    heroImg: artadranqFirst,
    category: 'Բetone artadranq',
    desc: 'Սերտիֆիկացված բիտումի ուղղակի ներմուծում և վաճառք',
    desc2: 'Artadranky artadrvum e vibropressavorman eghanakov, vory apahov e barzr shtapatrutyun: Hasaneliutyan u barevarman tesnaketerutyan mi pert sharq:',
    specs: [
      { label: 'Kshiry', value: 'B30, B35' },
      { label: 'Çapy', value: '50 × 50 × 8 sd' },
      { label: 'Kshiry 2', value: '60 × 40 × 10 sd' },
      { label: 'Kashore', value: '2400 kg/m³' },
    ],
  },
]
