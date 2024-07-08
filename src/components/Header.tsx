import Image from "next/image";
import Nav from "./Nav";
export default function Header() {
  return (
    <header className="mt-24">
      <div className="flex gap-x-2">
        <div className="h-[45px] w-[45px] bg-slate-100 rounded-full"></div>
        <div className="bg-button flex gap-x-4 px-2 items-center rounded-[6px] h-[45px} w-[295px]">
          <Image
            src={"/images/icons/available.svg"}
            height={20}
            width={20}
            alt="Available Icon"
          />
          <p className="text-light font-regular text-xl self-center">
            Disponible actualmente
          </p>
        </div>
      </div>
      <div className="pt-4">
        <h1 className="text-white font-semibold text-2xl">Maximiliano Cejas</h1>
        <p className="text-light ">
          Desarrollador frontend y diseñador ux/ui de Argentina.
        </p>
      </div>
      <div className="flex gap-x-2 pt-8">
        <button className="bg-button h-[45px] rounded-[12px] p-4 flex items-center gap-x-2 text-light font-regular text-xl"><Image src={'/images/icons/email.svg'} alt="Email icon" height={25} width={25}/>Email</button>
        <button className="bg-button h-[45px] rounded-[12px] p-4 flex items-center gap-x-2 text-light font-regular text-xl"><Image src={'/images/icons/resume.svg'} alt="Resume icon" height={25} width={20}/>Curriculum</button>
        <button className="bg-button h-[45px] rounded-[12px] p-4 flex items-center"><Image src={'/images/icons/linkedin.svg'} height={25} width={25} alt="Linkedin icon"/></button>
        <button className="bg-button h-[45px] rounded-[12px] p-4 flex items-center"><Image src={'/images/icons/github.svg'} height={25} width={25} alt="Github icon"/></button>
        <button className="bg-button h-[45px] rounded-[12px] p-4 flex items-center"><Image src={'/images/icons/behance.svg'} height={25} width={25} alt="Behance icon"/></button>
      </div>
      <Nav/>
    </header>
  );
}
