import { AiFillGithub, AiFillInstagram } from "react-icons/ai"; 
import { useEffect } from "react";
import { useState } from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { Link } from "react-router-dom"

function Footer() {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
    <footer className={ scrolling ?`backdrop-blur-md text-[#f9f7f6] dark:text-[#545454] w-full p-3 text-center fixed bottom-0 shadow-2xl lg:hidden z-20` : `hidden`}>
     <div

      className="flex text-2xl  justify-around gap-4  text-gray-600"
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
      <Link target="_blank" to="https://github.com/Abbalolo">
      <AiFillGithub className="hover:text-white duration-300" />
      </Link>
      <Link target="_blank" to="https://instagram.com/lohloh009?igshid=OGQ5ZDc2ODk2ZA==">
      <AiFillInstagram className="hover:text-red-300 duration-300" />
      </Link>
    </div>
    </footer>
    </>
  )
}

export default Footer