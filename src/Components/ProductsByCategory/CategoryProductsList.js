
import { useEffect, useState } from "react";
import InfosBar from "../InfoBar";

import CategorySection from "./CategorySection";
function CategoryProductsList(){
    const abortController=new AbortController();
    const signal=abortController.signal;
    const [categoriesList, setCategoriesList] = useState([]);
    async function fetchCategoriesList() {
        const requestUrl='http://localhost:3001/api/getAllCategories'
        const response=await fetch(requestUrl,{signal:signal});
        const responseJSON=await response.json();
        setCategoriesList(responseJSON)
        }
    useEffect(()=>{
        
        fetchCategoriesList().catch(err=>{})
        return function cleanUp(){
            abortController.abort();
        }
    },[categoriesList]);
    
    return(

        <div className="container-fluid px-4">
            <InfosBar />
            <div className="row my-5">
                {categoriesList.map(category=>{
                    return(
                        <CategorySection key={category._id} category={category}/>
                        
                    )
                })}
            </div>
        </div>
       
    )
}
export default CategoryProductsList;