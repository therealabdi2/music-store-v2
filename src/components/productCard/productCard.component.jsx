import "./productCard.styles.scss";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { title, price, imageURL } = product;
  return (
    <div className="product-card-container">
      <img
        src={imageURL}
        alt={`${title}`}
      />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
