import { useEffect, useState } from "react";
import { FaChartArea, FaComment, FaGift, FaLayerGroup, FaSalesforce } from "react-icons/fa";

function InfosBar(){
    const [nbProducts,setNbProducts]=useState(0);
    const [nbOrders,setNbOrders]=useState(0)
    const [nbCatgories,setNbCategories]=useState(0)
    const [nbNotDelevered,setNbNotDelevered]=useState(0)
    const [nbComments,setNbComments]=useState(0)
    function getNbProducts() {
        fetch('http://localhost:3001/api/getNbProducts',{method:'GET',headers:{"content-Type":"application/json"}})
        .then(
            res=>res.text()
        ).then((res)=>{
            let res1=JSON.parse(res);
            setNbProducts(res1.nbProducts)
        })
    }
    function getNbOrders() {
        fetch('http://localhost:3001/api/getAllOrdersNumber',{method:'GET',headers:{"content-Type":"application/json"}})
        .then(
            res=>res.text()
        ).then((res)=>{
            let res1=JSON.parse(res);
            setNbOrders(res1);
            
        })
    }
    function getNbNewOrders() {
        fetch('http://localhost:3001/api/getAllNotSeeOrdersNumber',{method:'GET',headers:{"content-Type":"application/json"}})
        .then(
            res=>res.text()
        ).then((res)=>{
            let res1=JSON.parse(res);
            setNbNotDelevered(res1);
            
        })
    }
    function getNbComments() {
        fetch('http://localhost:3001/api/getNbNotSeenComments',{method:'GET',headers:{"content-Type":"application/json"}})
        .then(
            res=>res.text()
        ).then((res)=>{
            let res1=JSON.parse(res);
            setNbComments(res1);
            
        })
    }
    function getNbCategories() {
        fetch('http://localhost:3001/api/getNbCategories',{method:'GET',headers:{"content-Type":"application/json"}})
        .then(
            res=>res.text()
        ).then((res)=>{
            let res1=JSON.parse(res);
            setNbCategories(res1)
            
        })
    }
    useEffect(()=>{
        getNbProducts();
        getNbOrders();
        getNbNewOrders();
        getNbComments();
        getNbCategories();
    })
    
    return (
        <div className="row g-3 my-2">
            <div className="col-md-2">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2"><FaGift style={{marginRight:'15px'}} />{nbProducts} </h3>
                        <p className="fs-5">Products</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div style={{margin:0}}>
                        <h3 className="fs-2"><FaLayerGroup style={{marginRight:'15px'}} />{nbCatgories} </h3>
                        <p className="fs-5">Categories</p>
                    </div>
                </div>
            </div>

            <div className="col-md-2">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2"> <FaSalesforce /> {nbOrders}</h3>
                        <p className="fs-5">Orders</p>
                    </div>
                    <i
                       ></i>
                </div>
            </div>

            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2"><FaComment /> {nbComments}</h3>
                        <p className="fs-5">New comments</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2"><FaChartArea /> +{nbNotDelevered} </h3>
                        <p className="fs-5">New Orders</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default InfosBar;