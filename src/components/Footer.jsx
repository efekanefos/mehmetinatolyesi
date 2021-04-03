import React from "react";
import "../style/footer.css";
import logo from "../images/logo.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="d-block mx-auto">
      <Container className="mt-5 pt-3">
        <hr className="line" />
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img className="logo2" src={logo} alt="logo" />
            <p className="pt-3 pb-1">
              <i className="fas fa-gifts pr-2"></i>
              Baştan sona kişiye özel hissettirecek hediye hizmeti
              <i className="fas fa-gift pl-2"></i>
            </p>
            <p className="pb-1">
              <strong>
                <u>İletişim Bilgileri</u>
              </strong>
            </p>
            <ul className="ulstyle">
              <li>
                <span>
                  <i className="fas fa-map-marker-alt pr-3"></i>
                  Mahfessığmaz Mahallesi, 79021 Sokak, İsmetbey Apartmanı, Zemin
                  Kat No: 13 <br />
                  Çukurova/Adana
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
            <ul className="product-list">
              <li className="pb-3">
                <strong>Ürünlerimiz</strong>
              </li>
              <li>
                <Link className="text-dark" to="/personalproducts">
                  Kişiye Özel Çizimler
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/personalproducts">
                  Yeşil Çam Koleksiyonu
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/personalproducts">
                  Müslüm Gürses Koleksiyonu
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/personalproducts">
                  Tshirt
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/personalproducts">
                  Kitap Çantası
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/personalproducts">
                  Kütük Altlık
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <ul>
              <li className="pb-3">
                <strong>Hakkımızda</strong>
              </li>
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
