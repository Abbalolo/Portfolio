
import About from "../about/About";
import Services from "../services/Services";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import Hero from "../hero/Hero";
import { Link } from "react-router-dom";



function Home() {


  return (
    <div className="overflow-x-hidden bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454]">
    <Hero/>
    <About/> 
    <Services/>
    <Project/>
    <Contact/>
    </div>
  );
}

export default Home;
