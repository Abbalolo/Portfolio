import { CgDarkMode } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Blur from "../blur/Blur";
import Typed from "react-typed";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [theme, setTheme] = useState("light");

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Ibrahimresume.pdf"; 
  link.download = "Ibrahim_Lawal_Abba.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const handleToggleDarkMode = () => {
    const html = document.querySelector("html");
    if (theme === "light") {
      setTheme("dark");
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  };

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <header className={`bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454] px-3 py-3 lg:px-16  flex items-center justify-between fixed top-0 left-0 w-full z-10 `}>
      {openNav && <Blur handleNav={handleNav} />}
      <div className="flex items-center">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <h1 className="text-[20px] text-blue-500 font-semibold md:text-[30px] lg:text-start ">
              IBRAHIM LAWAL ABBA
            </h1>
          </Link>
          <Typed
            className="font-bold lg:text-xl text-[12px] text-gray-400 dark:text-gray-400"
            strings={[
              "A FullStack Developer",
              "A FrontEnd Developer"
            ]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </div>
      </div>
      
      <nav className={openNav ? " flex bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454] fixed shadow-md left-0 top-0 w-full  h-full z-50 px-10 duration-500 ease-in-out " : "fixed top-[-100%]"}>
        <ul className="pt-10 mx-auto text-center ">
          <button className="cursor-pointer text-xl absolute left-12" onClick={handleToggleDarkMode}>
            <CgDarkMode onClick={closeNav} />
          </button>
          <li className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4" onClick={closeNav}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4" onClick={closeNav}>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4" onClick={closeNav}>
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4" onClick={closeNav}>
            <NavLink to="/project">Projects</NavLink>
          </li>
          <li className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4" onClick={closeNav}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <div className="w-full flex items-center justify-center my-4">
        <button
             onClick={handleDownload}
              className="flex text-white items-center gap-3  bg-gradient-to-r duration-300 transition-all  hover:scale-110 shadow-md from-blue-700 to-teal-600  py-1 px-3  rounded-md "
            >Resume</button>
            </div>
        </ul>
      </nav>
     

      <div className="flex items-center gap-5">
      <button
             onClick={handleDownload}
              className="hidden md:flex text-white items-center gap-3  bg-gradient-to-r duration-300 transition-all  hover:scale-110 shadow-md from-blue-700 to-teal-600  py-1 px-3  rounded-md "
            >Resume</button>
        <button className="cursor-pointer text-xl hidden md:flex " onClick={handleToggleDarkMode}>
          <CgDarkMode />
        </button>
        

        <button className=" z-50 md:hidden transition-all duration-500 ease-in-out " onClick={handleNav}>
        
          {!openNav ? (
            <AiOutlineMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
