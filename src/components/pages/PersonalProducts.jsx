import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../data/imgdata.js";

function PersonalProducts(props) {
  return (
    <div>
      <Header />
      <h1 className="text-center mb-5">Personal Products</h1>
      <Container>
        <Row className="text-center">
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="200" height="200" src={images[0]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="200" height="200" src={images[1]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="200" height="200" src={images[2]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="200" height="200" src={images[3]} alt="0" />
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
