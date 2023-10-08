/* eslint-disable react/no-unescaped-entities */
import { cards } from "./serviceData";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function Services() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="text-center px-5 pb-20 bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454] lg:px-16 md:px-10  ">
      <div className="">
        <h2 data-aos="fade-left" className="py-1 font-extrabold text-2xl text-center md:text-4xl md:text-start text-blue-500 dark:text-blue-500 ">
          What I Do
        </h2>
        <p data-aos="fade-right" className="text-[#f9f7f6] dark:text-[#545454] text-md leading-8 text-start">
        My expertise lies in crafting visually stunning interfaces that seamlessly blend aesthetic appeal with optimal functionality. I have mastered a wide range of cutting-edge technologies and frameworks, enabling me to deliver highly performant and responsive websites across multiple devices and platforms.

        </p>
        <div className="mt-10 md:grid md:grid-cols-2 place-items-center pb-20">
          {cards.map((icon, index) => {
            return (
              <div
                className="flex flex-col mx-auto items-center  hover:shadow-xl p-3 dark:hover:bg-[#f9f7f6] hover:bg-[#212529] rounded-md duration-500  md:overflow-visible md:w-96 md:grid "
                key={index}
              >
                
                <div className="mx-auto">
                  <img data-aos="fade-in"
                    className="w-20 h-full object-contain hidden  "
                    src={icon.light}
                    alt="icons"
                  />
                  <img data-aos="fade-in"
                    className="w-20 h-full object-contain  dark:flex "
                    src={icon.dark}
                    alt="icons"
                  />
                </div>
                <div>
                  <h2 data-aos="fade-down" className="my-5 font-extrabold text-xl text-blue-500  dark:text-blue-500">
                    {icon.header}
                  </h2>
                  <p data-aos="fade-right" className="text-[#f9f7f6] dark:text-[#545454]">
                    {icon.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
