import naxagicFirst from '../assets/naxagic_first.jpg'
import naxagicSecond from '../assets/naxagic_second.jpg'
import naxagicThree from '../assets/naxagic_three.jpg'
import m2_1 from '../assets/m2/M2-1.jpg'
import m2_3a from '../assets/m2/M2-3.jpeg'
import m2_3b from '../assets/m2/M2-3.jpg'
import m2_5 from '../assets/m2/M2-5.jpg'
import m2_6 from '../assets/m2/M2-6.jpg'
import m2_7 from '../assets/m2/M2-7.jpg'
import m2_8 from '../assets/m2/M2-8.jpg'
import m2_9 from '../assets/m2/M2-9.jpg'
import m2_12 from '../assets/m2/M2-12.JPG'
import m15_1 from '../assets/m15/M15-1.jpg'
import m15_2 from '../assets/m15/M15-2.jpg'
import m15_3 from '../assets/m15/M15-3.jpg'
import m15_4 from '../assets/m15/M15-4.jpg'
import m15_5 from '../assets/m15/M15-5.jpg'
import m15_6 from '../assets/m15/M15-6.jpg'
import arevik1 from '../assets/arevik/Arevik1.jpg'
import arevik_video from '../assets/arevik/Arevik 2.MP4'

export const PROJECTS = [
  {
    slug: 'verin-ptghni',
    tab: 'canaparhashinutyun',
    title: 'Մ15 Վերին Պտղնի – Մասիս ճանապարհահատվածի հիմնանորոգում',
    shortTitle: 'Վերին Պտղնի',
    img: naxagicFirst,
    heroImg: m15_1,
    slides: [m15_1, m15_2, m15_3, m15_4, m15_5, m15_6],
    year: '2024',
    length: '15.0 km',
    type: 'Ճanаparhi hіmnanorogum',
    region: 'Ararat marz',
    desc: 'Մ-15, /Մ-4/ (Վերին Պտղնի) - Մասիսի տրանսպորտային հանգույց (Երևանի շրջանց) միջպետական նշանակության ավտոճանապարհի կմ19+900-կմ29+400 հատվածի հիմնանորոգման աշխատանքները',
    desc2: '2024թ-ին շահագործման է հանձնվել',
    client: 'ՀH Endlaynum Nakhararutyun',
  },
  {
    slug: 'yerevan-erasx',
    tab: 'canaparhashinutyun',
    title: 'Մ-2, Երևան-Երասխ-Գորիս-Մեղրի-ՀՀ սահման միջպետական նշանակության ավտոճանապարհի հիմնանորոգում',
    shortTitle: 'Երևան-Երասխ',
    img: naxagicSecond,
    heroImg: m2_1,
    slides: [m2_1, m2_3a, m2_3b, m2_5, m2_6, m2_7, m2_8, m2_9, m2_12],
    year: '2025',
    length: '8.2 km',
    type: 'Norkavayrum',
    region: 'Ararat marz',
    desc: 'Մ-2, Երևան-Երասխ-Գորիս-Մեղրի-ՀՀ սահման միջպետական նշանակության ավտոճանապարհի կմ 47+475 -կմ 53+150 հատվածի հիմնանորոգման աշխատանքներ',
    desc2: '2025թ-ին շահագործման է հանձնվել',
    client: 'Ararat marzi varchapetaran',
  },
  {
    slug: 'Արևիկ – Տանձուտ',
    tab: 'canaparhashinutyun',
    title: 'Արևիկ – Տանձուտ ճանապարհահատվածի հիմնանորոգում',
    shortTitle: 'Արևիկ – Տանձուտ',
    img: arevik1,
    heroImg: arevik1,
    video: arevik_video,
    year: '2024',
    length: '12.5 km',
    type: 'Ճanaparhi verakaghnumy',
    region: 'Lori marz',
    desc: 'Տ-3-19 Արևիկ–Տանձուտ ավտոճանապարհի կմ 0+000 – կմ 3+400 հատվածի հիմնանորոգման աշխատանքներ։',
    desc2: 'Նախագծի շրջանակում իրականացվել են ճանապարհային ծածկի հիմնանորոգման, հողային աշխատանքների, ջրահեռացման համակարգերի բարելավման և երթևեկության անվտանգության բարձրացմանն ուղղված միջոցառումներ՝ ապահովելով ճանապարհահատվածի հուսալի և երկարատև շահագործումը։ Աշխատանքներն ավարտվել և ճանապարհահատվածը շահագործման է հանձնվել 2025 թվականին',
    client: 'ՀH Endlaynum Nakhararutyun',
  },
  {
    slug: 'gjumri-lanchk',
    tab: 'shemayin',
    title: 'Gjumri – Lanchk ճanaparhnshаtuvatd',
    shortTitle: 'Gjumri – Lanchk',
    img: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?w=800&q=80',
    heroImg: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1600&q=80',
    year: '2023',
    length: '22.3 km',
    type: 'Ճanaparhi shaynagaghtsutyan',
    region: 'Shirak marz',
    desc: 'Shaynagaghtsutyan mets masshtabi nakhagitsy Gjumri – Lanchk chananaparhi verakaghnumy:',
    desc2: 'Nakhagitsy nerkayutsnum er banakavayri bnakavshutyuny ev hraсhaghnakel sharjnakunery: Ashxatavarky avartvel e 2023 tvakanin:',
    client: 'Shirak marzi varchapetaran',
  },
]
