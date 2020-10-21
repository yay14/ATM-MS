import React from 'react'
import {Nav,Navbar,Container,Button,NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const UserNav = () => {
    return (

        <Navbar bg="light"  collapseOnSelect expand="lg">

        <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

            <LinkContainer to="/user_home">
            <Nav.Link >HOME</Nav.Link>
            </LinkContainer>

            <NavDropdown title="FUNDS TRANSFER" id="basic-nav-dropdown">

              <LinkContainer to="/self">
              <NavDropdown.Item >TO SELF</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to= "/others">
              <NavDropdown.Item>TO OTHERS</NavDropdown.Item>
              </LinkContainer>
              
              <NavDropdown.Divider />

              <LinkContainer to="/add_rec">
                <NavDropdown.Item >ADD RECIPIENT</NavDropdown.Item>
                </LinkContainer>
              
            </NavDropdown>

            <LinkContainer to="/mini"> 
            <Nav.Link >MINI-STATEMENT</Nav.Link>
            </LinkContainer>
           
            <LinkContainer to="/profile">
            <Nav.Link >PROFILE/CHANGE PIN</Nav.Link>
            </LinkContainer>
           
            </Nav>

          <LinkContainer  to="/">
          <Button  variant="outline-success" >LOGOUT</Button>
          </LinkContainer>
          
         </Navbar.Collapse>

        </Container>
        
      </Navbar>
    )
}

export default UserNav
