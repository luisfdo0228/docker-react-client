/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/img/logo.png';




export class Navbarm extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        let regex = new RegExp("^[a-zA-Z ]+$");
        if (regex.test(event.target.value)) {
            this.setState({value: event.target.value});
        } else {
            if(event.target.value.length === 0){
                this.setState({value: ''});
            }
            return false
        }
    } 
    
  
    render(){
        const { handleSearch } = this.props
        return(
            <Navbar className="navbar-style" variant="light" collapseOnSelect expand="lg">
                <Navbar.Brand>
                <a href="/#" alt="description of image">
                    <img src={logo}/>
                </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                <Form inline>
                    <FormControl value={this.state.value} onChange={this.handleChange} type="text" placeholder="Insert Text" className="mr-sm-2" />
                    <Button onClick={handleSearch} value={this.state.value} variant="outline-light">Send</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}