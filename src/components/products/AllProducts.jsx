import React, { useEffect, useState } from "react";
import images from "./data";
import Header from "../Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../style/allproducts.css";
import shopier_logo from "../../images/brands/shopier_logo.png";
import trendyol_logo from "../../images/brands/trendyol_logo.png";

function AllProducts() {
  const [tag, setTag] = useState("Hepsi");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "Hepsi"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div>
      <Header />
      <h2 className="text-center mb-5">
        <u>Tüm Ürünlerimiz</u>
      </h2>
      <div className="tags text-center mb-5">
        <TagButton
          name="Hepsi"
          tagActive={tag === "Hepsi" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="Müslüm Gürses Ürünleri"
          tagActive={tag === "Müslüm Gürses Ürünleri" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="Yeşil Çam Ürünleri"
          tagActive={tag === "Yeşil Çam Ürünleri" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="Kişiye Özel Tasarımlar"
          tagActive={tag === "Kişiye Özel Tasarımlar" ? true : false}
          handleSetTag={setTag}
        />
      </div>
      <Container>
        <Row className="text-center">
          {filteredImages.map((image) => (
            <Col xs={12} sm={12} md={6} lg={4} xl={3} key={image.id}>
              <img className="tagImages" src={`${image.imageName}`} alt="1" />
              <p className="pt-3 mx-auto productName">{image.productName}</p>
              <div className="mb-3">
                <a href="https://www.shopier.com/ShowProductNew/storefront.php?shop=Mehmetin_atolye&sid=R2Y1R2ZCU2FhdDdremNTQTFfLTFfIF8g">
                  <Button className="btn-shopier mb-2">
                    <img
                      width="70"
                      height="40"
                      src={shopier_logo}
                      alt="shopier"
                    />
                  </Button>
                </a>
                <a href="https://www.trendyol.com">
                  <Button className="btn-trendyol btn-light">
                    <img width="90" src={trendyol_logo} alt="trendyol" />
                  </Button>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <Button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </Button>
  );
};

export default AllProducts;
/*
/images/${image.imageName}
*/
