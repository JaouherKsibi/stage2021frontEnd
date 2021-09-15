import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Col, Container , Row} from 'react-bootstrap/'
import { FaEnvelope, FaFacebookSquare, FaGem, FaGithub, FaGoogle, FaHome, FaInstagram, FaLinkedin, FaPhone, FaPrint, FaTwitter } from 'react-icons/fa';
function Footer(){
    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(()=>{
        async function fetchCategoriesList() {
        const requestUrl='http://localhost:3001/api/get4Categories'
        const response=await fetch(requestUrl);
        const responseJSON=await response.json();
        setCategoriesList(responseJSON)
        }
        fetchCategoriesList();

    },[categoriesList]);
    return (
        <div className="footer-copyright-area "   >
            <footer className="text-center text-lg-start text-muted" style={{backgroundColor:'#474e5d',color:"#fff" }}>
            <section
                className="d-flex justify-content-center  p-4 border-bottom"
                id="social-media"
            >
                
               <Container >
                   <Row>
                       <Col lg={5} xl={5}><span>Get connected with us on social networks:</span></Col>
                        <Col style={{marginLeft:0}}>
                            <div >
                                <a href="https://www.facebook.com/" className="me-4 text-reset">
                                    <FaFacebookSquare />
                                </a>
                                <a href="https://twitter.com/" className="me-4 text-reset">
                                <FaTwitter />
                                </a>
                                <a href="https://www.google.com/" className="me-4 text-reset">
                                    <FaGoogle />
                                </a>
                                <a href="https://www.instagram.com/?hl=fr" className="me-4 text-reset">
                                    <FaInstagram />
                                </a>
                                <a href="https://fr.linkedin.com/" className="me-4 text-reset">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/" className="me-4 text-reset">
                                    <FaGithub />
                                </a>
                            </div>
                        </Col>
                   </Row>
                   {/*<div className="me-5 d-none d-lg-block">
                
                
    </div>**/}
                

                

               </Container>
                
               
            </section>
             

            
            <section className="">
                <div className="container text-center text-md-start mt-5">
                
                <div className="row mt-3">
                    
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                        <FaGem /> INSCRYPT
                    </h6>
                    <p>
                        Our website offers you a variety of products.<br/>
                        You will find all your needs.
                    </p>
                    </div>
                    

                    
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                        Categories
                    </h6>
                    {
                            categoriesList.map((category,index)=>{
                                let link="/category/"+category._id;
                                return(
                                <p key={category._id}>
                        <a href={link} className="text-reset">{category.nom}</a>
                    </p>  
                               )
                            })
                        }
                    </div>
                    

                    
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                    </h6>
                    <p>
                        <a href="/home" className="text-reset">Welcome Page </a>
                    </p>
                    <p>
                        <a href="/aboutUs" className="text-reset">about us </a>
                    </p>
                    <p>
                        <a href="/contact" className="text-reset">Contact </a>
                    </p>
                    <p>
                        <a href="/contact" className="text-reset">Help</a>
                    </p>
                    </div>
                    

                    
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                        Contact
                    </h6>
                    <p><FaHome/> Rue Hedi Cheker Kelibia</p>
                    <p>
                        <FaEnvelope />
                        ksibijaouher@gmail.com
                    </p>
                    <p><FaPhone /> + 216 52 761 212</p>
                    <p><FaPrint/> + 216 52 761 212</p>
                    </div>
                    
                </div>
                
                </div>
            </section>
            

            
            <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://jaouherksibi.github.io/ksibi-jaouher-s-website/">Ksibi Jaouher</a>
            </div>
            
            </footer>
                    </div>
    )
}
export default Footer;