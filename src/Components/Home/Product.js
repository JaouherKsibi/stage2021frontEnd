import { faEye, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Image, InputGroup, Modal, Row, Table } from "react-bootstrap";

function Product(props) {
    //variables pour le design des produits 
    const quantityList = [];
    const [see, setSee] = useState(false);
    const [seeBuy, setSeeBuy] = useState(false);
    const [quantity, setQuantity] = useState(1);
    for (let index = 1; index <= props.product.quantity; index++) {
            quantityList.push(index);
        }
    //fin variables pour le design des produits 
    //variables pour l'ajout de commande 
     const [firstName,setFirstName]=useState('');
     const [lastName,setLastName]=useState('');
     const [email,setEmail]=useState('');
     const [phoneNumber,setPhoneNumber]=useState('');
    const handleSubmit= (e)=>{
        e.preventDefault();
        const order={firstName:firstName,lastName:lastName , email:email ,phoneNumber:phoneNumber,quantity:quantity, product:props.product._id,seen:false,quantityTot:props.product.quantity}
        //console.log(comment);
        fetch('http://localhost:3001/api/addOrder',
        {   method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(order)}
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="order saved !"){
                setSeeBuy(false);
                setQuantity(1);
                setFirstName('');
                setLastName('');
                setPhoneNumber('');
                setEmail('');
            }});
    }
    //fin  variables pour l'ajout de commande 

    
    return (
        <React.Fragment>
            <Col md={4} lg={4} xl={4} sm={12} height='auto' style={{ marginRight: '10px', margin: 0  }} >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.product.imageUrl} width='286' height='300px' />
                    <Card.Body className="bg-light">
                        <Card.Title>{props.product.nom}</Card.Title>
                        <Card.Subtitle>{props.product.price} dt </Card.Subtitle>
                        <Card.Text>
                            {props.product.description}
                        </Card.Text>
                        <Row>
                            <Col md={4} lg={4} xl={4} sm={4}>
                                <Button variant="primary" onClick={() => { setSee(true) }} ><FontAwesomeIcon icon={faEye} /></Button>
                            </Col>
                            <Col  md={8} lg={8} xl={8} sm={8} className='border' style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                                <select onChange={(e) => { setQuantity(e.target.value) }} value={quantity}>
                                    {
                                        quantityList.map((i) => {
                                            return (
                                                <option key={i} value={i}>{i}</option>
                                            )
                                        })
                                    }
                                </select>
                                <Button variant="primary" style={{ marginLeft: '10px' }} onClick={() => { setSeeBuy(true) }}>Buy</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={see} aria-labelledby="contained-modal-title-vcenter" size="auto" onHide={() => { setSee(false) }} >
                <Modal.Header>
                    <Modal.Title>Show product infos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Card className="modalCard" bg='light'>
                        <Card.Img variant="top" src={props.product.imageUrl} style={{ marginBottom: 0 }} />
                        <Card.Body  >

                            <table>
                                <tbody>
                                    <tr>
                                        <td><h4>Product Name :</h4></td>
                                        <td>{props.product.nom} </td>
                                    </tr>
                                    <tr>
                                        <td><h4>Price :</h4></td>
                                        <td>{props.product.price} </td>
                                    </tr>
                                    <tr>
                                        <td><h4>Quantity :</h4></td>
                                        <td>{props.product.quantity} </td>
                                    </tr>
                                    <tr>
                                        <td><h4>Category</h4></td>
                                        <td>{props.product.category.nom} </td>
                                    </tr>
                                    <tr>
                                        <td><h4>Description  :</h4></td>
                                        <td>{props.product.description} </td>
                                    </tr>
                                </tbody>
                            </table>

                        </Card.Body>
                    </Card>

                </Modal.Body>
                <Modal.Footer style={{ margin: 'auto' }} >
                    <Button variant="outline-dark" onClick={() => { setSee(false) }} >close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={seeBuy} aria-labelledby="contained-modal-title-vcenter" size="auto" onHide={() => { setSeeBuy(false) }} >
                <Modal.Header>
                    <Modal.Title>Buy</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Row>
                        <Col>
                            <Form onSubmit={handleSubmit} method='POST'>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                First Name <span className="text-danger">*</span>
                                            </Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" placeholder="Enter Your First Name please" value={firstName} onChange={(e) => { setFirstName(e.target.value) }}></Form.Control>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Last Name <span className="text-danger">*</span>
                                            </Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" placeholder="Enter your Last Name please" value={lastName} onChange={(e) => { setLastName(e.target.value) }}></Form.Control>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Email <span className="text-danger">*</span>
                                            </Form.Label>
                                            <InputGroup>
                                                <Form.Control type="email" placeholder="Enter your Email please" value={email} onChange={(e) => { setEmail(e.target.value) }}></Form.Control>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>
                                                PhoneNumber <span className="text-danger">*</span>
                                            </Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" placeholder="Enter your Phone Number please" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }}></Form.Control>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                 <hr/>
                    <Row  style={{ margin: 'auto' }}>
                        <Button variant="outline-dark" type="submit" >buy</Button>
                    <Button variant="outline-dark" onClick={() => { setSeeBuy(false) }} >close</Button>
                    </Row>
                            </Form>
                        </Col>
                        <Col>
                            <Image src={props.product.imageUrl} thumbnail />
                            <table>
                                <tbody>
                                    <tr>
                                        <td><p>Product Name</p> </td>
                                        <td style={{paddingLeft:'15px'}}><h4>{props.product.nom}</h4></td>
                                    </tr>
                                    <tr>
                                        <td><p>Quantity</p> </td>
                                        <td style={{paddingLeft:'15px'}}><h4>{quantity}</h4></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            
                        </Col>
                    </Row>
                   
                    

                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
export default Product;