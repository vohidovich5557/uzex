import { useTranslation } from 'react-i18next'
import vohid from '../../assets/person2.png'
import shoxrux from '../../assets/person3.png'
import shokh from '../../assets/shox.png'
import { Star } from '../../assets/svgs';



 const TeamCard = () => {
    const {t} = useTranslation();
    return (
        <>
         <div className="container pt-[50px] flex flex-col lg:items-center lg:justify-center gap-[40px] lg:gap-[60px] pb-[100px]">
            <h2 data-aos='fade-right' data-aos-duration='2000' className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">{t("team.title")}</h2>
            <div className="grid grid-cols-1 w-[100%] md:grid-cols-3 md:gap-[10px] lg:gap-[70px] lg:px-[30px] items-center justify-center gap-[70px]">
            <div data-aos='fade-right' data-aos-duration='3000' className="flex flex-col relative items-center border shadow-lg bg-lightBlue rounded-[30px] py-[20px] lg:py-[20px] justify-center gap-[30px]">
                    <div className=' absolute w-[80px] h-[80px] translate-y-[-160px] lg:translate-y-[-150px] md:translate-y-[-190px] overflow-hidden rounded-[50%] border-4 border-whiteBg'>
                        <img src={vohid} alt="img" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center mt-[40px] gap-[5px]'>
                        <h2 className='text-[23px] font-extrabold text-rareBlack'>Vohid Tursunov</h2>
                        <span className='text-boldBlue font-normal text-[18px]'>{t("team.trader1")}</span>
                        <p className='text-rareGray w-[90%] mb-[20px] font-normal text-center'>{t("team.vohid")}</p>
                            <div className='flex w-[100%] items-center justify-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                    </div>
            </div>
            <div data-aos='fade-right' data-aos-duration='3000' className="flex flex-col relative items-center border shadow-lg bg-lightBlue rounded-[30px] py-[20px] lg:py-[20px] justify-center gap-[30px]">
                    <div className=' absolute w-[80px] h-[80px] translate-y-[-160px] lg:translate-y-[-150px] md:translate-y-[-190px] overflow-hidden rounded-[50%] border-4 border-whiteBg'>
                        <img src={shoxrux} alt="img" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center mt-[40px] gap-[5px]'>
                        <h2 className='text-[23px] font-extrabold text-rareBlack'>Shohruh Rajabov</h2>
                        <span className='text-boldBlue font-normal text-[18px]'>{t("team.trader2")}</span>
                        <p className='text-rareGray w-[90%] mb-[20px] font-normal text-center'>{t("team.shoxrux")}</p>
                            <div className='flex w-[100%] items-center justify-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                    </div>
            </div>
            <div data-aos='fade-right' data-aos-duration='3000' className="flex flex-col relative items-center border shadow-lg bg-lightBlue rounded-[30px] py-[20px] lg:py-[20px] justify-center gap-[30px]">
                    <div className=' absolute w-[80px] h-[80px] translate-y-[-160px] lg:translate-y-[-150px] md:translate-y-[-190px] overflow-hidden rounded-[50%] border-4 border-whiteBg'>
                        <img src={shokh} alt="img" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center mt-[40px] gap-[5px]'>
                        <h2 className='text-[23px] font-extrabold text-rareBlack'>Shohjahon O`ktamov</h2>
                        <span className='text-boldBlue font-normal text-[18px]'>{t("team.trader3")}</span>
                        <p className='text-rareGray w-[90%] mb-[20px] font-normal text-center'>{t("team.shohjahon")}</p>
                            <div className='flex w-[100%] items-center justify-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                    </div>
            </div>
            </div>
         </div>
        </>
    )
}

export default TeamCard