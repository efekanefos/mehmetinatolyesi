import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import wallart from "../../data/wallart.js";
import "../../style/wallart.css";

function WallArt(props) {
  return (
    <div className="wallback">
      <Header />
      <h1 className="text-center  mb-5 walltitle">Wall-Art</h1>
      <Container fluid>
        <Row className="text-center  mb-3">
          <Col xs={12} sm={12} md={6} lg={5} xl={5}>
            <img width="83%" height="90%" src={wallart[0]} alt="1" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={7} xl={7}>
            <img
              className="vertical-wall"
              width="89%"
              height="90%"
              src={wallart[2]}
              alt="1"
            />{" "}
            <br />
          </Col>
        </Row>
        <Container fluid>
          <Row className="text-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={3}>
              <img
                className="first"
                width="80%"
                height="90%"
                src={wallart[4]}
                alt="far"
              />
              <img
                className="second"
                width="80%"
                height="90%"
                src={wallart[6]}
                alt="close"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3}>
              <img
                className="first"
                width="80%"
                height="90%"
                src={wallart[10]}
                alt="far"
              />
              <img
                className="second"
                width="80%"
                height="90%"
                src={wallart[9]}
                alt="close"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3}>
              <img width="80%" height="90%" src={wallart[3]} alt="0" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={3}>
              <img
                className="first"
                width="80%"
                height="90%"
                src={wallart[13]}
                alt="0"
              />
              <img
                className="second"
                width="80%"
                height="90%"
                src={wallart[14]}
                alt="0"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default WallArt;
