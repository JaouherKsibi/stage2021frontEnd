import AdminDashboardNavbar from "../navbar";
import CategoryProductsList from "./CategoryProductsList";

function ProductsByCategoryContent(){
    return(
        <div id="page-content-wrapper">
        <AdminDashboardNavbar data="Products By Category" />
        <CategoryProductsList />
    </div>
    )
}
export default ProductsByCategoryContent;