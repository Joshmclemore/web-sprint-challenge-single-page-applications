import React, { useState, useEffect } from 'react';
import * as yup from 'yup'
import schema from '../Validation/formSchema';
import '../App.css'


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
  topping3: "",
  topping4: "",
  special: "",
}

const OrderForm = (props) => {

    const { orderSubmit } = props
    const [form, setForm] = useState(initialFormValues)
    const [error, setError] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true)


    // const submitForm = evt => {
    //     evt.preventDefault()
    //     submit(values)
    // }

        const formValidate = (e) => {
            yup.reach(schema, e.target.name)
                .validate(
                    e.target.type === 'checkbox' ? e.target.checked : e.target.value
                )
                .then(()=> {
                    setError({...error, [e.target.name]:""})
                })
                .catch((error)=> {
                    setError({...error, [e.target.name]: error.errors[0]})
                })
    }

    const formChange = (e) => {
        formValidate(e)
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({...form, [e.target.name]:value})
    }



    const submitForm = (e) => {
        e.preventDefault()
        orderSubmit(form)
        setForm(initialFormValues)
    }

    useEffect(()=> {
        schema.isValid(form).then((valid)=>{
            setDisabled(!valid)
        })
    }, [form])
    // const onChange = evt => {
    //     const { name, value, type, checked } = evt.target
    //     const valueToUse = type === 'checkbox' ? checked : value;
    //     change(name, valueToUse)
    // }

    return (
    <div name="form-container">
        <h1>Order Form</h1>  
        {/*(add this to form)  */}
        <form id="pizza-form" onSubmit={submitForm}>
            <label>Name:
                <input
                    value={form.name}
                    onChange={formChange}
                    id='name-input'
                    name='name'
                    type='text'
                />
            </label>
            <label>Size:
                <select 
                onChange={formChange}
                id="size-dropdown"
                value={form.size}
                name="size"
                >
                    <option value="">--Select a value--</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            </label>
            <div className='form-group-checkboxes'>
                <h3>Chooose a few toppings:</h3>
                <label>Pepperoni
                    <input
                    type="checkbox"
                    name="topping1"
                    checked={form.topping1}
                    onChange={formChange}
                    />
                </label>
                <label>Sausage
                    <input
                    type="checkbox"
                    name="topping2"
                    checked={form.topping2}
                    onChange={formChange}
                    />
                </label>
                <label>Black Olives
                    <input
                    type="checkbox"
                    name="topping3"
                    checked={form.topping3}
                    onChange={formChange}
                    />
                </label>
                <label>Bell Peppers
                    <input
                    type="checkbox"
                    name="topping4"
                    checked={form.topping4}
                    onChange={formChange}
                    />
                </label>
                <h3>Anything we missed?</h3>
                <label>Special Instructions
                    <input
                    type="text"
                    id="special-text"
                    onChange={formChange}
                    value={form.special}
                    name="special"
                    />
                </label>
                <button type="submit" disabled={disabled} id="order-button">Add to Order</button>
            </div>
        </form> 
        <p>{error.name}</p>
        <p>{error.size}</p>
        <p>{error.topping1}</p>
        <p>{error.topping2}</p>
        <p>{error.topping3}</p>
        <p>{error.topping4}</p>
        <p>{error.special}</p>
    </div>

    )
}

export default OrderForm


/**
- [X] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")
- [X] A order form that has a "/pizza" route and shows the form
- [X] A form with an id of "pizza-form"
- [X] A name text input field with an id of "name-input"
- [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)
- [X] A dropdown for pizza size with an id of "size-dropdown"
- [X] A checklist for toppings - at least 4 (hint: name each separately!)
- [X] Text input for special instructions with an id of "special-text"
- [ ] An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions
 */