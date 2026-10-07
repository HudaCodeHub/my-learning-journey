import pic from "../../assets/picture.png";
import poly from "../../assets/Photos/Polygon 1.png";
import c3 from "../../assets/Photos/complite project (3).png";
import c2 from "../../assets/Photos/complite project (2).png";
import c1 from "../../assets/Photos/complite project (1).png";
import c0 from "../../assets/Photos/complite project.png";
import f1 from "../../assets/Photos/Frame 1 (1).png";

 const Me = () => {
  return (
    <div>
        <div className="flex flex-row py-4">
       <div className= "flex flex-col">
        <img src={poly} className="w-10 px-16"/>
        <img src={pic} className="w-60 px-16"/>
        </div> 
        <img src={f1}/></div>
        <div className="flex flex-row px-16 py-8 gap-8">
            <img src={c3}/>
            <img src={c2}/>
            <img src={c1}/>
            <img src={c0}/>

        </div>
    </div>
  )
}


export default Me;
