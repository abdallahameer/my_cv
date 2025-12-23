"use client";

import Image from "next/image";
import { useState } from "react";
import AbdallahAmeerIcon from "../../assets/AbdallahAmeer_icon.png";
import MobileSidebar from "./SideBar";
import { LuMenu as MenuIcon, LuX as Xicon } from "react-icons/lu";
import { LuFileDown } from "react-icons/lu";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full h-[60px] flex justify-between items-center fixed bg-white z-50">
      <div className="flex items-end">
        <Image
          className="w-12.5 h-12.5"
          src={AbdallahAmeerIcon}
          alt="Abdllah_ameer_icon"
        />
        <p className="hidden md:block font-bold text-2xl text-[#8487bf]">{`<AbdallahAmeer/>`}</p>
      </div>
      <div className=" hidden md:flex justify-between w-full ">
        <div className="w-full flex gap-4 justify-center items-center font-bold">
          <a
            href="#about"
            className="relative inline-block cursor-pointer
  text-black
  transition-colors duration-300
  hover:text-[#8487bf]
  after:absolute after:left-0 after:-bottom-1
  after:h-[3px] after:w-0
  after:bg-[#8487bf]
  after:transition-all after:duration-500
  hover:after:w-full"
          >
            About
          </a>
          <a
            href="#skills"
            className="relative inline-block cursor-pointer
  text-black
  transition-colors duration-300
  hover:text-[#8487bf]
  after:absolute after:left-0 after:-bottom-1
  after:h-[3px] after:w-0
  after:bg-[#8487bf]
  after:transition-all after:duration-500
  hover:after:w-full"
          >
            Skills
          </a>
          <a
            href="#resume"
            className="relative inline-block cursor-pointer
  text-black
  transition-colors duration-300
  hover:text-[#8487bf]
  after:absolute after:left-0 after:-bottom-1
  after:h-[3px] after:w-0
  after:bg-[#8487bf]
  after:transition-all after:duration-500
  hover:after:w-full"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="relative inline-block cursor-pointer
  text-black
  transition-colors duration-300
  hover:text-[#8487bf]
  after:absolute after:left-0 after:-bottom-1
  after:h-[3px] after:w-0
  after:bg-[#8487bf]
  after:transition-all after:duration-500
  hover:after:w-full"
          >
            Projects
          </a>
          <a
            href="#services"
            className="relative inline-block cursor-pointer
  text-black
  transition-colors duration-300
  hover:text-[#8487bf]
  after:absolute after:left-0 after:-bottom-1
  after:h-[3px] after:w-0
  after:bg-[#8487bf]
  after:transition-all after:duration-500
  hover:after:w-full"
          >
            Service
          </a>
        </div>
        <a
          href="Abdullah_Ameer_English_CV.pdf"
          download
          className="hover:bg-blue-500 hover:cursor-pointer duration-300 transition-colors  flex items-center text-white text-lg h-9 rounded-lg gap-2 p-3 mr-3 bg-[#8487bf]"
        >
          <LuFileDown />
          <p>Resume</p>
        </a>
      </div>
      <MenuIcon onClick={() => setOpenMenu(true)} className="w-7 h-7" />
      <MobileSidebar open={openMenu} onClose={() => setOpenMenu(false)} />
    </div>
  );
}
