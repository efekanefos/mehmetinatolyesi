import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../style/header.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Link to="/">
            <Navbar.Brand>
              <img className="logo" src={logo} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto midlinks ">
              <Nav.Link className="link1 pr-5">
                <Link to="/" className="text-dark">
                  Ana Sayfa
                </Link>
              </Nav.Link>
              <span className="dropdown">
                <Nav.Link className="dropbtn text-dark link3 pr-5">
                  Ürünlerimiz
                </Nav.Link>
                <div className="dropdown-content">
                  <Link to="/personalproducts">
                    <Nav.Link>
                      <Link className="text-dark" to="/personalproducts">
                        Kişiye Özel Çizimler
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/personalproducts">
                    <Nav.Link>
                      <Link className="text-dark" to="/personalproducts">
                        Yeşil Çam Koleksiyonu
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/personalproducts">
                    <Nav.Link>
                      <Link className="text-dark" to="/personalproducts">
                        Müslüm Gürses Koleksiyonu
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/personalproducts">
                    <Nav.Link>
                      <Link className="text-dark" to="/personalproducts">
                        Tshirt
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/personalproducts">
                    <Nav.Link>
                      <Link className="text-dark" to="/personalproducts">
                        Kitap Çantası
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/personalproducts">
                    <Nav.Link>
                      <Link className="text-dark" to="/personalproducts">
                        Kütük Altlık
                      </Link>
                    </Nav.Link>
                  </Link>
                </div>
              </span>
              <Nav.Link className="link3 pr-5">
                <Link className="text-dark" to="/wallart">
                  Duvar Sanatı
                </Link>
              </Nav.Link>
              <Nav.Link className="link4 pr-5">
                <Link className="text-dark" to="/wallart">
                  İletişim
                </Link>
              </Nav.Link>
              <Nav.Link className="link5 pr-5">
                <Link className="text-dark" to="/wallart">
                  Hakkımızda
                </Link>
              </Nav.Link>
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
