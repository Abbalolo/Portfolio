import React, { useEffect, useState } from "react";
import { portfolioCards } from "./data/ProjectData";
import AOS from "aos";
import "aos/dist/aos.css";
import { EmblaCarousel } from "../../components/carousel/EmblaCarousel";
import SideBar from "../../components/sidebar/SideBar";

function Project() {
  const [currentCard, setCurrentCard] = useState(portfolioCards);
  const [activeFilter, setActiveFilter] = useState(null);
  const [totalCard, setTotalCard] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const filterProjects = (category) => {
    if (category === null) {
      setCurrentCard(portfolioCards);
      setActiveFilter(null);
      setTotalCard(portfolioCards.length);
    } else {
      const filteredProjects = portfolioCards.filter(
        (card) => card.category.toLowerCase() === category.toLowerCase()
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

  useEffect(() => {
   
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
    {isLoading && (
        <div className="h-[90vh] w-full fixed top-0 left-0 flex justify-center items-center">
        <span className="loader"></span>
        </div>
      ) }
        <section className=" w-full flex flex-col justify-center">
        <div className="flex gap-5">
          <SideBar />
          <div className="">
            <h2 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
              Portfolio.
            </h2>

            <ul
             
              className="md:flex items-center justify-between md:text-[16] text-[13px] my-2 w-full lg:w-[35%] md:w-[50%] hidden"
            >
              <li
                onClick={() => filterProjects(null)}
                className={`relative cursor-pointer ${
                  !activeFilter &&
                  "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-0 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
                }`}
              >
                All
              </li>
              <li
                onClick={() => filterProjects("Landing Page")}
                className={`relative cursor-pointer ${
                  activeFilter === "Landing Page" &&
                  "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-0 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
                }`}
              >
                Landing Page
              </li>
              <li
                onClick={() => filterProjects("Freelance Project")}
                className={`relative cursor-pointer ${
                  activeFilter === "Freelance Project" &&
                  "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-0 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
                }`}
              >
                Freelance
              </li>
              {/* <li
                onClick={() => filterProjects("Open Source Project")}
                className={`relative cursor-pointer ${
                  activeFilter === "Open Source Project" &&
                  "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
                }`}
              >
                Open Source
              </li> */}
              <li
                onClick={() => filterProjects("Hackathon Project")}
                className={`relative cursor-pointer ${
                  activeFilter === "Hackathon Project" &&
                  "after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-0 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out"
                }`}
              >
                Hackathon
              </li>
            </ul>

            <div
              data-aos="fade-left"
              className="font-bold my-3 flex items-center justify-between"
            >
              <div>
                Total - <span className="text-blue-500">{totalCard}</span>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
