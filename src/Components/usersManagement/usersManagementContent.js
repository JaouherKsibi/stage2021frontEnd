import AdminDashboardNavbar from "../navbar";
import UsersTable from "./usersTable";

function UsersManagementContent(){
    return(
        <div id="page-content-wrapper">
        <AdminDashboardNavbar data="Users" />
        <UsersTable />
    </div>
    )
}
export default UsersManagementContent;