import ell3 from '../../assets/Photos/Ellipse 1.png';
import remove from '../../assets/Photos/portfolio website design templates (Community) (2)/IMG_20220619_150816-removebg-preview 1.png';
import ahemed from '../../assets/Photos/portfolio website design templates (Community)/WAHID AHMED.png';
import web from '../../assets/Photos/I Am Web Designer and video Editor.png';
import social from '../../assets/Photos/social media.png';
import el3 from '../../assets/Photos/portfolio website design templates (Community) (1)/Ellipse 3.png';
import el2 from '../../assets/Photos/portfolio website design templates (Community) (3)/Ellipse 2.png';
import scroll from '../../assets/Photos/Scroll Down.png';

const Home = () => {
 return (
 <div className="relative bg-[#353353] w-full min-h-screen">
 


  <div className="flex flex-col justify-center items-center py-25 gap-3 ">
   <div className="relative w-56 h-56 flex items-end justify-center">
          <img src={ell3} alt="" className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(29,222,203,0.6)]"/>
          <img src={remove} alt="Wahid Ahmed"className="relative h-full object-contain"/>
        </div>
  <img src={ahemed} className=''/>
  <img src={web}/>
 <img src={social} className=''/>

  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
  <div className="relative ">
    <img src={el3} alt=""  className=''/>
    <img
      src={el2}
      alt=""
      className=""
    />
  </div>
  <img src={scroll} alt="Scroll down" />
</div></div>
</div>

);
};
  
export default Home;

