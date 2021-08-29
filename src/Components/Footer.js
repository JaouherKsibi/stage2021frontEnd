import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container , Row} from 'react-bootstrap/'
function Footer(){
    return (
        <div class="footer-copyright-area">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div class="footer-copy-right">
                            <p>Copyright © 2021 <a href="#">Inscrypt</a> All rights reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;