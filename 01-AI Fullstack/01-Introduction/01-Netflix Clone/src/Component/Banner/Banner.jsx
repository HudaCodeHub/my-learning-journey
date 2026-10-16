import Netflixbannerlogo from '../../assets/image/logo.png';
 import {Play,Info} from 'lucide-react'
 import styles from './Banner.module.css'

function Banner() {
  return (
    <div className={styles.banner}>

        <div className={styles.content}>
             {/*netflix image  */}
<img className={styles.logoImg} src={Netflixbannerlogo} alt="" />
             {/* title */}
<h1 className={styles.title}> Bridgton </h1>
             {/* description */}
             <h1 className={styles.description}>Shondaland's Emmy-winning series brings Julia Quinn's novels to life,
as eight siblings seek their perfect match amid London's scandals and
society.</h1>
{/* button */}

<div className={styles.buttonContainer}>
<button className={styles.button}>
    <Play size={20}/>
    Play</button>
<button className={styles.button}>
    <Info size={20}/>
    My Lists</button>
    </div>
{/* fading */}
<div className={styles.fadebutton}>
  
</div>
</div>
    </div>
  )
}

export default Banner