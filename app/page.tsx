import Image from "next/image";
import MyProfile from "../assets/MyProfile.jpg";
import AboutMe from "./components/aboutMe";
import Skills from "./components/Skills/skills";
import Resume from "./components/Resume";
import Projects from "./components/projects/projects";
import Services from "./components/services";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-25 p-12.5 w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full flex flex-col gap-12 justify-center ">
          <div className="flex gap-2 font-bold text-6xl">
            <p className=" underline decoration-[#8487bf]">Hi,</p>
            <p>I'm Abdallah</p>
          </div>
          <p className="font-bold text-6xl">Frontend Developer</p>
          <p className="text-xl">
            Frontend Developer | NextJs • React • TypeScript • Tailwind
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="hover:cursor-pointer hover:bg-blue-500 transition-colors hover:text-black duration-300 text-white text-lg font-bold rounded-lg gap-2 p-3 bg-[#8487bf]"
            >
              View Projects
            </a>
            <a
              href="Abdullah_Ameer_English_CV.pdf"
              download
              className="hover:cursor-pointer hover:bg-blue-500 transition-colors hover:text-black duration-300 text-white text-lg font-bold rounded-lg gap-2 p-3 bg-black"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-end items-start w-full ">
          <Image
            className=" rounded-full w-112.5 h-112.5"
            src={MyProfile}
            alt="my Profile"
          />
        </div>
      </div>

      <AboutMe id="about" />
      <Skills id="skills" />
      <Resume id="resume" />
      <Projects id="projects" />
      <Services id="services" />
    </div>
  );
}
