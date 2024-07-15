import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";
export default function Header() {
  return (
    <header className="mt-24 px-6 sm:px-0">
      <div className="flex gap-x-2 items-center">
        <div className="rounded-full">
          <Image src={'/images/profile.svg'} height={60} width={60} alt="Profile photo"/>
        </div>
        <div className="bg-button flex gap-x-4 px-2 items-center rounded-[6px] h-[45px] w-64">
          <Image
            src={"/images/icons/available.svg"}
            height={20}
            width={20}
            alt="Available Icon"
          />
          <p className="text-light font-medium text-base self-center">
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
      <div className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row sm:gap-x-2 pt-8">
        <div className="flex gap-x-2">
        <Link href={'https://www.linkedin.com/in/maximiliano-cejas/'} className="bg-button hover:bg-hover-black h-[50px] sm:h-[40px] rounded-[12px] px-6 sm:px-4 p-4 flex items-center gap-x-2 text-light font-medium text-lg sm:text-base"><Image className="h-[24px] w-[24px] sm:h-[16px] sm:w-[16px]" src={'/images/icons/email.svg'} alt="Email icon" height={16} width={16}/>Email</Link>
        <Link href={'https://www.linkedin.com/in/maximiliano-cejas/'} className="bg-button hover:bg-hover-black h-[50px] sm:h-[40px] rounded-[12px] px-6 sm:px-4 p-4 flex items-center gap-x-2 text-light font-medium text-lg sm:text-base"><Image className="h-[24px] w-[20px] sm:h-[16px] sm:w-[12px]" src={'/images/icons/resume.svg'} alt="Resume icon" height={16} width={12}/>Curriculum</Link>
        </div>
        <div className="flex gap-x-2">
        <Link  target="_BLANK" href={'https://www.linkedin.com/in/maximiliano-cejas/'} className="bg-button hover:bg-hover-black h-[50px] sm:h-[40px] px-8 sm:px-4 rounded-[12px] p-4 flex items-center"><Image className="h-[24px] w-[24px] sm:h-[16px] sm:w-[16px]" src={'/images/icons/linkedin.svg'} height={16} width={16} alt="Linkedin icon"/></Link>
        <Link  target="_BLANK" href={'https://github.com/MaxiCejasDev'} className="bg-button hover:bg-hover-black h-[50px] sm:h-[40px] px-8 sm:px-4 rounded-[12px] p-4 flex items-center"><Image className="h-[24px] w-[24px] sm:h-[16px] sm:w-[16px]" src={'/images/icons/github.svg'} height={16} width={16} alt="Github icon"/></Link>
        <Link  target="_BLANK" href={'https://www.behance.net/maxicejas2'} className="bg-button hover:bg-hover-black h-[50px] sm:h-[40px] px-8 sm:px-4 rounded-[12px] p-4 flex items-center"><Image className="h-[24px] w-[24px] sm:h-[16px] sm:w-[16px]" src={'/images/icons/behance.svg'} height={16} width={16} alt="Behance icon"/></Link>
        </div>
      </div>
      <Nav/>
    </header>
  );
}
