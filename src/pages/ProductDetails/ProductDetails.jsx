import Nav from "../../components/nav/Nav";
import { useParams } from "react-router-dom";
import useFetchProduct from "../../hooks/productDetails/useFetchProduct";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from 'react-spinners';
import classes from './ProductDetails.module.css';
import { useEffect, useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useGlobalState } from "../../utils/context/GlobalStateProvider";

const ProductDetails=()=>{
    const{setCartQuantity,cart,setCart,setWishlistCount,wishlist,setWishlist,login}=useGlobalState();
    const[url,setUrl]=useState();
    const[inCart,setInCart]=useState(false);
    const[inWishlist,setInWishlist]=useState(false);
    const{id}=useParams();
    const{data,isLoading,error}=useQuery({
        queryKey:['game',id],
        queryFn:useFetchProduct
    })
    const handleCart=(id)=>{
        setCartQuantity(prev=>prev+1);
        toast.success("Game added to Cart");
        setCart(prev=>[...prev,data]);
    }
    const handleWishList=()=>{
        setWishlistCount(prev=>prev+1);
        toast.success("Game added to wishlist")
        setWishlist(prev=>[...prev,data]);
    }
   useEffect(()=>{
    const inCart=cart.some(el=>el._id===id);
    const inWishlist=wishlist.some(el=>el._id===id);
    setInCart(inCart);
    setInWishlist(inWishlist);
   },[id,cart,wishlist]);
    return(
        <div className="bg-secondary">
        <Nav key={data?._id}/>
        {isLoading && (
            <div className="text-center">
                <ClipLoader/>
            </div>
        ) }
        {error && <p>Error occur while fetching data</p>}
        {data && (
            <div className="container py-5">
                <p className={`${classes.title} display-3`} ><img className={`${classes.img}`} src={data.companyLogo} alt="" /> {data.publisher}</p>
                <hr />
            <div className="row g-3">
            <p className={`${classes.text} display-5`}>{data.name}</p>
                <div className="col col-md-7">
                
                {data.videoUrl ? (<video autoPlay  muted loop playsInline controls width="100%" key={data._id}>
          <source
            src={data.videoUrl}
            type="video/mp4"
          />
        </video>):(<img width={'100%'} src={data.screenShots[0]} alt="sample pic" />)}
        <h3 className="text-light">Popular user-defined tags for this product:</h3>
        <div className="d-flex gap-3">
        {data.tags.map(el=>(
            <p className={classes['user-tags']}>{el}</p>
        ))}
        </div>
                </div>
                <div className="col-md-5 ">
                    <div className={`${classes.card} card`}>
                        <img src={data.thumbnail} alt="" />
                        <div className="card-body">
                            <p className="text-light">{data.details}</p>
                            <div className={classes.tags}>
                            <p>Recent Reviews:<span> {data.recentReviews}</span></p>
                            <p>All Reviews: <span >{data.allReviews}</span></p>
                            <p >Release Date: <span >{data.releaseDate}</span></p>
                            <p >Developer: <span>{data.developer}</span></p>
                            <p>Publisher: <span>{data.publisher}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className={classes['buy-card']}>
                <p className="display-5">Buy {data.name}</p>
                <div className={classes['price-tag']}>
                    <span className="bg-dark p-2"><LiaRupeeSignSolid/>{data.price?data.price:'Free to play'}</span>
                    {login ?(
                        <>
                        {inCart ?<Link to="/steam/cart" className="btn btn-success">Go to Cart</Link>:<button className="btn btn-primary" onClick={()=>handleCart()}>Add to Cart</button>}
                        {inWishlist ?<Link to="/steam/wishlist" className="btn btn-success">Go to Wishlist</Link>:<button className="btn btn-primary" onClick={handleWishList}>Add to Wishlist</button>}
                        </>
                    ):(
                        <>
                        <Link to="/steam/login" className="btn btn-primary">Add to Cart</Link>
                        <Link to="/steam/login" className="btn btn-primary">Add to Wishlist</Link>
                        </>
                    )}
                    
                    
                    
                    
                </div>
            </div>
            <br />
            <div className={classes['image-container']}>
                <img key={data._id} className="" src={url?url:data.screenShots[0]} alt="" style={{maxWidth:'100%',maxHeight:"100%"}}/>
                <div className={classes['image-gallery']}>
            {data.screenShots.map(el=>(
                <img className={classes.image} src={el} alt="pic" onClick={(event)=>setUrl(event.target.src)} />
            ))}
            </div>
            </div>
            
            </div>
        )}

        </div>
    )
}
export default ProductDetails;