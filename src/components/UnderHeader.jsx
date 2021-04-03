import "../style/underheader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import images from "../data/imgdata.js";
import React, { Component } from "react";
import Slider from "react-slick";

export default class UnderHeader extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider className="carousel" {...settings}>
          <div>
            <img
              className="d-block w-100 image"
              src={images[15]}
              alt="First slide"
            />
          </div>
          <div>
            <img
              className="d-block w-100 image"
              src={images[16]}
              alt="Second slide"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

/*
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
*/
