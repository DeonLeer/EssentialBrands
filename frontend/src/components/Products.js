import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from './Product'
import './Products.css'
export default function Products() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {axios.get('/api/products')
  .then((response) => {
    setProducts(prev => ({
      ...prev,
      products: response.data.products
    }))
    setLoading(false)
    console.log(products)
  })}, [])
  if(loading){
    return null
  }
  // const [brand, setBrand] = useState('all')
  return (
    <div className="Products">
      {products.products.map(product => {
        return(
          <Product product={product} />
        )
      })}
    </div>

  )
}