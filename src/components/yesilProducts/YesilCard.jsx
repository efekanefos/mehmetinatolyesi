import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../style/productcard.css";

function YesilCard(props) {
  return (
    <div>
      <Card className="mb-5 card mx-auto">
        <Card.Img
          className="card-image mb-2"
          variant="top"
          src={props.imgsrc}
        />
        <Card.Text className="text-center">
          Ürün İsmi <br />
          Ürünün Fiyatı
        </Card.Text>
        <Link
          to={`/yesilcam/${props.id}`}
          className="btn btn-danger d-block mx-auto"
          id="readmore"
        >
          Satın Al
        </Link>
      </Card>
    </div>
  );
}

export default YesilCard;
