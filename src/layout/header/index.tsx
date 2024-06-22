import React from "react"
import HeaderImg from '../../assets/headerimg.png'
import {LazyLoadImage} from 'react-lazy-load-image-component'


export const Header: React.FC = () => {
    return (
        <>
        <div className="container">
            <div className="w-[100%] h-auto flex flex-col items-center gap-[30px] md:gap-[40px] lg:gap-[50px]">
                <div className="w-[356px] md:w-[754px] rounded-bl-[50px] rounded-br-[50px] lg:w-[1100px] h-[200px] md:h-[400px]">
                    <LazyLoadImage src={HeaderImg} width={100} height={100} alt="My Img" className="w-[100%] h-[100%] rounded-bl-[50px] rounded-br-[50px] object-cover" />
                </div>
                <div className="w-[100%] flex flex-col items-center gap-[20px] md:gap-[30px] lg:gap-[50px] justify-center h-auto">
                    <h2 data-aos='fade-up' className="text-[50px] md:text-[60px] font-bold text-rareBlack">UzEx</h2>
                    <button data-aos="fade-up" data-aos-duration="2000" className="px-[20px] py-[10px] md:py-[20px] md:px-[30px] rounded-[50px] bg-rareBlack text-white font-semibold">Oson Savdo, Tezkor Xizmat</button>
                </div>
            </div>
        </div>
        </>
    )
}