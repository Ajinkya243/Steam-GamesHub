
import Pagination from "../pagination/Pagination";
const Products=({products})=>{

    return(
        <div className="container my-5">
            <div className="row g-3">
                <Pagination games={products} />
            </div>
        </div>
    )
}
export default Products;