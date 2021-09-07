import AdminDashboardNavbar from "../navbar";
import CommentsTable from "./CommentsTable";

function CommentsContent(){
    return(
        <div id="page-content-wrapper">
        <AdminDashboardNavbar data="Comments" />
        <CommentsTable />
    </div>
    )
}
export default CommentsContent;