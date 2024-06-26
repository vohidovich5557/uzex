import { Link } from "react-router-dom"



export const ClientCard = ({id, imgPath}: {id: number, imgPath: string}) => {
    return (
        <>
        <div key={id} data-aos-duration='2000' className='w-[250px] bg-white shadow-md shadow-gray-300  hover:w-[250px] scale-[0.9] transition-all duration-700  px-[10px] h-[130px] rounded-tr-[20px] rounded-bl-[20px]  flex  items-center justify-center'>
                    <Link to={`/clients/${id}`}>
                    <img src={imgPath} alt="img of my" className="w-[100%]" />
                    </Link>
                </div>
        </>
    )
}