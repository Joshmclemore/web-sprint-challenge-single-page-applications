import React, { useState, useEffect } from 'react';

const OrderForm = (props) => {
    const { change, submit } = props;
    const { name, size, topping1, topping2, special } = props.values


    return (
    <div name="form-container">
        <h1>Order Form</h1>  
        <form id="pizza-form">
            <label>Name:
                <input
                    value={name}
                    onChange={}
                    name='name-input'
                    type='text'
                />
            </label>
            <label>Size:
                <select id="size-dropdown">
                    <option selected value="select-value">--Select a value--</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>
            <div className='form-group-checkboxes'>
                <label>Pepperoni
                    <input
                    type="checkbox"
                    name="pepperoni"
                    checked={checked}
                    onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                    type="checkbox"
                    name="sausage"
                    checked={checked}
                    onChange={onChange}
                    />
                </label>
                <label>Black Olives
                    <input
                    type="checkbox"
                    name="black-olives"
                    checked={checked}
                    onChange={onChange}
                    />
                </label>
                <label>Bell Peppers
                    <input
                    type="checkbox"
                    name="bell-peppers"
                    checked={checked}
                    onChange={onChange}
                    />
                </label>
            </div>
        </form> 
    </div>

    )
}

export default OrderForm