import Link from "next/link";
import {
  FaUser as UserIcon,
  FaBirthdayCake as BirthDayCackIcon,
  FaPhone as PhoneIcon,
  FaGithub as GitHubIcon,
  FaLinkedin as LinkedinIcon,
  FaFacebook as FaceBookIcon,
} from "react-icons/fa";
import { MdEmail as EmailIcon } from "react-icons/md";
export default function AboutMe({ id }) {
  return (
    <section id={id} className="scroll-mt-[80px]">
      <div className="flex flex-col  gap-20 w-full">
        <div className="w-full flex justify-center">
          <p className="text-5xl font-bold">About me</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <div className="p-5 leading-relaxed w-full md:w-[70%] bg-[#f0f1f2] rounded-4xl">
            I am a motivated Frontend Developer with hands-on experience
            building modern, high-performance web applications using React.js
            and Next.js. I work confidently with JavaScript (ES6+) and
            TypeScript, creating clean, scalable code and responsive user
            interfaces using HTML5, CSS3, Tailwind CSS, and Styled Components. I
            have experience implementing end-to-end testing with Playwright to
            ensure application reliability and quality. I use Git and GitHub for
            version control, integrate REST APIs, and develop efficiently using
            tools like VS Code. I collaborate closely with backend developers
            and UI/UX designers, adapt quickly to new technologies, and bring
            strong attention to detail, teamwork, and a passion for continuous
            learning.
          </div>
          <div className="flex flex-col gap-3 p-5 leading-relaxed w-full md:w-[30%] bg-[#f0f1f2] rounded-4xl">
            <div className="flex gap-3">
              <UserIcon className="text-[#8487bf]" />
              <p>Abdallah Ameer</p>
            </div>
            <div className="flex gap-3">
              <BirthDayCackIcon className="text-[#8487bf]" />
              <p>22</p>
            </div>
            <div className="flex gap-3">
              <EmailIcon className="text-[#8487bf]" />
              <p>abdallah.ameer.taha@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <PhoneIcon className="text-[#8487bf]" />
              <p>+20 11 1839 5489</p>
            </div>
            <div className="flex gap-3">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/abdallahameer"}
              >
                <GitHubIcon className="text-xl" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.linkedin.com/in/abdallah-taha-38b472231/"}
              >
                <LinkedinIcon className="text-xl" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.facebook.com/profile.php?id=61556679148957"}
              >
                <FaceBookIcon className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
