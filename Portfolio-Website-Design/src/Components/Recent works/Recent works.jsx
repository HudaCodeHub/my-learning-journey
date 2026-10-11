import file from '../../assets/Photos/works.png';
import every from '../../assets/Photos/Everything.png';
import create from '../../assets/Photos/Creative.png';
import art from '../../assets/Photos/Art.png';
import brand from '../../assets/Photos/Branding.png';
import design from '../../assets/Photos/Design.png';
import eg from '../../assets/Photos/exzemple.png';
import eg1 from '../../assets/Photos/exzemple (1).png';

const  Works = () => {
  return (
    <div>
        <div className="px-16 py-4">
            <img src={file}/>
        </div>
        <div className="flex flex-row px-20 gap-8">
            <img src={every}/>
             <img src={create}/>
              <img src={art}/>
               <img src={design}/>
                <img src={brand}/>
        </div>
        <div className="px-40 flex flex-col gap-5">
        <img src={eg}/>
        <img src={eg1}/>
        </div>
    </div>
  )
}



export default  Works;