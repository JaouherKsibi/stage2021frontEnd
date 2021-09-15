import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import ProductsCarousel from "../Carousel";
//import Stories from "../categoriesStories";
import ClientNavbar from "../ClientNavbar";
import Footer from "../Footer";
import '../../css/stories.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Product from "../Home/Product";
function CategoryPageClient(){
    const [category,setCategory]=useState('');
    const [productsList, setProductsList] = useState([]);
    async function fetchProductsList() {
        const requestUrl='http://localhost:3001/api/getAllProducts'
        const response=await fetch(requestUrl,{signal:signal});
        const responseJSON=await response.json();
        //console.log(responseJSON);
        setProductsList(responseJSON)
        }
    const abortController=new AbortController();
    const signal=abortController.signal;
    useEffect (()=>{
        fetchProductsList().catch(error => {
        })
        return function cleanUp(){
            abortController.abort();
        }
    },[productsList]);
    //const [index, setIndex] = useState(0);
    const [categoriesList, setCategoriesList] = useState([]);
  /* const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }; */
  useEffect(() => {
    async function fetchCategoriesList() {
        const requestUrl = 'http://localhost:3001/api/getAllCategories'
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setCategoriesList(responseJSON)
    }
    fetchCategoriesList()
}, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
    return (
        <React.Fragment>
            <ClientNavbar />
            <ProductsCarousel/>
            <Container className='border' style={{marginTop:'50px',marginBottom:'50px'}}>
                <h1>Our categories</h1>
                <Row >
                    <Slider {...settings}>
                        {categoriesList.map((category)=>{
                            return (
                                <Col >
                                
                                <Card style={{width:'300px'}} bg='light' >
                                    <button onClick={()=>{setCategory(category._id)}} style={{backgroundColor:"transparent",border:"none" , margin:"none"}}>
                                <Card.Img
                                  variant="top"
                                  src={category.imageUrl}
                                  style={{width:"100%"}}
                                />
                                <Card.Body>
                                  <span>{category.nom} </span>
                                </Card.Body></button>
                              </Card>
                              
                              </Col>
                                
                            )
                        })}
                        
                        
                        
                      </Slider>
            </Row>
            </Container>
            <Container style={{marginTop:'50px',marginBottom:'250px'}}>
                <Row><h1>Products</h1> </Row>
                
                <Row>
                {
                            productsList.filter((product)=>{
                                if(category===''){
                                    return product;
                                }
                                else{
                                    return product.category._id===category;
                                }
                            }).map((product,index)=>{
                                return(
                                    <Product key={index} product={product} />
                               )
                            })
                        }
                </Row>
            
                
            </Container>
            <Footer/>
        </React.Fragment>
    )

}
export default CategoryPageClient;