
import group3 from '../../assets/photos/Group 3.png';
import maskGroup from "../../assets/photos/hero image 1.png"
import group4 from '../../assets/photos/Group 4.png';
import group5 from '../../assets/photos/Group 5.png';
import group6 from '../../assets/photos/Group 6.png';
import group7 from '../../assets/photos/Group 7.png';


const Hero = () => {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-[#FFF7F2]">
      
      

      
      <div className="relative mb-20 min-h-0 flex-1">
        <img
          src={maskGroup}
          alt="Modern house"
          className="pointer-events-none absolute -bottom-28 right-4 h-auto w-[58%] max-w-none object-contain object-bottom-right"
        />

    
        <div className="absolute left-16 top-1/2 z-10 w-[38%] -translate-y-1/2">
          <h1 className="mb-6 text-[clamp(2.5rem,4.2vw,4rem)] font-extrabold leading-[1.1] text-[#2B1810]">
            Find Your <br /> Dream Home
          </h1>
          <p className="mb-8 max-w-65 text-sm font-bold leading-6 text-[#2B1810]">
            Explore our curated selection of exquisite properties
            meticulously tailored to your unique dream home vision
          </p>
          <img src={group3} alt="Sign up" className="h-10 w-auto" />
        </div>
      </div>

      
      <div className="absolute bottom-6 left-1/2 z-30 flex w-full max-w-4xl -translate-x-1/2 items-center justify-between gap-4 rounded-2xl bg-[#DCC5B8] p-5 shadow-lg">
        <img src={group4} alt="Location" className="h-10 w-auto" />
        <img src={group5} alt="Type" className="h-10 w-auto" />
        <img src={group6} alt="Price Range" className="h-10 w-auto" />
        <img src={group7} alt="Sign up" className="h-10 w-auto" />
      </div>
    </section>
  )
}

export default Hero


