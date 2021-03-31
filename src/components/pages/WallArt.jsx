import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import wallart from "../../data/wallart.js";
import "../../style/wallart.css";

function WallArt(props) {
  return (
    <div>
      <Header />
      <h1 className="text-center mb-5">Wall-Art</h1>
      <Container>
        <Row className="text-center">
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img className="wallimg" src={wallart[0]} alt="1" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img
              className="first"
              width="225"
              height="300"
              src={wallart[3]}
              alt="1"
            />
            <img
              className="second"
              width="225"
              height="300"
              src={wallart[1]}
              alt="1"
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img className="wallimg" src={wallart[2]} alt="1" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <img
              className="first"
              width="225"
              height="300"
              src={wallart[4]}
              alt="1"
            />
            <img
              className="second"
              width="225"
              height="300"
              src={wallart[6]}
              alt="1"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WallArt;
