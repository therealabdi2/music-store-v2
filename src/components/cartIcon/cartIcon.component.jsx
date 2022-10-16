import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cartIcon.styles";

const CartIcon = () => {
  const { isCartOpen, numberOfCartItems, setIsCartOpen } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{numberOfCartItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
