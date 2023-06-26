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
    <section className="text-center dark:bg-[#121212] dark:text-white md:mx-14 md:px-10 px-5">
      <div className="px-3">
        <h2 data-aos="fade-left" className="py-1 font-extrabold text-2xl text-center md:text-4xl md:text-start text-blue-700 dark:text-blue-700 mb-5">
          What I Do
        </h2>
        <p data-aos="fade-right" className=" text-gray-800 dark:text-gray-400 text-md leading-8 md:text-start">
        My expertise lies in crafting visually stunning interfaces that seamlessly blend aesthetic appeal with optimal functionality. I have mastered a wide range of cutting-edge technologies and frameworks, enabling me to deliver highly performant and responsive websites across multiple devices and platforms. Whether it's building dynamic animations, implementing intuitive user interfaces, or optimizing site speed, I possess the technical prowess to tackle any challenge with finesse.


        </p>
        <div className="mt-10 md:grid md:grid-cols-2 place-items-center">
          {cards.map((icon, index) => {
            return (
              <div
                className="flex flex-col w-9/12 mx-auto items-center mb-20 hover:shadow-xl p-3 dark:hover:bg-[#161616] rounded-md duration-500  md:overflow-visible md:w-96 md:grid "
                key={index}
              >
                <div className="mx-auto">
                  <img data-aos="fade-in"
                    className="w-20 h-full object-contain dark:hidden "
                    src={icon.light}
                    alt="icons"
                  />
                  <img data-aos="fade-in"
                    className="w-20 h-full object-contain hidden dark:flex "
                    src={icon.dark}
                    alt="icons"
                  />
                </div>
                <div>
                  <h2 data-aos="fade-down" className="my-5 font-extrabold text-xl text-blue-700  dark:text-blue-700">
                    {icon.header}
                  </h2>
                  <p data-aos="fade-right" className="text-gray-800 dark:text-gray-400 ">
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
