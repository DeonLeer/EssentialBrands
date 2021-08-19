import React from "react";
import { Link } from "react-router-dom";
import terpenesImage from "../images/terpene-stock1.jpeg";
import leafAndBottleImage from "../images/cbd-stock5.jpeg";
import creamImage from "../images/cbd-stock6.jpeg";
import "./Home.css";
export default function Home(props) {
	return (
		<div className="Home">
			<div className="HomeTitle">
				<h1>WELCOME TO ESSENTIAL BRANDS</h1>
			</div>
			<div className="content-boxes">
				<div className="content-box">
					<img
						className="content-box-image"
						src={terpenesImage}
						alt="terpenes"
					/>
					<Link to="/learn/terpenes" className="box-link">
						<div className="content-box-text">Learn About Terpenes</div>
					</Link>
				</div>
				<div className="content-box">
					<img
						className="content-box-image"
						src={leafAndBottleImage}
						alt="where to find us"
					/>
					<Link to="/about/locations" className="box-link">
						<div className="content-box-text">Where To Find Us</div>
					</Link>
				</div>
				<div className="content-box">
					<img
						className="content-box-image"
						src={creamImage}
						alt="our products"
					/>
					<Link to="/products" className="box-link">
						<div className="content-box-text">Our Products</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
