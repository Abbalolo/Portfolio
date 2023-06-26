
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
