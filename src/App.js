import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import OrderForm from "./Components/OrderForm";
// import * as yup from 'yup';
// import schema from './Validation/formSchema';
import axios from 'axios';
import './App.css'


const App = () => {

  const [orders, setOrders] = useState([])
 
  /** 
  - [ ] An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions

    1. Create a new state variable + hook
    2. Post to [reqres](https://reqres.in/) with `axios` (the link you should use is step 4)
    3. Log data in console
    4. The URL you should use is `https://reqres.in/api/orders`. The tests are based on this URL.
  */
  
  const orderSubmit = (newOrder) => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res=> {
      // console.log(res.data)
      setOrders([ ...orders, res.data])
    })
    .catch(err => console.error(err))
  }



  // const orderSubmit = (orders) => {
  //   // setOrders([...orders], newOrder)
  //   // setFormValues(initialFormValues)
  //   axios.post('https://reqres.in/api/orders', formValues)
  //   .then(res => {
  //     setOrders([...orders, res.data])
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  useEffect(() => {
    console.log(orders)
  }, [orders])

  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //     .validate(value)
  //     .then(() => setFormErrors ({ ...formErrors, [name]: ''}))
  //     .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  // }

  // const handlechange = (name, value) => {
  //   validate(name, value);
  //   setFormValues({...formValues, [name]: value});
  // }

  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">Order Pizza</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <div id="container">
            <h1>Bloom Tech Eats</h1>
            <p>Press the "Order Pizza" button to place an order now!</p>
          </div>
        </Route>
        <Route path="/pizza">
          <OrderForm orderSubmit={orderSubmit}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
