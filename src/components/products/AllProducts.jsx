import React, { useEffect, useState } from "react";
import images from "./data";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import "../../style/allproducts.css";

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
              <img width="280" src={`${image.imageName}`} alt="1" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default AllProducts;
/*
/images/${image.imageName}
*/
