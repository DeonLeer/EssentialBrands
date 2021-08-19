import logo1 from "./images/EBILogo.png";
import logo2 from "./images/forbiddengardenWhiteBG.jpg";
import logo3 from "./images/PureOrganticLogo.png";
import logo4 from "./images/highProfile.png";
import logo5 from "./images/terpenexpress/vector/default-monochrome.svg";
// import cart from "./images/cart.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Contact from "./components/contact/ContactUs";
import Terpenes from "./components/terpenes/Terpenes";
import FAQ from "./components/about/FAQ";
import Brands from "./components/about/Brands";
import CBD from "./components/learn/CBD";
import TerpenesLearn from "./components/learn/TerpenesLearn";
import Entourage from "./components/learn/Entourage";
import Locations from "./components/about/Locations";
// import Cart from "./components/cart/Cart";
// import useCart from "./hooks/useCart";
// import CheckoutForm from "./components/checkout/CheckoutForm";
import WhatWeDo from "./components/whiteLabel/WhatWeDo";
import WhiteLabeling from "./components/whiteLabel/WhiteLabeling";
import Invest from "./components/invest/Invest";
import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import MoreTerpenes from "./components/terpenes/MoreTerpenes";
import Calculator from "./components/terpenes/Calculator";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EcoIcon from "@material-ui/icons/Eco";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import Collapse from "@material-ui/core/Collapse";
import ReactLoading from "react-loading";

