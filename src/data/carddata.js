import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import "../style/newproducts.css";

const Card1 = (props) => {
  return (
    <div>
      <img className="product" src={img1} alt="sss" />
    </div>
  );
};
const Card2 = (props) => {
  return (
    <div>
      <div className="hover">
        <img className="product" src={img2} alt="sss" />
        <span className="blackcart">
          <i className="fas fa-eye"></i> Göz At
        </span>
      </div>
      <p>
        <span>Ürünün adı</span> <br />
        <div className="divclass">
          <span className="price">Ürünün fiyatı</span>
        </div>
      </p>
    </div>
  );
};
const Card3 = (props) => {
  return (
    <div>
      <div className="hover">
        <img className="product" src={img3} alt="sss" />
        <span className="blackcart">
          <i className="fas fa-eye"></i> Göz At
        </span>
      </div>
      <p>
        <span>Ürünün adı</span> <br />
        <div className="divclass">
          <span className="price">Ürünün fiyatı</span>
        </div>
      </p>
    </div>
  );
};
const Card4 = (props) => {
  return (
    <div>
      <div className="hover">
        <img className="product" src={img4} alt="sss" />
        <span className="blackcart">
          <i className="fas fa-eye"></i> Göz At
        </span>
      </div>
      <p>
        <span>Ürünün adı</span> <br />
        <div className="divclass">
          <span className="price">Ürünün fiyatı</span>
        </div>
      </p>
    </div>
  );
};

const cards = [Card1, Card2, Card3, Card4];
export default cards;
