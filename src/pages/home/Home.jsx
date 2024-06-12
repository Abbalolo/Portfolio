import { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import Hero from "../hero/Hero";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
     


{isLoading && (
        <div className="bg-[#212529] absolute top-0 left-0 h-[100vh] z-50 w-full flex justify-center items-center">
        <span className="loader"></span>
        </div>
      ) }
      <div className="flex gap-3">
          <SideBar />
          <Hero />
        </div>
    </>
  );
}

export default Home;
