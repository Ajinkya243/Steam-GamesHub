import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import PublisherGrid from './components/publisher/PublisherGrid';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Store from './pages/Store/Store';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Cart from './pages/cart/cart';
import Wishlist from './pages/wishlist/Wishlist';

const queryClient=new QueryClient({
  defaultOptions:{
    quries:{
      staleTime:Infinity,
      cacheTime:Infinity
    }
  }
})

const AppWrapper=()=>{
  const[cartQuantity,setCartQuantity]=useState(0);
  const[cart,setCart]=useState([]);
  const[wishlistCount,setWishlistCount]=useState(0);
  const[wishlist,setWishlist]=useState([]);
  return(
    <Routes>
    <Route path="/" element={<App cartQuantity={cartQuantity} wishlistCount={wishlistCount}/>} />
    <Route path="/steam/publisher/:publisher" element={<PublisherGrid />}/>
    <Route path="/steam/product/:id" element={<ProductDetails cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} cart={cart} setCart={setCart} wishlistCount={wishlistCount} setWishlistCount={setWishlistCount} wishlist={wishlist} setWishlist={setWishlist}/>} />
    <Route path='/steam/store' element={<Store wishlistCount={wishlistCount} cartQuantity={cartQuantity}/>}/>
    <Route path="/steam/cart" element={<Cart cart={cart} setCart={setCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} setWishlist={setWishlist} wishlistCount={wishlistCount} setWishlistCount={setWishlistCount}/>} />
    <Route path="/steam/wishlist" element={<Wishlist cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} cart={cart} setCart={setCart} wishlistCount={wishlistCount} setWishlistCount={setWishlistCount} wishlist={wishlist} setWishlist={setWishlist}/>} />
  </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <AppWrapper/>
  </QueryClientProvider>
  </BrowserRouter>
  <ToastContainer/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
