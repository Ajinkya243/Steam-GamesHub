import { useQuery } from "@tanstack/react-query";
import useFetchGames from '../../hooks/allGames/useFetchGames'
import Nav from "../../components/nav/Nav";
import { ClipLoader } from 'react-spinners';
import Products from "../../components/productGrid/Products";
const Store=()=>{
    const {data,isLoading,error}=useQuery({
        queryKey:["games",'allgames'],
        queryFn:useFetchGames
    })
    return (
        <div className="bg-secondary">
            <Nav/>
            {isLoading && (
                <div className="text-center">
                <ClipLoader/>
                </div>
            )}
            {error && <p>Error occur</p>}
            {data && (
                <div>
                    <Products products={data}/>
                </div>
            )}
        </div>
    )
}
export default Store;