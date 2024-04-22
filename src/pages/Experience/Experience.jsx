import React, { useEffect, useState } from "react";
import { portfolioCards } from "../project/data/ProjectData";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import SideBar from "../../components/sidebar/SideBar";

function Experience() {
  const [experienceCard, setExperienceCard] = useState([]);
 

  const fetchExperience = () => {
    const updatedExperience = portfolioCards.filter(
      (item) => item.category == "Experience Project"
    );
    setExperienceCard(updatedExperience);
    console.log(experienceCard);
  };

  useEffect(() => {
    fetchExperience();
  }, []);
  return (
    <div className="md:w-[70%] lg:w-[85%] w-full lg:h-screen dark:text-black text-[#f9f7f6]">
        <SideBar/>
      <div className="border  border-gray-600 dark:border-gray-300 rounded-md p-5 flex flex-col md:flex-row gap-5">
          {experienceCard.map((item) => (
              <div key={item.id} className="border  border-gray-600 dark:border-gray-300 rounded-md p-5">
              <div  className="flex flex-col gap-3 ">
                <h2 className="font-bold md:text-[25px]">{item.field}</h2>
                <img className="rounded-md border-gray-600 " src={item.image} alt={item.name} />
              </div>
              <div className="flex flex-col">
              <p className="mt-2">{item.achieve}</p>
        <Link className="flex items-center justify-between border my-2 border-gray-600 dark:border-gray-300 rounded-md p-2 hover:bg-gray-800 dark:hover:bg-slate-100" to={`/project/${item.id}`}>
Click To View More
<CgArrowLongRight className="text-[20px] dark:text-black text-[#f9f7f6]" />
        </Link>
              </div>
             
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experience;
