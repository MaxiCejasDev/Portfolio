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

  // const handleSubmit = async (e: React.FormEvent)=>{
  //   e.preventDefault()
  //   const res = await fetch('/api/send',{
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //     headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json"
  //     }
  // })
  // const data = await res.json()
  // console.log(data)
  // setFormData({name: '',email:'',message:''})
  // }
  
  return (
    <nav className="w-[500px] h-[80px] fixed bottom-2 z-10 left-[calc(50%-250px)]  text-[#222222]">
      <div className="relative h-full w-full grid grid-cols-2 px-4 rounded-[40px] bg-[#F0F0F0] z-10">
        <div className="flex  items-center gap-x-2">
          <div className="h-[50px] w-[50px] relative rounded-full">
            <Image src={'/images/profile.svg'} fill alt="Profile Photo"/>
          </div>
          <div>
            <h3 className="font-bold text-base">Maximiliano Cejas</h3>
            <p className="font-regular text-base">Frontend developer</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={handleOpenContact} className="bg-[#cdcdcd] hover:bg-[#bebebe] relative py-3 rounded-[26px] pl-5 w-[140px] flex items-start justify-start gap-x-2 font-medium text-lg overflow-hidden">
            Contacto
            
            <div className="bg-[#F0F0F0] right-2 w-[30px] h-[30px] rounded-full flex items-center justify-center absolute">
              <Image
                src={"/images/icons/arrow.svg"}
                height={0.5}
                width={10}
                alt="Arrow icon"
              />
            </div>
          </button>
        </div>
        
      </div>
      {openContact && <ContactModal formData={formData} handleChangeValue={handleChangeValue}/>}
          
    </nav>
  );
}
