import Image from "next/image";
import {
  FaGithub as GitHubIcon,
  FaExternalLinkAlt as LinkIcon,
} from "react-icons/fa";
import ToolTip from "../../components/Tooltip/TooltipWraper";
import Link from "next/link";
export default function Project({
  image,
  name,
  tools,
  discription,
  code,
  link,
}) {
  return (
    <div
      className="
  group
  flex flex-col justify-between
  bg-[#f0f1f2] w-full
  overflow-hidden
  transition-transform duration-300 ease-out
  hover:-translate-y-2
  cursor-pointer
  shadow-md
  rounded-[10px]
"
    >
      <div className="w-full h-1/2 overflow-hidden">
        <Image
          className="
        w-full h-full object-cover
        transition-transform duration-500 ease-out
        group-hover:scale-110
      "
          alt={name}
          src={image}
        />
      </div>
      <div className="flex flex-col p-3 gap-3">
        <h1 className="text-xl font-semibold ">{name}</h1>
        <p className="text-sm opacity-80 line-clamp-2">{discription}</p>
        <div className="flex gap-2">
          {tools.map((tool) => (
            <ToolTip text={tool.name} key={tool.name}>
              <div className="px-3 py-1 text-sm  bg-white rounded-lg border">
                <tool.icon />
              </div>
            </ToolTip>
          ))}
        </div>
      </div>
      <div className="flex gap-3 p-3 ">
        <Link
          href={code}
          target="_blank"
          rel="nooppener noreferrer"
          className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
        >
          <GitHubIcon />
          <p>Code</p>
        </Link>
        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="nooppener noreferrer"
            className="flex gap-2 items-center text-sm hover:text-blue-400 transition-colors"
          >
            <LinkIcon />
            <p>Live Demo</p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
