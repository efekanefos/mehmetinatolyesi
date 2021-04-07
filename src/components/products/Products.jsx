import React from "react";
import productData from "../../data/productData";
import ProductCard from "../products/ProductCard";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";

function Products(props) {
  const productItems = productData
    .filter((item) => item.isActive)
    .map((item) => (
      <Col xs={12} sm={12} md={6} lg={4} xl={3} key={item.id}>
        <ProductCard
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
      <h1 className="text-center mb-5">Örnek Çalışmalarımız</h1>
      <SRLWrapper>
        <Container>
          <Row>{productItems}</Row>
        </Container>
      </SRLWrapper>
    </div>
  );
}

export default Products;
