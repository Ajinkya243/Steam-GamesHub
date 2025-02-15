import { Link } from "react-router-dom";
const Products=({products})=>{

    return(
        <div className="container my-5">
            <div className="row g-3">
                {products.map(el=>(
                    <div className="col col-md-4 col-sm-6 col-12">
                        <div className="card h-100 ">
                            <Link to="steam/product/id">
                            <img className="img-fluid" src={el.thumbnail} alt="logo" />
                            <div className="card-body">
                                <div className="d-flex align-items-center gap-5" style={{backgroundColor:"#2c2f33"}}>
                            <img className="img-fluid w-25 h-25" src={el.companyLogo} alt="" />
                            <p style={{color:"ffffff"}}>{el.name}</p>
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