import {Link} from 'react-router-dom'
import classes from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCartShopping, faUser, faRightFromBracket , faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../searchbar/SearchBar';
import { useGlobalState } from '../../utils/context/GlobalStateProvider';
const Nav=()=>{
  const{cartQuantity,wishlistCount,login,user,setLogin}=useGlobalState();
  const handleLogin=()=>{
    setLogin(prev=>!prev);
  }
    return(
        <div className={`${classes.header} py-3`}>
            <div className={`${classes['parent-container']} container`}>
        <nav className="navbar navbar-expand-lg">
        <Link to="/">
            <img className='w-50' src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    

            <div className='collapse navbar-collapse' id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex gap-2">
        <li className="nav-item">
          <Link to="/steam/store" className={`${classes.text} ${classes.item} nav-link`}>Store</Link>
        </li>
        <li className="nav-item">
          {login ? <Link to="/steam/user" className={`${classes.text} ${classes.item} nav-link`} >{user.name}<FontAwesomeIcon icon={faUser} size='xl' style={{color: "#FFD43B",}} /></Link>: <Link to="/steam/login" className={`${classes.text} ${classes.item} nav-link`} ><FontAwesomeIcon icon={faUser} size='xl' style={{color: "#FFD43B",}} /></Link> }
        </li>
        <li className="nav-item">
          <div className={classes['cart-container']}>
          <Link to="/steam/wishlist" className="nav-link"><FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#FFD43B"}} /></Link>
          {wishlistCount>0 && <p className={classes['cart-quantity']}>{wishlistCount}</p>}
          </div>
        </li>
        <li className="nav-item" style={{width:'60px'}}>
          <div className={classes['cart-container']}>
           <Link to="/steam/cart" className="nav-link" ><FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#FFD43B",}} /></Link> 
           {cartQuantity>0 && <p className={classes['cart-quantity']}>{cartQuantity}</p>}
           </div>
        </li>
        <li className="nav-item">
          <Link to="/steam/history" className={`${classes.text} ${classes.item} nav-link`}><FontAwesomeIcon icon={faClockRotateLeft} size="xl" style={{color: "#FFD43B",}} /></Link>
        </li>
       {login && <li className='nav-link'>
        <button onClick={handleLogin}><FontAwesomeIcon icon={faRightFromBracket} size='xl' style={{color: "#FFD43B",}} /></button>
        </li>}
      </ul>
            </div>
        </nav>
        <div className={`${classes['child-container']} col-md-6 col-sm-3`}>
          <SearchBar/>
        </div>
        </div>
        
        </div>
    )

}
export default Nav;