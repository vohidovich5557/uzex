import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import CheckedImg from '../../assets/checkedImg.png'
import { z } from 'zod'
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

export const formSchema = z.object({
  name: z.string().min(4, {message: 'F.I.SH kiriting'}).max(40, {message: 'F.I.SH uzunligi 40 ta harfdan oshmasligi kerak'}),
  message: z.string().min(10, {message: 'Xabar Aniqroq Kiriting'}).max(100, {message: 'Xabar uzunligi 100 ta harfdan oshmasligi kerak'}),
  phone: z.string().min(9, {message: 'Telefon raqamni to`liq kiriting'}).max(14, {message: 'Telefon raqam uzunligi 14 ta harfdan oshmasligi kerak'}),
  service: z.enum(["avtoraqam", "Birja Savdo", "E-Auksion"], {
    errorMap: () => ({ message: "Xizmat turini tanlang" }),
  }),

})

export type FormDataSchema = z.infer<typeof formSchema>

interface FormData {
    name: string;
    service: string;
    message: string;
    phone: number;
}


const sendToTelegramBot = async (data: FormData): Promise<any> => {
    const { name, service, message, phone } = data;
    const botToken = '7066224645:AAF51qXiB80KCpRlhH9XRAzEY0HqH74jMWc';
    const chatId = '1163282279';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const text = `F.I.SH: ${name}\nXizmat: ${service}\nXabar: ${message}\nTelefon raqam: ${phone}`;
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
  
    return response.json();
  };




 const Footer:React.FC = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
      resolver: zodResolver(formSchema)
    });
    const [visible, setVisible] = useState(false);
    
      const submit: SubmitHandler<FormData> = async(data) => {
        setVisible(!visible);
        
        try {
            await sendToTelegramBot(data);
            toast.success('Xabaringiz muvaffaqiyatli yuborildi');
            reset();
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setVisible(false);
        }
      };
    

    return (
        <>
        <div className="container relative  flex flex-col lg:items-center lg:justify-center pb-[20px] gap-[30px]">
            <h2 className="text-[23px] lg:text-[40px] font-semibold mb-[20px] lg:mb-[50px] text-rareBlack">Biz bilan Bog`laning</h2>
            <form onSubmit={handleSubmit(submit)}>
            <div className="px-[30px] lg:w-[760px] md:w-[740px] py-[30px] border border-rareBlack rounded-[20px] flex flex-col items-center md:items-start  justify-center gap-[30px]">
                <div className="flex flex-col items-center w-[100%] lg:items-center justify-center gap-[30px]">
                <div className="flex flex-col md:flex-row w-[100%] items-center justify-center gap-[30px]">
                    <div className="w-[280px] md:w-[50%] flex flex-col items-start gap-[5px]">
                    <div className="w-[100%] md:w-[100%] py-[10px] flex flex-col items-start gap-[10px] px-[10px] h-auto bg-white rounded-[10px]">
                        <input type="text" placeholder="F.I.SH"  {...register('name', {required: 'F.I.SH kiritilmadi'})} className="w-[100%] bg-transparent autofill:bg-transparent h-auto outline-none"  />
                    </div>
                    {errors.name && typeof errors.name.message === 'string' && <p className="text-red-500 text-[16px] italic font-normal">{errors.name.message}</p>}
                    </div>
                   <div className="flex flex-col items-start gap-[5px] w-[280px] md:w-[50%]">
                   <div className="w-[100%] md:w-[100%] py-[10px] px-[10px] h-auto bg-white rounded-[10px]">
                   <select
                           defaultValue={'placeholder'}
                           className="w-[100%] h-[100%] outline-none bg-transparent"
                           {...register('service', {
                             validate: value => value !== 'placeholder' || 'Xizmat turini tanlang'
                           })}
                         >
                           <option value="placeholder" disabled>Xizmat Turini Tanglang</option>
                           <option value="avtoraqam">AvtoRaqam</option>
                           <option value="Birja Savdo">Birja Savdo</option>
                           <option value="E-Auksion">E-Auksion</option>
                         </select>
                    </div>
                    {errors.service && typeof errors.service.message === 'string' && <p className="text-red-500 text-[16px] font-normal italic">{errors.service.message}</p>}
                   </div>
                </div>
                <div className=" w-[280px] md:w-[100%] flex flex-col items-start gap-[5px]">
                    <div className="w-[100%] h-[130px] md:w-[100%] py-[5px] px-[10px] bg-white rounded-[10px]">
                    <textarea {...register('message', {required: 'Xabar kiritilmadi'})} placeholder="Tanlagan Xizmatizga doir savollar yoki takliflar bo`lsa yozib qoldiring" className="w-[100%] h-[100%] outline-none"></textarea>
                </div>
                {errors.message && typeof errors.message.message === 'string' && <p className="text-red-500 text-[16px] italic font-normal">{errors.message.message}</p>}
                </div>
                </div>
                <div className="w-[280px] md:w-[50%] flex flex-col items-start gap-[5px]">
                    <div className="w-[100%] md:w-[100%] py-[10px] flex flex-col items-start gap-[10px] px-[10px] h-auto bg-white rounded-[10px]">
                        <input type="number" placeholder="Telefon Raqamingiz"  {...register('phone', {required: 'Telefon Raqam Kiriting'})} className="w-[100%] bg-transparent autofill:bg-transparent h-auto outline-none"  />
                    </div>
                    {errors.phone && typeof errors.phone.message === 'string' && <p className="text-red-500 text-[16px] italic font-normal">{errors.phone.message}</p>}
                    </div>
                <button  type="submit" className="w-[270px] h-auto py-[10px] bg-rareBlack rounded-[20px] flex items-center justify-center text-white font-normal text-[23px]">Jo`natish</button>
            </div>
            </form>
        </div>
        {visible ? (
            <div className="w-[100%] h-[100%] flex items-center justify-center top-0 left-0 right-0 bottom-0 fixed">
                <div  className="md:w-[500px] w-[300px]   flex items-center justify-center  h-[400px] py-[20px] px-[20px] bg-black/90 rounded-[40px]">
                <div className="md:w-[400px] w-[200px] h-[200px] flex flex-col items-center justify-center gap-[30px]">
                    <img src={CheckedImg} alt="img of checked img" className="w-[100%] h-[100%] object-cover" />
                    <span className="text-white font-semibold text-[23px]">So`rovingiz Omadli Jo`natildi!</span>
                </div>
                </div>
            </div>
        ) : (
            null
        )}
        </>
    )
}


export default Footer