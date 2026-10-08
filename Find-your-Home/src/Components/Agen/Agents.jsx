
import what from '../../assets/photos/What People Say About Dwello.png';
import frame8 from '../../assets/photos/Frame 8.png';
import frame9 from '../../assets/photos/Frame 9.png';
import frame10 from '../../assets/photos/Frame 10.png';
import group18 from '../../assets/photos/Group 18.png';
import group19 from '../../assets/photos/Group 19.png';


const Agents = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center overflow-hidden bg-[#fdf5ef] px-6 py-6">
      {/* title: height follows the screen */}
      <img
        src={what}
        alt="What People Say About Dwello"
        className="h-[16vh] w-auto shrink-0 object-contain"
      />

      {/* cards: take all the space left between title and arrows */}
      <div className="my-4 flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center gap-6">
        <img src={frame8} alt="Test1" className="h-full w-auto min-w-0 max-w-[32%] object-contain" />
        <img src={frame9} alt="Test2" className="h-full w-auto min-w-0 max-w-[32%] object-contain" />
        <img src={frame10} alt="Test3" className="h-full w-auto min-w-0 max-w-[32%] object-contain" />
      </div>

      {/* arrows: always visible at the bottom of the same screen */}
      <div className="flex shrink-0 flex-row items-center justify-center gap-4">
        <img src={group18} alt="Previous" className="h-10 w-10 cursor-pointer hover:opacity-80" />
        <img src={group19} alt="Next" className="h-10 w-10 cursor-pointer hover:opacity-80" />
      </div>
    </section>
  )
}

export default Agents;