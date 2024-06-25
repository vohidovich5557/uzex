import React, { useEffect, useState } from "react"
import HeaderImg from '../../assets/headerimg.png'
import { LangSelector } from "../../component/langSelector"
import { useTranslation } from "react-i18next"
import {Blurhash} from 'react-blurhash'


 const Header: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const {t} = useTranslation();
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = HeaderImg;
    }, [HeaderImg])
    return (
        <>
        <div className="container">
            <div className="w-[100%] h-auto flex flex-col  items-center gap-[30px] md:gap-[40px] lg:gap-[50px]">
                <div className="w-[100%] md:w-[90%] relative rounded-bl-[50px] rounded-br-[50px] lg:w-[1100px] h-[200px] md:h-[400px]">
                    {!imageLoaded && (
                        <Blurhash
                          hash="L00BJHk=UbaLi{jZbwbbdCeTdBbb"
                          width={200}
                          height={200}
                          resolutionX={32}
                          resolutionY={32}
                          punch={1}
                        />
                    )}
                    {imageLoaded && (
                        <img src={HeaderImg} width={100} height={100} alt="My Img" className="w-[100%] h-[100%] rounded-bl-[50px] rounded-br-[50px] object-cover" />
                    )}
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