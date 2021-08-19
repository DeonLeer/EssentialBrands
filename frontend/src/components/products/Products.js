import React from 'react'
import Product from './Product'
import './Products.css'
import fg_header from '../../images/FG_Header.png'
import po_header from '../../images/PO_Header.png'
import pp_header from '../../images/PP_Header.png'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation
} from "react-router-dom";
export default function Products(props) {

  let { path} = useRouteMatch();
  let location = useLocation();
  let endpoint = location.pathname.split('/')[(location.pathname.split('/').length)-1];
  
  return (
    <div className="ProductsMain">
      <h1>Our CBD Products</h1>
      <div className="filters">
        <Link to="/products"><button className={(endpoint==='products') ? 'brand-button-selected' : 'brand-button'}>All Products</button></Link>
        <Link to="/products/forbiddengarden"><button className={(endpoint==='forbiddengarden') ? 'brand-button-selected' : 'brand-button'}>Forbidden Garden</button></Link>
        <Link to="/products/pureorgantic"><button className={(endpoint==='pureorgantic') ? 'brand-button-selected' : 'brand-button'}>Pure Organtic</button></Link>
        <Link to="/products/pawsitive"><button className={(endpoint==='pawsitive') ? 'brand-button-selected' : 'brand-button'}>Pawsitive</button></Link>
      </div>
      <Switch>
        <Route exact path={path}>
          <div className="Products">
            {props.products.products.map(product => {
            return(
              <Product 
                product={product}
                addProduct = { props.addProduct }
               />
            )})}
          </div>
        </Route>
        <Route path={`${path}/forbiddengarden`}>
          <div className="Products">
            <img className="brand-header" src={fg_header} alt="forbidden garden"/>
            {props.products.products.map(product => {
              if (product.brandid === 1){
                return(
                  <Product 
                    product={product}
                    addProduct = { props.addProduct }
                 />
                )}
              return null
              })}
          </div>
        </Route>
        <Route path={`${path}/pureorgantic`}>
          <div className="Products">
            <img className="brand-header" src={po_header} alt="pure organtic"/>
            {props.products.products.map(product => {
              if (product.brandid === 2){
                return(
                  <Product 
                    product={product}
                    addProduct = { props.addProduct }
                  />
                )}
              return null
              })}
          </div>
        </Route>
        <Route path={`${path}/pawsitive`}>
          <div className="Products">
            <img className="brand-header" src={pp_header} alt="pawsitive"/>
            {props.products.products.map(product => {
              if (product.brandid === 3){
                return(
                  <Product 
                    product={product}
                    addProduct = { props.addProduct }
                   />
                )}
              return null  
              })}
          </div>
        </Route>
      </Switch>
    </div>

  )
}

// }