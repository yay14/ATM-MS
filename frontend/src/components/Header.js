import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'



const Header = () => {
    return (
        <header>
           
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Welcome to ATM <i class="fa fa-university fa-lg" aria-hidden="true"></i> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
              
                <Nav.Link href="/signup"> <i class="fa fa-user-circle  fa-lg" aria-hidden="true"></i> NEW USER</Nav.Link>
                <Nav.Link href="/login"> <i class="fa fa-power-off  fa-lg" aria-hidden="true"></i> LOGIN</Nav.Link>
                </Nav>
   
            </Navbar.Collapse>
            </Container>
            </Navbar>
           
            {/* {this.state.isLoggedIn==='yes'? 
            <NavBar/>
            */}
        
          
        </header>
    )
}

export default Header
