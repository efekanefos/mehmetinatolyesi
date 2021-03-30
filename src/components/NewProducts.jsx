import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/newproducts.css";
import Carousel from "./Carousel";
import images from "../data/imgdata.js";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
function NewProducts(props) {
  return (
    <div>
      <Container fluid className="mx-auto d-block mt-4">
        <Row className="mx-auto vertical-cat pb-1">
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
            <Card className="text-white category-yatay mb-3">
              <Card.Img
                className="vertical-img1"
                src={images[17]}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="title">Kişiye Özel</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
            <Card className="text-white category-yatay mb-3">
              <Card.Img
                className="vertical-img1"
                src={images[9]}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="title">Kişiye Özel</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="p-0">
            <Card className="text-white category-yatay mb-3">
              <Card.Img
                className="vertical-img1"
                src={images[10]}
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="title">Duvar Sanatı</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Card className="text-white category-yatay mb-3 ">
              <Card.Img
                className="vertical-img"
                src={images[15]}
                alt="Card image"
              />
              <Card.ImgOverlay className="d-flex">
                <Card.Title className="title justify-self-center mx-auto">
                  Müslüm Gürses Koleksiyonu
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <br />
          <br />
          <Col xs={12}>
            <Card className="text-white category-yatay d-flex">
              <Card.Img
                className="vertical-img"
                src={images[16]}
                alt="Card image"
              />
              <Card.ImgOverlay className="d-flex">
                <Card.Title className="title justify-self-center mx-auto">
                  Yeşil Çam Koleksiyonu
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      <center>
        <Carousel />
      </center>
    </div>
  );
}

export default NewProducts;
/*
<h1 className="text-center py-5 font-weight-bold display-5">
        Yeni Ürünler
      </h1>
      <Container className="d-block mx-auto">
        <Row className="mx-auto text-center pb-5">
          {images.slice(0, 8).map((item, index) => (
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
                <span className="divclass">
                  <span className="price">Ürünün fiyatı</span>
                </span>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
*/

/*
<Row className="mx-auto vertical-cat ">
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="px-1">
            <img className="category mb-3" src={images[12]} alt="muslum" />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="px-1">
            <img className="category mb-3" src={images[9]} alt="muslum" />
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} xl={4} className="px-1">
            <img className="category mb-3" src={images[10]} alt="muslum" />
          </Col>
        </Row>
*/
