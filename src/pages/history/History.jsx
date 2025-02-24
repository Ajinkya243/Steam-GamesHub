import Nav from "../../components/nav/Nav";
import { useGlobalState } from "../../utils/context/GlobalStateProvider";
import { LuIndianRupee } from "react-icons/lu";

const History=()=>{
    const { user , login} = useGlobalState(); 
    return (
        <div>
            <Nav />
            {!login && <p className="text-center fs-3 py-5">Login to see your orders</p>}
            {login && <div className="container py-5">
                <h2 className="text-center">My Orders</h2>

                {user.orders && user.orders.length > 0 ? (
                    user.orders.map((order, index) => (
                        <div key={index} className="border rounded-3 p-3 mb-4">
                            <h4>Order #{index + 1} - <small>{order.date}</small></h4>
                            <p><strong>Delivery Address:</strong> {order.address}</p>
                            <p><strong>Total Price:</strong> <LuIndianRupee />{order.totalPrice}</p>
                            <p><strong>Status:</strong> {order.status}</p>

                            <div className="mt-3">
                                <h5>Items:</h5>
                                {order.items.map((item) => (
                                    <div key={item._id} className="d-flex align-items-center border-bottom pb-2 mb-2">
                                        <img src={item.thumbnail} alt={item.name} className="img-fluid rounded" style={{ width: "80px", height: "80px" }} />
                                        <div className="ps-3">
                                            <p className="mb-1">{item.name}</p>
                                            <p className="text-muted"><LuIndianRupee />{item.price} × {item.quantity || 1}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center fs-4">You have no orders yet.</p>
                )}
            </div>}
        </div>
    );
}
export default History;