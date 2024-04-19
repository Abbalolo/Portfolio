
import { AiOutlineMail } from "react-icons/ai"; 
import { GiSkills } from "react-icons/gi"; 
import { BiCodeAlt } from "react-icons/bi"; 
import { CgArrowLongRight } from "react-icons/cg"; 
import { AiOutlineGift } from "react-icons/ai"; 
import React from "react";
import dark from "../../assets/dark.jpg"
import light from "../../assets/light.jpg"
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="flex lg:ml-20 md:ml-28 flex-col md:flex-row md:items-start   md:justify-start md:w-[70%] lg:w-[80%] w-full gap-3"
      data-aos="fade-up"
    >
      <div className=" flex flex-col  justify-center border border-gray-600 dark:border-gray-300 p-5 rounded-md">
        {/* lg:flex  lg:items lg:h-full lg:w-full lg:flex-row-reverse */}
        <div
          data-aos="fade-in"
          className="relative flex dark:hidden  bg-gradient-to-b from-blue-500 to-teal-500 rounded-lg h-80 w-80 mb-10 mx-auto overflow-hidden dark:bg-gradient-to-b dark:from-blue-500 lg:h-full  "
        >
          <img
            data-aos="fade-up"
            className="w-70 h-50 object-contain mx-auto dark:grayscale "
            src={dark}
            alt="nigga"
          />
          <img
            data-aos="fade-up"
            className="w-70 h-50 object-contain mx-auto  "
            src={light}
            alt="nigga"
          />
        </div>

        <div
          data-aos="fade-in"
          className="relative hidden dark:flex  bg-gradient-to-b from-blue-500 to-teal-500 rounded-lg h-80 w-80 mb-10 mx-auto overflow-hidden dark:bg-gradient-to-b dark:from-blue-500 lg:h-full  "
        >
          <img
            data-aos="fade-up"
            className="w-70 h-50 object-contain mx-auto  "
            src={light}
            alt="nigga"
          />
        </div>
        <p className="text-center font-semibold dark:text-black text-[#f9f7f6]">
          This is Me :)
        </p>
        {/* 
        <div class="my-background relative">
          <div class="after:absolute after:content[''] after:w-1 after:h-[80px] after:bg-gray-700 after:rounded-lg  after:left-[49%] after:-bottom-3  after:animate-bounce after:transform after:-translate-x-1/2"></div>
        </div> */}

        <div className="  border border-gray-600 dark:border-gray-300 p-5 mt-5 rounded-md">
          <p className="lg:text-start my-5 dark:text-black text-[#f9f7f6] leading-8 ">
            Transformative skills that elevate your digital presence to new
            heights.
          </p>
          <ul data-aos="zoom-left" className="p-2 flex flex-col gap-3">
            <li className="list-disc dark:text-black text-[#f9f7f6]">
              Full Stack{" "}
              <span className="font-semibold text-gray-400 dark:text-gray-600 italic">
                Software Develeoper{" "}
              </span>{" "}
              with a passion for{" "}
              <span className="font-semibold text-gray-400 dark:text-gray-600 italic">
                Frontend Develpment.
              </span>{" "}
            </li>
            <li className="list-disc dark:text-black text-[#f9f7f6]">
              Completed Computer Science{" "}
              <span className="font-semibold text-gray-400 dark:text-gray-600 italic">
                National Diploma
              </span>{" "}
              in Kano Polytechnic (KanoPoly).
            </li>
            <li className="list-disc dark:text-black text-[#f9f7f6]">
              Currently pursuing Computer Science{" "}
              <span className="font-semibold text-gray-400 dark:text-gray-600 italic">
                Higher Nation Diploma
              </span>{" "}
              in Kano Polytechnic (KanoPoly).
            </li>
            <li className="list-disc dark:text-black text-[#f9f7f6]">
              Hach-a-thons & StartUp Enthusiast.{" "}
            </li>

            <li className="list-disc dark:text-black text-[#f9f7f6]">
              Love to playing{" "}
              <span className="font-semibold text-gray-300 dark:text-gray-600 italic">
                Video Game (Fifa)
              </span>{" "}
              with friends when bug free.{" "}
            </li>
          </ul>
          <div className=" md:m-0 my-5">
            <button
              data-aos="zoom-in"
              className="block  bg-gradient-to-r duration-300 transition-all  hover:scale-110 shadow-md from-blue-700 to-teal-600 py-3 px-5  rounded-md "
            >
              <Link className="" to="/contact">
                Hire Me
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-3 justify-center items-center w-full border  border-gray-600 dark:border-gray-300 p-5 rounded-md mt-5 md:mt-0 dark:text-black text-[#f9f7f6]">
          <h2 className="font-semibold ">Explor More</h2>
          <Link
            to={"/experience"}
            className="flex border rounded-md border-gray-600 dark:border-gray-300 p-2 w-full  gap-3 justify-between items-center hover:bg-gray-800 dark:hover:bg-slate-100 "
          >
            <div className="flex  gap-3 items-center">
              <AiOutlineGift className="text-[20px] dark:text-black text-[#f9f7f6]" />
              <p className="flex  gap-3 items-center">Experience</p>
            </div>
            <CgArrowLongRight className="text-[20px] dark:text-black text-[#f9f7f6]" />
          </Link>
          <Link
            to={"/project"}
            className="flex border rounded-md border-gray-600 dark:border-gray-300 p-2 w-full  gap-3 justify-between items-center hover:bg-gray-800 dark:hover:bg-slate-100"
          >
            <div className="flex  gap-3 items-center">
              <BiCodeAlt className="text-[20px] dark:text-black text-[#f9f7f6]" />
              <p className="flex  gap-3 items-center dark:text-black text-[#f9f7f6]">
                Projects
              </p>
            </div>
            <CgArrowLongRight className="text-[20px] dark:text-black text-[#f9f7f6]" />
          </Link>
          <Link
            to={"/skills"}
            className="flex border rounded-md border-gray-600 dark:border-gray-300 p-2 w-full  gap-3 justify-between items-center hover:bg-gray-800 dark:hover:bg-slate-100"
          >
            <div className="flex  gap-3 items-center">
              <GiSkills className="text-[20px] dark:text-black text-[#f9f7f6]" />
              <p className="flex  gap-3 items-center">Skills</p>
            </div>
            <CgArrowLongRight className="text-[20px] dark:text-black text-[#f9f7f6]" />
          </Link>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center w-full border  border-gray-600 dark:border-gray-300 p-5 rounded-md mt-5 md:mt-0 dark:text-black text-[#f9f7f6]">
          <h2 className="font-bold">Let's Connect!</h2>
          <div className=" flex flex-col items-start gap-3">
            <p>Do you want to know more about my work ?</p>
            <p>or do you just want to build some cool project together?</p>
            <p>
              Whatever it may be, dont hesitate to{" "}
              <span className="font-semibold text-gray-300 dark:text-gray-600 italic">
                HIT ME UP
              </span>
            </p>
            <p>Here is my Email :</p>
            <button
              data-aos="zoom-in"
              className="flex items-center gap-3  bg-gradient-to-r duration-300 transition-all  hover:scale-110 shadow-md from-blue-700 to-teal-600 py-3 px-3  rounded-md "
            >abbalolo360@gmail.com <AiOutlineMail /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
