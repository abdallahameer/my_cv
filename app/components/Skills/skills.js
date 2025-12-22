import Skill from "./skill";
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
} from "react-icons/ri";
import { VscDebugDisconnect as DisConnectICon } from "react-icons/vsc";
import {
  MdDevices as ResponsiveIcon,
  MdIntegrationInstructions as ApiIcon,
} from "react-icons/md";
import { CgPerformance as PerformanceIcon } from "react-icons/cg";
import InfiniteScrollLine from "../infiniteScrollLine";
const skills = [
  {
    icon: ReactIcon,
    title: "React.js",
    discription:
      "Build high-performance, scalable interfaces with modern React patterns",
    progress: "85",
  },
  {
    icon: JavaSrciptIcon,
    title: "JavaScript / TypeScript",
    discription:
      "Write robust, maintainable code using modern JS and type-safe TS workflows",
    progress: "80",
  },
  {
    icon: NextjsIcon,
    title: "Next.js",
    discription:
      "Build fast, scalable interfaces using modern Next.js features and patterns",
    progress: "90",
  },
  {
    icon: TailwindIcon,
    title: "Tailwind CSS / Shadcn UI",
    discription:
      "Create sleek, modern UIs with fast, utility-driven styling systems",
    progress: "90",
  },
  {
    icon: GitHubIcon,
    title: "Git / GitHub",
    discription:
      "Maintain clean workflows and seamless collaboration using modern version control",
    progress: "80",
  },
  {
    icon: DisConnectICon,
    title: "REST APIs / npm",
    discription:
      "Build connected apps with efficient API integration and dependency management",
    progress: "80",
  },
  {
    icon: HtmlIcon,
    title: "HTML5",
    discription: "Build semantic, accessible, and SEO-friendly web structures",
    progress: "95",
  },
  {
    icon: CssIcon,
    title: "CSS3",
    discription:
      "Design responsive layouts with modern CSS features and best practices",
    progress: "90",
  },
  {
    icon: ResponsiveIcon,
    title: "Responsive Design",
    discription:
      "Create fully responsive layouts that adapt seamlessly across all devices",
    progress: "90",
  },
  {
    icon: PerformanceIcon,
    title: "Performance Optimization",
    discription:
      "Optimize rendering, loading, and bundle size for faster web experiences",
    progress: "75",
  },
  {
    icon: ApiIcon,
    title: "API Integration",
    discription:
      "Handle async data, error states, and loading flows efficiently",
    progress: "85",
  },
  {
    icon: ToolsIcon,
    title: "Frontend Tooling",
    discription:
      "Work with modern tools like Vite, ESLint, Prettier, and build pipelines",
    progress: "80",
  },
  {
    icon: FigmaIcon,
    title: "UI/UX Implementation",
    discription:
      "Translate Figma and design systems into pixel-perfect interfaces",
    progress: "85",
  },
];

export default function Skills({ id }) {
  return (
    <section id={id} className="scroll-mt-[80px]">
      <div className="flex flex-col gap-20">
        <div className="w-full flex justify-center">
          <p className="text-5xl font-bold">Skills</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-4 gap-6 w-full">
            {skills.map((skill) => (
              <Skill
                key={skill.title}
                Icon={skill.icon}
                title={skill.title}
                discription={skill.discription}
                persent={skill.progress}
              />
            ))}
          </div>
          <InfiniteScrollLine />
        </div>
      </div>
    </section>
  );
}
