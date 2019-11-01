import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";

const Products = props => {
  const { productItems } = props.productItems;
  function priceItem(item) {
    return `$${item.toFixed(2)}`;
  }
  function addItemToCart(productItem) {
    props.addToCart(productItem);
  }
  return (
    <header className="App-header">
      <Link to="/checkout">check cart</Link>
      {productItems.map(productItem => (
        <div key={productItem.id}>
          <span>{productItem.name}</span>{" "}
          <span>{priceItem(productItem.price)}</span>{" "}
          <button onClick={() => addItemToCart(productItem)}>
            add to cart
          </button>
        </div>
      ))}
    </header>
  );
};

const mapStateToProps = state => {
  return {
    productItems: state.productItems
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(Products);
