 import st from '../../assets/Photos/service tex.png';
 import b from '../../assets/Photos/BLOG (2).png';
 import b1 from '../../assets/Photos/BLOG (1).png';
 import b2 from '../../assets/Photos/BLOG.png';
 
 const Blog = () => {
  return (
    <div>
        <div className='px-16'>
        <img src={st}/></div>
        <div className='flex flex-row px-20 gap-5'>
            <img src={b}/>
            <img src={b1}/>
            <img src={b2}/>
        </div>
    </div>
  )
}


export default Blog;