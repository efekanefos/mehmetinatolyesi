import React, { Component } from "react";
import Slider from "react-slick";
import images from "../data/imgdata.js";
import "../style/carousel.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
        <h2 className="text-center py-5"> Yeni Ürünler </h2>
        <Slider className="carousel_css mb-5" {...settings}>
          <div>
            <img width="200" height="200" src={images[0]} alt="1" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" height="200" src={images[1]} alt="1" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[2]} height="200" alt="1" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[3]} alt="1" height="200" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[4]} alt="1" height="200" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[5]} alt="1" height="200" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[6]} alt="1" height="200" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[7]} alt="1" height="200" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" height="200" src={images[0]} alt="1" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" height="200" src={images[1]} alt="1" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[2]} height="200" alt="1" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[3]} alt="1" height="200" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
          <div>
            <img width="200" src={images[4]} alt="1" height="200" />
            Ürün İsmi <br />
            Ürünün Fiyatı
          </div>
        </Slider>
      </div>
    );
  }
}
