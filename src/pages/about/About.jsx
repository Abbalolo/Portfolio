import { CgGames } from "react-icons/cg"; 
import { GiSkills } from "react-icons/gi"; 
import { GiGraduateCap } from "react-icons/gi"; 
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
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
    <section  className="lg:mx-16 mx-5 md:mb-10 md:mx-10 h-full">
       <h2 data-aos="fade-left" className="text-3xl mt-5  md:text-4xl font-bold text-blue-500">About</h2>
        <div className="mt-5">
          <h3 className="text-blue-500">Skills</h3>
          <div className="mt-5 flex gap-3 ">
          <span className="text-[#f9f7f6] p-1 dark:text-[#545454] bg-slate-800 dark:bg-[#f9f7f6] dark:border  rounded-sm">Html</span>
          <span className="text-[#f9f7f6] p-1 dark:text-[#545454] bg-slate-800 dark:bg-[#f9f7f6] dark:border  rounded-sm">Css</span>
          <span className="text-[#f9f7f6] p-1 dark:text-[#545454] bg-slate-800 dark:bg-[#f9f7f6] dark:border  rounded-sm">Javascript</span>
          <span className="text-[#f9f7f6] p-1 dark:text-[#545454] bg-slate-800 dark:bg-[#f9f7f6] dark:border  rounded-sm">Tailwind</span>
          <span className="text-[#f9f7f6] p-1 dark:text-[#545454] bg-slate-800 dark:bg-neutral-50 dark:border rounded-sm">React</span>
        </div>
        </div>
       <article>
        {contents.map((content) => (
     <ul key={content.id} className="list-none relative before:content-[''] before:bg-gray-400 before:inline-block before:absolute before:left-0 before:w-[1px] before:top-[4px] before:h-full before:z-50">
    <li className="mr-5 before:content-['']  before:bg-[#212529] dark:before:bg-[#f9f7f6] before:inline-block before:absolute before:left-[-7px] before:w-[15px] before:h-[15px] before:z-50 before:mt-[3px] before:border before:border-gray-400 before:rounded-full mt-[3rem] mb-[3rem] pl-[20px]">
      <h2 className="text-xl flex items-center font-extrabold">{content.name}{content.icon}</h2>
      <p className="text-[#f9f7f6] dark:text-[#545454]">{content.description}</p>
      <h4 className="mt-3 font-extrabold">{content.school}</h4>
    </li>
   
  </ul>
  ))}
</article>

    </section>
  );
}

export default About;
