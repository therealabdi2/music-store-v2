import { createContext, useReducer } from "react";

import { createAction } from "../utils/firebase/reducer/reducer.utill";

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

const removeCartItem = (cartItems, productToRemove) => {
  // find if cart items contains product to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // if found decrease quantity by 1
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  numberOfCartItems: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

// this initial state just gives us the object that we need to keep track of
// when it comes to what our actutal reducer should return
const Initial_STATE = {
  isCartOpen: false,
  cartItems: [],
  numberOfCartItems: 0,
  cartTotal: 0,
};

// reducer is a function that takes in the state and the action argument
// remeber the reducer should not handle any business logic
// all the reducer should care about is just updating the state not how to update the state
// the reducer will get a payload and update it with appropriate values
// to do that we split the logic
// to split up the logic you need to think about dispatching an action tha includes all of the values that this needs
const cartReducer = (state, action) => {
  // we need to destucture of the two properties that come with the action which is the type and the payload
  const { type, payload } = action;

  // Now we need to determine from these two values from the action, what do we need to return as the updated state
  switch (type) {
    // for cases think about the type of action you wanna set
    // here we are saying, whenever cartItems get set then we want to update the state with the payload and this payload will contain the shape that we want
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    // the default will always most likely be the error
    default:
      throw new Error(`Invalid action type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  // useReducer is where we will get the actual dispatch that we need

  // const [state, dispatch] = useReducer(cartReducer, Initial_STATE);
  // or
  const [{ cartItems, isCartOpen, numberOfCartItems, cartTotal }, dispatch] =
    useReducer(cartReducer, Initial_STATE);
  // this function will receive new cart items and update the state
  // it will help us dispatch the appropriate payload so we can update our reducer with the correct value
  // our helper function will give use the new cart items
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    // now we nned to dispatch the new action with appropriate payload
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        numberOfCartItems: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    numberOfCartItems,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
