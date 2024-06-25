import { useTranslation } from "react-i18next"
import { clientData } from "../../data/landingData"
import { ClientCard } from "./card"


 const Clients = () => {
    const {t} = useTranslation();
    return (
        <>
        <div className="container bg-whiteBg flex flex-col pt-[20px] lg:items-center gap-[30px] lg:pb-[70px] pb-[20px]">
            <h2 data-aos='fade-right' data-aos-duration='2000' className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">{t("clients.title")}</h2>
            <div  className="flex flex-col md:flex-row lg:justify-evenly items-center justify-center w-[100%]  py-[10px] px-[20px] rounded-[20px] gap-[30px]">
                {clientData.map((item) => (
                    <ClientCard key={item.id} imgPath={item.imgPath} id={item.id} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Clients