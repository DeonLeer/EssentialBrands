import React from "react";
import { Link } from 'react-router-dom'
import "./Cart.css";
export default function Cart(props) {
	const currentCart = props.getCart();
	const sizeFormat = (size) => {
		let fixedSize;
		switch (size) {
			case "fiveg":
				fixedSize = "5 Grams";
				break;
			case "twentyg":
				fixedSize = "20 Grams";
				break;
			case "fiftyg":
				fixedSize = "50 Grams";
				break;
			case "hundredg":
				fixedSize = "100 Grams";
				break;
			case "fivehundg":
				fixedSize = "500 Grams";
				break;
			case "thousandg":
				fixedSize = "1000 Grams";
				break;
			default:
				fixedSize = "N/A";
		}
		return fixedSize;
	};
	if (!currentCart || !Object.values(currentCart).length) {
		return (
			<div className="Cart">
				<h1>Your Cart</h1>
				<p>Your Cart is Empty!</p>
			</div>
		);
	} else {
		const cartArray = Object.keys(currentCart);
		const cbdArray = [];
		const terpArray = [];
		let cbdTotal = 0;
		let terpTotal = 0;
		for (let item of cartArray) {
			if (item.slice(0, 3) === "CBD") {
				let tempObj = currentCart[item];
				tempObj.cost = tempObj.quantity * tempObj.price;
				cbdTotal = cbdTotal + tempObj.cost;
				cbdArray.push(tempObj);
			} else {
				let string = item.slice(3);
				let size = string.split("g")[0] + "g";
				let tempObj = currentCart[item];
				tempObj.cost = tempObj[size] * tempObj.quantity;
				tempObj.size = size;
				terpTotal = terpTotal + tempObj.cost;
				terpArray.push(tempObj);
			}
		}
		return (
			<div className="Cart">
				<h1>Your Cart</h1>
				<div className="CartBody">
					<div className="CartItems">
						{!!cbdTotal && (
							<div className="CBDCartItems">
								<h3>CBD Products</h3>
								<div className="CBDCartHeader">
									<div className="CBDNameHead">Name</div>
									<div className="CBDPriceHead">Price</div>
									<div className="CBDQuantityHead">Quantity</div>
									<div className="CBDCostHead">Cost</div>
								</div>
								{cbdArray.map((item) => {
									return (
										<div className="CBDCartItem">
											<div className="CBDName">{item.name}</div>
											<div className="CBDPrice">${item.price}</div>
											<div className="CBDQuantity">{item.quantity}</div>
											<div className="CBDCost">${item.cost}</div>
										</div>
									);
								})}
							</div>
						)}
						{!!(cbdTotal && terpTotal) && (
							<div className="CBDBottom">
								<button
									onClick={() => {
										for (let item of cartArray) {
											if (item.slice(0, 3) === "CBD") {
												props.editProduct(item, 0);
											}
										}
									}}
								>
									Clear All CBD Products
								</button>
								<div className="CBDSubtotal">Total: ${cbdTotal.toFixed(2)}</div>
							</div>
						)}
						{!!terpTotal && (
							<div className="TerpCartItems">
								<h3>Terpene Products</h3>
								<div className="TerpCartHeader">
									<div className="TerpNameHead">Name</div>
									<div className="TerpSizeHead">Size</div>
									<div className="TerpPriceHead">Price</div>
									<div className="TerpQuantityHead">Quantity</div>
									<div className="TerpCostHead">Cost</div>
								</div>
								{terpArray.map((item) => {
									return (
										<div className="TerpCartItem">
											<div className="TerpName">{item.name}</div>
											<div className="TerpSize">{sizeFormat(item.size)}</div>
											<div className="TerpPrice">${item[item.size]}</div>
											<div className="TerpQuantity">{item.quantity}</div>
											<div className="TerpCost">${item.cost}</div>
										</div>
									);
								})}
							</div>
						)}
						{!!(cbdTotal && terpTotal) && (
							<div className="TerpBottom">
								<button
									onClick={() => {
										for (let item of cartArray) {
											if (item.slice(0, 3) === "TRP") {
												props.editProduct(item, 0);
											}
										}
									}}
								>
									Clear All Terpene Products
								</button>
								<div className="TerpSubtotal">Total: ${terpTotal.toFixed(2)}</div>
							</div>
						)}
						<div className="ItemsBottom" style={{ marginTop: "3%" }}>
							<button onClick={() => props.removeAllProducts()}>
								Empty Cart
							</button>
						</div>
					</div>
					<div className="OrderSummary">
						<h3>Order Summary</h3>
						<p>Item Subtotal: ${(cbdTotal + terpTotal).toFixed(2)}</p>
						<p>After Tax: ${((cbdTotal + terpTotal) * 1.3).toFixed(2)}</p>
						<Link to='/checkout'><button className='Checkout-Button'>Checkout</button></Link>
					</div>
				</div>
			</div>
		);
	}
}
