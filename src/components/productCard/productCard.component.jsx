import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import "./productCard.styles.scss";

const ProductCard = ({ product }) => {
  const { title, price, imageURL } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
      <Button
        buttonType="inverted"
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
