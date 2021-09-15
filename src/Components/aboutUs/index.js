import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import '../../css/aboutUs.css'
import ClientNavbar from '../ClientNavbar';
import Footer from '../Footer';
function AboutUs() {
    return (
        <React.Fragment>
            <ClientNavbar/>
            <Image src="https://www.smallbusinessact.com/wp-content/uploads/2019/12/strategies-culture-entreprise-01.jpg" width='100%'/>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Inscrypt is a very active startup.established in the 1st september 2019 .</p>
                <p>It offers a lot of services like cryptography web hosting ,web and mobile developement etc.....</p>
            </div>
            <h2 style={{ "textAlign": "center" }}>Our Team</h2>
            <Container fluid style={{margin:'auto',paddingLeft:'100px'}}>
                <Row style={{ "margin": "auto",padding:0 ,flexWrap:'none'}}>
                    <Col style={{ "margin": "auto",padding:0 ,flexWrap:'none'}}>
                        <Card bg="light" style={{ "height": "auto" }}>
                            <Card.Img alt="Jane" style={{ "width": "100%" }} src="https://www.w3schools.com/w3images/team1.jpg" />
                            <Card.Body>
                                <Container>
                                    <Card.Title>Ksibi Jaouher</Card.Title>
                                    <Card.Subtitle>CEO & Founder</Card.Subtitle>
                                    <Card.Text>
                                        <p>Jaouher is a javascript Full-stack developer.He has a lot of experience in web development.</p>
                                        <p>ksibijaouher@gmail.com</p>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button></Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ "margin": "auto",padding:0 ,flexWrap:'none'}}>
                        <Card bg="light" style={{ "height": "auto" }}>
                            <Card.Img alt="Jane" style={{ "width": "100%" }} src="https://www.w3schools.com/w3images/team1.jpg" />
                            <Card.Body>
                                <Container>
                                    <Card.Title>Ksibi Jaouher</Card.Title>
                                    <Card.Subtitle>CEO & Founder</Card.Subtitle>
                                    <Card.Text>
                                        <p>Jaouher is a javascript Full-stack developer.He has a lot of experience in web development.</p>
                                        <p>ksibijaouher@gmail.com</p>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button></Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ "margin": "auto",padding:0 ,flexWrap:'none'}}>
                        <Card bg="light" style={{ "height": "auto" }}>
                            <Card.Img alt="Jane" style={{ "width": "100%" }} src="https://www.w3schools.com/w3images/team1.jpg" />
                            <Card.Body>
                                <Container>
                                    <Card.Title>Ksibi Jaouher</Card.Title>
                                    <Card.Subtitle>CEO & Founder</Card.Subtitle>
                                    <Card.Text>
                                        <p>Jaouher is a javascript Full-stack developer.He has a lot of experience in web development.</p>
                                        <p>ksibijaouher@gmail.com</p>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button></Container>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>
            <Footer/>
        </React.Fragment>

    )
}
export default AboutUs;