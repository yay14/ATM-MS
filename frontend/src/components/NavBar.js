import React from 'react'
import {Nav,Navbar,Container,Button,NavDropdown} from 'react-bootstrap'

const NavBar = () => {
    return (

        <Navbar bg="light"  collapseOnSelect expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/user_home">HOME</Nav.Link>
            <NavDropdown title="FUNDS TRANSFER" id="basic-nav-dropdown">
              <NavDropdown.Item href="/self">TO SELF</NavDropdown.Item>
              <NavDropdown.Item href="/others">TO OTHERS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/add_rec">ADD RECIPIENT</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/mini">MINI-STATEMENT</Nav.Link>
            <Nav.Link href="/profile">PROFILE/CHANGE PIN</Nav.Link>
            
          </Nav>
          <Button  variant="outline-success"  href="/">LOGOUT</Button>
         
      
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar
