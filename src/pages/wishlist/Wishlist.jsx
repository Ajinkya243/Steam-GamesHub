import Nav from "../../components/nav/Nav";
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
const Wishlist=({cartQuantity,setCartQuantity,cart,setCart,wishlistCount,setWishlistCount,wishlist,setWishlist})=>{
    const removeFromWishlist=(id)=>{
        const filterWishlist=wishlist.filter(el=>el._id!==id);
        setWishlist(filterWishlist);
        setWishlistCount(prev=>prev-1);
        toast.error("Game remove from wishlist.")
    }
    const addToCart=(item)=>{
        const isItemCart=cart.find(el=>el._id===item._id);
        if(isItemCart){
            toast.info("Game is already in the cart.");
            const filterData=wishlist.filter(el=>el._id!==item._id);
        setWishlist(filterData);
        setWishlistCount(prev=>prev-1);
        return;
        }
        setCart(prev=>[...prev,item]);
        setCartQuantity(prev=>prev+1);;
        const filterData=wishlist.filter(el=>el._id!==item._id);
        setWishlist(filterData);
        setWishlistCount(prev=>prev-1);
        toast.success("Game added to cart.");
        
    }
    

    return(
        <div className="bg-secondary">
        <Nav cartQuantity={cartQuantity} wishlistCount={wishlistCount}/>
        <div className="container py-5">
         { wishlist.length===0 &&  <p className="fs-1 text-center">Wishlist is empty.</p>}
        <div className="row g-3">
        {wishlist.map(el=>(
            <div className="col col-md-4 col-sm-6">
            <div className="card h-100">
                <img className="img-fluid" src={el.thumbnail} alt="" />
                <div className="card-body fs-3">
                <p>{el.name}</p>
                <p><LuIndianRupee/>{el.price}</p>
                <div className="d-flex justify-content-between">
                <button className="btn btn-outline-danger" onClick={() => removeFromWishlist(el._id)}>
                <MdDelete /> Remove
                </button>
                <button className="btn btn-outline-primary" onClick={() => addToCart(el)}>
                <FaShoppingCart/>Add to Cart
                </button>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
        </div>
        </div>
    )
}
export default Wishlist;