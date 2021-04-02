import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import images from "../../data/imgdata.js";
import personOnly from "../../data/personOnly.js";
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
              src={personOnly[10]}
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
              src={personOnly[11]}
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
        <Row className="text-center pt-5">
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={personOnly[1]} alt="far" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={personOnly[2]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={personOnly[3]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={personOnly[5]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
        </Row>
        <Row className="text-center pt-5">
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={personOnly[6]} alt="far" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={personOnly[7]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={personOnly[8]} alt="0" />
            <br />
            Ürün İsmi
            <br />
            Ürün Fiyatı
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img width="225" height="300" src={personOnly[9]} alt="0" />
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
