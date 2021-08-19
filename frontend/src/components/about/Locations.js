import React from "react";
import Map from "./Map";
import './Locations.css'

export default function Location(props) {
	const locations = [
		{
			name: "Terpene Lab LA",
			address: "320 Wall Street Suite D, Los Angeles, CA 90013",
			lat: 34.04736,
			lng: -118.24398,
			center: {
				lat: 34.04736,
				lng: -118.24398,
			},
		},
		{
			name: "Terpene Lab Miami",
			address: "413 NW 27th St, Miami, FL 33127",
			lat: 25.80232,
			lng: -80.20247,
			center: {
				lat: 25.80232,
				lng: -80.20247,
			},
		},
	];

	return (
		<div className="Locations">
      <h1>Our Locations</h1>
			<Map location={locations[0]} />
			<Map location={locations[1]} />
		</div>
	);
}
