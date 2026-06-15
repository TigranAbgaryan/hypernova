import artadranqFirst from '../assets/artadranq_first.jpg'
import artadranqSecond from '../assets/artadranq_second.png'
import artadranqThird from '../assets/artadranq_three.png'
import artadranqFour from '../assets/artadranq_four.png'
import artadranqFive from '../assets/artadranq_five.png'
import artadranqSix from '../assets/artadranq_six.png'
import asfaltbeton from '../assets/asfaltbeton.jpg'
import asfalt1 from '../assets/asfalt/asfalt_first.jpg'
import asfalt2 from '../assets/asfalt/asfalt_second.jpg'
import asfalt3 from '../assets/asfalt/asfalt_three.jpg'
import beton from '../assets/beton.jpg'
import beton1 from '../assets/beton/Բետոն 1.jpeg'
import beton2 from '../assets/beton/Բետոն 2.jpeg'
import beton3 from '../assets/beton/Բետոն 3.jpeg'
import beton4 from '../assets/beton/Բետոն 4.jpg'
import erkatbeton from '../assets/erkatbeton.jpg'
import erkat1 from '../assets/erkatbeton/ԵԲ կոնս.jpg'
import erkat2 from '../assets/erkatbeton/ԵԲ կոնստրուկցիաներ.jpg'
import erkat3 from '../assets/erkatbeton/Երկաթբետոնե կոնստրուկցիաներ.jpg'
import erkat4 from '../assets/erkatbeton/ԵԲ կոնս2.jpg'
import bitumayinEmulsia from '../assets/bitumayin-emulsia.jpg'
import bitumEmulsia1 from '../assets/bitumayinemulsia/bitumayin_emulsia.jpg'
import vibrobeton from '../assets/vibrobeton.jpg'
import vibro1 from '../assets/vibro/Վիբրո 1.jpeg'
import vibro2 from '../assets/vibro/Վիբրո 2.jpg'
import vibro3 from '../assets/vibro/Վիբրո 3.jpg'
import vibro4 from '../assets/vibro/Վիբրո 4.jpeg'
import vibro5 from '../assets/vibro/Վիբրո 5.jpeg'
import vibro6 from '../assets/vibro/Վիբրո 6.jpeg'
import vibro7 from '../assets/vibro/Վիբրո 7.jpeg'
import bitum from '../assets/bitum.jpg'
import bitum1 from '../assets/bitum/Բիտում 1.jpeg'
import bitum2 from '../assets/bitum/Բիտում 2.jpeg'


export const PRODUCTS = [
  {
    slug: 'asfalt',
    title: 'Ասֆալտբետոն',
    img: asfaltbeton,
    heroImg: asfalt1,
    slides: [asfalt1, asfalt2, asfalt3],
    category: 'Ճանապարհաշինություն',
    desc: 'Սերտիֆիկացված ասֆալտբետոնի արտադրություն բոլոր տիպերի։',
   
  },
  {
    slug: 'betone-favaryit',
    title: 'Բետոն',
    img: beton,
    heroImg: beton1,
    slides: [beton1, beton2, beton3, beton4],
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
    heroImg: erkat1,
    slides: [erkat1, erkat2, erkat3, erkat4],
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
    heroImg: bitumEmulsia1,
    noLink: true,
    category: 'Litsker ev nюter',
    desc: 'Բիտումային էմուլսիայի արտադրություն և վաճառք',
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
    heroImg: vibro1,
    slides: [vibro1, vibro2, vibro3, vibro4, vibro5, vibro6, vibro7],
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
    heroImg: bitum1,
    slides: [bitum1, bitum2],
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
