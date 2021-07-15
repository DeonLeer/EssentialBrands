import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from './Product'
import './Products.css'
import fg_header from '../images/FG_Header.png'
import po_header from '../images/PO_Header.png'
import pp_header from '../images/PP_Header.png'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {axios.get('https://essential-brands-backend.herokuapp.com/api/products')
  .then((response) => {
    setProducts(prev => ({
      ...prev,
      products: response.data.products
    }))
    setLoading(false)
  })}, []);
  let { path} = useRouteMatch();
  if (loading) return null
  return (
    <div className="ProductsMain">
      <h1>Our CBD Products</h1>
      <div className="filters">
        <Link to="/products"><button className="brand-button">All Products</button></Link>
        <Link to="/products/forbiddengarden"><button className="brand-button">Forbidden Garden</button></Link>
        <Link to="/products/pureorgantic"><button className="brand-button">Pure Organtic</button></Link>
        <Link to="/products/pawsitive"><button className="brand-button">Pawsitive</button></Link>
      </div>
      <Switch>
        <Route exact path={path}>
          <div className="Products">
            {products.products.map(product => {
            return(
              <Product product={product} />
            )})}
          </div>
        </Route>
        <Route path={`${path}/forbiddengarden`}>
          <div className="Products">
            <img className="brand-header" src={fg_header} alt="forbidden garden"/>
            {products.products.map(product => {
              if (product.brandid === 1){
                return(
                  <Product product={product} />
                )}
              return null
              })}
          </div>
        </Route>
        <Route path={`${path}/pureorgantic`}>
          <div className="Products">
            <img className="brand-header" src={po_header} alt="pure organtic"/>
            {products.products.map(product => {
              if (product.brandid === 2){
                return(
                  <Product product={product} />
                )}
              return null
              })}
          </div>
        </Route>
        <Route path={`${path}/pawsitive`}>
          <div className="Products">
            <img className="brand-header" src={pp_header} alt="pawsitive"/>
            {products.products.map(product => {
              if (product.brandid === 3){
                return(
                  <Product product={product} />
                )}
              return null  
              })}
          </div>
        </Route>
      </Switch>
    </div>

  )
}


// //   const [state, setState] = useState({
//   1: true,
//   2: true, 
//   3: true
// })
// const filterToggle = function(brand) {
//   if (state[brand]) {
//     setState(prev => ({
//       ...prev,
//       [brand]: false
//     }))
//     console.log(state)
//   } else {
//     setState(prev => ({
//       ...prev,
//       [brand]: true
//     }))
//     console.log(state)
//   }
// }