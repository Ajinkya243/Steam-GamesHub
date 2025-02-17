import { useEffect, useState } from "react";

const useDebounce=(value,delay=500)=>{
    const[debounce,setDbounce]=useState();
    useEffect(()=>{
        const handler=setTimeout(() => {
            setDbounce(value);
        }, delay);

        return ()=>clearTimeout(handler);
        
    },[value,delay])

    return debounce;
}
export default useDebounce;