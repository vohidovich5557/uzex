import HeaderImg from '../../assets/headerimg.png'
import { LangSelector } from "../../component/langSelector"
import { useTranslation } from "react-i18next"
import { LazyLoadImage } from 'react-lazy-load-image-component';


 const Header: React.FC = () => {
    const {t} = useTranslation();
    return (
        <>
        <div className="container">
            <div className="w-[100%] h-auto flex flex-col  items-center gap-[30px] md:gap-[40px] lg:gap-[50px]">
                <div className="w-[100%] md:w-[90%] relative rounded-bl-[50px] rounded-br-[50px] lg:w-[1100px] h-[200px] md:h-[400px]">
                        <LazyLoadImage effect="blur" src={HeaderImg} height='100%' width='100%' alt="My Img" className="w-[100%] h-[100%] rounded-bl-[50px] rounded-br-[50px] object-cover" />
                    <div className="w-[130px] absolute top-3 right-3 h-auto">
                        <LangSelector />
                    </div>
                </div>
                <div className="w-[100%] flex flex-col items-center gap-[20px] md:gap-[30px] lg:gap-[50px] justify-center h-auto">
                    <h2 data-aos='fade-up' className="text-[50px] md:text-[60px] font-bold text-rareBlack">UzEx</h2>
                    <button data-aos="fade-up" data-aos-duration="2000" className="px-[20px] py-[10px] md:py-[20px] md:px-[30px] rounded-[50px] bg-rareBlack text-white font-semibold">{t("header.text")}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header