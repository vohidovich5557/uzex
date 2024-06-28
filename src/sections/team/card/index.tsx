import { useTranslation } from "react-i18next"
import { Star } from "../../../assets/svgs"



export const CardTeam = ({name, id, position, imgPath, desc}: any) => {
    const {t} = useTranslation();
    return (
        <>
          <div key={id} data-aos='fade-right' data-aos-duration='3000' className="flex flex-col relative items-center border shadow-lg bg-lightBlue rounded-[30px] py-[20px] lg:py-[20px] justify-center gap-[30px]">
                    <div className=' absolute w-[80px] h-[80px] translate-y-[-160px] lg:translate-y-[-150px] md:translate-y-[-190px] overflow-hidden rounded-[50%] border-4 border-whiteBg'>
                        <img src={imgPath} alt="img" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center mt-[40px] gap-[5px]'>
                        <h2 className='text-[23px] font-extrabold text-rareBlack'>{name(t)}</h2>
                        <span className='text-boldBlue font-normal text-[18px]'>{position(t)}</span>
                        <p className='text-rareGray w-[90%] mb-[20px] font-normal text-center'>{desc(t)}</p>
                            <div className='flex w-[100%] items-center justify-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                    </div>
            </div>
        </>
    )
}