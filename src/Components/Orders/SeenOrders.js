import { useEffect, useState } from "react";
import Order from "./Order";

function SeenOrders(){
    const [ordersList, setOrdersList] = useState([]);
    useEffect(()=>{
        async function fetchOrdersList() {
        const requestUrl='http://localhost:3001/api/getSeenOrders'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        setOrdersList(responseJSON)
        }
        fetchOrdersList()
    });
    return (
        <div className="row my-5">
            <h3 className="fs-4 mb-3">Old Orders</h3>
            <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover" style={{textAlign:"center"}} >
                    <thead>
                        <tr>
                            <th scope="col" width="50">#</th>
                            <th scope="col"> Order Id</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">CLient Id</th>
                            <th scope="col">Seen</th>
                            <th scope="col"  width="50">Show Details</th>
                            <th scope="col"  width="50">setSeen</th>
                            <th scope="col"  width="50">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ordersList.map((order,index)=>{
                                return(
                                    <Order order={order} index={index} key={order._id}/>   
                               )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            
        </div>

    )
}
export default SeenOrders;