import { useEffect, useState } from "react";
import InfosBar from "../InfoBar";
import NotSeenOrders from "./NotSeenOrders";
import Order from "./Order";
import SeenOrders from "./SeenOrders";


function OrdersTable(){
    async function fetchOrdersList() {
        const requestUrl='http://localhost:3001/api/getAllOrders'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        setOrdersList(responseJSON)
        }
    const [ordersList, setOrdersList] = useState([]);
    useEffect(()=>{
        
        fetchOrdersList()
    });
    //console.log(ordersList);
    return(
        <div className="container-fluid px-4">
        <InfosBar />
        {/*<div className="row g-3 my-2">
            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">{ordersList.length}</h3>
                        <p className="fs-5">Order</p>
                    </div>
                    <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">4920</h3>
                        <p className="fs-5">Sales</p>
                    </div>
                    <i
                        className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">3899</h3>
                        <p className="fs-5">Delivery</p>
                    </div>
                    <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">%25</h3>
                        <p className="fs-5">Increase</p>
                    </div>
                    <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>
        </div>
        */}<NotSeenOrders />
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