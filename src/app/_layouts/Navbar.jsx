'use client'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function LayoutsNavbar() {
  return (
    <>
      <a id="navbar" />
      <Navbar id="navbar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#navbar">Happy Now</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="ms-auto">
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default LayoutsNavbar
