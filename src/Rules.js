import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

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

    Col,
    Button,

    Modal,
    //ModalHeader,
} from 'reactstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modalOpen: false,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }

    handleRules = () => {
        this.props.historyPush('/food') // THIS IS THE KEY LINE
    }


    render() {
        if (this.props.english === true) {
            return (
                <div className="introDiv">
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Welcome </h2>
                        <h2 id="h2Modal" align="center"> to the world of venture!</h2>
                        <h4 align="center">Crafted by a scrappy team of three aspiring web-developers, venture is the brain-child of Aly Neumann, Ksenia Nadkina and Jordan Lahmy! </h4>
                        <h4 align="center"> Built with react/react-strap using express & written in javascript, what you see is the culmination of 10 days of intensive work!</h4>
                    </Modal>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.props.toggleLanguage} style={{ cursor: 'pointer' }}>FR</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={this.toggleModal}>About</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="introContainer" id="introId1">
                        <Col sm={{ size: 8, offset: 2 }}>
                            <Label for="ventureWelcome"><h2>Welcome {this.props.username},</h2></Label>
                        </Col>
                        <Col sm={{ size: 8, offset: 2 }}>
                            <Label for="ventureWelcome2">
                            <h1> To the world of venture!</h1>
                            <h4>We will start by asking you simple questions in order to properly tailor your adventure.
                                 After which, take a deep breath and throw yourselves to greatness!</h4>
                            </Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleRules} >Onwards!</Button>
                        </Col>
                    </div>
                </div >
            );
        } else {
            return (
                //en francais
                <div className="introDiv">
                    <Modal className="introModal" isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                        <h2 align="center">Bienvenue voyageur,</h2>
                        <h2 id="h2Modal" align="center"> au monde de venture!</h2>
                        <h4 align="center">Créer avec amour par Aly Neumann, Ksenia Nadkina et Jordan Lahmy ! venture est née à base de React/react-strap utilisant express écrit en Javascript!  </h4>
                        <h4 align="center"> Ce que vous voyez est le produit de 10 jours intenses dans le but de redonner le sens de l'aventure en explorant votre ville!</h4>
                    </Modal>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">venture</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem><NavLink onClick={this.props.toggleLanguage} style={{ cursor: 'pointer' }}>EN</NavLink></NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>Options</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={this.toggleModal}>Détails</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <div className="introContainer" id="introId1">
                        <Col sm={{ size: 8, offset: 2 }}>
                            <Label for="ventureWelcome"> <h2>Bienvenue {this.props.username},</h2></Label>
                        </Col>
                        <Col sm={{ size: 8, offset: 2 }}>
                            <Label for="ventureWelcome2">
                                    <h1>Dans le monde de venture!</h1>
                            <h4>On va vous demander de simples questions auquelles vous pouvez répondre avec un ou plusieurs choix! À la fin on vous présentera une fine sélection. Faites vôtres décisions!
                            et à la venture!</h4></Label>
                        </Col>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <Button onClick={this.handleRules} >Commencer</Button>
                        </Col>
                    </div>
                </div >
            );
        }


    }
}
// Looking at App.js,
// history is never passed as a prop, so why is this.props.history defined?
// Answer: this.props.history is NOT defined in ContentTemplate
// Solution: You have to create a NEW component with withRouter
// That's right, withRouter is a function that takes a component as an argument
// and returns a component

let Rules = withRouter(Content);

export default Rules; // You DO NOT export ContentTemplate