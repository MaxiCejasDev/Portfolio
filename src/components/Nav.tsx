"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-[100px] mt-12">
      <ul className="flex gap-x-12">
        <li
          className={`link flex items-center gap-x-1 font-semibold text-base text-grey ${
            pathname === "/" ? "active" : ""
          }`}
        >
          <Link href={"/"}>Proyectos</Link>
          <div
            className={`h-[16px] w-[16px] flex items-center justify-center rounded-[2px] bg-button ${
              pathname === "/" ? "bg-white" : ""
            }`}
          >
            <Image
              className={`object-cover ${pathname === "/" ? "icon-active" : ""}`}
              src={"/images/icons/folder.svg"}
              height={14}
              width={14}
              alt="Folder icon"
            />
          </div>
        </li>
        <li
          className={`link flex items-center gap-x-1 font-semibold text-base text-grey ${
            pathname === "/about" ? "active" : ""
          }`}
        >
          <Link href={"/about"}>Sobre mi</Link>
          <div
            className={`h-[16px] w-[16px] flex items-center justify-center rounded-[2px] bg-button ${
              pathname === "/about" ? "bg-white" : ""
            }`}
          >
            <Image
              className={`object-cover ${pathname === "/about" ? "icon-active" : ""}`}
              src={"/images/icons/user.svg"}
              height={14}
              width={14}
              alt="User icon"
            />
          </div>
        </li>
      </ul>
      <div className={`w-full h-[1px] bg-grey relative after:content-[''] after:absolute after:top-[-1px] after:h-[2px] after:w-[90px] after:bg-white  ${pathname === '/'?'':'after:left-[133px]'}`}></div>
     
    </nav>
  );
}
