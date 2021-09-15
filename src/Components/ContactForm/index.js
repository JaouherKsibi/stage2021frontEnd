import { faBandAid, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function ContactForm(){
    const [email,setEmail]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const comment={firstName:firstName,lastName:lastName , email:email ,phoneNumber:phoneNumber,subject:subject, message:message,seen:false}
        console.log(comment);
        fetch('http://localhost:3001/api/addComment',
        {   method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(comment)}
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="Comment enregistré !"){
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setSubject("");
                setMessage("");
                
            }});
    }
    return (
        <React.Fragment>
                <Form onSubmit={handleSubmit} method='POST'>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                        First Name <span className="text-danger">*</span>
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" placeholder="Enter Your First Name please" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}></Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>
                                            Last Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" placeholder="Enter your Last Name please" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}></Form.Control>
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
                                            <Form.Control type="email" placeholder="Enter your Email please" value={email} onChange={(e)=>{setEmail(e.target.value)}}></Form.Control>
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
                                            <Form.Control type="text" placeholder="Enter your Phone Number please" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}></Form.Control>
                                        </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Form.Group>
                                    <Form.Label>
                                           Subject<span className="text-danger">*</span>
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" placeholder="Enter the Subject please" value={subject} onChange={(e)=>{setSubject(e.target.value)}}></Form.Control>
                                        </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message<span className="text-danger">*</span></Form.Label>
                                    <InputGroup>
                                        <Form.Control placeholder="your message please ..........." as="textarea" rows={7} value={message} onChange={(e)=>{setMessage(e.target.value)}} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
                
        </React.Fragment>
    )
}
export default ContactForm ;