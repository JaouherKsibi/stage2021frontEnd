import '../../css/AdminLoginComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row , Col , Card ,Button, Form, InputGroup} from 'react-bootstrap/'
import React from 'react'
import {useState} from 'react'
function AdminLoginComponent(props){
    const [ email , setEmail ]= useState('');
    const [ password , setPassword ]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const fakeUser={email:email,password:password}
        fetch('http://localhost:3001/api/login',
        {   method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(fakeUser)}
        ).then(
            res=>res.text()
        ).then((res)=>{
            let res1=JSON.parse(res);
            console.log(res1.message==="login Successfull")
            if(res1.message==="login Successfull"){
                localStorage.setItem('loggedAdmin',JSON.stringify(fakeUser))
                props.history.push('/dashboard');
            }});
    }
    return(
        <Container>
            <Row className="h100">
               <Col lg={6} md={4} sm={12} className="centered marg1">
                   <Card>
                       <Card.Header>
                           <h3>Sign In</h3>
                        </Card.Header>
                        <Card.Body>
                           <Form onSubmit={handleSubmit} method='POST'>
                               <Form.Group>
                                   <Form.Label>Email</Form.Label>
                                   <InputGroup>
                                        <InputGroup.Text>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                            </svg>
                                        </InputGroup.Text>
                                        <Form.Control type="email" placeholder="Enter your email please" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                                   </InputGroup>
                               </Form.Group>
                               <Form.Group >
                                   <Form.Label>Password</Form.Label>
                                   <InputGroup>
                                        <InputGroup.Text>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>                                                </svg>
                                        </InputGroup.Text>
                                        <Form.Control placeholder="Enter your password please" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                                   </InputGroup>
                               </Form.Group>
                               <Form.Group className="pad2">
                                    <Button type="submit" variant="outline-dark">log in</Button>                                   
                               </Form.Group>                   
                            </Form>
                        </Card.Body>
                    </Card>
                </Col> 
                  
            </Row>
        </Container>
       
    )
}
export default AdminLoginComponent;