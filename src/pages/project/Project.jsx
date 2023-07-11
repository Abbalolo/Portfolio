import { Link } from "react-router-dom";
import blog from "./project-image/blog.png";
import ecommerce from "./project-image/ecommerce.png";
import {AiOutlineArrowRight} from "react-icons/ai"


function Project() {

  return (
    <section className="px-5 md:px-10 md:mx-16 relative">
      <h2 className="text-xl md:text-3xl text-blue-500 font-bold mb-5">
        PortFolio
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-10 gap-10">
        <div className="shadow-md w-full h-full flex gap-5 py-2">
          <div className="overflow-hidden">
            <div className="group relative">
              <img className="" src={blog} alt="pic" />
              <div className="absolute h-full w-full backdrop-blur-sm flex items-center justify-center -bottom-2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 gap-5">
                <button className="bg-blue-500 text-center text-sm text-white px-2 py-1 shadow-md hover:scale-105 duration-300">
                  <Link target="_blank"to="https://github.com/Abbalolo/Blog-App.git">
                    Code
                  </Link>
                </button>
                {/* <button className="bg-blue-500 text-center text-sm text-white px-2 py-1 shadow-md hover:scale-105 duration-300">
                  <Link target="_blank" to="https://loloblog.netlify.app">Live Demo</Link>
                </button> */}
              </div>
            </div>

            <div className="mt-2 flex  flex-wrap gap-2 ">
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                React
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                Jso
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold "><Link className="hover:underline hover:text-blue-900 flex items-center gap-3 " target="_blank" to="https://loloblog.netlify.app" >Blog App <AiOutlineArrowRight/></Link></h3>
            <p className="text-sm dark:text-gray-400 text-gray-600 pt-2 pr-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit 
            </p>
          </div>
        </div>


        <div className="shadow-md w-full h-full flex gap-5 py-2">
          <div className="overflow-hidden">
            <div className="group relative">
              <img className="" src={ecommerce} alt="pic" />
              <div className="absolute h-full w-full backdrop-blur-sm flex items-center justify-center -bottom-2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 gap-5">
                <button className="bg-blue-500 text-center text-sm text-white px-2 py-1 shadow-md hover:scale-105 duration-300">
                  <Link target="_blank"to="https://github.com/Abbalolo/E-commerce.git">
                    Code
                  </Link>
                </button>
                <button className="bg-blue-500 text-center text-sm text-white px-2 py-1 shadow-md hover:scale-105 duration-300">
                  <Link target="_blank" to="shopnowweb.netlify.app">Live Demo</Link>
                </button>
              </div>
            </div>

            <div className="mt-2 flex  flex-wrap gap-2 ">
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                React
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm">
                Redux
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                FireBase
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold "><Link className="hover:underline hover:text-blue-900 flex items-center gap-3 " target="_blank" to="https://loloblog.netlify.app" >E-commerce App <AiOutlineArrowRight/></Link></h3>
            <p className="text-sm dark:text-gray-400 text-gray-600 pt-2 pr-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit 
            </p>
          </div>
        </div>


        <div className="shadow-md w-full h-full flex gap-5 py-2">
          <div className="overflow-hidden">
            <div className="group relative">
              <img className="" src={blog} alt="pic" />
              <div className="absolute h-full w-full backdrop-blur-sm flex items-center justify-center -bottom-2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 gap-5">
                <button className="bg-blue-500 text-center text-sm text-white px-2 py-1 shadow-md hover:scale-105 duration-300">
                  <Link target="_blank"to="https://github.com/Abbalolo/E-commerce.git">
                    Code
                  </Link>
                </button>
                {/* <button className="bg-blue-500 text-center text-sm text-white px-2 py-1 shadow-md hover:scale-105 duration-300">
                  <Link target="_blank" to="shopnowweb.netlify.app">Live Demo</Link>
                </button> */}
              </div>
            </div>

            <div className="mt-2 flex  flex-wrap gap-2 ">
            <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                React
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                Jso
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold "><Link className="hover:underline hover:text-blue-900 flex items-center gap-3 " target="_blank" to="https://loloblog.netlify.app" >Blog App <AiOutlineArrowRight/></Link></h3>
            <p className="text-sm dark:text-gray-400 text-gray-600 pt-2 pr-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit 
            </p>
          </div>
        </div>


        <div className="shadow-md w-full h-full flex gap-5 py-2">
          <div className="overflow-hidden">
            <div className="group relative">
              <img className="" src={blog} alt="pic" />
              <div className="absolute h-full w-full backdrop-blur-sm flex items-center justify-center -bottom-2 group-hover:bottom-0 opacity-0 group-hover:opacity-100 duration-300 gap-5">
                <button className="bg-blue-500 text-center text-sm text-white px-2 py-1 shadow-md hover:scale-105 duration-300">
                  <Link target="_blank"to="https://github.com/Abbalolo/Blog-App.git">
                    Code
                  </Link>
                </button>
                <button className="bg-blue-500 text-center text-sm text-white px-2 py-1 shadow-md hover:scale-105 duration-300">
                  <Link target="_blank" to="https://loloblog.netlify.app">Live Demo</Link>
                </button>
              </div>
            </div>

            <div className="mt-2 flex  flex-wrap gap-2 ">
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                Html
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                Css
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                Javascript
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                React
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm">
                Tailwind
              </div>
              <div className="text-sm text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 inline-block border p-1 rounded-sm duration-300 cursor-pointer">
                Bootsrap
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold "><Link className="hover:underline hover:text-blue-900 flex items-center gap-3 " target="_blank" to="https://loloblog.netlify.app" >Blog App <AiOutlineArrowRight/></Link></h3>
            <p className="text-sm dark:text-gray-400 text-gray-600 pt-2 pr-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              saepe possimus quibusdam quae unde, sequi, atque, ipsam Lorem ipsum dolor sit 
            </p>
          </div>
        </div>


      </div> 
    </section>
  );
}

export default Project;
