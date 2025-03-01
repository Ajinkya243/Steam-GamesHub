const useFetchGames=async()=>{
    const resp=await fetch("https://steam-games-hub-backend.vercel.app/steam");
    if(!resp.ok){
        throw Error("Error occur while fetching data.")
    }
    return resp.json();

}
export default useFetchGames;