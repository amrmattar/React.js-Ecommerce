/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { createStore } from "redux";
export const ADD_TO_CART_TYPE = "add_to_cart";
export const REMOVE_FROM_CART_TYPE = "remove_from_cart";

const initialState = {
  product: [],
};

const store = createStore((state = initialState, action) => {
  if (action.type === ADD_TO_CART_TYPE) {
    return { ...state, product: [action.payload, ...state.product] };
  }

  if (action.type === REMOVE_FROM_CART_TYPE) {
    const dataWithoutId = state.product.filter(
      (prod) => prod != action.payload
    );

    return { ...state, product: dataWithoutId };
  }

  return state;
});

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART_TYPE,
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART_TYPE,
    payload: id,
  };
};

export default store;
