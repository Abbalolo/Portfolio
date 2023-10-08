import { Link } from "react-router-dom";
import {portfolioCards} from "./data/ProjectData"

function Project() {



  return (
    <>
    <section className="px-5 lg:px-16 md:px-10 pb-20 relative bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454]">
      <h2 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
        PortFolio.
      </h2>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {portfolioCards.map((card) => (
        <div key={card.id} className="rounded-md">
         <Link to={`/project/${card.id}`}>
        <div className="relative rounded-md overflow-hidden h-full">
        
          <img className="" src={card.image} alt="pic" />
          
          <div className=" absolute top-0 left-0 h-full w-full flex items-end justify-end duration-300 gap-5 backdrop-brightness-[65%]">

          <div className="flex flex-col w-full p-3">
             <h1 className="text-xl text-white font-extrabold">{card.name}</h1>
             <p className="text-gray-100">{card.short}</p>

            <div className="flex flex-wrap gap-2 py-1">
              {card.language.map((language, index) => (
                 <span key={index} className="text-[12px] md:text-md text-white hover:bg-blue-500 hover:text-white bg-gray-400 rounded-2xl py-[2px] px-2 text-center duration-300 cursor-pointer">{language}</span>
              ))}  
            </div>
        
        </div>

          </div>
          
        </div>

        </Link>
    </div>
          
     ))}

</div>
    
    </section>
    </>

  );
}

export default Project;
