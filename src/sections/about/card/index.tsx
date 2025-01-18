import { useState } from "react"
import { Modal } from '@mui/material';


export const Card = ({img, title, id, link, imgModal}: {img: string, title: string, id: number, link: string, imgModal: string}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
        <div onClick={handleOpen} key={id} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration='2000' className="relative bg-white h-[400px]  group  overflow-hidden border rounded-[30px]">
                    <img src={img} alt='my img' className='w-[100%] h-[100%] object-contain' />
                    <div className=' w-[90%] z-20 absolute flex items-center justify-center translate-x-[16px] lg:translate-x-[20px] translate-y-[-90px] h-[70px] border bg-black rounded-[50px] border-white'>
                        <span className='text-[20px] cursor-pointer font-semibold text-white'>
                            <a href={link} target='_blank'>{title}</a>
                        </span>
                    </div>
                    <div className="top-0 left-0 absolute transition-all duration-500 ease-in-out bottom-0 right-0 inset-0 group-hover:backdrop-blur-0 backdrop-blur-sm z-10"></div>
            </div>
        
        <Modal
         open={open}
         onClose={handleClose}
         className="flex items-center outline-none justify-center"
        >
            <div className="w-[90%] xl:w-[40%] outline-none h-[500px] xl:h-[750px] py-[30px] bg-white">
                <img src={imgModal} alt="img" className="w-[100%] h-[100%] object-cover" />
            </div>
        </Modal>
        </>   
    )
}