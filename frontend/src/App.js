import logo1 from "./images/EBI_Logo_Feb21.jpg";
import logo2 from "./images/ForbiddenGardenLogo.png";
import logo3 from "./images/PureOrganticLogo.png";
import logo4 from "./images/highProfile.png";
import logo5 from "./images/terpenexpress/vector/default-monochrome.svg";
import cart from "./images/cart.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Contact from "./components/ContactUs";
import Terpenes from "./components/terpenes/Terpenes";
import FAQ from "./components/about/FAQ";
import Brands from "./components/about/Brands";
import CBD from "./components/learn/CBD";
import TerpenesLearn from "./components/learn/TerpenesLearn";
import Entourage from "./components/learn/Entourage";
import Cart from "./components/cart/Cart";
import useCart from "./hooks/useCart";
import CheckoutForm from './components/checkout/CheckoutForm'
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
require('dotenv').config();
const stripe = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
function App() {
	const { getCart, addProduct, editProduct, removeProduct, removeAllProducts } =
		useCart();

	const currentCart = getCart();
  const [terpenes, setTerpenes] = useState([])
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
	let cartNum = 0;
	for (let item in currentCart) {
		cartNum = cartNum + currentCart[item].quantity;
	}
  useEffect(() => {
    axios.get('https://essential-brands-backend.herokuapp.com/api/products')
    .then((response) => {
      setProducts(prev => ({
        ...prev,
        products: response.data.products
      }))
      axios.get('https://essential-brands-backend.herokuapp.com/api/terpenes')
      .then((response) => {
        setTerpenes(prev => ({
          ...prev,
          terpenes: response.data.terpenes
        }))
        setLoading(false)
      })
    })}, [])
  if (loading) return (
    <div className="App">
      <h1>LOADING</h1>
    </div>
  )
	return (
		<Router>
			<div className="App">
				<div className="Header">
					<div className="Logos">
						<Link to="/">
							<img
								className="EssentialBrandsLogo"
								src={logo1}
								alt="Essential Brands Logo"
							/>
						</Link>
						<div className="OtherLogos">
							<img
								className="ForbiddenGardenLogo"
								src={logo2}
								alt="Forbidden Garden Logo"
							/>
							<img
								className="PureOrganticLogo"
								src={logo3}
								alt="Pure Organtic Logo"
							/>
							<img
								className="HighProfileLogo"
								src={logo4}
								alt="High Profile Logo"
							/>
							<img
								className="TerpeneXpressLogo"
								src={logo5}
								alt="Terpene Xpress Logo"
							/>
						</div>
					</div>
					{/* TODO: ADD DROP DOWN MENUS: PRODUCTS-> FG, PO, HP, TX, LEARN -> CBD, TERPENES, ABOUT -> WHO WE ARE */}
					<div className="navbar">
						<Link to="/">
							<button className="nav-button">HOME</button>
						</Link>
						<Link to="/products" className="link">
							<button className="nav-button">CBD PRODUCTS</button>
							<div className="dropdown-content">
								<Link to="/products/forbiddengarden">Forbidden Gardens</Link>
								<Link to="/products/pureorgantic">Pure Organtic</Link>
								<Link to="/products/pawsitive">Pawsitive</Link>
							</div>
						</Link>
						<Link to="/terpenes">
							<button className="nav-button">TERPENES</button>
						</Link>
						<Link to="/about" className="link">
							<button className="nav-button">ABOUT</button>
							<div className="dropdown-content">
								<Link to="/about">About Us</Link>
								<Link to="/about/brands">Our Brands</Link>
								<Link to="/about/faq">FAQ</Link>
							</div>
						</Link>
						<Link to="/learn/terpenes" className="link">
							<button className="nav-button">LEARN</button>
							<div className="dropdown-content">
								<Link to="/learn/terpenes">About Terpenes</Link>
								<Link to="/learn/cbd">About CBD</Link>
								<Link to="/learn/entourage">Entourage Effect</Link>
							</div>
						</Link>
						<Link to="/contact">
							<button className="nav-button">CONTACT</button>
						</Link>
						<Link to="/invest">
							<button className="nav-button">INVEST</button>
						</Link>
						<Link to="/cart">
							<img className="cart" src={cart} alt="shopping cart" />
						</Link>
						<h2 style={{ marginRight: "2%" }}>{cartNum}</h2>
					</div>
				</div>
				<div className="content">
					<Switch>
						<Route path="/learn/cbd">
							<CBD />
						</Route>
						<Route path="/learn/terpenes/:terpene">
							<TerpenesLearn />
						</Route>
						<Route path="/learn/terpenes">
							<TerpenesLearn />
						</Route>
						<Route path="/learn/entourage">
							<Entourage />
						</Route>
						<Route path="/about/faq">
							<FAQ />
						</Route>
						<Route path="/about/brands">
							<Brands />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/products">
							<Products 
                products={products}
                addProduct={addProduct} />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/terpenes">
							<Terpenes 
                terpenes={terpenes}
                addProduct={addProduct} />
						</Route>
						<Route path="/cart">
							<Cart
                terpenes={terpenes}
                products={products}
								getCart={getCart}
								addProduct={addProduct}
								editProduct={editProduct}
								removeProduct={removeProduct}
								removeAllProducts={removeAllProducts}
							/>
						</Route>
						<Route path='/checkout'>
							<Elements stripe={stripe}>
								<CheckoutForm
								getCart = {getCart}
								removeAllProducts = {removeAllProducts}
								 />
							</Elements>
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
