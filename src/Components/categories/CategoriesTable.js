import { useEffect, useState } from "react";
import InfosBar from "../InfoBar";
import CategoryLine from "./CategoryLine";

function CategoriesTable(){
    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(()=>{
        async function fetchCategoriesList() {
        const requestUrl='http://localhost:3001/api/getAllCategories'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        setCategoriesList(responseJSON)
        }
        fetchCategoriesList()
    },[categoriesList]);
    return(
        <div className="container-fluid px-4">
        <InfosBar />

        <div className="row my-5">
            <h3 className="fs-4 mb-3">Categories</h3>
            <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="50">#</th>
                            <th scope="col">Category Image</th>
                            <th scope="col">Category Name</th>
                            <th scope="col"  width="50">Show</th>
                            <th scope="col"  width="50">Update</th>
                            <th scope="col"  width="50">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categoriesList.map((category,index)=>{
                                return(
                                    <CategoryLine category={category} index={index} key={category._id}/>   
                               )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            
        </div>

    </div>
    )
}
export default CategoriesTable;