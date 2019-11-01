import React from "react";
import { connect } from "react-redux";
import { addToCart, removeItemFromCart } from "../../actions/cartActions";

const Cart = props => {
  const { cart } = props.cart;
  function removeItem(item) {
    props.removeItemFromCart(item);
  }
  function priceItem(item) {
    return `$${item.toFixed(2)}`;
  }
  return cart.length === 0 ? (
    <p>no items in cart</p>
  ) : (
    <ul>
      {cart.map(cartItem => (
        <li key={cartItem.id}>
          <span>{cartItem.name}</span> <span>{priceItem(cartItem.price)}</span>
          <button onClick={() => removeItem(cartItem.id)}>remove item</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { addToCart, removeItemFromCart }
)(Cart);
