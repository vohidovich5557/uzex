import { useTranslation } from 'react-i18next'
import {cardData} from '../../data/landingData'
 import { CardTeam } from './card';


 const TeamCard = () => {
    const {t} = useTranslation();
    return (
        <>
         <div className="container pt-[50px] flex flex-col lg:items-center lg:justify-center gap-[40px] lg:gap-[60px] pb-[100px]">
            <h2 data-aos='fade-right' data-aos-duration='2000' className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">{t("team.title")}</h2>
            <div className="grid grid-cols-1 w-[100%] md:grid-cols-3 md:gap-[10px] lg:gap-[70px] lg:px-[30px] items-center justify-center gap-[70px]">
              {cardData.map((item) => (
                <CardTeam {...item} />
              ))}
            </div>
         </div>
        </>
    )
}

export default TeamCard