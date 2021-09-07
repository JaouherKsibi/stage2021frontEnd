import Sidebar from "../Sidebar";
import OrdersContent from "./OrdersContent";

function Orders(){
    return(
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <OrdersContent   />
        </div>
    )
}
export default Orders;