


export const Card = ({imgPath, name, id}: {imgPath: string, name: string, id: number}) => {
    return (
        <>
        <div key={id} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration='2000' className="w-[350px] lg:w-[330px] relative h-[400px] overflow-hidden border rounded-[30px]">
                    <img src={imgPath} alt='my img' className='w-[100%] h-[100%] object-cover' />
                    <div className='w-[315px] absolute flex items-center justify-center translate-x-[16px] lg:translate-x-[5px] translate-y-[-122px] h-[100px] border bg-black rounded-[50px] border-white'>
                        <span className='text-[20px] font-semibold text-white'>{name}</span>
                    </div>
                </div>
        </>   
    )
}