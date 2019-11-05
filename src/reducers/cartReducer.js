import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QTY
} from "../actions/types";

const initialState = {
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case SHOW_CART_ITEMS:
    //   return {
    //     ...state
    //   };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [{ ...action.payload, quantity: 1 }, ...state.cart]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
      };
    case UPDATE_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map(cartItem =>
          cartItem.id === action.id
            ? { ...cartItem, quantity: action.qty }
            : cartItem
        )
      };

    default:
      return state;
  }
}
