import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export const Nav = ()=>{
    const [navToggle,setNavToggle] = useState(false)
    return(
        <nav className="h-[80px] bg-white-light  font-roboto relative">
            <div className="max-w-[1200px] px-[40px] sm:px-[80px] flex justify-between h-full">
            <div className="flex gap-x-4 items-center">
                <Link className="font-semibold text-color-light border-b-[4px] border-color-light" to="/">Maximiliano Cejas</Link>
                <p className="text-color-black font-roboto font-regular text-base">ES</p>
            </div>
            <ul className="hidden items-center gap-x-2 text-base font-regular sm:flex">
                <NavLink className={({isActive})=> isActive?'text-color-black font-semibold': 'text-color-light'} to="/">Proyectos</NavLink>
                <NavLink className={({isActive})=> isActive? 'text-color-black font-semibold border-x-[1px] border-color-light px-2':'border-x-[1px] border-color-light px-2 text-color-light'} to="/about">Sobre mi</NavLink>
                <NavLink className={({isActive})=> isActive?'text-color-black font-semibold': 'text-color-light'} to="/skill">Habilidades</NavLink>
            </ul>
            <div className="sm:hidden  flex items-center">
                <div className="flex flex-col gap-y-1 cursor-pointer" onClick={()=> setNavToggle(!navToggle)}>
                    <div className={`w-[25px] bg-color-light h-[3px] sm:hidden ${navToggle?"rotate-45 translate-y-[2px] duration-200":"duration-200"}`}></div>
                    <div className={`w-[25px] bg-color-light h-[3px] sm:hidden ${navToggle?"rotate-[-45deg] translate-y-[-5px] duration-200":"duration-200"}`}></div>
                    
                </div>
                {navToggle && (                   
                     <ul className="items-center justify-center flex h-[100px] rounded-b-[12px] w-full gap-x-2 text-base font-regular absolute top-[80px] left-0 bg-white-light">
                        <NavLink className={({isActive})=> isActive?'text-color-black font-semibold': 'text-color-light'} to="/">Proyectos</NavLink>
                        <NavLink className={({isActive})=> isActive? 'text-color-black font-semibold border-x-[1px] border-color-light px-2':'border-x-[1px] border-color-light px-2 text-color-light'} to="/about">Sobre mi</NavLink>
                        <NavLink className={({isActive})=> isActive?'text-color-black font-semibold': 'text-color-light'} to="/skill">Habilidades</NavLink>
                    </ul>
                )}


            </div>
            </div>

        </nav>
    )
}