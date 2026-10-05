import remove from '../../assets/Photos/portfolio website design templates (Community) (2)/IMG_20220619_150816-removebg-preview 1.png';
import ahemed from '../../assets/Photos/portfolio website design templates (Community)/WAHID AHMED.png';
import web from '../../assets/Photos/I Am Web Designer and video Editor.png';
import social from '../../assets/Photos/social media.png';

const Home = () => {
  return (
    <div className="h-screen bg-[#353353]">
        <div className="flex flex-col items-center py-25 gap-3 ">
            <img src={remove} className=''/>
            <img src={ahemed} className=''/>
            <img src={web}/>
            <img src={social} className=''/>
        </div>
       
    </div>
  )
}

export default Home;
