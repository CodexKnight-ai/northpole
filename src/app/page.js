import Hero from "./Components/Hero"; 
import About from "./Components/About"; 
import Testinomials_Home from "./Components/Testinomials_Home"
import Milestones from "./Components/Milestones"; 
import Stats from "./Components/Stats";
import ServicesCarousel from "./Components/ServicesCarousel";
import CalculatorsCarousel from "./Components/CalculatorsCarousel";

export default function Home() {
return (  
  <div className="">
    < Hero /> 
    <About /> 
    <Milestones/>
    <ServicesCarousel />
    <CalculatorsCarousel />
    <Stats/>
    <Testinomials_Home/>
  </div >
  );
}
