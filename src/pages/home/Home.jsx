
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import clear from "../../assets/clear.png";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "../about/About";
import Services from "../services/Services";
import Project from "../project/Project";
import Contact from "../contact/Contact";



function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <section className="text-center mb-10 px-10 md:mx-16 antialiased dark:bg-[#121212] dark:text-white">
      <div className="lg:flex  lg:items lg:h-full lg:w-full lg:flex-row-reverse">
        <div
          data-aos="fade-in"
          className="relative bg-gradient-to-b from-blue-600 to-teal-500 rounded-full h-80 w-80 mb-20 mx-auto overflow-hidden dark:bg-gradient-to-b dark:from-blue-600 lg:h-full hidden md:flex"
        >
          <img
            data-aos="fade-up"
            className="w-70 h-50 object-contain mx-auto dark:grayscale"
            src={clear}
            alt="nigga"
          />
        </div>
        <div className="lg:w-3/6 lg:text-left">
          <h2
            data-aos="zoom-in"
            className="text-4xl text-blue-700 font-medium md:text-5xl lg:text-start mb-5"
          >
            Transformative skills that elevate your digital presence to new
            heights
          </h2>
          <Typed
            className="font-extrabold  lg:text-1x "
            strings={["A Front End Developer", "A Web developer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p
            data-aos="zoom-left"
            className="lg:text-start py-5 text-md text-gray-800 leading-8 dark:text-gray-400"
          >
            As a frontend developer, I strive to create immersive digital
            experiences that captivate users and push the boundaries of what's
            possible on the web.
          </p>
          <button
            data-aos="zoom-in"
            className="block mx-auto md:m-0 bg-gradient-to-r duration-300 hover:text-red-500 hover:scale-110 shadow-md from-blue-700 to-teal-600 py-3 px-7 "
          >
            <Link className="text-white" to="/">Hire Me</Link>
          </button>
        </div>
      </div>

      <div
        data-aos="zoom-right"
        className="flex text-5xl mt-5 justify-center gap-4 py-3 text-gray-600"
      >
        <Link target="_blank" to="https://web.facebook.com/lolo.fundz/">
          <AiFillFacebook className="hover:text-blue-700 duration-300" />
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/ibrahim-lawal-2772a8243/"
        >
          <AiFillLinkedin className="hover:text-blue-500 duration-300" />
        </Link>
        <Link target="_blank" to="https://twitter.com/Ibrahim46284657">
          <AiFillTwitterCircle className="hover:text-blue-300 duration-300" />
        </Link>
      </div>

    </section>
    <About/>
    <Services/>
    <Project/>
    <Contact/>
    </>
  );
}

export default Home;
