import {useEffect, useState } from "react";
import useDebounce from "../../utils/debounce/useDebounce";
import useFetchGames from "../../hooks/allGames/useFetchGames";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import classes from './SearchBar.module.css';
import { LiaRupeeSignSolid } from "react-icons/lia";
const SearchBar=()=>{
    const[name,setName]=useState('');
    const[game,setGame]=useState([]);
    const[status,setStatus]=useState(false);
    const {data}=useQuery({
        queryKey:['games'],
        queryFn:useFetchGames
    })
    const userInput=useDebounce(name,500);
    
    
    
   useEffect(()=>{
            if(userInput && data){
                console.log('inside effect')
            const filterData=data.filter(el=>el.name.toLowerCase().includes(userInput.toLowerCase()));
            console.log('game',filterData);
            setGame(filterData);
            setStatus(true)
            }
            return ()=>{setGame([]);setStatus(false);}
    },[userInput,data])
    return(
        <div>
            <input className="form-control" type="text" onChange={(event)=>setName(event.target.value)} placeholder="Please enter the game name."/>
            <ul className="list-group list-group-flush">
            {status && game.length===0 && (
                <li className="text-primary list-group-item">No games found</li>
            )}
            {game.length>0 && (
                game.map(el=>(
                    <li className="text-light list-group-item"><Link to={`/steam/product/${el._id}`}>
                        <div className="d-flex justify-content-between">
                            <img className={classes.img} src={el.thumbnail} alt="" />
                            <div>
                                <p>{el.name}</p>
                                <p className="text-end">{el.price?(<><LiaRupeeSignSolid/>{el.price}</>):'Free to Play'}</p>
                            </div>
                        </div>
                        </Link></li>
                ))
            )}
            </ul>
        </div>
    )
}
export default SearchBar;