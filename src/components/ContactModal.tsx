"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props{
   
    formData: {
        name: string;
        email: string;
        message: string;
    }
    handleChangeValue: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void;
}

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

export default function ContactModal({formData, handleChangeValue}: Props){
    const [emailField, setEmailField] = useState({
        value: '',
        hasError: false,
    })
    const handleBlur = ()=>{
        console.log(!emailRegexp.test(formData.email))
        const hasError =  !emailRegexp.test(formData.email)
        setEmailField((prevState)=> ({...prevState, hasError}))
    }
    return(
        <div className="bg-[#BABABC] w-[500px] h-[420px] z-0 absolute bottom-[60px] rounded-t-[26px] ">
            <div className="relative grid grid-cols-2 w-full h-full">
                <div className="absolute flex gap-x-2 top-4 left-4 font-regular text-xs">
                    <Image src={'/images/icons/available.svg'} alt="Available icon" height={16} width={16}/>
                    <p>Disponible</p>
                </div>
            <form  className="flex flex-col pl-8 pt-10">
            <div className="flex flex-col">
                <label className="font-medium form-label text-[#222222]" htmlFor="name">Nombre</label>
                <input placeholder="Ingrese su nombre" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2" type="text" id="name" name="name" value={formData.name} onChange={handleChangeValue}/>
            </div>
            <div className="flex flex-col pt-4">
                <label className="font-medium form-label text-[#222222]" htmlFor="email">Email</label>
                <input placeholder="Ingrese su email" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2" type="email" onBlur={handleBlur} aria-errormessage="emailErrorID" aria-invalid={emailField.hasError} id="email" name="email" value={formData.email} onChange={handleChangeValue}/>
                {emailField.hasError && <p className="text-sm font-regular text-[#ff2b2b] ml-2">Ingrese un email correcto</p>}
            </div>
            <div className="flex flex-col pt-4">
                <label className="font-medium form-label text-[#222222]" htmlFor="message">Mensaje (Opcional)</label>
                <textarea placeholder="Ingrese un mensaje" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2" id="message" name="message" value={formData.message} onChange={handleChangeValue}></textarea>
            </div>
            <button className="bg-[#D9D9D9] h-[40px] font-medium mt-6 rounded-[26px] w-[95px]">Enviar</button>
            <p></p>
        </form>
        <div className="flex flex-col pl-12 gap-y-14 pt-[4.5rem]">
            <Link href={'https://www.linkedin.com/in/maximiliano-cejas/'} className="text-[#222222] font-medium text-3xl">Linkedin</Link>
            <Link href={'https://www.behance.net/maxicejas2'} className="text-[#222222] font-medium text-3xl">Behance</Link>
            <Link href={'https://github.com/MaxiCejasDev'} className="text-[#222222] font-medium text-3xl">Github</Link>
        </div>

            </div>
    </div>
    )
}