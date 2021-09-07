import Sidebar from "../Sidebar";
import UsersManagementContent from "./usersManagementContent";

function UsersManagement(){
    return(
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <UsersManagementContent />
        </div>
    )
}
export default UsersManagement;