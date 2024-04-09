import { CgDarkMode } from "react-icons/cg"; 
import {  NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {  useState } from "react";
import Blur from "../blur/Blur";
// import logo from "../../assets/logo.png";

import Typed from "react-typed";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [theme, setTheme] = useState("light");

  // const [scrolling, setScrolling] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
    <header
      className={`bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454] py-5 px-3 lg:px-16 md:px-8 flex items-center justify-between fixed top-0 w-full z-10  `}
    >
      {openNav && <Blur handleNav={handleNav} />}
      <div className="flex items-center">
        {/* <img src={logo} className="w-10 h-30 " alt="Ibrahim" /> */}
        <div className="flex items-center gap-4">
          <h1 className="text-[20px] text-blue-500 font-semibold md:text-[30px] lg:text-start ">
            IBRAHIM LAWAL ABBA
          </h1>
          <Typed
            className="font-bold  lg:text-xl text-sm text-gray-400 dark:text-gray-400"
            strings={[
              "A FullStack Developer",
              " A FrontEnd Developer",
              "A Fashion Designer",
            ]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </div>
      </div>
      <nav
        className={
          openNav
            ? " flex bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454] fixed shadow-md left-0 top-0 w-full  h-full z-50 px-10 duration-500 ease-in-out "
            : "fixed top-[-100%]"
        }
      >
        <ul className="pt-10 mx-auto text-center ">
          <button
            className="cursor-pointer text-xl absolute left-12"
            onClick={handleToggleDarkMode}
          >
            {theme === "light" ? (
              <CgDarkMode onClick={closeNav} />
            ) : (
              <CgDarkMode onClick={closeNav} />
            )}
          </button>
          <li
            className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4"
            onClick={closeNav}
          >
            <NavLink id="home" to="/">
              Home
            </NavLink>
          </li>
          <li
            className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4"
            onClick={closeNav}
          >
            <NavLink id="home" to="/about">
              About
            </NavLink>
          </li>
          <li
            className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4"
            onClick={closeNav}
          >
            <NavLink id="home" to="/service">
              Service
            </NavLink>
          </li>
          <li
            className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4"
            onClick={closeNav}
          >
            <NavLink id="home" to="/project">
              Projects
            </NavLink>
          </li>
          <li
            className="py-3 hover:text-4xl text-xl duration-300 ease-in  hover:underline underline-offset-4"
            onClick={closeNav}
          >
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <button className="bg-gradient-to-r duration-300 hidden md:flex hover:text-red-500 hover:scale-110 shadow-md from-blue-500 to-teal-600 py-1 px-2 ml-5 rounded-md">
          <a
            href="abbacv.pdf"
            download
            className="hover:text-red-500 text-white"
          >
            Resume
          </a>
        </button>
        <button
          className="cursor-pointer text-xl hidden md:flex "
          onClick={handleToggleDarkMode}
        >
          {theme === "light" ? <CgDarkMode /> : <CgDarkMode />}
        </button>

        <button
          className="ml-4 z-50 md:hidden transition-all duration-500 ease-in-out "
          onClick={handleNav}
        >
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
