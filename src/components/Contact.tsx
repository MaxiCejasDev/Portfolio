"use client"
import Image from "next/image";
import ContactModal from "./ContactModal";
import React, { useState } from "react";






export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [openContact, setOpenContact] = useState(false)
  const handleOpenContact = ()=>{
    setOpenContact(!openContact)
  }
  const handleChangeValue = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {target} = evt
    const {name, value} = target
    const newData = {
      ...formData,
      [name]: value
    }
    setFormData(newData)
  }

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault()
    const res = await fetch('/api/send',{
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      }
  })
  const data = await res.json()
  console.log(data)
  setFormData({name: '',email:'',message:''})
  }
  
  return (
    <nav className={`w-[90%]  left-[5%] h-[60px] sm:w-[500px] sm:h-[80px] fixed bottom-2 z-10 sm:left-[calc(50%-250px)] overflow-hidden ${openContact?'overflow-visible':''}`}>
      <div className={`relative h-full w-full grid grid-cols-2 px-4 rounded-[40px] duration-500  z-10 ${openContact?'bg-button text-white':'bg-[#F0F0F0] text-[#222222]'}`}>
        <div className="flex  items-center gap-x-2">
          <div className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] relative rounded-full">
            <Image src={'/images/profile.svg'} fill alt="Profile Photo"/>
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-base">Maximiliano Cejas</h3>
            <p className="font-regular text-xs sm:text-base">Frontend developer</p>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button onClick={handleOpenContact} className={`${openContact?'bg-black hover:bg-hover-black':''} bg-[#cdcdcd] font-medium hover:bg-[#bebebe] text-sm relative py-2 w-28 pl-3  sm:pl-5 sm:py-3 rounded-[26px] sm:w-[140px] flex items-start justify-start gap-x-2 sm:text-lg overflow-hidden`}>
            Contacto
            
            <div className="bg-[#F0F0F0] right-2 w-[30px] h-[30px] rounded-full flex items-center justify-center absolute top-[4px] sm:top-[12px]">
              <Image
                className={`${openContact?'rotate-180 duration-500':'rotate-0 duration-500'}`}
                src={"/images/icons/arrow.svg"}
                height={0.5}
                width={10}
                alt="Arrow icon"
              />
            </div>
          </button>
        </div>
        
      </div>
      <div className={`${openContact?'h-[480px] w-full overflow-hidden absolute bottom-[34px] overflow-hidden sm:h-[500px]':'h-[20px] w-full overflow-hidden bottom-[34px] absolute sm:h-[calc(80px-28px)]'}`}>
        <ContactModal handleSubmit={handleSubmit} openContact={openContact} formData={formData} handleChangeValue={handleChangeValue}/>
      </div>
      
          
    </nav>
  );
}
