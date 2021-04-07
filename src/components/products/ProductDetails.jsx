import React from "react";
import { useParams } from "react-router-dom";
import productData from "../../data/productData";
function ProductDetail(props) {
  const params = useParams();
  const { productID } = params;

  const product = productData
    .filter((item) => item.id === Number(productID))
    .map((item) => (
      <div key={item.id}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <img width="200" height="200" src={item.imgsrc} alt="111" />
              <h1 className=" text-center m-0 pt-4 ">{item.id}</h1>
              <p className=" text-center m-0 pt-4">
                {item.youtube}
                {item.trendyol}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));

  return <div>{product}</div>;
}

export default ProductDetail;
