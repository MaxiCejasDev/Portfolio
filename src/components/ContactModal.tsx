"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface Props{
    handleSubmit:(e:React.FormEvent)=>void;
    openContact: boolean;
    formData: {
        name: string;
        email: string;
        message: string;
    }
    handleChangeValue: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void;
}

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

export default function ContactModal({handleSubmit,openContact,formData, handleChangeValue}: Props){
    const modalRef = useRef()
    const [emailField, setEmailField] = useState({
        value: '',
        hasError: false,
    })
    const handleBlur = ()=>{
        const hasError =  !emailRegexp.test(formData.email)
        setEmailField((prevState)=> ({...prevState, hasError}))
    }
   
    
    return(
        <div className={`bg-[#f1f1f1] absolute w-full left-0 h-[420px] sm:w-[500px] z-0  rounded-t-[26px] transition-transform  duration-500 ${openContact?'open-contact duration-500 translate-y-[16%]':'duration-500 translate-y-[120%] sm:translate-y-[100%]'}`}>
            <div className="relative flex flex-col sm:grid sm:grid-cols-2 w-full h-full">
                <div className="absolute flex gap-x-2 top-4 left-4 font-regular text-xs">
                    <Image src={'/images/icons/available.svg'} alt="Available icon" height={16} width={16}/>
                    <p>Disponible</p>
                </div>
            <form onSubmit={handleSubmit} className="flex flex-col px-8 sm:px-0 sm:pl-8 pt-10">
            <div className="flex flex-col">
                <label className="font-medium form-label text-[#222222]" htmlFor="name">Nombre</label>
                <input autoComplete="off" placeholder="Ingrese su nombre" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2 outline-1 outline-neutral-400" type="text" id="name" name="name" value={formData.name} onChange={handleChangeValue}/>
            </div>
            <div className="flex flex-col pt-4 relative">
                <label className="font-medium form-label text-[#222222]" htmlFor="email">Email</label>
                <input autoComplete="off" placeholder="Ingrese su email" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2 outline-1 outline-neutral-400" type="email" onBlur={handleBlur} aria-errormessage="emailErrorID" aria-invalid={emailField.hasError} id="email" name="email" value={formData.email} onChange={handleChangeValue}/>
                {emailField.hasError && <p className="text-sm font-regular text-[#ff2b2b] ml-2 absolute top-[85px]">Ingrese un email correcto</p>}
            </div>
            <div className="flex flex-col pt-4">
                <label className="font-medium form-label text-[#222222]" htmlFor="message">Mensaje (Opcional)</label>
                <textarea placeholder="Ingrese un mensaje" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2 outline-1 outline-neutral-400" id="message" name="message" value={formData.message} onChange={handleChangeValue}></textarea>
            </div>
            <button className="bg-[#D9D9D9] h-[40px] font-medium mt-6 rounded-[26px] w-[95px]">Enviar</button>
        </form>
        <div className="hidden sm:flex flex-col pl-12 gap-y-14 pt-[4.5rem]">
            <Link href={'https://www.linkedin.com/in/maximiliano-cejas/'} className="text-[#222222] font-medium text-3xl">Linkedin</Link>
            <Link href={'https://www.behance.net/maxicejas2'} className="text-[#222222] font-medium text-3xl">Behance</Link>
            <Link href={'https://github.com/MaxiCejasDev'} className="text-[#222222] font-medium text-3xl">Github</Link>
        </div>

            </div>
    </div>
    )
}