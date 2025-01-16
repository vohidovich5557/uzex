import {useTranslation} from 'react-i18next'
import service from '../../assets/serviceImg.png'
import service2 from '../../assets/serviceImg2.jpg'
import service3 from '../../assets/serviceImg3.png'
import service4 from '../../assets/serviceImg4.png'



 const About = () => {
    const {t} = useTranslation();
    return (
        <>
         <div className="container bg-whiteBg flex flex-col  pb-[20px] lg:pb-[100px] items-start lg:items-center gap-[30px] lg:gap-[50px] pt-[70px]"> 
            <h2 data-aos='fade-right' data-aos-anchor-placement="top-bottom" className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">{t("about.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center lg:gap-[20px]  gap-[20px]">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration='2000' className="relative bg-white h-[400px] overflow-hidden border rounded-[30px]">
                    <img src={service} alt='my img' className='w-[100%] h-[100%] object-contain' />
                    <div className=' w-[90%] absolute flex items-center justify-center translate-x-[16px] lg:translate-x-[20px] translate-y-[-90px] h-[70px] border bg-black rounded-[50px] border-white'>
                        <span className='text-[20px] cursor-pointer font-semibold text-white'>
                            <a href="https://avtoraqam.uzex.uz/?AspxAutoDetectCookieSupport=1" target='_blank'>{t("about.number")}</a>
                        </span>
                    </div>
                </div>
                <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration='2000' className="relative bg-white h-[400px] overflow-hidden border rounded-[30px]">
                    <img src={service2} alt='my img' className='w-[100%] h-[100%] object-contain' />
                    <div className='w-[90%] absolute flex items-center justify-center translate-x-[16px] lg:translate-x-[20px] translate-y-[-90px] h-[70px] border bg-black rounded-[50px] border-white'>
                        <span className='text-[20px] cursor-pointer font-semibold text-white'>
                            <a href="https://uzex.uz" target='_blank'>{t("about.uzex")}</a>
                        </span>
                    </div>
                </div>
                <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration='2000' className="relative bg-white h-[400px] overflow-hidden border rounded-[30px]">
                    <img src={service3} alt='my img' className='w-[100%] h-[100%] object-contain' />
                    <div className='w-[90%] absolute flex items-center justify-center translate-x-[16px] lg:translate-x-[20px] translate-y-[-90px] h-[70px] border bg-black rounded-[50px] border-white'>
                        <span className='text-[20px] cursor-pointer font-semibold text-white'>
                            <a href="https://ebirja.uz/uz/en/about/about" target='_blank'>{t("about.ebirja")}</a>
                        </span>
                    </div>
                </div>
                <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration='2000' className="relative bg-white h-[400px] overflow-hidden border rounded-[30px]">
                    <img src={service4} alt='my img' className='w-[100%] h-[100%] object-contain' />
                    <div className='w-[90%] absolute flex items-center justify-center translate-x-[16px] lg:translate-x-[20px] translate-y-[-90px] h-[70px] border bg-black rounded-[50px] border-white'>
                        <span className='text-[20px] cursor-pointer font-semibold text-white'>
                            <a href="https://e-auksion.uz/home" target="_blank">{t("about.auksion")}</a>
                        </span>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default About