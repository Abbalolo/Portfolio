import { BsArrowDown } from "react-icons/bs"; 
import React from 'react'


// import {
//     AiFillTwitterCircle,
//     AiFillLinkedin,
//     AiFillFacebook,
//   } from "react-icons/ai";
  import clear from "../../assets/clear.png";
  import { Link } from "react-router-dom";
  import Typed from "react-typed";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { useEffect } from "react";

function Hero() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className=" h-[87vh] mx-5 flex items-center flex-col justify-center md:mx-10 lg:mx-16">
      <div className="w-full flex  justify-center">
        {/* lg:flex  lg:items lg:h-full lg:w-full lg:flex-row-reverse */}
        {/* <div
        data-aos="fade-in"
        className="relative bg-gradient-to-b from-blue-500 to-teal-500 rounded-full h-80 w-80 mb-20 mx-auto overflow-hidden dark:bg-gradient-to-b dark:from-blue-500 lg:h-full md:hidden hidden md:flex"
      >
        <img
          data-aos="fade-up"
          className="w-70 h-50 object-contain mx-auto dark:grayscale"
          src={clear}
          alt="nigga"
        />
      </div> */}
        <div className="lg:w-4/5 lg:center">
          <h1 className="text-4xl text-blue-500 font-medium md:text-6xl lg:text-start">
            I'M IBRAHIM LAWAL ABBA
          </h1>
          <Typed
            className="font-bold  lg:text-1x "
            strings={["A Front End Developer", "A Web developer"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <h2
            data-aos="zoom-in"
            className="lg:text-start  text-md text-gray-800 leading-8 dark:text-gray-400"
          ></h2>
          <p
            data-aos="zoom-left"
            className="lg:text-start my-5 text-[#f9f7f6] dark:text-[#545454] leading-8"
          >
            Transformative skills that elevate your digital presence to new
            heights. <br />
            <span className="text-[#f9f7f6] dark:text-[#545454] font-bold">
              Ibrahim Lawal Abba
            </span>{" "}
            is a highly skilled front-end developer with a Computer Science
            diploma and extensive freelancing experience. They excel at
            translating design concepts into visually appealing, user-friendly
            websites, consistently delivering projects on time and exceeding
            client expectations. As a frontend developer, I strive to create
            immersive digital experiences that captivate users and push the
            boundaries of what's possible on the web.
          </p>
          <div className=" md:m-0 my-5">
            <button
              data-aos="zoom-in"
              className="block  bg-gradient-to-r duration-300 hover:text-red-500 hover:scale-110 shadow-md from-blue-700 to-teal-600 py-3 px-7 "
            >
              <Link className="text-[#f9f7f6]" to="/contact">
                Hire Me
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* <div className='w-full flex justify-end items-end translate-y-10'>
      <Link to="#About" className="flex items-center gap-3 animate-pulse">
      <p className="text-xl text-gray-400 cursor-pointer ">Next to About</p>
      <BsArrowDown className="text-2xl text-gray-400 cursor-pointer"/>
      </Link>
    </div> */}
    </section>
  );
}

export default Hero