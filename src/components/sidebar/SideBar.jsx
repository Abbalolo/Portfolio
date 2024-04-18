import { FiSmartphone } from "react-icons/fi"; 
import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineProject } from 'react-icons/ai';
import { GiStrikingBalls } from 'react-icons/gi';
import { RiHome5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';




function SideBar() {
  return (
    <div className="hidden md:flex flex-col gap-7 border fixed top-[90.5px] left-7 h-[80vh] border-gray-600 dark:border-gray-300 p-3 rounded-md ">
      <Link
        to={"/"}
        className="flex items-center gap-2 hover:text-blue-500 transition-all duration-300 ease-in-out"
      >
        <RiHome5Line className="flex items-center gap-2 text-[20px]" />
        <p className="text-[15px]">Home</p>
      </Link>
      <Link
        to={"/skills"}
        className="flex items-center gap-2  hover:text-blue-500 transition-all duration-300 ease-in-out"
      >
        <GiStrikingBalls className="flex items-center gap-2 text-[20px]" />
        <p className="text-[15px]">Skills</p>
      </Link>
      <Link
        to={"/project"}
        className="flex items-center gap-2  hover:text-blue-500 transition-all duration-300 ease-in-out"
      >
        <AiOutlineProject className="flex items-center gap-2 text-[20px]" />
        <p className="text-[15px]">Projects</p>
      </Link>
      <Link
        to={"/contact"}
        className="flex items-center gap-2  hover:text-blue-500 transition-all duration-300 ease-in-out"
      >
        <FiSmartphone className="flex items-center gap-2 text-[20px]" />
        <p className="text-[15px]">Contact</p>
      </Link>

      <div className="flex flex-col text-2xl  justify-center items-center gap-5  text-gray-600 mt-14 ">
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
        <Link target="_blank" to="https://github.com/Abbalolo">
          <AiFillGithub className="hover:text-white dark:hover:text-black duration-300" />
        </Link>
        <Link
          target="_blank"
          to="https://instagram.com/lohloh009?igshid=OGQ5ZDc2ODk2ZA=="
        >
          <AiFillInstagram className="hover:text-red-300 duration-300" />
        </Link>
      </div>
    </div>
  );
}

export default SideBar