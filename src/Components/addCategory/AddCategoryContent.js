import AddCategoryForm from "./AddCategoryForm";
import AdminDashboardNavbar from "../navbar";



function AddCategoryContent(){
    return (
        <div id="page-content-wrapper">
            <AdminDashboardNavbar data="Add new Category"/>
            <AddCategoryForm/>
        </div>
    )
}
export default AddCategoryContent;