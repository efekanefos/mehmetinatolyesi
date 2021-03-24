import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/categories.css";
import img12removed from "../images/12-removed.png";
import img2removed from "../images/2-removed.png";
import img3 from "../images/3.jpg";
import img11 from "../images/11.jpg";

function Categories() {
  return (
    <Container>
      <div className="text-center">
        <h5 className="browsetitle">
          <em>Browse a selection decor categories</em>
        </h5>
        <h2 className="pb-5">
          <strong>TOP CATEGORIES</strong>
        </h2>
      </div>
      <Row className="mb-5">
        <Col className="productbg leftdiv" xs={12} sm={12} md={6} lg={4} xl={4}>
          <p className="pt-3">Decorative Accesories</p>
          <p>25 Products</p>
          <img className="leftimage" src={img12removed} alt="kupa" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={1}></Col>
        <Col
          className="productbg rightdiv"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={7}
        >
          <p className="pt-3">Chairs & Recliners</p>
          <p>25 Products</p>
          <img className="rightimage" src={img2removed} alt="kupa" />
        </Col>
      </Row>
      <Row>
        <Col
          className="productbg leftdiv1"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={8}
        >
          <p className="pt-3">Decorative Accesories</p>
          <p>25 Products</p>
          <img className="rightimage1" src={img3} alt="kupa" />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={1}></Col>
        <Col
          className="productbg rightdiv1"
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
        >
          <p className="pt-3">Chairs & Recliners</p>
          <p>25 Products</p>
          <img className="leftimage1" src={img11} alt="kupa" />
        </Col>
      </Row>
      <br />
      <br />
    </Container>
  );
}

export default Categories;
