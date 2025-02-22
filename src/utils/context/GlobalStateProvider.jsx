import { useState, useContext, createContext } from "react";

const GlobalStateContext=createContext();

const GlobalStateProvider=({children})=>{
    const[cartQuantity,setCartQuantity]=useState(0);
      const[cart,setCart]=useState([]);
      const[wishlistCount,setWishlistCount]=useState(0);
      const[wishlist,setWishlist]=useState([]);
      const[quantity,setQuantity]=useState({});
      const[login,setLogin]=useState(true);
      const[user,setUser]=useState({name:'John_W',email:'hitman@gmail.com',password:'11223344',address:'Somewhere in Hitman town.'});
      const[allUsers,setAllUsers]=useState([{name:'John_W',email:'hitman@gmail.com',password:'11223344',address:'Somewhere in Hitman town.'}])

      return(
        <GlobalStateContext.Provider
        value={{
            cartQuantity,
        setCartQuantity,
        cart,
        setCart,
        wishlistCount,
        setWishlistCount,
        wishlist,
        setWishlist,
        quantity,
        setQuantity,
        login,
        setLogin,
        user,
        setUser,
        allUsers,
        setAllUsers
        }}
        >
            {children}
        </GlobalStateContext.Provider>
      )
}

export const useGlobalState=()=>useContext(GlobalStateContext);
export default GlobalStateProvider;