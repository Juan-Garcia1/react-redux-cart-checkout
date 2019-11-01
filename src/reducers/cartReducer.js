import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

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

    default:
      return state;
  }
}
