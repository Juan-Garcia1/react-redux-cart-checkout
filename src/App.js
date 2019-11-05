import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Cart from "./components/cart";
import Products from "./components/products";
import ProductDetails from "./pages/product-details";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to="/">products</NavLink>{" "}
          <NavLink to="/checkout">checkout</NavLink>
        </nav>
        <Route exact path="/" component={Products} />
        <Route path="/checkout" component={Cart} />
        <Route path="/product/:id" component={ProductDetails} />
      </Router>
    </div>
  );
}
export default App;
