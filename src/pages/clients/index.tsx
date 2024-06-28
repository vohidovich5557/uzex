import { Link, useParams } from "react-router-dom"
import { clientData } from "../../data/landingData";
import { useTranslation } from "react-i18next";


export const ClientsPage = () => {
    const params = useParams();
    const result = clientData.filter((item) => item.id === Number(params.id));
    console.log(result);
    const {t} = useTranslation();
    
    return (
        <>
         <div className="container flex flex-col md:flex-row lg:items-center md:pt-[100px] lg:pl-[30px] pt-[20px] items-center justify-center md:justify-between gap-[30px]">
            <Link to='https://agroklaster.uz/uz' target="_blank">
            <div className="w-[300px] md:w-[600px] md:h-[300px] lg:h-[400px] h-[200px] border-rareBlack shadow-md shadow-rareBlack/50 rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center border">
            {result[0].imgPath && <img src={result[0].imgPath} alt="my img" className="w-[50%] hover:w-[70%] transition-all duration-700 h-[100%] object-contain" />}
            </div>
            </Link>
            <div className="w-[100%] md:w-[80%] flex flex-col items-center justify-center gap-[20px]">
            {result[0] && result[0].name && <h2 className="w-auto h-auto py-[10px] px-[20px] text-rareBlue font-bold text-[25px]">{result[0].name(t)}</h2>}
                <div className="w-[100%] h-auto flex items-center justify-center">
                {result[0] && result[0].info && <span className="text-center text-rareBlack/80 text-[16px]">{result[0].info(t)}</span>}
                </div>
                <h3 className="w-auto h-auto py-[10px] text-rareBlue px-[20px]  font-bold text-[19px]">{t("clients.client1.subtitle")}</h3>
                <div className=" w-[100%] flex flex-col items-center justify-center gap-[10px]">
                    <div className="w-[80%] flex items-center justify-between h-[40px] border border-rareBlack">
                        <span className="w-[50%] h-[100%] border border-rareBlack"></span>
                        <span className="w-[50%] h-[100%] border border-rareBlack"></span>
                    </div>
                    <div className="w-[80%] flex items-center justify-between h-[40px] border border-rareBlack">
                    <span className="w-[50%] h-[100%] border border-rareBlack"></span>
                    <span className="w-[50%] h-[100%] border border-rareBlack"></span>
                    </div>
                    <div className="w-[80%] h-[40px] flex items-center justify-between border border-rareBlack">
                    <span className="w-[50%] h-[100%] border border-rareBlack"></span>
                    <span className="w-[50%] h-[100%] border border-rareBlack"></span>
                    </div>
                    <div className="w-[80%] h-[40px] flex items-center justify-between border border-rareBlack">
                    <span className="w-[50%] h-[100%] border border-rareBlack"></span>
                    <span className="w-[50%] h-[100%] border border-rareBlack"></span>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}