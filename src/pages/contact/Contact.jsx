import { AiOutlineArrowDown } from "react-icons/ai"; 

import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {

  const form = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3o0q0b",
        "template_yubd50w",
        form.current,
        "uYm4BZSuwpZT82qQj"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("message sent");
          e.target.reset()

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  useEffect(() => {
    AOS.init()
  }, [])
        

  return (
    <section className="text-center dark:bg-[#121212] dark:text-white md:mx-14 md:px-10 px-5">
      <ToastContainer />
      <h2
        data-aos="fade-left"
        className="py-1 before:border before:absolute  before:bottom-0 before:w-20 font-extrabold text-2xl text-center md:text-4xl md:text-start text-blue-700 dark:text-blue-700 mb-5"
      >
        Let Talk
      </h2>
      <div className="grid md:grid-cols-2 gap-3 mb-5">
        <div className="flex gap-5 items-center py-5">
          <div className="w-30 bg-slate-300 p-3  dark:text-blue-700 dark:bg-black rounded-full">
            <CiLocationOn className="text-xl" />
          </div>

          <div className="text-start ">
            <h3 className="font-extrabold text-xl">My Address</h3>
            <p className="text-gray-500">
              8 Segilola Street,Agegunle Agege Lagos Nigeria
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center py-5">
          <div className="w-30 bg-slate-300 p-3 dark:text-blue-700 dark:bg-black rounded-full">
            <BiShareAlt />
          </div>

          <div className="text-start">
            <h3 className="font-extrabold text-xl">Social Media</h3>
            <ul className="flex gap-1">
              <li>
                <Link target="_blank" to="https://web.facebook.com/lolo.fundz/">
                  <AiFillFacebook className="hover:text-blue-500 duration-300 text-xl" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://twitter.com/Ibrahim46284657">
                  <AiOutlineTwitter className="hover:text-blue-500 duration-300 text-xl" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/ibrahim-lawal-2772a8243/"
                >
                  <AiFillLinkedin className="hover:text-blue-500 duration-300 text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 items-center py-5 ">
          <div className="w-30 bg-slate-300 dark:text-blue-700 dark:bg-black p-3 rounded-full">
            <AiOutlineMail />
          </div>
          <div className="text-start">
            <h3 className="font-extrabold text-xl">Email Me</h3>
            <p className="text-gray-500">abbalolo360@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-5 items-center py-5 ">
          <div className="w-30 bg-slate-300  dark:text-blue-700 dark:bg-black p-3 rounded-full">
            <BiPhoneCall />
          </div>

          <div className="text-start">
            <h3 className="font-extrabold text-xl">Call Me</h3>
            <p className="text-gray-500">+2349132316236</p>
          </div>
        </div>
      </div>
      <h2 className="flex gap-5 justify-center items-center m-5 text-xl ">
        Write Me A Message{" "}
        <AiOutlineArrowDown className="text-blue-500 animate-bounce" />
      </h2>
      <form ref={form} onSubmit={handleForm} className="md:pr-4">
        <div className="flex w-full flex-col gap-4 md:flex-row md:mb-3">
          <input
            name="name"
            placeholder="Your Name"
            className="border w-full outline-none border-gray-300 p-2 dark:bg-black dark:border dark:border-black"
            type="text"
          />
          <input
            name="email"
            placeholder="Your Email"
            className="w-full mb-3 md:mb-0 outline-none border border-gray-300 p-2 dark:bg-black dark:border dark:border-black"
            type="email"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <input
            type="text"
            name="subject"
            className="border outline-none border-gray-300 p-2 dark:bg-black dark:border dark:border-black"
            placeholder="Subject"
          />
          <textarea
            name="message"
            className="border outline-none border-gray-300 p-2 dark:bg-black dark:border dark:border-black"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          className="block mx-auto text-white my-5 bg-gradient-to-r duration-300 hover:text-red-500 hover:scale-110 shadow-md from-blue-700 to-teal-600 py-2 px-7 w-full"
        >
          Send
        </button>
      </form>
    </section>
  );
  
}

export default Contact