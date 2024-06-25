import serviceImg from '../assets/serviceImg.png'
import serviceImg2 from '../assets/serviceImg2.png'
import serviceImg3 from '../assets/serviceImg3.png'
import serviceImg4 from '../assets/serviceImg4.png'

// clientImg Data

import agroKlaster from '../assets/agroKlaster.png'
import starbacks from '../assets/starbacks.png'
import figma from '../assets/figma.png'
import bmw from '../assets/bmw.png'

// cardData img Path

import person3 from '../assets/person3.png'
import shoxImg from '../assets/shox.png'
import vohidtursunov from '../assets/person2.png'
import { AmericaFlag, RussianFlag, UzbFlag } from '../assets/svgs'


export const serviceData = [
    {
        id: 1,
        name: 'AvtoRaqam Auksion',
        imgPath: serviceImg,
    },
    {
        id: 2,
        name: 'Tovar Xomashyo Savdosi',
        imgPath: serviceImg2,
    },
    {
        id: 3,
        name: 'E-Auksion',
        imgPath: serviceImg3,
    },
    {
        id: 4,
        name: 'Visitka Sayt Xizmati',
        imgPath: serviceImg4,
    }
];

export const clientData = [
    {
        id: 1,
        imgPath: agroKlaster,
        name: 'Buxoro Agroklaster',
        info: `“БУХОРО АГРОКЛАСТEР” масъулияти чекланган жамияти Ўзбекистон Республикасининг Фуқаролик кодекси,
         “Акциядорлик жамиятлари ва акциядорларнинг ҳуқуқларини ҳимоя қилиш тўғрисида”ги ва “Масъулияти чекланган ва қўшимча масъулиятли жамиятлар 
         туғрисида”ги Қонуни ҳамда “Бухоропахтасаноат ХБ” акциядорлик жамияти акциядорларининг 2019 йил 06 
         июлдаги ва 11 июлдаги навбатдан ташқари умумий йиғилиш қарорларига мувофиқ ташкил этилган. Иштирокчиларнинг 2019 йил 14 декабрдаги 
         навбатдан ташқари умумий йиғилиш қарори билан янги тахрирда тасдиқланган.`,
    },
    {
        id:2,
        imgPath: starbacks,
    },
    {
        id: 3,
        imgPath: figma,
    },
    {
        id: 4,
        imgPath: bmw,
    }
]

export const cardData = [
    {
        id: 1,
        name: 'Vohid Tursunov',
        position: 'Katta Trader',
        imgPath: vohidtursunov,
    },
    {
        id: 2,
        name: 'Shoxrux Rajabov',
        position: 'O`rta Trader',
        imgPath: person3,
    },
    {
        id: 3,
        name: 'Shohjahon Uktamov',
        position: 'Programmist',
        imgPath: shoxImg,  
    }
]

export const langData = [
    {
        id: 1,
        lang: 'Eng',
        clickLang: 'en',
        flag: AmericaFlag,
    },
    {
        id: 2,
        lang: 'Rus',
        clickLang: 'ru',
        flag: RussianFlag,
    },
    {
        id: 3,
        lang: 'Uzb',
        clickLang: 'uz',
        flag: UzbFlag,
    },
]