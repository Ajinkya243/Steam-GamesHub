import HomePage from '../../assets/images/HomePage.webp'
import Card from '../card/Card';
import classes from './Main.module.css';
import { Link } from 'react-router-dom';
const Main=()=>{
    return(
        <div className={`${classes.body}`}>
        <div className={`${classes.main}`}>
            <img className={`${classes.img} img-fluid`} src={HomePage} alt="" />
            <div>
                
                <div className={`${classes.card} card col-md-3 text-center`}>
                    <div className={`${classes.text} card-body `}>
                        <h3 className='card-title'>Welcome to Steam</h3>
                        <p className='card-text'>Step Into the World of Games</p>
                        <Link className='btn btn-primary'>Explore Now &rarr; </Link>
                    </div>
                </div>
                
        </div>
        </div>
        <br />
        <br />
        <h2 className="display-4 text-primary">Top Pulisher's &rarr; </h2>
        <div className='container'>
         <Card/> 
         </div>
        </div>
    )
}
export default Main;