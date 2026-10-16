import styles from './MovieCard.module.css';
import { FaCirclePlay } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

function MovieCard({movie}) {

    let geners = ['Adventure', 'Action', 'Thriller']
  return (
    <div className={styles.cardwrapper}>
        {/* poster image */}
<img src={styles.poster}/>
        {/* hover card */}
<div className={styles.hoveCard}>
{/* img */}
<img className={styles.hoverImage} src={movie.poster.path} alt="" />

{/* badge */}
<div className={styles.badge}>Recently added</div>
{/* button row */}
<div className={styles.buttonsRow}>
<FaCirclePlay className={styles.circleButton} color='white'  size={40}/>
<CiCirclePlus className={styles.circleButton}  color='white' size={40}/>
<GoCheckCircleFill className={styles.circleButton}  color='white' size={40}/>
<IoIosArrowDown className={styles.circleButtonSmall} color='white' size={40}/>

</div>


{/* metadata row */}
<div className={styles.metaRow}>
<span className={styles.tag}>U/A 16+c</span>
<span className={styles.tag}>Movie</span>
<span className={styles.tag}>HD+</span>
</div>
{/* geners */}

<div className={styles.geners}>
{geners?.map((g,index)=>{
    return (
    <span key={index}>
        (g)
{index<geners.length-1 && <span className={styles.dot}>*</span>}


    </span>
    );
    })}

</div>
</div>
  </div>
  )
}

export default MovieCard;