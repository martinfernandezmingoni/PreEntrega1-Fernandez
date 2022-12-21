import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gaia Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="./CartWidget/CartWidget.js">Store</Nav.Link>
            <Nav.Link href="#pricing">Carrito</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
        );
    }
    
export default ColorSchemesExample;