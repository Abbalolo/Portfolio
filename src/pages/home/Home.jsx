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
      {isLoading ? (
        <div className="h-[80vh] w-full flex justify-center items-center">
        <span className="loader"></span>
        </div>
      ) : (
        <div className="flex gap-3">
          <SideBar />
          <Hero />
        </div>
      )}
    </>
  );
}

export default Home;
