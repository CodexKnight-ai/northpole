import Hero from "./Components/Hero"; 
import About from "./Components/About"; 
import Services from "./Components/Services";
import Testinomials_Home from "./Components/Testinomials_Home"
import Milestones from "./Components/Milestones"; 
import Stats from "./Components/Stats";

export default function Home() {
return (  
  <>
    < Hero /> 
    <About /> 
    <Milestones/>
    <Services />
    <Stats/>
    <Testinomials_Home/>
  </>
  );
}
