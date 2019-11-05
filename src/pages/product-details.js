import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
// import products from "../components/products";

const ProductDetails = props => {
  const { productItems } = props.productItems;
  const [product, getProduct] = useState({});

  const [addedProduct, setAddedProduct] = useState(false);

  const {
    match: {
      params: { id }
    }
  } = props;

  useEffect(() => {
    productItems.map(
      productItem => productItem.id === id && getProduct(productItem)
    );
  }, [id, productItems]);

  let productDetail;
  if (product === undefined) {
    productDetail = (
      <div>
        <p>loading name</p>
        <p>loading description</p>
      </div>
    );
  } else {
    productDetail = (
      <div>
        <p>
          {product.name} - <span>${product.price}</span>
        </p>
        <p>{product.description}</p>
        <button
          disabled={addedProduct}
          onClick={() => [props.addToCart(product), setAddedProduct(true)]}
        >
          {addedProduct ? "item added" : "add to cart"}
        </button>
      </div>
    );
  }
  return productDetail;
};

const mapStateToProps = state => {
  return {
    productItems: state.productItems
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductDetails);
