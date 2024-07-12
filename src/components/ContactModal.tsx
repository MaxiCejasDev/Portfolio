import Image from "next/image";
import Link from "next/link";

export default function ContactModal(){
    return(
        <div className="bg-[#BABABC] w-[500px] h-[420px] z-0 absolute bottom-[80px] rounded-t-[26px] ">
            <div className="relative grid grid-cols-2 w-full h-full">
                <div className="absolute flex gap-x-2 top-4 left-4 font-regular text-xs">
                    <Image src={'/images/icons/available.svg'} alt="Available icon" height={16} width={16}/>
                    <p>Disponible</p>
                </div>
            <form className="flex flex-col pl-8 pt-10">
            <div className="flex flex-col">
                <label className="font-medium form-label" htmlFor="name">Nombre</label>
                <input placeholder="Ingrese su nombre" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2" type="text" id="name" />
            </div>
            <div className="flex flex-col pt-4">
                <label className="font-medium form-label" htmlFor="email">Email</label>
                <input placeholder="Ingrese su email" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2" type="text" id="email" />
            </div>
            <div className="flex flex-col pt-4">
                <label className="font-medium form-label" htmlFor="message">Mensaje (Opcional)</label>
                <textarea placeholder="Ingrese un mensaje" className="bg-[#D9D9D9] rounded-[12px] py-2 pl-2" id="message"></textarea>
            </div>
            <button className="bg-[#D9D9D9] h-[40px] font-medium mt-6 rounded-[26px] w-[95px]">Enviar</button>
        </form>
        <div className="flex flex-col pl-12 gap-y-14 pt-[4.5rem]">
            <Link href={''} className="text-black font-medium text-3xl">Linkedin</Link>
            <Link href={''} className="text-black font-medium text-3xl">Behance</Link>
            <Link href={''} className="text-black font-medium text-3xl">Github</Link>
        </div>

            </div>
    </div>
    )
}