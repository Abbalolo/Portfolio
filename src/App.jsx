import { BrowserRouter, Routes, Route } from "react-router-dom";
import {motion} from "framer-motion"
import { lazy, Suspense } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
const Skills = lazy(() => import("./pages/skill/Skills"));
const Home = lazy(() => import("./pages/home/Home"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Project = lazy(() => import("./pages/project/Project"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const ProjectDetails = lazy(() => import("./components/projectD/ProjectDetails"));


function App() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 1.3}}
    >
    <div className="h-full px-5 flex items-center flex-col justify-center md:px-10 lg:px-16 py-[70px] md:py-[90px] overflow-x-hidden bg-[#212529] dark:bg-[#f9f7f6] text-[#f9f7f6] dark:text-[#545454]">
      <BrowserRouter>
        <Header />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/experience"
            element={
              <Suspense
                fallback={
                  <div className="h-[80vh] w-full flex justify-center items-center">
                    <span className="loader"></span>
                  </div>
                }
              >
                <Experience />
              </Suspense>
            }
          />
          <Route
            path="/skills"
            element={
              <Suspense
                fallback={
                  <div className="h-[80vh] w-full flex justify-center items-center">
                    <span className="loader"></span>
                  </div>
                }
              >
                <Skills />
              </Suspense>
            }
          />
          <Route
            path="/project"
            element={
              <Suspense
                fallback={
                  <div className="h-[80vh] w-full flex justify-center items-center">
                    <span className="loader"></span>
                  </div>
                }
              >
                <Project />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={
                  <div className="h-[80vh] w-full flex justify-center items-center">
                    <span className="loader"></span>
                  </div>
                }
              >
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="project/:projectId"
            element={
              <Suspense
                fallback={
                  <div className="h-[80vh] w-full flex justify-center items-center">
                    <span className="loader"></span>
                  </div>
                }
              >
                <ProjectDetails />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </motion.div>
  );
}

export default App;
