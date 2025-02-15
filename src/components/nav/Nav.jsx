import {Link} from 'react-router-dom'
import classes from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Nav=()=>{

    return(
        <div className={`${classes.header} py-3`}>
            <div className='container'>
        <nav className="navbar navbar-expand-lg">
        <Link to="/">
            <img className='w-50' src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <input type="text" className={`${classes.search} form-control`} />

            <div className='collapse navbar-collapse' id="navbarNav">
            <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className={`${classes.text} ${classes.item} nav-link`}>Store</Link>
        </li>
        <li className="nav-item">
          <Link className={`${classes.text} ${classes.item} nav-link`} >Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"><FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#FFD43B",}} /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" ><FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#FFD43B",}} /></Link>
        </li>
      </ul>
            </div>
        </nav>
        </div>
        </div>
    )

}
export default Nav;