import { serviceData } from '../../data/landingData'
import { Card } from './card'
import {useTranslation} from 'react-i18next'


 const About = () => {
    const {t} = useTranslation();
    return (
        <>
         <div className="container bg-whiteBg flex flex-col  pb-[20px] lg:pb-[100px] items-start lg:items-center gap-[30px] lg:gap-[50px] pt-[70px]"> 
            <h2 data-aos='fade-right' data-aos-anchor-placement="top-bottom" className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">{t("about.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center lg:gap-[25px]  gap-[20px]">
                {serviceData.map((item) => (
                    <Card key={item.id} imgPath={item.imgPath} name={item.name} id={item.id} />
                ))}
            </div>
         </div>
        </>
    )
}

export default About