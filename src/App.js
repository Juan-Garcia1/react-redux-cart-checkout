import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/cart";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Products} />
        <Route path="/checkout" component={Cart} />
      </Router>
    </div>
  );
}
export default App;
