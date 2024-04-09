import React, { useEffect, useState } from "react";
import { portfolioCards } from "./data/ProjectData";
import AOS from "aos";
import "aos/dist/aos.css";
import { EmblaCarousel } from "../../components/carousel/EmblaCarousel";

function Project() {
  const [currentCard, setCurrentCard] = useState(portfolioCards);
  const [activeFilter, setActiveFilter] = useState(null);
  const [totalCard, setTotalCard] = useState(0);

  const filterProjects = (category) => {
    if (category === null) {
      setCurrentCard(portfolioCards);
      setActiveFilter(null);
      setTotalCard(portfolioCards.length);
    } else {
      const filteredProjects = portfolioCards.filter(
        (card) => card.category === category
      );
      setCurrentCard(filteredProjects);
      setActiveFilter(category);
      setTotalCard(filteredProjects.length);
    }
  };

  useEffect(() => {
    AOS.init();
    setTotalCard(portfolioCards.length);
  }, []);

  const handleFilterChange = (event) => {
    const selectedCategory = event.target.value;
    setActiveFilter(selectedCategory);
    filterProjects(
      selectedCategory === "All Projects" ? null : selectedCategory
    );
  };

  return (
    <>
      <section className="md:w-[70%] lg:w-[85%] w-full flex flex-col justify-center">
        <h2 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
          Portfolio.
        </h2>

        <ul
          data-aos="fade-in"
          className=" items-center justify-between md:text-[16] text-[13px] my-2 w-full hidden md:flex"
        >
          <li
            onClick={() => filterProjects(null)}
            className={`relative cursor-pointer ${
              !activeFilter &&
              " after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
            }`}
          >
            All
          </li>
          <li
            onClick={() => filterProjects("landing page")}
            className={`relative cursor-pointer ${
              activeFilter === "landing page" &&
              "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
            }`}
          >
            Landing Page
          </li>
          <li
            onClick={() => filterProjects("freelance project")}
            className={`relative cursor-pointer ${
              activeFilter === "freelance project" &&
              "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
            }`}
          >
            Freelance
          </li>
          <li
            onClick={() => filterProjects("openSource project")}
            className={`relative cursor-pointer ${
              activeFilter === "openSource project" &&
              "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
            }`}
          >
            Open Source
          </li>
          <li
            onClick={() => filterProjects("hackathon project")}
            className={`relative cursor-pointer ${
              activeFilter === "hackathon project" &&
              "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
            }`}
          >
            Hackathon
          </li>
        </ul>

        {/* <div
          data-aos="fade-in"
          className="w-full hidden md:flex h-1 bg-slate-400 mb-5 rounded-lg overflow-hidden"
        ></div> */}
        <div
          data-aos="fade-left"
          className="font-bold my-3 flex items-center justify-between"
        >
          <div>
            Total - <span className=" text-blue-500 ">{totalCard}</span>
          </div>
          <div className="md:hidden">
            <select
              className="select select-primary max-w-xs bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454]"
              onChange={handleFilterChange}
            >
              <option value="All Projects">All Projects</option>
              <option value="Landing Page">Landing Pages</option>
              <option value="Freelance Project">Freelance Project</option>
              <option value="Open Source Project">Open Source</option>
              <option value="Hackathon Project">Hackathons</option>
            </select>
          </div>
        </div>
        <EmblaCarousel currentCard={currentCard} />
      </section>
    </>
  );
}

export default Project;
