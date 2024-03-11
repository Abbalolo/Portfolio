import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";
import ProjectDetails from "./components/projectD/ProjectDetails";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Skills from "./pages/skill/Skills";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="  h-full px-5 flex items-center flex-col justify-center md:px-10 lg:px-16 py-[70px] md:py-[90px] overflow-x-hidden bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454]">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
       <SideBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="project/:projectId" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
