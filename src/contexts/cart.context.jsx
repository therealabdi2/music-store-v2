import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains product to add
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found increase quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    // return new array with updated cart items or cart item
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  numberOfCartItems: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    );
    setNumberOfCartItems(newCartCount);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // const numberOfCartItems = cartItems.reduce(
  //   (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
  //   0
  // );

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    numberOfCartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
