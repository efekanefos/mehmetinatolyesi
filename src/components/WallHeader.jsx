import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../style/header.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

function WallHeader(props) {
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
                <Link to="/" className="text-light">
                  Ana Sayfa
                </Link>
              </Nav.Link>
              <span className="dropdown">
                <Nav.Link className="dropbtn text-light link3 pr-5">
                  <Link className="text-light" to="/allproducts">
                    Tüm Ürünlerimiz
                  </Link>
                </Nav.Link>
                <div className="dropdown-content">
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-light" to="/products">
                        Kişiye Özel Çizimler
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-light" to="/products">
                        Yeşil Çam Koleksiyonu
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-light" to="/products">
                        Müslüm Gürses Koleksiyonu
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-light" to="/products">
                        Tshirt
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-light" to="/products">
                        Kitap Çantası
                      </Link>
                    </Nav.Link>
                  </Link>
                  <Link to="/products">
                    <Nav.Link>
                      <Link className="text-light" to="/products">
                        Kütük Altlık
                      </Link>
                    </Nav.Link>
                  </Link>
                </div>
              </span>
              <Nav.Link className="link3 pr-5">
                <Link className="text-light" to="/wallart">
                  Duvar Sanatı
                </Link>
              </Nav.Link>
              <Nav.Link className="link4 pr-5">
                <Link className="text-light" to="/wallart">
                  İletişim
                </Link>
              </Nav.Link>
              <Nav.Link className="link5 pr-5">
                <Link className="text-light" to="/wallart">
                  Hakkımızda
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="icons">
              <Nav.Link>
                <i className="fas fa-search text-light"></i>
              </Nav.Link>
              <Nav.Link>
                <i className="fas fa-shopping-bag text-light"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default WallHeader;
