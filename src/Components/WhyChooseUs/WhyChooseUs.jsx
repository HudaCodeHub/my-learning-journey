
import maskGroup from '../../assets/photos/mask Group.png';
import help from '../../assets/photos/We Help You To Find Your Dream Home.png';
import group8  from '../../assets/photos/Group 8.png';
import group9  from '../../assets/photos/Group 9.png';
import group10  from '../../assets/photos/Group 10.png';
import why from '../../assets/photos/Why Choose Us.png';
import frame1 from '../../assets/photos/Frame 1.png';
import frame2 from '../../assets/photos/Frame 2.png';
import frame3 from '../../assets/photos/Frame 3.png';
import frame4 from '../../assets/photos/Frame 4.png';
import From from '../../assets/photos/From.png';
import Elevate from '../../assets/photos/Elevate.png';

const WhyChooseUs = () => {
  return (
    <div className=" w-full h-screen overflow-hidden px-6 py-6 flex flex-col justify-between gap-4 max-w-6xl mx-auto">

      <div className="w-full h-[45%] flex flex-row items-center gap-8">
        
        <div className="w-1/2 h-full">
          <img
            src={maskGroup}
            alt="maskgroup"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="w-1/2 h-full flex flex-col justify-center gap-3 min-h-0">
          <img src={help}  className="w-full max-h-16 object-contain object-left" />
          <img src={From} className="w-full max-h-16 object-contain object-left" />
          <div className="flex flex-row gap-4 items-center pt-2">
            <img src={group8}  className="w-1/3 max-h-14 object-contain object-left" />
            <img src={group9}  className="w-1/3 max-h-14 object-contain object-left" />
            <img src={group10}  className="w-1/3 max-h-14 object-contain object-left" />
          </div>
        </div>
      </div>

      
      <div className="flex flex-col items-center gap-3 w-full">
        <img src={why}  className="h-8 w-auto max-w-xl object-contain" />
        <img src={Elevate} className="h-8 w-auto max-w-xl object-contain" />
      </div>

      
      <div className="grid grid-cols-4 gap-4 w-full h-[30%]">
        <img src={frame1}  className="w-full h-full object-contain" />
        <img src={frame2}  className="w-full h-full object-contain" />
        <img src={frame3}  className="w-full h-full object-contain" />
        <img src={frame4}  className="w-full h-full object-contain" />
      </div>

    </div>
  );
};

export default WhyChooseUs;