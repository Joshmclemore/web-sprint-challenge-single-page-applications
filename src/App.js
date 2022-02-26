import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import OrderForm from "./Components/OrderForm";
import * as yup from 'yup';
import schema from './Validation/formSchema';
import axios from 'axios';

const initialFormValues = {
    name: "",
    size: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
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
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [orders, setOrders] = useState([])

  const orderSubmit = (orders) => {
    // setOrders([...orders], newOrder)
    // setFormValues(initialFormValues)
    axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {
      setOrders([...orders, res.data])
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    console.log(orders)
  }, [formValues])

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors ({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handlechange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
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
          <OrderForm values={formValues} change={handlechange} submit={orderSubmit}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
