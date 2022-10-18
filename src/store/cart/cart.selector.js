import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

// get the actual cart item of off this slice of state
export const selectCartItems = createSelector(
  [selectCartReducer],
  // and off of this we get the cart
  (cart) => cart.cartItems
);

// Something similar for isCartOpen
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  // and off of these cart items get the total value of all the items
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
