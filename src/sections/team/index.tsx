import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import vohid from '../../assets/person2.png'
import shoxrux from '../../assets/person3.png'
import shokh from '../../assets/shox.png'



 const TeamCard = () => {
    const {t} = useTranslation();
    return (
        <>
         <div className="container pt-[50px] flex flex-col lg:items-center lg:justify-center gap-[40px] lg:gap-[60px] pb-[50px]">
            <h2 data-aos='fade-right' data-aos-duration='2000' className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">{t("team.title")}</h2>
            <div className="grid grid-cols-1 w-[100%] md:grid-cols-3 md:gap-[10px] items-center justify-center gap-[70px]">
            <div data-aos='fade-right' data-aos-duration='3000' className="flex flex-col items-center border shadow-lg shadow-rareBlack border-rareBlack rounded-tr-[30px] py-[10px] lg:py-[20px] rounded-bl-[30px] justify-center gap-[30px]">
                    <div className="w-[200px] lg:w-[300px] lg:h-[300px] h-[200px]">
                        <LazyLoadImage effect='blur' width='100%' height='100%' src={vohid} alt="person img" className="w-[100%] rounded-[30px] h-[100%] object-cover" />
                    </div>
                    <div className="w-[230px] h-[60px] bg-rareBlack rounded-[50px] flex items-center justify-center">
                        <span className="text-white font-semibold text-[20px]">Vohid Tursunov</span>
                    </div>
                    <div className={`w-auto px-[30px]  h-[40px] bg-green-400/80 flex items-center justify-center rounded-[50px]`}>
                        <span className='text-white font-semibold text-[18px]'>{t('team.trader1')}</span>
                    </div>
                </div>
                <div data-aos='fade-right' data-aos-duration='3000' className="flex flex-col items-center border shadow-lg shadow-rareBlack border-rareBlack rounded-tr-[30px] py-[10px] lg:py-[20px] rounded-bl-[30px] justify-center gap-[30px]">
                    <div className="w-[200px] lg:w-[300px] lg:h-[300px] h-[200px]">
                        <LazyLoadImage effect='blur' width='100%' height='100%' src={shoxrux} alt="person img" className="w-[100%] rounded-[30px] h-[100%] object-cover" />
                    </div>
                    <div className="w-[230px] h-[60px] bg-rareBlack rounded-[50px] flex items-center justify-center">
                        <span className="text-white font-semibold text-[20px]">Shoxrux Rajabov</span>
                    </div>
                    <div className={`w-auto px-[30px]  h-[40px] bg-red-400/80 flex items-center justify-center rounded-[50px]`}>
                        <span className='text-white font-semibold text-[18px]'>{t('team.trader2')}</span>
                    </div>
                </div>
                <div data-aos='fade-right' data-aos-duration='3000' className="flex flex-col items-center border shadow-lg shadow-rareBlack border-rareBlack rounded-tr-[30px] py-[10px] lg:py-[20px] rounded-bl-[30px] justify-center gap-[30px]">
                    <div className="w-[200px] lg:w-[300px] lg:h-[300px] h-[200px]">
                        <LazyLoadImage effect='blur' width='100%' height='100%' src={shokh} alt="person img" className="w-[100%] rounded-[30px] h-[100%] object-cover" />
                    </div>
                    <div className="w-[230px] h-[60px] bg-rareBlack rounded-[50px] flex items-center justify-center">
                        <span className="text-white font-semibold text-[20px]">Shohjahon O`ktamov</span>
                    </div>
                    <div className={`w-auto px-[30px]  h-[40px] bg-red-400/80 flex items-center justify-center rounded-[50px]`}>
                        <span className='text-white font-semibold text-[18px]'>{t('team.trader3')}</span>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default TeamCard