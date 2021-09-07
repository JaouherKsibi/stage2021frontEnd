import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";
import '../../css/DashboardStyle.css'

function User(props){
    const [seeInfos,setSeeInfos]=useState(false);
    const [user,setUser]=useState(props.user);
    const [ordersList,setOrdersList]=useState([]);
    const [showOrders,setShowOrders]=useState(false);
    function deleteUser(id){
        fetch('http://localhost:3001/api/deleteClientById/'+id).then(res=>{res.text();console.log(res);})/*.then((res1)=>{
            console.log(JSON.parse(res1).message);
        })*/
    }
   async function fetchOrders(id) {
        const requestUrl='http://localhost:3001/api/getOrdersByClient/'+id;
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        setOrdersList(responseJSON)
        }
    function showUser(){
        setSeeInfos(true); 
    }
    function showOrdersList(id){
        fetchOrders(id)
        
        setShowOrders(true);
        
    }
    return(
        <tr>
            <th scope="row">{props.index+1}</th>
            <td>{user.nom} </td>
            <td>{user.prenom} </td>
            <td><button onClick={()=>{showUser() }} style={{"border": "none" ,"backgroundColor":"transparent",color:"green"}}><FontAwesomeIcon icon={faEye}/> </button> </td>
            <td> <button onClick={()=>{showOrdersList(user._id)}} style={{"border": "none" ,"backgroundColor":"transparent" , color:"orange"}}><FontAwesomeIcon icon={faEye}/> </button></td>
            <td> <button onClick={()=>{deleteUser(user._id)}} style={{"border": "none" ,"backgroundColor":"transparent" ,color:"red"}}><FontAwesomeIcon icon={faTrash}/></button></td>
            <Modal  onHide={()=>{setSeeInfos(false)}} show={seeInfos} aria-labelledby="contained-modal-title-vcenter" size="auto" >
                <Modal.Header>
                    <Modal.Title>Show Client Infos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        <Card className="modalCard" bg='light'>
                            <Card.Body  >                                
                             <table>  
                                    <tr>
                                        <td><h5>Client id</h5></td>
                                        <td>{user._id}</td>
                                    </tr>                              
                                    <tr>
                                        <td><h5>First Name :</h5></td>
                                        <td>{user.prenom} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Last Name :</h5></td>
                                        <td>{user.nom} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Email:</h5></td>
                                        <td>{user.email} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>phone Number :</h5></td>
                                        <td>{user.numeroDeTelephone} </td>
                                    </tr>
                                </table>                                
                            </Card.Body>
                        </Card>
                    
                </Modal.Body>
                <Modal.Footer style={{margin:'auto'}} >
                    <Button variant="outline-dark" onClick={()=>{setSeeInfos(false)}} >close</Button>
                </Modal.Footer>
            </Modal>
            <Modal
            size="xl"
                show={showOrders}
                onHide={() => setShowOrders(false)}
                dialogClassName="modal-200w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                   {user.nom}'s  Orders
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card className="modalCard" bg='light' style={{ width: '90%' }}>
                        <Card.Body  >                                
                            <Table bordered  style={{textAlign:'center'}} >
                                <thead>
                                    <tr>
                                        <th style={{marginLeft:'30px'}} scope="col" width="50">#</th>
                                        <th style={{marginLeft:'30px'}} scope="col">OrderId</th>
                                        <th style={{marginLeft:'30px'}} scope="col">Product Name</th>
                                        <th style={{marginLeft:'30px'}} scope="col">Unit Price</th>
                                        <th style={{marginLeft:'30px'}} scope="col">Quantity</th>
                                        <th style={{marginLeft:'30px'}} scope="col">category Name</th>
                                        <th style={{marginLeft:'30px'}} scope="col">Date</th>
                                        <th style={{marginLeft:'30px'}} scope="col">Total</th>
                                    </tr>
                                </thead>  
                                <tbody>
                                    {
                                        ordersList.map((order,index)=>{
                                            return(
                                                <tr key={order._id}>
                                                    <td style={{marginLeft:'30px'}}>{index+1}</td>
                                                    <td style={{marginLeft:'30px'}}>{order._id} </td>
                                                    <td style={{marginLeft:'30px'}}>{order.product.nom} </td>
                                                    <td style={{marginLeft:'30px'}}>{order.product.price} </td>
                                                    <td style={{marginLeft:'30px'}}>{order.quantity} </td>
                                                    <td style={{marginLeft:'30px'}}>{order.product.category.nom} </td>
                                                    <td style={{marginLeft:'30px'}}>{order.date} </td>
                                                    <td style={{marginLeft:'30px'}}>{order.quantity * order.product.price} </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>                                
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </tr>
    )
}
export default User;