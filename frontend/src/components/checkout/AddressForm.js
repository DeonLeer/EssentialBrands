import React from 'react'
import './AddressForm.css'

export default function AdressForm(props) {

  const submitHandler = function(e) {
    e.preventDefault();
    props.setValidShipping(true);
  }

  return (
    <form className="AddressForm" onSubmit={(e)=>submitHandler(e)}>
      <label for="name">Full Name</label>
      <input type="text" name="name" id="name" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" />
      <label for="confirmemail">Confirm Email</label>
      <input type="email" id="confirmemail" name="confirmemail" />
      <label for="address">Address</label>
      <input type="text" id="address" name="address" />
      <label for="postCode">Postal Code</label>
      <input type="text" id="postCode" name="postCode" size={6} maxLength={6}/>
      <label for="city">City</label>
      <input type="text" id="city" name="city"/>
      <label for="province">Province/Territory</label>
      <select id="province" name="province">
        <option value="Ontario">Ontario</option>
        <option value="Quebec">Quebec</option>
        <option value="British Columbia">British Columbia</option>
        <option value="Alberta">Alberta</option>
        <option value="Manitoba">Manitoba</option>
        <option value="Saskatchewan">Saskatchewan</option>
        <option value="Nova Scotia">Nova Scotia</option>
        <option value="New Brunswick">New Brunswick</option>
        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
        <option value="Prince Edward Island">Prince Edward Island</option>
        <option value="Northwest Territories">Northwest Territories</option>
        <option value="Yukon">Yukon</option>
        <option value="Nunavut">Nunavut</option>
      </select>
      <button type="submit">Save</button>
    </form>
  )
}