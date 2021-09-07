import AddProductContent from "./AddProductContent.js";
import Sidebar from "../Sidebar";

function AddProduct (){
    return (
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <AddProductContent />
        </div>
    )
}
export default AddProduct;