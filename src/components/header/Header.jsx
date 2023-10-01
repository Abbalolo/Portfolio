import { CgDarkMode } from "react-icons/cg"; 
import { Link, NavLink } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Blur from "../blur/Blur";
import logo from "../../assets/logo.png";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [theme, setTheme] = useState("light");

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
    setHideNav(hideNav);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <div className=" bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454] px-3 lg:px-16 md:px-8">
      {openNav && <Blur handleNav={handleNav} />}
      <nav className="py-5 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} className="w-10 h-30 " alt="Ibrahim" />

        </div>
        <ul className="flex items-center">
          <li
              className="cursor-pointer text-xl"
              onClick={handleToggleDarkMode}
            >
              {theme === "light" ? (
                <CgDarkMode  />
                ) : (
                  <CgDarkMode  />
              )}
            
          </li>
          <li className="bg-gradient-to-r duration-300 hidden md:flex hover:text-red-500 hover:scale-110 shadow-md from-blue-500 to-teal-600 py-1 px-2 ml-5 rounded-md">
            <Link to="#" className="hover:text-red-500 text-white">
              Resume
            </Link>
          </li>
          <button className="ml-4 z-50 md:hidden" onClick={handleNav}>
            {!openNav ? (
              <AiOutlineMenu size={20} />
            ) : (
              <AiOutlineClose size={20} />
            )}
          </button>
          <div
            onClick={closeNav}
            className={
              openNav
                ? "pt-10 bg-white dark:bg-zinc-900 fixed shadow-md left-0 top-0 w-[60%] h-full z-50 px-10 duration-500 ease-in-out"
                : "fixed left-[-100%]"
            }
          >
            <li className="py-3 border-b border-gray-300 dark:border-gray-700">
              <NavLink id="home" to="/">
                Home
              </NavLink>
            </li>
            <li className="py-3 border-b border-gray-300 dark:border-gray-700">
              <NavLink id="home" to="/about">
                About
              </NavLink>
            </li>
            <li className="py-3 border-b border-gray-300 dark:border-gray-700">
              <NavLink id="home" to="/service">
                Service
              </NavLink>
            </li>
            <li className="py-3 border-b border-gray-300 dark:border-gray-700">
              <NavLink id="home" to="/project">
                Projects
              </NavLink>
            </li>
            <li className="py-3">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
