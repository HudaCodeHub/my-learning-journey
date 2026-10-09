import s6 from '../../assets/Photos/service text 6.png';
import e9 from '../../assets/Photos/Vector 9.png';
import line from '../../assets/Photos/Line 1.png';
import pre from '../../assets/Photos/2022 - Present.png';
import academic from '../../assets/Photos/Academic Degree.png';
import loren from '../../assets/Photos/Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto..png';
const items = [1, 2, 3]
 const Experience = () => {
  return (
    <div>
    <img src={s6} className="px-16"/>
    <div className='flex flex-row'>
   <div className="w-full px-16 'max-w-140' rounded-2xl bg-[#353353] p-6 shadow-xl">
      
      {items.map((item) => (
        <div key={item} className="flex gap-4 mb-6 last:mb-0">
          
          <div className="flex flex-col items-center w-6 shrink-0">
            <img src={e9} alt="" className="w-6 h-auto" />
            <div className="flex-1 min-h-15 mt-1">
              <img src={line} alt="" className="h-full w-px object-fill" />
            </div>
          </div>

          
          <div className="flex flex-col items-start gap-2">
            <img src={pre} alt="" className="h-auto max-w-full" />
            <img src={academic} alt="" className="h-auto max-w-full" />
            <img src={loren} alt="" className="h-auto max-w-full" />
          </div>
        </div>
      ))}
    </div>
      <div>
      {items.map((item) => (
        <div key={item} className="flex gap-4 mb-6 last:mb-0">
        
          <div className="flex flex-col items-center w-6 shrink-0">
            <img src={e9} alt="" className="w-6 h-auto" />
            <div className="flex-1 min-h-15 mt-1">
              <img src={line} alt="" className="h-full w-px object-fill" />
            </div>
          </div>

          
          <div className="flex flex-col items-start gap-2">
            <img src={pre} alt="" className="h-auto max-w-full" />
            <img src={academic} alt="" className="h-auto max-w-full" />
            <img src={loren} alt="" className="h-auto max-w-full" />
          </div>
        </div>
      ))}
    </div>
    </div></div>
  );
};



export default Experience;