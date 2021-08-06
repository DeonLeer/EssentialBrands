import React, { useState } from "react";
import AdressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import "./CheckoutForm.css";

const sizeFormat = (size) => {
	let fixedSize;
	switch (size) {
		case "fiveg":
			fixedSize = "5 Grams of ";
			break;
		case "twentyg":
			fixedSize = "20 Grams of ";
			break;
		case "fiftyg":
			fixedSize = "50 Grams of ";
			break;
		case "hundredg":
			fixedSize = "100 Grams of ";
			break;
		case "fivehundg":
			fixedSize = "500 Grams of ";
			break;
		case "thousandg":
			fixedSize = "1000 Grams of ";
			break;
		default:
			fixedSize = "N/A";
	}
	return fixedSize;
};

export default function CheckoutForm(props) {
	const currentCart = props.getCart();
	const cartArray = Object.keys(currentCart);
	const formattedCart = [];
	for (let item in currentCart) {
		if (currentCart[item].fiveg) {
			formattedCart.push({
				price: currentCart[item][currentCart[item].size],
				name: currentCart[item].name,
				id: currentCart[item].id,
				quantity: currentCart[item].quantity,
			});
		} else {
			formattedCart.push({
				price: currentCart[item].price,
				name: currentCart[item].name,
				id: currentCart[item].id,
				quantity: currentCart[item].quantity,
			});
		}
	}
	let total = 0;
	for(let item of formattedCart) {
		total = total + item.price*item.quantity;
	}

	const [validShipping, setValidShipping] = useState(false);

	return (
		<div className="checkoutPage">
			<h1 style={{ textAlign: "center", width: "100vw" }}>Checkout</h1>
			<div className="checkoutItems">
				<table
					className="checkoutTable"
				>
					<thead>
						<tr>
							<th>Product Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Subtotal</th>
						</tr>
					</thead>
					<tbody>
						{!cartArray.length && "Your Cart Is Empty!!"}
						{cartArray.map((product) => {
							return (
								<tr key={currentCart[product].id}>
									<td>
										{currentCart[product].fiveg
											? sizeFormat(currentCart[product].size) +
											  currentCart[product].name
											: currentCart[product].name}
									</td>
									<td>
										$
										{currentCart[product].fiveg
											? currentCart[product][currentCart[product].size]
											: currentCart[product].price}
									</td>
									<td>{currentCart[product].quantity}</td>
									<td>
										$
										{currentCart[product].fiveg
											? currentCart[product][currentCart[product].size] *
											  currentCart[product].quantity
											: currentCart[product].price *
											  currentCart[product].quantity}
									</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot>
						<tr>
							<td
								colSpan={3}
								className="total-label"
								style={{ textAlign: "right", marginRight: "5%" }}
							>
								Total:
							</td>
							<td className="total">${total}</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className="checkoutForms">
				<div className="addressForm">
					<AdressForm
						setValidShipping={setValidShipping}
					 />
				</div>
				<div className="paymentForm">
					{validShipping ? (
						<PaymentForm
						 cart={formattedCart} />
					) : null}
				</div>
			</div>
		</div>
	);
}
