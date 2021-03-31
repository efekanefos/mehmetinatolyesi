import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NewProducts from "./NewProducts";
import UnderHeader from "./UnderHeader";
import { Container } from "react-bootstrap";

function Home(props) {
  return (
    <div>
      <Header />
      <Container fluid>
        <UnderHeader />
        <NewProducts />
        <Footer />
      </Container>
    </div>
  );
}

export default Home;
