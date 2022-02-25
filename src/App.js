import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import OrderForm from "./Components/OrderForm";

const App = () => {
  console.log("hello world")
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">Order Pizza</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
        </Route>
        <Route path="/pizza">
          <OrderForm/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
