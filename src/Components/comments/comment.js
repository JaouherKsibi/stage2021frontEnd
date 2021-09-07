import { useEffect, useState } from "react";
import { faTrash, faPencilAlt, faEye , faBandAid, faCommentAlt, faDollarSign, faLink, faPlus, faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/DashboardStyle.css'
import { Button, Card, Container, Modal,Form, InputGroup, Image, Figure } from "react-bootstrap";

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
    /*const [id,setId]=useState("");
    const [categoryName,setCategoryName]=useState('');
    const [categoryImgUrl,setCategoryImgUrl]=useState('')
    const [update,setUpdate]=useState(false);
    
    function cancel(){
        setId('')
        setCategoryName('');
        setCategoryImgUrl('')
        setUpdate(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const produit={nom:categoryName,imageUrl:categoryImgUrl}
        fetch('http://localhost:3001/api/UpdateCategory/'+id,
        {   method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(produit)}
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="Objet modifié !"){
               cancel();
                console.log("Objet modifié !");
                
            }});
    }
    
    
    function showCategory(){
        setSee(true); 
    }*/
    return(
        <tr key={comment._id} >
            <th scope="row">{index+1}</th>
            <td>{comment.nom} </td>
            <td>{comment.email} </td>
            <td>{comment.message.substr(0,15)}... </td>
            {/** */}
            <td><button onClick={() => {setSee(true)}} style={{"border": "none" ,"backgroundColor":"transparent"}}><FontAwesomeIcon icon={faEye}/> </button></td>
            {/**  */}
            <td>{comment.seen?<FontAwesomeIcon style={{color:"green"}} icon={faCheck}/>:null}<button onClick={() => {updateComment();}} style={{"border": "none", "backgroundColor":"transparent"}}>{!comment.seen?<FontAwesomeIcon  icon={faCheck}/>:null}</button></td>
            {/** */}
            <td><button onClick={() => {deleteComment();}} style={{"border": "none", "color": "red" , "backgroundColor":"transparent" }}><FontAwesomeIcon icon={faTrash}/></button> </td>
            <Modal  onHide={()=>{setSee(false)}} show={see} aria-labelledby="contained-modal-title-vcenter" size="auto" >
                <Modal.Header>
                    <Modal.Title>Message: {comment._id}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        <Card className="modalCard" bg='light'>
                            <Card.Body  >                                
                                <table>  
                                    <tr>
                                        <td>Sender Name</td>
                                        <td>{Comment.nom}</td>
                                    </tr>                              
                                    <tr>
                                        <td><h5>Sender Email  :</h5></td>
                                        <td>{comment.email} </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Message  :</h5></td>
                                        <td>{comment.message} </td>
                                    </tr>
                                </table>                               
                            </Card.Body>
                        </Card>
                    
                </Modal.Body>
                <Modal.Footer style={{margin:'auto'}} >
                    <Button variant="outline-dark" onClick={()=>{setSee(false)}} >close</Button>
                </Modal.Footer>
            </Modal>
            {/*
            <Modal show={update} onHide={()=>{setUpdate(false)}} aria-labelledby="contained-modal-title-vcenter" size="lg"  >
                <Modal.Header>
                    <Modal.Title>Update category </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        
                <Form onSubmit={handleSubmit} method="POST">
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                    <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faBandAid}/>
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter the category name please" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}></Form.Control>
                    </InputGroup>
                    </Form.Group>
                <Form.Group>
                    <Form.Label>Image Url</Form.Label>
                    <InputGroup>
                            <InputGroup.Text>
                            <FontAwesomeIcon className="fass" icon={faLink}/>
                            </InputGroup.Text>
                            
                            <Form.Control value={categoryImgUrl} onChange={(e)=>setCategoryImgUrl(e.target.value)} type="text" placeholder="Enter the image url please" ></Form.Control>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="outline-dark"  >update</Button>
                    
                    <Button variant="outline-dark" onClick={cancel} >cancel</Button>
                </Form.Group>
                
                </Form>                                                                            
                </Modal.Body>
            </Modal>*/}
        
        </tr>
    )
}
export default Comment;