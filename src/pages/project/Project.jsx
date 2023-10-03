import { Link } from "react-router-dom";
import blog from "./project-image/blog.png";
import ecommerce from "./project-image/ecommerce.png";
import dictionary from "./project-image/dictionary.png";
import todo from "./project-image/mtodo.png";
import quiz from "./project-image/quiz.png";
import portfolio from "./project-image/portfolio.png";
import {AiOutlineArrowRight} from "react-icons/ai"


function Project() {
  const portfolioCards = [
  {
   id: 1,
   name: "PortFolio",
   github: "https://github.com/Abbalolo/Mayor-portfolio.git",
   host: "https://mayor-portfolio.netlify.app/",
   image: portfolio,
   language: ["Html", "Css", "Javascript", ] ,
   description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla   saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit"
  },
  {
   id: 2,
   name: "Blog",
   github: "https://github.com/Abbalolo/Blog-App.git",
   image: blog,
   language: ["React","Html", "Css", "Javascript", "Json" ] ,
   description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla   saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit"
  },
  {
   id: 3,
   name: "Ecommerce",
   github: "https://github.com/Abbalolo/E-commerce.git",
   host: "https://mayor-portfolio.netlify.app/",
   image: ecommerce,
   language: ["React", "Html", "Scss","Css", "Javascript", "Redux", "FireBase" ] ,
   description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla   saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit"
  },
  {
   id: 4,
   name: "Dictionary",
   github: "https://github.com/Abbalolo/Dictionary-app.git",
   host: "dictionaryspeech.netlify.app",
   image: dictionary,
   language: ["React", "Html","Css", "Javascript", "Api" ] ,
   description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla   saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit"
  },
  {
   id: 5,
   name: "Todo",
   github: "https://github.com/Abbalolo/my-todo-app.git",
   host: "lohdev-todo.netlify.app",
   image: todo,
   language: ["React", "Javascript", "Html","Css" ] ,
   description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla   saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit"
  },
  {
   id: 5,
   name: "Quiz",
   github: "https://github.com/Abbalolo/my-react-quiz.git",
   host: "https://lohdev-quiz.netlify.app",
   image: quiz,
   language: ["React", "Javascript", "Html","Css" ] ,
   description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla   saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit"
  },

]

  return (
    <section className="px-5 lg:px-16 md:px-10 relative bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454]">
      <h2 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
        PortFolio.
      </h2>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {portfolioCards.map((card) => (
        <div key={card.id} className="rounded-md">
         
        <div className="relative rounded-md overflow-hidden h-full">
          <img className="" src={card.image} alt="pic" />
          <div className=" absolute top-0 left-0 h-full w-full flex items-end justify-end duration-300 gap-5 backdrop-brightness-[65%]">

          <div className="flex flex-col w-full p-3">
             <h1 className="text-xl text-white font-extrabold">{card.name}</h1>
             <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur . </p>

            <div className="flex flex-wrap gap-2 py-1">
              {card.language.map((language, index) => (
                 <span key={index} className="text-[12px] md:text-md text-white hover:bg-blue-500 hover:text-white bg-gray-400 rounded-2xl py-[2px] px-2 text-center duration-300 cursor-pointer">{language}</span>
              ))}  
            </div>
        
        </div>

          </div>
          
        </div>

   
    </div>
          
     ))}

</div>
        
 
 
    </section>
  );
}

export default Project;
