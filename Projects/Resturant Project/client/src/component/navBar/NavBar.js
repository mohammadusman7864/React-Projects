import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { GiFullPizza } from 'react-icons/gi'
const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <GiFullPizza size={40} />
                    &nbsp; &nbsp;
                    <Navbar.Brand style={{ color: 'red' }} href="#home">ANSARI PIZZA POINT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/login" activeClassName>
                                <Nav.Link>LogIn</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart" activeClassName>
                                <Nav.Link>Cart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar