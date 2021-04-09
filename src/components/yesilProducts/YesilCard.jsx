import React from "react";
import { Card, Button } from "react-bootstrap";
/*
import { Link } from "react-router-dom";
*/
import "../../style/productcard.css";
import shopier_logo from "../../images/brands/shopier_logo.png";
import trendyol_logo from "../../images/brands/trendyol_logo.png";

function YesilCard(props) {
  return (
    <div>
      <Card className="mb-5 product_card mx-auto">
        <Card.Img
          className="product_card_image mb-2"
          variant="top"
          src={props.imgsrc}
        />
        <a href="https://www.trendyol.com">
          <Button className="btn-shopier mb-2">
            <img width="70" height="40" src={shopier_logo} alt="shopier" />
            <span>'da İncele</span>
          </Button>
        </a>
        <a href="https://www.shopier.com/ShowProductNew/storefront.php?shop=Mehmetin_atolye&sid=R2Y1R2ZCU2FhdDdremNTQTFfLTFfIF8g">
          <Button className="btn-trendyol btn-light">
            <img width="80" src={trendyol_logo} alt="trendyol" />
            <span>'da İncele</span>
          </Button>
        </a>
      </Card>
    </div>
  );
}

export default YesilCard;
/* 
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
*/
