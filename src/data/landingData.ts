import agroKlaster from '../assets/agroKlaster.png'
// cardData img Path
import { AmericaFlag, RussianFlag, UzbFlag } from '../assets/svgs'

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
        imgPath: null,
    },
    {
        id: 3,
        imgPath: null,
    },
    {
        id: 4,
        imgPath: null,
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