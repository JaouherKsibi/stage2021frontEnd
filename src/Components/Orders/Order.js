import { faCheckCircle, faEye, faTimesCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import '../../css/DashboardStyle.css'
function Order({order,index}){
    console.log(order);
    const [seeClientInfos,setSeeClientInfos]=useState(false);
    const [seeOrder,setSeeOrder]=useState(false);
    const [see,setSee]=useState(false);
    function deleteOrder(){
        fetch('http://localhost:3001/api/deleteOrder/'+order._id ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="Order deleted !"){
                console.log("deleted order");
               
                
            }});
    }
    function updateOrder(){
        const ss={seen:true};
        fetch('http://localhost:3001/api/updateOrder/'+order._id,
        {   method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(ss)}
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="Objet modifié !"){
                console.log("Objet modifié !");
                
            }});
    }
     
    function showOrder(){
        setSeeOrder(true)

    }
    function showProduct(){
        //fetchProduct();
        setSee(true);
    }
    function showUser(){
        setSeeClientInfos(true);
    }
    function closeSeeClient(){
        setSeeClientInfos(false);
    }
    return (
       
        <tr>
            <th>{index+1} </th>
            <td>{order._id} </td>
            <td>{order.product.nom}<button className='buttons' onClick={()=>{showProduct()}}>(see details)</button> </td>
            <td>{order.client.nom}<button className='buttons' onClick={()=>{showUser()}} > (see details)</button></td>
            <td>{order.seen? <FontAwesomeIcon icon={faCheckCircle}/> :<FontAwesomeIcon icon={faTimesCircle}/> } </td>
            <td><button className='buttons' onClick={()=>{showOrder()}}>show</button> </td>
            <td>{order.seen===false?<button className='buttons' onClick={()=>{updateOrder()}}><FontAwesomeIcon icon={faEye} /> </button>: <FontAwesomeIcon icon={faCheckCircle} />} </td>
            <td><button onClick={()=>{deleteOrder()}} className='buttons'><FontAwesomeIcon icon={faTrash}/> </button> </td>
            <React.StrictMode>
            <Modal  onHide={()=>{closeSeeClient()}} show={seeClientInfos} aria-labelledby="contained-modal-title-vcenter" size="auto" >
                <Modal.Header>
                    <Modal.Title>Show Client Infos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        <Card className="modalCard" bg='light'>
                            <Card.Body  >                                
                                <table>  
                                    <tr>
                                        <td><h5>Client id</h5></td>
                                        <td>{order.client._id}</td>
                                    </tr>                              
                                    <tr>
                                        <td><h5>First Name :</h5></td>
                                        <td>{order.client.prenom} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Last Name :</h5></td>
                                        <td>{order.client.nom} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Email:</h5></td>
                                        <td>{order.client.email} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>phone Number :</h5></td>
                                        <td>{order.client.numeroDeTelephone} </td>
                                    </tr>
                                </table>                               
                            </Card.Body>
                        </Card>
                    
                </Modal.Body>
                <Modal.Footer style={{margin:'auto'}} >
                    <Button variant="outline-dark" onClick={()=>{closeSeeClient()}} >close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={see} aria-labelledby="contained-modal-title-vcenter" size="auto" onHide={()=>{setSee(false)}} >
                <Modal.Header>
                    <Modal.Title>Show product's infos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        <Card className="modalCard" bg='light'>
                            <Card.Img variant="top" src={order.product.imageUrl} style={{marginBottom:0}} />
                            <Card.Body  >
                                
                                <table>
                                        <tr>
                                            <td><h4>Product Name :</h4></td>
                                            <td>{order.product.nom} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Price :</h4></td>
                                            <td>{order.product.price} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Category</h4></td>
                                            <td>{order.product.category.nom}</td>
                                        </tr>
                                        <tr>
                                            <td><h4>Description  :</h4></td>
                                            <td>{order.product.description} </td>
                                        </tr>
                                        
                                    </table>
                                
                            </Card.Body>
                        </Card>
                        
                        </Modal.Body>
                <Modal.Footer style={{margin:'auto'}} >
                    <Button variant="outline-dark" onClick={()=>{setSee(false)}} >close</Button>
                </Modal.Footer>
            </Modal>
            
           <Modal  scrollable={true} show={seeOrder} aria-labelledby="contained-modal-title-vcenter" size="auto" onHide={()=>{setSeeOrder(false)}} >
                <Modal.Header>
                    <Modal.Title>Show order's infos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    
                    <Card className="modalCard" bg='light'>
                        <Card.Header>
                            <Card.Title>
                                Information about the order
                            </Card.Title>
                        </Card.Header>
                            <Card.Body  >
                                
                                <table>
                                        <tr>
                                            <td><h4>Order Id :</h4></td>
                                            <td>{order._id} </td>
                                        </tr>
                                        <tr>
                                            <td><h4> Unity Price :</h4></td>
                                            <td>{order.product.price} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Quantity</h4></td>
                                            <td>{order.quantity} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>enrollement date </h4></td>
                                            <td>{order.date} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Total price </h4></td>
                                            <td>{order.quantity * order.product.price} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Recieved ? </h4></td>
                                            <td>{order.seen?<p>already seen</p>:<p>not yet</p>} </td>
                                        </tr>
                                        
                                    </table>
                                
                            </Card.Body>
                        </Card>
                        
                    

                        <Card className="modalCard" bg='light'>
                        <Card.Header>
                            <Card.Title>
                                Information about the Product
                            </Card.Title>
                        </Card.Header>
                            <Card.Img variant="top" src={order.product.imageUrl} style={{marginBottom:0}} />
                            <Card.Body  >
                                
                                <table>
                                        <tr>
                                            <td><h4>Product Name :</h4></td>
                                            <td>{order.product.nom} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Price :</h4></td>
                                            <td>{order.product.nom} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Category</h4></td>
                                            <td> {order.product.category!=null? <p>{order.product.category.nom}</p>:null} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Description  :</h4></td>
                                            <td>{order.product.description} </td>
                                        </tr>
                                        
                                    </table>
                                
                            </Card.Body>
                        </Card>
                         <Card className="modalCard" bg='light'>
                        <Card.Header>
                            <Card.Title>
                                Information about the Category
                            </Card.Title>
                        </Card.Header>
                            <Card.Img variant="top" src={order.product.category.imageUrl} style={{marginBottom:0}} />
                            <Card.Body  >
                                
                                <table>
                                        <tr>
                                            <td><h4>Category Id :</h4></td>
                                            <td>{order.product.category._id} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Category Name :</h4></td>
                                            <td>{order.product.category.nom} </td>
                                        </tr>                                        
                                    </table>
                                
                            </Card.Body>
                        </Card>

                        
                        <Card className="modalCard" bg='light'>
                        <Card.Header>
                            <Card.Title>
                                Information about the Client
                            </Card.Title>
                        </Card.Header>
                            <Card.Body  >                                
                                <table>  
                                    <tr>
                                        <td><h5>Client id</h5></td>
                                        <td>{order.client._id}</td>
                                    </tr>                              
                                    <tr>
                                        <td><h5>First Name :</h5></td>
                                        <td>{order.client.prenom} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Last Name :</h5></td>
                                        <td>{order.client.nom} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Email:</h5></td>
                                        <td>{order.client.email} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>phone Number :</h5></td>
                                        <td>{order.client.numeroDeTelephone} </td>
                                    </tr>
                                </table>                               
                            </Card.Body>
                        </Card>
                    
                </Modal.Body>
                <Modal.Footer style={{margin:'auto'}} >
                    <Button variant="outline-dark" onClick={()=>{setSeeOrder(false)}} >close</Button>
                </Modal.Footer>
            </Modal>
            </React.StrictMode>
       </tr>
      
    )
}
export default Order;