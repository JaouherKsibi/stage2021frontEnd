import { useEffect, useState } from "react";
import InfosBar from "../InfoBar";
import NotSeenOrders from "./NotSeenOrders";
import Order from "./Order";
import SeenOrders from "./SeenOrders";


function OrdersTable(){
    const abortController=new AbortController();
    const signal=abortController.signal;
    async function fetchOrdersList() {
        const requestUrl='http://localhost:3001/api/getAllOrders'
        const response=await fetch(requestUrl,{signal:signal});
        const responseJSON=await response.json();
        setOrdersList(responseJSON)
        }
    const [ordersList, setOrdersList] = useState([]);
    useEffect(()=>{
        
        fetchOrdersList().catch((err)=>{})
        return function cleanUp(){
            abortController.abort();
        }
    });
    return(
        <div className="container-fluid px-4">
        <InfosBar />
        <NotSeenOrders />
        <SeenOrders />
        <div className="row my-5">
            <h3 className="fs-4 mb-3">All Orders</h3>
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
        
    </div>
    )
}
export default OrdersTable;