import React from "react";
import "../style/footer.css";
import logo from "../images/logo.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="d-block mx-auto">
      <hr className="line" />
      <Container className="mt-5 pt-3">
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img className="logo2" src={logo} alt="logo" />
            <p className="pt-3 pb-2">
              We are a team of designers and developers that create high quality
              Magento, Prestashop, Opencart.
            </p>
            <p className="pb-2">
              <strong>İletişim Bilgileri:</strong>
            </p>
            <ul className="ulstyle">
              <li>
                <span>
                  <i className="fas fa-map-marker-alt pr-3"></i>
                  169-C, Technohub, Dubai
                </span>
              </li>
              <li>
                <span>
                  <i className="far fa-envelope pr-3"></i>
                  support@posthemes.com
                </span>
              </li>
              <li>
                <span>
                  <i className="fas fa-phone-alt pr-3"></i>
                  +00 123 45678
                </span>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <ul>
              <li className="pb-3">
                <strong>PRODUCTS</strong>
              </li>
              <li>Delivery</li>
              <li>Prices drop</li>
              <li>New products</li>
              <li>Best sales</li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <ul>
              <li className="pb-3">
                <strong>OUR COMPANY</strong>
              </li>
              <li>Delivery</li>
              <li>Prices drop</li>
              <li>New products</li>
              <li>Best sales</li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <ul>
              <li>
                <strong>JOIN OUR NEWSLETTER NOW</strong>
              </li>
              <li className="py-3">
                Get E-mail updates about our latest shop and special offers.
              </li>
              <li>
                <input
                  className="input-group py-2 px-3 my-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-mail Address"
                />
              </li>
              <li>
                <button className="btn btn-dark">Subscribe</button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
