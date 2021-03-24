import React from "react";
import Header from "./components/Header";
import NewProducts from "./components/NewProducts";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import hero from "./images/hero.jpg";
import "./style/header.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <img className="hero" src={hero} alt="hero" />
        <NewProducts />
        <Categories />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
