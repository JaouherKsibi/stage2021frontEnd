import AdminDashboardNavbar from "../navbar";
import CategoriesTable from "./CategoriesTable";

function CategoriesContent(){
    return(
        <div id="page-content-wrapper">
        <AdminDashboardNavbar data="Categories" />
        <CategoriesTable />
    </div>
    )
}
export default CategoriesContent;