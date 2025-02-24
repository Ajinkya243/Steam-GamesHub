import { useQuery } from "@tanstack/react-query";
import useFetchGames from '../../hooks/allGames/useFetchGames'
import Nav from "../../components/nav/Nav";
import { ClipLoader } from 'react-spinners';
import Products from "../../components/productGrid/Products";
import Aside from "../../components/aside/Aside";
import { useState } from "react";
const Store=()=>{
    const[games,setGames]=useState([]);
    const {data,isLoading,error}=useQuery({
        queryKey:["games",'allgames'],
        queryFn:useFetchGames
    })
    return (
        <div>
            <Nav />
            <div className="row ms-4">
                <div className="col col-md-3 py-5">
            {data && <Aside data={data} setGames={setGames} games={games}/>}
            </div>
            <div className="col col-md-9">
            {isLoading && (
                <div className="text-center">
                <ClipLoader/>
                </div>
            )}
            {error && <p>Error occur</p>}
            {games.length===0 && !isLoading && <p className="text-center py-3 fs-2">No Games found!</p>}
            {games && (
                <div>
                    <Products products={games}/>
                </div>
            )}
            </div>
            </div>
        </div>
    )
}
export default Store;