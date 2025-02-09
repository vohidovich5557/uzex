// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import AboutImg from '../../assets/about.png'
import CountUp from 'react-countup';
import { Typed } from 'react-typed';
import TypingText from '../../component/typeText';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';


 const Hero = () => {
    const [inView, setInView] = useState(false);
    const [key, setKey] = useState(0);
    const ref = useRef();
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setKey((prevKey) => prevKey + 1); // Increment key to restart the count
                setInView(true);
              } else {
                setInView(false);
              }
            });
          },
          { threshold: 1 } // Adjust this threshold as needed
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);
    return (
        <>
        <div className="container bg-whiteBg flex flex-col lg:flex-row-reverse lg:items-start gap-[10px] md:gap-[20px] items-center  lg:mt-[130px] mt-[50px]">
            <div className='flex flex-col gap-[50px]'>
            <div className="items-start lg:items-center flex flex-col  w-[100%]">
                <h2 className="text-[23px] lg:text-[40px] font-semibold mb-[20px] lg:mb-[50px] text-rareBlack">{t("hero.title")}</h2>
                <div className="w-[100%] mb-[20px] lg:w-[700px] lg:items-center lg:text-center">
                    <span>{t("hero.text")}</span>
                </div>
            </div>
            <div className="w-[100%] flex flex-col md:flex-row mb-[20px] md:justify-around items-center gap-[20px] justify-center">
                <div className="flex flex-col items-center gap-[5px]">
                    <span ref={ref} className="text-[35px] md:text-[40px] font-bold text-rareBlack">
                        6
                    </span>
                    <span className="text-[23px] md:text-[28px] font-normal text-rareBlack">{t("hero.client")}</span>
                </div>
                <div  className="flex flex-col items-center gap-[10px]">
                    <span ref={ref} className="text-[35px] md:text-[40px] font-bold text-rareBlack">
                        5
                    </span>
                    <span className="text-[23px] md:text-[28px] font-normal text-rareBlack">{t("hero.service")}</span>
                </div>
                <div  className="flex flex-col items-center gap-[10px]">
                    <span ref={ref} className="text-[35px] md:text-[40px] font-bold text-rareBlack">
                        5
                    </span>
                    <span className="text-[23px] md:text-[28px] font-normal text-rareBlack">5-Stars Review</span>
                </div>
            </div>
            </div>
            <div className="w-[100%] md:w-[750px] lg:w-[100%] lg:h-auto"> 
                <LazyLoadImage effect='blur' width='100%' height='100%' src={AboutImg} alt="this is my img" className='w-[100%] rounded-[30px] h-[100%] object-cover' />
            </div>
        </div>
        </>
    )
}

export default Hero