import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import OrderForm from "./Components/OrderForm";
import * as yup from 'yup';
import Schema from './Validation/formSchema'

const initialFormValues = {
    name: "",
    size: "",
    topping1: false,
    topping2: false,
    special: "",
}

const initialErrors = {
  name: "",
  size: "",
  topping1: "",
  topping2: "",
  special: "",
}

const App = () => {
  console.log("hello world")

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialErrors)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors ({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handlechange = (name, value) => {
    
  }

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
          <OrderForm values={formValues}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
