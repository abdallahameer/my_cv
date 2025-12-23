import { FaRegCopyright as CopyrightIcon } from "react-icons/fa6";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaTelegram as TelegramIcon,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-between md:px-6 md:py-2 p-4 md:mt-20 mt-10 md:flex-row flex-col z-40 bg-[#f0f1f2]">
      <div className="flex justify-center md:justify-start items-center font-medium text-sm text-center md:mb-0 mb-2 max-md:order-3 w-full">
        <CopyrightIcon />
        <p>Abdallah Ameer. All rights reserved.</p>
      </div>
      <div className="w-full flex gap-4 justify-center items-center font-bold">
        <a
          href="#about"
          className=" cursor-pointer
  text-black
  transition-colors duration-300
  hover:text-[#8487bf]"
        >
          About
        </a>
        <a
          href="#projects"
          className=" cursor-pointer
  text-black
  transition-colors duration-300
  hover:text-[#8487bf]"
        >
          Projects
        </a>
        <a
          href="#skills"
          className=" cursor-pointer
  text-black
  transition-colors duration-300
  hover:text-[#8487bf]"
        >
          Skills
        </a>
      </div>
      <div className="flex justify-center md:justify-end gap-2 w-full text-xl">
        <Link
          href={"https://github.com/abdallahameer"}
          target="_blank"
          rel="nooppener noreferrer"
        >
          <GithubIcon />
        </Link>
        <Link
          href={"www.linkedin.com/in/abdallah-taha-38b472231"}
          target="_blank"
          rel="nooppener noreferrer"
        >
          <LinkedinIcon />
        </Link>
        <Link
          href={"https://t.me/abdallahameertaha"}
          target="_blank"
          rel="nooppener noreferrer"
        >
          <TelegramIcon />
        </Link>
      </div>
    </div>
  );
}
