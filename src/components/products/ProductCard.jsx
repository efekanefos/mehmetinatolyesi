import React from "react";
import { Card } from "react-bootstrap";
import "../../style/productcard.css";
/*
import { Link } from "react-router-dom";
*/
function ProductCard(props) {
  return (
    <div>
      <Card className="mb-5 product_card">
        <a href={props.imgsrc}>
          <Card.Img
            className="product_card_image"
            variant="top"
            src={props.imgsrc}
          />
        </a>
      </Card>
    </div>
  );
}

export default ProductCard;

/*
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
*/
/*
<Link
            to={`/products/${props.id}`}
            className="btn btn-danger d-block mx-auto"
            id="readmore"
          >
            Read More
          </Link>
*/

/*
<div id="card" className="card mb-3 mx-auto">
      <div id="cardBody" className="card-body">
        <img width="200" height="200" src={props.imgsrc} alt="1" />
        <h5 id="cardtitle" className="card-title text-center">
          {props.id}
        </h5>
        <p id="cardparag" className="card-text text-center">
          {props.youtube}
        </p>
        <Link
          to={`/products/${props.id}`}
          className="btn btn-danger d-block mx-auto"
          id="readmore"
        >
          Read More
        </Link>
      </div>
    </div>
*/
