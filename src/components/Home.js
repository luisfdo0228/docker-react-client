/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo_sucess from '../assets/img/success-icon.png';
import logo_failed from '../assets/img/failed-icon.png';




export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { iecho:[], elements:[], items:[]};
        this.getIechoApi = this.getIechoApi.bind(this);
    }


    componentDidUpdate() {
        // this.getIechoApi();
    }


    getIechoApi = async (text) => {
        fetch('http://localhost:5000/api/iecho?text='+text)
          .then(response => response.json())
          .then(processingData => {
            this.setState({iecho:processingData})
            if(this.state.iecho.success){
                if(this.state.elements.length === 3){
                    this.state.elements.shift();
                } 
                this.state.elements.push({text:this.state.iecho.data[0].text, palindrome:this.state.iecho.data[0].palindrome}) 
            } else {
                alert('ERROR NO SE ENVIO CADENA');
            }
            this.setState({items:[]})
            for (const [index, value] of this.state.elements.entries()) {
                this.state.items.push(
                    <Row key={index}>
                        <Col className="processing-col-style" xs={12} md={6}>
                            <span className="processing-title-style">{value.text}</span>
                        </Col>
                        <Col className="processing-col-style" xs={12} md={6}>
                            {value.palindrome && <img src={logo_sucess}/>}
                            {!value.palindrome && <img src={logo_failed}/>}
                        </Col>
                    </Row>
                )
            }
            console.log(this.state.items)
            this.render()
          })

        
    }


  
 
    render(){
      
        let items  = this.state.items;

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
                {items}
            </Container>
        )
    }
}

export default Home;