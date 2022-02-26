import React, { useState, useEffect } from 'react';

const OrderForm = (props) => {
    const { change, submit, values, disabled } = props;
    const { name, size, topping1, topping2, topping3, topping4, special } = props.values


    const submitForm = evt => {
        evt.preventDefault()
        submit(values)
    }


    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
    <div name="form-container">
        <h1>Order Form</h1>  
        <form id="pizza-form" onSubmit={submitForm}>
            <label>Name:
                <input
                    value={name}
                    onChange={onChange}
                    name='name-input'
                    type='text'
                />
            </label>
            <label>Size:
                <select 
                onChange={onChange}
                id="size-dropdown"
                value={size}
                name="size-dropdown"
                >
                    <option value="">--Select a value--</option>
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
                    checked={topping1}
                    onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                    type="checkbox"
                    name="sausage"
                    checked={topping2}
                    onChange={onChange}
                    />
                </label>
                <label>Black Olives
                    <input
                    type="checkbox"
                    name="black-olives"
                    checked={topping3}
                    onChange={onChange}
                    />
                </label>
                <label>Bell Peppers
                    <input
                    type="checkbox"
                    name="bell-peppers"
                    checked={topping4}
                    onChange={onChange}
                    />
                </label>
                <button type="submit" disabled={disabled} id="order-button">Add to Order</button>
            </div>
        </form> 
    </div>

    )
}

export default OrderForm