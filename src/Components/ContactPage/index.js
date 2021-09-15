import ContactForm from '../ContactForm/index'
import Footer from '../Footer'
import '../../css/clientSide.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClientNavbar from '../ClientNavbar';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import ProductsCarousel from '../Carousel';
function ContactPage(){
    return (
        <React.Fragment>
            <ClientNavbar/>
            <ProductsCarousel/>
            <Container  style={{paddingTop:"10px"}}>
                <Row>
                    <Col lg={12} md={12} sm={12} xl={12}>
                        <h2 className="h3 mb-3 text-black">Get In Touch</h2>
                    </Col>
                    <Col lg={7} md={7} sm={12} xl={7} className="p-4 border mb-3">
                        <ContactForm/>
                    </Col>
                    <Col lg={5} md={5} sm={12} xl={5}>
                        <div className="p-4 border mb-3">
                            <span className="d-block text-primary h6 text-uppercase">Kelibia</span>
                            <p>rue hedi cheker kelibia </p>
                        </div>
                        <div className="p-4 border mb-3">
                            <span className="d-block text-primary h6 text-uppercase">Nabeul</span>
                            <p>rue hedi cheker Nabeul </p>
                        </div>
                    </Col>
                </Row>
               
            </Container>
            <Footer />
        </React.Fragment>
        
        
        
    )
}
export default ContactPage;