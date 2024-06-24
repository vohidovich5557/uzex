import { Link } from "react-router-dom"



export const ClientCard = ({id, imgPath}: {id: number, imgPath: string}) => {
    return (
        <>
        <div key={id} data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration='2000' className='w-[200px] px-[10px] h-[200px] rounded-tr-[20px] rounded-bl-[20px] shadow-sm shadow-gray-400 bg-white flex  items-center justify-center'>
                    <Link to={`/clients/${id}`}>
                    <img src={imgPath} alt="img of my" className="w-[100%]" />
                    </Link>
                </div>
        </>
    )
}