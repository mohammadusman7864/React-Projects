import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
          <Link to="/" activeClassName>
            <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="/about" activeClassName>
            <Nav.Link>About</Nav.Link>
            </Link>
            <Link to="/contact" activeClassName>
            <Nav.Link>Contact</Nav.Link>
            </Link>
            <Link to="/pricing" activeClassName>
            <Nav.Link>Pricing</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;