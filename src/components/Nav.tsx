"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Nav(){
    const pathname = usePathname()
    
    return(
        <nav className="w-full h-[100px] mt-12">
            <ul className="flex gap-x-12">
                <li className={`link flex items-center gap-x-1 font-regular text-xl text-grey ${pathname === '/' ? 'active' : ''}`} >
                    <Link href={"/"}>Proyectos</Link>
                    <div className={`h-[14px] w-[14px] flex items-center justify-center rounded-[2px] bg-button ${pathname === '/' ? 'bg-white' : ''}`}>

                    <Image className={`${pathname === '/' ?'icon-active':''}`} src={'/images/icons/folder.svg'} height={10} width={10} alt="Folder icon"/>
                    </div>
                </li>
                <li className={`link flex items-center gap-x-1 font-regular text-xl text-grey ${pathname === '/about' ? 'active' : ''}`} >
                    <Link href={"/about"}>Sobre mi</Link>
                    <div className={`h-[14px] w-[14px] flex items-center justify-center rounded-[2px] bg-button ${pathname === '/about' ? 'bg-white' : ''}`}>

                    <Image className={`${pathname === '/about' ?'icon-active':''}`} src={'/images/icons/user.svg'} height={10} width={10} alt="User icon"/>
                    </div>
                </li>
            </ul>
            <hr />
        </nav>
    )
}