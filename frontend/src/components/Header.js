import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions.js'
import UserNav from './UserNav.js'

const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    const logoutHandler = () => {
      dispatch(logout())
    }
  
    return (
        <header>
           
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand >Welcome to ATM <i class="fa fa-university fa-lg" aria-hidden="true"></i> </Navbar.Brand>
                </LinkContainer>
            
       
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
            
                 
                 <Nav className="ml-auto">
                     
                 {userInfo ? 
                 (
                   <>
                {userInfo.isAdmin ? (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    LOGOUT
                  </NavDropdown.Item>
                </NavDropdown>
                ):
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>

                
                }
                </>
                    ) : (
                    <>
                        <LinkContainer to='/login'>
                        <Nav.Link>
                        <i class="fa fa-power-off  fa-lg" aria-hidden="true"></i> LOGIN
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register">
                        <Nav.Link > <i class="fa fa-user-circle  fa-lg" aria-hidden="true"></i> NEW USER</Nav.Link>
                        </LinkContainer>
                   </>
              )}



            </Nav>
            </Navbar.Collapse>
            </Container>
          
            </Navbar>
            {userInfo && userInfo.isAdmin=== false?
            <UserNav/>:
            <>
            </>}
           
          
        
          
        </header>
    )
}

export default Header
