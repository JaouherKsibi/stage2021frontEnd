import Sidebar from "../Sidebar";
import ProductsByCategoryContent from "./ProductsByCategoryContent";

function ProductsByCategory(){
    return(
        <div className="d-flex" id="wrapper">
            <Sidebar/>
            <ProductsByCategoryContent   />
        </div>
    )
}
export default ProductsByCategory;