import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/publisher/useFetch";
import Products from "../productGrid/Products";
import Nav from "../nav/Nav";
import { ClipLoader } from 'react-spinners';

const PublisherGrid=()=>{
    
        const {publisher}=useParams();
    const{data,isLoading,error}=useQuery({
        queryKey:['publisher',publisher],
        queryFn:useFetch
    })
    return(
        <div className="bg-secondary">
            <Nav/>
            {isLoading && (
                <div className="text-center">
            <ClipLoader/>
            </div> )}
            {error && <p className="text-center">Error occur while loading.</p>} 
            {data && <div>
                
                <Products products={data} /> 
            </div>
            
            }
           
        </div>
    )

}
export default PublisherGrid;