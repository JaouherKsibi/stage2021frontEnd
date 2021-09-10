import '../../css/DashboardStyle.css'
import ProductsTable from '../ProductsTable';
import AdminDashboardNavbar from '../navbar';
//import ShowProductDetailsModal from '../showProductDetails';
function DashboardContent(){
    return (
        <div id="page-content-wrapper">
            <AdminDashboardNavbar data="Dashboard" />
            <ProductsTable />
        </div>
    )
}
export default DashboardContent;