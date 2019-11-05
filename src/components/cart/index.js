import React from "react";
import { connect } from "react-redux";
import {
  addToCart,
  removeItemFromCart,
  updateItemQty
} from "../../actions/cartActions";

const Cart = props => {
  const { cart } = props.cart;
  function removeItem(item) {
    props.removeItemFromCart(item);
  }
  function priceItem(item) {
    return `$${item.toFixed(2)}`;
  }
  function orderTotal(arr) {
    return arr
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }
  function updateQuantity(id, qty) {
    props.updateItemQty(id, qty);
  }
  return cart.length === 0 ? (
    <p>no items in cart</p>
  ) : (
    <React.Fragment>
      <ul>
        {cart.map(cartItem => (
          <li key={cartItem.id}>
            <span>{cartItem.name}</span>{" "}
            <span>{priceItem(cartItem.price)}</span>{" "}
            <span
              style={{
                display: "inline-flex",
                flexDirection: "column",
                verticalAlign: "bottom"
              }}
            >
              <i style={{ fontSize: ".5em" }}>Qty</i>
              <input
                type="number"
                name="qty"
                min="1"
                max="99"
                value={cartItem.quantity}
                onChange={e => updateQuantity(cartItem.id, e.target.value)}
              />
            </span>{" "}
            <button onClick={() => removeItem(cartItem.id)}>remove item</button>
          </li>
        ))}
      </ul>
      <p>total: ${orderTotal(cart)}</p>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { addToCart, removeItemFromCart, updateItemQty }
)(Cart);
