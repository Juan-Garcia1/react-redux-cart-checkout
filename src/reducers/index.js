import { combineReducers } from "redux";
import productItemsReducer from "./productItemsReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  productItems: productItemsReducer,
  cart: cartReducer
});
