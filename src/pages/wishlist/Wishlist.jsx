import Nav from "../../components/nav/Nav";
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";
import { useEffect } from "react";

const Wishlist=()=>{
    const{setCartQuantity,cart,setCart,setWishlistCount,wishlist,setWishlist,setQuantity,login}=useGlobalState();
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
        setQuantity(prev=>({...prev,[item._id]:(prev[item._id]||1)+1}))
        return;
        }
        setCart(prev=>[...prev,item]);
        setCartQuantity(prev=>prev+1);;
        const filterData=wishlist.filter(el=>el._id!==item._id);
        setWishlist(filterData);
        setWishlistCount(prev=>prev-1);
        toast.success("Game added to cart.");
        
    }

    useEffect(()=>{
if(!login){
    setCart([]);
    setWishlist([]);
    setCartQuantity(0);
    setWishlistCount(0);
}
    },[login])
    

    return(
        <div>
        <Nav/>
        <div className="container py-5">
         { wishlist.length===0 &&  <p className="fs-1 text-center">Wishlist is empty.</p>}
        <div className="row g-3">
        {wishlist.map(el=>(
            <div className="col col-md-4 col-sm-6">
            <div className="card h-100 d-flex  flex-column">
                <img className="img-fluid" src={el.thumbnail} alt="" />
                <div className="card-body fs-3 d-flex flex-column flex-grow">
                <p>{el.name}</p>
                <p><LuIndianRupee/>{el.price}</p>
                <div className="d-flex justify-content-between mt-auto">
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