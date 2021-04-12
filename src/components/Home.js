/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import logo_sucess from '../assets/img/success-icon.png';
import logo_failed from '../assets/img/failed-icon.png';




export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {iecho:[], elements:[], open:false};
        this.handleChange = this.handleChange.bind(this);
    }



    getIechoApi = async (text) => {
        fetch('http://localhost:5000/api/iecho?text='+text)
          .then(response => response.json())
          .then(processingData => {
            this.setState({iecho:processingData})
            if(this.state.iecho.success){
                if(this.state.elements.length === 3){
                    const state = [...this.state.elements]
                    state.shift();
                    this.setState({elements:state})
                }  
                this.setState({elements:[...this.state.elements,{text:this.state.iecho.data[0].text, palindrome:this.state.iecho.data[0].palindrome}]})
            } else {
                this.setState({open:true})
            }
        })
    }



    handleChange(event) {
        this.setState({open: false});
    } 

    


    render(){
        const show = this.state.open;
        return(
            <Container>
                {this.state.open ? (
                    <Toast className="toast-style" show={show} onClose={this.handleChange}>
                        <Toast.Header>
                            <strong className="mr-auto">Error</strong>
                        </Toast.Header>
                        <Toast.Body>Asegúrese por favor de colocar una palabra</Toast.Body>
                    </Toast>
                ) : (
                    <span className="processing-title-style">Ingrese datos</span>
                )}
                <Container className="processing-style">
                <Row>
                    <Col className="processing-col-style" xs={12} md={6}>
                        <b className="processing-title-style">TEXT</b>
                    </Col>
                    <Col className="processing-col-style" xs={12} md={6}>
                        <b className="processing-title-style">PALINDROMO</b>
                    </Col>
                </Row>
                {this.state.elements.length > 0 ? this.state.elements.map((value, index) => (
                    <Row key={index}>
                        <Col className="processing-col-style" xs={12} md={6}>
                            <span className="processing-title-style">{value.text}</span>
                        </Col>
                        <Col className="processing-col-style" xs={12} md={6}>
                            {value.palindrome && <img src={logo_sucess}/>}
                            {!value.palindrome && <img src={logo_failed}/>}
                        </Col>
                    </Row>
                )) : (
                    <span className="processing-title-style">No hay elementos</span>
                )}
                </Container>
            </Container>
        )
    }
}

export default Home;