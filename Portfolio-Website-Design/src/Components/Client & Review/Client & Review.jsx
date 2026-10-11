import v from '../../assets/Photos/a7e6e7ab7eb14688b4480e24ba0e35d0-removebg-preview 1.png';
import view from'../../assets/Photos/Clients & Reviews.png';
import ava from '../../assets/Photos/avatar-3 1.png';
import sar from '../../assets/Photos/SAROWAR HOSSEN.png';
import pro from '../../assets/Photos/Product designer at Dribbble.png';
import enjoy from '../../assets/Photos/I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍.png';
import side from '../../assets/Photos/SIDEBAR.png';



 const Review = () => {
  return (
    <div>
        <div className="flex flex-row px-20 ">
            <img src={v} />
            <img src={view} className="w-50 h-10 "/>
        </div>
   <div className="flex flex-col items-center gap-6 ">
    <img src={ava} />
    <img src={sar} />
    <img src={pro} />
    <img src={enjoy} className='bg-[#353353] '/>
    <img src={side}/>
    
   </div>
    </div>
  )
}


export default Review;
