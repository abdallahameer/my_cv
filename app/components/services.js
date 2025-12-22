import { FaReact as ReactIcon, FaFigma as FigmaIcon } from "react-icons/fa";
import { MdPeopleAlt as TeamIcon } from "react-icons/md";
import { SiFreelancer as FreelancIcon } from "react-icons/si";
export default function Services({ id }) {
  return (
    <section id={id} className="scroll-mt-[80px]">
      <div className="flex flex-col gap-20 ">
        <div className="w-full flex justify-center">
          <p className="text-5xl font-bold">Services I offer</p>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-5 items-center justify-center w-1/4 bg-[#f0f1f2] shadow-md border border-gray-400  p-5 rounded-lg transition-transform duration-300 ease-out hover:-translate-y-2">
            <ReactIcon className="text-blue-500 w w-[50px] h-[50px]" />
            <h1 className="text-center text-xl font-semibold  mb-2">
              Frontend Developer (React / NextJs)
            </h1>
            <p className="text-sm opacity-80 line-clamp-2">
              Join a team to build interactive and responsive UI using React,
              Tailwind CSS, and modern frontend technologies.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center w-1/4 bg-[#f0f1f2] shadow-md border border-gray-400  p-5 rounded-lg transition-transform duration-300 ease-out hover:-translate-y-2">
            <TeamIcon className="text-[#ad46ff] w w-[50px] h-[50px]" />
            <h1 className="text-center text-xl font-semibold  mb-2">
              Team Collaboration
            </h1>
            <p className="text-sm opacity-80 line-clamp-2">
              Collaborate in agile teams, participate in code reviews, and
              contribute to shared projects efficiently using Git, GitHub and
              GitLab workflows.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center w-1/4 bg-[#f0f1f2] shadow-md border border-gray-400  p-5 rounded-lg transition-transform duration-300 ease-out hover:-translate-y-2">
            <FreelancIcon className="text-green-400 w w-[50px] h-[50px]" />
            <h1 className="text-center text-xl font-semibold  mb-2">
              Freelance Frontend
            </h1>
            <p className="text-sm opacity-80 line-clamp-2">
              Develop responsive, user-friendly frontend web applications using
              React, NextJs and modern JavaScript, focusing on clean,
              maintainable, and scalable code that delivers high-quality user
              experiences.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center w-1/4 bg-[#f0f1f2] shadow-md border border-gray-400  p-5 rounded-lg transition-transform duration-300 ease-out hover:-translate-y-2">
            <FigmaIcon className="text-[#f6339a] w w-[50px] h-[50px]" />
            <h1 className="text-center text-xl font-semibold  mb-2">
              UI/UX Design Integration
            </h1>
            <p className="text-sm opacity-80 line-clamp-2">
              Translate Figma or Adobe XD designs into functional web interfaces
              with pixel-perfect accuracy and responsive layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
