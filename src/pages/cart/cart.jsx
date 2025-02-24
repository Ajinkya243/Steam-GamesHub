import Nav from "../../components/nav/Nav";
import { LuIndianRupee } from "react-icons/lu";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";
import { FaRegEdit } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";


const Cart = () => {
    const{cart,setCart,setCartQuantity,setWishlist,wishlist,setWishlistCount,quantity,setQuantity,login,user}=useGlobalState();
    const navigate=useNavigate();
    const[address,setAddress]=useState(user.address);
    const[edit,setEdit]=useState(false);
    const increaseQuantity = (id) => {
        setQuantity(prev => ({
            ...prev, [id]: (prev[id] || 1) + 1
        }));
        toast.success('Quantity increased by 1');
    };

    const decreaseQuantity = (id) => {
        setQuantity(prev => ({
            ...prev, [id]: Math.max((prev[id] || 1) - 1, 1)
        }));
        if(quantity[id]>1){
            toast.success('Quantity decreased by 1');
        }
        
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(el => el._id !== id);
        setCart(updatedCart);
        setCartQuantity(prev => prev - 1);
        toast.error("Game removed from cart.");
    };

    const addToWishlist = (item) => {
        const inWishlist=wishlist.find(el=>el._id===item._id);
        if(inWishlist){
            toast.info("Game already in wishlist");
            const updatedCart = cart.filter(el => el._id !== item._id);
        setCart(updatedCart);
        setCartQuantity(prev => prev - 1);
            return;
        }
        setWishlist(prev => [...prev, item]);
        setWishlistCount(prev => prev + 1);
        const updatedCart = cart.filter(el => el._id !== item._id);
        setCart(updatedCart);
        setCartQuantity(prev => prev - 1);
        toast.success('Game added to wishlist.');
        
    };

    const totalPrice = cart.reduce((acc, cur) => {
        const totalQuantity = (quantity[cur._id] || 1);
        return acc += cur.price * totalQuantity;
    }, 0);

    const deliveryCharge = 400;
    const totalAmount = totalPrice + deliveryCharge;

    const handlePayment=()=>{
        toast.success('Order placed Successfully.');
        setCart([]);
        setCartQuantity(0);
        setQuantity({});
        const orderDetails = {
            items:cart.map(item => ({
                ...item,
                quantity: quantity[item._id] || 1
            })),
            totalPrice: totalAmount,
            address: address,
            date: new Date().toLocaleString(),
            status: "Confirmed"
        };
        user.orders=[...(user.orders||[]),orderDetails]
        const options = {
            key: 'rzp_test_9lUQQiaP8SrWDV',
            amount: totalAmount*100, 
            currency: 'INR',
            name: 'Steam',
            description: 'Test Transaction',
            image: 'https://your-logo-url.com/logo.png',
            handler: function (response) {
              alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
            },
            prefill: {
              name: 'John Wick',
              email: 'hitman@gmail.com',
              contact: '9000000000',
            },
            theme: {
              color: '#3399cc',
            },
          };
      
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        };

        useEffect(()=>{
            if(!login){
                navigate("/steam/login");
                setCart([]);
                setCartQuantity(0);
            }
            if(address){
                user.address=address
            }
            
        },[login,address])
    

    return (
        <div>
            <Nav/>
            <div className="container py-5">
                {cart.length === 0 ? 
                    <p className="text-center fs-1">Your Cart is Empty</p> : 
                    <div className="row">
                        <div className="col-md-8">
                            {cart.map(el => (
                                <div key={el._id} className="d-flex align-items-center border rounded-3 mb-3 p-3">
                                    <div className="col-md-3">
                                        <img className="img-fluid rounded" src={el.thumbnail} alt="product" />
                                    </div>
                                    <div className="col-md-6 ps-3">
                                        <h4>{el.name}</h4>
                                        <p className="fs-4"><LuIndianRupee />{el.price}</p>
                                        <div className="d-flex align-items-center">
                                        <CiCircleMinus 
                                                onClick={() => decreaseQuantity(el._id)} 
                                                style={{ fontSize: '24px', cursor: 'pointer' }} 
                                            />
                                            <span className="mx-2 fs-4">{quantity[el._id] || 1}</span>
                                            
                                            <CiCirclePlus 
                                                onClick={() => increaseQuantity(el._id)} 
                                                style={{ fontSize: '24px', cursor: 'pointer' }} 
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <button className="btn btn-outline-danger" onClick={() => removeFromCart(el._id)}>
                                                <MdDelete /> Remove
                                            </button>
                                            <button className="btn btn-outline-primary" onClick={() => addToWishlist(el)}>
                                                <FaHeart /> Add to Wishlist
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4 border border-success-subtle rounded-3 p-3 fs-4">
                            <h3>Price Details</h3>
                            <hr />
                            <p>Price: <LuIndianRupee />{totalPrice}</p>
                            <p>Delivery Charge: <LuIndianRupee />{deliveryCharge}</p>
                            {edit && <p>Address:<textarea  value={address} onChange={(event)=>setAddress(event.target.value)}/><CiSaveUp2 onClick={()=>setEdit(!edit)}/></p>}
                            {(!edit && address) && <p>Address: {address} <FaRegEdit onClick={()=>setEdit(true)}/></p>}
                            {(!address &&!edit) && <span>Address:<textarea rows={2}></textarea></span> }
                            <h4>Total Amount: <LuIndianRupee />{totalAmount}</h4>
                            <button className="btn btn-primary w-100" onClick={handlePayment}>Place Order</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;
