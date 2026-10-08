
import our from'../../assets/photos/Our Popular Residences.png';
import frame5 from'../../assets/photos/Frame 5.png';
import frame6 from'../../assets/photos/Frame 6.png';
import frame7 from'../../assets/photos/Frame 7.png';

 const  Popular = () => {
  return (
    <div className='flex flex-col items-center py-17 pxw-full'>
        <div className=' flex flex-col items center'>
        <img src={our} className='mb-10'/></div>
        <div className='flex flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-4'>
            <img src={frame5} alt="Residence 1" className="w-1/3 h-auto object-cover rounded-2xl shadow-md" />
            <img src={frame6} alt="Residence 2" className="w-1/3 h-auto object-cover rounded-2xl shadow-md"/>
            <img src={frame7} alt="Residence 3" className="w-1/3 h-auto object-cover rounded-2xl shadow-md"/>

        </div></div>
  )
}



export default  Popular;