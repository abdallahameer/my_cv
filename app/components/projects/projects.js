import Project from "./project";
import ElegantContext from "../../../assets/projectImages/shop.png";
import FoodShop from "../../../assets/projectImages/resturant.png";
import ReactEvent from "../../../assets/projectImages/events.png";
import ReactQuiz from "../../../assets/projectImages/quiz.png";
import TimeGame from "../../../assets/projectImages/timer.png";
import TikTakTow from "../../../assets/projectImages/tiktaktow.png";
import todo from "../../../assets/projectImages/todo.png";
import instagram from "../../../assets/projectImages/instagram.png";
import placesToVisit from "../../../assets/projectImages/places.png";
import bazaarcom from "../../../assets/projectImages/bazaarcom.png";

import {
  FaReact as ReactIcon,
  FaJs as JavaSrciptIcon,
  FaGithub as GitHubIcon,
  FaHtml5 as HtmlIcon,
  FaCss3Alt as CssIcon,
  FaTools as ToolsIcon,
  FaFigma as FigmaIcon,
} from "react-icons/fa";
import {
  RiNextjsFill as NextjsIcon,
  RiTailwindCssFill as TailwindIcon,
  RiSupabaseFill as SupabaseIcon,
} from "react-icons/ri";
import {
  SiReactrouter as ReactRouterIcon,
  SiVite as ViteIcon,
  SiMongodb as MongodbIcon,
  SiShadcnui as ShadcnIcon,
  SiReacthookform as ReactForms,
  SiReactquery as ReactQueryIcon,
} from "react-icons/si";

const ProjectsArray = [
  {
    image: bazaarcom,
    name: "Bazaarcom",
    tools: [
      { icon: NextjsIcon, name: "NextJs" },
      { icon: TailwindIcon, name: "Tailwind" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
      { icon: MongodbIcon, name: "Mongodb" },
      { icon: ShadcnIcon, name: "Shadcn" },
      { icon: ReactForms, name: "React-hook-forms" },
    ],
    discription:
      "A full-stack platform for advertising and discovering bazaars across Sudan, allowing users to explore events and vendors easily.",
    code: "https://github.com/abdallahameer/bazaarcom",
    link: "https://bazaarcom.vercel.app/",
  },
  {
    image: instagram,
    name: "Instagram",
    tools: [
      { icon: NextjsIcon, name: "NextJs" },
      { icon: TailwindIcon, name: "Tailwind" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
      { icon: SupabaseIcon, name: "Supabase" },
      { icon: ReactQueryIcon, name: "React-Query" },
      { icon: ReactForms, name: "React-hook-forms" },
    ],
    discription:
      "A full-stack Instagram-like social media application with user authentication, posts, likes, and interactions.",
    code: "https://github.com/abdallahameer/instegrame_like",
  },
  {
    image: ReactEvent,
    name: "React Events",
    tools: [
      { icon: ReactIcon, name: "React" },
      { icon: ViteIcon, name: "Vite" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
      { icon: ReactQueryIcon, name: "React-Query" },
    ],
    discription:
      "A full-stack events management platform for browsing, creating, and exploring upcoming events.",
    code: "https://github.com/abdallahameer/React-Events",
    link: "https://food-shop-2ffl.vercel.app/events",
  },
  {
    image: todo,
    name: "Todo",
    tools: [
      { icon: ReactIcon, name: "React" },
      { icon: ViteIcon, name: "Vite" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
      { icon: ReactRouterIcon, name: "React-Router" },
    ],
    discription:
      "A frontend to-do list application for managing daily tasks with a simple and intuitive interface.",
    code: "https://github.com/abdallahameer/Routing-project",
    link: "https://routing-project-mauve-three.vercel.app/",
  },
  {
    image: FoodShop,
    name: "Food Shop",
    tools: [
      { icon: ReactIcon, name: "React" },
      { icon: ViteIcon, name: "Vite" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
      { icon: MongodbIcon, name: "Mongodb" },
    ],
    discription:
      "A full-stack food store web application where users can browse meals, view details, and place orders.",
    code: "https://github.com/abdallahameer/food-shop",
  },
  {
    image: ElegantContext,
    name: "Elegant Context",
    tools: [
      { icon: ReactIcon, name: "React" },
      { icon: ViteIcon, name: "Vite" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
    ],
    discription:
      "A frontend clothing store showcasing products with a clean UI and smooth shopping experience.",
    code: "https://github.com/abdallahameer/Elegant-Context-Shop",
    link: "https://tik-tak-tow-nypu.vercel.app/",
  },
  {
    image: ReactQuiz,
    name: "React Quiz",
    tools: [
      { icon: ReactIcon, name: "React" },
      { icon: ViteIcon, name: "Vite" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
    ],
    discription:
      "A simple frontend quiz application with interactive questions focused on React fundamentals.",
    code: "https://github.com/abdallahameer/quiz-",
    link: "https://react-events-mocha.vercel.app/",
  },
  {
    image: TimeGame,
    name: "Timer Game",
    tools: [
      { icon: ReactIcon, name: "React" },
      { icon: ViteIcon, name: "Vite" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
    ],
    discription:
      "A frontend timing game where users try to stop the timer exactly at a selected time.",
    code: "https://github.com/abdallahameer/timer-game",
    link: "https://timer-game-sooty.vercel.app/",
  },
  {
    image: TikTakTow,
    name: "Tik-Tak-Tow",
    tools: [
      { icon: ReactIcon, name: "React" },
      { icon: ViteIcon, name: "Vite" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
    ],
    discription:
      "A classic frontend Tic-Tac-Toe game built with interactive gameplay and simple logic.",
    code: "https://github.com/abdallahameer/tik_tak_tow",
    link: "https://tik-tak-tow.vercel.app/",
  },
  {
    image: placesToVisit,
    name: "Travel Agency",
    tools: [
      { icon: ReactIcon, name: "React" },
      { icon: ViteIcon, name: "Vite" },
      { icon: JavaSrciptIcon, name: "JavaScript" },
    ],
    discription:
      "A frontend travel website displaying tourist destinations, ordered dynamically based on the user’s location.",
    code: "https://github.com/abdallahameer/Places-to-visit",
    link: "https://places-to-visit-rouge.vercel.app/",
  },
];

export default function Projects({ id }) {
  return (
    <section id={id} className="scroll-mt-[80px]">
      <div className="flex flex-col gap-20">
        <div className="w-full flex justify-center">
          <p className="text-5xl font-bold">Projects</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {ProjectsArray.map((project) => (
              <Project
                key={project.name}
                name={project.name}
                discription={project.discription}
                image={project.image}
                tools={project.tools}
                code={project.code}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
