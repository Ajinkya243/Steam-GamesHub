import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const StraRating=({stars})=>{
    // const ratingStar=Array.from({length:5},(_,index)=>{
    //     let number=index+0.5;

    //     return(
    //         <span key={index}>
    //             {stars >=index?(<FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />):stars>=number?(<FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />):<FontAwesomeIcon icon={faStar} />}
    //         </span>
    //     )
    // })
    let rating=[];
    for(let i=1;i<=5;i++){
        if(stars>=i){
            rating.push(<FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />)
        }
        else if(stars>(i-0.5)){
            rating.push(<FontAwesomeIcon icon={faStarHalf} style={{color: "#FFD43B",}} />)
        }
        else{
            rating.push(<FontAwesomeIcon icon={faStar} />)
        }
    }

    return(
        <>
        {rating}
        </>
    )
}
export default StraRating;