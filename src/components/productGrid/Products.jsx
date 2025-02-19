import { Link } from "react-router-dom";
import StraRating from "../StarRating/StarRating";
import classes from './Product.module.css';
import { LiaRupeeSignSolid } from "react-icons/lia";
const Products=({products})=>{

    return(
        <div className="container my-5">
            <div className="row g-3">
                {products.map(el=>(
                    <div className="col col-md-4 col-sm-6 col-12">
                        <div className="card h-100 ">
                            <Link to={`/steam/product/${el._id}`}>
                            <div className={classes.container}>
                            <img className="img-fluid" src={el.thumbnail} alt="logo" />
                            <div className={classes.logo} >
                            <img className="img-fluid w-25 h-25 rounded-circle" src={el.companyLogo} alt="" />
                            </div>
                            </div>
                            <div className="card-body">
                                <div className="text-center py-3" style={{backgroundColor:"#2c2f33"}}>
                            
                            <p style={{color:"ffffff"}}>{el.name}</p>
                            <p><LiaRupeeSignSolid/>{el.price ? el.price : "Free to Play"} </p>
                            <p>{el.rating}<StraRating stars={el.rating} /></p>
                            </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Products;