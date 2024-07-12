"use client"
import Image from "next/image";
import ContactModal from "./ContactModal";
import { useState } from "react";

export default function Contact() {
  const [openContact, setOpenContact] = useState(false)
  const handleOpenContact = ()=>{
    setOpenContact(!openContact)
  }
  return (
    <nav className="w-[500px] h-[100px] fixed bottom-2 z-10 left-[calc(50%-250px)]  text-black">
      <div className="relative h-full w-full grid grid-cols-2 p-4 rounded-[26px] bg-[#D9D9D9] z-10">
        <div className="flex  items-center gap-x-2">
          <div className="h-[50px] w-[50px] bg-red-500 rounded-full"></div>
          <div>
            <h3 className="font-medium text-base">Maximiliano Cejas</h3>
            <p className="font-light text-base">Frontend developer</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={handleOpenContact} className="bg-[#BABABC] rounded-[26px] py-4 px-8 flex items-center justify-center gap-x-4 font-medium text-base">
            Contacto
            <div className="bg-[#D9D9D9] w-[24px] h-[24px] rounded-full flex items-center justify-center">
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
      {openContact && <ContactModal/>}
          
    </nav>
  );
}
