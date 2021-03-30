import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/underheader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../data/imgdata.js";
import hero from "../images/hero.jpg";
import { Container } from "react-bootstrap";

function UnderHeader() {
  return (
    <div>
      <Container>
        <Carousel fade className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src={images[11]}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src={images[13]}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 image" src={hero} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default UnderHeader;
