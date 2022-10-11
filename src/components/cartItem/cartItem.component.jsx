import "./cartItem.styles.scss";

const CartItem = ({ cartItem }) => {
  const { title, imageURL, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img
        src={imageURL}
        alt={`${title}`}
      />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
