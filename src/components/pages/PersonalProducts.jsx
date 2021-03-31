import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../data/imgdata.js";
import "../../style/personal.css";

function PersonalProducts(props) {
  return (
    <div>
      <Header />
      <h1 className="text-center mb-5">Personal Products</h1>
      <Container>
        <Row className="text-center">
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img
              className="first"
              width="225"
              height="300"
              src={images[18]}
              alt="far"
            />
            <img
              className="second"
              width="225"
              height="300"
              src={images[20]}
              alt="close"
            />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={images[19]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img
              className="first"
              width="225"
              height="300"
              src={images[21]}
              alt="0"
            />
            <img
              className="second"
              width="225"
              height="300"
              src={images[22]}
              alt="0"
            />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={images[23]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PersonalProducts;
