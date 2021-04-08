import React from "react";
import yesilData from "../../data/yesilData";
import YesilCard from "../yesilProducts/YesilCard";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import crop_yesil from "../../images/crop_yesil.jpeg";

function YesilProducts(props) {
  const yesilItems = yesilData
    .filter((item) => item.isActive)
    .map((item) => (
      <Col xs={12} sm={12} md={6} lg={4} xl={3} key={item.id}>
        <YesilCard
          id={item.id}
          imgsrc={item.imgsrc}
          trendyol={item.trendyol}
          youtube={item.youtube}
        />
      </Col>
    ));
  return (
    <div>
      <Header />
      <h1 className="text-center mb-5">Yeşil Çam Koleksiyonu</h1>
      <img
        width="85%"
        className="d-block mx-auto mb-5"
        src={crop_yesil}
        alt="crop_yesil"
      />
      <Container>
        <Row>{yesilItems}</Row>
      </Container>
    </div>
  );
}

export default YesilProducts;
