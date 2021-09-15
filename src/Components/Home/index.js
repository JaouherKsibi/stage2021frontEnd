import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductsCarousel from '../Carousel';
import ClientNavbar from '../ClientNavbar';
import Footer from '../Footer';
import Product from './Product';
function HomePage(){
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
    return (
        <React.Fragment>
            <ClientNavbar/>
            <ProductsCarousel/>
            <Container  style={{marginTop:"50px",marginBottom:"50px" , textAlign:"center"}}>
                <Row style={{marginTop:"50px",marginBottom:"50px"}}>
                    <h1>Products</h1>
                </Row>
                <Row>
                {
                            productsList.map((product,index)=>{
                                return(
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
export default HomePage;