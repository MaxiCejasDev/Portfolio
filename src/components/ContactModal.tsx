import Link from "next/link";

export default function ContactModal(){
    return(
        <div className="bg-[#BABABC] w-[500px] h-[420px] absolute bottom-[80px] rounded-t-[26px]">
        <form>
            <div>
                <label htmlFor="name">Nombre</label>
                <input className="bg-[#D9D9D9]" type="text" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input className="bg-[#D9D9D9]" type="text" id="email" />
            </div>
            <div>
                <label htmlFor="message">Mensaje (Opcional)</label>
                <textarea className="bg-[#D9D9D9]" id="message"></textarea>
            </div>
            <button className="bg-[#D9D9D9]">Enviar</button>
        </form>
        <div>
            <Link href={''} className="text-black font-medium text-3xl">Linkedin</Link>
            <Link href={''} className="text-black font-medium text-3xl">Behance</Link>
            <Link href={''} className="text-black font-medium text-3xl">Github</Link>
        </div>
    </div>
            
                
        
    )
}