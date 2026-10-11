import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Me from "./Components/About me/About me";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Recent works/Recent works";
import Review from "./Components/Client & Review/Client & Review";
import Band from "./Components/Band petner/Band petner";
import Blog from "./Components/Blog/Blog";



function App() {
 

  return (
    <>
      <div className="flex flex-row gap-2">
     <Navbar/>
     <Home/>
    </div>
    <Me/>
    <Services/>
    <Experience/>
    <Works/>
    <Review/>
    <Band/>
    <Blog/>
    </>
  )
}

export default App;
