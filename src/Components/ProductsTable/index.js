import { useEffect, useState } from "react";
import { faTrash, faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/DashboardStyle.css'
import ProductsTableHeader from '../ProductsTableHeader/index.js'
import { Button, Modal } from "react-bootstrap";
import SeeProductDetailsModal from "../SeeProductDetailsModal";
import ShowDetailsContent from "../SeeProductDetailsModal/ShowDetailsContent";
import ProductLine from "../ProductLine";
import InfosBar from "../InfoBar/index"

function ProductsTable(props){
    const [productsList, setProductsList] = useState([]);
    async function fetchProductsList() {
        const requestUrl='http://localhost:3001/api/getAllProducts'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        //console.log(responseJSON);
        setProductsList(responseJSON)
        }
    useEffect(()=>{
        fetchProductsList()
    },[productsList]);
    const NumberOfElement=productsList.length;
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