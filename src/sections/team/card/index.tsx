


export const CardTeam = ({imgPath, id, name, position}: {imgPath: string, id: number, name: string, position: string}) => {
    return (
        <>
        <div key={id} data-aos='fade-right' data-aos-duration='3000' className="flex flex-col items-center border shadow-lg shadow-rareBlack border-rareBlack rounded-tr-[30px] py-[10px] lg:py-[20px] rounded-bl-[30px] justify-center gap-[30px]">
                    <div className="w-[200px] lg:w-[300px] lg:h-[300px] h-[200px]">
                        <img src={imgPath} alt="person img" className="w-[100%] rounded-[30px] h-[100%] object-cover" />
                    </div>
                    <div className="w-[230px] h-[60px] bg-rareBlack rounded-[50px] flex items-center justify-center">
                        <span className="text-white font-semibold text-[20px]">{name}</span>
                    </div>
                    <div className={`w-auto px-[30px]  h-[40px] ${position ==='Katta Trader' && 'Programmist' ? 'bg-green-400/80' : 'bg-red-400/80'} flex items-center justify-center rounded-[50px]`}>
                        <span className='text-white font-semibold text-[18px]'>{position}</span>
                    </div>
                </div>
        </>
    )
}