import Nav from "../../components/nav/Nav";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";
const Register=()=>{
    const{user,setUser,setAllUsers,setLogin,login}=useGlobalState();
    const navigate=useNavigate();
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setUser(prev=>({...prev,[name]:value}))
    }
    const handleForm=(event)=>{
        event.preventDefault();
        setAllUsers(prev=>([...prev,user]));
        setLogin(true);
        setTimeout(()=>{
            navigate("/steam/store");
        },2000)  
    }
    return(
        <div className="bg-secondary">
            <Nav/>
            <div className="text-center fs-3">
            {login && <p>Login Successfully.</p>}
          <form onSubmit={handleForm}>
            <label htmlFor="inputName">Name:</label> <br />
            <input type="text" id="inputName" name="name" onChange={handleChange} required/><br />
            <label htmlFor="inputEmail">Email:</label> <br />
            <input type="email" id="inputEmail" name="email" onChange={handleChange} required/> <br />
            <label htmlFor="inputPassword">Password:</label> <br />
            <input type="text" id="inputPassword" name="password" onChange={handleChange} required/> <br />
            <input type="submit" className="btn btn-primary"  value="Register" />
            </form>  
            </div>
        </div>
    )
}
export default Register;