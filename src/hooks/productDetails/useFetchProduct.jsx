
const useFetchProduct=async({queryKey})=>{
    const key=queryKey[1];
    const resp=await fetch(`https://steam-games-hub-backend.vercel.app/steam/_id/${key}`);
    if(!resp.ok){
        throw Error("Error occur while fetching data")
    }
    return resp.json();
}
export default useFetchProduct