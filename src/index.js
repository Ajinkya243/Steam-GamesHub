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
import Cart from './pages/cart/cart';
import Wishlist from './pages/wishlist/Wishlist';
import Login from './pages/login/Login';
import UserPage from './pages/user/UserPage';
import Register from './pages/register/Register';
import GlobalStateProvider from './utils/context/GlobalStateProvider';
import History from './pages/history/History'

const queryClient=new QueryClient({
  defaultOptions:{
    quries:{
      staleTime:Infinity,
      cacheTime:Infinity
    }
  }
})

const AppWrapper=()=>{
  return(
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/steam/publisher/:publisher" element={<PublisherGrid />}/>
    <Route path="/steam/product/:id" element={<ProductDetails/>}/>
    <Route path="/steam/store" element={<Store/>}/>
    <Route path="/steam/cart" element={<Cart/>}/>
    <Route path="/steam/wishlist" element={<Wishlist/>}/>
    <Route path="/steam/login" element={<Login/>}/>
    <Route path="/steam/user" element={<UserPage/>}/>
    <Route path="/steam/register" element={<Register/>}/>
    <Route path="/steam/history" element={<History/>}/>
  </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
    <GlobalStateProvider>
    <AppWrapper/>
    </GlobalStateProvider>
  </QueryClientProvider>
  </BrowserRouter>
  <ToastContainer/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
