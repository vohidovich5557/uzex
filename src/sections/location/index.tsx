import MyMap from "../../component/map"



export const Location = () => {
    return (
        <>
         <div className="container flex flex-col items-start mb-[50px] md:mb-[70px] lg:mb-[90px] md:items-center justify-center gap-[40px]">
            <h2 className="text-[25px] lg:text-[35px] font-bold  text-rareBlack">Bizning Manzil</h2>
            <div className="w-[100%] md:w-[90%] rounded-[30px] border border-rareBlack overflow-hidden lg:w-[80%] lg:h-[400px] h-[200px] md:h-[300px]">
                 <MyMap />
            </div>
            <div className=" flex flex-col md:flex-row items-center ml-auto mr-auto justify-center gap-[40px]">
            <div className="w-auto py-[10px] shadow-md shadow-gray-400/60 bg-white rounded-[20px]  px-[10px]">
                <span><a href="https://maps.app.goo.gl/z8AFy2kH8kRzYNU57" target="_blank">Uzbekistan, Bukhara, Lattico</a></span>
            </div>
            <div className="w-auto py-[10px] shadow-md shadow-gray-400/60 bg-white rounded-[20px]  px-[10px]">
                <span className="text-red-600/80"><a href="tel:+998 91 331 55 57">+998 93 331 55 57</a></span>
            </div>
            </div>
         </div>
        </>
    )
}