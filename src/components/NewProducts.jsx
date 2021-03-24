import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/newproducts.css";
import images from "../data/imgdata.js";

function NewProducts(props) {
  return (
    <div>
      <h1 className="text-center py-5 font-weight-bold display-5">
        Yeni Ürünler
      </h1>
      <Container className="d-block mx-auto">
        <Row className="mx-auto text-center pb-5">
          {images.map((item, index) => (
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              key={index}
              className="py-4"
            >
              <div className="prodiv">
                <img className="product" src={item} alt="sss" />
                <span className="blackcart">
                  <i className="fas fa-eye"></i> Göz At
                </span>
              </div>
              <p className="d-block mx-auto">
                <span>Ürünün adı</span> <br />
                <div className="divclass">
                  <span className="price">Ürünün fiyatı</span>
                </div>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NewProducts;
/*
<Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img className="product" src={images[0]} alt="sss" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img className="product" src={images[1]} alt="sss" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img className="product" src={images[2]} alt="sss" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img className="product" src={images[3]} alt="sss" />
          </Col>
*/
