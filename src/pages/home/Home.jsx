
import SideBar from "../../components/sidebar/SideBar";
import Hero from "../hero/Hero";

function Home() {
  return (
    <div className="flex gap-3">
      <SideBar/>
      <Hero />
    </div>
  );
}

export default Home;
