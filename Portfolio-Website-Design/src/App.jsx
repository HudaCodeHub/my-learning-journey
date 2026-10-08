import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Me from "./Components/About me/About me";
import Services from "./Components/Services/Services";



function App() {
 

  return (
    <>
      <div className="flex flex-row gap-2">
     <Navbar/>
     <Home/>
    </div>
    <Me/>
    <Services/>

    </>
  )
}

export default App;
