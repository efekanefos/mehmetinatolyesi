import React from "react";
import Header from "./components/Header";
import NewProducts from "./components/NewProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import UnderHeader from "./components/UnderHeader";
import "./style/header.css";
import { Container } from "react-bootstrap";

function App() {
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

export default App;
