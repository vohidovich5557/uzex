import { TFunction } from 'i18next'
import agroKlaster from '../assets/agroKlaster.png'
// cardData img Path
import vohid from '../assets/person2.png'
import shoxrux from '../assets/person3.png'
import shokh from '../assets/shox.png'


import { AmericaFlag, RussianFlag, UzbFlag } from '../assets/svgs'

export const clientData = [
    {
        id: 1,
        imgPath: agroKlaster,
        name: (t: TFunction) => t('clients.client1.title'),
        info: (t: TFunction) => t('clients.client1.desc'),
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

export const cardData = [
    {
        id: 1,
        name: (t: TFunction) => t('team.name1'),
        position: (t: TFunction) => t('team.trader1'),
        desc: (t:TFunction) => t('team.vohid'),
        imgPath: vohid, 
    },
    {
        id: 2,
        name: (t: TFunction) => t('team.name2'),
        position: (t: TFunction) => t('team.trader2'),
        desc: (t:TFunction) => t('team.shoxrux'),
        imgPath: shoxrux,
    },
    {
        id: 3,
        name: (t: TFunction) => t('team.name3'),
        position: (t: TFunction) => t('team.trader3'),
        desc: (t:TFunction) => t('team.shohjahon'),
        imgPath: shokh,
    }
]