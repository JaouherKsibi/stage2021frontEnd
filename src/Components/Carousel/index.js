import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

function ProductsCarousel(){
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
    useEffect(()=>{
        fetchProductsList().catch(error => {
        })
        return function cleanUp(){
            abortController.abort();
        }
    },[productsList]);
    return (
        <Carousel variant="dark" fade>
            {
                            productsList.map((product,index)=>{
                                return(
                                    <Carousel.Item key={index}>
                                        <img
                                        className="d-block w-100"
                                        src={product.imageUrl}
                                        alt={product.nom}
                                        width='100%'
                                        height='500px'
                                        />
                                        <Carousel.Caption>
                                        <h5>{product.nom}</h5>
                                        <p>{product.description} </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                               )
                            })
                        }
        </Carousel>
    )
}

export default ProductsCarousel;