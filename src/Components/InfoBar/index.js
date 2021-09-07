import { useEffect, useState } from "react";

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
                        <h3 className="fs-2">{nbProducts}</h3>
                        <p className="fs-5">Products</p>
                    </div>
                    <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>
            <div className="col-md-2">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">{nbCatgories}</h3>
                        <p className="fs-5">Categories</p>
                    </div>
                    <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div className="col-md-2">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">{nbOrders}</h3>
                        <p className="fs-5">Orders</p>
                    </div>
                    <i
                        className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">{nbComments}</h3>
                        <p className="fs-5">New comments</p>
                    </div>
                    <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>

            <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">+{nbNotDelevered} </h3>
                        <p className="fs-5">New Orders</p>
                    </div>
                    <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
            </div>
        </div>
        
    )
}
export default InfosBar;