import AddProductForm from "./AddProductForm";
import AdminDashboardNavbar from '../navbar'
function AddProductContent(){
    return(
        <div id="page-content-wrapper">
            <AdminDashboardNavbar data="Add New Product" />
            <AddProductForm/>
        </div>
    )
}
export default AddProductContent;