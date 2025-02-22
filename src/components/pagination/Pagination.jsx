import { useState } from "react";
import { Link } from "react-router-dom";
import StraRating from "../StarRating/StarRating";
import { LiaRupeeSignSolid } from "react-icons/lia";
import classes from './Pagination.module.css'

const Pagination=({games})=>{
    const[currentPage,setCurrentPage]=useState(1);
    const totalGamesperPage=9;

    const lastIndexOfGame=currentPage*totalGamesperPage;
    const firstIndexOfGame=lastIndexOfGame-totalGamesperPage;
    const currentGames=games.slice(firstIndexOfGame,lastIndexOfGame);

    const totalPages=Math.ceil(games.length/totalGamesperPage);
    const handlePage=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }
    return(
        <>
         {currentGames.map(el=>(
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
                <div className={classes.btn}>
        {Array.from({length:totalPages},(_,i)=>i+1).map(pageNumber=>(
            <button className={`classes.btnEffect ${pageNumber===currentPage?classes['btn-active']:''}`} onClick={()=>handlePage(pageNumber)}>{pageNumber}</button>
        ))}
        
        </div>
        </>
    )
}
export default Pagination;