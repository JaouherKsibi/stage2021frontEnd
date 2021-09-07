import Sidebar from "../Sidebar";
import AddCategoryContent from "./AddCategoryContent.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dashboard.css'
function AddCategory (){
    return (
        <div className="d-flex" id="wrapper">
            <Sidebar />
            <AddCategoryContent />
        </div>
    )
}
export default AddCategory;