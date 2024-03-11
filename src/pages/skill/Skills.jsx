import { FaFigma } from "react-icons/fa"; 
import { TbBrandVite } from "react-icons/tb"; 
import { TbBrandGithubCopilot } from "react-icons/tb"; 
import { FaNpm } from "react-icons/fa"; 
import { TbBrandVscode } from "react-icons/tb"; 
import { SiPostman } from "react-icons/si"; 
import { SiTypescript } from "react-icons/si"; 
import { AiOutlineRobot } from "react-icons/ai"; 
import { SiFireship } from "react-icons/si"; 
import { TbBrandNextjs } from "react-icons/tb";
import { SiDaisyui } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { DiCss3Full } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills() {
  const contents = [
    {
      id: 1,
      name: "Education",
      description: ` Certainly, here's a concise education paragraph for your Computer Science diploma with a GPA of 3.34:

    "I hold a diploma in Computer Science, a testament to my dedication and passion for the world of technology. Throughout my academic journey, I consistently strived for excellence, culminating in a commendable GPA of 3.34. This educational foundation has equipped me with a strong understanding of computer science principles, programming languages, and problem-solving skills, which I enthusiastically apply to my work as a frontend developer.`,
      school: "Kano State Polytechnic (School Of Tecknology), 2021 to 2022",
      icon: <GiGraduateCap className="ml-3 text-xl" />,
    },
    {
      id: 2,
      name: "Technical Skills",
      description:
        "As a frontend developer, I bring a versatile skill set to the table, proficient in HTML, CSS, JavaScript, Tailwind CSS, and React. With a passion for creating captivating and responsive user interfaces, I harness these technologies to transform design concepts into seamless web experiences. Whether it's crafting elegant layouts with HTML and CSS or building interactive web applications with React, I'm dedicated to delivering engaging and user-friendly solutions that captivate audiences and drive digital innovation.",
      languages: ["HTML", "CSS", "JavaScrip", "Tailwind", "React"],
      icon: <GiSkills className="ml-3 text-xl" />,
    },
    {
      id: 3,
      name: "What I Love Doing After Code",
      description: `I have a fervent love for various interests outside of coding, and one of my great joys is immersing myself in the world of gaming, with FIFA being a particular favorite. The thrill of competitive matches, the strategic gameplay, and the sense of achievement that comes with each victory resonate deeply with me. It's not just about playing games; it's about the camaraderie and excitement they bring, which often fuels my creativity and determination in my frontend development projects.`,
      icon: <CgGames className="ml-3 text-xl" />,
    },
  ];

  const myStacks = [
    {
      id: 1,
      name: "Html",
      icon: <AiOutlineHtml5/>,
    },
    {
      id: 2,
      name: "Css",
      icon: <DiCss3Full/>,
    },
    {
      id: 3,
      name: "Javascript",
      icon: <SiJavascript/>,
    },
    {
      id: 4,
      name: "Reactjs",
      icon: <RiReactjsFill/>,
    },
    {
      id: 5,
      name: "Nodejs",
      icon: <FaNodeJs/>,
    },
    {
      id: 6,
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      id: 7,
      name: "MongoSB",
      icon: <FaNodeJs/>,
    },
  ];

  const framLib = [
    {
      id: 1,
      name: "Reactjs",
      icon: <RiReactjsFill/>,
    },
    {
      id: 2,
      name: "Daisy ui",
      icon: <SiDaisyui/>,
    },
    {
      id: 3,
      name: "Tailwind",
      icon: <SiTailwindcss/>,
    },
    {
      id: 4,
      name: "Nextjs",
      icon: <TbBrandNextjs/>,
    },
  ];
  const tech = [
    {
      id: 1,
      name: "Git / Github",
      icon: <AiFillGithub/>,
    },
    {
      id: 2,
      name: "Firebase",
      icon: <SiFireship/>,
    },
    {
      id: 3,
      name: "Chatgpt",
      icon:<AiOutlineRobot />,
    },
   
    {
      id: 4,
      name: "Postman",
      icon: <SiPostman />,
    },
    {
      id: 5,
      name: "VsCode",
      icon: <TbBrandVscode />,
    },
    {
      id: 6,
      name: "Npm",
      icon: <FaNpm />,
    },
    {
      id: 7,
      name: "Copilot",
      icon:<TbBrandGithubCopilot />,
    },
    {
      id: 8,
      name: "Vite",
      icon:<TbBrandVite />,
    },
    {
      id: 9,
      name: "Figma",
      icon:<FaFigma />,
    },
   
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="md:w-[70%] lg:w-[85%] w-full lg:h-screen">
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="w-full flex flex-col  border border-gray-600 dark:border-gray-300 p-5 rounded-md">
          <h3 className="text-blue-500 text-2xl py-4 font-extrabold text-center">
            Teck Stack
          </h3>
          <div className=" flex flex-wrap gap-3 ">
            {myStacks.map((stack, index) => (
              <div
                key={index}
                className="dark:text-black  dark:bg-transparent  p-3 flex items-center dark:bg-[#f9f7f6] dark:border dark:hover:border-gray-400 dark:border-gray-300 border-gray-600 border  hover:border hover:border-slate-500  rounded-sm gap-2 "
              >
                <p className="text-3xl dark:text-black   ">{stack.icon}</p>
                <span className="text-[#f9f7f6] text-center p-1 w-full dark:text-black ">
                  {stack.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col  border border-gray-600 dark:border-gray-300 p-5 rounded-md">
          <h3 className="text-blue-500 text-2xl py-4 font-extrabold text-center">
            Framewords / Library
          </h3>
          <div className="mt-3 flex flex-wrap gap-3 ">
            {framLib.map((lab, i) => (
              <div
                key={i}
                className="dark:text-black  dark:bg-transparent  p-3 flex items-center dark:bg-[#f9f7f6] dark:border dark:hover:border-gray-400 dark:border-gray-300 border-gray-600 border  hover:border hover:border-slate-500  rounded-sm gap-2 "
              >
                <p className="text-3xl dark:text-black ">{lab.icon}</p>
                <span className="text-[#f9f7f6] text-center p-1 w-full dark:text-black ">
                  {lab.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col  justify-center border border-gray-600 dark:border-gray-300 p-5 rounded-md">
          <h3 className="text-blue-500 text-2xl py-4 font-extrabold text-center">
            Tools & Technologies
          </h3>
          <div className="mt-3 flex flex-wrap gap-3 ">
            {tech.map((tk, i) => (
              <div
                key={i}
                className="dark:text-black  dark:bg-transparent  p-3 flex items-center dark:bg-[#f9f7f6] dark:border dark:hover:border-gray-400 dark:border-gray-300 border-gray-600 border  hover:border hover:border-slate-500  rounded-sm gap-2 "
              >
                <p className="text-3xl dark:text-black ">{tk.icon}</p>
                <span className="text-[#f9f7f6] text-center p-1 w-full dark:text-black ">
                  {tk.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <article className="">
        {contents.map((content) => (
          <ul
            key={content.id}
            className="list-none relative before:content-[''] before:bg-gray-400 before:inline-block before:absolute before:left-0 before:w-[1px] before:top-[4px] before:h-screen "
          >
            <li className="mr-5 before:content-['']  before:bg-[#212529] dark:before:bg-[#f9f7f6] before:inline-block before:absolute before:left-[-7px] before:w-[15px] before:h-[15px]  before:mt-[3px] before:border before:border-gray-400 before:rounded-full mt-[3rem] pb-[3rem] pl-[20px]">
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
      </article> */}
    </section>
  );
}

export default Skills;
