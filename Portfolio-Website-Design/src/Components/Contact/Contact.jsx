import sr from '../../assets/Photos/service ext.png';
import le from '../../assets/Photos/let.png';
import nam from '../../assets/Photos/Frame 5 (4).png';
import em from '../../assets/Photos/Frame 5 (3).png';
import sub from '../../assets/Photos/Frame 5 (2).png';
import me from '../../assets/Photos/Frame 5 (1).png';
// import sc from '../../assets/Photos/Screenshot_22 1.png';

const Contact = () => {
  return (
    <div>
       <div className='px-16 '>
        <img src ={sr}/>
        </div> 
        <div className='flex flex-row py-4 px-20 gap-4'>
            <img src={le} className='h-15 w-95'/>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                <img src={nam}/>
                <img src={em}/></div>
                <img src={sub}/>
                <img src={me}/>

            </div>
        </div>
    </div>
  )
}


export default Contact;