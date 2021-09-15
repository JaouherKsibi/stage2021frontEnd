import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from "react";
import ClientNavbar from "../ClientNavbar";
import ProductsCarousel from "../Carousel";
import Footer from "../Footer";
import Product from "../Home/Product";
function Search() {
    const [category, setCategory] = useState("");
    const [see, setSee] = useState(false);
    const [categoriesList, setCategoriesList] = useState([]);
    const [productsList, setProductsList] = useState([]);
    const [productName, setProductName] = useState("");
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    async function fetchCategoriesList() {
        const requestUrl = 'http://localhost:3001/api/getAllCategories'
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setCategoriesList(responseJSON)
    }
    async function fetchProductsList() {
        const requestUrl = 'http://localhost:3001/api/getAllProducts'
        const response = await fetch(requestUrl, { signal: signal });
        const responseJSON = await response.json();
        //console.log(responseJSON);
        setProductsList(responseJSON)
    }
    const abortController = new AbortController();
    const signal = abortController.signal;
    useEffect(() => {
        fetchProductsList().catch(error => {
        })
        fetchCategoriesList().catch(error => {
        })
        return function cleanUp() {
            abortController.abort();
        }
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let link='http://localhost:3001/api/searchProduct'
        link+='/'+productName+'/'+minPrice+'/'+maxPrice+'/'+category;
        
        console.log('ok1');
        fetch(link,
            {
                method: 'GET',
                headers: { "content-Type": "application/json" }
            }
        ).then(
            res => res.text()

        ).then((res) => {
            let res1 = JSON.parse(res);
            console.log(res1+'ok2')
        });
    }
    return (
        <React.Fragment>
            <ClientNavbar />
            <ProductsCarousel />
            
            <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Row>
                    {see===true?  <Button onClick={()=>{setSee(!see)}} >hide </Button>: <Button onClick={()=>{setSee(!see)}} > search</Button>}
                    
                </Row>
                {see?
                <Row style={{marginTop:'50px'}}>
                    <Form className="form-inline" >
                        <fieldset>

                            <InputGroup>
                                <Col style={{ marginRight: '25px' }}>
                                    <InputGroup.Prepend>
                                        <select className="form-control" onChange={(e) => { setCategory(e.target.value) }} style={{ width: '100%' }} value={category}>
                                            <option value="">--select category--</option>
                                            {
                                                categoriesList.map((category) => {

                                                    return (
                                                        <option key={category._id} value={category._id}>
                                                            {category.nom}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </InputGroup.Prepend>
                                </Col>
                                <Col style={{ marginRight: '25px' }}>
                                    <InputGroup>
                                <Form.Control type="text" placeholder="Product name" value={productName} onChange={(e) => setProductName(e.target.value)}></Form.Control>
                                    </InputGroup>{/*<input id="oSaisie" name="oSaisie" type="text" class="form-control" aria-label="Saisie de mots clés" placeholder='product name' />*/}
                                </Col>
                                <Col style={{ marginRight: '25px' }}> 
                                    <Row>
                                    <Col><label>price : </label>
                                            </Col>
                                        <Col>
                                        <InputGroup>
                                        <Form.Control type="text" placeholder="min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}></Form.Control>
                                        </InputGroup></Col>
                                        <Col>
                                        <InputGroup>
                                        </InputGroup><Form.Control type="text" placeholder="max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}></Form.Control>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col >
                                    <InputGroup.Append></InputGroup.Append>
                                </Col>     </InputGroup>
                        </fieldset>
                    </Form></Row>:null}
            </Container>
            <Container style={{ paddingTop: "10px", margin: 'auto' ,textAlign:'center'}}>
                <h1>All Products</h1>    
            </Container>
            <Container  style={{ paddingTop: "10px", margin: 'auto', marginBottom :'50px'}}>
                <Row>
                    {
                        productsList.filter(product=>{
                            return product.category._id.includes(category);
                        }).filter(product=>{
                            return product.nom.toLowerCase().includes(productName);
                        }).filter(product=>{
                            
                            return product.price>minPrice ;
                        }).filter(product=>{
                            if (maxPrice>0) {
                                 return product.price<=maxPrice
                            }
                            else {
                                return product
                            }
                           
                        }).map((product, index) => {
                            return (
                                <Product key={index} product={product} />
                            )
                        })
                    }
                </Row>

            </Container>


            <Footer />
        </React.Fragment>
    )
}
export default Search;