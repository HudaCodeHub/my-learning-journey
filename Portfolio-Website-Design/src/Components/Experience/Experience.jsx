import s6 from '../../assets/Photos/service text 6.png';
import e9 from '../../assets/Photos/Vector 9.png';
import line from '../../assets/Photos/Line 1.png';
import pre from '../../assets/Photos/2022 - Present.png';
import academic from '../../assets/Photos/Academic Degree.png';
import loren from '../../assets/Photos/Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto..png';

const items = [1, 2, 3];
const sides = ["left", "right"];

const Experience = () => {
  return (
    <div>
      <img src={s6} alt="" className="px-16" />

      <div className="flex flex-row gap-8 px-16 mt-6">
        {sides.map((side) => (
          <div
            key={side}
            className="flex-1 min-w-0 rounded-2xl p-6 bg-[#353353]"
          >
            {items.map((item) => (
              <div key={item} className="flex gap-4 pb-6 last:pb-0">
                
                <div className="flex flex-col items-center w-6 shrink-0">
                  <img src={e9} alt="" className="w-6 h-auto" />
                  <div className="relative flex-1 w-px mt-1">
                    <img
                      src={line}
                      alt=""
                      className="absolute inset-0 h-full w-full object-fill"
                    />
                  </div>
                </div>

                
                <div className="flex flex-col items-start gap-2 min-w-0">
                  <img src={pre} alt="" className="h-auto max-w-full" />
                  <img src={academic} alt="" className="h-auto max-w-full" />
                  <img src={loren} alt="" className="h-auto max-w-full" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;