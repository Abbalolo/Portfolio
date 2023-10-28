import { AiFillGithub } from "react-icons/ai"; 
import { BiGitBranch } from "react-icons/bi"; 
import { FaNodeJs } from "react-icons/fa"; 
import { RiReactjsFill } from "react-icons/ri"; 
import { SiTailwindcss } from "react-icons/si"; 
import { SiJavascript } from "react-icons/si"; 
import { DiCss3Full } from "react-icons/di"; 
import { AiOutlineHtml5 } from "react-icons/ai"; 
import { CgGames } from "react-icons/cg"; 
import { GiSkills } from "react-icons/gi"; 
import { GiGraduateCap } from "react-icons/gi"; 
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { BsFiletypeScss } from "react-icons/bs";
import Abba from "./Abba.jpeg";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function About() {
 const contents = [
  {
    id: 1,
    name: "Education",
    description: ` Certainly, here's a concise education paragraph for your Computer Science diploma with a GPA of 3.34:

    "I hold a diploma in Computer Science, a testament to my dedication and passion for the world of technology. Throughout my academic journey, I consistently strived for excellence, culminating in a commendable GPA of 3.34. This educational foundation has equipped me with a strong understanding of computer science principles, programming languages, and problem-solving skills, which I enthusiastically apply to my work as a frontend developer.`,
    school: "Kano State Polytechnic (School Of Tecknology), 2021 to 2022",
    icon: <GiGraduateCap className="ml-3 text-xl"/>

   
  },
  {
    id: 2,
    name: "Technical Skills",
    description: "As a frontend developer, I bring a versatile skill set to the table, proficient in HTML, CSS, JavaScript, Tailwind CSS, and React. With a passion for creating captivating and responsive user interfaces, I harness these technologies to transform design concepts into seamless web experiences. Whether it's crafting elegant layouts with HTML and CSS or building interactive web applications with React, I'm dedicated to delivering engaging and user-friendly solutions that captivate audiences and drive digital innovation.",
    languages: ["HTML", "CSS", "JavaScrip", "Tailwind", "React"],
    icon: <GiSkills className="ml-3 text-xl" />

   
  },
  {
    id: 3,
    name: "What I Love Doing After Code",
    description: `I have a fervent love for various interests outside of coding, and one of my great joys is immersing myself in the world of gaming, with FIFA being a particular favorite. The thrill of competitive matches, the strategic gameplay, and the sense of achievement that comes with each victory resonate deeply with me. It's not just about playing games; it's about the camaraderie and excitement they bring, which often fuels my creativity and determination in my frontend development projects.`,
    icon: <CgGames className="ml-3 text-xl"/>

   
  },
 ]


  useEffect(() => {
    AOS.init()
  }, [])



  return (
    <section className="lg:px-16 px-5 md:pb-10 pb-20 md:px-10 h-full mb-10 bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454] overflow-y-hidden">
      <h2
        data-aos="fade-left"
        className="text-3xl pt-5  md:text-4xl font-bold text-blue-500"
      >
        About
      </h2>
      <div className="mt-10">
        <h3 className="text-blue-500 text-2xl font-extrabold">Skills</h3>
        <div className="mt-3 flex flex-wrap gap-3 ">
          <div className="bg-slate-900 dark:bg-transparent  p-3 flex items-center dark:bg-[#f9f7f6] dark:border hover:border hover:border-slate-500  rounded-sm">
            <AiOutlineHtml5 className="text-3xl" />
            <span className="text-[#f9f7f6] text-center p-1 w-full dark:text-[#545454]  ">
              Html
            </span>
          </div>
          <div className="bg-slate-900 dark:bg-transparent  p-3 flex  items-center dark:bg-[#f9f7f6] dark:border hover:border hover:border-slate-500  rounded-sm">
            <DiCss3Full className="text-3xl" />
            <span className="text-[#f9f7f6] text-center p-1 w-full dark:text-[#545454] ">
              Css
            </span>
          </div>

          <div className="bg-slate-900 dark:bg-transparent  p-3 flex  items-center dark:bg-[#f9f7f6] dark:border hover:border hover:border-slate-500  rounded-sm">
            <SiJavascript className="text-3xl" />
            <span className="text-[#f9f7f6] text-center p-1 w-full dark:text-[#545454] ">
              Javascript
            </span>
          </div>

          <div className="bg-slate-900 dark:bg-transparent  p-3 flex  items-center dark:bg-[#f9f7f6] dark:border hover:border hover:border-slate-500  rounded-sm">
            <SiTailwindcss className="text-3xl" />
            <span className="text-[#f9f7f6] text-center p-1 w-full dark:text-[#545454] ">
              Tailwind
            </span>
          </div>
          <div className="bg-slate-900 dark:bg-transparent  p-3 flex  items-center dark:bg-neutral-50 dark:border hover:border hover:border-slate-500 rounded-sm">
            <RiReactjsFill className="text-3xl" />
            <span className="text-[#f9f7f6] text-center w-full dark:text-[#545454] ">
              React
            </span>
          </div>
          <div className="bg-slate-900 dark:bg-transparent  p-3 flex  items-center dark:bg-neutral-50 dark:border hover:border hover:border-slate-500 rounded-sm">
            <FaNodeJs className="text-3xl" />
            <span className="text-[#f9f7f6] text-center  w-full dark:text-[#545454] ">
              NodeJs
            </span>
          </div>
          <div className="bg-slate-900 dark:bg-transparent p-2 flex  items-center dark:bg-neutral-50 dark:border hover:border hover:border-slate-500 rounded-sm">
            <AiFillGithub className="text-3xl" />
            <span className="text-[#f9f7f6] text-center  w-full dark:text-[#545454] ">
              Git/Github
            </span>
          </div>
        </div>
      </div>
      <article className="">
        {contents.map((content) => (
          <ul
            key={content.id}
            className="list-none relative before:content-[''] before:bg-gray-400 before:inline-block before:absolute before:left-0 before:w-[1px] before:top-[4px] before:h-screen before:z-50"
          >
            <li className="mr-5 before:content-['']  before:bg-[#212529] dark:before:bg-[#f9f7f6] before:inline-block before:absolute before:left-[-7px] before:w-[15px] before:h-[15px] before:z-50 before:mt-[3px] before:border before:border-gray-400 before:rounded-full mt-[3rem] pb-[3rem] pl-[20px]">
              <h2 className="text-xl flex items-center font-extrabold">
                {content.name}
                {content.icon}
              </h2>
              <p className="text-[#f9f7f6] dark:text-[#545454]">
                {content.description}
              </p>
              <h4 className="mt-3 font-extrabold">{content.school}</h4>
            </li>
          </ul>
        ))}
      </article>
    </section>
  );
}

export default About;
