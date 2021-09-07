import AdminDashboardNavbar from "../navbar";
import OrdersTable from "./OrdersTable";


function OrdersContent(){
    return(
        <div id="page-content-wrapper">
        <AdminDashboardNavbar data="Orders" />
        <OrdersTable />
    </div>
    )
}
export default OrdersContent;