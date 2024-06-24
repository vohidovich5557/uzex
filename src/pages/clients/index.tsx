import { useParams } from "react-router-dom"
import { clientData } from "../../data/landingData";


export const ClientsPage = () => {
    const params = useParams();
    const result = clientData.filter((item) => item.id === Number(params.id));
    console.log(result);
    
    
    return (
        <>
         <div className="container flex flex-col md:flex-row lg:items-start md:pt-[100px] pt-[20px] items-center justify-center gap-[30px]">
            <div className="w-[300px] md:w-[600px] md:h-[300px] h-[200px] border-rareBlack shadow-md shadow-rareBlack/50 rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center border">
                <img src={result[0].imgPath} alt="my img" className="w-[50%] h-[100%] object-contain" />
            </div>
            <div className="w-[100%] md:w-[100%] flex flex-col items-center justify-center gap-[20px]">
                <h2 className="w-[100px] h-[10px] border border-rareBlack"></h2>
                <div className="w-[80%] h-[100px] border border-rareBlack">

                </div>
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