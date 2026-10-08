import Me from "./Components/About me/About me"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"


function App() {
 

  return (
    <>
      <div className="flex flex-row gap-2">
      <Navbar/>
      <Home/>
    </div>
   <Me/>

    </>
  )
}

export default App
