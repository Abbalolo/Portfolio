import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

export function EmblaCarousel({ currentCard }) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  // Render slide items based on the length of currentCard
  const renderSlides = () => (
    <div className="embla__slide">
      <div
        data-aos="fade-left"
        className={`h-screen ${currentCard.length > 3 ? 'hidden' : ''}`}
      >
        <div
          data-aos="fade-right"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {currentCard.map((card) => (
            <div
              data-aos="fade-right"
              key={card.id}
              className="rounded-md group" // Added group class here
            >
              <Link to={`/project/${card.id}`}>
                <div
                  data-aos="fade-in"
                  className="relative rounded-md overflow-hidden h-full"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Scale on hover
                    src={card.image}
                    alt="pic"
                  />
                  <div
                    data-aos="fade-in"
                    className="absolute top-0 left-0 h-full w-full flex items-end justify-end duration-300 gap-5 backdrop-brightness-[65%]"
                  >
                    <div className="flex flex-col w-full p-3">
                      <h1 className="text-xl text-white font-extrabold">
                        {card.name}
                      </h1>
                      <p className="text-gray-100">{card.short}</p>
                      <div
                        data-aos="fade-in"
                        className="flex flex-wrap gap-2 py-1"
                      >
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
      {currentCard.length > 3 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentCard.map((card) => (
            <div key={card.id} className="rounded-md group"> {/* Added group class here */}
              <Link to={`/project/${card.id}`}>
                <div className="relative rounded-md overflow-hidden h-full">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Scale on hover
                    src={card.image}
                    alt="pic"
                  />
                  <div className="group-hover:backdrop-brightness-[45%] absolute top-0 left-0 h-full w-full flex items-end justify-end duration-300 gap-5">
                    <div className="flex-col w-full p-3 hidden group-hover:flex">
                      <h1 className="text-xl text-white font-extrabold">
                        {card.name}
                      </h1>
                      <p className="text-gray-100">{card.short}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {renderSlides()}
      </div>
    </div>
  );
}
