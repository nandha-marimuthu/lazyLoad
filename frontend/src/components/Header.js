import React from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'

const Header = () =>{
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
  <Navbar.Brand href="#home">Vugha</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home active">Cart</Nav.Link>
      <Nav.Link href="#link">Signin</Nav.Link>
      
    </Nav>
    
  
  </Navbar.Collapse>
  </Container>
</Navbar>
      
    </header>
  )
}

export default Header
