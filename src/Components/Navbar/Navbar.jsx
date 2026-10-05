import w from '../../assets/Photos/W.png';
import ihome from '../../assets/Photos/🦆 icon _home_.png';
import iuser from '../../assets/Photos/🦆 icon _User_.png';
import ibrief  from '../../assets/Photos/🦆 icon _Briefcase_.png';
import igrade from '../../assets/Photos/🦆 icon _Graduation Cap_.png';
import ilayer from '../../assets/Photos/🦆 icon _Layer Group_.png';
import vector from '../../assets/Photos/Vector (1).png';
import plus from '../../assets/Photos/🦆 icon _User Plus_.png';
import note from '../../assets/Photos/🦆 icon _Sticky Note_.png';
import fb from '../../assets/Photos/🦆 icon _Facebook Messenger_.png';


 const Navbar = () => {
  return (
    <div className="h-10 bg-[#353353] flex flex-col px-3 py-15 w-10  gap-5" >
     <img src={w}/>
     <img src={ihome}/>
     <img src={iuser}/>
     <img src={ibrief}/>
     <img src={igrade}/>
     <img src={ilayer}/>
     <img src={vector}/>
     <img src={plus}/>
     <img src={note}/>
     <img src={fb}/>

    </div>
  )
}


export default Navbar;
