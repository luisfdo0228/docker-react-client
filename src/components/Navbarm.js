import React, {Component} from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/img/logo.png';



export class Navbarm extends Component {
    
    render(){
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
                    <FormControl type="text" placeholder="Insert Text" className="mr-sm-2" />
                    <Button variant="outline-light">Send</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}