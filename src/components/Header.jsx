import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../style/header.css";
import logo from "../images/logo.jpg";

function Header(props) {
  return (
    <div>
      <Container className="pb-5">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto midlinks ">
              <Nav.Link className="link1 pr-5">Home</Nav.Link>
              <Nav.Link className="link2 pr-5">Shop</Nav.Link>
              <Nav.Link className="link3 pr-5">Furniture</Nav.Link>
              <Nav.Link className="link4 pr-5">Decor</Nav.Link>
              <Nav.Link className="link5 pr-5">About Us</Nav.Link>
            </Nav>
            <Nav className="icons">
              <Nav.Link>
                <i className="fas fa-search"></i>
              </Nav.Link>
              <Nav.Link>
                <i className="fas fa-shopping-bag"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
