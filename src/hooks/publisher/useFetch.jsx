

const useFetch=async({queryKey})=>{
    const publisher=queryKey[1];
    const resp=await fetch(`https://steam-games-hub-backend.vercel.app/steam/publisher/${publisher}`);
    if(!resp.ok){
        throw Error("Error occur while fetching data")
    }
    return resp.json();
}

export default useFetch;
