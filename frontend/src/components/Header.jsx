import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector , useDispatch} from "react-redux";
import React from "react";
import { useLogoutMutation } from "../slices/usersApiSlice";
import {logout} from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {cartItems} = useSelector((state)=>state.cart)
  const {userInfo}= useSelector((state)=>state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler=async()=>{
    console.log('logout')

    try{
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/login');
    }catch(err){
      console.log('logout error', err)
    }
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand> Proshop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle area-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link href="/cart">
                  <FaShoppingCart />
                  Cart
                  {cartItems.length>0 && (
                  <Badge pill bg="success" style={{ marginLeft:'5px'}}>
                    {cartItems.reduce((a,c)=>a+c.qty,0)}
                  </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo?(
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ):( <LinkContainer to="/login">
                <Nav.Link href="/login">
                  <FaShoppingCart />
                  Sign In
                </Nav.Link>
              </LinkContainer>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
