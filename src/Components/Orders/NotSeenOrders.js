import { useEffect, useState } from "react";
import Order from "./Order";

function NotSeenOrders(){
    const [ordersList, setOrdersList] = useState([]);
    useEffect(()=>{
        const abortController=new AbortController();
        const signal=abortController.signal;
        async function fetchOrdersList() {
        const requestUrl='http://localhost:3001/api/getNotSeenOrders'
        const response=await fetch(requestUrl,{signal:signal});
        const responseJSON=await response.json();
        setOrdersList(responseJSON)
        }
        fetchOrdersList().catch((err)=>{})
        return function cleanUp(){
            abortController.abort();
        }
    });
    return (
        <div className="row my-5">
            <h3 className="fs-4 mb-3">New Orders</h3>
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
export default NotSeenOrders;