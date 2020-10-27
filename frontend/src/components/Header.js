import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap'

const Header = () =>{
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Vugha</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link><Link to ="/">Home</Link></Nav.Link>
              <Nav.Link><Link to ="/cart">Cart</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
