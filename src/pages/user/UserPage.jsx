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
        <div>
        <Nav/>
        <div className="py-5 d-flex flex-column align-items-center">
        {login?
            <div className="card shadow-lg w-20">
                <div className="card-body text-center fs-3">
                    <p>User Details</p>
                    <p><strong>Name</strong>: {user.name}</p>
                    <p><strong>Email</strong>: {user.email}</p>
                </div>
            </div>
        :<p className="text-center fs-3">Logout Successfully</p>}
        </div>
        </div>
    )
}
export default UserPage;