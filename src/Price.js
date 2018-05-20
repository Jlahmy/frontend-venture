import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

import 'react-notifications/lib/notifications.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Label,
    // Input,
    CustomInput,
    Col,
    Button,
    Modal
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            username: "",
            modalOpen: false,
            english: true,
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    handlePrice = (e) => {
        //add logic for the case where everything is set to false and null, in that case return a random generation of the listing
        e.preventDefault();
        this.props.handleSubmit();
    }
    toggleLanguage = () => {
        this.setState({
            english: !this.state.english
        });
    }

    render() {
        if(this.state.english === true) {
            return (
                <div>
    
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Welcome traveller,</h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>
    
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.toggleLanguage}>FR</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem><NavItem><NavLink href="/">Restart</NavLink></NavItem></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.toggleModal} >About</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
    
                    <div className="priceContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, choose your price range!</Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                value={this.props.cheap}
                                onChange={() => this.props.togglePrice("cheap")} 
                                id="k" label="$"/></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                value={this.props.expensive}
                                onChange={() => this.props.togglePrice("expensive")} 
                                id="m" label="$$"/></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handlePrice} >Onwards! To greatness!</Button>
                        </Col>
    
                    </div>
                </div>
            );
        } else {
            return (
                <div>
    
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Welcome traveller,</h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>
    
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.toggleLanguage}>EN</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem><NavItem><NavLink href="/">Recommencer</NavLink></NavItem></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.toggleModal} >Détails</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
    
                    <div className="priceContainer">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label>{this.props.username}, choisis ton prix</Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                value={this.props.cheap}
                                onChange={() => this.props.togglePrice("cheap")} 
                                id="k" label="$"/></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Label check><CustomInput type="checkbox"
                                value={this.props.expensive}
                                onChange={() => this.props.togglePrice("expensive")} 
                                id="m" label="$$"/></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handlePrice} >A la venture!</Button>
                        </Col>
    
                    </div>
                </div>
            );
        }
        
    }
}

let Price = withRouter(Content);

export default Price;