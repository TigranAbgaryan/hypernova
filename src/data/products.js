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
    title: 'Ասֆալտ',
    img: asfaltbeton,
    heroImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    category: 'Ճananaparhayin nյuter',
    desc: 'Hypernova LLC-ն artadrum e bard oraki asfalt, vory hamapataskhanum e shaynagaghtsutyan barjraguyн pathanelnerun: Mer asfalty kiriararkvum e artenakarg shinarararakan nyuterov, vory apahov en erkarkaseli ev amur:',
    desc2: 'Artadranky iravats e meծ u фoch шinarararakan nerdrumnerum, inchpesev nayev artakaghdzi parteznerum: Mer artadranky angnum e hamakarg verapahanogy ev kachyakin patanelnerun:',
    specs: [
      { label: 'Kshiry', value: 'M-20 ev M-30 marky asfalt betonner' },
      { label: 'Patrastutyun', value: '30 + 20 + 10 sd' },
      { label: 'Nerkayatsner', value: '40 + 25 + 15 sd' },
      { label: 'Artadranaky', value: '40 + 15 + 25 sd' },
    ],
  },
  {
    slug: 'betone-favaryit',
    title: 'Բetonne favaryit',
    img: beton,
    heroImg: artadranqFirst,
    category: 'Բetone artadranq',
    desc: 'Vibratsianayin betone yaporastavsvatsvagner — shnararar nakhagdzeri anghtanaguy tvyalner: Nrank artadrvum en barts kokord betoney, вory apahov e kachyak u erkarkaseli shinarararakan normayvorerum:',
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
    title: 'Artadranakan baryer',
    img: erkatbeton,
    heroImg: artadranqFirst,
    category: 'Անvtanagaynutyun',
    desc: 'Vibratsianayin betone yaporastavsvatsvagner ogtagortsvoum en chananaparherum, khamrjakayannerum ev artenakarg hartsin avartelov: Artadranaky barzr amrapnut ev ankaskar e khelokhnerum:',
    desc2: 'Aveli mets kayyutyan betone baryernery hasaneliutyan ev kachutyany mi anjam ev kargy: Mer artadranky hamapataskhanum e europayin standartnerun ev ogtakarvum e mец nakhagdzerum:',
    specs: [
      { label: 'Bardrutyun', value: '1 m' },
      { label: 'Czaynutyun', value: '30 sd' },
      { label: 'Kshiry', value: 'B25, B30' },
      { label: 'Kashore', value: '600 kg / m' },
    ],
  },
  {
    slug: 'hankayiny-lick',
    title: 'Hankayan lyck',
    img: bitumayinEmulsia,
    heroImg: artadranqFirst,
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
    title: 'Vidroizolaciya sharanayin',
    img: vibrobeton,
    heroImg: artadranqFirst,
    category: 'Izolacion nюter',
    desc: 'Shinarararakan bnak vidroizolacion nуteren en patrasdum sharanayin izolyaciay ev shaynagaghtsum: Artadranky ogtakarvum e bnak shinarararakan нakhagdzerum:',
    desc2: 'Mer vidroizolaciyay barzr oraky e ev angnum e uzhey mekcnel: Pataskhanum e erkararaseli normayvorerum ev kiriararkvum e mshakuytabanak materialov:',
    specs: [
      { label: 'Nerk', value: '3 mm, 4 mm' },
      { label: 'Lairdjutyan', value: '1 × 10 m' },
      { label: 'Kashore', value: '3.5–4.5 kg/m²' },
      { label: 'Amboghanumery', value: '–25°C — +120°C' },
    ],
  },
  {
    slug: 'betone-plitaner',
    title: 'Բetonne plitaner',
    img: bitum,
    heroImg: artadranqFirst,
    category: 'Բetone artadranq',
    desc: 'Betone plitanery kiriararkvum en kerorner, arhatakner ev artakaghdzi kentronum: Mer plitanery barzr amrapnut u kachyakan en, hamapataskhanum en europayin standartnerun:',
    desc2: 'Artadranky artadrvum e vibropressavorman eghanakov, vory apahov e barzr shtapatrutyun: Hasaneliutyan u barevarman tesnaketerutyan mi pert sharq:',
    specs: [
      { label: 'Kshiry', value: 'B30, B35' },
      { label: 'Çapy', value: '50 × 50 × 8 sd' },
      { label: 'Kshiry 2', value: '60 × 40 × 10 sd' },
      { label: 'Kashore', value: '2400 kg/m³' },
    ],
  },
]
