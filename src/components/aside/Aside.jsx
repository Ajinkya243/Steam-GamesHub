import { useEffect, useState } from "react";

const Aside=({data,setGames})=>{
    const[price,setPrice]=useState(5000);
    const[category,setCategory]=useState([]);
    const[rating,setRating]=useState("");
    const[priceSort,setPriceSort]=useState("");
    const handleCategory=(event)=>{
        const{value,checked}=event.target;
        if(checked){
        setCategory(prev=>[...prev,value]);
        }
        else{
            setCategory(prev=>prev.filter(el=>el!==value))
        }
    }
    const handleRating=(event)=>{
        const {value}=event.target;
        setRating(value);
    }
    const handlePrice=(event)=>{
        const{value}=event.target;
        setPriceSort(value);
    }
    const clearFilters=()=>{
        setPrice(5000);
        setCategory([]);
        setRating("");
        setPriceSort("");
    }
    useEffect(()=>{
        const filterData = data.filter(
            (el) =>(el.price<= price) &&
              (category.length === 0 || category.includes(el.genre)) &&
              (rating === "" || el.allReviews.startsWith(rating))
          ).sort((a,b)=>{
            if(priceSort==='low') return +a.price - +b.price;
            if(priceSort==='high') return +b.price - +a.price;
            return 0;
          })
        const finalData=priceSort==='free' ? filterData.filter(el=>el.price===0):filterData
        setGames(finalData);

    },[price,category,rating,priceSort])
    return(
        <div className="bg-light">
            <div className="container">
            <div className="d-flex justify-content-between align-items-center">
            <p className="fs-1">Filters</p>
            <button className="btn btn-primary" onClick={clearFilters}>Clear</button>
            </div>
            <div>
                <p className="fs-2 mb-0">Price:</p>
                <input className="w-50" type="range" min={0} max={5000} step={100} value={price} onChange={event=>setPrice(Number(event.target.value))}/><span className="fs-3">{price}</span>
            </div>
            <hr className="mb-0"/>
            <div>
                <p className="fs-2 m-0">Category:</p>
                <input type="checkbox" value="Adventure" checked={category.includes('Adventure')} onChange={handleCategory} /> <span className="fs-5">Adventure</span><br />
                <input type="checkbox" value="Action" checked={category.includes("Action")} onChange={handleCategory} /> <span className="fs-5">Action</span><br />

                <input type="checkbox" value="Racing" checked={category.includes("Racing")} onChange={handleCategory} /> <span className="fs-5">Racing</span><br />

                <input type="checkbox" value="RPG" checked={category.includes("RPG")} onChange={handleCategory} /> <span className="fs-5">RPG</span> <br />
                <input type="checkbox" value="Survival" checked={category.includes("Survival")} onChange={handleCategory} /> <span className="fs-5">Survival</span> <br />
                <input type="checkbox" value="Sports" checked={category.includes('Sports')} onChange={handleCategory} /><span className="fs-5">Sports</span>
            </div>
            <hr className="mb-0"/>
            <div>
                <p className="fs-2 mb-0">Rating</p>
                <input type="radio" name="rating" value="Very Positive" checked={rating==='Very Positive'} onChange={handleRating}/><span className="fs-5">Very Positive</span> <br />
                <input type="radio" name="rating" value="Positive" checked={rating==='Positive'} onChange={handleRating} /><span className="fs-5">Positive</span> <br />
                <input type="radio" name="rating" value="Mixed" checked={rating==='Mixed'} onChange={handleRating} /><span className="fs-5">Mixed</span>
            </div>
            <hr className="mb-0"/>
            <div>
                <p className="fs-2 mb-0">Sort by price:</p>
                <input type="radio" value="low" name="price" onChange={handlePrice} checked={priceSort==='low'}  /><span className="fs-5">Low to High</span> <br />
                <input type="radio" value="high" name="price" onChange={handlePrice} checked={priceSort==='high'}  /><span className="fs-5">High to Low</span> <br />
                <input type="radio" value="free" name="price" onChange={handlePrice} checked={priceSort==='free'} /> <span className="fs-5">Free to Play</span>
            </div>
            </div>
        </div>
    )

}
export default Aside;