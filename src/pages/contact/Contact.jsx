import { AiOutlineArrowDown } from "react-icons/ai"; 

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../../components/sidebar/SideBar";


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
    <>
      <ToastContainer />
    <section className="mt-8 flex gap-5 w-full  dark:text-black text-[#f9f7f6]">
      <SideBar/>
      <div className="w-full">
      <h2
        data-aos="fade-left"
        className="py-1  font-extrabold text-2xl text-center md:text-4xl  text-blue-500 dark:text-blue-500 mb-5"
      >
        Let Talk
      </h2>

      <div>
        <h2 className="flex gap-5 justify-center items-center my-5 text-xl">
          Write Me A Message{" "}
          <AiOutlineArrowDown className="text-blue-500 animate-bounce" />
        </h2>
        <form
          ref={form}
          onSubmit={handleForm}
          className="md:w-7/12 md:mx-auto pb-12 w-full"
        >
          <div className="flex w-full flex-col gap-4  md:mb-3">
            <input
              name="name"
              placeholder="Your Name"
              className="border w-full outline-none border-gray-600 p-2 bg-transparent dark:border-gray-300 "
              type="text"
            />
            <input
              name="email"
              placeholder="Your Email"
              className="border w-full outline-none border-gray-600 p-2 bg-transparent dark:border-gray-300 "
              type="email"
            />
          </div>
          <div className="flex w-full flex-col gap-4">
            <input
              type="text"
              name="subject"
              className="border w-full outline-none border-gray-600 p-2 bg-transparent dark:border-gray-300 mt-4 lg:mt-0 "
              placeholder="Subject"
            />
            <textarea
              name="message"
              className="border w-full outline-none border-gray-600 p-2 bg-transparent dark:border-gray-300 "
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="md:flex md:justify-start md:items-start">
            <button
              type="submit"
              className="block  text-white my-5 bg-gradient-to-r duration-300 hover:text-red-500 hover:scale-110 shadow-md from-blue-500 to-teal-600 py-2 px-7 md:w-28 w-full "
            >
              Send
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
    </>
  );
  
}

export default Contact