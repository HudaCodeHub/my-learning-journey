import ser from '../../assets/Photos/service text.png';
import s1 from '../../assets/Photos/service bar (2).png';
import s2 from '../../assets/Photos/service bar.png';
 const Services = () => {
  return (
    <div className='flex flex-col py-4 px-16 '>
        <div className='px-16 '>
            <img src={ser}/>
        </div>
        <img src={s1}/>
        <img src={s2}/>
    </div>
  )
}


export default Services;