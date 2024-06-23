import { cardData } from '../../data/landingData'
import { CardTeam } from './card'


export const TeamCard = () => {
    return (
        <>
         <div className="container pt-[50px] flex flex-col lg:items-center lg:justify-center gap-[40px] lg:gap-[60px] pb-[50px]">
            <h2 data-aos='fade-right' data-aos-duration='2000' className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">Bizning Jamoa</h2>
            <div className="grid grid-cols-1 w-[100%] md:grid-cols-3 md:gap-[10px] items-center justify-center gap-[70px]">
                {cardData.map((item) => (
                    <CardTeam key={item.id} imgPath={item.imgPath} id={item.id} name={item.name} position={item.position} />
                ))}
            </div>
         </div>
        </>
    )
}