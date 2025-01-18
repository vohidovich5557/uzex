import {useTranslation} from 'react-i18next'
import service from '../../assets/serviceImg.png'
import service2 from '../../assets/serviceImg2.jpg'
import service3 from '../../assets/serviceImg3.png'
import service4 from '../../assets/serviceImg4.png'
import modal1 from '../../assets/avtoraqam savdo.png'
import modal2 from '../../assets/uzex birjasida savdo.png'
import modal3 from '../../assets/ebirja savdo.png'
import modal4 from '../../assets/e-auksion savdo.png'
import { Card } from './card'



 const About = () => {
    const {t} = useTranslation();
    const data = [
        {
            id: 1,
            img: service,
            modal: modal1,
            title: t("about.number"),
            link: 'https://avtoraqam.uzex.uz/?AspxAutoDetectCookieSupport=1'
        },
        {
            id: 2,
            img: service2,
            modal: modal2,
            title: t("about.uzex"),
            link: 'https://uzex.uz'
        },
        {
            id: 3,
            img: service3,
            modal: modal3,
            title: t("about.ebirja"),
            link: 'https://ebirja.uz/uz/en/about/about'
        },
        {
            id: 4,
            img: service4,
            modal: modal4,
            title: t("about.auksion"),
            link: 'https://e-auksion.uz/home'
        }
    ]
    return (
        <>
         <div className="container bg-whiteBg flex flex-col  pb-[20px] lg:pb-[100px] items-start lg:items-center gap-[30px] lg:gap-[50px] pt-[70px]"> 
            <h2 data-aos='fade-right' data-aos-anchor-placement="top-bottom" className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">{t("about.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center lg:gap-[20px]  gap-[20px]">
            {data?.map((item) => (
                <Card img={item.img} title={item.title} id={item.id} link={item.link} imgModal={item.modal} />
            ))}
            </div>
         </div>
        </>
    )
}

export default About