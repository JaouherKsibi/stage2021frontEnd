import Sidebar from "../Sidebar";
import CategoriesContent from "./categoriesContent";

function Categories(){
    return(
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <CategoriesContent   />
        </div>
    )
}
export default Categories;