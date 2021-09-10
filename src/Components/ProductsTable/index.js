import { useEffect, useState } from "react";

import '../../css/DashboardStyle.css'
import ProductsTableHeader from '../ProductsTableHeader/index.js'

import ProductLine from "../ProductLine";
import InfosBar from "../InfoBar/index"

function ProductsTable(props){
    const [productsList, setProductsList] = useState([]);
    async function fetchProductsList() {
        const requestUrl='http://localhost:3001/api/getAllProducts'
        const response=await fetch(requestUrl,{signal:signal});
        const responseJSON=await response.json();
        //console.log(responseJSON);
        setProductsList(responseJSON)
        }
    const abortController=new AbortController();
    const signal=abortController.signal;
    useEffect(()=>{
        fetchProductsList().catch(error => {
        })
        return function cleanUp(){
            abortController.abort();
        }
    },[productsList]);
    //const NumberOfElement=productsList.length;
    return (
        <div className="container-fluid px-4">
        <InfosBar />
        <div className="row my-5">
            <h3 className="fs-4 mb-3">Recent Orders</h3>
            <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
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
            </div>
            
            
        </div>

    </div>

    )
}


export default ProductsTable;