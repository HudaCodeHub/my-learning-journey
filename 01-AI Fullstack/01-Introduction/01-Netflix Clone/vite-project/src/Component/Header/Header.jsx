import logo from '../../assets/image/logo.png';

function Header() {
  return (
    <header>
        <div>
            <img src={logo}/>
           <nav><a href=""> Home</a>
           <a href=""> Tv Shows</a>
           <a href="">Movies</a>
           <a href="">New & Popular</a>
           <a href="">My List</a>
           <a href="">Browser by Language</a>
           </nav>
       <div>
        {/* search */}
        <div>
<button> 
    {/* search button */}
</button>
 </div>
 {/* Notfication */}

<button>
    Notification icon

<span></span>
</button>


{/* Profile */}
<div>
<button>
{/* user icon */}

{/* dropdown icon */}

</button>

</div>




        </div></div>
        </header>
  )
}

export default Header