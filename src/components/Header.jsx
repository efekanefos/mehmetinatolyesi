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
              <Nav.Link className="pr-5">
                <Link to="/" className="text-dark">
                  Ana Sayfa
                </Link>
              </Nav.Link>
              <div className="dropdown">
                <Nav.Link className="dropbtn text-dark pr-5 py-2">
                  <Link className="text-dark" to="/allproducts">
                    Tüm Ürünlerimiz
                  </Link>
                </Nav.Link>
                <div className="dropdown-content">
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-dark" to="/products">
                        Kişiye Özel Çizimler
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-dark" to="/yesilcam">
                        Yeşil Çam Koleksiyonu
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-dark" to="/products">
                        Müslüm Gürses Koleksiyonu
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-dark" to="/products">
                        Tshirt
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-dark" to="/products">
                        Kitap Çantası
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-dark" to="/products">
                        Kütük Altlık
                      </Link>
                    </Nav.Link>
                  </Link>
                </div>
              </div>
              <Nav.Link className="pr-5">
                <Link className="text-dark" to="/wallart">
                  Duvar Sanatı
                </Link>
              </Nav.Link>
              <Nav.Link className="pr-5">
                <Link className="text-dark" to="/wallart">
                  İletişim
                </Link>
              </Nav.Link>
              <Nav.Link className="pr-5">
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
