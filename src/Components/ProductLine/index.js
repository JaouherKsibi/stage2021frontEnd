import { useEffect, useState } from "react";
import { faTrash, faPencilAlt, faEye , faBandAid, faCommentAlt, faDollarSign, faLink} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/DashboardStyle.css'
import { Button, Card, Modal,Form, InputGroup } from "react-bootstrap";
function ProductLine({product,index}){
    function cancel(){
        setId(product._id)
        setProductName(product.nom);
        setPrice(product.price)
        setCategory(product.category._id)
        setImageUrl(product.imageUrl)
        setDescription(product.description)
        setUpdate(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const produit={nom:productName,price:price , category:category ,imageUrl:imageUrl,description:description}
        fetch('http://localhost:3001/api/UpdateProduct/'+id,
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
    const [categoriesList, setCategoriesList] = useState([]);
    const [productName,setProductName]=useState("");
    const [price , setPrice]=useState(0);
    const [ category,setCategory]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const [id,setId]=useState("");
    const [description , setDescription ] = useState("");
    useEffect(()=>{
        async function fetchCategoriesList() {
        const requestUrl='http://localhost:3001/api/getAllCategories'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        setCategoriesList(responseJSON)
        }
        fetchCategoriesList()
    },[]);
    const [update , setUpdate]=useState(false); 
    /*const [productIdToSee,setProductIdToSee]=useState("");*/
    const [see,setSee]=useState(false);
    function deleteProduct(id){
        fetch('http://localhost:3001/api/deleteProduct/'+id,
        {   method:'POST',
            headers:{"content-Type":"application/json"}
           // body:JSON.stringify({id:id})
        }
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="Objet supprimé !"){
                console.log("deleted product ");
                //fetchProductsList();
                
            }});
        console.log(id+"deleted");
    }
    function updateProduct(product){
        setId(product._id)
        setProductName(product.nom);
        setPrice(product.price)
        setCategory(product.category._id)
        setImageUrl(product.imageUrl)
        setDescription(product.description)
        setUpdate(true)
    }
    function showProduct(){
        setSee(true); 
    }
    
    return (
        <tr key={product._id} >
            <th scope="row">{index+1}</th>
            <td>{product.nom} </td>
            <td>{product.category.nom} </td>
            <td>{product.price} </td>
            <td><button onClick={() => {showProduct();/* shown=true; */}} style={{"border": "none" ,"backgroundColor":"transparent"}}><FontAwesomeIcon icon={faEye}/> </button></td>
            <td><button onClick={() => {updateProduct(product);}} style={{"border": "none", "color": "green" ,"backgroundColor":"transparent"}}><FontAwesomeIcon icon={faPencilAlt}/></button></td>
            <td><button onClick={() => {deleteProduct(product._id);}} style={{"border": "none", "color": "red" , "backgroundColor":"transparent" }}><FontAwesomeIcon icon={faTrash}/></button> </td>
            <Modal show={see} aria-labelledby="contained-modal-title-vcenter" size="auto" onHide={()=>{setSee(false)}} >
                <Modal.Header>
                    <Modal.Title>Show product infos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        <Card className="modalCard" bg='light'>
                            <Card.Img variant="top" src={product.imageUrl} style={{marginBottom:0}} />
                            <Card.Body  >
                                
                                <table>
                                        <tr>
                                            <td><h4>Product Name :</h4></td>
                                            <td>{product.nom} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Price :</h4></td>
                                            <td>{product.nom} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Category</h4></td>
                                            <td>{product.category.nom} </td>
                                        </tr>
                                        <tr>
                                            <td><h4>Description  :</h4></td>
                                            <td>{product.description} </td>
                                        </tr>
                                        
                                    </table>
                                
                            </Card.Body>
                        </Card>
                    
                </Modal.Body>
                <Modal.Footer style={{margin:'auto'}} >
                    <Button variant="outline-dark" onClick={()=>{setSee(false)}} >close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={update} aria-labelledby="contained-modal-title-vcenter" size="lg" onHide={()=>{setUpdate(false)}} >
                <Modal.Header>
                    <Modal.Title>Update Product </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                        
                <Form onSubmit={handleSubmit} method="POST">
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                    <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faBandAid}/>
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter the Product name please" value={productName} onChange={(e)=>setProductName(e.target.value)}></Form.Control>
                    </InputGroup>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <InputGroup>
                            <InputGroup.Text>
                            <FontAwesomeIcon className="fass" icon={faDollarSign}/>
                            </InputGroup.Text>
                            <Form.Control type="float" placeholder="Enter the price please" value={price} onChange={(e)=>setPrice(e.target.value)}></Form.Control>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image Url</Form.Label>
                    <InputGroup>
                            <InputGroup.Text>
                            <FontAwesomeIcon className="fass" icon={faLink}/>
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter the image url please" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}></Form.Control>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <InputGroup>
                            <InputGroup.Text>
                            <FontAwesomeIcon className="fass" icon={faCommentAlt}/>
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Enter the description please" value={description} onChange={(e)=>setDescription(e.target.value)}></Form.Control>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <InputGroup>
                <select onChange={(e)=>{setCategory(e.target.value)}} style={{width:'100%'}} value={category}>
                            <option value="">select category</option>
                            {
                                categoriesList.map((category)=>{
                                    
                                    return(
                                        <option key={category._id} value={category._id}>
                                            {category.nom}
                                        </option>
                                    )
                                })
                            }
                            </select></InputGroup>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="outline-dark"  >update</Button>
                    <Button variant="outline-dark" onClick={cancel} >cancel</Button>
                </Form.Group>
                
                </Form>                                                                            
                </Modal.Body>
            </Modal>
        
        </tr>
    )
}
export default ProductLine;