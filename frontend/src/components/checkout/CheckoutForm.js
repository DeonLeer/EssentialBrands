import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	CardElement,
	useElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
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
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();
	const currentCart = props.currentCart;
	const cartArray = Object.keys(currentCart);
	let total = 0;
	for (let item in currentCart) {
		if (currentCart[item].fiveg) {
			total =
				total +
				currentCart[item][currentCart[item].size] * currentCart[item].quantity;
			console.log(total);
		} else {
			total = total + currentCart[item].cost * currentCart[item].quantity;
			console.log(total);
		}
	}

	useEffect(() => {
		axios({
			method: "post",
			url: "http://localhost:8080/payment",
			data: currentCart,
		})
			.then((res) => {
				setClientSecret(res.data.clientSecret)
			})
	}, []);

	const cardStyle = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: "Arial, sans-serif",
				fontSmoothing: "antialiased",
				fontSize: "16px",
				"::placeholder": {
					color: "#32325d",
				},
			},
			invalid: {
				color: "#fa755a",
				iconColor: "#fa755a",
			},
		},
	};

	const handleChange = async (event) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	async function handleSubmit(e) {
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
			},
		});
		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setProcessing(false);
			setSucceeded(true);
		}
	}

	return (
		<div className="checkoutPage">
			<h1 style={{ textAlign: "center" }}>Checkout</h1>
			<div className="checkoutItems">
				<table
					width="100%"
					cellSpacing={0}
					cellPadding={0}
					style={{ textAlign: "left", marginLeft: "2%" }}
				>
					<thead>
						<tr>
							<th>Product Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Subtotal</th>
							<th></th>
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
											: currentCart[product].cost}
									</td>
									<td>{currentCart[product].quantity}</td>
									<td>
										$
										{currentCart[product].fiveg
											? currentCart[product][currentCart[product].size] *
											  currentCart[product].quantity
											: currentCart[product].cost *
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
			<div className="checkoutForm">
				<form className="checkoutform" onSubmit={handleSubmit}>
					<CardElement
						id="card-element"
						options={cardStyle}
						onChange={handleChange}
					/>
					<button className="checkoutbutton" disabled={processing || disabled || succeeded} id="submit">
						<span id="button-text">
							{processing ? (
								<div className="spinner" id="spinner"></div>
							) : (
								"Pay now"
							)}
						</span>
					</button>
					{/* Show any error that happens when processing the payment */}
					{error && (
						<div className="card-error" role="alert">
							{error}
						</div>
					)}
					<p className={succeeded ? "result-message" : "result-message hidden"}>
						Payment succeeded, see the result in your
						<a href={`https://dashboard.stripe.com/test/payments`}>
							{" "}
							Stripe dashboard.
						</a>{" "}
						Refresh the page to pay again.
					</p>
				</form>
			</div>
		</div>
	);
}
