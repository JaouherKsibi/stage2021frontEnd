import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import ProductsCarousel from "../Carousel";
import ClientNavbar from "../ClientNavbar";
import Footer from "../Footer";
import Product from "../Home/Product";

function ProductsByCategoryClients() {
    
    const { idCategory } = useParams()
    const [productsList, setProductsList] = useState([]);
    async function fetchProductsList() {
        const requestUrl = 'http://localhost:3001/api/getProductsByIdCategory/' + idCategory;
        const response = await fetch(requestUrl, { signal: signal });
        const responseJSON = await response.json();
        setProductsList(responseJSON)
    }
    const abortController = new AbortController();
    const signal = abortController.signal;
    useEffect(() => {
        fetchProductsList().catch(error => {
        })
        return function cleanUp() {
            abortController.abort();
        }
    }, [productsList]);
    
    return (
        <React.Fragment>
            <ClientNavbar />
            <ProductsCarousel />
            
            <Container fluid style={{ paddingTop: "10px", margin: 'auto' }}>
                {
                    productsList != [] ? 
                        <Row>
                            {
                                productsList.map((product, index) => {
                                    return (
                                        <Product key={index} product={product} />
                                    )
                                })
                            }
                        </Row>:null
                }
                {
                   productsList.length===0? <Row style={{ marginTop: "100px", marginBottom: '100px' }} ><Col style={{ color: 'gray', size: '12px', textAlign: 'center' }}>this category has no products yet </Col></Row> :null
                }

            </Container>
            <Footer />
        </React.Fragment>



    )
}
export default ProductsByCategoryClients;