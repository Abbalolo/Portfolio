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
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="lg:mx-16 mx-5 md:mb-10 md:mx-10 md:mt-10 h-full ">
       <h2 data-aos="fade-left" className="text-3xl mt-5 mb-5 md:text-3xl text-blue-700">About</h2>
        <div className="md:flex md:gap-8">
        <div  className="md:w-10/12 lg:w-96 ">
          <img data-aos="zoom-in"
            className="w-full h-full object-contain dark:grayscale"
            src={Abba}
            alt="ibrahim"
          />
        </div>
        <div className="">
          <div className="mt-5 ">
            <div>
              <p data-aos="fade-right" className=" leading-7 text-gray-800 dark:text-gray-400">
                Hello there! I am Ibrahim Lawal Abba, a dedicated and
                enthusiastic web developer. With a deep passion for technology
                and an unwavering commitment to creating exceptional digital
                experiences, I thrive in the ever-evolving world of web
                development. In this short blog, I would like to take a moment
                to share my journey and highlight what makes me tick as a web
                developer.
              </p>
              <div className="hidden md:block">
                <div className="font-thin text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 mb-2 mt-2 rounded-sm duration-300 cursor-pointer">Html</div>
                <div className="font-thin text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border ml-2 p-1 mb-2 mt-2 rounded-sm duration-300 cursor-pointer">Css</div>
                <div className="font-thin text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border ml-2 p-1 mb-2 mt-2 rounded-sm duration-300 cursor-pointer">Javascript</div>
                <div className="font-thin text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border ml-2 p-1 mb-2 mt-2 rounded-sm duration-300 cursor-pointer">React</div>
                <div className="font-thin text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border ml-2 p-1 mb-2 mt-2 rounded-sm">Tailwind</div>
                <div className="font-thin text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 mb-2 rounded-sm duration-300 cursor-pointer">Bootsrap</div>
              </div>
            </div>
          </div>
        </div>
        </div>
        

        {/* <div className="dark:grayscale brightness-75 mt-5">
          <img data-aos="fade-in"
            className="w-full h-full object-contain md:w-9/12 lg:hidden"
            src={Abba}
            alt="ibrahim"
          />
        </div> */}

        <div className="mt-10 md:hidden">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-5 md:text-center lg:mb-5">
            Skills
          </h2>
            <div data-aos="fade-in" className="grid grid-cols-3 lg:grid-cols-7 gap-10 md:place-items-center mb-10 ">
              <AiFillHtml5 className="dark:text-gray-500 text-orange-600 hover:scale-150 duration-300" size={60} />
              <FaCss3 className="dark:text-gray-500 text-blue-600 hover:scale-150 duration-300" size={60} />
              <DiJavascript1 className="dark:text-gray-500 text-yellow-400 hover:scale-150 duration-300" size={60} />
              <BsFiletypeScss className="dark:text-gray-500 text-red-500 hover:scale-150 duration-300 " size={60} />
              <SiTailwindcss className="dark:text-gray-500 text-blue-400 hover:scale-150 duration-300" size={60} />
              <FaReact className="dark:text-gray-500 text-blue-500 hover:scale-150 duration-300" size={60} />
            </div>
        </div>
    </section>
  );
}

export default About;
