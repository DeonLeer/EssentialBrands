import React, { useState } from "react";
import Modal from "react-modal";
import "./Product.css";
export default function Products(props) {
	const [amount, setAmount] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const CloudImage = function () {
		if (props.product.images) {
			return (
				<img
					src={props.product.images}
					alt={props.product.name}
					className="productImage"
				/>
			);
		} else
			return (
				<img
					src={`https://res.cloudinary.com/deonleer/image/upload/v1625687784/${props.product.id}/1.png`}
					alt={props.product.name}
					className="productImage"
				/>
			);
	};

	return (
		<div className="Product">
			<h3>{props.product.name}</h3>
			<div className="product-image">
				<CloudImage />
			</div>
			<div className="product-info">
				CBD: {props.product.cbd_mg}mg THC:{" "}
				{props.product.tbh_percent === 30
					? `< 0.3%`
					: `${props.product.tbh_percent * 0.01}%`}
			</div>
			<div className="product-price">${props.product.price}.00</div>
			<div className="actions">
				<button onClick={() => setModalOpen(true)} className="productButton">
					More Info
				</button>

				<div className="ARButtons">
					<button
						className="ARButton"
						onClick={() => {
							amount > 0 ? setAmount(amount - 1) : setAmount(amount);
						}}
					>
						-
					</button>
					{amount}
					<button className="ARButton" onClick={() => setAmount(amount + 1)}>
						+
					</button>
				</div>
				<button
					className="productButton"
					disabled
					// onClick={() => {
					// 	let cartItemObj = props.product;
					// 	cartItemObj.quantity = amount;
					// 	props.addProduct(`CBD${props.product.id}`, cartItemObj);
					// }}
				>
					Add to Cart
				</button>
				<Modal isOpen={modalOpen} className="ProductModal">
					{props.product.description ? (
						<>
							<h2>Description</h2>
							<p>{props.product.description}</p>
						</>
					) : null}
					{props.product.ingredients ? (
						<>
							<h2>Ingredients</h2>
							<p>{props.product.ingredients}</p>
						</>
					) : null}
					<button className="productButton" onClick={() => setModalOpen(false)}>
						Close
					</button>
				</Modal>
			</div>
		</div>
	);
}
