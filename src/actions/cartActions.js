import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QTY } from "./types";

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item
  };
};

export const removeItemFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
};

export const updateItemQty = (id, qty) => {
  return {
    type: UPDATE_ITEM_QTY,
    id,
    qty
  };
};
