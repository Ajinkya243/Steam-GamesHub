import { Link } from "react-router-dom"
import Nav from "../../components/nav/Nav"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";

const Login=()=>{
    const{setCart,setWishlist}=useGlobalState();
    const[valid,setValid]=useState(false);
    const[inValid,setInValid]=useState(false);
    const[inputUser,setInputUser]=useState({});
    const{user,setUser,allUsers,setLogin}=useGlobalState();
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const{value,name}=event.target;
        setInputUser(prev=>({...prev,[name]:value}))
    }
    const handleLogin=(event)=>{
        event.preventDefault();
        setInValid(false);
        const checkUser=allUsers.some(el=>el.email===inputUser.email && el.password===inputUser.password);
        if(checkUser){
            setValid(true);
            setUser(inputUser);
            setLogin(true);
            setCart([]);
            setWishlist([]);
            setTimeout(()=>{
                navigate("/steam/store");
            },2000)
            
        }
        else{
            setInValid(true);
        }
    }
    const fillTestCredential=()=>{
        setInputUser(()=>({
            name:'John_W',
            email:'hitman@gmail.com',
            password:'11223344',
            address:'Somewhere in Hitman town.'
        }))
    }
    
    return(
        <div >
        <Nav/>
        <div className="text-center fs-3 py-5 w-50 ms-auto me-auto mt-5 shadow-lg">
        {valid&& <p className="fs-3">Welcome Back {user.name}</p>}
        {inValid && <p className="text-danger fs-3 ">Invalid User</p>}
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="inputName">User Name:</label> <br />
                <input type="text" id="inputName" name="name" value={inputUser.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="inputName">Email:</label><br />
                <input type="email" id="inputName" name="email" value={inputUser.email} onChange={handleChange} required/>
            </div>
            <div>
               <label htmlFor="inputPassword">Password:</label>  <br />
               <input type="password" id="inputPassword" name="password" value={inputUser.password} onChange={handleChange} required/>
            </div>
            <button className="btn btn-primary" onClick={fillTestCredential}>Fill Test Credential</button> <br />
            <input type="submit" value="Login"  className="btn btn-primary"/>
            
        </form>
        <Link to="/steam/register" className="btn btn-primary">Register New</Link>
        </div>
        </div>
    )
}
export default Login;