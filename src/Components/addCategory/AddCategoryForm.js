import 'bootstrap/dist/css/bootstrap.min.css'
import { Card ,Button, Form, InputGroup, Toast} from 'react-bootstrap/'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandAid, faLink, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'bootstrap';
function AddCategoryForm (props){
    const [categoryName,setCategoryName]=useState("");
    const [categoryImageLink,setCategoryImageLink]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newCategory={nom:categoryName,imageUrl:categoryImageLink}
        fetch('http://localhost:3001/api/addCategory',
        {   method:'POST',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(newCategory)}
        ).then(
            res=>res.text()
            
        ).then((res)=>{
            let res1=JSON.parse(res);
            if(res1.message==="Objet enregistré !"){
                setCategoryImageLink('');
                setCategoryName('');
                console.log('succes ');
            }});
    }
    return (
                <Card style={{ width: '70%' ,marginTop:'10%'}} className="text-center forms">
                    <Card.Header>
                        Add New Category
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit} method='POST'>
                            <Form.Group>
                               <Form.Label>Category Name</Form.Label>
                               <InputGroup>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faBandAid}/>
                                    </InputGroup.Text>
                                    <Form.Control type="text" placeholder="Enter the Category name please" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}></Form.Control>
                               </InputGroup>
                           </Form.Group>
                           <Form.Group>
                               <Form.Label>Category Image Link</Form.Label>
                               <InputGroup>
                                    <InputGroup.Text>
                                       <FontAwesomeIcon className="fass" icon={faLink}/>
                                    </InputGroup.Text>
                                    <Form.Control type="text" placeholder="Enter the Category image url please" value={categoryImageLink} onChange={(e)=>setCategoryImageLink(e.target.value)}></Form.Control>
                               </InputGroup>
                           </Form.Group>
                           <Button type="submit" style={{marginTop:'30px'}}><FontAwesomeIcon icon={faPlus}/> Add </Button>
                        </Form>
                    </Card.Body>
                </Card>
    )
}
export default AddCategoryForm;