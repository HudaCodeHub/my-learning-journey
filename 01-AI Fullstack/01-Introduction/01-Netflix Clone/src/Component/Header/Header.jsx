import logo from '../../assets/image/logo.png';
//  import { Link } from "react-router-dom";
import {Search,Bell,User,ChevronDown} from 'lucide-react';
import styles from './Header.module.css';


function Header() {
 
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <img className={styles} src={logo}  />
      <nav className={styles.nav}>
        <a className={styles.navLink} href="">Home</a>
        <a className={styles.navLink} href="">TV Shows</a>
        <a className={styles.navLink} href="">Movies</a>
        <a className={styles.navLink} href="">New & Popular</a>
        <a className={styles.navLink} href="">My List</a>
        <a className={styles.navLink} href="">Browse by Language</a>
      </nav>
       <div className={styles.rightSection}>
        {/* search */}
        <div className={styles.searchContainer}>
<button className={styles.searchButton}>  
    <Search />
</button>
 </div>
 {/* Notfication */}

<button className={styles.iconButton}>
    <Bell size={20}/>

<span className={styles.notificationBadge}>4</span>
</button>


{/* Profile */}
<div clasName={styles.profileContainer}>
<button className={styles.profileButton}>
  <div className={styles.profileAvatar}>
<User/>
</div>
{/* dropdown icon */}
<ChevronDown size={20}/>
</button>

</div>




        </div></div>
                 </header>


  )
}


export default Header;