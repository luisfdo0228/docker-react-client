/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Navbar as NavbarB, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/img/logo.png';




export class Navbar extends React.Component  {

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
            <NavbarB className="navbar-style" variant="light" collapseOnSelect expand="lg">
                <NavbarB.Brand>
                <a href="/#" alt="description of image">
                    <img src={logo}/>
                </a>
                </NavbarB.Brand>
                <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarB.Collapse className="justify-content-center" id="responsive-navbar-nav">
                <Form inline>
                    <FormControl value={this.state.value} onChange={this.handleChange} type="text" placeholder="Insert Text" className="mr-sm-2" />
                    <Button onClick={handleSearch} value={this.state.value} variant="outline-light">Send</Button>
                </Form>
                </NavbarB.Collapse>
            </NavbarB>
        )
    }
}