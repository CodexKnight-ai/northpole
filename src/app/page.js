import Hero from "./Components/Hero"; 
import About from "./Components/About"; 
import Services from "./components/Services";
import Testimonials_Home from "./components/Testinomials_Home";
import Milestones from "./components/Milestones"; 
import Stats from "./components/Stats"; 

export default function Home() {
return (  
  <>
    < Hero /> 
    <About /> 
    <Milestones/>
    <Services />
    <Stats/>
    <Testimonials_Home/>
  </>
  );
}
