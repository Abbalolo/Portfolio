import { Link } from "react-router-dom";
import {portfolioCards} from "./data/ProjectData"
import { useEffect, useReducer, useState } from "react";


function Project() {
const [currentCard, setCurrentCard] = useState(portfolioCards);
const [all, setAll] = useState(false)
const [landing, setLanding] = useState(false)
const [freelance, setFreelance] = useState(false)
const [openSource, setOpenSource] = useState(false)
const [hackathon, setHackathon] = useState(false)
const [totalCard, setTotalCard] = useState("")

  const totalCards = () => {
    const arr = portfolioCards.map(item => item.id)
  const total = arr.length
    setTotalCard(total)
    
  }
  
  const filterAll = () => {
     const allProduct = portfolioCards;
     setAll(true);
     setLanding(false);
     setFreelance(false);
     setOpenSource(false);
     setHackathon(false);
     setCurrentCard(allProduct);
  }

  const filterLanding = () => {
    const landingProduct = portfolioCards.filter(
      (card) => card.category === "landing page"
    );
    setAll(false);
    setLanding(true);
    setFreelance(false);
    setOpenSource(false);
    setHackathon(false);
    setCurrentCard(landingProduct);
  }
 
  const filterFreelance = () => {
    const freelanceProduct = portfolioCards.filter(
      (card) => card.category === "freelance project"
    );
    setAll(false);
    setLanding(false);
    setFreelance(true);
    setOpenSource(false);
    setHackathon(false);
    setCurrentCard(freelanceProduct);

  }
  const filterOpenSource = () => {
const openSourceProduct = portfolioCards.filter(
  (card) => card.category === "freelance project"
);

setAll(false);
setLanding(false);
setFreelance(false);
setOpenSource(true);
setHackathon(false);
setCurrentCard(openSourceProduct);

  }
  const filterHackathon = () => {
 const hackathonProduct = portfolioCards.filter(
   (card) => card.category === "hackathon project"
 );

 setAll(false);
 setLanding(false);
 setFreelance(false);
 setOpenSource(false);
 setHackathon(true);
 setCurrentCard(hackathonProduct);
 console.log(hackathonProduct);
 console.log("hackathonProduct");
  }




  // const filterPortfolioCard = () => {
  //   console.log("lolo")
  //   if (all) {
  //     const allProduct = currentCard;
  //     setAll(true);
  //     setLanding(false);
  //     setFreelance(false);
  //     setOpenSource(false);
  //     setHackathon(false);
  //     setCurrentCard(allProduct);
  //     console.log(allProduct);
  //     console.log("allProduct");
  //   } else if (landing) {
  //     const landingProduct = portfolioCards.filter(
  //       (card) => card.category === "landing page"
  //     );
  //     setAll(false);
  //     setLanding(true);
  //     setFreelance(false);
  //     setOpenSource(false);
  //     setHackathon(false);
  //     setCurrentCard(landingProduct);
  //     console.log(landingProduct);
  //     console.log("landingProduct");
  //   } else if (freelance) {
  //     const freelanceProduct = portfolioCards.filter(
  //       (card) => card.category === "open source project"
  //     );
  //     setAll(false);
  //     setLanding(false);
  //     setFreelance(true);
  //     setOpenSource(false);
  //     setHackathon(false);
  //     setCurrentCard(freelanceProduct);
  //     console.log(freelanceProduct);
  //     console.log("landingProduct");
  //   } else if (openSource) {
  //     const openSourceProduct = portfolioCards.filter(
  //       (card) => card.category === "freelance project"
  //     );

  //     setAll(false);
  //     setLanding(false);
  //     setFreelance(false);
  //     setOpenSource(true);
  //     setHackathon(false);
  //     setCurrentCard(openSourceProduct);
  //     console.log(openSourceProduct);
  //     console.log("openSourceProduct");
  //   } else if (hackathon) {
  //     const hackathonProduct = portfolioCards.filter(
  //       (card) => card.category === "hackathon project"
  //     );

  //     setAll(false);
  //     setLanding(false);
  //     setFreelance(false);
  //     setOpenSource(false);
  //     setHackathon(true);
  //     setCurrentCard(hackathonProduct);
  //     console.log(hackathonProduct);
  //     console.log("hackathonProduct");
  //   }
  // }
  
  
 
  // const filteredCards = portfolioCards.filter((card) => {
  //   return All === "All" || card.category === All;
  // });


  useEffect(() => {
  
    totalCards()
  
}, [])

  return (
    <>
      <section className="px-5 lg:px-16 md:px-10 pb-20  relative bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454]">
        <h2 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
          PortFolio.
        </h2>

        <ul className="flex items-center justify-between md:text-[16] text-[13px]  my-2">
          <li
            onClick={filterAll}
            className={
              all
                ? ` relative  after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
                : ` relative  after:content after:w-full after:h-1  after:absolute after:bg-blue-500 after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
            }
          >
            All
          </li>
          <li
            onClick={filterLanding}
            className={
              landing
                ? `relative  after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
                : ` relative  after:content after:w-full after:h-1  after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
            }
          >
            Landing Page
          </li>
          <li
            onClick={filterFreelance}
            className={
              freelance
                ? ` relative after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
                : ` relative  after:content after:w-full after:h-1  after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
            }
          >
            Freelance
          </li>
          <li
            onClick={filterOpenSource}
            className={
              openSource
                ? ` relative after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
                : ` relative  after:content after:w-full after:h-1  after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
            }
          >
            Open Source
          </li>
          <li
            onClick={filterHackathon}
            className={
              hackathon
                ? ` relative after:origin-left after:content after:w-full after:h-1 after:bg-blue-500 after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
                : ` relative  after:content after:w-full after:h-1  after:absolute after:-bottom-3 after:left-0 after:rounded-lg font-bold cursor-pointer after:transition-all after:duration-300 ease-in-out`
            }
          >
            Hackathon
          </li>
        </ul>

        <div className="w-full h-1 bg-slate-400 mb-5 rounded-lg overflow-hidden"></div>
        <div className="font-bold my-3">
          Total - <span className=" text-blue-500 ">{totalCard}</span>
        </div>

        {currentCard.length <= 3 ? (
          <div className=" h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentCard.map((card) => (
                <div key={card.id} className="rounded-md">
                  <Link to={`/project/${card.id}`}>
                    <div className="relative rounded-md overflow-hidden h-full">
                      <img className="" src={card.image} alt="pic" />

                      <div className=" absolute top-0 left-0 h-full w-full flex items-end justify-end duration-300 gap-5 backdrop-brightness-[65%]">
                        <div className="flex flex-col w-full p-3">
                          <h1 className="text-xl text-white font-extrabold">
                            {card.name}
                          </h1>
                          <p className="text-gray-100">{card.short}</p>

                          <div className="flex flex-wrap gap-2 py-1">
                            {card.language.map((language, index) => (
                              <span
                                key={index}
                                className="text-[12px] md:text-md text-white hover:bg-blue-500 hover:text-white bg-gray-400 rounded-2xl py-[2px] px-2 text-center duration-300 cursor-pointer"
                              >
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentCard.map((card) => (
              <div key={card.id} className="rounded-md">
                <Link to={`/project/${card.id}`}>
                  <div className="relative rounded-md overflow-hidden h-full">
                    <img className="" src={card.image} alt="pic" />

                    <div className=" absolute top-0 left-0 h-full w-full flex items-end justify-end duration-300 gap-5 backdrop-brightness-[65%]">
                      <div className="flex flex-col w-full p-3">
                        <h1 className="text-xl text-white font-extrabold">
                          {card.name}
                        </h1>
                        <p className="text-gray-100">{card.short}</p>

                        <div className="flex flex-wrap gap-2 py-1">
                          {card.language.map((language, index) => (
                            <span
                              key={index}
                              className="text-[12px] md:text-md text-white hover:bg-blue-500 hover:text-white bg-gray-400 rounded-2xl py-[2px] px-2 text-center duration-300 cursor-pointer"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Project;
