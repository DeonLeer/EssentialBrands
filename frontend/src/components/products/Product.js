import React, {useState} from 'react'
import {Image} from 'cloudinary-react'
import './Product.css'
export default function Products(props) {

  const [amount, setAmount] = useState(0)

  const CloudImage = function() {
    if (props.product.images) {
      return(
        <img src={props.product.images} alt={props.product.name} className="product-image"/>
      )
    } else return (
      <Image cloudName="deonleer" publicId={`${props.product.id}/1.png`} className="product-image"/>
    )
  }



  return (
    <div className="Product">
      <div className="product-name">{props.product.name}</div>
      <CloudImage/>
      <div className="size">{props.product.size}{props.product.size_unit}</div>
      <div className="cbd-content">CBD Content: {props.product.cbd_mg} mg</div>
      <div className="thc-percent">THC Content: {props.product.tbh_percent*0.01}%</div>
      <div className="product-price">${props.product.price}.00</div>
      <div className="actions" style={{width: '100%'}}>
        <button className="productButton">More Info</button>
        <div className="addToCart">
          <div className="ARButtons">
            <button
              className="ARButton"
              onClick={()=>{(amount>0) ? setAmount(amount-1) : setAmount(amount)}}
            >
            -</button>
            {amount}
            <button
              className="ARButton"
              onClick={()=>setAmount(amount+1)}
            >+</button>
          </div>
          <button 
            className="productButton" 
            onClick={()=>{
              let cartItemObj = props.product;
              cartItemObj.quantity = amount
              props.addProduct(`CBD${props.product.id}`, cartItemObj)
              }}
          >
          Add to Cart
          </button>
        </div>
      </div>
    </div>

  )
}