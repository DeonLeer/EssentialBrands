import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from './Product'
import './Products.css'
import { background } from '@cloudinary/base/qualifiers/focusOn'
export default function Products() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [state, setState] = useState({
    1: true,
    2: true, 
    3: true
  })
  const filterToggle = function(brand) {
    if (state[brand]) {
      setState(prev => ({
        ...prev,
        [brand]: false
      }))
      console.log(state)
    } else {
      setState(prev => ({
        ...prev,
        [brand]: true
      }))
      console.log(state)
    }
  }


  useEffect(() => {axios.get('/api/products')
  .then((response) => {
    setProducts(prev => ({
      ...prev,
      products: response.data.products
    }))
    setLoading(false)
    console.log(products)
  })}, [state])
  if(loading){
    return null
  }
  // const [brand, setBrand] = useState('all')
  return (
    <div className="ProductsMain">
      <h1>Our Products</h1>
      <div className="filters">
        <button style={(state[1]) ? {fontWeight: 700} : {backgroundColor: 'gray'}} onClick={()=>filterToggle(1)}>Forbidden Garden</button>
        <button style={(state[2]) ? {fontWeight: 700} : {backgroundColor: 'gray'}} onClick={()=>filterToggle(2)}>Pure Organtic</button>
        <button style={(state[3]) ? {fontWeight: 700} : {backgroundColor: 'gray'}} onClick={()=>filterToggle(3)}>Pawsitive</button>
      </div>
      <div className="Products">
        {products.products.map(product => {
          if ((product.brandid === 1 && state[1]) || (product.brandid === 2 && state[2]) || (product.brandid === 3 && state[3])) {
            return(
              <Product product={product} />
            )
          }
          return null
        })}
      </div>
    </div>

  )
}