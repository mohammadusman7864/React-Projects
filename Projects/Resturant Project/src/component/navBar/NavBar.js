import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import {MdLocalOffer} from 'react-icons/md';

function NavBar() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
            <h5 className='text-light'> 
         <MdLocalOffer className='text-warning'/> 
         &nbsp; &nbsp; Free Home Delivery on Order Above 500/- Rupees
         </h5>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;