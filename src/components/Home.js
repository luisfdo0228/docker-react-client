import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';




export class Home extends Component {
    
    render(){
        return(
            <Container className="processing-style">
                <Row>
                    <Col className="processing-col-style" xs={12} md={6}>
                        <b className="processing-title-style">TEXT</b>
                    </Col>
                    <Col className="processing-col-style" xs={12} md={6}>
                        <b className="processing-title-style">PALINDROMO</b>
                    </Col>
                </Row>
            </Container>
        )
    }
}