import {  useState } from "react";
import { faTrash, faEye , faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/DashboardStyle.css'
import { Button, Card, Modal} from "react-bootstrap";
import React from 'react';
function Comment({comment,index}){
    const [see,setSee]=useState(false);
    function updateComment(){
        fetch('http://localhost:3001/api/updateComment/'+comment._id,
        {   method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({seen:true})}
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="Objet modifié !"){
                console.log("Objet modifié !");
            }});
    }
    function deleteComment(){
        fetch('http://localhost:3001/api/deleteComment/'+comment._id,
        {   method:'GET',
            headers:{"content-Type":"application/json"}
        }
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            
        console.log(comment._id+"deleted");})
    }
    return(
        <React.StrictMode>
        <tr key={comment._id} >
            <th scope="row">{index+1}</th>
            <td>{comment.firstName} </td>
            <td>{comment.email} </td>
            <td>{comment.subject}</td>
            <td><button onClick={() => {setSee(true)}} style={{"border": "none" ,"backgroundColor":"transparent"}}><FontAwesomeIcon icon={faEye}/> </button></td>
            <td>{comment.seen?<FontAwesomeIcon style={{color:"green"}} icon={faCheck}/>:null}<button onClick={() => {updateComment();}} style={{"border": "none", "backgroundColor":"transparent"}}>{!comment.seen?<FontAwesomeIcon  icon={faCheck}/>:null}</button></td>
            <td><button onClick={() => {deleteComment();}} style={{"border": "none", "color": "red" , "backgroundColor":"transparent" }}><FontAwesomeIcon icon={faTrash}/></button> </td>
            <Modal  onHide={()=>{setSee(false)}} show={see} aria-labelledby="contained-modal-title-vcenter" size="auto" >
                <Modal.Header>
                    <Modal.Title>Message: {comment._id}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        <Card className="modalCard" bg='light'>
                            <Card.Body  >                                
                                <table>  
                                    <tbody>
                                        <tr>
                                            <td>First Name</td>
                                            <td>{comment.firstName}</td>
                                        </tr> 
                                        <tr>
                                            <td>lastName Name</td>
                                            <td>{comment.lastName}</td>
                                        </tr>                              
                                        <tr>
                                            <td><h5>Sender Email  :</h5></td>
                                            <td>{comment.email} </td>
                                        </tr>
                                        <tr>
                                            <td><h5>Sender Phone Number  :</h5></td>
                                            <td>{comment.phoneNumber} </td>
                                        </tr>
                                        <tr>
                                            <td><h5>Subject  :</h5></td>
                                            <td>{comment.subject} </td>
                                        </tr>
                                        <tr>
                                            <td><h5>Sender Message  :</h5></td>
                                            <td>{comment.message} </td>
                                        </tr>
                                    </tbody>
                                </table>                               
                            </Card.Body>
                        </Card>
                    
                </Modal.Body>
                <Modal.Footer style={{margin:'auto'}} >
                    <Button variant="outline-dark" onClick={()=>{setSee(false)}} >close</Button>
                </Modal.Footer>
            </Modal>
        </tr>
        </React.StrictMode>
    )
}
export default Comment;