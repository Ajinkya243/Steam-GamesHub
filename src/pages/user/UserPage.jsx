import { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";
const UserPage=()=>{
    const{user,login}=useGlobalState();
    const navigate=useNavigate();

    useEffect(()=>{
        if(!login){
            setTimeout(()=>{
                navigate("/steam/login")
            },3000);
        }
        
    },[login])
    return(
        <div className="bg-secondary">
        <Nav/>
        {login?<div className="col-md-6 ms-auto me-auto">
            <div className="card">
                <div className="card-body text-center fs-3">
                    <p>User Details</p>
                    <p><strong>Name</strong>: {user.name}</p>
                    <p><strong>Email</strong>: {user.email}</p>
                </div>
            </div>
        </div>:<p className="text-center fs-3 text-light">Logout Successfully</p>}
        </div>
    )
}
export default UserPage;