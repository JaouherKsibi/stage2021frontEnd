import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CategoryProductsTable from "./CategoryProductsTable";
function CategorySection(props){
    const [seen,setSeen]=useState(false);
    function toggle(){
        setSeen(!seen)
    }
    return(
        <section key={props.category._id}>
            <h3 className="fs-4 mb-3"><button id="menu-toggle" onClick={toggle}><FontAwesomeIcon icon={faAlignLeft} className='fass1' /></button>{props.category.nom}</h3>
            {seen==true?<CategoryProductsTable categoryId={props.category._id}/>:null}
        </section>)
}
export default CategorySection;