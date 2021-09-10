import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card ,Button, Form, InputGroup} from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandAid, faCommentAlt, faDollarSign, faLink, faPlus } from '@fortawesome/free-solid-svg-icons';
function AddProductForm(){
    const [categoriesList, setCategoriesList] = useState([]);
    const [productName,setProductName]=useState("");
    const [price , setPrice]=useState(0);
    const [ category,setCategory]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const [description , setDescription ] = useState("");
    useEffect(()=>{
        async function fetchCategoriesList() {
        const requestUrl='http://localhost:3001/api/getAllCategories'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        console.log(responseJSON);
        setCategoriesList(responseJSON)
        }
        fetchCategoriesList()
    },[]);
    //console.log(categoriesList);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const product={nom:productName,price:price , category:category ,imageUrl:imageUrl,description:description}
        console.log(product);
        fetch('http://localhost:3001/api/addProduct',
        {   method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(product)}
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="Product saved !"){
                setProductName('');
                setPrice(0);
                setCategory("");
                setImageUrl('');
                setDescription('');
                console.log("saved product ");
                
            }});
    }
    return (
        <Card style={{ width: '70%' ,marginTop:'10%' ,height:'60%'}} className="text-center forms">
            <Card.Header>
                Add New Product
            </Card.Header>
            <Card.Body>
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
                <Button type="submit" style={{marginTop:'30px'}}><FontAwesomeIcon icon={faPlus}/> Add </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default AddProductForm;