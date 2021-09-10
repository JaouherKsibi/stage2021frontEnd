import { useEffect, useState } from "react";
import ProductLine from "../ProductLine";
import ProductsTableHeader from "../ProductsTableHeader";

function CategoryProductsTable(props){
    const [productsList, setProductsList] = useState([]);
    async function fetchProductsList() {
        const requestUrl='http://localhost:3001/api/getProductsByIdCategory/'+props.categoryId
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        //console.log(responseJSON);
        setProductsList(responseJSON)
        }
    useEffect(()=>{
        fetchProductsList()
    },[productsList]);
    return(
        <div className="col">
            {
               productsList.length==0?<p>sorry this category has no products yet </p>:<table className="table bg-white rounded shadow-sm  table-hover">
                    <ProductsTableHeader/>
                    <tbody>
                        {
                            productsList.map((product,index)=>{
                                return(
                                    <ProductLine product={product} index={index} key={product._id}/>   
                               )
                            })
                        }
                    </tbody>
                </table> 
            }
                
            </div>
    )

}
export default CategoryProductsTable;
