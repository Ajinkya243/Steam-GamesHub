import Nav from "../../components/nav/Nav";
import { useParams } from "react-router-dom";
import useFetchProduct from "../../hooks/productDetails/useFetchProduct";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from 'react-spinners';
import classes from './ProductDetails.module.css';
import { useState } from "react";

const ProductDetails=()=>{
    const[url,setUrl]=useState();
    const{id}=useParams();
    const{data,isLoading,error}=useQuery({
        queryKey:['game',id],
        queryFn:useFetchProduct
    })
    return(
        <div className="bg-secondary">
        <Nav/>
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
                
                {data.videoUrl ? (<video autoPlay  muted loop playsInline controls width="100%">
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
            <br />
            <div className={classes['image-container']}>
                <img className="" src={url?url:data.screenShots[0]} alt="" style={{maxWidth:'100%',maxHeight:"100%"}}/>
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