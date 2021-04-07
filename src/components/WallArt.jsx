import React from "react";
import WallHeader from "./WallHeader";
import { Container, Row, Col } from "react-bootstrap";
import wallart from "../data/wallart.js";
import "../style/wallart.css";
import { SRLWrapper } from "simple-react-lightbox";

function WallArt(props) {
  return (
    <div className="wall-bg">
      <WallHeader />
      <h2 className="text-center text-light mb-5 walltitle">
        <u>Duvar Sanatı</u>
      </h2>
      <SRLWrapper>
        <Container>
          <Row className="text-center">
            {wallart.map((item, index) => (
              <Col xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                <img width="300" className="wallimg mb-5" src={item} alt="" />
              </Col>
            ))}
          </Row>
        </Container>
      </SRLWrapper>
    </div>
  );
}

export default WallArt;
/*
return (
    <div className="wallback">
      <Header />
      <h1 className="text-center mb-5 walltitle">Wall-Art</h1>
    </div>
  );
*/

/*
 <Container fluid>
        <Row className="text-center  mb-3">
          <Col xs={12} sm={12} md={6} lg={5} xl={5}>
            <img width="83%" height="90%" src={wallart[0]} alt="1" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={7} xl={7}>
            <img
              className="vertical-wall"
              width="88%"
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
*/
