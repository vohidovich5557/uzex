


export const ClientCard = ({id, imgPath}: {id: number, imgPath: string}) => {
    return (
        <>
        <div key={id} data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration='2000' className='w-[200px] h-[200px] rounded-tr-[20px] rounded-bl-[20px] shadow-sm shadow-gray-400 bg-white flex  items-center justify-center'>
                    <img src={imgPath} alt="img of my" />
                </div>
        </>
    )
}