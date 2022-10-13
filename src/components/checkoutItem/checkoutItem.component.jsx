import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkoutItem.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={`${name}`}
        />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div
          onClick={removeItemHandler}
          className="arrow"
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          onClick={addItemHandler}
          className="arrow"
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={clearItemHandler}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
