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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quaerat ad nemo fuga quam animi. Aspernatur nihil eos excepturi cum obcaecati. Fuga quisquam laborum possimus hic nemo. Consectetur, culpa dignissimos?",
    icon: <GiGraduateCap/>
  }
 ]


  useEffect(() => {
    AOS.init()
  }, [])



  return (
    <section className="lg:mx-16 mx-5 md:mb-10 md:mx-10 h-full">
       <h2 data-aos="fade-left" className="text-3xl mt-5  md:text-4xl font-bold text-blue-500">About</h2>
        
       <article>
        {contents.map((content) => (
     <ul key={content.id} className="list-none relative before:content-[''] before:bg-gray-400 before:inline-block before:absolute before:left-0 before:w-[1px] before:top-[4px] before:h-full before:z-50">
    <li className="mr-5 before:content-['']  before:bg-[#212529] dark:before:bg-[#f9f7f6] before:inline-block before:absolute before:left-[-7px] before:w-[15px] before:h-[15px] before:z-50 before:mt-[3px] before:border before:border-gray-400 before:rounded-full mt-[3rem] mb-[3rem] pl-[20px]">
      <h2 className="text-lg flex items-center">{content.name}{content.icon}</h2>
      <p className="text-[#f9f7f6] dark:text-[#545454]">{content.description}</p>
    </li>
   
  </ul>
  ))}
</article>

    </section>
  );
}

export default About;
