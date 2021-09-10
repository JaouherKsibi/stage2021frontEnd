import { useState } from "react";
import { faTrash, faPencilAlt, faEye , faBandAid, faLink} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/DashboardStyle.css'
import { Button, Card,  Modal,Form, InputGroup,  Figure } from "react-bootstrap";

function CategoryLine({category,index}){
    const [id,setId]=useState("");
    const [categoryName,setCategoryName]=useState('');
    const [categoryImgUrl,setCategoryImgUrl]=useState('')
    const [update,setUpdate]=useState(false);
    const [see,setSee]=useState(false);
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
    function deleteCategory(id){
        console.log('ok');
        fetch('http://localhost:3001/api/deleteCategory/'+id,
        {   method:'POST',
            headers:{"content-Type":"application/json"}
           // body:JSON.stringify({id:id})
        }
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="category deleted !"){
                console.log("deleted product ");
                //fetchProductsList();
                
            }});
        console.log(id+"deleted");
    }
    function updateCategory(Category){
        setId(Category._id)
        setCategoryName(Category.nom);
        setCategoryImgUrl(Category.imageUrl)
        setUpdate(true)
    }
    function showCategory(){
        setSee(true); 
    }
    return(
        <tr key={category._id} >
            <th scope="row">{index+1}</th>
           
            <td>
                <Figure>
                    <Figure.Image src={category.imageUrl} width={50} height={50}/>
                </Figure> 
            </td>
            <td>{category.nom} </td>
            <td><button onClick={() => {showCategory();}} style={{"border": "none" ,"backgroundColor":"transparent"}}><FontAwesomeIcon icon={faEye}/> </button></td>
            <td><button onClick={() => {updateCategory(category);}} style={{"border": "none", "color": "green" ,"backgroundColor":"transparent"}}><FontAwesomeIcon icon={faPencilAlt}/></button></td>
            <td><button onClick={() => {deleteCategory(category._id);}} style={{"border": "none", "color": "red" , "backgroundColor":"transparent" }}><FontAwesomeIcon icon={faTrash}/></button> </td>
            <Modal  onHide={()=>{setSee(false)}} show={see} aria-labelledby="contained-modal-title-vcenter" size="auto" >
                <Modal.Header>
                    <Modal.Title>Show Category Infos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        <Card className="modalCard" bg='light'>
                            <Card.Img variant="top" src={category.imageUrl} style={{marginBottom:0}} />
                            <Card.Body  >                                
                                <table>  
                                    <tr>
                                        <td>Category id</td>
                                        <td>{category._id}</td>
                                    </tr>                              
                                    <tr>
                                        <td><h5>category Name :</h5></td>
                                        <td>{category.nom} </td>
                                    </tr>
                                </table>                               
                            </Card.Body>
                        </Card>
                    
                </Modal.Body>
                <Modal.Footer style={{margin:'auto'}} >
                    <Button variant="outline-dark" onClick={()=>{setSee(false)}} >close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={update} onHide={()=>{setUpdate(false)}} aria-labelledby="contained-modal-title-vcenter" size="lg"  >
                <Modal.Header>
                    <Modal.Title>Update category </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        {/** */}
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
                            {/** */}
                            <Form.Control value={categoryImgUrl} onChange={(e)=>setCategoryImgUrl(e.target.value)} type="text" placeholder="Enter the image url please" ></Form.Control>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="outline-dark"  >update</Button>
                    {/* */}
                    <Button variant="outline-dark" onClick={cancel} >cancel</Button>
                </Form.Group>
                
                </Form>                                                                            
                </Modal.Body>
            </Modal>
        
        </tr>
    )
}
export default CategoryLine;