import { TFunction } from 'i18next'
import agroKlaster from '../assets/agroKlaster.png'
// cardData img Path
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