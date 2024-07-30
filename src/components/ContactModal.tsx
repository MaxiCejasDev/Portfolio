"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";


interface FormField{
    nameHasError : boolean;
    emailHasError : boolean;
    messageHasError : boolean;
}

interface Props{
    formField : FormField;
    handleNameBlur : ()=> void;
    handleEmailBlur : ()=> void;
    handleMessageBlur : ()=> void;
    formSend : boolean;
    handleSubmit:(e:React.FormEvent)=>void;
    openContact: boolean;
    formData: {
        name: string;
        email: string;
        message: string;
    }
    handleChangeValue: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void;
}



export default function ContactModal({formField,handleNameBlur,handleEmailBlur,handleMessageBlur,formSend,handleSubmit,openContact,formData, handleChangeValue}: Props){
    
    
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
                <input autoComplete="off" placeholder="Ingrese su nombre" className={`bg-[#D9D9D9] rounded-[12px] py-2 pl-2 outline-1 outline-neutral-400 ${formField.nameHasError?'border-[#ff2b2b] border-[0.5px]':''}`} type="text" onBlur={handleNameBlur} aria-errormessage="nameErrorID" aria-invalid={formField.nameHasError} id="name" name="name" value={formData.name} onChange={handleChangeValue}/>
                {formField.nameHasError && <p className="text-sm font-regular text-[#ff2b2b] ml-2 absolute top-[110px]">Ingresa tu nombre, por favor.</p>}
            </div>
            <div className="flex flex-col pt-4 relative">
                <label className="font-medium form-label text-[#222222]" htmlFor="email">Email</label>
                <input autoComplete="off" placeholder="Ingrese su email" className={`bg-[#D9D9D9] rounded-[12px] py-2 pl-2 outline-1 outline-neutral-400 ${formField.emailHasError?'border-[#ff2b2b] border-[0.5px]':''}`} type="email" onBlur={handleEmailBlur} aria-errormessage="emailErrorID" aria-invalid={formField.emailHasError} id="email" name="email" value={formData.email} onChange={handleChangeValue}/>
                {formField.emailHasError && <p className="text-sm font-regular text-[#ff2b2b] ml-2 absolute top-[85px]">Ingrese un email correcto.</p>}
            </div>
            <div className="flex flex-col pt-4 relative">
                <label className="font-medium form-label text-[#222222]" htmlFor="message">Mensaje</label>
                <textarea placeholder="Ingrese un mensaje" className={`bg-[#D9D9D9] rounded-[12px] py-2 pl-2 outline-1 outline-neutral-400 ${formField.messageHasError?'border-[#ff2b2b] border-[0.5px]':''}`} id="message" name="message" onBlur={handleMessageBlur} value={formData.message} aria-errormessage="messageErrorID" aria-invalid={formField.messageHasError} onChange={handleChangeValue}></textarea>
                {formField.messageHasError && <p className="text-sm font-regular text-[#ff2b2b] ml-2 absolute top-[110px]">Ingrese un mensaje, por favor.</p>}
            </div>
            {formSend?<button className="bg-neutral-500 flex text-white h-[40px] font-medium mt-7 rounded-[26px] w-full items-center justify-center">Formulario enviado
            </button>:<button className="bg-button w-full hover:bg-hover-black text-white h-[40px] font-medium mt-7 rounded-[26px] ">Enviar</button>}

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