require("dotenv").config();

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		width: "100vw",
		left: "0",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		backgroundColor: "white",
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	},
	title: {
		flexGrow: 1,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-start",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

// const stripe = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function App() {
	// const { getCart, addProduct, editProduct, removeProduct, removeAllProducts } =
	// 	useCart();
	// const currentCart = getCart();

	// variables
	const classes = useStyles();
	const theme = useTheme();
	const breakpoint = 1024;

	// states
	const [terpenes, setTerpenes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [width, setWidth] = useState(window.innerWidth);
	const [open, setOpen] = useState(false);
	const [state, setState] = useState({
		products: false,
		terpenes: false,
		about: false,
		learn: false,
		whitelabeling: false,
	});

	// let cartNum = 0;
	// for (let item in currentCart) {
	// 	cartNum = cartNum + currentCart[item].quantity;
	// }

	// functions

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleItemOpen = (item) => {
		setState((prev) => ({
			...prev,
			[item]: !prev[item],
		}));
	};

	useEffect(() => {
		axios
			.get("https://essential-brands-backend.herokuapp.com/api/products")
			.then((response) => {
				setProducts((prev) => ({
					...prev,
					products: response.data.products,
				}));
				axios
					.get("https://essential-brands-backend.herokuapp.com/api/terpenes")
					.then((response) => {
						setTerpenes((prev) => ({
							...prev,
							terpenes: response.data.terpenes,
						}));
						setLoading(false);
					});
			});
	}, []);
	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
	});

	if (loading)
		return (
			<div
				style={{
					height: "100vh",
					width: "100vw",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<ReactLoading
					type={"spokes"}
					color={"#33415b"}
					height={width > 500 ? 400 : 200}
					width={width > 500 ? 400 : 200}
				/>
			</div>
		);

	return (
		<Router>
			<div className="App">
				{width > breakpoint ? (
					<>
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
						</div>
						<div className="navbar">
							<Link to="/" className="link">
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
							<Link to="/terpenes" className="link">
								<button className="nav-button">TERPENES</button>
								<div className="dropdown-content">
									<Link to="/terpenes">Trending Terpenes</Link>
									<Link to="/terpenes/more">More Terpenes</Link>
									<Link to="/terpenes/calculator">Mixing Calculator</Link>
								</div>
							</Link>
							<Link to="/about" className="link">
								<button className="nav-button">ABOUT</button>
								<div className="dropdown-content">
									<Link to="/about">About Us</Link>
									<Link to="/about/brands">Our Brands</Link>
									<Link to="/about/locations">Our Locations</Link>
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
							<Link to="/whitelabeling" className="link">
								<button className="nav-button">WHITE LABELING</button>
								<div className="dropdown-content">
									<Link to="/whitelabeling">What is White Labeling?</Link>
									<Link to="/whitelabeling/whatwedo">What we do</Link>
								</div>
							</Link>
							<Link to="/contact" className="link">
								<button className="nav-button">CONTACT</button>
							</Link>
							<Link to="/invest" className="link">
								<button className="nav-button">INVEST</button>
							</Link>
							{/* <Link to="/cart">
						<img className="cart" src={cart} alt="shopping cart" />
					</Link> */}
							{/* <h2 style={{ marginRight: "2%" }}>{cartNum}</h2> */}
						</div>
						<div className="content">
							<Switch>
								<Route path="/learn/cbd">
									<CBD width={width} />
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
								<Route path="/about/locations">
									<Locations />
								</Route>
								<Route path="/whitelabeling/whatwedo">
									<WhatWeDo />
								</Route>
								<Route path="/terpenes/more">
									<MoreTerpenes />
								</Route>
								<Route path="/terpenes/calculator">
									<Calculator />
								</Route>
								<Route path="/about">
									<About width={width} />
								</Route>
								<Route path="/invest">
									<Invest />
								</Route>
								<Route path="/whitelabeling">
									<WhiteLabeling />
								</Route>
								<Route path="/products">
									<Products
										products={products}
										// addProduct={addProduct}
									/>
								</Route>
								<Route path="/contact">
									<Contact />
								</Route>
								<Route path="/terpenes">
									<Terpenes
										terpenes={terpenes}
										// addProduct={addProduct}
									/>
								</Route>

								{/* <Route path="/cart">
							<Cart
								terpenes={terpenes}
								products={products}
								getCart={getCart}
								addProduct={addProduct}
								editProduct={editProduct}
								removeProduct={removeProduct}
								removeAllProducts={removeAllProducts}
							/>
						</Route> */}
								{/* <Route path="/checkout">
							<Elements stripe={stripe}>
								<CheckoutForm
									getCart={getCart}
									removeAllProducts={removeAllProducts}
								/>
							</Elements>
						</Route> */}
								<Route path="/">
									<Home />
								</Route>
							</Switch>
						</div>
						<div className="bottom">
							<ul>
								<b>About</b>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/about/brands">Brands</Link>
								</li>
								<li>
									<Link to="/about/faq">FAQ</Link>
								</li>
							</ul>
							<ul>
								<b>Products</b>
								<li>
									<Link to="/products">CBD</Link>
									<ul>
										<li>
											<Link to="/products/forbiddengarden">
												Forbidden Garden
											</Link>
										</li>
										<li>
											<Link to="/products/pureorgantic">Pure Organtic</Link>
										</li>
										<li>
											<Link to="/products/pawsitive">Pawsitive Pets</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to="/terpenes">Terpenes</Link>
								</li>
							</ul>
							<ul>
								<b>Learn</b>
								<li>
									<Link to="/learn/terpenes">About Terpenes</Link>
								</li>
								<li>
									<Link to="/learn/cbd">About CBD</Link>
								</li>
								<li>
									<Link to="/learn/entourage">The Entourage Effect</Link>
								</li>
							</ul>
							<ul>
								<b>More</b>
								<li>
									<Link to="/terpenes/calculator">
										Terpene Mixing Calculator
									</Link>
								</li>
								<li>
									<Link to="/whitelabeling">White Labeling</Link>
								</li>
								<li>
									<Link to="/invest">Invest</Link>
								</li>
							</ul>
						</div>
					</>
				) : (
					<>
						<div className={classes.root}>
							<CssBaseline />
							<AppBar
								position="fixed"
								className={clsx(classes.appBar, {
									[classes.appBarShift]: open,
								})}
							>
								<Toolbar className={classes.toolbar}>
									<Link to="/">
										<img
											className="EssentialBrandsLogo"
											src={logo1}
											alt="Essential Brands Logo"
										/>
									</Link>

									<IconButton
										color="black"
										aria-label="open drawer"
										edge="end"
										onClick={handleDrawerOpen}
										className={clsx(open && classes.hide)}
									>
										<MenuIcon />
									</IconButton>
								</Toolbar>
							</AppBar>
							<Drawer
								className={classes.drawer}
								variant="persistent"
								anchor="right"
								open={open}
								classes={{
									paper: classes.drawerPaper,
								}}
							>
								<div className={classes.drawerHeader}>
									<IconButton onClick={handleDrawerClose}>
										{theme.direction === "rtl" ? (
											<ChevronLeftIcon />
										) : (
											<ChevronRightIcon />
										)}
									</IconButton>
								</div>
								<Divider />
								<List>
									<ListItem button component={Link} to="/" key={"home"} onClick={()=>handleDrawerClose()}>
										<ListItemIcon>
											<HomeIcon />
										</ListItemIcon>
										<ListItemText primary={"Home"} />
									</ListItem>

									<ListItem
										button
										onClick={() => handleItemOpen("products")}
										// component={Link}
										// to="/products"
										key={"products"}
									>
										<ListItemIcon>
											<EcoIcon />
										</ListItemIcon>
										<ListItemText primary={"CBD Products"} />
									</ListItem>
									<Collapse in={state.products} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/products"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="All CBD Products" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/products/forbiddengarden"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="Forbidden Garden" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/products/pureorgantic"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="Pure Organtic" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/products/pawsitive"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="Pawsitive Pets" />
											</ListItem>
										</List>
									</Collapse>

									<ListItem
										button
										onClick={() => handleItemOpen("terpenes")}
										// component={Link}
										// to="/terpenes"
										key={"terpenes"}
									>
										<ListItemIcon>
											<InvertColorsIcon />
										</ListItemIcon>
										<ListItemText primary={"Terpenes"} />
									</ListItem>
									<Collapse in={state.terpenes} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/terpenes"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="Trending Terpenes" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/terpenes/more"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="More Terpenes" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/terpenes/calculator"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="Mixing Calculator" />
											</ListItem>
										</List>
									</Collapse>

									<ListItem
										button
										onClick={() => handleItemOpen("about")}
										key={"about"}
									>
										<ListItemIcon>
											<PeopleIcon />
										</ListItemIcon>
										<ListItemText primary={"About Us"} />
									</ListItem>
									<Collapse in={state.about} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/about"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="About Us" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/about/brands"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="Our Brands" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/about/locations"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="Our Locations" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/about/faq"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="FAQs" />
											</ListItem>
										</List>
									</Collapse>

									<ListItem
										button
										onClick={() => handleItemOpen("learn")}
										key={"learn"}
									>
										<ListItemIcon>
											<MenuBookIcon />
										</ListItemIcon>
										<ListItemText primary={"Learn"} />
									</ListItem>
									<Collapse in={state.learn} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/learn/terpenes"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="About Terpenes" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/learn/cbd"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="About CBD" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/learn/entourage"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="Entourage Effect" />
											</ListItem>
										</List>
									</Collapse>

									<ListItem
										button
										onClick={() => handleItemOpen("whitelabeling")}
										key={"whitelabeling"}
									>
										<ListItemIcon>
											<LoyaltyIcon />
										</ListItemIcon>
										<ListItemText primary={"White Labeling"} />
									</ListItem>
									<Collapse
										in={state.whitelabeling}
										timeout="auto"
										unmountOnExit
									>
										<List component="div" disablePadding>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/whitelabeling"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="What is White Labeling?" />
											</ListItem>
											<ListItem
												button
												className={classes.nested}
												component={Link}
												to="/whitelabeling/whatwedo"
												onClick={()=>handleDrawerClose()}
											>
												<ListItemText primary="What We Do" />
											</ListItem>
										</List>
									</Collapse>

									<ListItem
										button
										component={Link}
										to="/contact"
										key={"contact"}
										onClick={()=>handleDrawerClose()}
									>
										<ListItemIcon>
											<ContactMailIcon />
										</ListItemIcon>
										<ListItemText primary={"Contact"} />
									</ListItem>

									<ListItem button component={Link} to="/invest" key={"invest"} onClick={()=>handleDrawerClose()}>
										<ListItemIcon>
											<ShowChartIcon />
										</ListItemIcon>
										<ListItemText primary={"Invest"} />
									</ListItem>
								</List>
								<Divider />
							</Drawer>
						</div>
						<div className="content">
							<Switch>
								<Route path="/learn/cbd">
									<CBD width={width} />
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
								<Route path="/about/locations">
									<Locations />
								</Route>
								<Route path="/whitelabeling/whatwedo">
									<WhatWeDo />
								</Route>
								<Route path="/terpenes/more">
									<MoreTerpenes />
								</Route>
								<Route path="/terpenes/calculator">
									<Calculator />
								</Route>
								<Route path="/about">
									<About width={width} />
								</Route>
								<Route path="/invest">
									<Invest />
								</Route>
								<Route path="/whitelabeling">
									<WhiteLabeling />
								</Route>
								<Route path="/products">
									<Products
										products={products}
										// addProduct={addProduct}
									/>
								</Route>
								<Route path="/contact">
									<Contact />
								</Route>
								<Route path="/terpenes">
									<Terpenes
										terpenes={terpenes}
										// addProduct={addProduct}
									/>
								</Route>
								{/* <Route path="/cart">
							<Cart
								terpenes={terpenes}
								products={products}
								getCart={getCart}
								addProduct={addProduct}
								editProduct={editProduct}
								removeProduct={removeProduct}
								removeAllProducts={removeAllProducts}
							/>
						</Route> */}
								{/* <Route path="/checkout">
							<Elements stripe={stripe}>
								<CheckoutForm
									getCart={getCart}
									removeAllProducts={removeAllProducts}
								/>
							</Elements>
						</Route> */}
								<Route path="/">
									<Home />
								</Route>
							</Switch>
						</div>
					</>
				)}
			</div>
		</Router>
	);
}

export default App;
