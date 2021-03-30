import React from "react";
import Header from "./components/Header";
import NewProducts from "./components/NewProducts";
/*
import Categories from "./components/Categories";
*/
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
