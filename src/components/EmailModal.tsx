"use client"
import Image from "next/image"
import { LegacyRef, useState } from "react";



interface Props {
    emailModalRef: LegacyRef<HTMLDivElement> | undefined
}


export function EmailModal({emailModalRef}:Props){
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
      navigator.clipboard.writeText('maxicejas12354@gmail.com').then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };
    return(
        <div ref={emailModalRef} className="w-[280px] text-white border-2 shadow-[0px_5px_10px_rgba(23,23,23,.5)] border-hover-black h-[60px] flex items-center p-[20px] gap-x-4 bg-card absolute top-[55px] sm:top-[45px] z-10 rounded-[12px] ">
                <p>maxicejas12354@gmail.com</p>
                <button onClick={copyToClipboard}>
                    {copied?<Image src={'/images/icons/check.svg'} height={20} width={20} alt="Copy icon"/>:<Image src={'/images/icons/copy.svg'} height={20} width={20} alt="Copy icon"/>}
                </button>
                
        </div>
    )
}
